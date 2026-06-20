// Filters out near-solid-color decorative shapes from the extracted PDF
// images (e.g. background blobs used purely for page layout), keeping only
// photographic content. Writes public/images/extracted/keep-manifest.json.
import fs from "fs";
import path from "path";
import { PNG } from "pngjs";

const dir = path.resolve("public/images/extracted");
const files = fs.readdirSync(dir).filter((f) => f.endsWith(".png"));

const kept = [];
const dropped = [];

for (const file of files) {
  const buffer = fs.readFileSync(path.join(dir, file));
  const png = PNG.sync.read(buffer);
  const { width, height, data } = png;

  // Sample a grid of pixels and compute stddev of luminance
  const samples = [];
  const stepX = Math.max(1, Math.floor(width / 24));
  const stepY = Math.max(1, Math.floor(height / 24));
  for (let y = 0; y < height; y += stepY) {
    for (let x = 0; x < width; x += stepX) {
      const idx = (y * width + x) * 4;
      const lum = 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];
      samples.push(lum);
    }
  }
  const mean = samples.reduce((a, b) => a + b, 0) / samples.length;
  const variance =
    samples.reduce((a, b) => a + (b - mean) ** 2, 0) / samples.length;
  const stddev = Math.sqrt(variance);
  const nearMeanFraction =
    samples.filter((v) => Math.abs(v - mean) < 12).length / samples.length;

  if (stddev < 8 || nearMeanFraction > 0.85) {
    dropped.push({ file, stddev: Math.round(stddev), nearMeanFraction: Math.round(nearMeanFraction * 100) });
  } else {
    kept.push({ file, width, height, stddev: Math.round(stddev) });
  }
}

fs.writeFileSync(
  path.join(dir, "keep-manifest.json"),
  JSON.stringify(kept, null, 2)
);

console.log(`Kept ${kept.length} photographic images, dropped ${dropped.length} flat/decorative ones.`);
console.log("Dropped:", dropped.map((d) => d.file).join(", "));

import sharp from "sharp";
import { v1 } from "uuid";

export function processImage(image: Buffer, height: number, width: number) {
  const filename = `${v1()}.jpg`;
  const filepath = `images/${filename}`;
  sharp(image).resize(width, height).toFile(filepath);
  return filename;
}

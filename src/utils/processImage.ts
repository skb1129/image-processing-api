import sharp from "sharp";
import { v1 } from "uuid";

export async function processImage(image: Buffer, height: number, width: number) {
  const filename = `${v1()}.jpg`;
  const filepath = `images/${filename}`;
  await sharp(image).resize(width, height).toFile(filepath);
  return { filename, filepath };
}

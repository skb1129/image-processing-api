import fs from "fs";
import path from "path";
import sharp from "sharp";

import { processImage } from "../../src/utils";

describe("Test Util: processImage", () => {
  const file = fs.readFileSync(path.resolve("tests/encenadaport.jpg"));
  const [height, width] = [200, 320];
  test("Image resized as required", async () => {
    const { filepath } = await processImage(file, 200, 320);
    const processedFile = fs.readFileSync(path.resolve(filepath));
    const info = await sharp(processedFile).metadata();
    expect(info.height).toBe(height);
    expect(info.width).toBe(width);
  });
});

import { Router } from "express";
import { processImage } from "../utils";

const api = Router();

api.post("/", async (req, res) => {
  if (req.headers["content-type"] !== "image/jpeg") {
    res.status(400).send("Only JPEG images supported.");
    return;
  }
  const height = Number(req.query.height);
  const width = Number(req.query.width);
  if (Number.isNaN(height) || Number.isNaN(width)) {
    res
      .status(400)
      .send('Query parameters "height" and "width" should be present and they should have a numeric value.');
    return;
  }
  try {
    const { filename } = await processImage(req.body, height, width);
    res.send({ filename });
  } catch (e) {
    res.status(500).send("Error while processing the image.");
  }
});

export { api };

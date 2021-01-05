import express from "express";

import { image } from "./apis";
import { fileParser } from "./utils";

const app = express();
const PORT = 8000;

app.use(express.static("images"));

app.use(fileParser);

app.use("/image", image);

app.listen(PORT, () => {
  console.log("HTTP server running on port:", PORT);
});

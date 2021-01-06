import express from "express";

import { image } from "./apis";
import { fileParser } from "./utils";

const app = express();

app.use(express.static("images"));

app.use(fileParser);

app.use("/image", image);

export default app;

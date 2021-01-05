import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log("HTTP server running on port:", PORT);
});

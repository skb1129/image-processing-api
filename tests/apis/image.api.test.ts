import fs from "fs";
import path from "path";
import supertest from "supertest";

import app from "../../src/app";

describe("Test API: Image", () => {
  const request = supertest(app);
  const file = fs.readFileSync(path.resolve("tests/encenadaport.jpg"));
  let image: string;

  test("POST /image/", async () => {
    const res = await request
      .post("/image/?width=320&height=200")
      .set("content-type", "image/jpeg")
      .set("connection", "keep-alive")
      .send(file);
    expect(res.status).toBe(200);
    expect(res.body.filename).toBeTruthy();
    image = res.body.filename;
  });

  test("GET /{image}", async () => {
    const res = await request.get(`/${image}`);
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toBe("image/jpeg");
  });
});

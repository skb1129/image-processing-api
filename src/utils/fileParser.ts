import { NextFunction, Request, Response } from "express";

export function fileParser(req: Request, res: Response, next: NextFunction) {
  let data = Buffer.from("");
  req.on("data", function (chunk) {
    data = Buffer.concat([data, chunk]);
  });
  req.on("end", function () {
    req.body = data;
    next();
  });
}

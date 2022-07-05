import express, { Request, Response } from "express";

const routerDrivers = express.Router();

routerDrivers.get("/", (req: Request, res: Response) => {
  res.send("drivers");
});

export default routerDrivers;

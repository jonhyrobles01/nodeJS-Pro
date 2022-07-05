import express, { Request, Response } from "express";

const routerDrivers = express.Router();
const uuid = "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed";

routerDrivers.get("/", (req: Request, res: Response) => {
  res.send("drivers");
});

export default routerDrivers;
export { uuid };

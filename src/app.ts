import { DriversRouter } from "@drivers/interfaces";
import { UsersRouter } from "@users/interfaces/http";

import { v4 as uuidV4 } from "uuid";
import express, { NextFunction, Request, Response } from "express";

class App {
  expressApp: express.Application;

  constructor() {
    this.expressApp = express();
    this.mountMiddlewares();
    this.mountHealthCheck();
    this.mountRoutes();
  }

  mountMiddlewares(): void {
    this.expressApp.use(express.json());
    this.expressApp.use(express.urlencoded({ extended: true }));
    this.expressApp.use((req: Request, res: Response, next: NextFunction) => {
      req.traceId = uuidV4();

      next();
    });
  }

  mountRoutes(): void {
    this.expressApp.use("/users", new UsersRouter().expressRouter);
    this.expressApp.use("/drivers", new DriversRouter().expressRouter);
  }

  mountHealthCheck(): void {
    this.expressApp.get("/", (req: Request, res: Response) => {
      res.send("All is good!");
    });

    this.expressApp.get("/healtcheck", (req: Request, res: Response) => {
      res.send("All is good!");
    });
  }
}

export default new App().expressApp;

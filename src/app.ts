import { v4 as uuidV4 } from "uuid";
import express, { Request, Response } from "express";
import usersRoutes from "./users/interfaces/http/users.route";
import driversRoutes from "./drivers/interfaces/drivers.route";

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
    this.expressApp.use((req, res, next) => {
      req.traceId = uuidV4();

      next();
    });
  }

  mountRoutes(): void {
    this.expressApp.use("/users", new usersRoutes().expressRouter);
    this.expressApp.use("/drivers", new driversRoutes().expressRouter);
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

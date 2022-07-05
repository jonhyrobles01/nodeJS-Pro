import express, { Request, Response } from "express";
import usersRoutes from "./users/interfaces/http/users.route";
import driversRoutes from "./drivers/interfaces/drivers.route";

class App {
  expressApp: express.Application;

  constructor() {
    this.expressApp = express();
    this.mountHealthCheck();
    this.mountRoutes();
  }

  mountRoutes(): void {
    this.expressApp.use("/users", new usersRoutes().expressRouter);
    this.expressApp.use("/drivers", driversRoutes);
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

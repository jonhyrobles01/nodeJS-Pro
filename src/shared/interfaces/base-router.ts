import express from "express";

export abstract class BaseRouter {
  expressRouter: express.Router;

  constructor(private controller: any) {
    this.expressRouter = express.Router();
    this.mountBaseRoutes();
    this.mountRoutes();
  }

  abstract mountRoutes(): void;

  mountBaseRoutes(): void {
    this.expressRouter.get("/", this.controller.list);
    this.expressRouter.post("/", this.controller.add);
    this.expressRouter.put("/", this.controller.update);
    this.expressRouter.delete("/:id", this.controller.delete);
    this.expressRouter.get("/:id", this.controller.findOne);
  }
}

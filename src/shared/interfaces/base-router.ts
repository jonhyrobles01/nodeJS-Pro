import express from "express";

export abstract class BaseRouter {
  expressRouter: express.Router;

  constructor() {
    this.expressRouter = express.Router();
    this.mountRoutes();
  }

  abstract mountRoutes(): void;
}

import express from "express";
import { UserController } from "./user.controller";
import { UsersAplication } from "../../aplication/users.aplication";
import { BaseRouter } from "../../../shared/interfaces/base-router";
import { UsersInfrastructure } from "../../infrastructure/users.infrastructure";

const usersInfrastructure = new UsersInfrastructure();
const userAplication = new UsersAplication(usersInfrastructure);
const userController = new UserController(userAplication);

export default class extends BaseRouter {
  constructor() {
    super();
  }

  mountRoutes() {
    this.expressRouter.get("/", userController.list);
    this.expressRouter.post("/", userController.add);
    this.expressRouter.put("/", userController.update);
    this.expressRouter.delete("/:id", userController.delete);
    this.expressRouter.get("/:id", userController.findById);
  }
}

// routerUsers.get("/details", (req: Request, res: Response) => {
//   const user = {
//     name: "Jonathan",
//     age: 30,
//   };

//   // res.status(200).type("application/json").send(JSON.stringify(user));
//   res.json(user);
// });

// export default routerUsers;

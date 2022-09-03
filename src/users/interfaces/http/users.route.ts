import { UserController } from "./user.controller";
import { UsersAplication } from "../../aplication/users.aplication";
import { BaseRouter } from "../../../shared/interfaces/base-router";
import { UsersInfrastructure } from "../../infrastructure/users.infrastructure";

const usersInfrastructure = new UsersInfrastructure();
const userAplication = new UsersAplication(usersInfrastructure);
const userController = new UserController(userAplication);

export default class extends BaseRouter {
  constructor() {
    super(userController);
  }

  mountRoutes() {}
}

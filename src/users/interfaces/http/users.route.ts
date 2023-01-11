import { BaseRouter } from "@shared/interfaces";
import { UsersAplication } from "@users/aplication";
import { UsersInfrastructure } from "@users/infrastructure";
import { UserController } from "@users/interfaces/http/user.controller";

const usersInfrastructure = new UsersInfrastructure();
const userAplication = new UsersAplication(usersInfrastructure);
const userController = new UserController(userAplication);

export class UsersRouter extends BaseRouter {
  constructor() {
    super(userController);
  }

  mountRoutes() {}
}

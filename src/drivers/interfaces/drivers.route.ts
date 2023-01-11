import { BaseRouter } from "@shared/interfaces";
import { DriversAplication } from "@drivers/aplication";
import { DriversInfrastructure } from "@drivers/infrastructure";
import { DriverController } from "@drivers/interfaces/driver.controller";

const driverInfrastructure = new DriversInfrastructure();
const driverAplication = new DriversAplication(driverInfrastructure);
const driverController = new DriverController(driverAplication);

export class DriversRouter extends BaseRouter {
  constructor() {
    super(driverController);
  }

  mountRoutes() {}
}

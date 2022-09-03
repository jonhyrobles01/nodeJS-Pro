import { DriverController } from "./driver.controller";
import { BaseRouter } from "../../shared/interfaces/base-router";
import { DriversAplication } from "../aplication/drivers.aplication";
import { DriversInfrastructure } from "../infrastructure/driver.infrastructure";

const driverInfrastructure = new DriversInfrastructure();
const driverAplication = new DriversAplication(driverInfrastructure);
const driverController = new DriverController(driverAplication);

export default class extends BaseRouter {
  constructor() {
    super(driverController);
  }

  mountRoutes() {}
}

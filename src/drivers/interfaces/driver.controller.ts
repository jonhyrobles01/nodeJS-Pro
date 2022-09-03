import { Request, Response } from "express";
import { DriverFactory } from "../domain/models/driver.factory";
import { DriversAplication } from "../aplication/drivers.aplication";

export class DriverController {
  constructor(private driverAplication: DriversAplication) {
    this.add = this.add.bind(this);
    this.list = this.list.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.findOne = this.findOne.bind(this);
  }

  async list(req: Request, res: Response) {
    const drivers = await this.driverAplication.findAll({ isActive: true });

    res.json(drivers);
  }

  async add(req: Request, res: Response) {
    const driverModel = new DriverFactory().create(req.body);
    const driver = await this.driverAplication.add(driverModel);

    res.json(driver);
  }

  async update(req: Request, res: Response) {
    const driverToInsert = { id: req.params.id, ...req.body };
    const driverModel = new DriverFactory().create(driverToInsert);
    const driver = await this.driverAplication.update(driverModel);

    res.json(driver);
  }

  async delete(req: Request, res: Response) {
    const user = await this.driverAplication.delete(+req.params.id);

    res.json(user);
  }

  async findOne(req: Request, res: Response) {
    const user = await this.driverAplication.findOne(+req.params.id);

    res.json(user);
  }
}

import { DriverDto } from "./dtos/list.dto";
import { DriversModel } from "../domain/models/driver.model";
import Result from "../../shared/aplication/interfaces/result.interface";
import { BaseAplication } from "../../shared/aplication/base-aplication";
import { DriversRepository } from "../domain/repositories/drivers.repository";

export class DriversAplication extends BaseAplication<DriversModel> {
  constructor(driversRepository: DriversRepository) {
    super(driversRepository, new DriverDto());
  }

  async reportByDriver(id: number): Promise<Result<DriversModel>> {
    return await this.findOne(id);
  }
}

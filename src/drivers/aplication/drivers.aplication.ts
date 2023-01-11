import { BaseAplication } from "@shared/aplication";
import { DriverDto } from "@drivers/aplication/dtos";
import { DriversModel } from "@drivers/domain/models";
import { Result } from "@shared/aplication/interfaces";
import { DriversRepository } from "@drivers/domain/repositories";

export class DriversAplication extends BaseAplication<DriversModel> {
  constructor(driversRepository: DriversRepository) {
    super(driversRepository, new DriverDto());
  }

  async reportByDriver(id: number): Promise<Result<DriversModel>> {
    return await this.findOne(id);
  }
}

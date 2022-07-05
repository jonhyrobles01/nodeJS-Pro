import { DriversEntity } from "../domain/entities/driver.entity";
import { DriversRepository } from "../domain/repositories/drivers.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";

export class DriversInfrastructure
  extends BaseInfrastructure<DriversEntity, number>
  implements DriversRepository
{
  reportByDriver(id: number): Promise<DriversEntity> {
    throw new Error("Method not implemented.");
  }
}

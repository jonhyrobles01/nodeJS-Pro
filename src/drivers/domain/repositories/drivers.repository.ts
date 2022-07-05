import { DriversEntity } from "../entities/driver.entity";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";

export interface DriversRepository
  extends BaseRepository<DriversEntity, number> {
  reportByDriver(id: number): Promise<DriversEntity>;
}

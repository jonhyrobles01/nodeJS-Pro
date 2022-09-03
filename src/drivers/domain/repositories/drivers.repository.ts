import { DriversModel } from "../models/driver.model";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";

export interface DriversRepository extends BaseRepository<DriversModel> {
  reportByDriver(id: number): Promise<DriversModel>;
}

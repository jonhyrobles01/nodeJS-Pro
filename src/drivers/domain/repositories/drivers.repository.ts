import { DriversModel } from "@drivers/domain/models";
import { BaseRepository } from "@shared/domain/repositories";

export interface DriversRepository extends BaseRepository<DriversModel> {
  reportByDriver(id: number): Promise<DriversModel>;
}

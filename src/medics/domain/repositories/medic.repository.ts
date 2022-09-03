import { MedicModel } from "../models/medic.model";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";
export interface MedicRepository extends BaseRepository<MedicModel> {
  reportByMedic(id: number): Promise<MedicModel>;
}

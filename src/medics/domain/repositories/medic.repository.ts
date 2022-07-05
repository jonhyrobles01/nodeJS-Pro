import { MedicEntity } from "../entities/medic.entity";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";

export interface MedicRepository extends BaseRepository<MedicEntity, number> {
  reportByMedic(id: number): Promise<MedicEntity>;
}

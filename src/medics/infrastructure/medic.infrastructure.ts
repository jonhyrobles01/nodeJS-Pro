import { MedicEntity } from "../domain/entities/medic.entity";
import { MedicRepository } from "../domain/repositories/medic.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";

export class MedicInfrastructure
  extends BaseInfrastructure<MedicEntity, number>
  implements MedicRepository
{
  reportByMedic(id: number): Promise<MedicEntity> {
    throw new Error("Method not implemented.");
  }
}

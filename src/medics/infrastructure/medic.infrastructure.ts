import { MedicEntity } from "../domain/models/medic.entity";
import { MedicRepository } from "../domain/repositories/medic.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";

export class MedicInfrastructure
  extends BaseInfrastructure<MedicEntity>
  implements MedicRepository
{
  constructor() {
    super(MedicEntity);
  }

  reportByMedic(id: number): Promise<MedicEntity> {
    throw new Error("Method not implemented.");
  }
}

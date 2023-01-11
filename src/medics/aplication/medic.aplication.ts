import { BaseAplication } from "@shared/aplication";
import { Result } from "@shared/aplication/interfaces";
import { MedicModel } from "../domain/models/medic.model";
import { MedicRepository } from "../domain/repositories/medic.repository";

export class MedicAplication extends BaseAplication<MedicModel> {
  constructor(medicRepository: MedicRepository) {
    super(medicRepository);
  }

  async reportByMedic(id: number): Promise<Result<MedicModel>> {
    return await this.findOne(id);
  }
}

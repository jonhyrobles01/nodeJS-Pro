import { MedicEntity } from "../domain/entities/medic.entity";
import { MedicRepository } from "../domain/repositories/medic.repository";

export class MedicAplication {
  constructor(private medicRepository: MedicRepository) {}

  async add(driver: MedicEntity) {
    return await this.medicRepository.insert(driver);
  }

  async update(driver: MedicEntity): Promise<MedicEntity> {
    return await this.medicRepository.update(driver);
  }

  async delete(id: number): Promise<boolean> {
    return await this.medicRepository.delete(id);
  }

  async findById(id: number): Promise<MedicEntity> {
    return await this.medicRepository.findById(id);
  }

  async findAll(): Promise<MedicEntity[]> {
    return await this.medicRepository.findAll();
  }

  async reportByDriver(id: number): Promise<MedicEntity> {
    return await this.medicRepository.reportByMedic(id);
  }
}

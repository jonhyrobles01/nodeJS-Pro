import { DriversEntity } from "../domain/entities/driver.entity";
import { DriversRepository } from "../domain/repositories/drivers.repository";

export class DriversAplication {
  constructor(private driversRepository: DriversRepository) {}

  async add(driver: DriversEntity) {
    return await this.driversRepository.insert(driver);
  }

  async update(driver: DriversEntity): Promise<DriversEntity> {
    return await this.driversRepository.update(driver);
  }

  async delete(id: number): Promise<boolean> {
    return await this.driversRepository.delete(id);
  }

  async findById(id: number): Promise<DriversEntity> {
    return await this.driversRepository.findById(id);
  }

  async findAll(): Promise<DriversEntity[]> {
    return await this.driversRepository.findAll();
  }

  async reportByDriver(id: number): Promise<DriversEntity> {
    return await this.driversRepository.reportByDriver(id);
  }
}

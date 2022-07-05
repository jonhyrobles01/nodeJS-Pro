import { HistoryRepository } from "../domain/repositories/history.repository";
import { HistoryEntity } from "../domain/entities/history.entity";

export class HistoryAplication {
  constructor(private historyRepository: HistoryRepository) {}

  async add(history: HistoryEntity) {
    return await this.historyRepository.insert(history);
  }

  async update(history: HistoryEntity): Promise<HistoryEntity> {
    return await this.historyRepository.update(history);
  }

  async delete(id: number): Promise<boolean> {
    return await this.historyRepository.delete(id);
  }

  async findById(id: number): Promise<HistoryEntity> {
    return await this.historyRepository.findById(id);
  }

  async findAll(): Promise<HistoryEntity[]> {
    return await this.historyRepository.findAll();
  }

  async reportByDriver(id: number): Promise<HistoryEntity> {
    return await this.historyRepository.reportByHistory(id);
  }
}

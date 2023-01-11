import { BaseAplication } from "@shared/aplication";
import { Result } from "@shared/aplication/interfaces";
import { HistoryModel } from "../domain/models/history.model";
import { HistoryRepository } from "../domain/repositories/history.repository";

export class HistoryAplication extends BaseAplication<HistoryModel> {
  constructor(historyRepository: HistoryRepository) {
    super(historyRepository);
  }

  async reportByHistory(id: number): Promise<Result<HistoryModel>> {
    return await this.findOne(id);
  }
}

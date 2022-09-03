import { HistoryModel } from "../models/history.model";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";

export interface HistoryRepository extends BaseRepository<HistoryModel> {
  reportByHistory(id: number): Promise<HistoryModel>;
}

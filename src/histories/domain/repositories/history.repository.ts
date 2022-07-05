import { HistoryEntity } from "../entities/history.entity";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";

export interface HistoryRepository
  extends BaseRepository<HistoryEntity, number> {
  reportByHistory(id: number): Promise<HistoryEntity>;
}

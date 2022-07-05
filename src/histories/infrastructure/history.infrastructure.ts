import { HistoryEntity } from "../domain/entities/history.entity";
import { HistoryRepository } from "../domain/repositories/history.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";

export class HistoryInfrastructure
  extends BaseInfrastructure<HistoryEntity, number>
  implements HistoryRepository
{
  reportByHistory(id: number): Promise<HistoryEntity> {
    throw new Error("Method not implemented.");
  }
}

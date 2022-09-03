import { HistoryModel } from "../domain/models/history.model";
import { HistoryEntity } from "../domain/models/history.entity";
import { HistoryRepository } from "../domain/repositories/history.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";

export class HistoryInfrastructure
  extends BaseInfrastructure<HistoryModel>
  implements HistoryRepository
{
  constructor() {
    super(HistoryEntity);
  }

  reportByHistory(id: number): Promise<HistoryModel> {
    throw new Error("Method not implemented.");
  }
}

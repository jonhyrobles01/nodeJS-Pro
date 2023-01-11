import { BaseInfrastructure } from "@shared/infrastructure";
import { DriversRepository } from "@drivers/domain/repositories";
import { DriversModel, DriversEntity } from "@drivers/domain/models";

export class DriversInfrastructure
  extends BaseInfrastructure<DriversModel>
  implements DriversRepository
{
  constructor() {
    // desde BaseInfraEstructure esta tomando los metodos comunes para ejecutar
    super(DriversEntity);
  }

  // La capa de infraestructura nos ayuda a relacionar la capa de aplicacion con las
  // librerias externas o implementaciones externas ya que la capa de aplicacion solo
  // reconocera la interfaz del repositorio que estamos implementando

  reportByDriver(id: number): Promise<DriversModel> {
    throw new Error("Method not implemented.");
  }
}

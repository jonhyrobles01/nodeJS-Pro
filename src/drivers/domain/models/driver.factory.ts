import { DriversModel } from "./driver.model";

export interface IDriver {
  id: number;
  name: string;
  lastname: string;
  licenseDriver: string;
  isActive: boolean;
}

export class DriverFactory {
  create(driver: Partial<IDriver>) {
    const id = driver.id || 0;
    const name = driver.name;
    const lastname = driver.lastname;
    const licenseDriver = driver.licenseDriver;
    const isActive = driver.isActive || true;

    return new DriversModel(id, name, lastname, licenseDriver, isActive);
  }
}

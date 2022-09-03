import { DriversModel } from "../../domain/models/driver.model";
import { DTOAbstract } from "../../../shared/aplication/dtos/abstract.dto";
import Result from "../../../shared/aplication/interfaces/result.interface";

const FilterFieldActiveInDriver = (driver: DriversModel) => ({
  id: driver.id,
  name: driver.name,
  lastname: driver.lastname,
  licenseDriver: driver.licenseDriver,
});

export class DriverDto extends DTOAbstract<DriversModel> {
  callback(result: Result<DriversModel>): Result<DriversModel> {
    const data = result.payload.data;

    if (Array.isArray(data)) {
      result.payload.data = data.map(FilterFieldActiveInDriver);
    } else {
      delete (result.payload.data as DriversModel).isActive;
    }

    return result;
  }
}

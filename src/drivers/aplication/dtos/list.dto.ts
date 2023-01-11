import { Result } from "@shared/aplication/interfaces";
import { DriversModel } from "@drivers/domain/models";
import { DTOAbstract } from "@shared/aplication/dtos";
import { DriverTransformDto } from "@drivers/aplication/dtos";

import { plainToClass } from "class-transformer";

export class DriverDto extends DTOAbstract<DriversModel> {
  callback(result: Result<DriversModel>): Result<DriversModel> {
    const data = result.payload.data;
    result.payload.data = plainToClass(DriverTransformDto, data);

    return result;
  }
}

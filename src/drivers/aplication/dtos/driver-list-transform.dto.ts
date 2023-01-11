import { Exclude, Expose } from "class-transformer";

@Exclude()
export class DriverTransformDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  lastname: string;

  @Expose()
  licenseDriver: string;
}

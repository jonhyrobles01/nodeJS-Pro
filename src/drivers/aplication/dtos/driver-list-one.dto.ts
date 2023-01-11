import { Exclude, Expose } from "class-transformer";

@Exclude()
export class DriverListOneDto {
  @Expose()
  id: number;

  name: string;
  lastname: string;

  @Expose({ name: "fullname" })
  getFullname() {
    return `${this.name} ${this.lastname}`;
  }

  @Expose()
  licenseDriver: string;
}

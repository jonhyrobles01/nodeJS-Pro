export class DriversModel {
  constructor(
    public id = 0,
    public name: string,
    public lastname: string,
    public licenseDriver: string,
    public isActive = true
  ) {}
}

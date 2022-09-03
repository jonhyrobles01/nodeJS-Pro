import { RefreshTokenVo } from "../value-objects/refresh-token.vo";

export class UserModel {
  constructor(
    public id: number,
    public name: string,
    public lastname: string,
    public age: number,
    public password: string,
    public refreshToken: RefreshTokenVo
  ) {}
}

import { RefreshTokenVo } from "../value-objects/refresh-token.vo";

export class UserEntity {
  constructor(
    public id: number,
    public name: string,
    public lastname: string,
    public age: number,
    public password: string,
    public refreshToken: RefreshTokenVo,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date
  ) {}
}

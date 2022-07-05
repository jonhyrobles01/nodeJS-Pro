import { UserEntity } from "./user.entity";
import { RefreshTokenVo } from "../value-objects/refresh-token.vo";

export class UsersFactory {
  create(
    id: number,
    name: string,
    lastname: string,
    age: number,
    password: string,
    refreshToken: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
  ) {
    if (updatedAt < createdAt || deletedAt < createdAt) {
      throw new Error("Invalid date");
    }

    if ((name.trim() === "", name.trim().length < 4)) {
      throw new Error("Invalid name");
    }

    return new UserEntity(
      id,
      name,
      lastname,
      age,
      password,
      RefreshTokenVo.create(refreshToken),
      createdAt,
      updatedAt,
      deletedAt
    );
  }
}

// const userFactory = new UsersFactory();
// const userEntity = userFactory.create(
//   1,
//   "Jonathan",
//   "Robles",
//   31,
//   "12345",
//   "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
//   new Date(),
//   new Date(),
//   new Date()
// );
// userEntity.refreshToken.Value

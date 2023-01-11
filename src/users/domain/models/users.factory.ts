import { UserModel } from "@users/domain/models";
import { RefreshTokenVo } from "@users/domain/value-objects";

export interface IUser {
  id: number;
  name: string;
  lastname: string;
  age: number;
  password: string;
}

export class UsersFactory {
  create(user: Partial<IUser>) {
    const id = user.id || null;
    const name = user.name;
    const lastname = user.lastname;
    const age = user.age;
    const password = user.password;

    if ((name.trim() === "", name.trim().length < 4)) {
      throw new Error("Invalid name");
    }

    return new UserModel(
      id,
      name,
      lastname,
      age,
      password,
      RefreshTokenVo.create("630eb68f-e0fa-5ecc-887a-7c7a62614681")
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

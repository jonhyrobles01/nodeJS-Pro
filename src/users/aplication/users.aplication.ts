import { UserModel } from "../domain/models/user.model";
import { BaseAplication } from "../../shared/aplication/base-aplication";
import { UsersRepository } from "../domain/repositories/users.repository";

export class UsersAplication extends BaseAplication<UserModel> {
  constructor(usersRepository: UsersRepository) {
    super(usersRepository);
  }
}

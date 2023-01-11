import { UserModel } from "@users/domain/models";
import { BaseAplication } from "@shared/aplication";
import { UsersRepository } from "@users/domain/repositories";

export class UsersAplication extends BaseAplication<UserModel> {
  constructor(usersRepository: UsersRepository) {
    super(usersRepository);
  }
}

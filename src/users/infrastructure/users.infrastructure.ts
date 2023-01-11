import { BaseInfrastructure } from "@shared/infrastructure";
import { UsersRepository } from "@users/domain/repositories";
import { UserModel, UserEntity } from "@users/domain/models";

export class UsersInfrastructure
  extends BaseInfrastructure<UserModel>
  implements UsersRepository
{
  constructor() {
    super(UserEntity);
  }
}

import { UserModel } from "../domain/models/user.model";
import { UserEntity } from "../domain/models/user.entity";
import { UsersRepository } from "../domain/repositories/users.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";

export class UsersInfrastructure
  extends BaseInfrastructure<UserModel>
  implements UsersRepository
{
  constructor() {
    super(UserEntity);
  }
}

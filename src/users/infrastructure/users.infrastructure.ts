import { UserEntity } from "../domain/entities/user.entity";
import { UsersRepository } from "../domain/repositories/users.repository";
import { BaseInfrastructure } from "../../shared/infrastructure/base-infrastructure";

export class UsersInfrastructure
  extends BaseInfrastructure<UserEntity, string>
  implements UsersRepository {}

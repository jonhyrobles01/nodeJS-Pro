import { UserEntity } from "../entities/user.entity";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";

export interface UsersRepository extends BaseRepository<UserEntity, string> {}

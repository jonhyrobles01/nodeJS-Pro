import { UserModel } from "@users/domain/models";
import { BaseRepository } from "@shared/domain/repositories";

export interface UsersRepository extends BaseRepository<UserModel> {}

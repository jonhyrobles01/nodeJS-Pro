import { UserModel } from "../models/user.model";
import { BaseRepository } from "../../../shared/domain/repositories/base-repository";

export interface UsersRepository extends BaseRepository<UserModel> {}

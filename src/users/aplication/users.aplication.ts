import { UserEntity } from "../domain/entities/user.entity";
import { UsersRepository } from "../domain/repositories/users.repository";

export class UsersAplication {
  constructor(private usersRepository: UsersRepository) {}

  async add(user: UserEntity) {
    return await this.usersRepository.insert(user);
  }

  async update(user: UserEntity): Promise<UserEntity> {
    return await this.usersRepository.update(user);
  }

  async delete(id: string): Promise<boolean> {
    return await this.usersRepository.delete(id);
  }

  async findById(id: string): Promise<UserEntity> {
    return await this.usersRepository.findById(id);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.findAll();
  }
}

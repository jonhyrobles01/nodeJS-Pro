import { DTOAbstract } from "@shared/aplication/dtos";
import { Result } from "@shared/aplication/interfaces";
import { BaseRepository } from "@shared/domain/repositories";

export class BaseAplication<T> {
  constructor(
    private repository: BaseRepository<T>,
    private dto?: DTOAbstract<T>
  ) {}

  async add(entity: T): Promise<Result<T>> {
    return await this.repository.insert(entity);
  }

  async update(entity: T): Promise<Result<T>> {
    return await this.repository.update(entity);
  }

  async delete(id: number): Promise<Result<T>> {
    return await this.repository.delete({ id });
  }

  async findOne(id: number): Promise<Result<T>> {
    const result = await this.repository.findOne({ id });

    return !this.dto ? result : this.dto.mapping(result);
  }

  async findAll(
    where?: {
      [s: string]: string | number | boolean;
    },
    relations?: string[],
    order?: {
      [s: string]: string;
    }
  ): Promise<Result<T>> {
    const result = await this.repository.findAll(where, relations, order);

    return !this.dto ? result : this.dto.mapping(result);
  }

  async findAllPagination(
    page: number,
    pageSize: number,
    where?: { [s: string]: string | number | boolean },
    relations?: string[],
    order?: {
      [s: string]: string;
    }
  ): Promise<Result<T>> {
    return await this.repository.findAllPagination(
      page,
      pageSize,
      where,
      relations,
      order
    );
  }
}

import Result from "../../aplication/interfaces/result.interface";
export interface BaseRepository<T> {
  insert(entity: T): Promise<Result<T>>;
  update(
    entity: T,
    where?: { [s: string]: string | number | boolean },
    relations?: string[]
  ): Promise<Result<T>>;
  delete(
    where?: { [s: string]: string | number | boolean },
    relations?: string[]
  ): Promise<Result<T>>;
  findOne(
    where?: { [s: string]: string | number | boolean },
    relations?: string[]
  ): Promise<Result<T>>;
  findAll(
    where?: { [s: string]: string | number | boolean },
    relations?: string[],
    order?: {
      [s: string]: string;
    }
  ): Promise<Result<T>>;
  findAllPagination(
    page: number,
    pageSize: number,
    where?: { [s: string]: string | number | boolean },
    relations?: string[],
    order?: {
      [s: string]: string;
    }
  ): Promise<Result<T>>;
}

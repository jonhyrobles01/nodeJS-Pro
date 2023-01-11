import { Result } from "@shared/aplication/interfaces";

export abstract class DTOAbstract<T> {
  abstract callback(result: Result<T>): Result<T>;

  mapping(result: Result<T>): Result<T> {
    return this.callback(result);
  }
}

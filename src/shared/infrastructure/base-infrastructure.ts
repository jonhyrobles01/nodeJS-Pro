export abstract class BaseInfrastructure<T, U> {
  async insert(user: T): Promise<T> {
    return Promise.resolve(user);
  }

  update(user: T): Promise<T> {
    return Promise.resolve(user);
  }

  delete(id: U): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  findById(id: U): Promise<T> {
    throw new Error("Method not implemented.");
  }

  findAll(): Promise<T[]> {
    return Promise.resolve([]);
  }
}

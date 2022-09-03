import * as _ from "lodash";
import { Trace } from "../helpers/trace.helper";
import { ObjectType, Repository } from "typeorm";
import { ResponseDto } from "../aplication/dtos/response.dto";
import Result from "../aplication/interfaces/result.interface";
import DatabaseBootstrap from "../../bootstrap/database.bootstrap";

export abstract class BaseInfrastructure<T> {
  constructor(private entity: ObjectType<T>) {}

  async insert(entity: T): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(this.entity);

    const recordToInsert = await repository.save(entity);

    return ResponseDto(Trace.traceId, recordToInsert);
  }

  async update(
    entity: Partial<T>,
    where: object,
    relations?: string[]
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);
    let recordToUpdate: any = await repository.findOne({
      where,
      relations,
    });

    recordToUpdate = Object.assign(recordToUpdate, entity);
    await repository.save(recordToUpdate);

    return ResponseDto(Trace.traceId, recordToUpdate);
  }

  async delete(where: object, relations?: string[]): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(this.entity);

    const recordToDelete: any = await repository.findOne({ where, relations });
    recordToDelete.isActive = false;

    await repository.save(recordToDelete);

    return ResponseDto(Trace.traceId, recordToDelete);
  }

  async findOne(
    where: object,
    relations?: string[],
    order?: object
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository = dataSource.getRepository(this.entity);

    const recordToFind = await repository.findOne({ where, relations, order });

    return ResponseDto(Trace.traceId, recordToFind);
  }

  async findAll(
    where?: object,
    relations?: string[],
    order?: object
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);

    const _where = !where ? {} : Object.assign(where, { isActive: true });
    const recordsToFind = await repository.find({
      where: _where,
      relations,
      order,
    });

    return ResponseDto(Trace.traceId, recordsToFind);
  }

  async findAllPagination(
    page: number,
    pageSize: number,
    where?: object,
    relations?: string[],
    order?: object
  ): Promise<Result<T>> {
    const dataSource = DatabaseBootstrap.dataSource;
    const repository: Repository<T> = dataSource.getRepository(this.entity);

    const [data, total] = await repository.findAndCount({
      where,
      order,
      relations,
      take: pageSize,
      skip: page * pageSize,
    });

    return ResponseDto(Trace.traceId, data, total);
  }
}

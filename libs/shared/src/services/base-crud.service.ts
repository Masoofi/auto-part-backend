import {
  NotFoundException,
} from '@nestjs/common';

export interface PaginatedResult<T> {
  data: T[];
  count: number;
  total: number;
  page: number;
  page_count: number;
}

export abstract class BaseCrudService<
  T,
  CreateDto,
  UpdateDto,
> {
  abstract create(dto: CreateDto): Promise<T>;

  abstract findAll(
    page?: number,
    limit?: number,
  ): Promise<PaginatedResult<T>>;

  abstract findOne(id: string): Promise<T>;

  abstract update(
    id: string,
    dto: UpdateDto,
  ): Promise<T>;

  abstract remove(id: string): Promise<T>;

  protected throwNotFound(
    resource: string,
  ): never {
    throw new NotFoundException(
      `${resource} not found`,
    );
  }
}
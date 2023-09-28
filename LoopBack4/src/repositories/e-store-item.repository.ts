import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {EStoreItem, EStoreItemRelations} from '../models';

export class EStoreItemRepository extends DefaultCrudRepository<
  EStoreItem,
  typeof EStoreItem.prototype.id,
  EStoreItemRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(EStoreItem, dataSource);
  }
}

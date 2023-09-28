import {Entity, model, property} from '@loopback/repository';

@model()
export class EStoreItem extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  itemName: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  image: string;

  @property({
    type: 'string',
    required: true,
  })
  price: string;


  constructor(data?: Partial<EStoreItem>) {
    super(data);
  }
}

export interface EStoreItemRelations {
  // describe navigational properties here
}

export type EStoreItemWithRelations = EStoreItem & EStoreItemRelations;

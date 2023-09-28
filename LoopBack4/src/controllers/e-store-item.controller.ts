import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {EStoreItem} from '../models';
import {EStoreItemRepository} from '../repositories';

export class EStoreItemController {
  constructor(
    @repository(EStoreItemRepository)
    public eStoreItemRepository : EStoreItemRepository,
  ) {}

  @post('/e-store-items')
  @response(200, {
    description: 'EStoreItem model instance',
    content: {'application/json': {schema: getModelSchemaRef(EStoreItem)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EStoreItem, {
            title: 'NewEStoreItem',
            exclude: ['id'],
          }),
        },
      },
    })
    eStoreItem: Omit<EStoreItem, 'id'>,
  ): Promise<EStoreItem> {
    return this.eStoreItemRepository.create(eStoreItem);
  }

  @get('/e-store-items/count')
  @response(200, {
    description: 'EStoreItem model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EStoreItem) where?: Where<EStoreItem>,
  ): Promise<Count> {
    return this.eStoreItemRepository.count(where);
  }

  @get('/e-store-items')
  @response(200, {
    description: 'Array of EStoreItem model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EStoreItem, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EStoreItem) filter?: Filter<EStoreItem>,
  ): Promise<EStoreItem[]> {
    return this.eStoreItemRepository.find(filter);
  }

  @patch('/e-store-items')
  @response(200, {
    description: 'EStoreItem PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EStoreItem, {partial: true}),
        },
      },
    })
    eStoreItem: EStoreItem,
    @param.where(EStoreItem) where?: Where<EStoreItem>,
  ): Promise<Count> {
    return this.eStoreItemRepository.updateAll(eStoreItem, where);
  }

  @get('/e-store-items/{id}')
  @response(200, {
    description: 'EStoreItem model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EStoreItem, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EStoreItem, {exclude: 'where'}) filter?: FilterExcludingWhere<EStoreItem>
  ): Promise<EStoreItem> {
    return this.eStoreItemRepository.findById(id, filter);
  }

  @patch('/e-store-items/{id}')
  @response(204, {
    description: 'EStoreItem PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EStoreItem, {partial: true}),
        },
      },
    })
    eStoreItem: EStoreItem,
  ): Promise<void> {
    await this.eStoreItemRepository.updateById(id, eStoreItem);
  }

  @put('/e-store-items/{id}')
  @response(204, {
    description: 'EStoreItem PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() eStoreItem: EStoreItem,
  ): Promise<void> {
    await this.eStoreItemRepository.replaceById(id, eStoreItem);
  }

  @del('/e-store-items/{id}')
  @response(204, {
    description: 'EStoreItem DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.eStoreItemRepository.deleteById(id);
  }
}

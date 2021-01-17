import {
  buildSchemaSync,
  getMetadataStorage,
  Field,
  InputType,
  ObjectType,
  Resolver
} from 'type-graphql'
import { BaseEntity } from 'typeorm'
import { mockServer } from 'apollo-server'
import { mocked } from 'ts-jest/utils'

import { createResolvers } from 'lib/crud_resolver'

jest.mock('typeorm/repository/BaseEntity')

beforeEach(() => {
  // Clearing TypeGraphQL's decorator metadata between tests.
  // Without this, we can't call "setup" more than once.
  getMetadataStorage().clear()
})

describe('QueryResolver', () => {
  describe('entity#info', () => {
    it('entity(id: "...").info -> data | null', async () => {
      const { server, QueryResolver, Entity } = setup()

      const id = 'TEST_ID'
      const data = { field: 'FIELD_VALUE' } as any

      const info = jest.spyOn(QueryResolver.prototype, 'info')
      Entity.findOne.mockImplementationOnce(async () => data)

      let result

      result = await server.query(
        `#graphql
          query ($id: ID!) {
            entity(id: $id) {
              info {
                field
              }
            }
          }
        `,
        { id }
      )

      expect(info).toBeCalledWith(id)
      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "entity": Object {
            "info": Object {
              "field": "FIELD_VALUE",
            },
          },
        }
      `)

      info.mockClear()
      Entity.findOne.mockImplementationOnce(async () => undefined)

      result = await server.query(
        `#graphql
          query ($id: ID!) {
            entity(id: $id) {
              info {
                field
              }
            }
          }
        `,
        { id }
      )

      expect(info).toBeCalledWith(id)
      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "entity": Object {
            "info": null,
          },
        }
      `)
    })

    it('entity.info -> null', async () => {
      const { server, QueryResolver, Entity } = setup()

      const info = jest.spyOn(QueryResolver.prototype, 'info')
      Entity.findOne.mockImplementationOnce(async () => undefined)

      const result = await server.query(
        `#graphql
          query {
            entity {
              info {
                field
              }
            }
          }
        `
      )

      expect(info).toBeCalledWith(undefined)
      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "entity": Object {
            "info": null,
          },
        }
      `)
    })
  })

  describe('entity#list', () => {
    it('entity(id: "...").list -> [data] | []', async () => {
      const { server, QueryResolver, Entity } = setup()

      const id = 'TEST_ID'
      const data = { field: 'FIELD_VALUE' } as any

      const list = jest.spyOn(QueryResolver.prototype, 'list')
      Entity.findOne.mockImplementationOnce(async () => data)

      let result

      result = await server.query(
        `#graphql
          query ($id: ID!) {
            entity(id: $id) {
              list {
                field
              }
            }
          }
        `,
        { id }
      )

      expect(list).toBeCalledWith(id)
      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "entity": Object {
            "list": Array [
              Object {
                "field": "FIELD_VALUE",
              },
            ],
          },
        }
      `)

      list.mockClear()
      Entity.findOne.mockImplementationOnce(async () => undefined)

      result = await server.query(
        `#graphql
          query ($id: ID!) {
            entity(id: $id) {
              list {
                field
              }
            }
          }
        `,
        { id }
      )

      expect(list).toBeCalledWith(id)
      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "entity": Object {
            "list": Array [],
          },
        }
      `)
    })

    it('entity.list -> [data]', async () => {
      const { server, QueryResolver, Entity } = setup()

      const data = [
        { field: 'FIELD_VALUE_1' },
        { field: 'FIELD_VALUE_2' }
      ] as any

      const list = jest.spyOn(QueryResolver.prototype, 'list')
      Entity.find.mockImplementationOnce(async () => data)

      const result = await server.query(
        `#graphql
          query {
            entity {
              list {
                field
              }
            }
          }
        `
      )

      expect(list).toBeCalledWith(undefined)
      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "entity": Object {
            "list": Array [
              Object {
                "field": "FIELD_VALUE_1",
              },
              Object {
                "field": "FIELD_VALUE_2",
              },
            ],
          },
        }
      `)
    })
  })
})

describe('MutationResolver', () => {
  describe('entity#create', () => {
    let $Entity: typeof BaseEntity

    beforeEach(() => {
      @ObjectType('Entity')
      @InputType('EntityCreateType')
      class Entity extends BaseEntity {
        @Field()
        field1: string

        @Field()
        field2: string
      }

      $Entity = Entity
    })

    it('use input type from Entity definition', async () => {
      const { server, MutationResolver } = setup({ Entity: $Entity })

      const data = {
        field1: 'TEST_CREATE_FIELD_1',
        field2: 'TEST_CREATE_FIELD_2'
      } as any

      const create = jest.spyOn(MutationResolver.prototype, 'create')
      create.mockReturnValueOnce(data)

      const result = await server.query(
        `#graphql
          mutation ($data: EntityCreateType!) {
            entity {
              create(data: $data) {
                field1
                field2
              }
            }
          }
        `,
        { data }
      )

      expect(create).toBeCalledWith(expect.objectContaining(data))
      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "entity": Object {
            "create": Object {
              "field1": "TEST_CREATE_FIELD_1",
              "field2": "TEST_CREATE_FIELD_2",
            },
          },
        }
      `)
    })

    it('providing EntityCreateType', async () => {
      @InputType()
      class EntityCreateType {
        @Field()
        field1: string

        @Field({ nullable: true })
        field2?: string
      }

      const { server, MutationResolver } = setup({
        Entity: $Entity,
        EntityCreateType: EntityCreateType as any
      })

      const data = { field1: 'TEST_PROVIDING_CREATE_TYPE' } as any

      const create = jest.spyOn(MutationResolver.prototype, 'create')
      create.mockReturnValueOnce(data)

      const result = await server.query(
        `#graphql
          mutation ($data: EntityCreateType!) {
            entity {
              create(data: $data) {
                field1
                field2
              }
            }
          }
        `,
        { data }
      )

      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "entity": Object {
            "create": Object {
              "field1": "TEST_PROVIDING_CREATE_TYPE",
              "field2": "Hello World",
            },
          },
        }
      `)
    })
  })

  describe('entity#update', () => {
    it.todo('return updated data')

    it.todo('return null when not found')
  })

  describe('entity#delete', () => {
    it.todo('return deleted data')

    it.todo('return null when not found')
  })
})

function setup(options?: Partial<Parameters<typeof createResolvers>[0]>) {
  // You can only annotate each TypeGraphQL's type decorator
  // (ObjectType, InputType, ...) once for each ES6 class.
  // Doing more than that would overide all the previous one.
  @ObjectType('Entity')
  @InputType('EntityCreateType')
  // @InputType('EntityUpdate') ❌ this would override "EntityCreate"
  class Entity extends BaseEntity {
    @Field()
    field: string
  }

  @InputType()
  class EntityUpdateType implements Partial<Entity> {
    @Field({ nullable: true })
    field?: string
  }

  const { QueryResolver, MutationResolver } = createResolvers({
    Entity,
    EntityUpdateType,
    ...options
  })

  @Resolver()
  class EntityQueryResolver extends QueryResolver {}

  @Resolver()
  class EntityMutationResolver extends MutationResolver {}

  const schema = buildSchemaSync({
    resolvers: [EntityQueryResolver, EntityMutationResolver],
    validate: false // https://github.com/MichalLytek/type-graphql/issues/150
  })

  const server = mockServer(schema, {}, true)

  return {
    Entity: mocked(Entity),
    QueryResolver: EntityQueryResolver,
    MutationResolver: EntityMutationResolver,
    server
  }
}

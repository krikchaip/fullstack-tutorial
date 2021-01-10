import {
  buildSchemaSync,
  Field,
  InputType,
  ObjectType,
  Resolver
} from 'type-graphql'
import { BaseEntity } from 'typeorm'
import { mockServer } from 'apollo-server'
import { once } from 'ramda'
import { mocked } from 'ts-jest/utils'

import { createResolvers } from 'lib/crud_resolver'

jest.mock('typeorm/repository/BaseEntity')

beforeEach(() => jest.restoreAllMocks())

describe('QueryResolver', () => {
  describe('entity#info', () => {
    it('with "id" -> data | null', async () => {
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

    it('without "id" -> null', async () => {
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
    it('with "id" -> [data] | []', async () => {
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

    it('without "id" -> [data]', async () => {
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
  it.todo('...')
})

// TypeGraphQL decorators somehow produce side-effects.
// Calling buildSchema with the same resolvers more than once will break the test.
const setup = once(() => {
  @ObjectType('Entity')
  @InputType('EntityCreate')
  @InputType('EntityUpdate')
  class Entity extends BaseEntity {
    @Field()
    field: string
  }

  const { QueryResolver, MutationResolver } = createResolvers(Entity)

  @Resolver()
  class EntityQueryResolver extends QueryResolver {}

  @Resolver()
  class EntityMutationResolver extends MutationResolver {}

  const schema = buildSchemaSync({
    resolvers: [EntityQueryResolver, EntityMutationResolver]
  })

  const server = mockServer(schema, {}, true)

  return {
    Entity: mocked(Entity),
    QueryResolver: EntityQueryResolver,
    MutationResolver: EntityMutationResolver,
    server
  }
})

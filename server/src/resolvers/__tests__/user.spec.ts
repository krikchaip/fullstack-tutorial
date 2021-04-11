import { buildSchemaSync } from 'type-graphql'
import { Container } from 'typedi'
import { IMockServer, mockServer } from 'apollo-server'
import { Connection, createConnection } from 'typeorm'

import { UserCreateInput } from 'entities'
import { UserQueryResolver, UserMutationResolver } from '../user'
import { current } from 'ormconfig'

jest.mock('services/token')

let db: Connection, server: IMockServer

const input: UserCreateInput = { username: 'winner', password: 'zaza555' }
const query = `#graphql
  mutation ($username: String!, $password: String!) {
    user {
      authenticate(data: { username: $username, password: $password }) {
        token
        data {
          id
        }
      }
    }
  }
`

beforeAll(async () => {
  const schema = buildSchemaSync({
    resolvers: [UserQueryResolver, UserMutationResolver],
    container: Container,
    validate: false // https://github.com/MichalLytek/type-graphql/issues/150
  })

  db = await createConnection(current)
  server = mockServer(schema, {}, true)

  // creating a mock user
  await server.query(
    `#graphql
      mutation ($username: String!, $password: String!) {
        user {
          create(data: { username: $username, password: $password }) {
            id
          }
        }
      }
    `,
    input
  )
})

afterAll(async () => {
  return db.close()
})

describe('Mutation', () => {
  describe('authenticate', () => {
    it('"null" when no user found', async () => {
      const result = await server.query(query, {
        username: 'DUMB_USER',
        password: '11111'
      })

      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "user": Object {
            "authenticate": null,
          },
        }
      `)
    })

    it('"null" when enter a wrong password', async () => {
      const result = await server.query(query, {
        username: input.username,
        password: 'WRONG_PASSWORD'
      })

      expect(result.data).toMatchInlineSnapshot(`
        Object {
          "user": Object {
            "authenticate": null,
          },
        }
      `)
    })

    it('"{ token, data }" when everything is right', async () => {
      const result = await server.query(query, input)

      expect(result.data!.user).toEqual({
        authenticate: {
          token: expect.any(String),
          data: { id: expect.any(String) }
        }
      })
    })
  })
})

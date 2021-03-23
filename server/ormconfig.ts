import { ConnectionOptions, DefaultNamingStrategy } from 'typeorm'
import { omit } from 'ramda'

class NamingStrategy extends DefaultNamingStrategy {
  joinColumnName = (prop: string) => prop + '_id'
  joinTableColumnName = (table: string) => table + '_id'
  joinTableName = (table1: string, table2: string) => table1 + ' & ' + table2
}

type ConfigMode = 'default' | 'test'
export const ormconfig: Record<ConfigMode, ConnectionOptions> = {
  default: {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    schema: 'public',
    synchronize: false,
    migrationsRun: true,
    logging: false,
    entities: ['src/entities/!(index).ts'],
    migrations: ['db/migration/*.ts'],
    migrationsTableName: '__migration__',
    cli: { migrationsDir: 'db/migration' },
    namingStrategy: new NamingStrategy()
  },
  test: {
    name: 'test',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    schema: 'test',
    dropSchema: true,
    synchronize: true,
    logging: false,
    entities: ['src/entities/!(index).ts'],
    namingStrategy: new NamingStrategy()
  }
}

// "createConnection" parameter can't have the "name" property
// when passing as an object.
export const current = omit(
  ['name'],
  ormconfig[(process.env.NODE_ENV ?? 'default') as ConfigMode]
) as ConnectionOptions

export default Object.values(ormconfig) as ConnectionOptions[]

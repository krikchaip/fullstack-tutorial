import { ConnectionOptions, DefaultNamingStrategy } from 'typeorm'

class NamingStrategy extends DefaultNamingStrategy {
  joinColumnName = (prop: string) => prop + '_id'
  joinTableColumnName = (table: string) => table + '_id'
  joinTableName = (table1: string, table2: string) => table1 + ' & ' + table2
}

type ConfigMode = 'default'
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
  }
}

export const current =
  ormconfig[(process.env.NODE_ENV ?? 'default') as ConfigMode]

export default Object.values(ormconfig) as ConnectionOptions[]

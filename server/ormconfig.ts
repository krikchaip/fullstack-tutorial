import path from 'path'
import { ConnectionOptions } from 'typeorm'

export const ormconfig: Record<'default', ConnectionOptions> = {
  default: {
    name: 'default',
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    schema: 'public',
    synchronize: true,
    logging: false,
    entities: [path.join(__dirname, '../src/entities/*.ts')]
  }
}

export default Object.values(ormconfig) as ConnectionOptions[]

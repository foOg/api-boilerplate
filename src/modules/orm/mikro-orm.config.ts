import { Options } from '@mikro-orm/core'
import { get } from 'config'
import * as entities from './entities'

const CONFIG: any = get('postgres')

const config: Options = {
  entities: Object.values(entities),
  type: 'postgresql',
  dbName: 'dbname',
  migrations: {
    disableForeignKeys: false,
  },
  ...CONFIG,
}

export default config

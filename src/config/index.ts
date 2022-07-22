import base from './base'
import development from './development'
import debug from './debug'
import production from './production'
import * as GlobalTypes from '../common/globalTypes'

const configs: GlobalTypes.ConfigTypes = {
  base,
  development,
  debug,
  production,
}

const node_env = process.env.NODE_ENV || GlobalTypes.NODE_ENV.BASE
const config = configs[node_env] || configs.base

// eslint-disable-next-line
console.log(`## configs[${node_env}] -> `, config)

export default config

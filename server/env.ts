require('dotenv').config()

export const DEVELOPMENT =
  process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
export const PRODUCTION = process.env.NODE_ENV === 'production'
export const SERVER_PORT = process.env.SERVER_PORT || 3000
export const DB_PORT = Number(process.env.DB_PORT) || 5432
export const SECRET = process.env.SECRET
export const IS_CI = require('is-ci') as boolean

/* Derived configs */
export const CURRENT =
  DEVELOPMENT || PRODUCTION ? 'default' : process.env.NODE_ENV

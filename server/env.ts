require('dotenv').config()

export const DEVELOPMENT =
  process.env.NODE_ENV === 'development' || !process.env.NODE_ENV
export const PRODUCTION = process.env.NODE_ENV === 'production'
export const SERVER_PORT = process.env.SERVER_PORT || 3000
export const SECRET = process.env.SECRET

/* Derived configs */
export const EXT = PRODUCTION ? 'js' : 'ts'
export const CURRENT =
  DEVELOPMENT || PRODUCTION ? 'default' : process.env.NODE_ENV

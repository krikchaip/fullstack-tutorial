import { Service } from 'typedi'
import { sign, SignOptions, JsonWebTokenError } from 'jsonwebtoken'

@Service()
export class Token {
  sign(payload: object, options?: SignOptions) {
    if (!process.env.SECRET)
      throw new JsonWebTokenError('secretOrPrivateKey not found')

    return sign(payload, process.env.SECRET, options)
  }
}

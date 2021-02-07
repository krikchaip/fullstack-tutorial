import { Service } from 'typedi'
import { sign, SignOptions } from 'jsonwebtoken'

@Service()
export class Token {
  sign(payload: object, options?: SignOptions) {
    return sign(payload, 'SUPER_SECRET', options)
  }
}

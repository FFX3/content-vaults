import { sign, verify } from 'jsonwebtoken'

export function createJWT(payload, callback=undefined) {
  return sign( {...payload, exp: Math.floor(Date.now() / 1000) + (60 * 60) }, process.env.JWT_SIGNATURE, callback)
}

export function parseJWT(token, callback=undefined) {
  return verify(token, process.env.JWT_SIGNATURE, callback)
}


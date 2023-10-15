export class TokenKeyError extends Error {
  constructor(message: string) {
    super(`TokenKeyError:${message}`)
  }
}
export class TokenPayloadError extends Error {
  constructor(message: string) {
    super(`TokenPayloadError:${message}`)
  }
}

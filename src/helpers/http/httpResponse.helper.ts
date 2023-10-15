import { InternalServerError } from '@/helpers/errors'

export class HttpResponseHelper {
  public static badRequest<T extends any>(error: T) {
    return {
      statusCode: 400,
      body: {
        data: [],
        error
      }
    }
  }

  public static internalServerError<T extends Error>(error?: T) {
    return {
      statusCode: 500,
      body: {
        data: [],
        error: new InternalServerError('Internal Server Error')
      }
    }
  }

  public static success<T = any>(data: T) {
    return {
      statusCode: 200,
      body: {
        data,
        error: null
      }
    }
  }

  public static successNotContent() {
    return {
      statusCode: 201,
      body: null
    }
  }
}

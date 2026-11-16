import { InternalServerError } from '@/helpers/errors'

export const HttpResponseHelper = {
  badRequest<T>(error: T) {
    return {
      statusCode: 400,
      body: {
        data: [],
        error
      }
    }
  },

  internalServerError<T extends Error>(_error?: T) {
    return {
      statusCode: 500,
      body: {
        data: [],
        error: new InternalServerError('Internal Server Error')
      }
    }
  },

  success<T>(data: T) {
    return {
      statusCode: 200,
      body: {
        data,
        error: null
      }
    }
  },

  successNotContent() {
    return {
      statusCode: 201,
      body: null
    }
  }
}

import { _Maybe } from './maybe'
import { ExtractValueError } from '@/helpers/errors'
import { MaybeType } from '@/functional/types'

export class Nothing extends _Maybe {
  public tag: MaybeType
  constructor() {
    super()
    this.tag = MaybeType.Nothing
  }

  public isNothing() {
    return true
  }

  public get(): Error {
    return new ExtractValueError("Can't extract the value of a Nothing.")
  }

  public map(fn: (...args: any[]) => any) {
    return this
  }

  public static of<T>(value: T) {
    return new Nothing()
  }

  public getOrElse<T>(value: T) {
    return value
  }

  public toString() {
    return 'Maybe.Nothing'
  }
}

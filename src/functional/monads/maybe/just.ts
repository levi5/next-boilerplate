import { MaybeType } from '@/functional/types'
import { _Maybe } from './maybe'

export class Just<T> extends _Maybe {
  public tag: MaybeType
  constructor(private readonly value: T) {
    super()
    this.tag = MaybeType.Just
  }

  public isJust() {
    return true
  }

  public get(): T {
    return this.value
  }

  public map(fn: (...args: any[]) => any) {
    return _Maybe.fromNullable(this.value) ? Just.of(fn(this.value)) : Just.nothing()
  }

  public static of<T>(value: T) {
    return new Just(value)
  }

  getOrElse(value: T) {
    if (this.isNothing()) return value
    return this.value as T
  }

  public toString() {
    return `Maybe.Just(${this.value})`
  }
}

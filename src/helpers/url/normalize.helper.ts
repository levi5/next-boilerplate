import { _pipe } from '@/functional/pipe'

export interface INormalizeUrl {
  removeDuplicateSlashes(url: string): string
  removeDuplicateQuestionMark(url: string): string
  removeDuplicateParameters(url: string): string
  normalize(url: string): string
}

export class NormalizeUrl implements INormalizeUrl {
  constructor() {}
  public removeDuplicateSlashes(url: string): string {
    return url.replace(/([^:])(\/\/+)/g, '$1/')
  }

  public removeDuplicateQuestionMark(url: string): string {
    let urlNormalized: string = ''
    const arrayUrl = url.replace('?&', '?').split('?')

    const size = arrayUrl.length - 1
    arrayUrl.forEach((part: string, index: number) => {
      urlNormalized += index === 0 && size >= 1 ? part + '?' : index >= size ? part : part + '&'
    })
    return urlNormalized
  }

  public searchParamsValueArrayToString(searchParams: {
    [key: string]: string | string[] | undefined
  }): string | string[][] | Record<string, string> | URLSearchParams | undefined {
    const schema = {}
    Object.entries(searchParams).forEach(([key, value]) => {
      const newValue = Array.isArray(value) ? value.map(value => key + value).join(',') : value
      Object.assign(schema, { [key]: newValue })
    })
    return schema
  }

  public removeDuplicateParameters(url: string): string {
    //not implemented
    return url
  }
  public normalize(url: string): string {
    const urlNormalize = _pipe(url, this.removeDuplicateSlashes, this.removeDuplicateQuestionMark)
    return urlNormalize
  }
}

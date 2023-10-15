Number.prototype.$convertToPrice = function (locales: string, options?: Intl.NumberFormatOptions) {
  const value = Number(this)
  return new Intl.NumberFormat(locales, options).format(value)
}

export {}

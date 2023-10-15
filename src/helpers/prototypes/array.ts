Array.prototype.$uniqueArray = function (propertyName: string) {
  const foundProperties: { [key: string]: boolean } = {}
  return this.filter(item => {
    if (!foundProperties[item[propertyName]]) {
      foundProperties[item[propertyName]] = true
      return true
    }
    return false
  })
}

export {}

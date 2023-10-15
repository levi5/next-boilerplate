String.prototype.$generateStringVariations = function () {
  const lowerCase: string = this.toLowerCase()
  const upperCase: string = this.toUpperCase()
  const capitalize: string = this.$capitalize()
  return [lowerCase, upperCase, capitalize]
}

String.prototype.$strip = function () {
  return this.replace(/\s+/g, '')
}

String.prototype.$capitalize = function () {
  return this.replace(/(?:^|\s|[-"'([{])+\S/g, (character: string) => character.toUpperCase())
}

String.prototype.$swapCharacter = function (from: RegExp | string, to: string) {
  return this.replace(from, to)
}

String.prototype.$replaceSpecialCharacter = function () {
  return this.normalize('NFD').replace(/[\u0300-\u036f]/g, '') || ''
}

String.prototype.$normalize = function (from: RegExp | string, to: string) {
  return this.toLowerCase().trim().$replaceSpecialCharacter().$swapCharacter(from, to)
}

export {}

import { _pipe } from '@/functional/pipe'

Date.prototype.$formatBrazilianDate = function (): string {
  const day = String(this.getDate()).padStart(2, '0')
  const month = String(this.getMonth() + 1).padStart(2, '0')
  const year = this.getFullYear()
  return `${day}/${month}/${year}`
}

Date.prototype.$time = function () {
  return _pipe<Date, { hours: string; minutes: string; seconds: string }>(this, () => ({
    hours: String(this.getUTCHours()).padStart(2, '0'),
    minutes: String(this.getUTCMinutes()).padStart(2, '0'),
    seconds: String(this.getUTCSeconds()).padStart(2, '0')
  }))
}

Date.prototype.$timeDifference = function (timeUTC: string) {
  const endTime: Date = new Date(timeUTC)
  const timeDifference = endTime.getTime() - this.getTime()
  return {
    hours: Math.floor(timeDifference / (1000 * 60 * 60)),
    minutes: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  }
}

Date.prototype.$weekday = function (
  locales?: Intl.LocalesArgument,
  variant?: 'long' | 'short' | 'narrow',
  format: string = 'mode-1'
) {
  const weekday = this.toLocaleDateString(locales, { weekday: variant })
  if (format === 'mode-1') {
    return weekday.replace('-feira', '')
  }
  return weekday
}

Date.prototype.$dayMonthYear = function () {
  return {
    day: String(this.getUTCDate()).padStart(2, '0'),
    month: String(this.getUTCMonth() + 1).padStart(2, '0'),
    year: String(this.getUTCFullYear())
  }
}

export {}

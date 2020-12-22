import {
  format,
  isBefore,
  isEqual
} from 'date-fns'

export function formatDate(date: string, dateFormat: string) {
  return format(new Date(date), dateFormat)
}


export enum DateComparator {
  MINUTE,
  HOUR,
  DAY
}

export function isDateBefore(date1: string, date2: string, comparator = DateComparator.DAY) {
  switch(comparator) {
    case DateComparator.HOUR:
      return isBeforeHour(date1, date2)
    case DateComparator.MINUTE:
      return isBeforeMinute(date1, date2)
    default:
      return isBeforeDay(date1, date2)
  }
}

export function isBeforeHour(date1: string, date2: string) {
  const date1Hour = formatDate(date1, 'HH')
  const date2Hour = formatDate(date2, 'HH')

  return parseInt(date1Hour) < parseInt(date2Hour)
}

export function isBeforeMinute(date1: string, date2: string) {
  const date1Minute = formatDate(date1, 'mm')
  const date2Minute = formatDate(date2, 'mm')
  return parseInt(date1Minute) < parseInt(date2Minute)
}

export function isBeforeDay(date1: string, date2: string) {
  return isBefore(new Date(date1), new Date(date2))
}

export function isSame(date1: string, date2: string) {
  return isEqual(new Date(date1), new Date(date2))
}

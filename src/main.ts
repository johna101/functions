console.log("adding functions lib")
export function add(val1: number, val2: number) {
  const result = val1 + val2
  console.log('result in add: ', result)
  return result
}

import {CheckDateRange} from './dates'
export * from "./dates" 

const endDate = new Date(2018, 0, 1)
let result = CheckDateRange([ new Date, endDate])
console.log('result..: ', result)

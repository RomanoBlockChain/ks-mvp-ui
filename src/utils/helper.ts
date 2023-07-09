export function isNil(value: any): value is undefined | null {
  return typeof value === 'undefined' || value === null
}

export function isEmpty(value: any): boolean {
  if (isNil(value)) {
    return true
  }
  if (typeof value === 'object') {
    return Object.keys(value).length === 0
  } else if (Array.isArray(value)) {
    return value.length === 0
  }
  return value.length === 0
}

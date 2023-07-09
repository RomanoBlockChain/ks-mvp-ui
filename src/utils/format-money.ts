type MoneyFormat =
  | 'amount'
  | 'amount_no_decimals'
  | 'amount_with_comma_separator'
  | 'amount_no_decimals_with_comma_separator'

type MoneyFormatOptions = {
  thousands: ',' | '.'
  decimal: number
}

export function formatMoney(
  cents: number | string,
  format: MoneyFormat = 'amount_no_decimals',
  options: MoneyFormatOptions = {
    decimal: 2,
    thousands: '.',
  }
) {
  if (typeof cents === 'string') {
    cents = cents.replaceAll(',', '').replaceAll('.', '')
    cents = Number.parseInt(cents, 10)
  }

  function addThousands(moneyString: string) {
    return moneyString.replace(
      /(\d)(?=(\d\d\d)+(?!\d))/g,
      '$1' + options.thousands
    )
  }

  let result = ''

  switch (format) {
    case 'amount':
      result = addThousands(cents.toFixed(options.decimal))
      break
    case 'amount_no_decimals':
      result = addThousands(cents.toFixed(0))
      break
    case 'amount_with_comma_separator':
      result = cents.toFixed(options.decimal).replace(/\./, ',')
      break
    case 'amount_no_decimals_with_comma_separator':
      result = addThousands(cents.toFixed(0)).replace(/\./, ',')
      break
  }
  return format.replace(format, result)
}

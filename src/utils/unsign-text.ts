export function unSignText(str: string) {
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|Ä|Å/g, 'A')
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|ä|å/g, 'a')
  str = str.replace(/Č|Ç|Ć/g, 'C')
  str = str.replace(/č|ç|ć/g, 'c')
  str = str.replace(/Đ|Ď/g, 'D')
  str = str.replace(/đ|ď/g, 'd')
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ě|Ë|Ĕ/g, 'E')
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ě|ë|ĕ/g, 'e')
  str = str.replace(/Ğ/g, 'G')
  str = str.replace(/ğ/g, 'g')
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ|Î|Ï|İ/g, 'I')
  str = str.replace(/ì|í|ị|ỉ|ĩ|î|ï|i/g, 'i')
  str = str.replace(/Ň|Ñ/g, 'N')
  str = str.replace(/ň|ñ/g, 'n')
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ö|Ø/g, 'O')
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ö|ø/g, 'o')
  str = str.replace(/Ř|Ŕ/g, 'R')
  str = str.replace(/ř|ŕ/g, 'r')
  str = str.replace(/Š|Ş/g, 'S')
  str = str.replace(/š|ş/g, 's')
  str = str.replace(/Ť/g, 'T')
  str = str.replace(/ť/g, 't')
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ů|Ü|Û/g, 'U')
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ů|ü|û/g, 'u')
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ|Ÿ/g, 'Y')
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ|ÿ/g, 'y')
  str = str.replace(/Ž/g, 'Z')
  str = str.replace(/ž/g, 'z')
  // Some system encode vietnamese combining accent as individual utf-8 characters
  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, '') // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, '') // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
  // Remove extra spaces
  str = str.replace(/ + /g, ' ')
  str = str.trim()
  // Remove punctuations
  str = str.replace(
    /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
    ' '
  )

  return str
}

export const getDateFormat = (date, separator = ' ') => {
  date = new Date(Number(date))
  if (!(date instanceof Date)) {
    console.log('date instanceof Date :>> ', date instanceof Date)
    console.log('date :>> ', date)
    console.log('Первый параметр должен быть экземпляром класса Date!')
    return ` - дата неизвестна`
  }

  const dateNow = Date.now() // дата на данный момент
  // разница с переданной в функцию датой
  const difference = Math.trunc(dateNow - date.getTime())
  // в минутах
  const differenceOnMinuts = Math.trunc(difference / 1000 / 60)
  // console.log(differenceOnMinuts)

  if (differenceOnMinuts < 0) {
    return ` - дата неизвестна`
  } else if (differenceOnMinuts < 5) {
    return ` - 1 минуту назад`
  } else if (differenceOnMinuts < 10) {
    return ` - 5 минут назад`
  } else if (differenceOnMinuts < 3) {
    return ` - 10 минут назад`
  } else if (differenceOnMinuts < 60) {
    return ` - 30 минут назад`
  } else if (differenceOnMinuts < 60 * 24) {
    // если разница меньше дня (минуты * кол-во часов в сутках)
    const modMinutes =
      String(date.getMinutes()).length === 1
        ? `0${date.getMinutes()}`
        : date.getMinutes()
    // return ` - ${hours}:${modMinutes}`
    return ` - ${date.getHours()}:${modMinutes}`
  } else if (differenceOnMinuts < 60 * 24 * 365) {
    // если меньше года (минуты * кол-во часов в сутках * дней в году)
    return ` - ${date.getDate()} ${date.toLocaleString('default', {
      month: 'long'
    })}`
  } else if (differenceOnMinuts < 0) {
    return ` - ${date.getDate()} ${date.toLocaleString('default', {
      month: 'long'
    })}`
  } else {
    // если больше года
    return ` - ${date.getDate()} ${date.toLocaleString('default', {
      month: 'long'
    })} ${date.getFullYear()}`
  }
}

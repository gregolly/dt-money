export function formattedDate(value: string) {
  //   return new Date(value).toLocaleString('pt-BR')
  //   const options = {
  //     weekday: 'long',
  //     year: 'numeric',
  //     month: 'long',
  //     day: 'numeric',
  //   }

  const date = new Date(value)

  return new Intl.DateTimeFormat('pt-BR').format(date)
}

function convertDate (date: Date): string {
  // convert date to string with format "Minggu, 21 Februari 2021"
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  } as const
  return date.toLocaleDateString('id-ID', options)
}

function convertTime (date: Date): string {
  const options = {
    hour: 'numeric',
    minute: 'numeric'
  } as const
  return date.toLocaleTimeString('id-ID', options)
}

export { convertDate, convertTime }

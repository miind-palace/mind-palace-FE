export const createdAtToTitleDate = (dateString: string) => {
  const date = new Date(dateString)
  const options: Pick<Intl.DateTimeFormatOptions, 'month' | 'day'> = { month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

export default createdAtToTitleDate

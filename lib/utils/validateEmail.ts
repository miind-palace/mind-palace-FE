const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const validateEmail = (email: string) => {
  const regex = EMAIL_REGEX
  return regex.test(email)
}

export const validateEmail = (email: string) => {
  const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const regex = EMAIL_REGEX
  return regex.test(email)
}

export const validatePassword = (password: string) => {
  // 8자 이상 영문, 숫자, 특수문자 혼용 검증
  const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/
  const regex = PASSWORD_REGEX
  return regex.test(password)
}

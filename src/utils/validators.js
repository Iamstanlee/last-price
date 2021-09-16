// const regexText = /^[a-zA-Z0-9 ]+$/
// const regexName = /^[a-zA-Z ]+$/
const regexNumber = /^[0-9]+$/
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const validateEmail = (email) => regexEmail.test(email)
export const validateNum = (value) => regexNumber.test(value)

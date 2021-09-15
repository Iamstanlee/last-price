const regexText = /^[a-zA-Z0-9 ]+$/
const regexName = /^[a-zA-Z ]+$/
const regexNumber = /^[0-9]+$/
const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

export function validateEmail(email) {
  if (!regexEmail.test(email)) return false
  return true
}

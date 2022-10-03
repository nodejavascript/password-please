
export const returnPassword = (size, symbols) => {
  let password = ''

  for (let i = 0; i < size; i++) {
    const choice = random(0, symbols ? 3 : 2)
    if (choice === 0) {
      password += randomLower()
    } else if (choice === 1) {
      password += randomUpper()
    } else if (choice === 2) {
      password += random(0, 9)
    } else if (choice === 3) {
      password += randomSymbol()
    }
  }

  return password
}

const random = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

const randomLower = () => {
  return String.fromCharCode(random(97, 122))
}

const randomUpper = () => {
  return String.fromCharCode(random(65, 90))
}

const randomSymbol = () => {
  const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>"
  return symbols[random(0, symbols.length - 1)]
}


export const returnSegmentedData = () => {
  const lengths = [
    {
      label: '😧 8',
      value: 8
    },
    {
      label: '😦 16',
      value: 16
    },
    {
      label: '🙂 32',
      value: 32
    },
    {
      label: '😗 48',
      value: 48
    },
    {
      label: '😍 64',
      value: 64
    }
  ]

  const symbols = [
    {
      label: '💦 No',
      value: false
    },
    {
      label: '🔥 Yes',
      value: true
    }
  ]

  return {
    lengths,
    lengthDefault: 32,
    symbols,
    symbolsDefault: false
  }
}

export const returnItems = () => {
  const items = []

  const sizes = [48, 32, 24, 16, 8]

  sizes.forEach(size => {
    items.push({ size })
    items.push({ size, symbols: 'true' })
  })

  items.forEach(item => {
    const { size, symbols } = item
    item.key = `${size}_${symbols ? 'symbols' : 'alphanumeric'}`
  })

  return items
}

export const returnPassword = input => {
  const { size, symbols } = input

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

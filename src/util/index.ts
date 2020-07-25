import { regex } from './const'

export const validate = (arg: string) => {
  if (arg) {
    return true
  }
  if (/\s/.test(arg)) {
    // It has any kind of whitespace
    return false
  }
  return false
}

export const hasLowerCase = (arg: string) => {
  return /[a-z]/.test(arg)
}

export const hasSpecialChar = (arg: string) => {
  if (arg.search(regex) > 0) {
    return 1
  } else if (arg.search(regex) > 2) {
    return 2
  }
  return -1
}
export const convertToArray = (arg: string) => {
  return arg.split('')
}
// make this function to do all the checking things
export const hasNumber = (arg: string) => {
  let count: number = 0
  const array = convertToArray(arg)
  for (let i = 0; i < array.length; i++) {
    const element = array[i]
    if (typeof parseInt(element) === 'number') {
      count++
    }
  }
  //   too much numbers
  if (count > array.length / 2) {
    return -1
  }
  if (count > 3) {
    return 2
  } else if (count > 0) {
    return 1
  }
  //  no numbers
  return -1
}

export const checkBasicPattern = (arg: string) => {
  // ..
}

export const basicPasswordLength = (arg: string) => {
  if (convertToArray(arg).length > 6) {
    return 1
  } else if (convertToArray(arg).length > 8) {
    return 2
  } else if (convertToArray(arg).length > 12) {
    return 3
  }
  return -1
}

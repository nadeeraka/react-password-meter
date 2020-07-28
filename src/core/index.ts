const commonChecks = require('fxa-common-password-list')
import {errorsObj} from '../util/const'
import {
  hasNumber,
  hasSpecialChar,
  validate,
  convertToArray,
  basicPasswordLength,
  hasLowerCase,
  hasUpperCase
} from '../util'
export class Main {
  input: string
  score: number = 0
  errors: [string]

  constructor(input?:any) {
    this.input = input
  }

  // private setInput(x: string): void {
  //   this.input = x
  // }

  private setScore(plus: any): number {
    if (!isNaN(plus) && plus > 0) {
      this.score + plus
    }
    if (this.score > 0 && this.score > plus) {
      this.score - plus
    }
    return this.score
  }

  private getScore(): number {
    return this.score
  }
  private setError(arg: string): void {
    this.errors.push(arg)
  }

  // private getError(): [] | [string] {
  //   return this.errors
  // }

  //  move to util

  hasSpecialChar(arg: string): void {
    this.setScore(hasSpecialChar(arg))
  }

  // make this function to do all the checking things
  hasNumber(arg: string): void {
    this.setScore(hasNumber(arg))
  }

  getPasswordLength(arg: string): void {
    this.setScore(basicPasswordLength(arg))
  }
  simple(arg: string): number {
    if (validate(arg)) {
      this.getPasswordLength(arg)
      return this.getScore()
    }else{
      this.setError(errorsObj.short)
    }
  
    return -1
  }
  basic(arg: string): number {
    if (validate(arg)) {
      return -1
    }
    this.getPasswordLength(arg)
    this.hasNumber(arg)
    this.hasSpecialChar(arg)
    hasUpperCase(arg)
    hasLowerCase(arg)
    return this.getScore()
  }

  //  improve this method
  advance(arg: string, email: string, name: string): number {
    this.basic(arg)
    // check common or not
    if (commonChecks(arg)) {
      this.setScore(-1)
    } else {
      this.setScore(2)
    }
    // check using details
    if (
      convertToArray(arg).includes(email) ||
      convertToArray(arg).includes(name)
    ) {
      this.setScore(-1)
    }
    // check basic pattern
    // ...

    return this.getScore()
  }
}


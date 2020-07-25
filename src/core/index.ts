const commonChecks = require('fxa-common-password-list')
import {
  checkBasicPattern,
  hasNumber,
  hasSpecialChar,
  validate,
  convertToArray,
  basicPasswordLength
} from '../util'
export class Main {
  input: string
  score: number = 0

  constructor(input: string) {
    this.input = input
  }

  private setInput(x: string): void {
    this.input = x
  }

  private setScore(plus: number): number {
    if (plus > 0) {
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

  //  move to util

  hasSpecialChar(arg: string): void {
    const scor = hasSpecialChar(arg)
    this.setScore(scor)
  }

  // make this function to do all the checking things
  hasNumber(arg: string): void {
    const scor = hasNumber(arg)
    this.setScore(scor)
  }

  //  main methods
  basicPasswordLength(arg: string): void {
    const scor = basicPasswordLength(arg)
    this.setScore(scor)
  }
  simple(arg: string): number {
    if (validate(arg)) {
      this.basicPasswordLength(arg)
      return this.getScore()
    }
    return -1
  }
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

  basic(arg: string): number {
    if (validate(arg)) {
      return -1
    }
    this.basicPasswordLength(arg)
    this.hasNumber(arg)
    this.hasSpecialChar(arg)
    return this.getScore()
  }
}

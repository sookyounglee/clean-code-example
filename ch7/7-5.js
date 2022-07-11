/**
 * class 추출하기
 */

class Person {
  #name;
  #officeAreaCode;
  #officeNumber;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    // this.#officeAreaCode = areaCode;
    // this.#officeNumber = number;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(areaCode, number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  set areaCode(value) {
    this.#areaCode = value;
  }

  get number() {
    return this.#number;
  }

  set number(value) {
    this.#number = value;
  }

  get toString() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const person = new Person("엘리", "010", "12345678");
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);

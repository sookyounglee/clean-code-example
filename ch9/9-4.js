/**
 * 참조를 값으로 바꾸기 예제
 */
class Person {
  #name;
  #telephoneNumber;
  constructor(name, areaCode, number) {
    this.#name = name;
    this.#telephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  set name(arg) {
    this.#name = arg;
  }

  get telephoneNumber() {
    // instance를 바로 return하는건 좋지 않다.
    // 언제든지 값을 변경 가능하기때문에 불변성을 유지할 수 없다.
    return this.#telephoneNumber.toString;
  }

  get officeAreaCode() {
    return this.#telephoneNumber.areaCode;
  }

  set officeAreaCode(value) {
    // this.#telephoneNumber.areaCode = value; (기존 코드)
    // 새로운 객체를 return해서 불변성을 유지시켜준다.
    this.#telephoneNumber = new TelephoneNumber(value, this.officeNumber);
  }

  get officeNumber() {
    return this.#telephoneNumber.number;
  }

  set officeNumber(value) {
    // this.#telephoneNumber.number = value; (기존 코드)
    // 새로운 객체를 return해서 불변성을 유지시켜준다.
    this.#telephoneNumber = new TelephoneNumber(this.officeAreaCode, value);
  }
}

class TelephoneNumber {
  #areaCode;
  #number;
  constructor(area, number) {
    this.#areaCode = area;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(arg) {
    this.#areaCode = arg;
  }

  get number() {
    return this.#number;
  }
  set number(arg) {
    this.#number = arg;
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

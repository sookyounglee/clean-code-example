class Person {
  #name;
  #manager;
  #chargeCode;
  constructor(name, manager, chargeCode) {
    this.#name = name;
    this.#manager = manager;
    this.#chargeCode = chargeCode;
  }

  get name() {
    return this.#name;
  }

  get manager() {
    return this.#manager;
  }

  get chargeCode() {
    return this.#chargeCode;
  }
}

/**
 * 내부적으로 별다른 로직이 없는 경우 불필요하게 클래스를 따로 만들서 사용하는건 오히려 더 복잡하게 만들수 있다.
 */
const person = new Person("Tom", "aManager", "999");
console.log(person.name);
console.log(person.manager);
console.log(person.chargeCode);

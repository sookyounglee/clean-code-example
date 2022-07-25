const customerRepository = new CustomerRepository();
const order = new Order(
  data.number,
  customerRepository.registerCustomer(data.customerId)
);

class Order {
  // constructor(data) {
  constructor(number, customer) {
    this._number = number;
    // 생성자에서 instance를 생성하는것보다 외부에서 생성후 데이터를 넘겨주는것이 더 낫다.
    // this._customer = new Customer(data.customerId);
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

class CustomerRepository {
  #customers;

  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}

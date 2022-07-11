/**
 * 1. 레코드 캡슐화하기
 */
export class Organization {
  #name;
  #country;
  constructor(name, country) {
    this.#name = name;
    this.#country = country;
  }

  get name() {
    return this.#name;
  }

  // set name(value) {
  //   this.#name = value;
  // }

  get country() {
    return this.#country;
  }

  // set country(value) {
  //   this.#country = value;
  // }

  get rowData() {
    return {
      name: this.name,
      country: this.country,
    };
  }
}

// const organization = { name: "Acme Gooseberries", country: "GB" };

const organization = new Organization("Acme Gooseberries", "GB");

// organization.name = "Dream Coding";
console.log(organization.name);
console.log(organization.country);
console.log(organization.rowData);

let rowData = organization.rowData;
rowData.name = "Dream Coding";
console.log(rowData);
console.log(organization.rowData);

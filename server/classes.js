class Person {
  constructor(age) {
    this._age = age
  }

  get age() {
    return this._age
  }

  set age(age) {
    this._age = age + 8
  }

  getAgeInDogYears() {
    return this.age / 7
  }
}

class Woman extends Person {
  get age() {
    return this._age >= 30 ? 29 : this._age
  }
}

const woman = new Woman(42)
console.log(woman.getAgeInDogYears())

module.exports = Person

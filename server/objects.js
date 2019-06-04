const NEW_METHOD = 'say-myAgeInDogYears'

const person = {
  age: 0,

  get ageInDogYears() {
    return this.age / 7
  },

  set ageInDogYears(age) {
    this.age = age * 7
  },

  [NEW_METHOD]() {
    return `My age in dog years is ${this.ageInDogYears}`
  },
}

console.log(person['say-myNameInDogYears'])

// person.ageInDogYears = 5

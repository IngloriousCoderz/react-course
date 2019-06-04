const sayHello = (who = 'world') => `Hello ${who}!`
const sayGoodbye = (who = 'world') => `Goodbye ${who}...`
const printGreeting = greeting => who => console.log(greeting(who))

module.exports = { sayHello, sayGoodbye, printGreeting }

// const sum = a => b => a + b
// const sumTwo = sum(2)
// sumTwo(3)
// sum(2)(3)

// const sum = (a, b) => a + b
// sum(2, 3)

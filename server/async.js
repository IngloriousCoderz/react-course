const fetch = require('isomorphic-unfetch')

// button.addEventListener('click', function(event) {
//   $.get('/users', function(response) {
//     const { data } = response
//     $.get(`/users/${data[0].id}`, function(response) {
//       setTimeout(function() {
//         console.log(response.data)
//       }, 1000)
//     }, function(error) {

//     })
//   }, function(error) {

//   })
// })

function getSingleUser(data) {
  return new Promise(resolve => setTimeout(() => resolve(data), 1000))
}

// const promise = Promise.all([p1, p2, p3])
// promise.then(([r1, r2, r3]) => {})

const getName = user => user.name

const fetchStarWarsData = type => id =>
  fetch(`https://swapi.co/api/${type}/${id}/`).then(response => response.json())

const fetchStarWarsCharacter = fetchStarWarsData('people')
const fetchStarWarsStarship = fetchStarWarsData('starships')

// const fetchC3PO = () => fetchStarWarsCharacter(2)
// fetchC3PO()
//   .then(console.log)
//   .catch(console.error)

async function fetchC3PO() {
  try {
    const c3po = await fetchStarWarsCharacter(2)
    console.log(c3po)
  } catch (error) {
    console.error(error)
  }
}

// fetchC3PO()

// const totalCostOfStarships = (...ids) => {
//   return Promise.all(ids.map(fetchStarWarsStarship))
//     .then(results => results.filter(result => result.name != null))
//     .then(starships => starships.map(({ cost_in_credits }) => cost_in_credits))
//     .then(costs => costs.map(cost => parseInt(cost, 10)))
//     .then(parsedCosts => parsedCosts.reduce((acc, cost) => acc + cost, 0))
// }

const totalCostOfStarships = async (...ids) => {
  try {
    const results = await Promise.all(ids.map(fetchStarWarsStarship))
    const starships = results.filter(result => result.name != null)
    const costs = starships.map(({ cost_in_credits }) => cost_in_credits)
    const parsedCosts = costs.map(cost => parseInt(cost, 10))
    const totalCost = parsedCosts.reduce((acc, cost) => acc + cost, 0)
    return totalCost
  } catch (error) {
    throw new Error('Something went wrong...')
  }

  // return Promise.all(ids.map(fetchStarWarsStarship))
  //   .then(results => results.filter(result => result.name != null))
  //   .then(starships => starships.map(({ cost_in_credits }) => cost_in_credits))
  //   .then(costs => costs.map(cost => parseInt(cost, 10)))
  //   .then(parsedCosts => parsedCosts.reduce((acc, cost) => acc + cost, 0))
}

module.exports = totalCostOfStarships

// totalCostOfStarships(1, 2, 3)
//   .then(console.log)
//   .catch(console.error)

// function* increment() {
//   let n = 0
//   while (n < 3) {
//     yield Promise.resolve(n++)
//   }
// }

// const it = increment()
// it.next().value.then(value => console.log(value))
// console.log(it.next().value)
// console.log(it.next().value)

// async/await

// button.addEventListener('click', event => {
// fetch('https://swapi.co/api/people/')
//   .then(response => response.json())
//   .then(({ results }) => fetch(results[0].url))
//   .then(response => response.json())
//   .then(getSingleUser)
//   .then(getName)
//   .then(console.log)
//   .catch(console.error)
// })

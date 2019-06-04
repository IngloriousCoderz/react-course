const path = require('path')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

const PORT = process.env.PORT || 3000
const STATUS_CREATED = 201
const STATUS_NO_CONTENT = 204
const STATUS_NOT_FOUND = 404

const app = express()
app.use(cors({ origin: true, credentials: true }))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

let todos = [
  { id: 1, text: 'Todo 1', done: true },
  { id: 2, text: 'Todo 2', done: false },
  { id: 3, text: 'Todo 3' },
]

app.get('/todos', (request, response) => {
  response.json(todos)
})

app.get('/todos/:id', (request, response) => {
  const index = findIndex(request)
  if (index === -1) {
    response.status(STATUS_NOT_FOUND).send('Not Found')
  }
  const todo = todos[index]
  response.json(todo)
})

app.post('/todos', (request, response) => {
  const maxId = todos.length ? todos[todos.length - 1].id : 0
  const todo = { ...request.body, id: maxId + 1 }
  todos = [...todos, todo]
  response.status(STATUS_CREATED).json(todo)
})

app.put('/todos/:id', (request, response) => {
  const index = findIndex(request)
  const todo = request.body

  // 1. copy and mutate
  // todos = [...todos]
  // todos[index] = todo

  // 2. full declarative
  // todos = [...todos.slice(0, index), todo, ...todos.slice(index + 1)]

  // 3. map
  todos = todos.map((t, i) => (i === index ? todo : t))
  response.status(STATUS_NO_CONTENT).send()
})

app.patch('/todos/:id', (request, response) => {
  const index = findIndex(request)
  const changes = request.body
  todos = todos.map((t, i) => (i === index ? { ...t, ...changes } : t))
  response.status(STATUS_NO_CONTENT).send()
})

app.delete('/todos', (request, response) => {
  todos = []
  response.status(STATUS_NO_CONTENT).send()
})

app.delete('/todos/:id', (request, response) => {
  // const index = findIndex(request)

  // 1. copy and mutate
  // todos = [...todos]
  // todos.splice(index, 1)

  // 2. full declarative
  // todos = [...todos.slice(0, index), ...todos.slice(index + 1)]

  // 3. filter
  todos = todos.filter(todo => todo.id !== parseInt(request.params.id, 10))
  response.status(STATUS_NO_CONTENT).send()
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))

function findIndex(request) {
  const { id } = request.params
  return todos.findIndex(todo => todo.id === parseInt(id, 10))
}

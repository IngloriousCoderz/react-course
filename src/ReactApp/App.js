import React, { Component } from 'react'

import Form from './Form/Hooks'
import List from './List'

import * as api from '../api'

class App extends Component {
  state = { dirty: true, todos: [] }

  fetchTodos = async () => {
    const todos = await api.all()
    this.setState({ dirty: false, todos })
  }

  addTodoAndRefresh = async text => {
    await api.add({ text })
    this.setState({ dirty: true })
  }

  addTodoOnServerAndClient = async text => {
    const todo = await api.add({ text })
    this.setState(({ todos }) => ({ todos: [...todos, todo] }))
  }

  addTodoWithOptimisticUpdate = async text => {
    const todo = { id: 'new', text }
    this.setState(({ todos }) => ({ todos: [...todos, todo] }))
    try {
      const newTodo = await api.add({ text })
      this.setState(({ todos }) => ({
        todos: todos.map(todo => (todo.id === 'new' ? newTodo : todo)),
      }))
    } catch (e) {
      this.setState(({ todos }) => ({
        todos: todos.filter(todo => todo.id !== 'new'),
      }))
    }
  }

  addTodoAsync = this.addTodoAndRefresh

  toggleDoneAsync = async id => {
    const todo = this.state.todos.find(todo => todo.id === id)
    await api.update(id, { done: !todo.done })
    this.setState({ dirty: true })
  }

  removeTodoAsync = async id => {
    await api.remove(id)
    this.setState({ dirty: true })
  }

  addTodo = async text => {
    this.setState(({ todos }) => {
      const id = todos.length ? todos[todos.length - 1].id : 0
      return { todos: [...todos, { id: id + 1, text }] }
    })
  }

  toggleDone = id => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    }))
  }

  removeTodo = id => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== id),
    }))
  }

  componentDidMount() {
    const { dirty } = this.state
    if (dirty) {
      this.fetchTodos()
    }
  }

  componentDidUpdate() {
    const { dirty } = this.state
    if (dirty) {
      this.fetchTodos()
    }
  }

  render() {
    const { title } = this.props
    const { dirty, todos } = this.state
    return (
      <>
        <h1>{title}</h1>
        <Form addTodo={this.addTodoAsync} />
        {dirty ? (
          <p>Loading...</p>
        ) : (
          <List
            todos={todos}
            toggleDone={this.toggleDoneAsync}
            removeTodo={this.removeTodoAsync}
          />
        )}
      </>
    )
  }
}

export default App

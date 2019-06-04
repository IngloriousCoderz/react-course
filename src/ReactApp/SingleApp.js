import React, { Component } from 'react'

class App extends Component {
  state = {
    text: '',
    todos: [
      { id: 1, text: 'Todo 1', done: true },
      { id: 2, text: 'Todo 2', done: false },
      { id: 3, text: 'Todo 3' },
    ],
  }

  handleChange = event => this.setText(event.target.value)

  handleSubmit = event => {
    event.preventDefault()
    const { text } = this.state
    this.addTodo(text)
    this.setText('')
  }

  setText = text => this.setState({ text })

  addTodo = text => {
    const { todos } = this.state
    const id = todos.length ? todos[todos.length - 1].id : 0
    this.setState({ todos: [...todos, { id: id + 1, text }] })
  }

  handleClick = id => event => this.toggleDone(id)

  toggleDone = id => {
    const { todos } = this.state
    this.setState({
      todos: todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps !== this.props || nextState !== this.state
  }

  render() {
    const { text, todos } = this.state
    return (
      <>
        <form>
          <input
            placeholder="What next?"
            autoFocus={true}
            // defaultValue="Todo 4"
            // ref={this.myInput}
            value={text}
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Add
          </button>
        </form>
        <ul>
          {todos.map(({ id, done, text }) => (
            <li
              key={id}
              className={done ? 'done' : undefined}
              onClick={this.handleClick(id)}>
              {text}
            </li>
          ))}
        </ul>
      </>
    )
  }
}

export default App

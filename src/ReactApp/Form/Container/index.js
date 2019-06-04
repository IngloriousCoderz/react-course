import React, { PureComponent } from 'react'

import Form from './Form'

class FormContainer extends PureComponent {
  state = { text: '' }

  handleChange = event => this.setText(event.target.value)

  handleSubmit = event => {
    event.preventDefault()
    const { addTodo } = this.props
    const { text } = this.state
    addTodo(text)
    this.setText('')
  }

  setText = text => this.setState({ text })

  render() {
    const { text } = this.state
    return (
      <Form
        text={text}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

FormContainer.defaultProps = {
  addTodo: text => console.log(text),
}

export default FormContainer

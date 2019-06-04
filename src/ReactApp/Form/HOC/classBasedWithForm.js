import React, { PureComponent } from 'react'

// Higher-Order Component

export const withForm = Enhanced => {
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
        <Enhanced
          text={text}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }

  return FormContainer
}

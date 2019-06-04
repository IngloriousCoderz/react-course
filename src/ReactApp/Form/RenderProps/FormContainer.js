import { PureComponent } from 'react'

class FormContainer extends PureComponent {
  handleChange = event => this.setText(event.target.value)

  handleSubmit = event => {
    event.preventDefault()
    const { addTodo } = this.props
    const { text } = this.state
    addTodo(text)
    this.setText('')
  }

  state = {
    text: '',
    handleChange: this.handleChange,
    handleSubmit: this.handleSubmit,
  }

  setText = text => this.setState({ text })

  render() {
    return this.props.children(this.state)
  }
}

export default FormContainer

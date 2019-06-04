import { compose, withState, withHandlers } from 'recompose'

// (f o g)(x) = f(g(x))
// const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x)

export const withForm = compose(
  withState('text', 'setText', ''),

  withHandlers({
    handleChange: ({ setText }) => event => setText(event.target.value),

    handleSubmit: ({ addTodo, text, setText }) => event => {
      event.preventDefault()
      addTodo(text)
      setText('')
    },
  }),
)

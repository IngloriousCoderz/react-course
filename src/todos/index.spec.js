import * as actions from './actions'
import todos from '.'

describe('Todos App', () => {
  it('should make app dirty', () => {
    const stateBefore = {
      dirty: false,
      text: 'Todo 3',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
      ],
    }
    const action = actions.setDirty(true)
    const stateAfter = {
      dirty: true,
      text: 'Todo 3',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
      ],
    }

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should add a todo', () => {
    const stateBefore = {
      text: 'Todo 3',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
      ],
    }
    const action = actions.addTodo('Todo 3')
    const stateAfter = {
      dirty: false,
      text: '',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should toggle the "done" property on a todo', () => {
    const stateBefore = {
      text: 'Meh',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }
    const action = actions.toggleDone(2)
    const stateAfter = {
      dirty: false,
      text: 'Meh',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: true },
        { id: 3, text: 'Todo 3' },
      ],
    }

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should remove a todo', () => {
    const stateBefore = {
      text: 'Meh',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }
    const action = actions.removeTodo(2)
    const stateAfter = {
      dirty: false,
      text: 'Meh',
      todos: [{ id: 1, text: 'Todo 1', done: true }, { id: 3, text: 'Todo 3' }],
    }

    expect(todos(stateBefore, action)).toEqual(stateAfter)
  })

  it('should ignore an unrecognized action', () => {
    const stateBefore = {
      dirty: false,
      text: 'Meh',
      todos: [
        { id: 1, text: 'Todo 1', done: true },
        { id: 2, text: 'Todo 2', done: false },
        { id: 3, text: 'Todo 3' },
      ],
    }
    const action = { type: 'UNKNOWN' }

    expect(todos(stateBefore, action)).toBe(stateBefore)
  })
})

import { fetchTodosSaga } from './sagas'

describe('Sagas', () => {
  it('should run saga correctly', () => {
    const it = fetchTodosSaga()

    {
      const { value, done } = it.next()
      expect(value.type).toBe('CALL')
      expect(done).toBe(false)
    }

    {
      const todos = [{ id: 1, text: 'Todo 1', done: true }]
      const { value, done } = it.next(todos)
      expect(value.payload.action).toEqual({
        type: 'TODOS_RECEIVED',
        payload: todos,
      })
      expect(done).toBe(false)
    }

    {
      const { value, done } = it.next()
      expect(value).toBeUndefined()
      expect(done).toBe(true)
    }
  })
})

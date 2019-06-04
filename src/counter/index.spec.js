import counter, * as actions from '.'

describe('Counter App', () => {
  it('should initialize state', () => {
    // given
    const stateBefore = undefined
    const action = { type: 'UNRECOGNIZED' }
    const stateAfter = { count: 0 }

    // when
    const state = counter(stateBefore, action)

    // then
    expect(state).toEqual(stateAfter)
  })

  it('should increment counter', () => {
    // given
    const stateBefore = { count: 3 }
    const action = actions.increment(2)
    const stateAfter = { count: 5 }

    // when
    const state = counter(stateBefore, action)

    // then
    expect(state).toEqual(stateAfter)
  })

  it('should decrement counter', () => {
    // given
    const stateBefore = { count: 3 }
    const action = actions.decrement(1)
    const stateAfter = { count: 2 }

    // when
    const state = counter(stateBefore, action)

    // then
    expect(state).toEqual(stateAfter)
  })

  it('should set a given value', () => {
    // given
    const stateBefore = { count: 3 }
    const action = actions.setValue(7)
    const stateAfter = { count: 7 }

    // when
    const state = counter(stateBefore, action)

    // then
    expect(state).toEqual(stateAfter)
  })
})

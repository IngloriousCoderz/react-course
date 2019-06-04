const expect = require('expect')

const { composition } = require('../server/composition')

describe('My first test', () => {
  it('should just work', () => {
    expect(true).toBe(true)
  })

  it('should compose functions', () => {
    // given
    const stateBefore = 'hello world'
    const stateAfter = '<h1>HELLO WORLD!</h1>'

    // when
    const state = composition(stateBefore)

    // then
    expect(state).toBe(stateAfter)
  })
})

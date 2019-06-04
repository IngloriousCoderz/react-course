const expect = require('expect')
const totalCostOfStarships = require('../server/async')

describe('Async functions', () => {
  it('should calculate total cost of given starships', async () => {
    // given
    const stateBefore = [1, 2, 3]
    const stateAfter = 153500000

    // when
    const state = await totalCostOfStarships(...stateBefore)

    // then
    expect(state).toBe(stateAfter)
  })
})

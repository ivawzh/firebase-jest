import doSomething from '../index'
import initStore from '../store'
const db = initStore()

describe('.doSomething', () => {
  beforeEach(async () => {
    await db.remove()
  }, 90000)

  it('pushes hello world', async () => {
    await doSomething()
    const snap = await db.once('value')
    const data = snap.val()
    expect(data).toEqual({ hello: 'world' })
  })
})
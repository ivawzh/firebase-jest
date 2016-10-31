import doSomething from '../index'
import initStore from '../store'
const db = initStore()

describe('.doSomething', () => {
  beforeEach(async () => {
    await db.remove()
  })

  it('pushes hello world', async () => {
    await doSomething()
    const snap = db.once('value')
    const data = snap.val()
    expect(data).toEqual({ hello: 'world' })
  })
})
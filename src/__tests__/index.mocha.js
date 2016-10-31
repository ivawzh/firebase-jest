import doSomething from '../index'
import initStore from '../store'
import { expect } from 'chai'
const db = initStore()

describe('.doSomething', () => {
  beforeEach(async function() {
    this.timeout(5000)
    await db.remove()
  })

  it('pushes hello world', async () => {
    await doSomething()
    const snap = await db.once('value')
    const data = snap.val()
    expect(data).to.eql({ hello: 'world' })
  })
})
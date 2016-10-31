import initStore from '../store'

describe('store', () => {
  let store
  beforeEach(() => {
    store = initStore()
  })

  describe('.set', () => {
    beforeEach(async () => {
      await store.remove()
    })

    it('adds data to the path', async () => {
      await store.set({hello: 'world'})
      const data = await store.once('value')
      expect(data.val()).toEqual({hello: 'world'})
    })
  })

  describe('.remove', () => {
    it('deletes all data', async () => {
      await store.push({hello: 'world'})
      await store.remove()
      const snap = await store.once('value')
      expect(snap.val()).toBeNull()
      expect(snap.exists()).toBe(false)
    })
  })
})


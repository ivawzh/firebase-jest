import firebase from 'firebase'
//const firebase = require('firebase').default

describe('jest with firebase', () => {
  it('is at least loadable', () => {
    expect(firebase).not.toBeUndefined()
  })
})
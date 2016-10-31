import firebase from 'firebase'
import env from '../env'

const appName = 'dummyApp'

firebase.database.enableLogging(false)

export default function initStore() {
  let app
  try {
    app = firebase.app(appName)
  } catch (notExistError) {
    app = firebase.initializeApp(env.secret, appName)
  }
  const database = app.database()
  const store = database.ref(env.rootRef)
  return store
}
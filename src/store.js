import firebase from 'firebase'
import env from './env'

const appName = 'dummyApp'
const rootRef = '/test/default-user'

export default function initStore(): firebase.database.Reference {
  let app: firebase.app.app
  try {
    app = firebase.app(appName)
  } catch (initializedError) {
    app = firebase.initializeApp(env.secret, appName)
  }
  const Database: firebase.database.Database = app.database()
  const store: firebase.database.Reference = Database.ref(rootRef)
  return store
}
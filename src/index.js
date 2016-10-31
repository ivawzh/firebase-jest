import initStore from './store'
const db = initStore()

export default async function doSomething() {
  await db.push({hello: 'world'})
}
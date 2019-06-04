import axios from 'axios'

const http = axios.create({
  baseURL: 'http://localhost:3002/todos',
})

export async function all() {
  const { data } = await http.get()
  return data
}

export async function get(id) {
  const { data } = await http.get(id)
  return data
}

export async function add(todo) {
  const { data } = await http.post('', todo)
  return data
}

export async function update(id, changes) {
  await http.patch('' + id, changes)
}

export async function clear() {
  await http.delete('')
}

export async function remove(id) {
  await http.delete('' + id)
}

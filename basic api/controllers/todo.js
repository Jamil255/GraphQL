import axios from 'axios'

export const getAllTodo = async () => {
  try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos/')
    // console.log(data)
    return data.data
  } catch (error) {
    console.log(error.message)
  }
}

export const getAllTodoUsers = async () => {
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users')
    return users.data
  } catch (error) {
    console.log(error.message)
  }
}

export const todoName = async (todo) => {
  try {
    const userData = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${todo.id}`
    )
    const data = userData
    return (data = userData)
  } catch (error) {
    console.log(error.message)
  }
}

import axios from 'axios'

export const getAllTodo = async () => {
  try {
    const data = await axios.get('https://jsonplaceholder.typicode.com/todos')
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

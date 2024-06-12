import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gql, useQuery } from '@apollo/client'

function App() {
  const [count, setCount] = useState(0)
  const query = gql`
    query getUser {
      users {
        name
        username
        email
        phone
      }
    }
  `
  const { data, error, loading } = useQuery(query)
  console.log(data)

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {/* {data?.map((pro) => {
        return (
          <div key={pro.name}>
            <h3>{pro?.username}</h3>
          </div>
        )
      })} */}
          <h3>{ JSON.stringify(data)}</h3>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MyComponent = ({name, surname}) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> -----> { surname } </h1>
      <h1>{name} + Vite + React20</h1>
    </>
  )
}

export default MyComponent

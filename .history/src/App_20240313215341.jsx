import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const MyComponent = () => {
  const [count, setCount] = useState(0)

  const myName = 'Miguel2';

  return (
    <>
      <h1>{myName} + Vite + React20</h1>
    </>
  )
}

export default MyComponent

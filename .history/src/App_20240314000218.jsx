import { useState } from 'react'
import PropTypes from 'prop-types';
import './App.css'

const MyComponent = ({name, surname}) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> ----- { surname } </h1>
      <h1>{name} + Vite + React20</h1>
    </>
  )
}

MyComponent.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.count
};

export default MyComponent

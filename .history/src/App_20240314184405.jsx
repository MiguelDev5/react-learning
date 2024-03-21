import { useState } from 'react'
import PropTypes from 'prop-types';
import './App.css'

const MyComponent = ({name, surname}) => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> ----- { surname } </h1>
      <h1>{name} + Vite + {age}</h1>
    </>
  )
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  surname: PropTypes.number.isRequired
};

MyComponent.defaultProps = {
  name: 'default',
  surname: 'default',
  age: 2024
};

export default MyComponent

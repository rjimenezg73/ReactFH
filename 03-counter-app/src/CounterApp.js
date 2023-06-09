import React, {useState} from "react";
import PropTypes from 'prop-types';



const CounterApp = ({value}) => {

  const [counter, setCounter] = useState(value);

  // handleReset
  const handleReset = () => {
    setCounter(value);
  }

  // handleAdd
  const handleAdd = () => {
    setCounter(counter + 1);
  }

  // handleSubtract
  const handleSubtract = () => {
    setCounter(counter - 1);
  } 

  return(
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={ handleAdd }>+ 1</button>
      <button onClick={ handleReset }>Reset</button>
      <button onClick={ handleSubtract }>- 1</button>
    </>
  )
 
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

export default CounterApp;
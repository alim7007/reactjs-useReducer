import React, { useState, useReducer } from 'react'
import './App.css';
import { StateReducer, CountReducer } from './StateReducer'

function App() {
  const [count, dispatch] = useReducer(StateReducer, { initialCount: 10, count: 0 });
  const [state2, dispatch2] = useReducer(StateReducer, { initialCount: 10, count: 0 })

  const handlePlus = () => {
    dispatch({ type: 'INCREASE_OR_DECREASE_BY', by: 1 });
  }
  const handleMinus = () => {
    dispatch({ type: 'INCREASE_OR_DECREASE_BY', by: -1 });
  }
  // const handlePlus2 = () => {
  //   dispatch2({ type: 'INC' })
  // }
  // const handleMinus2 = () => {
  //   dispatch2({ type: 'DEC' })
  // }

  return (
    <div className="App">
      <div>
        <button onClick={handlePlus}>+</button>
        <p>{count.count}</p>
        <button onClick={handleMinus}>-</button>
      </div>
      {/* <div>
        <button onClick={handlePlus2}>+</button>
        <p>{state2.count}</p>
        <p>{state2.initialCount}</p>
        <button onClick={handleMinus2}>-</button>
      </div> */}
    </div>
  );
}

export default App;

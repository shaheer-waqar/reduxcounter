import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from '../store/slices/countereSlice';

function Button() {
    const dispatch = useDispatch()
  return (
    <>
    <button onClick={()=> dispatch(incrementCounter())}>Add</button>
    <button onClick={()=> dispatch(decrementCounter())}>Minus</button>
    <button onClick={()=> dispatch(resetCounter())}>Reset</button>
    </>
  )
}

export default Button
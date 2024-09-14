import React from 'react'
import { useSelector } from 'react-redux';

function Header() {
    const {counter} = useSelector(state => state.counterReducer);

  return (
    <h1>Counter : {counter}</h1>
  )
}

export default Header
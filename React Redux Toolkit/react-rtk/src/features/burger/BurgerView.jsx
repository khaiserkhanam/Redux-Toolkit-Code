import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { burger_order } from './burgerSlice';

function BurgerView() {
  const burgerBuns=useSelector((state)=>state.burger.burgerBuns);
  const dispatch=useDispatch();
  return (
    <div>
      <h2>Number of burger buns-{burgerBuns}</h2>
      <button onClick={()=>dispatch(burger_order())}>Order Burger</button>
    </div>
  )
}

export default BurgerView

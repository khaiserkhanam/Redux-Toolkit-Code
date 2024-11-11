import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { customer_choice, pizza_order } from './pizzaSlice';

function PizzaView() {
 const pizzaBase= useSelector((state)=>state.pizza.pizzaBase)
 const dispatch=useDispatch();
 const [number,setNumber]=useState(1);
 
  return (
    <div>
      <h2>Number of pizza base-{pizzaBase}</h2>
      <input type="text" value={number} onChange={(e)=>setNumber(Number(e.target.value))}/>
      <button onClick={()=>dispatch(customer_choice(number))}>Customer Choice</button>
    <button onClick={()=>dispatch(pizza_order())}>Order Pizza</button>
    </div>
  )
}

export default PizzaView

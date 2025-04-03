import React, { useEffect } from "react";
import { useState } from "react";
import { appContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Orders from "./Orders";
export default function Cart() {
  const { cart, setCart, products,user,orders,setOrders } = useContext(appContext);
 
  const [orderValue, setOrderValue] = useState(0); 
  const navi = useNavigate();
  const handleDelete = (id) => {
    setCart({ ...cart, [id]: 0 });
  };
  const increment=(id)=>{
    setCart({...cart,[id]:cart[id]+1})
  }
  const decrement=(id)=>{
    setCart({...cart,[id]:cart[id]-1})
  }
  const placeOrder =()=>{
    setOrders([...orders,
      {orderDate:Date(),
        email: user.email,
        items : cart,
        total : orderValue,
        status : "pending"
      },]);
      setCart({});  
      navi("/orders")
  }
  useEffect(()=>{
    setOrderValue(products.reduce((total,value)=>{
      return total+value.price*(cart[value.id]??0)},0)
    )},[cart])
  return (
    <div>
      <h2>My Cart</h2>
      {products.map(
        (value) =>
          cart[value.id]>0 && (
            <div key={value.id}>
              {value.name} - {value.price} - <button onClick={()=>decrement(value.id)}> - </button> {cart[value.id]} <button onClick={()=>increment(value.id)}> + </button> -
              {value.price * cart[value.id]}-
              <button onClick={() => handleDelete(value.id)}>Delete</button>
            </div>
          )
      )}
      
    <hr></hr>
    <p>
        {user.email ? (
          <button onClick={placeOrder}>Place Order</button>
        ) : (
          <button onClick={()=>navi("/login")}>Login to Order</button>
        )}
      </p>
    </div>
  );
}
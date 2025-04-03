import "./Header.css";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";
export default function Header() {
  const {user,setUser} = useContext(appContext)
  return (
    <div className="App-Header-Row">
      <h1>My React Store</h1>
      <div className="App-Header-Links">
        <Link to="products" className="App-Header-Link">Home</Link>
        <Link to="cart" className="App-Header-Link">Cart</Link>
        <Link to="orders" className="App-Header-Link">Orders</Link>
        {user.name == "" ? (<Link to="login" className="App-Header-Link">Login</Link>):
        (<Link to="login" className="App-Header-Link" onClick={()=> setUser({...user,name:"",email:"",password:""})}>Logout</Link>)}
        
        
      </div>
    </div>
  );
}
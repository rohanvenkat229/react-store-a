import React, { useContext,useState } from 'react'
import { Link } from 'react-router-dom'
import { appContext } from '../App'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const {user,setUser,users} = useContext(appContext)
  const navi = useNavigate()
  const {msg,setMsg}=useState()
  const handleSubmit=()=>{
    const found = users.find((value)=>value.email ==user.email && value.password == user.password)
    if(found){
      user.name = found.name
      navi("/")
    }
    else{
      setMsg=("Invalid User")
    }
  }
  return (
    <div>
      <h3>Login Form</h3>
      <p><input type="text" placeholder='Email address' onChange={(e)=>setUser({...user, email:e.target.value})}></input></p>
      <p><input type="password" placeholder='Password'onChange={(e)=>setUser({...user, password:e.target.value})}></input></p>
      <p><button onClick={handleSubmit}>Log In</button></p>
      <p><Link to="../register">Create Account</Link></p>
    </div>
  )
}
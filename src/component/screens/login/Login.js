import React, { useState } from 'react'
import Header from '../../header/Header'
import "./Login.css"
import {auth} from "../../firebase"
import {Link, useNavigate } from 'react-router-dom';

const Login=()=>{
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  const navigate = useNavigate();
  
  const userLogin=(event)=>{
    event.preventDefault();

    // LOGIN LOGIC

    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      //log in 
      navigate("/")  

    })
    .catch((e)=>alert(e.message));
  }

  const userRegister=(event)=>{
    event.preventDefault();
    // const email1 = email.getText().toString().trim();

    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      //crete user

      navigate("/")
    })
    .catch((e)=>alert(e.message)) 
  }

  return (
    <>
    {/* <Header></Header> */}
    <div className="login">
      <Link to="/">
      <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1280px-Amazon_logo.svg.png" alt="logo"></img>
      </Link>
      <div className='login_container'>
        <h1 className='signin'>Sign in</h1>
        <form>
        <h5 className='input_title'>E-mail</h5>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
        <h5 className='input_title'>Password</h5>
        <input value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password"/>
        <button className='signin_button' onClick={userLogin}>Sign in</button>
        </form>
        <p>
          By signing in you agree to amazon conditions of use and sale.Please see our privacy 
          Notice our cookies notice and our interest-based ads notice.
        </p>
        <button className='register_button' onClick={userRegister}>Create your amazon account  </button>
      </div>
    </div>
    </>
  )
}

export default Login


// function Login() {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login
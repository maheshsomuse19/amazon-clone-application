import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Checkout from '../screens/checkout/Checkout';
import Header from '../header/Header';

const Main = () => {
  return (
    <Router>
    
        <Routes>
          <Route path="/" element={<Home/>}> </Route>

          <Route path="/login" element={<Login/>}/>

          <Route path="/checkout" element={<Checkout/>}>
          </Route>
        </Routes>
    </Router>
  );
}

export default Main;

// const Home=()=>{
//   return(
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   )
// }


// const Login=()=>{
//   return(
//     <div>
//       <h1>Login Page</h1>
//     </div>
//   )
// }

// const Checkout=()=>{
//   return(
//     <div>
//       <h1>Checkout Page</h1>
//     </div>
//   )
// }
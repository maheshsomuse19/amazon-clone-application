import React, {useContext,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../screens/home/Home';
import Login from '../screens/login/Login';
import Checkout from '../screens/checkout/Checkout';
// import Header from '../header/Header';
import { StateContext } from '../../App';
  import {auth} from '../firebase'
const Main = () => {
    const { state,dispatch } = useContext(StateContext);
    // const { dispatc } = useContext(StateContext);

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        // User is logged in.......

        dispatch({
            type:"SET_USER",
            user:authUser
          })
      }
      else{
        // user is logged out.........
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })

    return () =>{
      // Any cleanup operation here
      unsubscribe();
    }

  },[])

  console.log("User",state?.user)
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
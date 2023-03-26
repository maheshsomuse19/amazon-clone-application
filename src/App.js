import React, { useReducer } from 'react'
import Main from './component/main/Main';
import speakerImage from "./images/charger.png"
// import headfoneImage from "./images/Headfone.jpg"
// CREATE CONTEXT
export const StateContext = React.createContext();

export const getBasketTotal=(basket)=>{
  let price=0;
  basket.map((item)=>{
  price=price + item.price;
})
return price
}
// INITIAL DATA STATE
const initialState={
  basket:[
    {
      id: "1232120",
      title: "Amazon Echo Dot 4th Gen Alexa Built-in Smart",
      price: 89.53,
      rating: 5,
      image: speakerImage,

    },
  ],
  user:null,
}

const reducer=(state,action)=>{
  console.log("ACTION TYPE",action.type);
  console.log("ACTION PAYLOAD",action.payload);
  switch(action.type){

   // Set user
   case 'SET_USER':
    return{
      ...state,
      user:action.user
    } 

   // add item to basket   
   case 'ADD_TO_BASKET':
      return {
        ...state,
        basket:[...state.basket,action.payload]
      }
      break;  

   case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket:[...state.basket.filter(item=> item.id !== action.payload.id)]
      }
      break;   
   
   default:
      return state;   

  }
}

const App = () => {
  const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <StateContext.Provider value={{state,dispatch}}>
    <Main/>
    </StateContext.Provider>

  );
}

export default App;

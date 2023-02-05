import React, { useReducer } from 'react'
import Main from './component/main/Main';

// CREATE CONTEXT
export const StateContext = React.createContext();

// INITIAL DATA STATE
const initialState={
  basket:[],
}

const reducer=(state,action)=>{
  console.log("ACTION TYPE",action.type);
  console.log("ACTION PAYLOAD",action.payload);
  switch(action.type){

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

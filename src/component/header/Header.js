import React, { useState, useContext, useEffect, useMemo } from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { StateContext } from '../../App';
import { auth } from '../firebase';
const Header=(props)=> {
  const [searchText,setSearchText]=useState('')
  const {state}=useContext(StateContext);

  // const userName = useMemo(()=>state?.user ? state?.user : '',[state?.user])
  console.log("LOGIN USER",state.user)  

  // const onchangeText = (e)=>{
  //   setSearchText(e.target.value)
  // }
  // props.searchText(searchText)
  // useEffect(()=>{
  //   props.searchText(searchText)
  // },[searchText])
  
  const login= ()=>{
    if(state.user){
      auth.signOut()
    }
  }
  return (
    <nav className="header">
      {/* logo on the left image  */}
      <Link to="/login">
        {/* <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"></img> */}
        <h3 className="header_logo">Digital Store</h3>
      </Link>

      {/* search box */}
      <div className="header_search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />

      </div>

      {/* Links */}
      <div className="header_nav">
        {/* 1st link */}
        <Link to="/login" className="header_link">
          <div onClick={login} className="header_option">
            <span className="header_optionLineOne">Hello</span>
            <span className="header_optionLineTwo">{state?.user ? 'Sign Out' :'Sign In'}</span>
          </div>
        </Link>

        {/* 1st link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>
        </Link>


        {/* 4th link */}
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className="header_basketCount">{state.basket?.length}</span>
          </div>
        </Link>
      </div>


    </nav>
  )
}

export default Header
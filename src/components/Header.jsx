import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { Link, useNavigate, useNavigation } from 'react-router-dom'

const Header = () => {

  const navigate=useNavigate()
    
    const cart=useSelector((state)=>(state.cart.cart))

    
  return (
    <>
      <div className='header_cont'>
        <div>
            <h2 style={{marginLeft:"20px"}}>LOGO</h2>
        </div>
        <div className='header_2'>
            <h2 style={{cursor:"pointer"}} onClick={()=>navigate("/")}>Products</h2>
            <h2>About</h2>
            {/* <h2 style={{cursor:"pointer"}} onClick={()=>navigate("/cart")}>Cart: {cart.length}</h2> */}
            <Link to="/cart" style={{fontSize:"20px",color:"white"}}>Cart: {cart.length}</Link>
           
        </div>
      </div>
    </>
  )
}

export default Header

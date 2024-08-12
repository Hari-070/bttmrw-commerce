import React,{useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addToCart, decreamentItem, increamentItem, removeItem } from '../redux/cartSlice'

const CartProduct = (props) => {
    const item=props.item
    const dispatch=useDispatch()
    const carts=useSelector((state)=>state.cart.cart)
    console.log(carts)

    const handleInc=(item)=>{
        dispatch(increamentItem(item))
    }
    const handleMin=(item)=>{
        dispatch(decreamentItem(item))
        
    }
  return (
    <>
      <div className='cart_card' key={item.id}>
                <div className='cart_card_img'>
                  <img src={item.image} width="100%"/>
                </div>
                <div className='cart_card_1'>
                  <h1 style={{fontSize:"20px"}}>{item.title}</h1>
                      {/* <p style={{fontSize:"15px"}}>{item.description}</p> */}
                      <div className='cart_card_2'>
                        <div style={{display:"flex",gap:"5px"}}>
                          <button onClick={()=>handleMin(item)}>-</button>
                          <p>{item.quantity}</p>
                          <button onClick={()=>handleInc(item)}>+</button>
                          <button onClick={()=>dispatch(removeItem(item))}>delete</button>
                        </div>
                      <h3>${item.quantity*item.price}</h3>
                      </div>
                </div>
              </div>
    </>
  )
}

export default CartProduct

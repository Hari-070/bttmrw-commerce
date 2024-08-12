import React from 'react'
import './products.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import {toast} from 'react-hot-toast'


const ProductCard = (props) => {
    const item=props.item
    const dispatch=useDispatch()
    const cart=useSelector((state)=>state.cart.cart)
    // console.log(inCart)

    const handleCart=(item)=>{
        dispatch(addToCart(item))
        toast('Hello Darkness!',
          {
            icon: '👏',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
        const inCart=cart.filter((items)=>(
            items.id===item.id
        ))
        console.log(inCart)
    }
  return (
    <div>
      <div className='card' key={item.id}>
              <img src={item.image} width="160px"/>
            <h1 style={{fontSize:"18px"}}>{item.title}</h1>
            <h2>${item.price}</h2>
            {}
            <button onClick={()=>handleCart(item)}>{item.quantity?"Go To Cart":"Add"}</button>
            <Link to="/cart">click to cart</Link>
            
          </div>
    </div>
  )
}

export default ProductCard

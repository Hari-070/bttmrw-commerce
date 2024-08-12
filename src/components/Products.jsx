import React, { useState } from 'react'
import { products } from '../constants'
import './products.css'
import Searchbar from './Searchbar'
import { useDispatch, useSelector } from 'react-redux'
import { increament } from '../redux/counterSlice'
import { addToCart, increamentItem } from '../redux/cartSlice'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'
import Header from './Header'

function Products(props) {
    const [product,setProduct]=useState(products)
    const [isCart,setIsCart]=useState(true)
    const dispatch=useDispatch()
    const carts=useSelector((state)=>state.cart.cart)

    console.log(carts)
    const handleCart=(item)=>{
      if(carts.find((items)=>(
        items.id===item.id
      )))
        dispatch(increamentItem(item))
      else
        dispatch(addToCart(item))
    }
    
  return (
    <>
    <Header />

      <h1 style={{margin:"20px 10px"}}>Products</h1>
      <Searchbar search={props.search} setSearch={props.setSearch} cat={props.cat} setCat={props.setCat}/>
      <div className='card_cont'>
        {product.filter((val)=>(
          props.cat===''?val:val.category.toLowerCase()===props.cat.toLowerCase()
        )).filter((val)=>(
           (props.search=='')?val:val.title.toLowerCase().includes(props.search.toLowerCase())
        )).map((item)=>(
          <ProductCard item={item} key={item.id}/>
          // <div className='card' key={item.id}>
          //     <img src={item.image} width="160px"/>
          //   <h1 style={{fontSize:"18px"}}>{item.title}</h1>
          //   {/* <div className='card_1'>
          //     <p style={{fontSize:"15px"}}>{item.description}</p>
          //   </div> */}
          //   <h2>${item.price}</h2>
          //   {}
          //   <button onClick={()=>handleCart(item)}>{item.quantity?"Go To Cart":"Add"}</button>
          //   <Link to="/cart">click to cart</Link>
            
          // </div>
        ))}
      </div>
      
    </>
  )
}

export default Products

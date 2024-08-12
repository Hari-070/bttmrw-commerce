import React,{useState,useEffect, useMemo} from 'react'
import './products.css'
import { useSelector ,useDispatch} from 'react-redux'
import CartProduct from './CartProduct'
import { increamentItem } from '../redux/cartSlice'
import Header from './Header'

const Cart = () => {

    const cartItem=useSelector((state)=>state.cart.cart)
    const cart=[...new Set(cartItem)]
    //const [totPrice,setTotPrice]=useState(0)
    const dispatch=useDispatch()

    const totalPrice=useMemo(() => {
      let total=0
      cartItem.forEach((item)=>(
        total+=(item.price*item.quantity)
      ))
      return (total)
    }, [cartItem])
    const delivery=totalPrice*0.05
    

    // if(cart.length==0)
    //   return(
    // <>

    //   <h1 style={{marginTop:"20px"}}>Cart Items:</h1>
    //   
      
    // </>
    // )
    // else
      return (
    <div>
    <Header />

      <h1 style={{marginTop:"20px"}}>Cart Items:</h1>
      <div className='cart_main'>

      
        <div className='cart_part'>
          {cartItem.length==0?<h4 style={{marginTop:"30px",textAlign:"center",color:"grey"}}>No items in Cart</h4>:cartItem.map((item)=>(
              <CartProduct item={item}/>
          ))}
        </div>
        
        <div className='cart_check'>
            <div className='cart_check_box'>
              <div className='cart_check_head'>
                <h1>Price Details</h1>
              </div>
              <hr></hr>
              <div className='cart_check_body'>
                <h3>Subtotal: ${totalPrice} <br/><span style={{fontWeight:"200",fontSize:"15px"}}>({cartItem.length} items)</span></h3>
                
                <h3>Delivery Fees: <span style={{fontSize:"15px",fontWeight:"400"}}>${delivery}</span></h3>
                <h3>Total: <span style={{fontSize:"15px",fontWeight:"400"}}>${delivery+totalPrice}</span></h3>
                <button>Checkout</button>
              </div>
            </div>
        </div>
      

      </div>
      
      
    </div>
  )
}

export default Cart

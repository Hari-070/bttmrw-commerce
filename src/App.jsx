import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from './components/Products'
import Header from './components/Header'
import Searchbar from './components/Searchbar'
import Cart from './components/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Toaster} from 'react-hot-toast'

export default function App(){
  const [count,setCount]=useState(0)
  const [cart,setCart]=useState(0)
  const [search,setSearch]=useState('')
  const [cat,setCat]=useState('')
  const [cartItems,setCartItems]=useState([])

  const incCount=()=>{
    setCount((n)=>n)
  }
  return (
    <div>
    {/* <h1>hello</h1>
    <h1 style={{fontSize:"50px",color:"red"}}>{count}</h1>
    <button onClick={incCount}>Click to Increament</button>
    <button onClick={()=>setCount(0)}>Reset</button> */}
    
    <BrowserRouter>
    <Toaster/>
    <Routes>
      <Route path='/' element={<Products search={search} setSearch={setSearch} cartItem={cartItems} setCartItem={setCartItems} cat={cat} setCat={setCat}/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

// export default App
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cart:[],
        
    },
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push({...action.payload,quantity:1})
            
        },
        increamentItem:(state,action)=>{
            state.cart=state.cart.map((item)=>(
                action.payload.id===item.id?({...item,quantity:item.quantity+1}):(item)
            ))
        },
        decreamentItem:(state,action)=>{
            state.cart=state.cart.map((item)=>(
                action.payload.id===item.id?((item.quantity==0)?item:{...item,quantity:item.quantity-1}):item
            ))
        },
        removeItem:(state,action)=>{
            state.cart=state.cart.filter((item)=>(
                action.payload.id!=item.id
            ))
        }
    }
})

export const {addToCart,increamentItem,decreamentItem,removeItem} = cartSlice.actions
export default cartSlice.reducer 
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>{

    const [cartItems,setCartItems]=useState({});

     const addToCart=(ItemId)=>{
        if(!cartItems[ItemId])
        {
           setCartItems((prev)=>({...prev,[ItemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]+1}))
        }
     }
     const removeFromCart=(ItemId)=>{
            setCartItems((prev)=>({...prev,[ItemId]:prev[ItemId]-1}))
     }
     useEffect(()=>{
         console.log(cartItems);
     },[cartItems])

    const contextValue={
         food_list,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart,
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}
export default StoreContextProvider
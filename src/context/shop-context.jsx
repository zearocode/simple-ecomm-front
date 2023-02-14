import React, { createContext , useState } from 'react';
import { PRODUCTS } from '../product';


export const ShopContext = createContext(null);


const getDefCart = () => {
       let cart = {};
      for(let i = 1 ; i <PRODUCTS.length + 1 ; i++){
        cart[i] = 0;
         }
      return cart;
};

export const ShopContextProvider = (props) => {
  
    const [cartItems , setCartItems] = useState(getDefCart);

    const addToCart = (itemID) => {
        setCartItems((prev) => ({...prev , [itemID]: prev[itemID] + 1 }));
        
    };

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({...prev , [itemID]: prev[itemID] -1 }));
    };

    const updateCartInput = (newAmount , itemID) => {
        setCartItems((prev) => ({...prev , [itemID]: newAmount}));
    };

    console.log({cartItems});

    const contextValue = { cartItems , addToCart , removeFromCart , updateCartInput };

    return (

    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>

    );
  
};

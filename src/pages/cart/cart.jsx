import React , { useContext } from 'react'
import { PRODUCTS } from '../../product';
import { ShopContext } from '../../context/shop-context';
import { CartItem } from './cartitem';
import "./cart.css";

export const Cart = (props) => {

  const {  cartItems } = useContext(ShopContext);

  return (
    <div className="cart">
      
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0 ){
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
}

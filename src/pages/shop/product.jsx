import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const Product = (props) => {
    const { id, productName, price , productImage } = props.data;
    const { addToCart , removeFromCart , cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    

    return (
        <div className="product">
            <div className="proview">
                  <img src={productImage} alt='chutiya' />
            </div>
          
        <div className="description">
            <p>
              <b>{productName}</b>
            </p>
            <p> ${price}</p>
          </div>
          <div className="proBtns">
           <div className="addtoCart">
                <button className='addToCartBttn' onClick={() => addToCart(id)} > Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>} </button>
            </div>
            <div className="removefromCart">
                <button className='removeFromCartBttn' onClick={() => removeFromCart(id)}> Remove from Cart </button>
            </div>
          </div>

            
          </div>
    );

    
  
};

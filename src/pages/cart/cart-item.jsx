import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => {removeFromCart(id)
          window.dataLayer.push({ ecommerce: null });  
          window.dataLayer.push({
      'event': 'GTMecommerce',
      'event_name': 'decrease_item_count',
      'ecommerce': {
        'currency': 'USD',
        'value': {price},
        'current_count': cartItems[id]-1,
        'items': [
         {
           'item_id': id,
           'item_name': productName,
           'item_brand': "Gleborg's Belts",
           'price': price
         }]
      }
    });
    
        }
        }
          > - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => {addToCart(id)
          window.dataLayer.push({ ecommerce: null });  
          window.dataLayer.push({
      'event': 'GTMecommerce',
      'event_name': 'increase_item_count',
      'ecommerce': {
        'currency': 'USD',
        'value': {price},
        'current_count': cartItems[id]+1,
        'items': [
         {
           'item_id': id,
           'item_name': productName,
           'item_brand': "Gleborg's Belts",
           'price': price
         }]
      }
    });
        
        
        }
        
        
        
        }> + </button>
        </div>
      </div>
    </div>
  );
};

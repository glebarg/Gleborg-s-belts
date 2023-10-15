import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTSMEN } from "../../productsmen";

import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = (props) => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount= getTotalCartAmount(PRODUCTSMEN);
  
 
  
  const navigate = useNavigate();
  const resultArray = [];
  
     
    
  


  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTSMEN.map((product) => {
          if (cartItems[product.id] !== 0) {
            resultArray.push({
              
              'items':{
                'id': product.id,
                'quantity': cartItems[product.id],
                'productname':product.productName
              }
            });
            return <CartItem data={product} />;
          }
        })}
      </div>
      
      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() =>{ navigate("/shop");

window.dataLayer.push({
  'event': 'GTMevent',
  'event_name': 'shop_from_cart_click' 
});

      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
      }  }> Continue Shopping </button>
          <button
            onClick={() => {{
             alert("This feature is currently under development. Please wait for the next update.");
             window.dataLayer.push({ ecommerce: null });  
             window.dataLayer.push({
         'event': 'GTMecommerce',
         'event_name': 'checkout_cart',
         'ecommerce': {
           'currency': 'USD',
           'totalamount':totalAmount,
           'allitems':resultArray,
           
           
         }
       });
        console.log(resultArray);   
            
            
            
            
            
            }
              
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

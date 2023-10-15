import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} className="img-product"/>
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => {addToCart(id); 
      window.dataLayer.push({ ecommerce: null });  
      window.dataLayer.push({
  'event': 'GTMecommerce',
  'event_name': 'add_to_cart',
  'ecommerce': {
    'currency': 'USD',
    'value': {price},
    'items': [
     {
       'item_id': id,
       'item_name': productName,
       'item_brand': "Gleborg's Belts",
       'price': price
     }]
  }
}); }}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

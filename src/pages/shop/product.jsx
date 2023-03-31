import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./product.css";

export const Product = (props) => {
  
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[props.data.id];

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={props.data.imageUrl} alt={props.data.name} />
      </div>
      <div className="product-details">
        <h2>{props.data.name}</h2>
        <p>{props.data.description}</p>
        <h3>${props.data.price}</h3>
        <button className="addToCartBttn" onClick={() => addToCart(props.data.id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};

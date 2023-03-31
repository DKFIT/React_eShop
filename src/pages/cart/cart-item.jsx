import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
 
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={props.data.imageUrl} alt="" />
      <div className="description">
        <p>
          <b>{props.data.name}</b>
        </p>
        <p> Price: ${props.data.price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(props.data.id)}> - </button>
          <input
            value={cartItems[props.data.id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), props.data.id)}
          />
          <button onClick={() => addToCart(props.data.id)}> + </button>
        </div>
      </div>
    </div>
  );
};

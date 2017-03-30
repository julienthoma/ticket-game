import React from 'react'
import { CART_HEIGHT, CART_WIDTH } from './constants';

const Cart = ({ rawCart }) => {
  const {x, y} = rawCart;

  return (
    <div
      className="cart"
      style={{
        top: y,
        left: x,
        width: CART_WIDTH,
        height: CART_HEIGHT
      }}
    >
    </div>
  );
}

export default Cart;

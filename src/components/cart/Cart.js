import React, { useEffect, useState } from "react";

import "./cart.css";

import ProductDetail from "../productdetail/ProductDetail";
import Checkout from "../Checkout";
import { Button } from "react-bootstrap";

export const Cart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkout, setCheckout] = useState(false);

  useEffect(() => {
    calculateTotalPrice();
  }, [props.checkoutItems]);

  const calculateTotalPrice = () => {
    let tempTotal = 0;
    for (let id in props.checkoutItems) {
      tempTotal +=
        props.checkoutItems[id]["price"] * props.checkoutItems[id]["count"];
    }
    setTotalPrice(parseFloat(tempTotal).toFixed(2));
  };

  const toggleCheckout = () => setCheckout(!checkout);

  let cartItems = [];

  for (let item in props.checkoutItems) {
    cartItems.push(
      <ProductDetail
        Key={item.id}
        inCart={true}
        product={props.checkoutItems[item]}
        removeFromCart={props.removeFromCart}
        incCount={props.incCount}
        decCount={props.decCount}
      />
    );
  }

  return (
    <div id="cart">
      <div className='payment-gateway'>
        {checkout && <Checkout description="Many" value={totalPrice}/>}
      </div>
      {Object.keys(cartItems).length > 0 && !checkout && (
        <div>
          {cartItems.map((item) => item)}
        </div>
      )}
      {Object.keys(cartItems).length == 0 && !checkout && (
        <center className="mt-5">Empty</center>
      )}

      <div className="checkout-button mt-5">
        <div className="total-price">Total Price: ${totalPrice}</div>
        <Button
          className="mt-5 mb-5 bg-success"
          onClick={() => toggleCheckout()}
        >
          {checkout ? "GO BACK" : "CHECKOUT"}
        </Button>
      </div>
    </div>
  );
};

export default Cart;

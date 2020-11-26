import * as React from "react";
import { Button } from "react-bootstrap";

import "./productdetails.css";

export const ProductDetail = (props) => {
  let product = props.product;
  return (
    <div>
      <div className="product-details row">
        <img className="col-md-3" src={product.image} />
        <div className="col-md-6 product-description">
          <h3 className="product-title">{product.title}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">${product.price}</p>
          {!props.inCart && (
            <Button
              onClick={() => props.addToCart(product.id)}
              className="bg-warning"
            >
              Add to Cart
            </Button>
          )}

          {props.inCart && (
            <div className="qty-buttons">
              <Button className="qty-change bg-warning" onClick={() => {props.decCount(product.id)} }> - </Button>
              <span className='item-count'>{product.count}</span>
              <Button className="qty-change bg-warning" onClick={() => {props.incCount(product.id)} }> + </Button>
            </div>
          )}
        </div>
      </div>

      {!props.inCart && (
        <Button
          onClick={() => props.showDetails(product.id)}
          className="return-button bg-warning ml-auto"
        >Return</Button>
      )
        ||
        (<Button
          onClick={() => props.removeFromCart(product.id)}
          className="return-button bg-danger ml-auto"
        >Remove</Button>
      )}

    </div>
  );
};

export default ProductDetail;

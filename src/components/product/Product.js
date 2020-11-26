import * as React from 'react';
import {Button} from 'react-bootstrap';
import './product.css'

export const Product = (props) => {
    return (
        <>
            <img src={props.image} className="product-image" onClick={() => props.showProductDetails(props.id)}/>
            <div className="product-info">
                <h6 className="product-title">{props.title.slice(0,60)}</h6>
                <hr/> 
                <footer className="product-footer">
                    <small className="product-price">${props.price}</small>
                    <Button onClick={()=> props.addToCart(props.id)} className="bg-warning">Add to Cart</Button>
                </footer>
            </div>
        </>
    );
};

export default Product;
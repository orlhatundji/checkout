import React, { useEffect, useState } from "react";
import { Nav, Navbar, Button, Form, FormControl } from "react-bootstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import cart from "./cart.svg";

import Product from "./components/product/Product";
import ProductDetail from "./components/productdetail/ProductDetail";
import Cart from "./components/cart/Cart";

function App() {
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [checkoutItems, setCheckoutItems] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("checkout")) {
      setCheckoutItems(JSON.parse(localStorage.getItem("checkout")));
    }
    console.log("LocalStorage Checkout", localStorage.getItem("checkout"));
    const url = "https://fakestoreapi.com/products";
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        console.log(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const showHome = () => {
    setShowDetails(false);
    setCheckout(false);
  };

  const showProductDetails = (id) => {
    setShowDetails(!showDetails);
    setCurrentProduct(products[id - 1]);
  };

  const calculateTotalPrice = () => {
    let tempTotal = 0;
    for (let id in checkoutItems){
        tempTotal += checkoutItems[id]['price'] * checkoutItems[id]['count']
    }
    setTotalPrice(tempTotal);
}

  const addToCart = (id) => {
    let temp = { ...checkoutItems };
    if (!checkoutItems[id]) {
      temp[id] = { ...products[id - 1] };
      temp[id]["count"] = 1;
      setCheckoutItems({ ...temp });
    }
    calculateTotalPrice();
    localStorage.setItem("checkout", JSON.stringify(temp));
  };

  const removeFromCart = (id) => {
    let items = {...checkoutItems};
    if (items.hasOwnProperty(id)) {
      delete items[id];
      setCheckoutItems({...items});      
    }
    calculateTotalPrice();
    localStorage.setItem("checkout", JSON.stringify(items));
  };

  const incCount = (id) => {
    let items = { ...checkoutItems };
    items[id]["count"] += 1;
    setCheckoutItems({...items});
    calculateTotalPrice();
    localStorage.setItem("checkout", JSON.stringify(items));
  };

  const decCount = (id) => {
    let items = { ...checkoutItems };
    if(items[id]['count'] > 1){
    items[id]["count"] -= 1;
    setCheckoutItems({...items});
    }
    calculateTotalPrice();
    localStorage.setItem("checkout", JSON.stringify(items));
  };

  return (
    <div className="App container">
      <Navbar bg="light" expand="lg" fixed="top" className="container mb-5">
        <Navbar.Brand>
          <Nav.Link onClick={() => showHome()}>Check-Out</Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => showHome()}>Home</Nav.Link>
            <Nav.Link href="#">
              <div id="cart-link" onClick={() => setCheckout(true)}>
                <img id="cart-logo" src={cart} />
                {Object.keys(checkoutItems).length > 0 && (
                  <div id="no-of-items-in-cart">{Object.keys(checkoutItems).length}</div>
                )}
              </div>
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <hr />

      {!showDetails && !checkout && (
        <div className="row products-section mt-5">
          {products.map((product) => (
            <div className="product-item col-md-4 col-lg-3">
              <Product
                Key={product.id}
                showProductDetails={showProductDetails}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                image={product.image}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>
      )}

      {showDetails && !checkout && (
        <ProductDetail
          product={currentProduct}
          showDetails={showProductDetails}
          addToCart={addToCart}
        />
      )}

      {checkout && (
        <Cart
          // items={userItems}
          products={products}
          removeFromCart={removeFromCart}
          checkoutItems={checkoutItems}
          incCount={incCount}
          decCount={decCount}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
}

export default App;

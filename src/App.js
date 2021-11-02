import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./Container/Components/NavBar";
import Home from "./Container/Components/Home";
import Cart from "./Container/Components/Cart";
import ProductDetails from "./Container/Components/ProductDetails";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/product/:productId" exact component={ProductDetails} />
      </Router>
    </Provider>
  );
}

export default App;

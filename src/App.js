import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./Container/Components/NavBar";
import Home from "./Container/Components/Home";
import Cart from "./Container/Components/Cart";

function App() {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/cart" exact component={Cart} />
    </Router>
  );
}

export default App;

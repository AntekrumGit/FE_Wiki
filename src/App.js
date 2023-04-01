import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import InputRange from "./reactTasks/inputRange/InputRange";

function App() {
  return (
    <>
    <div style= {{position: "fixed", backgroundColor: "black", opacity: 0.7, left: 0, top: 0, bottom:0, right: 0}}></div>
    <div style= {{position: "absolute", width: "500px", padding: 5, backgroundColor: "white", top: "50%", left: "50%", right: "50%", transform: "translate(-50%, -50%)" }}></div>
    </>

    // <InputRange/>

    // <div className="App">
    //   <Router>
    //     <Header />
    //     <Switch>
    //       <Route path="/" exact component={ProductListing} />
    //       <Route path="/product/:productId" component={ProductDetails} />
    //       <Route>404 Not Found!</Route>
    //     </Switch>
    //   </Router>
    // </div>
  );
}

export default App;

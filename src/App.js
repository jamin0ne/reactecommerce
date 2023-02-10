import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import HomePage from "./Home/HomePage";
import AboutUsPage from "./ContactUs/contactUsPage";
import ProductPage from "./Products/ProductPage"
import CartPage from "./Cart/cartPage";
import AddingItem from "./Others/AddingItem";
import SuccessPage from "./Others/SuccessfulPage";
import Errorpage from "./Others/Errorpage";
import Layout from "./UiLayout/layout";
import "./App.css";
import "./moteefe-font/Moteefe-lgL5q.ttf"

function App() {
  const location = useLocation();

  return (
    <Layout location={location}>
      <Switch>
        <Route path="/" exact>
         <span><HomePage /></span>
        </Route>
        <Route path="/AboutUsPage">
          <AboutUsPage />
        </Route>
        <Route path="/ProductsPage">
          <ProductPage />
        </Route>
        <Route path="/CartPage">
          <CartPage />
        </Route>
        <Route path="/AddingItem">
          <AddingItem />
        </Route>
        <Route path="/SuccessPage">
          <SuccessPage />
        </Route>
        <Route path="/errorpage">
          <Errorpage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;

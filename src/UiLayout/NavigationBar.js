import React from 'react';
import {Link} from 'react-router-dom';
import ShoppingCart from "./shoppingCart.svg"



export default function NavigationBar (props) {

    return (
              <div class="landing-header">
            <div class="landing-name">
            <Link to = '/'><span class="landing-text"><span>OYIBO MARKET</span></span></Link>
            </div>
            <div class="landing-frame14">
              <div class="landing-frame3">
                <div class="landing-frame8">
                <Link to = '/'><span class="landing-text02"><span>Home</span></span></Link>
                </div>
                <Link to = '/Productspage'><span class="landing-text04 GRH6"><span>Products</span></span></Link>
                <Link to ='/Aboutuspage'><span class="landing-text06 GRH6"><span>Contact Us</span></span></Link>
              </div>
              <div class="landing-frame4">
                <img
                  alt="shoppingcartI493"
                  src= {ShoppingCart}
                  class="landing-shoppingcart"
                />
                <Link to= '/CartPage'><span class="landing-text08 GRH6"><span>Cart</span></span></Link>
              </div>
            </div>
          </div>
    )
  
}

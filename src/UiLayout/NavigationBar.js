import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ShoppingCart from "./shoppingCart.svg"



export default function NavigationBar (props) {

  const Pathlocation = props.location.pathname
 
      const [activeItem,setactiveItem] = useState('')
 function handleItemClick (e, ButtonInfo) { setactiveItem(Pathlocation) 
	 								  }

 useEffect(()=>{
  handleItemClick();
  setactiveItem(Pathlocation) })


    return (
              <div class="landing-header">
            <div class="landing-name">
            <Link to = '/'><span class="landing-text"><span>OYIBO MARKET</span></span></Link>
            </div>
            <div class="landing-frame14">
              <div class="landing-frame3">
                <div class={activeItem==='/' ?"landing-frame8" :"landing-frame4"}>
                <Link to = '/' onClick={handleItemClick }><span class={activeItem==='/' ?"landing-text02 GRH6":"landing-text04 GRH6" }><span>Home</span></span></Link>
                </div>
                <div class={activeItem==='/Productspage' ?"landing-frame8" :"landing-frame4"}>
                <Link to = '/Productspage' onClick={handleItemClick }><span class={activeItem==='/Productspage' ?"landing-text02 GRH6":"landing-text04 GRH6" }><span>Products</span></span></Link></div>
                <div class={activeItem==='/Aboutuspage' ?"landing-frame8" :"landing-frame4" }>
                <Link to ='/Aboutuspage' onClick={handleItemClick }><span class={activeItem==='/Aboutuspage' ?"landing-text02 GRH6":"landing-text04 GRH6" }><span>Contact Us</span></span></Link></div>
              </div>
              <div class={activeItem==='/CartPage' ?"landing-frame8" :"landing-frame4" }>
                <img
                  alt="shoppingcartI493"
                  src= {ShoppingCart}
                  class="landing-shoppingcart"
                />
                <Link to= '/CartPage'><span class={activeItem==='/CartPage' ?"landing-text02 GRH6":"landing-text04 GRH6" }><span>Cart</span></span></Link>
              </div>
            </div>
          </div>
    )
  
}

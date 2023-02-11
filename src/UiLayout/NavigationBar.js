import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ShoppingCart from "./shoppingCart.svg"
import Hamburgerimg from "./linearhambergermenu.svg"



export default function NavigationBar (props) {

  const Pathlocation = props.location.pathname
 
      const [activeItem,setactiveItem] = useState('')
 function handleItemClick (e, ButtonInfo) { setactiveItem(Pathlocation) 
	 								  }

 useEffect(()=>{
  handleItemClick();
  setactiveItem(Pathlocation) })

    function HamburgerButtonHandler (e,ButtonInfo){
      var x = document.getElementById("navLinks");
      if (x.className === "landing-frame3") {
        x.className += " responsive";
      } else {
        x.className = "landing-frame3";
      }
    }

    return (
              <div class="landing-header">
            <div class="landing-name">
            <Link to = '/'><span class="landing-text"><span>OYIBO MARKET</span></span></Link>
            </div>
            <div class="landing-frame14">
              <div class="landing-frame3" id='navLinks'>
                <div class={activeItem==='/' ?"landing-frame8" :"landing-frame4 links"}>
                <Link to = '/' onClick={handleItemClick } ><span class={activeItem==='/' ?"landing-text02 GRH6":"landing-text04 GRH6" }><span>Home</span></span></Link>
                </div>
                <div class={activeItem==='/Productspage' ?"landing-frame8" :"landing-frame4 links"}>
                <Link to = '/Productspage' onClick={handleItemClick }><span class={activeItem==='/Productspage' ?"landing-text02 GRH6":"landing-text04 GRH6" }><span>Products</span></span></Link></div>
                <div class={activeItem==='/Aboutuspage' ?"landing-frame8" :"landing-frame4 links" }>
                <Link to ='/Aboutuspage' onClick={handleItemClick }><span class={activeItem==='/Aboutuspage' ?"landing-text02 GRH6":"landing-text04 GRH6" }><span>Contact Us</span></span></Link></div>
              </div>
              <div class={activeItem==='/CartPage' ?"landing-Cartframe" :"landing-frame4 links" }>
                <img
                  alt="shoppingcartI493"
                  src= {ShoppingCart}
                  class="landing-shoppingcart"
                />
                <Link to= '/CartPage'><span class={activeItem==='/CartPage' ?"landing-text02 GRH6":"landing-text04 GRH6" }><span>Cart</span></span></Link>
              </div>
              <Link class="icon" onClick={HamburgerButtonHandler}>
                <img src={Hamburgerimg} alt="="/>
              </Link>
            </div>
          </div>
    )
  
}

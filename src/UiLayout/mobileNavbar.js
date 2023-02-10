import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import ShoppingCart from "./shoppingCart.svg"
import Linearhambergermenu from "./linearhambergermenu.svg"


export default function mobileNavbar (props) {

  const Pathlocation = props.location.pathname
 
      const [activeItem,setactiveItem] = useState('')
 function handleItemClick (e, ButtonInfo) { setactiveItem(Pathlocation) 
	 								  }

 useEffect(()=>{
  handleItemClick();
  setactiveItem(Pathlocation) })


    return (
        <React.Fragment>
        <div class="mobile-menuopen-mobileheader">
        <div class="mobile-menuopen-mobile-header1">
          <div class="mobile-menuopen-name">
            <span class="mobile-menuopen-text">
              <span>OYIBO MARKET</span>
            </span>
          </div>
          <div class="mobile-menuopen-frame48">
            <img alt="shoppingcartI156" src={ShoppingCart} class="mobile-menuopen-shoppingcart"/>
            <img alt="IconsaxLinearhambergermenuI156" src={Linearhambergermenu} class="mobile-menuopen-iconsax-linearhambergermenu"/>
          </div>
          
        </div>
      </div>
      <div class="mobile-menuopen-mobilemenuoverlay">
            <div class="mobile-menuopen-mobilemenu">

              <div class="mobile-menuopen-frame50">
                <div class="mobile-menuopen-frame49">
                  <span class="mobile-menuopen-text43 mobile-menuopen-rectangle12">Home</span>
                </div>
                <span class="mobile-menuopen-text45">
                  <span>Products</span>
                </span>
                <span class="mobile-menuopen-text45">
                  <span>Contact Us</span>
                </span>
              </div>
            </div>
          </div>
          </React.Fragment>
        )
  
    }
    
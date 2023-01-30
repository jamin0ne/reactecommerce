import React from "react";
import EmptyCartImage from "../EmptyCartImage.png"

function CartEmpty () {

  return (

      <div class="cart-empty-cartempty1">
          <div class="cart-empty-frame21">
              <span class="cart-empty-text12">
                  <span>Your cart is empty</span>
              </span>
          </div>
          <img alt="Blackandwhitewomanwalkingwithashoppingcart8371"
          src={EmptyCartImage}
          class="cart-empty-blackandwhitewomanwalkingwithashoppingcart"/>
              <div class="cart-empty-frame8">
                  <span class="cart-empty-text14">
                      <span>Lets go shopping</span>
                  </span>
              </div>
      </div>

          )
          }
 export default CartEmpty;
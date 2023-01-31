import React from "react";

function CartSubtotal(props) {
  return (
    <div class="cart-productcard1">
          <div class="cart-frame191">
            <span class="cart-text07 GRH5"><span>Checkout</span></span>
            <div class="cart-frame30">
              <span class="cart-text09"><span>Total:</span></span>
              <span class="cart-text11"><span>BGN{props.SubtotalCalculation()}</span></span>
            </div>
            <div class="cart-frame31">
              <span class="cart-text13"><span>Delivery:</span></span>
              <div class="cart-frame33">
                <div class="cart-frame36">
                  <div class="cart-frame34">
                    <span class="cart-text17">
                      <span>Within Sofia:</span>
                    </span>
                  </div>
                  <div class="cart-frame35">
                    <span class="cart-text19"><span>BGN 3</span></span>
                  </div>
                </div>
                <div class="cart-frame37">
                  <div class="cart-frame341">
                    <span class="cart-text21">
                      <span>Outside Sofia:</span>
                    </span>
                  </div>
                  <div class="cart-frame351">
                    <span class="cart-text23"><span>BGN 15</span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="cart-button2"  onClick={props.CheckOutHandler}>
            <span class="cart-text25"><span>Proceed to checkout</span></span>
          </button>
          </div>
  );
}
export default CartSubtotal;

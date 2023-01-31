import React, {useContext} from "react";
import  CartItemContext from "../settingsAndConfig/contextsHandler/cartContextProvider"

function messageoutput() {
    const ContextinCartItem = useContext(CartItemContext);

return(<React.Fragment>{ ContextinCartItem.alert === ""
          ? <div></div>
         :<div class="cart-overlay-addedtocartoverlay">
        <div class="cart-overlay-frame26">
          <span class="cart-overlay-text88 GRH6">
            <span>'{ContextinCartItem.alert}' added to cart</span>
          </span>
        </div>
        </div>
    }</React.Fragment>
)

}
export default messageoutput;
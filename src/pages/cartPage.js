import React, { useState,useContext } from "react";
import { Grid } from "semantic-ui-react";
import CartListing from "../components/cartComponent/cartListing";
import CartSubtotal from "../components/cartComponent/subCartComponent/cartSubtotal";
import ContextProviderForCartPage from "../contextFolder/cartContextProvider";
import CartCheckoutForm from "../components/cartComponent/CartCheckoutForm";
function CartPage() {
	const CartItemContext = useContext(ContextProviderForCartPage);
  const [showCheckoutForm, setShowCheckoutForm] = useState(true);
  function CheckOutHandler() {
    setShowCheckoutForm(false);
  }
  function SubtotalCalculation(){
	var subtotal = 0;
	   CartItemContext.CartItems.forEach(Product => { subtotal += Product.totalPrice})
	   return subtotal
	  
  }

  return (
    <Grid padded divided>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <CartListing CartItemContext={CartItemContext} />
        </Grid.Column>
        <Grid.Column>
          <CartSubtotal CartItemContext={CartItemContext} SubtotalCalculation={SubtotalCalculation} CheckOutHandler={CheckOutHandler}  />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <div hidden={showCheckoutForm}>
            <CartCheckoutForm CartItemContext={CartItemContext} />
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
export default CartPage;

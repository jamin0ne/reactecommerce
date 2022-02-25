import React, { useState,useContext } from "react";
import { Button, Grid, Segment } from "semantic-ui-react";
import CartListing from "../components/cartComponent/cartListing";
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
          <Segment>
             <h3>CHECKOUT</h3>
			   <Segment>
                <div><text style={{fontWeight:'bold'}}>subtotal: </text>лв.{SubtotalCalculation()} </div>
              </Segment>
              <Button primary disabled ={CartItemContext.TotalNumberOfCartitem === 0 ? true : false} onClick={CheckOutHandler}>
                Check-out
              </Button>
			  </Segment>
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

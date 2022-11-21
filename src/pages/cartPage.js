import React, { useRef,useState,useContext } from "react";
import { Grid } from "semantic-ui-react";
import CartListing from "../components/cartComponent/cartListing";
import CartSubtotal from "../components/cartComponent/subCartComponent/cartSubtotal";
import ContextProviderForCartPage from "../contextFolder/cartContextProvider";
import CartCheckoutForm from "../components/cartComponent/CartCheckoutForm";
function CartPage() {
	const CartItemContext = useContext(ContextProviderForCartPage);
  const [HiddenCartForm, setHiddenCartForm] = useState(true);
  const ScrollToForm = useRef(null);
  function CheckOutHandler() {
    setHiddenCartForm(false);
    ScrollToForm.current?.scrollIntoView({behavior: 'smooth'});
  }
  function SubtotalCalculation(){
	var subtotal = 0;
	   CartItemContext.CartItems.forEach(Product => { subtotal += Product.totalPrice})
	   return subtotal
	  
  }

  return (
    <div>
    <Grid padded divided  >
      <Grid.Row centered columns={2}>
        <Grid.Column>
          <CartListing CartItemContext={CartItemContext} />
        </Grid.Column>
        <Grid.Column>
          <CartSubtotal CartItemContext={CartItemContext} SubtotalCalculation={SubtotalCalculation} CheckOutHandler={CheckOutHandler}  />
        </Grid.Column>
      </Grid.Row>
    </Grid>
     <div style={{padding:"50px"}} hidden={HiddenCartForm} ref={ScrollToForm}>
     <CartCheckoutForm CartItemContext={CartItemContext} SubtotalCalculation={SubtotalCalculation} />
   </div>
   </div>
  );
}
export default CartPage;

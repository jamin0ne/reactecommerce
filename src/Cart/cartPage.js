import React, { useRef,useState,useContext } from "react";
import { Grid,Ref} from "semantic-ui-react";
import CartListing from "./cartComponent/cartListing";
import CartSubtotal from "./cartComponent/subCartComponent/cartSubtotal";
import ContextProviderForCartPage from "../settingsAndConfig/contextsHandler/cartContextProvider";
import CartCheckoutForm from "./cartComponent/CartCheckoutForm";
import CartEmpty from "./cartComponent/CartEmpty";

function CartPage() {
	const CartItemContext = useContext(ContextProviderForCartPage);
  const [HiddenCartForm, setHiddenCartForm] = useState(true);
  const ScrollToForm = useRef(null);
  function CheckOutHandler() {
    setHiddenCartForm(false);
    ScrollToForm.current.scrollIntoView({behavior: 'smooth'});
  }
  function SubtotalCalculation(){
	var subtotal = 0;
	   CartItemContext.CartItems.forEach(Product => { subtotal += Product.totalPrice})
	   return subtotal
	  
  }


  return (
    <div>
    
      
      {CartItemContext.TotalNumberOfCartitem === 0
        ?<CartEmpty/>
        :<Grid padded divided  ><Grid.Row centered columns={2}><Grid.Column>
<CartListing CartItemContext={CartItemContext}/> 
        </Grid.Column>
        <Grid.Column>
          <CartSubtotal CartItemContext={CartItemContext} SubtotalCalculation={SubtotalCalculation} CheckOutHandler={CheckOutHandler}  />
        </Grid.Column></Grid.Row></Grid>}
      
   
    <Ref innerRef={ScrollToForm}><div style={{padding:"50px"}} hidden={HiddenCartForm} >
     <CartCheckoutForm CartItemContext={CartItemContext} SubtotalCalculation={SubtotalCalculation} />
   </div></Ref>
   </div>
  );
}
export default CartPage;

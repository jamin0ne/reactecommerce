import React, { useRef,useState,useContext } from "react";
import {Ref} from "semantic-ui-react";
import CartListing from "./cartComponent/cartListing";
import CartSubtotal from "./cartComponent/subCartComponent/cartSubtotal";
import ContextProviderForCartPage from "../settingsAndConfig/contextsHandler/cartContextProvider";
import CartCheckoutForm from "./cartComponent/CartCheckoutForm";
import CartEmpty from "./cartComponent/CartEmpty";
import SubtotalBorderImage from "./rectangle104920-9qik-600w.png"
import "./Cart.css"

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
        :<div class="cart-cart">
        <img
          alt="Rectangle104920"
          src={SubtotalBorderImage}
          class="cart-rectangle10"
        />
        <div class="cart-frame21">
          <span class="cart-text GRH5"><span>Cart</span></span>
        </div>
        <CartListing CartItemContext={CartItemContext}/> 
        <CartSubtotal CartItemContext={CartItemContext} SubtotalCalculation={SubtotalCalculation} CheckOutHandler={CheckOutHandler} />
        
        </div>}
       
    <Ref innerRef={ScrollToForm}><div style={{padding:"50px"}} hidden={HiddenCartForm} >
     <CartCheckoutForm CartItemContext={CartItemContext} SubtotalCalculation={SubtotalCalculation} />
   </div></Ref>
   </div>
  );
}
export default CartPage;

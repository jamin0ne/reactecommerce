import React from "react";
import { Button, Segment } from "semantic-ui-react"

function CartSubtotal(props){
    return(
        <Segment>
             <h3>CHECKOUT</h3>
			   <Segment>
                <div><text style={{fontWeight:'bold'}}>subtotal: </text>лв.{props.SubtotalCalculation()} </div>
                <div><code>this does not include delivery fees</code></div> 
              </Segment>
              <Button primary disabled ={props.CartItemContext.TotalNumberOfCartitem === 0 ? true : false} onClick={props.CheckOutHandler}>
                Check-out
              </Button>
			  </Segment>
    )
}
export default CartSubtotal;

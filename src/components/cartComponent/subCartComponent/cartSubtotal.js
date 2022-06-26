import React from "react";
import { Button, Segment } from "semantic-ui-react";

function CartSubtotal(props) {
  return (
    <Segment>
      <h3>CHECKOUT</h3>
      <Segment>
        <div>
          <text style={{ fontWeight: "bold" }}>subtotal: </text>
          лв.
          {props.SubtotalCalculation()}{" "}
        </div>
        <div>
          <code>Delivery fee: лв 3(sofia Delivery only) </code>
        </div>
        <div hidden = {
          props.CartItemContext.TotalNumberOfCartitem === 0 ? true : false
        }>
          <text style={{ fontWeight: "bold",fontSize:"18px" }}>Grand total: лв.
          {props.SubtotalCalculation() + 3} </text>
          
        </div>
      </Segment>
      <Button
        color="teal"
        disabled={
          props.CartItemContext.TotalNumberOfCartitem === 0 ? true : false
        }
        onClick={props.CheckOutHandler}
      >
        Check-out
      </Button>
    </Segment>
  );
}
export default CartSubtotal;

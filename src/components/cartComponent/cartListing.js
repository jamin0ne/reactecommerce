import React from "react";
import { List } from "semantic-ui-react";
import CartListingStructure from "./cartListingStructure";

function CartListing (props) {
  const CartItemContext = props.CartItemContext

  return (
    <List divided size="massive" verticalAlign="middle">
      {CartItemContext.CartItems.map((Product) => (
        <CartListingStructure
          key={Product.id}
          Product={Product}
          AddItemToCart={CartItemContext.AddItemToCart}
          RemoveItemFromCart={CartItemContext.RemoveItemFromCart}
        />
      ))}
    </List>
  );
}
export default CartListing;

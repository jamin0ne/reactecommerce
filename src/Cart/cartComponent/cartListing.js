import React from "react";
import { List } from "semantic-ui-react";
import CartListingStructure from "./cartListingStructure";

function CartListing (props) {
  const CartItemContext = props.CartItemContext

  return (
    <List  verticalAlign="middle">
      {CartItemContext.CartItems.map((Product) => (
       <List.Item>
       <CartListingStructure
          key={Product.id}
          Product={Product}
          AddItemToCart={CartItemContext.AddItemToCart}
          RemoveItemFromCart={CartItemContext.RemoveItemFromCart}
        />
      </List.Item>
      ))}
    </List>
  );
}
export default CartListing;

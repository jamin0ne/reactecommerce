import React from "react";
import { Button, Form, Segment, Input } from "semantic-ui-react";

function CartCheckoutForm(props) {
  return (
    <Segment inverted>
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Input fluid label="First name" placeholder="First name" />
          <Form.Input fluid label="Last name" placeholder="Last name" />
        </Form.Group>
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="abcd@example.com"
        />
        <Form.Input
          fluid
          label="Phone"
          type="number"
          placeholder="000-000-0000"
        />
        <Form.Input fluid label="Address" placeholder="Address" />

        <Button disabled ={props.CartItemContext.TotalNumberOfCartitem === 0 ? true : false} type="submit">Place Order</Button>
      </Form>
    </Segment>
  );
}
export default CartCheckoutForm;

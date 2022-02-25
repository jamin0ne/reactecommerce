import React from "react";
import { Button, Form, Segment, Input } from "semantic-ui-react";

function AddingItem() {
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
        <Form.Input fluid label="Phone" placeholder="000-000-0000" />
        <Form.Input fluid label="Address" placeholder="Address" />

        <Button type="submit">Submit</Button>
      </Form>
    </Segment>
  );
}
export default AddingItem;

import React, { useRef } from "react";
import { Button, Form, Segment, Input,Ref } from "semantic-ui-react";
import { collection, addDoc } from "firebase/firestore"; 
import {Db} from '../../config/FbConfig'


function CartCheckoutForm(props) {
  const FristNameRef = useRef();
  const LastNameRef = useRef();
  const EmailRef = useRef();
  const PhoneRef = useRef();
  const AddressRef = useRef();

  async function submithandler(e){
   e.preventDefault()
    const formInputs= {
          FristName: FristNameRef.current.lastChild.lastChild.value,
          LastName: LastNameRef.current.lastChild.lastChild.value,
          Email: EmailRef.current.lastChild.lastChild.value,
          Phone: PhoneRef.current.lastChild.lastChild.value,
          Address: AddressRef.current.lastChild.lastChild.value,
          itemsPurchased: props.CartItemContext.CartItems
 }
await addDoc(collection(Db, "CustomerAndPurchases"), formInputs).then(Response=>(SendEmail(formInputs.FristName,formInputs.Email,formInputs.itemsPurchased))).catch(error=>window.location.replace("./SuccessPage"))
 }
// send email function
function SendEmail(name,email,itemsPurchased){
  if(window.Email){
  window.Email.send({
    Host:process.env.REACT_APP_HOST,
    Username:process.env.REACT_APP_USERNAME,
    Password:process.env.REACT_APP_PASSWORD,
    To: email,
    From:process.env.REACT_APP_FROMEMAIL,
    Subject:"New Purchase",
    Body:`Hello ${name} <br> Your order has been processed successfully. Here is a list of things you order: ${itemsPurchased.map((Product) => (Product.title+" * "+Product.purchaseAmount))}
    for a total of ${props.SubtotalCalculation()}лв + a 3лв delivery fee. <br> Thank you for shopping with us. <br> Best regards,<br> oyinbo.com`
  }).then(Response=>( window.location.replace("./SuccessPage")))}
}
  return (
    <Segment >
      <Form color="gray"  onSubmit={submithandler}>
        <Form.Group widths="equal">
        <Ref innerRef={FristNameRef}><Form.Input fluid label="First name" placeholder="First name"  required /></Ref>
        <Ref innerRef={LastNameRef}><Form.Input fluid label="Last name" placeholder="Last name" required /></Ref>
        </Form.Group>
        <Ref innerRef={EmailRef}><Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="abcd***@example.com"  
        /></Ref>
        <Ref innerRef={PhoneRef}><Form.Input
          fluid
          label="Phone"
          type="number"
          placeholder="000-000-0000"
          
          required
        /></Ref>
        <Ref innerRef={AddressRef}><Form.Input fluid label="Address" placeholder="Address" required /></Ref>

        <Button color="teal" disabled ={props.CartItemContext.TotalNumberOfCartitem === 0 ? true : false} >Place Order</Button>
      </Form>
      
    </Segment>
  );
}
export default CartCheckoutForm;

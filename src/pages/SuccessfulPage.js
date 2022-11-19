import React from "react";
import {Segment,Icon,Header,Button} from "semantic-ui-react"

function SuccessPage(){
    
    return(<Segment placeholder>
        <Header icon>
          <Icon name='checkmark' />
    Your order has been placed
    <p>Check your "mailbox" or "junk" to see your order</p>
        </Header>
       
        <Button primary href="./">HomePage</Button>
      </Segment>)
}
export default SuccessPage;
import React from "react";
import {Segment,Icon,Header,Button} from "semantic-ui-react"

function SuccessPage(){
    
    return(<Segment placeholder>
        <Header icon>
          <Icon name='checkmark' />
    Your order has been placed
        </Header>
       
        <Button primary>HomePage</Button>
      </Segment>)
}
export default SuccessPage;
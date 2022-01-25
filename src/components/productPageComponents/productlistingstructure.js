import React,{useState, useContext} from 'react'
import {Card,Image,Button,Grid} from 'semantic-ui-react'
import  CartItemContext from '../../contextFolder/cartContextProvider'


function productlistingStructure(props){
	 const ContextinCartItem = useContext(CartItemContext);
	const [purchaseAmount,setpurchaseAmount] = useState(1);
	 
	function addItemHandler(){
		ContextinCartItem.AddItemToCart({
			  id: props.id,
			  title: props.title,
			  image: props.image,
			  purchaseAmount: purchaseAmount,
			  price: props.price 
		  })
	
	}
	function purchaseAmountHandler(event,buttonInfo){
	       const buttonString = buttonInfo.children
		if(buttonString === '-'){
			setpurchaseAmount(Math.max(1,purchaseAmount - 1))
		}else if(buttonString === '+'){
			setpurchaseAmount(Math.min(5,purchaseAmount + 1))
		}
	}
	
	return( 

	
	<Card  centered color='teal'>
    <Image src={props.image} alt ={props.title } size='mini' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Price: лв.{props.price}</span>
      </Card.Meta>
      <Card.Description>
        {props.short_description}
      </Card.Description>
    </Card.Content>
		
    <Card.Content  extra>
	 	<Grid>
    <Grid.Column textAlign="center">
     <Button.Group size='large'>
    <Button onClick ={purchaseAmountHandler}>-</Button>
    <Button.Or  text = {purchaseAmount}/>
    <Button onClick ={purchaseAmountHandler}>+</Button>
  </Button.Group>
			</Grid.Column>
		</Grid>
		
			<Grid>
    <Grid.Column textAlign="center">
    <Button onClick ={addItemHandler}>Add to cart</Button>
  </Grid.Column>
		</Grid>
    </Card.Content>
    
  </Card>
			
			
		   )
	
}
export default productlistingStructure;
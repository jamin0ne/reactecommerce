import React from 'react'
import {List,Image,Button,Segment,Header} from 'semantic-ui-react'


function CartListingStructure(props){
	function AddItemToCart(){
		props.AddItemToCart({
			  id: props.Product.id,
			  title:props.Product.title,
			  image: props.Product.image,
			  purchaseAmount: 1,
			  price: props.Product.price 
		  })
	}
	function RemoveItemFromCart(){
		props.RemoveItemFromCart(props.Product.Id)
	}
	return(
		
	  <Segment>
			<List.Item>
      <List.Content floated='right'>
		  <div>
		  <Button circular floated='right' size='mini'icon='cancel' onClick={RemoveItemFromCart}></Button>
		  </div>
   
		  </List.Content>
      <Image size='mini' src={props.Product.image} />
      <List.Content>
		  <Header>{props.Product.title}</Header>
		 <div>  <span style={{fontWeight: "bold"}} >Price: </span>{props.Product.totalPrice}</div>
		  
		   <div> <Button.Group size='small'>
    <Button onClick={RemoveItemFromCart} >-</Button>
    <Button.Or  text = {props.Product.purchaseAmount}/>
    <Button onClick={AddItemToCart} >+</Button>
		  </Button.Group>
     </div>
		  </List.Content>
    </List.Item>
			</Segment>)}
			
 

export default CartListingStructure;
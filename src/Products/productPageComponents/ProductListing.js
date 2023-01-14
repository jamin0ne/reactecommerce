import React from 'react'
import{Card} from 'semantic-ui-react'
import Productlistingstructure from './productlistingstructure'
	 
function productlisting(props){
	return( <Card.Group>{props.ProductArray.map(
			(Product)=> <Productlistingstructure key ={Product.id} id ={Product.id} title= {Product.title} 
							image={Product.image} 
							short_description={Product.short_description} 
							price={Product.price}  />)}</Card.Group>
		   
                    
	)}
export default productlisting;
import React from 'react'
import Productlistingstructure from './productlistingstructure'
import { List } from 'semantic-ui-react';	 
function productlisting(props){
	return( <List horizontal>{props.ProductArray.map(
			(Product)=> <Productlistingstructure key ={Product.id} id ={Product.id} title= {Product.title} 
							image={Product.image} 
							short_description={Product.short_description} 
							price={Product.price}  />)}</List>
		   
                    
	)}
export default productlisting;
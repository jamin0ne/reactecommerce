import React,{useContext} from 'react';
import{List} from 'semantic-ui-react'
import CartListingStructure from './cartListingStructure'
import  ContextProviderForCartPage from '../../contextFolder/cartContextProvider'


function CartListing(){
	const CartItemContext = useContext(ContextProviderForCartPage)
	
return  (<List divided  size='massive' verticalAlign='middle'>
		{CartItemContext.CartItems.map((Product) => <CartListingStructure key ={Product.id} Product ={Product}
        AddItemToCart ={CartItemContext.AddItemToCart} RemoveItemFromCart={CartItemContext.RemoveItemFromCart}/>)}
		</List>)
}
export default CartListing;
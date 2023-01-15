import React,{useState, useContext} from 'react'
import  CartItemContext from '../../settingsAndConfig/contextsHandler/cartContextProvider'


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
	ContextinCartItem.MessageHandler('Added to cart')
	}
	function purchaseAmountHandler(event,buttonInfo){
	       const buttonString = buttonInfo.children
		if(buttonString === '-'){
			setpurchaseAmount(Math.max(1,purchaseAmount - 1))
		}else if(buttonString === '+'){
			setpurchaseAmount(Math.min(5,purchaseAmount + 1))
		}
	}
	
	return( <React.Fragment>
			<div class="marketplace-frame191">
			<span class="marketplace-text21"><span>{props.title}</span></span>
			<span class="marketplace-text23"><span>BGN {props.price}</span></span>
			<span class="marketplace-text25">
			  <span>{props.short_description}</span>
			</span>
		  </div>
		  <button class="marketplace-button02">
			<img
			  alt="IconsaxLinearminussquare2936"
			  src="public/playground_assets/iconsaxlinearminussquare2936-le6k.svg"
			  class="marketplace-iconsax-linearminussquare1"
			/>
			<span class="marketplace-text27">{purchaseAmount}</span>
			<img
			  alt="IconsaxLinearaddsquare2936"
			  src="public/playground_assets/iconsaxlinearaddsquare2936-0n4.svg"
			  class="marketplace-iconsax-linearaddsquare1"
			/>
		  </button>
		  <button class="marketplace-button03" onClick={purchaseAmountHandler}>
			<img
			  alt="shoppingcartI373"
			  src="public/playground_assets/shoppingcarti373-uh3w.svg"
			  class="marketplace-shoppingcart1"
			/>
			<span class="marketplace-text28">
			  <span onClick ={addItemHandler}>Add to cart</span>
			</span>
		  </button>
		  </React.Fragment>
			
		   )
	
}
export default productlistingStructure;
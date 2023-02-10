import React,{useState, useContext} from 'react'
import ShoppingCart from "../../UiLayout/shoppingCart.svg"
import  CartItemContext from '../../settingsAndConfig/contextsHandler/cartContextProvider'
import MinusSVG from "../MinusSquare.svg"
import AddSVG from "../AddSquare.svg"
import { List } from 'semantic-ui-react'

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
	ContextinCartItem.MessageHandler(props.title)
	}
	function AddPieceHandler(){
			setpurchaseAmount(Math.min(5,purchaseAmount + 1))
	}
  function SubtractPieceHandler(){
		setpurchaseAmount(Math.max(1,purchaseAmount - 1))
		}
	
	return(
    <List.Item>
			<div class="marketplace-productcard" id={props.id}>
                <div class="marketplace-strawbag-sabrinatach1">
                  <img
                    alt="StrawbagSabrinatach13017"
                    src={props.image}
                    class="marketplace-strawbag-sabrinatach11"
                  />
                </div>
                <div class="marketplace-frame19">
                  <span class="marketplace-text12">
                    <span>{props.title}</span>
                  </span>
                  <span class="marketplace-text14"><span>{props.price}BGN</span></span>
                  <span class="marketplace-text16">
                    <span>{props.short_description}</span>
                  </span>
                </div>
                <button class="marketplace-button">
                  <img onClick={SubtractPieceHandler}
                    alt="IconsaxLinearminussquare2939"
                    src={MinusSVG}
                    class="marketplace-iconsax-linearminussquare"
                  />
                  <span class="marketplace-text18">{purchaseAmount}</span>
                  <img onClick={AddPieceHandler}
                    alt="IconsaxLinearaddsquare2939"
                    src={AddSVG}
                    class="marketplace-iconsax-linearaddsquare"
                  />
                </button>
                <button class="marketplace-button01" onClick={addItemHandler}>
                  <img
                    alt="shoppingcartI293"
                    src={ShoppingCart}
                    class="marketplace-shoppingcart"
                  />
                  <span class="marketplace-text19">
                    <span>Add to cart</span>
                  </span>
                </button>
              </div>
              </List.Item>
		  
			
		   )
	
}
export default productlistingStructure;
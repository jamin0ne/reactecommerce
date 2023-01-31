import React from 'react'
import RemoveButtonImg from "../trash2i492-k6p.svg"
import MinusSVG from "../../Products/MinusSquare.svg"
import AddSVG from "../../Products/AddSquare.svg"


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
		
		props.RemoveItemFromCart(props.Product.id)
		
	}
	function reduceItemAmountInCart(){
		if(props.Product.purchaseAmount > 1){
			props.AddItemToCart({
			  id: props.Product.id,
			  title:props.Product.title,
			  image: props.Product.image,
			  purchaseAmount: -1,
			  price: props.Product.price 
		  })
		}else{ props.RemoveItemFromCart(props.Product.id) }
	}
	return(
		<div class="cart-productcard">
          <div class="cart-strawbag-sabrinatach1">
            <img
              alt="StrawbagSabrinatach14921"
              src={props.Product.image}
              class="cart-strawbag-sabrinatach11"
            />
          </div>
          <div class="cart-frame19">
            <span class="cart-text02"><span>{props.Product.title}</span></span>
            <button class="cart-button">
              <img
                alt="IconsaxLinearminussquare8312"
                src={MinusSVG}
                class="cart-iconsax-linearminussquare" onClick={reduceItemAmountInCart}
              />
              <span class="cart-text04">{props.Product.purchaseAmount}</span>
              <img
                alt="IconsaxLinearaddsquare8312"
                src={AddSVG}
                class="cart-iconsax-linearaddsquare" onClick={AddItemToCart}
              />
            </button>
          </div>
          <div class="cart-frame38">
            <button class="cart-button1" onClick={RemoveItemFromCart}>
              <img
                alt="trash2I492"
                src={RemoveButtonImg}
                class="cart-trash2"
              />
            </button>
            <span class="cart-text05 GRH7"><span>BGN{props.Product.totalPrice}</span></span>
          </div>
        </div>
)}
			
 

export default CartListingStructure;
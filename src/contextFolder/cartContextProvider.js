import React,{createContext, useState} from 'react'
 
const CartItemContext = createContext({
	 CartItems: [],
	TotalNumberOfCartitem: '',
	AddItemToCart: function AddItemToCartHandler(){ },
	RemoveItemFromCart:function RemoveItemFromCartHandler(){ },
	IsItemInCart:function IsItemInCartHandler(){}
})

export function CartContextProvider(props){
	var locStorage = JSON.parse(localStorage.getItem('cartList'));
	
	
	const [cartItemArray,setCartItem] = useState([]);
	const Context ={
			 CartItems: cartItemArray,
	TotalNumberOfCartitem:cartItemArray.length,
	AddItemToCart: AddItemToCartHandler,
	RemoveItemFromCart: RemoveItemFromCartHandler,
	IsItemInCart: IsItemInCartHandler
	}
	async function AddItemToCartHandler(Item){
		const [isIteminCartBool,isIteminCartIndex]= IsItemInCartHandler(Item.id)
		var newArray=  cartItemArray
		var newPurchaseAmount = 0 
		   var newTotalPrice = 0
		    var itemIndex = 0
	   if(isIteminCartBool){
		    itemIndex = isIteminCartIndex
		   newPurchaseAmount =  Item.purchaseAmount + cartItemArray[itemIndex].purchaseAmount
		   newTotalPrice = Item.price * newPurchaseAmount
	   }else {
		   itemIndex = cartItemArray.length
		   newPurchaseAmount =  Item.purchaseAmount 
		    newTotalPrice = Item.price * newPurchaseAmount
		    }
		    newArray[itemIndex] =  {
				  id: Item.id,
				 title: Item.title,
				 image: Item.image,
				 price: Item.price,
				 purchaseAmount:newPurchaseAmount,
				 totalPrice: newTotalPrice
			 }
		
		   await setCartItem((prv)=>{ return [].concat(newArray)})
		localStorage.setItem("cartList",JSON.stringify(cartItemArray))
	}

	async function RemoveItemFromCartHandler(ItemId) {
	      const newArray = cartItemArray.filter( (items)=>{ return items.id !== ItemId})
		 await setCartItem(newArray)
		 localStorage.setItem("cartList", JSON.stringify(newArray))
	}
	
	
	function IsItemInCartHandler(ItemId){
		     const isIteminCartBool  = cartItemArray.some((items)=>{ return items.id === ItemId })
			  const isIteminCartIndex  = cartItemArray.findIndex((items)=>{ return items.id === ItemId })
			  return [isIteminCartBool,isIteminCartIndex]
		}
	
	
	 return ( 
		 <CartItemContext.Provider value={Context}>
			    {props.children}
			 </CartItemContext.Provider>
			)
}
export default CartItemContext;
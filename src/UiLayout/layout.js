import React,{useContext} from "react";
//import NavigationBar from './NavigationBar'
import NavBar from './NavBar'
import Messageoutput from './messageoutput'
import "./UiLayout.css"
import  CartItemContext from "../settingsAndConfig/contextsHandler/cartContextProvider"

export default function Layout(props){
	const ContextinCartItem = useContext(CartItemContext);
	
	return(
	  <div>
			<NavBar location={props.location} CartItems={ContextinCartItem.CartItems}/>
			
			<div>
			<Messageoutput Alert={ContextinCartItem.alert}/>
				{props.children}
			</div>
			
			
		</div>
	)
}
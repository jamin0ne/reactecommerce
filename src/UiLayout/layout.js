import React from 'react'
//import NavigationBar from './NavigationBar'
import NavBar from './NavBar'
import Messageoutput from './messageoutput'
import "./UiLayout.css"

export default function Layout(props){
	
	return(
	  <div>
			<NavBar location={props.location} />
			
			<div style={{paddingTop:"50px" }}>
			<Messageoutput/>
				{props.children}
			</div>
			
			
		</div>
	)
}
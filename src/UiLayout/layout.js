import React from 'react'
import NavigationBar from './NavigationBar'
import Messageoutput from './messageoutput'
import MobileNavbar from './mobileNavbar'
import "./UiLayout.css"

export default function Layout(props){
	
	return(
		<div class="landing-container">
        <div class="landing-landing mobile-menuopen-mobile-menuopen ">
			<span hidden><NavigationBar location ={props.location} /></span>
             <span><MobileNavbar location ={props.location}/></span>
			<Messageoutput/>
			<div style={{paddingTop:"5%"}}>
			
				{props.children}
			</div>
			
			</div>
		</div>
	)
}
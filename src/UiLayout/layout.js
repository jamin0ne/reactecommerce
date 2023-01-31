import React from 'react'
import NavigationBar from './NavigationBar'
import Messageoutput from './messageoutput'
import "./UiLayout.css"

export default function Layout(props){
	
	return(
		<div class="landing-container">
        <div class="landing-landing">
			<NavigationBar />
			<Messageoutput/>
			<div style={{paddingTop:"5%"}}>
			
				{props.children}
			</div>
			
			</div>
		</div>
	)
}
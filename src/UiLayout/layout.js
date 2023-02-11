import React from 'react'
import NavigationBar from './NavigationBar'
import Messageoutput from './messageoutput'
import "./UiLayout.css"

export default function Layout(props){
	
	return(
		<div>
        <div>
		<NavigationBar location ={props.location} />
		<Messageoutput/>
			</div>
			<div style={{position:"relative"}}>
			{props.children}
			</div>
		</div>
	)
}
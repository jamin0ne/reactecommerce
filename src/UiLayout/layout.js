import React from 'react'
import NavigationBar from './NavigationBar'
import Messageoutput from './messageoutput'

export default function Layout(props){
	
	return(
	  <div>
			<NavigationBar location={props.location} />
			
			<div style={{paddingTop:"50px" }}>
			<Messageoutput/>
				{props.children}
			</div>
			
			
		</div>
	)
}
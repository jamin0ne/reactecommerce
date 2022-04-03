import React from 'react'
import NavigationBar from './NavigationBar'
import Messageoutput from './messageoutput'

export default function Layout(props){
	
	return(
	  <div>
			<NavigationBar location={props.location} />
			<Messageoutput/>
			<div>
				{props.children}
			</div>
			
			
		</div>
	)
}
import React from 'react'
import NavigationBar from './NavigationBar'

export default function Layout(props){
	
	return(
	  <div>
			<NavigationBar location={props.location} />
			
			<div>
				{props.children}
			</div>
			
			
		</div>
	)
}
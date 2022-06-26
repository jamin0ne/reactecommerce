import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Menu,Icon} from 'semantic-ui-react'



export default function NavigationBar (props) {
 const Pathlocation = props.location.pathname
 
      const [activeItem,setactiveItem] = useState('')
 function handleItemClick (e, ButtonInfo) { setactiveItem(Pathlocation) 
	 								  }

 useEffect(()=>{setactiveItem(Pathlocation) })


    return (
      <div>
			
        <Menu fixed="top"  pointing   widths ={5}>
			<Menu.Header as ='h2' >Market</Menu.Header>
          <Menu.Item as={Link} to = '/'
            name='Home'
            active={activeItem === '/'}
            onClick={handleItemClick}
          />
          <Menu.Item as = {Link} to = '/Productspage'
            name='Products'
            active={activeItem ===  '/Productspage'}
            onClick={handleItemClick}
          />
          <Menu.Item as ={Link} to ='/Aboutuspage'
            name='About Us'
            active={activeItem ===  '/Aboutuspage'}
            onClick={handleItemClick}
          />
			<Menu.Menu position='right'>
            <Menu.Item name= 'shopping cart'as={Link} to= '/CartPage' onClick={handleItemClick}>
				<Icon name ='shopping cart' /> Cart</Menu.Item>
          </Menu.Menu>
          
        </Menu>

      </div>
    )
  
}

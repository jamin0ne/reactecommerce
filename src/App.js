import React from 'react';
import {Route,Switch, useLocation} from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/cartPage'
import Layout from './components/layout/layout'

import './App.css';

function App() {
	
	
 const location= useLocation();
	  
    return (
  
		<Layout location ={location}>
			<Switch>
				<Route path ='/' exact>
				<HomePage/>
				</Route>
			<Route path ='/AboutUsPage'>
				<AboutUsPage/>
				</Route>
			<Route path ='/ProductsPage'>
				<ProductPage/>
				</Route>
				<Route path ='/CartPage'>
					<CartPage/>
				</Route>
			</Switch>	
		</Layout> 
		
	
    );
  
}

export default App;

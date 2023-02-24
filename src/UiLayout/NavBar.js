import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'semantic-ui-react';
import ShoppingCart from "./shoppingCart.svg"

function NavBar(props) {
  const Pathlocation = props.location.pathname
 
      const [activeItem,setactiveItem] = useState('')
 function handleItemClick (e, ButtonInfo) { setactiveItem(Pathlocation) 
	 								  }

 useEffect(()=>{
  handleItemClick();
  setactiveItem(Pathlocation) })

    function HamburgerButtonHandler (e,ButtonInfo){
      var x = document.getElementById("navLinks");
      if (x.className === "landing-frame3") {
        x.className += " responsive";
      } else {
        x.className = "landing-frame3";
      }
    }
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand className="landing-text" as={Link} to="/" >Ogerich
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav  className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link as={Link} to="/" className={activeItem==='/' ?"landing-frame8" :"landing-frame4 links"}><div className={activeItem==='/' ?"landing-text02 GRH6":"landing-text04 GRH6"}>Home
            </div></Nav.Link>
            <Nav.Link as={Link} to="/Productspage"className={activeItem==='/Productspage' ?"landing-frame8" :"landing-frame4 links"}><div className={activeItem==='/Productspage' ?"landing-text02 GRH6":"landing-text04 GRH6"}>Product list
            </div></Nav.Link>
            <Nav.Link as={Link} to="/Aboutuspage" className={activeItem==='/Aboutuspage' ?"landing-frame8" :"landing-frame4 links"}  ><div className={activeItem==='/Aboutuspage' ?"landing-text02 GRH6":"landing-text04 GRH6"}>contact us
            </div></Nav.Link>
          </Nav>
          
          <Nav.Link as={Link} to='/CartPage'className={activeItem==='/CartPage' ?"landing-frame8" :"landing-frame4 links"} ><div className={activeItem==='/CartPage' ?"landing-text02 GRH6":"landing-text04 GRH6"}>Cart<img src={ShoppingCart} alt=""/>
          </div></Nav.Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
  }
  export default  NavBar;
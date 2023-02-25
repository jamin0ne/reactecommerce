import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import BlurYamimage from "./blurYamimage.png"
import AfricanMap from "./africanMap.svg"
import "./Home.css"

export default function HomePage() {
  return (
    
    <Card className="text-white">
      <Card.Img src={BlurYamimage} alt="Card image" />
      <Card.ImgOverlay >
      <Container >
          <Row >
            <Col xs={10} lg={6} className="frame7">
          <div>
              <h1 className="landing-text10">Welcome to</h1>
              <h2 className="landing-text12">OYIBO MARKET</h2>
              <span  className="landing-text14 ">
              Your online store for Afro-Caribbean food items in Bulgaria
        </span>
            
          </div>
          <div>
            <Button variant="light" as={Link} to="/ProductsPage" className="landing-text16">
      
                View Products
              
            </Button>
          </div>
        
        </Col>
        <Col ><img src={AfricanMap} alt="" className="landing-africamapsvgrepocom4"/></Col>
        </Row>
        </Container>
      </Card.ImgOverlay>
    </Card>
  );
}

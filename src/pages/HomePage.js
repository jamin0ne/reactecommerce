import React from 'react';
import {Link} from 'react-router-dom';
import {Header,Segment,Icon,Button, Card} from 'semantic-ui-react'

export default function HomePage(){
	
	
	
	return  (   <div style ={{backgroundColor:'powderblue',backgroundSize: "cover",
    height: "100vh"}}> <Segment placeholder >
				 <Header as ='h2' icon textAlign ='center'>
				 <Icon name='shopping basket' circular  />
				 <Header.Content>Welcome to market</Header.Content>
				 </Header>
					 </Segment>
				 
				 <Card centered >
			 		  <Button as={Link}  to='/Productspage' animated color ='teal'>
		<Button.Content visible> Our products </Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
				 </Card>
			 </div>
	)
}
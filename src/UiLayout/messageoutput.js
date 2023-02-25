import React from "react";
import { Alert, Navbar } from "react-bootstrap";

function messageoutput(props) {
    

return(
    <div>
    {props.Alert ==="" ?<div></div> :<Navbar expand="lg" fixed="bottom"><Alert variant="secondary">
    {props.Alert}
   </Alert></Navbar>}
   </div>
)

}
export default messageoutput;
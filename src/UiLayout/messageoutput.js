import React, {useContext} from "react";
import { Alert, Navbar } from "react-bootstrap";
import  CartItemContext from "../settingsAndConfig/contextsHandler/cartContextProvider"

function messageoutput() {
    const ContextinCartItem = useContext(CartItemContext);

return(
    <div>
    {ContextinCartItem.alert ==="" ?<div></div> :<Navbar expand="lg" fixed="bottom"><Alert variant="secondary">
    {ContextinCartItem.alert}
   </Alert></Navbar>}
   </div>
)

}
export default messageoutput;
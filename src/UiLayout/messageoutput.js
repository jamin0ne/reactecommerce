import React, {useContext} from "react";
import  CartItemContext from "../settingsAndConfig/contextsHandler/cartContextProvider"

function messageoutput(props) {
    const ContextinCartItem = useContext(CartItemContext);

return(
    <span style={{ display: "flex", zIndex:9999,
        justifyContent: "center",color:"red",fontWeight:"700",position:"fixed", width: "100%", fontSize: "1.5rem"}}>{ContextinCartItem.alert}</span>
)

}
export default messageoutput;
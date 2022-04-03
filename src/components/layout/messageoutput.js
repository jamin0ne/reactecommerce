import React, {useContext} from "react";
import  CartItemContext from "../../contextFolder/cartContextProvider"

function messageoutput(props) {
    const ContextinCartItem = useContext(CartItemContext);

return(
    <span style={{ display: "flex",
        justifyContent: "center",color:"red",fontWeight:"700", fontSize: "1.5rem"}}>{ContextinCartItem.alert}</span>
)

}
export default messageoutput;
import React from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";

const User=(props)=>{
    return(
        <div>
           <p> User Name :props.name</p>
        </div>
    );
}
export default User;
import React from "react";

const ButtonComponent = (props) => {
    return ( 
        <div>
            <button onClick={() => props.incrementCount()}>Increment</button>
            <button onClick={() => props.decrementCount()}>Decrement</button>
        </div>
     );
}
 
export default ButtonComponent;
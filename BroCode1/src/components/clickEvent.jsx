import React from "react";

/*click event = An interaction when a user clicks on a specific
                element. we can respond to clicks by passing 
                a callback to the onClick event handler.
*/

function ClickEvent(){
    const handleClick = () => alert('👊🏻')
    return(
        <>
        <button onClick={handleClick}>Click me</button>
        </>
    )
}
export default ClickEvent;
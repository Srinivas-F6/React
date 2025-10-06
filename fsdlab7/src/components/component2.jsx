import React from "react";

export function Component2({name,village}){
   
    const styles = {
        border:'2px solid blue',
        height:'100px',
        width: '150px',
        background: 'linear-gradient(to right,cyan,lightgreen)',
        marginTop:'40px',
        paddingBottom: '40px'
    }

    return(
        <div style={styles}>
         <p>
            Hi, Iam {name}
         </p>
         <p>Iam fromm {village}</p>
        </div>
    )
}
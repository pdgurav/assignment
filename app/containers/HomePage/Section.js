/*eslint-disable */
import React from 'react';

export default function Section ({className, cmp, children}) {
    const  style = {
        border: "1px solid black",
        padding: "5px"
    }
    return(<div className={className} style={style}>
        <div style={{background: "gray", color: "white"}}>{cmp.text}</div>
        {children}
    </div>)
}

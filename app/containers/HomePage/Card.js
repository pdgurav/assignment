/*eslint-disable */
import React from 'react';

export default function Card ({className, cmp, children}) {
    const  style = {
        border: "1px solid black",
        padding: "5px"
    }
    return(<div className={className} style={style}>
        <a href="/blog/">{cmp.title}</a>
        <div>{cmp.text}</div>
        {children}
    </div>)
}

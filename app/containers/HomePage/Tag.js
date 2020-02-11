/*eslint-disable */
import React from 'react';

export default function Tag({cmp, tag, className}) {
    debugger;
    const style = {
        border: "1px solid black",
        padding: "5px"
    }
    let child = Array.isArray(cmp.children) ? cmp.children : [cmp.children];
    child = (<ul>
        {child.map((children, index) => {
            return (<li dangerouslySetInnerHTML={{ __html: `<${cmp.tag}> ${children} </${tag}>` }}></li>)
        })}
    </ul>)
    return (<div className= {className}style={style}>
        {child}
    </div>)
}

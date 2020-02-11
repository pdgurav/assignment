/*eslint-disable */
import React from 'react';
import snarkdown from 'snarkdown';

export default function Markdown ({cmp, className}) {
    const  style = {
        border: "1px solid black",
        padding: "5px"
    }
    const html = snarkdown(cmp.text)
    return(<div className={className} dangerouslySetInnerHTML={{__html: html}} style={style}>
    </div>)
}

import React from "react"
// import classnames from "classnames"

import {fontSizeStrategy} from "./FontSizeUtils"

if(require("exenv").canUseDOM) require ("./FontSizeInput.css")



const FontSizeInput= ({ 
    value, 
    style,
    changeState,
    initialFontSize,
    contextState: {fontSize: fontSizeState}
}) =>{ 
    if(!fontSizeState) changeState({ value, fontSize: intialFontSize})

    return( 
        <input
            onChange={({ target : {value: fontSizeValue}}) => { 
                if(Number(fontSizeValue) <= 0) fontSizeValue= "1"
                const fontSize=fontSizeValue || "1"
                const fontSizeState= fontSizeStrategy({ 
                    change: value.change(),
                    fontSize,
                    changeState
                }).value 
                changeState({ fontSize, value: fontSizeState})
            }}
            onFocus={e => e.target.select()}
            style={style}
            type="number"
            value={fontSizeState || initialFontSize}
            min="1"
        />
    )
}
export default FontSizeInput
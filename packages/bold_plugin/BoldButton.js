import React from "react"
import FontAwesome from "react-fontawesome"
import classnames from "classnames"

import {Button} from "@hoco_editor/ui"
import {boldMarkStrategy, hasMark} from "./BoldUtils"

const BoldButton = ({ value, onChange, changeState, className, style, type }) => { 
    return( 
        <Button 
            style={style}
            type={type}
            onClick={e => onChange(boldMarkStrategy(value.change()))}
            className={ classnames( 
                    {active: hasMark(value)}
            )}
        >
            <FontAwesome name="bold"/>
        </Button>
    )
}

export default BoldButton
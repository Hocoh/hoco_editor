import React from "react"
import classnames from "classnames"
import FontAwesome from "react-fontawesome"
import {Button} from "@hoco_editor/ui"

import {alignmentMarkStrategy, hasMark, getMark} from "./AlignmentUtils"

const AlignmentLeftButton = ({ value, onChange, changeState, className, style, type}) => ( 

    <Button 
        style={style}
        type={type}
        onClick={e => onChange(alignmentMarkStrategy(value.change(), "left"))}
        className={classnames( 
            {active: hasMark(value) && getMark(value).data.get("align") ==="left" }
        )}
    >
        <FontAwesome name="align-left"/>
    </Button>
)

export default AlignmentLeftButton 
import React from "react" 
import FontAwesome from "react-fontawesome"
import classnames from "classnames"
import {Button} from "@hoco_editor/ui"

import {italicMarkStrategy, hasMark} from "./italicUtils"

const ItalicButton =({value, onChange, className, style, type, }) => { 
    <Button
        style={style}
        type={type}
        onClick={e => onChange(italicMarkStrategy(value.change()))}
        className={classnames( 
            {active: hasMark(value)}
        )}
    >
            <FontAwesome name="italic"/>
    </Button>
}
export default ItalicButton
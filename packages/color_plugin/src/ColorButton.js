import React, {Component} from "react"
import FontAwesome from "react-fontawesome"
import classnames from "classnames"
import {Button} from "@hoco_editor/ui"

import DraggableColorPicker from "./DraggableColorPicker"

if (require("exenv").canUseDOM) require("./ColorButton.css")

class ColorButton extends Component { 
    UNSAFE_componentWillMount() { 
        const { changeState, contextState: {color}, initialState } = this.props
        if(!color) changeState({color: initialState})
    }

    render(){ 
        const {className, style, value, changeState, contextState: {color}, type} = this.props

        if(!color) return null 

        const {showPicker} = color 

        return (
            <div>
                <Button
                    style={style}
                    type={type}
                    onClick={e => changeState({value, color: {...color,showPicker:!showPicker }})}
                    className={classnames( {active: showpicker})}
                >
                 <FontAwesome name="eyedropper"/>
                </Button>
                    {showPicker && <DraggableColorPicker {...this.props} />}
            </div>
        )
    }
}

export default ColorButton
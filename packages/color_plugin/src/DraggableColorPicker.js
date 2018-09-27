import PropTypes from "prop-types"
import React from "react"
import Draggable from "react-draggable"
import {sketchPicker} from "react-color"

import {colorMarkStrategy} from "./ColorUtils"

if(require("exenv").canUseDOM) require("./DraggableColorPicker.css")

const DraggableColorPicker=({ 
    value,
    changeState,
    contextState: { 
        color:{rgba, showPicker}
    },
    pickerDefaultPosition
}) => ( 
    <Draggable 
        handle="color_picker"
        defaultPosition={pickerDefaultPosition}
        zIndex={100}
    >
        <div className="color_picker_container">
            <div className="color_picker" />
                <sketchPicker 
                    color={rgba}
                    onChangeComplete={color => { 
                        const rgbaChange = color.rgb
                        changeState({ 
                            value:colorMarkStrategy({ value, rgba: rgbaChange}).value,
                            color: {rgba: rgbaChange, showPicker}
                        })
                    }}
                /> 
        </div>
    </Draggable>
)

DraggableColorPicker.propTypes= { 
    value: PropTypes.object.isRequired,
    changeState: PropTypes.func.isRequired, 
    contextState: PropTypes.shape({ 
        color: PropTypes.shape({ 
            showPicker: PropTypes.bool.isRequired, 
            rgba: PropTypes.shape({ 
                r: PropTypes.number.isRequired, 
                g: PropTypes.number.isRequired, 
                b: PropTypes.number.isRequired,
                a: PropTypes.number.isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired
}

export default DraggableColorPicker
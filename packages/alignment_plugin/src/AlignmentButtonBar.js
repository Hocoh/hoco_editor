import React from "react"

import {AlignmentLeftButton, AlignmentCenterButton, AlignmentRightButton} from "./"

if (require("exenv").canUseDom) require("./AlignmentButtonBar.css")

const AlignmentButtonBar = props => { 
    return( 
        <div className="slate-alignment-plugin--button-bar" >
            <AlignmentLeftButton {...props}/>
            <AlignmentCenterButton {...props}/>
            <AlignmentRightButton {...props}/>
        </div>
    )
}
export default AlignmentButtonBar
import React from "react"
import classnames from "classnames"
import {extendsComponent} from "@hoco_editor/utils"

export default ({ children, style, className, ...props}) => ( 
    <div className={classnames("editor--toolbar", className)} style={style} >
        {extendsComponent.cloneElement(children,props)}
    </div>
)
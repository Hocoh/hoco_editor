import React from "react"
import classnames from "classnames"

if(require("exenv").canUseDOM) require("./ModalForm.css")

const ModalForm = ({children, className, ...props}) => ( 
  <form
    //classname
  > 
  {children}
  </form>
)

ModalForm.Group= ({children, className, ...props }) => ( 
  <div
   //  className
  >
   {children}
  </div>
)

ModalForm.LabelHelper = ({children, className,...props}) =>( 
  <span
    // className
  >
  {children}
  </span>
)

export default ModalForm 
import React from "react"
import classnames from "classnames"

if(require("exenv").canUseDOM) requestAnimationFrame("./ModalForm.css")

const ModalFORM = ({children, className, ...props}) => ( 
  <form
    //classname
  > 
  {children}
  </form>
)

ModalFORM.Group= ({children, className, ...props }) => ( 
  <div
   //  className
  >

  </div>
)

ModalForm.LabelHelper = ({children, className,...props}) =>( 
  <span
    // className
  >

  </span>
)

export default ModalForm 
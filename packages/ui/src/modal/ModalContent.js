import React from "react"

if (require("exenv").canUseDOM) require("./ModalContent.css")

const ModalContent= ({children}) => ( 
    <div>
        {children}
    </div>
)

ModalContent.Left = ({children}) => ( 
    <div>
        {children}
    </div>
)


ModalContent.Right = ({children}) => ( 
    <div>
        {children}
    </div>
)

export default ModalContent
import React from "react"

if (require("exenv").canUseDOM) require("./Modal.css")

const Modal =({ children}) =>{ 
    <div contentEditable={false} >
        <div>
            {children}
        </div>
    </div>
}

Modal.Header = ({ title= "Hoco_Editor", closeButtonAction}) => ( 
    <div>
        {title}
        {closeButtonAction && ( 
            <button
                onClick={closeButtonAction}
            />
        )}
    </div>
)
export default Modal 
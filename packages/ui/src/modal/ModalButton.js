import React from "react"

if (require("exenv").canUseDOM) require("./ModalButton.css")

const Container = ({children}) => ( 
    <div>
        {children}
    </div>
)

const Primary = ({ text, type ="button", onClick}) => ( 
    <button
        type={type}
        onClick={onClick}
    >
        {text}
    </button>
)

const Opaque = ({ text, type="button", onClick}) => ( 
    <button
    type={type}
    onClick={onClick}
    >
        {text}
    </button>
)

const Danger= ({text, type= "button", onClick}) => ( 
    <button
        type={type}
        onClick={onClick}
    >
        {text}
    </button>
)

export default { 
    Container, 
    Primary,
    Opaque, 
    Danger
}
// render 
import ItalicMark from "./ItalicMark"

// keyboard 
import ItalicKeyboardShortcut from "./italicKeyboardShortcut"

// utils
import * as ItalicUtils from "./ItalicUtils"
import ItalicButton from "./ItalicButton"

const ItalicPlugin= () => ({ 
    onKeyDown(...args){ 
        return ItalicKeyboardShortcut(...args)
    }
})

export{ 
    ItalicPlugin,
    ItalicMark, 
    ItalicKeyboardShortcut,
    ItalicUtils,
    ItalicButton
}
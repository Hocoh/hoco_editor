// render 
import FontSizeMark from "./FontSizeMark"

// keyboard
import FontSizeKeyboardShortcut from "./FontSizeKeyboardShortcut"

// utils
import * as FontSizeUtils from "./FontSizeUtils"
import FontSizeInput from "./FontSizeInput"

// validation 
import ValidatePluginOptions from "./ValidatePluginOptions"

// selection 
import SelectionUpdateInputValue from "./SelectionUpdateInputValue"

const FontSizePlugin = options => { 
    ValidatePluginOptions(options)

    return { 
        onKeyDown(...args){ 
            return FontSizeKeyboardShortcut(...args, options)
        },

        onSelect(...args) { 
            SelectionUpdateInputValue(...args,options)
        }        
    }
}

export  { 
    FontSizePlugin,
    FontSizeMark,
    FontSizeKeyboardShortcut,
    FontSizeUtils,
    FontSizeInput
}
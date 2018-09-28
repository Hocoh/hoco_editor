// rendering 

import BoldMark from "./BoldMark"

// Keyboard_shortcut

import BoldKeyboardShortcut from "./BoldKeyboardShotcut"

// utils _ ui  

import * as BoldUtils from "./BoldUtils"
import BoldButton from "./BoldButton"

// create plugin 

const BoldPlugin = options => ({ 
    onKeyDown(...args){ 
        return BoldKeyboardShortcut(...args)
    }
})
export { 
    BoldPlugin,
    BoldMark,
    BoldKeyboardShortcut,
    BoldUtils,
    BoldButton 
}
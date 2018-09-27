//  rendering 

import AlignmentNode from "./AlignmentNode"

// keyboard 

import AlignmentKeyboardShortcut from "./AlignmentKeyboardShortcut"

// external 

import * as AlignmentUtils from "./AlignmentUtils"
import AlignmentButtonBar from "./AlignmentButtonBar"
import AlignmentLeftButton from "./AlignmentLeftButton"
import AlignmentCenterButton from "./AlignmentCenterButton"
import AlignmentRightButton from "./AlignmentRightButton"


const AlignmentPlugin = () =>({ 
    onKeyDown(...args){ 
        return AlignmentKeyboardShortcut(...args)
    }
})

export { 
    AlignmentPlugin,
    AlignmentNode,
    AlignmentKeyboardShortcut,
    AlignmentUtils,
    AlignmentButtonBar,
    AlignmentLeftButton,
    AlignmentCenterButton,
    AlignmentRightButton
}
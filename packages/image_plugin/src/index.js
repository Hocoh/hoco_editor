// render 
import ImageNode from "./ImageNode"
import ImageLinkNode from "./ImageLinkNode"

// keyboard
import ImageKeyboardShortcut from "./ImageKeyboardShortcut"

// utils
import * as ImageUtils from "./ImageUtils"
import ImageButton from "./ImageButton"

const ImagePlugin = () => ({ 
    onkeyDown(...args){ 
        return ImageKeyboardShortcut(...args)
    }
})

export { 
    ImagePlugin,
    ImageNode,
    ImageLinkNode,
    ImageKeyboardShortcut,
    ImageUtils, 
    ImageButton
}
// render
import EmbedNode from "./EmbedNode"

// keyboard
import EmbedKeyboardShortcut from "./EmbedKeyboardShortcut"

// utils
import * as EmbedUtils from "./EmbedUtils"
import EmbedButton from "./EmbedButton"

const EmbedPlugin = ()=> ({ 
    onKeyDown(...args){ 
        return EmbedKeyboardShortcut(...args)
    }
})

export  { 
    EmbedPlugin,
    EmbedNode,
    EmbedKeyboardShortcut,
    EmbedUtils, 
    EmbedButton
}
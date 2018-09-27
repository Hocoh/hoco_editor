// render
import LinkNode from "./LinkNode"

// keyboard
import LinkKeyboardShortcut from "./LinkKeyboardShortcut"

// utils
import * as LinkUtils from "./LinkUtils"
import LinkButton from "./LinkButton"

const LinkPlugin= () => ({ 
    onKeyDown(...args){ 
        return LinkKeyboardShortcut(...args)
    }
})

export { 
    LinkPlugin,
    LinkNode,
    LinkKeyboardShortcut,
    LinkUtils,
    LinkButton 
}
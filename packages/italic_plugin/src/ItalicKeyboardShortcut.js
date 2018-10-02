import {keyboardEvent} from "@hoco_editor/utils"
import {italicMarkStrategy} from "@hoco_editor/italic_plugin/src/ItalicUtils"

const ItalicKeyboardShortcut = (event, change) => { 
    if(keyboardEvent.isMod(event) && !event.shiftKey && event.key === "i") { 
        return italicMarkStrategy(change)
    }
    return
}
export default ItalicKeyboardShortcut
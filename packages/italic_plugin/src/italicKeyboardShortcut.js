import {keyboardEvent} from "@hoco_editor/utils"
import {italicMarkStrategy} from "./italicUtils"

const ItalicKeyboardShortcut = (event, change) => { 
    if(keyboardEvent.isMod(event) && !event.shiftKey && event.key === "i") { 
        return italicMarkStrategy(change)
    }
    return
}
export default ItalicKeyboardShortcut
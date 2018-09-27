import {keyboardEvent} from "@hoco_editor/utils"
import {fontFamilyMarkStrategy} from "./FontFamilyUtils"

const FontFamilyKeyboardShortcut= (event, change, editor) => { 
    if (!keyboardEvent.isMod(event) || event.key !== "f") return 
    return fontFamilyMarkStrategy(change)
}

export default FontFamilyKeyboardShortcut
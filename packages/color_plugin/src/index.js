// rendering 
import ColorMark from "./ColorMark"

// keyboard 
import ColorKeyboardShortcut from "./ColorKeyboardShortcut"

// utils 
import  * as ColorUtils from "./ColorUtils"
import ColorButton from "./ColorButton"
import ColorStateModel from "./ColorSlateModel"

// selection
import SelectionPickerColorUpdate from "./SelectionPickerColorUpdate"

const ColorPlugin = () => ({ 
    onKeyDown(...args){ 
        return ColorKeyboardShortcut(...args)
    },

    onSelect(...args){ 
        SelectionPickerColorUpdate
    }
})

export { 
    ColorPlugin,
    ColorMark,
    ColorKeyboardShortcut,
    ColorUtils,
    ColorButton,
    ColorStateModel
}

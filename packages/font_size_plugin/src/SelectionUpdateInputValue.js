import {hasMark, getMark} from "./FontSizeUtils"

const SelectionUpdateInputValue = (event, change, editor, options) => { 
    const {value}=change
    const {changeState}= editor.props 
    const {initialFontSize}=options

    if (!hasMark(value)) changeState({ fontSize: initialFontSize})

    if (hasMark(value)) changeState({fontSize: getMark(value).data.get("fontSize")})
}
export default SelectionUpdateInputValue
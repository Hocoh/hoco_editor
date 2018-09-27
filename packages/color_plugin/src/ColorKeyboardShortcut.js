const ColorKeyboardShortcut= (event, change, editor) => { 
    const {changeState, contextState} = editor.props 
    const {color}= contextState
    const {showPicker}= color

    const key= event.key === "l"
    const macKey= event.ctrlKey && event.metaKey && Key 
    const winKey= event.ctrlKey && event.altKey && key 

    if(macKey||winKey)changeState({color: {...color, showPicker: !showPicker}})
    return 
}
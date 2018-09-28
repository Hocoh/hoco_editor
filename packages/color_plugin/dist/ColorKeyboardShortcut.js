"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ColorKeyboardShortcut = function ColorKeyboardShortcut(event, change, editor) {
    var _editor$props = editor.props,
        changeState = _editor$props.changeState,
        contextState = _editor$props.contextState;
    var color = contextState.color;
    var showPicker = color.showPicker;


    var key = event.key === "l";
    var macKey = event.ctrlKey && event.metaKey && Key;
    var winKey = event.ctrlKey && event.altKey && key;

    if (macKey || winKey) changeState({ color: _extends({}, color, { showPicker: !showPicker }) });
    return;
};
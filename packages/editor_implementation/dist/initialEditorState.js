"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var initialeEditorState = {
    document: {
        nodes: [{
            kind: "block",
            type: "paragraph",
            nodes: [{ kind: "text", leaves: [{ text: "initial text loaded" }] }]
        }]
    }
};

exports.default = initialEditorState;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var initialEditorState = {
  document: {
    nodes: [{
      object: "block",
      type: "paragraph",
      nodes: [{
        object: "text",
        leaves: [{
          text: "initial text loaded"
        }]
      }]
    }]
  }
};
var _default = initialEditorState;
exports.default = _default;
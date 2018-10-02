"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.renderMark = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _slateReact = require("slate-react");

var _bold_plugin = require("@hoco_editor/bold_plugin");

var _color_plugin = require("@hoco_editor/color_plugin");

var _font_family_plugin = require("@hoco_editor/font_family_plugin");

var _font_size_plugin = require("@hoco_editor/font_size_plugin");

var _italic_plugin = require("@hoco_editor/italic_plugin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// all node cases are proposed in the switch function 
// export const renderNode= props => { 
//     switch(process.node.type) { 
//         case "alignment": return <AlignmentNode {...props} />
//         case "embed": return <EmbedNode {...props} />
//         case "grid": return <GridNode {...props} />
//         case "grid-row": return <GridRowNode {...props} />
//         case "grid-cell": return <GridCellNode {...props} />
//         case "image": return <ImageNode {...props} />
//         case "imageLink": return <ImageLinkNode {...props} />
//         case "link": return <LinkNode {...props} />
//         case "list-item": return <ListItemNode {...props} />
//         case "ordered-list": return <OrderedListNode {...props} />
//         case "unordered-list": return <UnorderedListNode {...props} />
//     }
// }
var renderMark = function renderMark(props) {
  switch (props.mark.type) {
    case "bold":
      return _react.default.createElement(_bold_plugin.BoldMark, props);

    case "color":
      return _react.default.createElement(_color_plugin.ColorMark, props);

    case "font-family":
      return _react.default.createElement(_font_family_plugin.FontFamilyMark, props);

    case "font-size":
      return _react.default.createElement(_font_size_plugin.FontSizeMark, props);

    case "italic":
      return _react.default.createElement(_italic_plugin.ItalicMark, props);
  }
};

exports.renderMark = renderMark;

var _default = function _default(_ref) {
  var className = _ref.className,
      style = _ref.style,
      value = _ref.value,
      contextState = _ref.contextState,
      plugins = _ref.plugins,
      onChange = _ref.onChange,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "style", "value", "contextState", "plugins", "onChange", "children"]);

  var readOnly = contextState.readOnly;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)("editor--content", className)
  }, _react.default.createElement(_slateReact.Editor, _extends({
    plugins: plugins,
    value: value,
    contextState: contextState,
    onChange: onChange // renderNode={renderNode}
    ,
    renderMark: renderMark,
    readOnly: readOnly,
    style: style
  }, rest)), children);
};

exports.default = _default;
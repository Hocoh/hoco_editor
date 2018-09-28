"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.renderMark = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _slateReact = require("slate-react");

var _boldPlugin = require("@hoco_editor/bold-plugin");

var _colorPlugin = require("@hoco_editor/color-plugin");

var _fontFamilyPlugin = require("@hoco_editor/font-family-plugin");

var _fontSizePlugin = require("@hoco_editor/font-size-plugin");

var _italicPlugin = require("@hoco_editor/italic-plugin");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Nodes

// import  {AlignmentNode} from "@hoco_editor/alignment-plugin"
// import  {EmbedNode} from "@hoco_editor/embed-plugin"
// import  {GridNode, GridRowNode, GridCellNode} from "@hoco_editor/grid-plugin"
// import  {ImageNode, ImageLinkNode} from "@hoco_editor/image-plugin"
// import  {LinkNode} from "@hoco_editor/link-plugin"
// import  {ListItemNode, OrderedListNode, UnorderedListNode} from "@hoco_editor/list-plugin"


// Marks

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

var renderMark = exports.renderMark = function renderMark(props) {
    switch (props.mark.type) {
        case "bold":
            return _react2.default.createElement(_boldPlugin.BoldMark, props);
        case "color":
            return _react2.default.createElement(_colorPlugin.ColorMark, props);
        case "font-family":
            return _react2.default.createElement(_fontFamilyPlugin.FontFamilyMark, props);
        case "font-size":
            return _react2.default.createElement(_fontSizePlugin.FontSizeMark, props);
        case "italic":
            return _react2.default.createElement(_italicPlugin.ItalicMark, props);
    }
};

exports.default = function (_ref) {
    var className = _ref.className,
        style = _ref.style,
        value = _ref.value,
        contextState = _ref.contextState,
        plugins = _ref.plugins,
        onChange = _ref.onChange,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, ["className", "style", "value", "contextState", "plugins", "onChange", "children"]);

    var readOnly = contextState.readOnly;


    return _react2.default.createElement(
        "div",
        {
            className: (0, _classnames2.default)("editor--content", className) },
        _react2.default.createElement(_slateReact.Editor, _extends({
            plugins: plugins,

            value: value,
            contextState: contextState,

            onChange: onChange,
            renderNode: renderNode,
            renderMark: renderMark,

            readOnly: readOnly,
            style: style
        }, rest)),
        children
    );
};
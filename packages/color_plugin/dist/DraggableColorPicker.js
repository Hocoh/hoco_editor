"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDraggable = require("react-draggable");

var _reactDraggable2 = _interopRequireDefault(_reactDraggable);

var _reactColor = require("react-color");

var _ColorUtils = require("./ColorUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (require("exenv").canUseDOM) require("./DraggableColorPicker.css");

var DraggableColorPicker = function DraggableColorPicker(_ref) {
    var value = _ref.value,
        changeState = _ref.changeState,
        _ref$contextState$col = _ref.contextState.color,
        rgba = _ref$contextState$col.rgba,
        showPicker = _ref$contextState$col.showPicker,
        pickerDefaultPosition = _ref.pickerDefaultPosition;
    return _react2.default.createElement(
        _reactDraggable2.default,
        {
            handle: "color_picker",
            defaultPosition: pickerDefaultPosition,
            zIndex: 100
        },
        _react2.default.createElement(
            "div",
            { className: "color_picker_container" },
            _react2.default.createElement("div", { className: "color_picker" }),
            _react2.default.createElement("sketchPicker", {
                color: rgba,
                onChangeComplete: function onChangeComplete(color) {
                    var rgbaChange = color.rgb;
                    changeState({
                        value: (0, _ColorUtils.colorMarkStrategy)({ value: value, rgba: rgbaChange }).value,
                        color: { rgba: rgbaChange, showPicker: showPicker }
                    });
                }
            })
        )
    );
};

DraggableColorPicker.propTypes = {
    value: _propTypes2.default.object.isRequired,
    changeState: _propTypes2.default.func.isRequired,
    contextState: _propTypes2.default.shape({
        color: _propTypes2.default.shape({
            showPicker: _propTypes2.default.bool.isRequired,
            rgba: _propTypes2.default.shape({
                r: _propTypes2.default.number.isRequired,
                g: _propTypes2.default.number.isRequired,
                b: _propTypes2.default.number.isRequired,
                a: _propTypes2.default.number.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};

exports.default = DraggableColorPicker;
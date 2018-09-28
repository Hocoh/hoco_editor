"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require("@hoco_editor/utils");

var _initialEditorState = require("./initialEditorState");

var _initialEditorState2 = _interopRequireDefault(_initialEditorState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import { PropTypes } from 'prop-types'


// import {Value} from "slate" 


var HocoEditor = function (_Component) {
    _inherits(HocoEditor, _Component);

    function HocoEditor() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, HocoEditor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HocoEditor.__proto__ || Object.getPrototypeOf(HocoEditor)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: _this.props.initialState || _initialEditorState2.default,
            readOnly: false,
            uid: new Date().getUTCMilliseconds()

            // update the editor interface value
        }, _this.onChange = function (change) {
            var value = change.value;
            _this.setState({ value: value });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(HocoEditor, [{
        key: "changeState",


        // set the editor state 
        value: function changeState(state) {
            this.setState(state);
        }
    }, {
        key: "render",
        value: function render() {

            // extract some values from this.props
            var _props = this.props,
                children = _props.children,
                style = _props.style,
                className = _props.className,
                plugins = _props.plugins;

            // package plugins _ state_ onChange functions 
            // in childProps variable

            var childProps = {
                plugins: plugins,
                value: this.state.value,
                contextState: this.state,
                onChange: this.onChange.bind(this),
                changeState: this.changeState.bind(this)
            };

            return _react2.default.createElement(
                "div",
                { className: (0, _classnames2.default)("editor--root", className), style: style },
                _utils.extendsComponent.cloneElement(children, childProps)
            );
        }
    }]);

    return HocoEditor;
}(_react.Component);

exports.default = HocoEditor;
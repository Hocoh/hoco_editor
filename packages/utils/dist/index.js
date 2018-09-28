"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typecheck = exports.extendsComponent = exports.keyboardEvent = undefined;

var _keyboardEvent2 = require("./keyboard-event");

var _keyboardEvent = _interopRequireWildcard(_keyboardEvent2);

var _extendsComponent2 = require("./extends-component");

var _extendsComponent = _interopRequireWildcard(_extendsComponent2);

var _typeCheck = require("./type-check");

var _typecheck = _interopRequireWildcard(_typeCheck);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.keyboardEvent = _keyboardEvent;
exports.extendsComponent = _extendsComponent;
exports.typecheck = _typecheck;
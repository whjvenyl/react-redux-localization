"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "REDUCER_NAME", {
  enumerable: true,
  get: function get() {
    return _constants.REDUCER_NAME;
  }
});
Object.defineProperty(exports, "LocalizationReducer", {
  enumerable: true,
  get: function get() {
    return _reducers.default;
  }
});
Object.defineProperty(exports, "setMessage", {
  enumerable: true,
  get: function get() {
    return _actions.setMessage;
  }
});
Object.defineProperty(exports, "setLanguage", {
  enumerable: true,
  get: function get() {
    return _actions.setLanguage;
  }
});
exports.default = void 0;

var _constants = require("./constants");

var _reducers = _interopRequireDefault(require("./state/reducers"));

var _actions = require("./state/actions");

var _Translator = _interopRequireDefault(require("./components/Translator"));

var _default = _Translator.default;
exports.default = _default;
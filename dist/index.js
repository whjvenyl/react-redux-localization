"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "REDUCER_NAME", {
  enumerable: true,
  get: function get() {
    return _languages.REDUCER_NAME;
  }
});
Object.defineProperty(exports, "LocalizationReducer", {
  enumerable: true,
  get: function get() {
    return _LocalizationReducer.default;
  }
});
Object.defineProperty(exports, "setMessage", {
  enumerable: true,
  get: function get() {
    return _LocalizationActions.setMessage;
  }
});
Object.defineProperty(exports, "setLanguage", {
  enumerable: true,
  get: function get() {
    return _LocalizationActions.setLanguage;
  }
});
exports.default = void 0;

var _languages = require("./constants/languages");

var _LocalizationReducer = _interopRequireDefault(require("./state/reducers/LocalizationReducer"));

var _LocalizationActions = require("./state/actions/LocalizationActions");

var _Translator = _interopRequireDefault(require("./components/Translator"));

var _default = _Translator.default;
exports.default = _default;
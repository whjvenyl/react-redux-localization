"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _constants = require("./../../constants");

var _getBrowserLanguage = _interopRequireDefault(require("./../../helpers/getBrowserLanguage"));

var initialBaseLanguage = function initialBaseLanguage() {
  return window.reactReduxLocalization && window.reactReduxLocalization.baseLanguage ? window.reactReduxLocalization.baseLanguage : _constants.en;
};

var initialCurrentLanguage = function initialCurrentLanguage() {
  var browserLanguage = (0, _getBrowserLanguage.default)();

  if (window.reactReduxLocalization && window.reactReduxLocalization.currentLanguage) {
    return window.reactReduxLocalization.baseLanguage;
  } else if (browserLanguage) {
    return browserLanguage;
  }

  return _constants.en;
};

var initialMessages = function initialMessages() {
  return window.reactReduxLocalization && window.reactReduxLocalization.messages ? window.reactReduxLocalization.messages : {};
};

var initialState = {
  baseLanguage: initialBaseLanguage(),
  currentLanguage: initialCurrentLanguage(),
  messages: initialMessages()
};

var LocalizationReducer = function LocalizationReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants.SET_LANGUAGE:
      return (0, _objectSpread2.default)({}, state, {
        currentLanguage: action.currentLanguage
      });

    case _constants.SET_MESSAGES:
      return (0, _objectSpread2.default)({}, state, {
        messages: action.messages
      });

    default:
      return state;
  }
};

var _default = LocalizationReducer;
exports.default = _default;
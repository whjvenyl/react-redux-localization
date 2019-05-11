"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _languages = require("./../../constants/languages");

var _getBrowserLanguage = _interopRequireDefault(require("./../../helpers/getBrowserLanguage"));

var initialBaseLanguage = function initialBaseLanguage() {
  if (window && window.reactReduxLocalization && window.reactReduxLocalization.baseLanguage) {
    return window.reactReduxLocalization.baseLanguage;
  }

  return _languages.en;
};

var initialCurrentLanguage = function initialCurrentLanguage() {
  var browserLanguage = (0, _getBrowserLanguage.default)();

  if (window && window.reactReduxLocalization && window.reactReduxLocalization.currentLanguage) {
    return window.reactReduxLocalization.baseLanguage;
  } else if (browserLanguage) {
    return browserLanguage;
  }

  return _languages.en;
};

var initialMessages = function initialMessages() {
  if (window && window.reactReduxLocalization && window.reactReduxLocalization.messages) {
    return window.reactReduxLocalization.messages;
  }

  return {
    en: {
      a: {
        b: {
          c: 'Hello, I\' am the c',
          d: 'Hello, I\' am the d',
          k: 'Hello, I\' am the d with vars {0}',
          j: 'Test with named variables {name} {surname}',
          variable: 'IAmAVariable'
        }
      },
      counterable: {
        name: {
          singular: "{counter} thing",
          plural: "{counter} things",
          empty: "{counter} things"
        }
      }
    },
    it: {
      a: {
        b: {
          c: 'Ciao sono la c',
          k: 'Ciao sono la k con variabili {0}',
          j: 'Test con variabili esplicite {name} {surname}',
          variable: 'porco dio'
        }
      },
      counterable: {
        name: {
          singular: "{counter} cosa",
          plural: "{counter} cose",
          empty: "{counter} cose"
        }
      }
    }
  };
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
    case _languages.SET_LANGUAGE:
      return (0, _objectSpread2.default)({}, state, {
        currentLanguage: action.currentLanguage
      });

    case _languages.SET_MESSAGES:
      return (0, _objectSpread2.default)({}, state, {
        messages: action.messages
      });

    default:
      return state;
  }
};

var _default = LocalizationReducer;
exports.default = _default;
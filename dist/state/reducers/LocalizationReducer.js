"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getBaseLanguageKey = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _languages = require("./../../constants/languages");

var getBaseLanguageKey = function getBaseLanguageKey() {
  if (window && window.navigator && window.navigator.language) {
    return window.navigator.language;
  } else if (window && window.navigator && window.navigator.userLanguage) {
    return window.navigator.userLanguage;
  }

  return _languages.en_EN;
};

exports.getBaseLanguageKey = getBaseLanguageKey;
var initialMessages = {
  "en-EN": {
    a: {
      b: {
        c: 'Hello, I\' am the c',
        d: 'Hello, I\' am the d',
        k: 'Hello, I\' am the d with vars {0}',
        j: 'Test with named variables {name} {surname}',
        variable: 'piggod'
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
  "it-IT": {
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
var initialState = {
  baseLanguage: _languages.en_EN,
  currentLanguage: getBaseLanguageKey(),
  messages: initialMessages
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
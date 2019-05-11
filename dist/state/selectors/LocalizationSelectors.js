"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSingularTranslation = exports.getTranslation = exports.getBaseLanguageMessages = exports.getCurrentLanguageMessages = exports.getMessages = exports.getCurrentLanguage = exports.getBaseLanguage = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireWildcard(require("react"));

var _get = _interopRequireDefault(require("./../../helpers/get"));

var _languages = require("./../../constants/languages");

var getBaseLanguage = function getBaseLanguage(state) {
  if (!state[_languages.REDUCER_NAME]) {
    return null;
  }

  return state[_languages.REDUCER_NAME].baseLanguage;
};

exports.getBaseLanguage = getBaseLanguage;

var getCurrentLanguage = function getCurrentLanguage(state) {
  if (!state[_languages.REDUCER_NAME]) {
    return null;
  }

  return state[_languages.REDUCER_NAME].currentLanguage;
};

exports.getCurrentLanguage = getCurrentLanguage;

var getMessages = function getMessages(state) {
  if (!state[_languages.REDUCER_NAME]) {
    return null;
  }

  return state[_languages.REDUCER_NAME].messages;
};

exports.getMessages = getMessages;

var getCurrentLanguageMessages = function getCurrentLanguageMessages(state) {
  if (!state[_languages.REDUCER_NAME]) {
    return null;
  }

  var currentLanguage = getCurrentLanguage(state);
  var messages = getMessages(state);

  if (messages[currentLanguage]) {
    return messages[currentLanguage];
  }

  return {};
};

exports.getCurrentLanguageMessages = getCurrentLanguageMessages;

var getBaseLanguageMessages = function getBaseLanguageMessages(state) {
  if (!state[_languages.REDUCER_NAME]) {
    return null;
  }

  var baseLanguage = getBaseLanguage(state);
  var messages = getMessages(state);

  if (messages[baseLanguage]) {
    return messages[baseLanguage];
  }

  return {};
};

exports.getBaseLanguageMessages = getBaseLanguageMessages;

var getTranslationProps = function getTranslationProps(props, key) {
  if (!key) {
    return props;
  }

  var updatedProps = props[key];

  if (!updatedProps.vars) {
    updatedProps = (0, _objectSpread2.default)({}, updatedProps, {
      vars: {
        counter: props.counter
      }
    });
  }

  return updatedProps;
};

var getTranslation = function getTranslation(state, props) {
  if (!state[_languages.REDUCER_NAME]) {
    return null;
  }

  if (props.counter === undefined) {
    return getSingularTranslation(state, props);
  } else if (props.counter === 0 && props.empty) {
    return getSingularTranslation(state, getTranslationProps(props, 'empty'));
  } else if (props.counter === 1 && props.singular) {
    return getSingularTranslation(state, getTranslationProps(props, 'singular'));
  } else if (props.counter > 1 && props.plural) {
    return getSingularTranslation(state, getTranslationProps(props, 'plural'));
  }

  return null;
};

exports.getTranslation = getTranslation;

var getSingularTranslation = function getSingularTranslation(state, props) {
  if (!state[_languages.REDUCER_NAME]) {
    return null;
  }

  var currentLanguageMessages = getCurrentLanguageMessages(state);
  var translation = (0, _get.default)(currentLanguageMessages, props.strings);

  if (!translation) {
    var baseLanguageMessages = getBaseLanguageMessages(state);
    translation = (0, _get.default)(baseLanguageMessages, props.strings);
  }

  var parentesisRegex = /({[^\}]+})/;
  var translationSplitted = translation.split(parentesisRegex).filter(function (e) {
    return e;
  });

  if (props.vars && (0, _typeof2.default)(props.vars) === 'object') {
    translationSplitted.forEach(function (v, i) {
      if (v.match(parentesisRegex) && v.replace(/[{()}]/g, '')) {
        translationSplitted[i] = props.vars[v.replace(/[{()}]/g, '')];
      }

      translationSplitted[i] = _react.default.createElement(_react.Fragment, {
        key: "translation_".concat(i)
      }, translationSplitted[i]);
    });
  }

  if (translationSplitted.length === 0) {
    var currentLanguage = getCurrentLanguage(state);
    var packageCss = 'color: #0088a3; font-size: 18px; font-weight: bold;';
    var languageCss = 'color: white; background-color: #0088a3; padding: 4px 6px; border-radius: 4px;';
    var stringsCss = 'color: black; background-color: #62ebff; padding: 4px 6px; border-radius: 4px;';
    var resetCss = 'color: inherit; background-color: inherit; padding: 0; border-radius: 0;';
    console.info('%cReact Redux Localization%c\n😱 Missing translation in %c%s%c for strings: %c%s', packageCss, resetCss, languageCss, currentLanguage, resetCss, stringsCss, props.strings);
  }

  return translationSplitted;
};

exports.getSingularTranslation = getSingularTranslation;
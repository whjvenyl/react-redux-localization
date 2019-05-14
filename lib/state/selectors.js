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

var _constants = require("./../../constants");

var getBaseLanguage = function getBaseLanguage(state) {
  return state[_constants.REDUCER_NAME] ? state[_constants.REDUCER_NAME].baseLanguage : null;
};

exports.getBaseLanguage = getBaseLanguage;

var getCurrentLanguage = function getCurrentLanguage(state) {
  return state[_constants.REDUCER_NAME] ? state[_constants.REDUCER_NAME].currentLanguage : null;
};

exports.getCurrentLanguage = getCurrentLanguage;

var getMessages = function getMessages(state) {
  return state[_constants.REDUCER_NAME] ? state[_constants.REDUCER_NAME].messages : null;
};

exports.getMessages = getMessages;

var getCurrentLanguageMessages = function getCurrentLanguageMessages(state) {
  if (!state[_constants.REDUCER_NAME]) {
    return null;
  }

  var currentLanguage = getCurrentLanguage(state);
  var messages = getMessages(state);

  if (currentLanguage && messages[currentLanguage]) {
    return messages[currentLanguage];
  }

  return {};
};

exports.getCurrentLanguageMessages = getCurrentLanguageMessages;

var getBaseLanguageMessages = function getBaseLanguageMessages(state) {
  if (!state[_constants.REDUCER_NAME]) {
    return null;
  }

  var baseLanguage = getBaseLanguage(state);
  var messages = getMessages(state);

  if (baseLanguage && messages[baseLanguage]) {
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
  if (!state[_constants.REDUCER_NAME]) {
    return null;
  }

  var translation;
  var tmpProps = (0, _objectSpread2.default)({}, props);

  if (props.counter === 0 && props.empty) {
    tmpProps = getTranslationProps(props, 'empty');
  } else if (props.counter === 1 && props.singular) {
    tmpProps = getTranslationProps(props, 'singular');
  } else if (props.counter > 1 && props.plural) {
    tmpProps = getTranslationProps(props, 'plural');
  }

  translation = getSingularTranslation(state, tmpProps);

  if (translation) {
    return translation;
  } else if (!translation && props.fallbackString) {
    return fallbackString;
  }

  return null;
};

exports.getTranslation = getTranslation;

var getSingularTranslation = function getSingularTranslation(state, props) {
  if (!state[_constants.REDUCER_NAME]) {
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

  return translationSplitted;
};

exports.getSingularTranslation = getSingularTranslation;
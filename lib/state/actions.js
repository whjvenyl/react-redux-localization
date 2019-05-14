"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMessages = exports.setLanguage = void 0;

var _constants = require("./../constants");

var setLanguage = function setLanguage(currentLanguage) {
  return {
    type: _constants.SET_LANGUAGE,
    currentLanguage: currentLanguage
  };
};

exports.setLanguage = setLanguage;

var setMessages = function setMessages(messages) {
  return {
    type: _constants.SET_MESSAGES,
    messages: messages
  };
};

exports.setMessages = setMessages;
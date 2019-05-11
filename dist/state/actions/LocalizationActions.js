"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMessages = exports.setLanguage = void 0;

var _languages = require("./../../constants/languages");

var setLanguage = function setLanguage(currentLanguage) {
  return {
    type: _languages.SET_LANGUAGE,
    currentLanguage: currentLanguage
  };
};

exports.setLanguage = setLanguage;

var setMessages = function setMessages(messages) {
  return {
    type: _languages.SET_MESSAGES,
    messages: messages
  };
};

exports.setMessages = setMessages;
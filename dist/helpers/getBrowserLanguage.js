"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getBrowserLanguage = function getBrowserLanguage() {
  if (window && window.navigator && window.navigator.language) {
    return window.navigator.language;
  } else if (window && window.navigator && window.navigator.userLanguage) {
    return window.navigator.userLanguage;
  }

  return null;
};

var _default = getBrowserLanguage;
exports.default = _default;
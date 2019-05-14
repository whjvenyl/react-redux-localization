"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _default = function _default(obj, string) {
  var splitted = string.split('.');
  var tmpObj = obj;
  splitted.some(function (e) {
    if (!tmpObj[e]) {
      tmpObj = '';
    }

    if (!tmpObj[e] || (0, _typeof2.default)(tmpObj) !== 'object') {
      return true;
    }

    if (tmpObj) {
      tmpObj = tmpObj[e];
    }
  });
  return tmpObj;
};

exports.default = _default;
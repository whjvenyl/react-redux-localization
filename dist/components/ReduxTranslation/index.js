"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _LocalizationSelectors = require("../../state/selectors/LocalizationSelectors");

var stateToProps = function stateToProps(state, ownProps) {
  return {
    translation: (0, _LocalizationSelectors.getTranslation)(state, ownProps)
  };
};

var ReduxTranslation =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ReduxTranslation, _React$Component);

  function ReduxTranslation() {
    (0, _classCallCheck2.default)(this, ReduxTranslation);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ReduxTranslation).apply(this, arguments));
  }

  (0, _createClass2.default)(ReduxTranslation, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_react.default.Fragment, null, this.props.translation);
    }
  }]);
  return ReduxTranslation;
}(_react.default.Component);

var _default = (0, _reactRedux.connect)(stateToProps)(ReduxTranslation);

exports.default = _default;
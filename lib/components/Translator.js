"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _selectors = require("../../state/selectors");

var stateToProps = function stateToProps(state, ownProps) {
  return {
    translation: (0, _selectors.getTranslation)(state, ownProps)
  };
};

var Translator =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(Translator, _React$PureComponent);

  function Translator() {
    (0, _classCallCheck2.default)(this, Translator);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Translator).apply(this, arguments));
  }

  (0, _createClass2.default)(Translator, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.prefix !== nextProps.prefix || this.props.suffix !== nextProps.suffix || this.props.counter !== nextProps.counter || this.props.fallbackString !== nextProps.fallbackString || this.props.vars !== nextProps.vars;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          prefix = _this$props.prefix,
          translation = _this$props.translation,
          suffix = _this$props.suffix;
      return _react.default.createElement(_react.Fragment, null, prefix, translation, suffix);
    }
  }]);
  return Translator;
}(_react.default.PureComponent);

var _default = (0, _reactRedux.connect)(stateToProps, null, null, {
  areStatePropsEqual: function areStatePropsEqual(next, prev) {
    return next.translation === prev.translation;
  }
})(Translator);

exports.default = _default;
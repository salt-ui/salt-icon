module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _propTypes = __webpack_require__(3);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconMore1 = function (_React$Component) {
	  _inherits(IconMore1, _React$Component);

	  function IconMore1() {
	    _classCallCheck(this, IconMore1);

	    return _possibleConstructorReturn(this, (IconMore1.__proto__ || Object.getPrototypeOf(IconMore1)).apply(this, arguments));
	  }

	  _createClass(IconMore1, [{
	    key: 'render',
	    value: function render() {
	      try {
	        var Svg = __webpack_require__(77);
	        return _react2.default.createElement(Svg, this.props);
	      } catch (e) {
	        console.error('cant\'t find svg: more1');
	        return null;
	      }
	    }
	  }]);

	  return IconMore1;
	}(_react2.default.Component);

	IconMore1.defaultProps = {
	  className: '',
	  name: '',
	  width: '32px',
	  height: '32px',
	  fill: '#000',
	  onClick: function onClick() {}
	};

	// http://facebook.github.io/react/docs/reusable-components.html
	IconMore1.propTypes = {
	  className: _propTypes2.default.string,
	  name: _propTypes2.default.string.isRequired,
	  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  fill: _propTypes2.default.string,
	  onClick: _propTypes2.default.func
	};

	IconMore1.displayName = 'IconMore1';

	exports.default = IconMore1;
	module.exports = exports['default'];

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

	module.exports = require("classnames");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

	module.exports = require("prop-types");

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(2);

	var _classnames3 = _interopRequireDefault(_classnames2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Icon = function (_React$Component) {
	    _inherits(Icon, _React$Component);

	    function Icon() {
	        _classCallCheck(this, Icon);

	        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	    }

	    _createClass(Icon, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                onClick = _props.onClick,
	                className = _props.className,
	                others = _objectWithoutProperties(_props, ['onClick', 'className']);

	            return _react2.default.createElement(
	                'div',
	                {
	                    onClick: onClick,
	                    style: {
	                        display: 'inline-block',
	                        lineHeight: 0
	                    },
	                    className: (0, _classnames3.default)('t-icon t-svg', _defineProperty({}, className, !!className))
	                },
	                _react2.default.createElement(
	                    'div',
	                    { style: { position: 'relative' } },
	                    _react2.default.createElement(
	                        'svg',
	                        others,
	                        _react2.default.createElement('defs', null),
	                        _react2.default.createElement('path', { d: 'M113.778 56.889h312.889a56.889 56.889 0 0 1 56.889 56.889v312.889a56.889 56.889 0 0 1-56.89 56.889H113.779a56.889 56.889 0 0 1-56.89-56.89V113.779a56.889 56.889 0 0 1 56.89-56.89zm0 85.333v256a28.444 28.444 0 0 0 28.444 28.445h256a28.444 28.444 0 0 0 28.445-28.445v-256a28.444 28.444 0 0 0-28.445-28.444h-256a28.444 28.444 0 0 0-28.444 28.444zm0 398.222h312.889a56.889 56.889 0 0 1 56.889 56.89v312.888a56.889 56.889 0 0 1-56.89 56.89H113.779a56.889 56.889 0 0 1-56.89-56.89V597.333a56.889 56.889 0 0 1 56.89-56.889zm0 85.334v256a28.444 28.444 0 0 0 28.444 28.444h256a28.444 28.444 0 0 0 28.445-28.444v-256a28.444 28.444 0 0 0-28.445-28.445h-256a28.444 28.444 0 0 0-28.444 28.445zm483.555-568.89h312.89a56.889 56.889 0 0 1 56.888 56.89v312.889a56.889 56.889 0 0 1-56.889 56.889H597.333a56.889 56.889 0 0 1-56.889-56.89V113.779a56.889 56.889 0 0 1 56.89-56.89zm0 85.334v256a28.444 28.444 0 0 0 28.445 28.445h256a28.444 28.444 0 0 0 28.444-28.445v-256a28.444 28.444 0 0 0-28.444-28.444h-256a28.444 28.444 0 0 0-28.445 28.444zm0 398.222h312.89a56.889 56.889 0 0 1 56.888 56.89v312.888a56.889 56.889 0 0 1-56.889 56.89H597.333a56.889 56.889 0 0 1-56.889-56.89V597.333a56.889 56.889 0 0 1 56.89-56.889zm0 85.334v256a28.444 28.444 0 0 0 28.445 28.444h256a28.444 28.444 0 0 0 28.444-28.444v-256a28.444 28.444 0 0 0-28.444-28.445h-256a28.444 28.444 0 0 0-28.445 28.445z' })
	                    ),
	                    _react2.default.createElement('div', {
	                        style: {
	                            position: 'absolute',
	                            top: 0,
	                            left: 0,
	                            width: '100%',
	                            height: '100%'
	                        },
	                        className: 't-icon-mask'
	                    })
	                )
	            );
	        }
	    }]);

	    return Icon;
	}(_react2.default.Component);

	Icon.displayName = "More1";
	Icon.defaultProps = { "viewBox": "0 0 1024 1024" };
	exports.default = Icon;
	module.exports = exports['default'];

/***/ })

/******/ });
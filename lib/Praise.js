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

	var IconPraise = function (_React$Component) {
	  _inherits(IconPraise, _React$Component);

	  function IconPraise() {
	    _classCallCheck(this, IconPraise);

	    return _possibleConstructorReturn(this, (IconPraise.__proto__ || Object.getPrototypeOf(IconPraise)).apply(this, arguments));
	  }

	  _createClass(IconPraise, [{
	    key: 'render',
	    value: function render() {
	      try {
	        var Svg = __webpack_require__(99);
	        return _react2.default.createElement(Svg, this.props);
	      } catch (e) {
	        console.error('cant\'t find svg: praise');
	        return null;
	      }
	    }
	  }]);

	  return IconPraise;
	}(_react2.default.Component);

	IconPraise.defaultProps = {
	  className: '',
	  name: '',
	  width: '32px',
	  height: '32px',
	  fill: '#000',
	  onClick: function onClick() {}
	};

	// https://facebook.github.io/react/docs/reusable-components.html
	IconPraise.propTypes = {
	  className: _propTypes2.default.string,
	  name: _propTypes2.default.string.isRequired,
	  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  fill: _propTypes2.default.string,
	  onClick: _propTypes2.default.func
	};

	IconPraise.displayName = 'IconPraise';

	exports.default = IconPraise;
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

/***/ 99:
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
	                        _react2.default.createElement('path', { d: 'M833.024 867.52l21.984-122.528c20.16-112.64 33.376-188.352 35.616-204.352 6.144-44.256-2.016-52.48-48.512-51.488-16.64.352-57.024.608-114.24.736-26.656.064-55.168.128-83.68.128l-27.584.032h-10.464c-24.352 0-39.776-26.432-28-48 .768-1.408 2.56-5.184 5.088-11.328 4.48-10.912 9.024-24.256 13.312-39.936 12.512-45.792 20.064-101.216 20.064-166.272 0-56.288-26.656-92.384-54.72-93.984-27.072-1.536-51.136 31.936-51.136 103.68 0 96.224-42.56 169.28-112.288 220.48a344 344 0 0 1-85.888 46.4v394.304H828l5.024-27.84zM727.68 425.184c56.736-.128 97.024-.352 113.12-.704 84.16-1.792 125.088 39.456 113.184 125.184-2.4 17.344-15.52 92.288-36 206.88a89752.448 89752.448 0 0 1-29.12 162.208l-2.016 10.976-.512 2.88c-2.976 16.384-16.224 27.552-31.68 27.552h-574.08c-17.696 0-32-14.496-32-32.352V477.12c0-14.944 10.112-27.936 24.448-31.456a210.56 210.56 0 0 0 26.528-9.184 286.816 286.816 0 0 0 61.28-34.112c54.176-39.84 85.92-94.304 85.92-168.128 0-104.736 48.576-172.352 118.72-168.32 65.6 3.744 115.136 70.784 115.136 158.592 0 70.944-8.32 132.16-22.4 183.488-1.664 6.144-3.328 11.904-5.024 17.28 25.44 0 50.752-.064 74.496-.128z' }),
	                        _react2.default.createElement('path', { d: 'M137.312 502.304h164c20.224 0 36.64-14.496 36.64-32.416 0-17.92-16.416-32.448-36.64-32.448h-200.64C80.416 437.44 64 451.968 64 469.888v457.664C64 945.472 80.416 960 100.672 960H279.04c20.256 0 36.672-14.528 36.672-32.448s-16.416-32.416-36.672-32.416H137.312V502.304z' })
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

	Icon.displayName = "Praise";
	Icon.defaultProps = { "viewBox": "0 0 1024 1024" };
	exports.default = Icon;
	module.exports = exports['default'];

/***/ })

/******/ });
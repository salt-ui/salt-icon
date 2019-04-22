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

	var IconEnglish = function (_React$Component) {
	  _inherits(IconEnglish, _React$Component);

	  function IconEnglish() {
	    _classCallCheck(this, IconEnglish);

	    return _possibleConstructorReturn(this, (IconEnglish.__proto__ || Object.getPrototypeOf(IconEnglish)).apply(this, arguments));
	  }

	  _createClass(IconEnglish, [{
	    key: 'render',
	    value: function render() {
	      try {
	        var Svg = __webpack_require__(38);
	        return _react2.default.createElement(Svg, this.props);
	      } catch (e) {
	        console.error('cant\'t find svg: english');
	        return null;
	      }
	    }
	  }]);

	  return IconEnglish;
	}(_react2.default.Component);

	IconEnglish.defaultProps = {
	  className: '',
	  name: '',
	  width: '32px',
	  height: '32px',
	  fill: '#000',
	  onClick: function onClick() {}
	};

	// https://facebook.github.io/react/docs/reusable-components.html
	IconEnglish.propTypes = {
	  className: _propTypes2.default.string,
	  name: _propTypes2.default.string.isRequired,
	  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
	  fill: _propTypes2.default.string,
	  onClick: _propTypes2.default.func
	};

	IconEnglish.displayName = 'IconEnglish';

	exports.default = IconEnglish;
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

/***/ 38:
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
	                        _react2.default.createElement('path', { d: 'M512 960C264.576 960 64 759.424 64 512S264.576 64 512 64s448 200.576 448 448-200.576 448-448 448zm0-64c212.064 0 384-171.936 384-384S724.064 128 512 128 128 299.936 128 512s171.936 384 384 384zm103.04-428.32v7.232c10.464-13.856 21.952-24.032 34.432-30.528 12.48-6.496 26.784-9.728 42.976-9.728 15.744 0 29.824 3.424 42.24 10.272 12.384 6.848 21.632 16.576 27.776 29.12 3.936 7.264 6.496 15.136 7.648 23.616 1.152 8.448 1.76 19.232 1.76 32.352v111.136c0 11.968-2.752 20.992-8.224 27.136a27.264 27.264 0 0 1-21.312 9.184 27.52 27.52 0 0 1-21.664-9.408c-5.536-6.272-8.32-15.232-8.32-26.88v-99.552c0-19.68-2.72-34.752-8.192-45.184-5.472-10.432-16.384-15.648-32.704-15.648-10.656 0-20.352 3.2-29.12 9.536-8.736 6.336-15.136 15.04-19.2 26.144-2.944 8.896-4.384 25.504-4.384 49.856v74.816c0 12.096-2.816 21.184-8.448 27.232a28.352 28.352 0 0 1-21.76 9.088 27.04 27.04 0 0 1-21.216-9.408c-5.536-6.272-8.32-15.232-8.32-26.88V468.576c0-11.392 2.496-19.872 7.456-25.504 4.96-5.6 11.744-8.416 20.32-8.416 5.28 0 10.016 1.248 14.24 3.712a26.624 26.624 0 0 1 10.176 11.168c2.56 4.96 3.84 11.008 3.84 18.144zm-112.736-66.272H355.968v78.72H490.72c9.92 0 17.312 2.24 22.208 6.72a22.688 22.688 0 0 1 7.328 17.6 23.552 23.552 0 0 1-7.232 17.824c-4.8 4.576-12.256 6.88-22.304 6.88H355.968v91.2h151.36c10.24 0 17.92 2.4 23.104 7.136a24.416 24.416 0 0 1 7.744 18.912c0 7.584-2.56 13.76-7.744 18.496-5.184 4.736-12.864 7.104-23.104 7.104H330.816c-14.144 0-24.32-3.136-30.528-9.408-6.176-6.272-9.28-16.416-9.28-30.4V391.136c0-9.344 1.376-16.96 4.16-22.88a25.792 25.792 0 0 1 12.992-12.896c5.92-2.688 13.44-4.032 22.656-4.032h171.52c10.336 0 18.016 2.272 23.04 6.88a23.296 23.296 0 0 1 7.552 18.048 23.552 23.552 0 0 1-7.552 18.24c-5.024 4.608-12.704 6.912-23.04 6.912z' })
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

	Icon.displayName = "English";
	Icon.defaultProps = { "viewBox": "0 0 1024 1024" };
	exports.default = Icon;
	module.exports = exports['default'];

/***/ })

/******/ });
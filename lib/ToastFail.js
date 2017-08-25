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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconToastFail = function (_React$Component) {
	  _inherits(IconToastFail, _React$Component);

	  function IconToastFail() {
	    _classCallCheck(this, IconToastFail);

	    return _possibleConstructorReturn(this, (IconToastFail.__proto__ || Object.getPrototypeOf(IconToastFail)).apply(this, arguments));
	  }

	  _createClass(IconToastFail, [{
	    key: 'render',
	    value: function render() {
	      try {
	        var Svg = __webpack_require__(48);
	        return _react2.default.createElement(Svg, this.props);
	      } catch (e) {
	        console.error('cant\'t find svg: toast-fail');
	        return null;
	      }
	    }
	  }]);

	  return IconToastFail;
	}(_react2.default.Component);

	IconToastFail.defaultProps = {
	  className: '',
	  name: '',
	  width: '32px',
	  height: '32px',
	  fill: '#000',
	  onClick: function onClick() {}
	};

	// http://facebook.github.io/react/docs/reusable-components.html
	IconToastFail.propTypes = {
	  className: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  fill: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func
	};

	IconToastFail.displayName = 'IconToastFail';

	exports.default = IconToastFail;
	module.exports = exports['default'];

/***/ },

/***/ 1:
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
	     true ? // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	        return root.svg4everybody = factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory() : root.svg4everybody = factory();
	}(this, function() {
	    /*! svg4everybody v2.1.4 | github.com/jonathantneal/svg4everybody */
	    function embed(parent, svg, target) {
	        // if the target exists
	        if (target) {
	            // create a document fragment to hold the contents of the target
	            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
	            // conditionally set the viewBox on the svg
	            viewBox && svg.setAttribute("viewBox", viewBox);
	            // copy the contents of the clone into the fragment
	            for (// clone the target
	            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
	                fragment.appendChild(clone.firstChild);
	            }
	            // append the fragment into the svg
	            parent.appendChild(fragment);
	        }
	    }
	    function loadreadystatechange(xhr) {
	        // listen to changes in the request
	        xhr.onreadystatechange = function() {
	            // if the request is ready
	            if (4 === xhr.readyState) {
	                // get the cached html document
	                var cachedDocument = xhr._cachedDocument;
	                // ensure the cached html document based on the xhr response
	                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
	                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
	                xhr._embeds.splice(0).map(function(item) {
	                    // get the cached target
	                    var target = xhr._cachedTarget[item.id];
	                    // ensure the cached target
	                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
	                    // embed the target into the svg
	                    embed(item.parent, item.svg, target);
	                });
	            }
	        }, // test the ready state change immediately
	        xhr.onreadystatechange();
	    }
	    function svg4everybody(rawopts) {
	        function oninterval() {
	            // while the index exists in the live <use> collection
	            for (// get the cached <use> index
	            var index = 0; index < uses.length; ) {
	                // get the current <use>
	                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent);
	                if (svg) {
	                    var src = use.getAttribute("xlink:href") || use.getAttribute("href");
	                    if (polyfill && (!opts.validate || opts.validate(src, svg, use))) {
	                        // remove the <use> element
	                        parent.removeChild(use);
	                        // parse the src and get the url and id
	                        var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
	                        // if the link is external
	                        if (url.length) {
	                            // get the cached xhr request
	                            var xhr = requests[url];
	                            // ensure the xhr request exists
	                            xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
	                            xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
	                            xhr._embeds.push({
	                                parent: parent,
	                                svg: svg,
	                                id: id
	                            }), // prepare the xhr ready state change event
	                            loadreadystatechange(xhr);
	                        } else {
	                            // embed the local id into the svg
	                            embed(parent, document.getElementById(id));
	                        }
	                    }
	                } else {
	                    // increase the index when the previous value was not "valid"
	                    ++index;
	                }
	            }
	            // continue the interval
	            requestAnimationFrame(oninterval, 67);
	        }
	        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
	        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
	        // create xhr requests object
	        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use");
	        // conditionally start the interval if the polyfill is active
	        polyfill && oninterval();
	    }
	    function getSVGAncestor(node) {
	        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
	        return svg;
	    }
	    return svg4everybody;
	});

/***/ },

/***/ 48:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames2 = __webpack_require__(2);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _svg4everybody = __webpack_require__(4);

	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var webkitUA = /\bAppleWebKit\/(\d+)\b/;

	module.exports = _react2.default.createClass({

	  displayName: "ToastFail",

	  getDefaultProps: function getDefaultProps() {
	    return { "version": "1.1", "xmlns": "http://www.w3.org/2000/svg", "x": "0px", "y": "0px", "width": "108.364px", "height": "108.364px", "viewBox": "0 0 108.364 108.364" };
	  },
	  componentDidMount: function componentDidMount() {
	    var webkitUAVersion = (navigator.userAgent.match(webkitUA) || [])[1];
	    (0, _svg4everybody2.default)({
	      polyfill: webkitUAVersion === '600' || webkitUAVersion < 537
	    });
	  },
	  render: function render() {
	    var _props = this.props,
	        onClick = _props.onClick,
	        className = _props.className,
	        others = _objectWithoutProperties(_props, ['onClick', 'className']);

	    return _react2.default.createElement(
	      'span',
	      { onClick: onClick, className: (0, _classnames3.default)('t-icon t-svg', _defineProperty({}, className, !!className)) },
	      _react2.default.createElement(
	        'svg',
	        others,
	        _react2.default.createElement(
	          'g',
	          null,
	          _react2.default.createElement(
	            'g',
	            null,
	            _react2.default.createElement('path', { d: 'M54.182,0C24.258,0,0,24.258,0,54.182c0,29.924,24.258,54.183,54.182,54.183c29.923,0,54.182-24.259,54.182-54.183 C108.364,24.258,84.105,0,54.182,0z M68.713,33.622c3.424,0,6.201,2.777,6.201,6.201c0,3.426-2.777,6.203-6.201,6.203 c-3.423,0-6.203-2.777-6.203-6.203C62.51,36.399,65.29,33.622,68.713,33.622z M40.594,33.622c3.423,0,6.2,2.777,6.2,6.201 c0,3.426-2.777,6.203-6.2,6.203c-3.423,0-6.201-2.777-6.201-6.203C34.393,36.399,37.17,33.622,40.594,33.622z M76.607,79.098 c-1.521,0.66-3.286-0.041-3.944-1.562c-2.894-6.689-9.731-11.012-17.421-11.012c-7.868,0-14.747,4.32-17.523,11.005 c-0.479,1.153-1.596,1.85-2.771,1.85c-0.384,0-0.773-0.073-1.15-0.229c-1.53-0.637-2.255-2.393-1.62-3.922 c3.71-8.932,12.764-14.703,23.064-14.703c10.084,0,19.084,5.742,22.928,14.63C78.828,76.674,78.128,78.439,76.607,79.098z' })
	          )
	        ),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null),
	        _react2.default.createElement('g', null)
	      ),
	      _react2.default.createElement('div', { className: 't-icon-mask' })
	    );
	  }
	});

/***/ }

/******/ });
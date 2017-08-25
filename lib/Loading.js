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

	var IconLoading = function (_React$Component) {
	  _inherits(IconLoading, _React$Component);

	  function IconLoading() {
	    _classCallCheck(this, IconLoading);

	    return _possibleConstructorReturn(this, (IconLoading.__proto__ || Object.getPrototypeOf(IconLoading)).apply(this, arguments));
	  }

	  _createClass(IconLoading, [{
	    key: 'render',
	    value: function render() {
	      try {
	        var Svg = __webpack_require__(25);
	        return _react2.default.createElement(Svg, this.props);
	      } catch (e) {
	        console.error('cant\'t find svg: loading');
	        return null;
	      }
	    }
	  }]);

	  return IconLoading;
	}(_react2.default.Component);

	IconLoading.defaultProps = {
	  className: '',
	  name: '',
	  width: '32px',
	  height: '32px',
	  fill: '#000',
	  onClick: function onClick() {}
	};

	// http://facebook.github.io/react/docs/reusable-components.html
	IconLoading.propTypes = {
	  className: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  fill: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func
	};

	IconLoading.displayName = 'IconLoading';

	exports.default = IconLoading;
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

/***/ 25:
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

	  displayName: "Loading",

	  getDefaultProps: function getDefaultProps() {
	    return { "xmlns": "http://www.w3.org/2000/svg", "viewBox": "0 0 100 100", "preserveAspectRatio": "xMidYMid", "className": "uil-default" };
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
	        _react2.default.createElement('rect', { x: '0', y: '0', width: '100', height: '100', fill: 'none', className: 'bk' }),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(0 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(30 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.08333333333333333s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(60 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.16666666666666666s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(90 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.25s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(120 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.3333333333333333s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(150 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.4166666666666667s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(180 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.5s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(210 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.5833333333333334s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(240 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.6666666666666666s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(270 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.75s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(300 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.8333333333333334s', repeatCount: 'indefinite' })
	        ),
	        _react2.default.createElement(
	          'rect',
	          { x: '46.5', y: '40', width: '7', height: '20', rx: '5', ry: '5', fill: '#000000', transform: 'rotate(330 50 50) translate(0 -30)' },
	          _react2.default.createElement('animate', { attributeName: 'opacity', from: '1', to: '0', dur: '1s', begin: '0.9166666666666666s', repeatCount: 'indefinite' })
	        )
	      ),
	      _react2.default.createElement('div', { className: 't-icon-mask' })
	    );
	  }
	});

/***/ }

/******/ });
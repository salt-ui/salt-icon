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

	var IconFieldRequired = function (_React$Component) {
	  _inherits(IconFieldRequired, _React$Component);

	  function IconFieldRequired() {
	    _classCallCheck(this, IconFieldRequired);

	    return _possibleConstructorReturn(this, (IconFieldRequired.__proto__ || Object.getPrototypeOf(IconFieldRequired)).apply(this, arguments));
	  }

	  _createClass(IconFieldRequired, [{
	    key: 'render',
	    value: function render() {
	      try {
	        var Svg = __webpack_require__(22);
	        return _react2.default.createElement(Svg, this.props);
	      } catch (e) {
	        console.error('cant\'t find svg: field-required');
	        return null;
	      }
	    }
	  }]);

	  return IconFieldRequired;
	}(_react2.default.Component);

	IconFieldRequired.defaultProps = {
	  className: '',
	  name: '',
	  width: '32px',
	  height: '32px',
	  fill: '#000',
	  onClick: function onClick() {}
	};

	// http://facebook.github.io/react/docs/reusable-components.html
	IconFieldRequired.propTypes = {
	  className: _react2.default.PropTypes.string,
	  name: _react2.default.PropTypes.string.isRequired,
	  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
	  fill: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func
	};

	IconFieldRequired.displayName = 'IconFieldRequired';

	exports.default = IconFieldRequired;
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

/***/ 22:
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

	    displayName: "FieldRequired",

	    getDefaultProps: function getDefaultProps() {
	        return { "width": "200", "height": "200", "viewBox": "0 0 200 200", "version": "1.1", "xmlns": "http://www.w3.org/2000/svg" };
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
	                    { className: 'transform-group' },
	                    _react2.default.createElement(
	                        'g',
	                        { transform: 'scale(0.1953125, 0.1953125)' },
	                        _react2.default.createElement('path', { d: 'M723.776 440.512 536.768 512l186.944 71.488c47.616 18.368 75.136 33.024 82.496 44.032 7.296 11.008 11.008 22.016 11.008 33.024 0 29.376-5.568 45.888-16.704 49.472-11.072 3.712-22.208 5.504-33.28 5.504-11.2 0-22.272-2.752-33.344-8.256-11.136-5.504-24.064-13.76-38.848-24.768L523.072 528.512l38.912 230.976c3.648 11.008 5.504 21.12 5.504 30.272 0 9.216 0 15.616 0 19.264 0 22.016-5.504 37.632-16.64 46.72C539.712 864.96 526.784 869.504 512 869.504c-11.328 0-23.552-3.648-36.8-11.008-13.248-7.296-19.776-23.808-19.776-49.472 0-7.296 0.96-14.656 2.816-22.016 1.92-7.296 2.816-16.512 2.816-27.52l45.184-230.976-175.232 153.984c-11.328 7.36-23.552 14.656-36.8 22.016-13.248 7.36-25.408 11.008-36.672 11.008-11.328 0-22.592-3.648-33.92-11.008-11.328-7.296-16.96-22.016-16.96-44.032 0-14.656 5.504-27.52 16.512-38.528s36.608-23.808 76.992-38.528L487.296 512 300.288 440.512C274.624 429.504 252.608 419.456 234.304 410.24c-18.368-9.152-27.52-24.768-27.52-46.72 0-18.304 5.504-32.064 16.576-41.28C234.496 313.152 245.504 308.48 256.704 308.48c11.072 0 23.104 2.752 36.096 8.256 12.864 5.504 24.896 13.76 36.096 24.768l172.032 153.984L462.08 264.512c0-11.008-0.96-20.096-2.816-27.52-1.92-7.296-2.752-14.656-2.752-22.016 0-14.656 5.504-28.352 16.64-41.28C484.288 160.96 497.28 154.496 512 154.496c22.656 0 37.568 7.36 45.248 22.016 7.488 14.656 11.328 27.52 11.328 38.528 0 7.36 0 15.616 0 24.768 0 9.216-1.92 17.408-5.696 24.768L517.696 495.488l175.168-153.984c15.04-14.656 28.16-23.808 39.552-27.52 11.328-3.648 22.592-5.504 33.92-5.504 15.04 0 27.264 5.504 36.672 16.512S817.28 348.864 817.28 363.52c0 14.656-3.712 26.624-11.008 35.776C798.848 408.448 771.392 422.208 723.776 440.512z' })
	                    )
	                )
	            ),
	            _react2.default.createElement('div', { className: 't-icon-mask' })
	        );
	    }
	});

/***/ }

/******/ });
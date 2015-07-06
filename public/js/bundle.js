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
/******/ 	__webpack_require__.p = "public/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1),
	    UIkit = __webpack_require__(2),//todo works here, but not for components
	    //_util = require('./lib/util'),
	    _ = __webpack_require__(3);
	//setup
	Vue.use(__webpack_require__(5));

	new Vue({

	    el: '#main',

	    data: {
	        currentView: 'designer-view'
	    },

	    components: {
	        'designer-view': __webpack_require__(19)
	    }

	})

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Vue.js v0.12.5
	 * (c) 2015 Evan You
	 * Released under the MIT License.
	 */

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["Vue"] = factory();
		else
			root["Vue"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
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
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var extend = _.extend

		/**
		 * The exposed Vue constructor.
		 *
		 * API conventions:
		 * - public API methods/properties are prefiexed with `$`
		 * - internal methods/properties are prefixed with `_`
		 * - non-prefixed properties are assumed to be proxied user
		 *   data.
		 *
		 * @constructor
		 * @param {Object} [options]
		 * @public
		 */

		function Vue (options) {
		  this._init(options)
		}

		/**
		 * Mixin global API
		 */

		extend(Vue, __webpack_require__(9))

		/**
		 * Vue and every constructor that extends Vue has an
		 * associated options object, which can be accessed during
		 * compilation steps as `this.constructor.options`.
		 *
		 * These can be seen as the default options of every
		 * Vue instance.
		 */

		Vue.options = {
		  replace: true,
		  directives: __webpack_require__(27),
		  elementDirectives: __webpack_require__(49),
		  filters: __webpack_require__(52),
		  transitions: {},
		  components: {},
		  partials: {}
		}

		/**
		 * Build up the prototype
		 */

		var p = Vue.prototype

		/**
		 * $data has a setter which does a bunch of
		 * teardown/setup work
		 */

		Object.defineProperty(p, '$data', {
		  get: function () {
		    return this._data
		  },
		  set: function (newData) {
		    if (newData !== this._data) {
		      this._setData(newData)
		    }
		  }
		})

		/**
		 * Mixin internal instance methods
		 */

		extend(p, __webpack_require__(54))
		extend(p, __webpack_require__(55))
		extend(p, __webpack_require__(56))
		extend(p, __webpack_require__(57))
		extend(p, __webpack_require__(59))

		/**
		 * Mixin public API methods
		 */

		extend(p, __webpack_require__(60))
		extend(p, __webpack_require__(61))
		extend(p, __webpack_require__(62))
		extend(p, __webpack_require__(63))
		extend(p, __webpack_require__(64))

		module.exports = _.Vue = Vue


	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		var lang = __webpack_require__(4)
		var extend = lang.extend

		extend(exports, lang)
		extend(exports, __webpack_require__(5))
		extend(exports, __webpack_require__(6))
		extend(exports, __webpack_require__(2))
		extend(exports, __webpack_require__(7))
		extend(exports, __webpack_require__(8))


	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(3)

		/**
		 * Assert whether a prop is valid.
		 *
		 * @param {Object} prop
		 * @param {*} value
		 */

		exports.assertProp = function (prop, value) {
		  var options = prop.options
		  var type = options.type
		  var valid = true
		  var expectedType
		  if (type) {
		    if (type === String) {
		      expectedType = 'string'
		      valid = typeof value === expectedType
		    } else if (type === Number) {
		      expectedType = 'number'
		      valid = typeof value === 'number'
		    } else if (type === Boolean) {
		      expectedType = 'boolean'
		      valid = typeof value === 'boolean'
		    } else if (type === Function) {
		      expectedType = 'function'
		      valid = typeof value === 'function'
		    } else if (type === Object) {
		      expectedType = 'object'
		      valid = _.isPlainObject(value)
		    } else if (type === Array) {
		      expectedType = 'array'
		      valid = _.isArray(value)
		    } else {
		      valid = value instanceof type
		    }
		  }
		  if (!valid) {
		    _.warn(
		      'Invalid prop: type check failed for ' +
		      prop.path + '="' + prop.raw + '".' +
		      ' Expected ' + formatType(expectedType) +
		      ', got ' + formatValue(value) + '.'
		    )
		    return false
		  }
		  var validator = options.validator
		  if (validator) {
		    if (!validator.call(null, value)) {
		      _.warn(
		        'Invalid prop: custom validator check failed for ' +
		        prop.path + '="' + prop.raw + '"'
		      )
		      return false
		    }
		  }
		  return true
		}

		function formatType (val) {
		  return val
		    ? val.charAt(0).toUpperCase() + val.slice(1)
		    : 'custom type'
		}

		function formatValue (val) {
		  return Object.prototype.toString.call(val).slice(8, -1)
		}

		/**
		 * Check if an element is a component, if yes return its
		 * component id.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @param {Boolean} hasAttrs
		 * @return {String|undefined}
		 */

		exports.commonTagRE = /^(div|p|span|img|a|br|ul|ol|li|h1|h2|h3|h4|h5|code|pre)$/
		exports.checkComponent = function (el, options, hasAttrs) {
		  var tag = el.tagName.toLowerCase()
		  if (tag === 'component') {
		    // dynamic syntax
		    var exp = el.getAttribute('is')
		    el.removeAttribute('is')
		    return exp
		  } else if (
		    !exports.commonTagRE.test(tag) &&
		    _.resolveAsset(options, 'components', tag)
		  ) {
		    return tag
		  } else if (
		    hasAttrs &&
		    (tag = _.attr(el, 'component'))
		  ) {
		    return tag
		  }
		}

		/**
		 * Create an "anchor" for performing dom insertion/removals.
		 * This is used in a number of scenarios:
		 * - block instance
		 * - v-html
		 * - v-if
		 * - component
		 * - repeat
		 *
		 * @param {String} content
		 * @param {Boolean} persist - IE trashes empty textNodes on
		 *                            cloneNode(true), so in certain
		 *                            cases the anchor needs to be
		 *                            non-empty to be persisted in
		 *                            templates.
		 * @return {Comment|Text}
		 */

		exports.createAnchor = function (content, persist) {
		  return config.debug
		    ? document.createComment(content)
		    : document.createTextNode(persist ? ' ' : '')
		}


	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = {

		  /**
		   * The prefix to look for when parsing directives.
		   *
		   * @type {String}
		   */

		  prefix: 'v-',

		  /**
		   * Whether to print debug messages.
		   * Also enables stack trace for warnings.
		   *
		   * @type {Boolean}
		   */

		  debug: false,

		  /**
		   * Whether to suppress warnings.
		   *
		   * @type {Boolean}
		   */

		  silent: false,

		  /**
		   * Whether allow observer to alter data objects'
		   * __proto__.
		   *
		   * @type {Boolean}
		   */

		  proto: true,

		  /**
		   * Whether to parse mustache tags in templates.
		   *
		   * @type {Boolean}
		   */

		  interpolate: true,

		  /**
		   * Whether to use async rendering.
		   */

		  async: true,

		  /**
		   * Whether to warn against errors caught when evaluating
		   * expressions.
		   */

		  warnExpressionErrors: true,

		  /**
		   * Internal flag to indicate the delimiters have been
		   * changed.
		   *
		   * @type {Boolean}
		   */

		  _delimitersChanged: true,

		  /**
		   * List of asset types that a component can own.
		   *
		   * @type {Array}
		   */

		  _assetTypes: [
		    'component',
		    'directive',
		    'elementDirective',
		    'filter',
		    'transition',
		    'partial'
		  ],

		  /**
		   * prop binding modes
		   */

		  _propBindingModes: {
		    ONE_WAY: 0,
		    TWO_WAY: 1,
		    ONE_TIME: 2
		  },

		  /**
		   * Max circular updates allowed in a batcher flush cycle.
		   */

		  _maxUpdateCount: 100

		}

		/**
		 * Interpolation delimiters.
		 * We need to mark the changed flag so that the text parser
		 * knows it needs to recompile the regex.
		 *
		 * @type {Array<String>}
		 */

		var delimiters = ['{{', '}}']
		Object.defineProperty(module.exports, 'delimiters', {
		  get: function () {
		    return delimiters
		  },
		  set: function (val) {
		    delimiters = val
		    this._delimitersChanged = true
		  }
		})


	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * Check is a string starts with $ or _
		 *
		 * @param {String} str
		 * @return {Boolean}
		 */

		exports.isReserved = function (str) {
		  var c = (str + '').charCodeAt(0)
		  return c === 0x24 || c === 0x5F
		}

		/**
		 * Guard text output, make sure undefined outputs
		 * empty string
		 *
		 * @param {*} value
		 * @return {String}
		 */

		exports.toString = function (value) {
		  return value == null
		    ? ''
		    : value.toString()
		}

		/**
		 * Check and convert possible numeric numbers before
		 * setting back to data
		 *
		 * @param {*} value
		 * @return {*|Number}
		 */

		exports.toNumber = function (value) {
		  return (
		    isNaN(value) ||
		    value === null ||
		    typeof value === 'boolean'
		  ) ? value
		    : Number(value)
		}

		/**
		 * Convert string boolean literals into real booleans.
		 *
		 * @param {*} value
		 * @return {*|Boolean}
		 */

		exports.toBoolean = function (value) {
		  return value === 'true'
		    ? true
		    : value === 'false'
		      ? false
		      : value
		}

		/**
		 * Strip quotes from a string
		 *
		 * @param {String} str
		 * @return {String | false}
		 */

		exports.stripQuotes = function (str) {
		  var a = str.charCodeAt(0)
		  var b = str.charCodeAt(str.length - 1)
		  return a === b && (a === 0x22 || a === 0x27)
		    ? str.slice(1, -1)
		    : false
		}

		/**
		 * Replace helper
		 *
		 * @param {String} _ - matched delimiter
		 * @param {String} c - matched char
		 * @return {String}
		 */
		function toUpper (_, c) {
		  return c ? c.toUpperCase() : ''
		}

		/**
		 * Camelize a hyphen-delmited string.
		 *
		 * @param {String} str
		 * @return {String}
		 */

		var camelRE = /-(\w)/g
		exports.camelize = function (str) {
		  return str.replace(camelRE, toUpper)
		}

		/**
		 * Converts hyphen/underscore/slash delimitered names into
		 * camelized classNames.
		 *
		 * e.g. my-component => MyComponent
		 *      some_else    => SomeElse
		 *      some/comp    => SomeComp
		 *
		 * @param {String} str
		 * @return {String}
		 */

		var classifyRE = /(?:^|[-_\/])(\w)/g
		exports.classify = function (str) {
		  return str.replace(classifyRE, toUpper)
		}

		/**
		 * Simple bind, faster than native
		 *
		 * @param {Function} fn
		 * @param {Object} ctx
		 * @return {Function}
		 */

		exports.bind = function (fn, ctx) {
		  return function (a) {
		    var l = arguments.length
		    return l
		      ? l > 1
		        ? fn.apply(ctx, arguments)
		        : fn.call(ctx, a)
		      : fn.call(ctx)
		  }
		}

		/**
		 * Convert an Array-like object to a real Array.
		 *
		 * @param {Array-like} list
		 * @param {Number} [start] - start index
		 * @return {Array}
		 */

		exports.toArray = function (list, start) {
		  start = start || 0
		  var i = list.length - start
		  var ret = new Array(i)
		  while (i--) {
		    ret[i] = list[i + start]
		  }
		  return ret
		}

		/**
		 * Mix properties into target object.
		 *
		 * @param {Object} to
		 * @param {Object} from
		 */

		exports.extend = function (to, from) {
		  for (var key in from) {
		    to[key] = from[key]
		  }
		  return to
		}

		/**
		 * Quick object check - this is primarily used to tell
		 * Objects from primitive values when we know the value
		 * is a JSON-compliant type.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */

		exports.isObject = function (obj) {
		  return obj !== null && typeof obj === 'object'
		}

		/**
		 * Strict object type check. Only returns true
		 * for plain JavaScript objects.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */

		var toString = Object.prototype.toString
		exports.isPlainObject = function (obj) {
		  return toString.call(obj) === '[object Object]'
		}

		/**
		 * Array type check.
		 *
		 * @param {*} obj
		 * @return {Boolean}
		 */

		exports.isArray = Array.isArray

		/**
		 * Define a non-enumerable property
		 *
		 * @param {Object} obj
		 * @param {String} key
		 * @param {*} val
		 * @param {Boolean} [enumerable]
		 */

		exports.define = function (obj, key, val, enumerable) {
		  Object.defineProperty(obj, key, {
		    value: val,
		    enumerable: !!enumerable,
		    writable: true,
		    configurable: true
		  })
		}

		/**
		 * Debounce a function so it only gets called after the
		 * input stops arriving after the given wait period.
		 *
		 * @param {Function} func
		 * @param {Number} wait
		 * @return {Function} - the debounced function
		 */

		exports.debounce = function (func, wait) {
		  var timeout, args, context, timestamp, result
		  var later = function () {
		    var last = Date.now() - timestamp
		    if (last < wait && last >= 0) {
		      timeout = setTimeout(later, wait - last)
		    } else {
		      timeout = null
		      result = func.apply(context, args)
		      if (!timeout) context = args = null
		    }
		  }
		  return function () {
		    context = this
		    args = arguments
		    timestamp = Date.now()
		    if (!timeout) {
		      timeout = setTimeout(later, wait)
		    }
		    return result
		  }
		}

		/**
		 * Manual indexOf because it's slightly faster than
		 * native.
		 *
		 * @param {Array} arr
		 * @param {*} obj
		 */

		exports.indexOf = function (arr, obj) {
		  for (var i = 0, l = arr.length; i < l; i++) {
		    if (arr[i] === obj) return i
		  }
		  return -1
		}

		/**
		 * Make a cancellable version of an async callback.
		 *
		 * @param {Function} fn
		 * @return {Function}
		 */

		exports.cancellable = function (fn) {
		  var cb = function () {
		    if (!cb.cancelled) {
		      return fn.apply(this, arguments)
		    }
		  }
		  cb.cancel = function () {
		    cb.cancelled = true
		  }
		  return cb
		}


	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		// can we use __proto__?
		exports.hasProto = '__proto__' in {}

		// Browser environment sniffing
		var inBrowser = exports.inBrowser =
		  typeof window !== 'undefined' &&
		  Object.prototype.toString.call(window) !== '[object Object]'

		exports.isIE9 =
		  inBrowser &&
		  navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0

		exports.isAndroid =
		  inBrowser &&
		  navigator.userAgent.toLowerCase().indexOf('android') > 0

		// Transition property/event sniffing
		if (inBrowser && !exports.isIE9) {
		  var isWebkitTrans =
		    window.ontransitionend === undefined &&
		    window.onwebkittransitionend !== undefined
		  var isWebkitAnim =
		    window.onanimationend === undefined &&
		    window.onwebkitanimationend !== undefined
		  exports.transitionProp = isWebkitTrans
		    ? 'WebkitTransition'
		    : 'transition'
		  exports.transitionEndEvent = isWebkitTrans
		    ? 'webkitTransitionEnd'
		    : 'transitionend'
		  exports.animationProp = isWebkitAnim
		    ? 'WebkitAnimation'
		    : 'animation'
		  exports.animationEndEvent = isWebkitAnim
		    ? 'webkitAnimationEnd'
		    : 'animationend'
		}

		/**
		 * Defer a task to execute it asynchronously. Ideally this
		 * should be executed as a microtask, so we leverage
		 * MutationObserver if it's available, and fallback to
		 * setTimeout(0).
		 *
		 * @param {Function} cb
		 * @param {Object} ctx
		 */

		exports.nextTick = (function () {
		  var callbacks = []
		  var pending = false
		  var timerFunc
		  function handle () {
		    pending = false
		    var copies = callbacks.slice(0)
		    callbacks = []
		    for (var i = 0; i < copies.length; i++) {
		      copies[i]()
		    }
		  }
		  /* istanbul ignore if */
		  if (typeof MutationObserver !== 'undefined') {
		    var counter = 1
		    var observer = new MutationObserver(handle)
		    var textNode = document.createTextNode(counter)
		    observer.observe(textNode, {
		      characterData: true
		    })
		    timerFunc = function () {
		      counter = (counter + 1) % 2
		      textNode.data = counter
		    }
		  } else {
		    timerFunc = setTimeout
		  }
		  return function (cb, ctx) {
		    var func = ctx
		      ? function () { cb.call(ctx) }
		      : cb
		    callbacks.push(func)
		    if (pending) return
		    pending = true
		    timerFunc(handle, 0)
		  }
		})()


	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(3)

		/**
		 * Query an element selector if it's not an element already.
		 *
		 * @param {String|Element} el
		 * @return {Element}
		 */

		exports.query = function (el) {
		  if (typeof el === 'string') {
		    var selector = el
		    el = document.querySelector(el)
		    if (!el) {
		      _.warn('Cannot find element: ' + selector)
		    }
		  }
		  return el
		}

		/**
		 * Check if a node is in the document.
		 * Note: document.documentElement.contains should work here
		 * but always returns false for comment nodes in phantomjs,
		 * making unit tests difficult. This is fixed byy doing the
		 * contains() check on the node's parentNode instead of
		 * the node itself.
		 *
		 * @param {Node} node
		 * @return {Boolean}
		 */

		exports.inDoc = function (node) {
		  var doc = document.documentElement
		  var parent = node && node.parentNode
		  return doc === node ||
		    doc === parent ||
		    !!(parent && parent.nodeType === 1 && (doc.contains(parent)))
		}

		/**
		 * Extract an attribute from a node.
		 *
		 * @param {Node} node
		 * @param {String} attr
		 */

		exports.attr = function (node, attr) {
		  attr = config.prefix + attr
		  var val = node.getAttribute(attr)
		  if (val !== null) {
		    node.removeAttribute(attr)
		  }
		  return val
		}

		/**
		 * Insert el before target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */

		exports.before = function (el, target) {
		  target.parentNode.insertBefore(el, target)
		}

		/**
		 * Insert el after target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */

		exports.after = function (el, target) {
		  if (target.nextSibling) {
		    exports.before(el, target.nextSibling)
		  } else {
		    target.parentNode.appendChild(el)
		  }
		}

		/**
		 * Remove el from DOM
		 *
		 * @param {Element} el
		 */

		exports.remove = function (el) {
		  el.parentNode.removeChild(el)
		}

		/**
		 * Prepend el to target
		 *
		 * @param {Element} el
		 * @param {Element} target
		 */

		exports.prepend = function (el, target) {
		  if (target.firstChild) {
		    exports.before(el, target.firstChild)
		  } else {
		    target.appendChild(el)
		  }
		}

		/**
		 * Replace target with el
		 *
		 * @param {Element} target
		 * @param {Element} el
		 */

		exports.replace = function (target, el) {
		  var parent = target.parentNode
		  if (parent) {
		    parent.replaceChild(el, target)
		  }
		}

		/**
		 * Add event listener shorthand.
		 *
		 * @param {Element} el
		 * @param {String} event
		 * @param {Function} cb
		 */

		exports.on = function (el, event, cb) {
		  el.addEventListener(event, cb)
		}

		/**
		 * Remove event listener shorthand.
		 *
		 * @param {Element} el
		 * @param {String} event
		 * @param {Function} cb
		 */

		exports.off = function (el, event, cb) {
		  el.removeEventListener(event, cb)
		}

		/**
		 * Add class with compatibility for IE & SVG
		 *
		 * @param {Element} el
		 * @param {Strong} cls
		 */

		exports.addClass = function (el, cls) {
		  if (el.classList) {
		    el.classList.add(cls)
		  } else {
		    var cur = ' ' + (el.getAttribute('class') || '') + ' '
		    if (cur.indexOf(' ' + cls + ' ') < 0) {
		      el.setAttribute('class', (cur + cls).trim())
		    }
		  }
		}

		/**
		 * Remove class with compatibility for IE & SVG
		 *
		 * @param {Element} el
		 * @param {Strong} cls
		 */

		exports.removeClass = function (el, cls) {
		  if (el.classList) {
		    el.classList.remove(cls)
		  } else {
		    var cur = ' ' + (el.getAttribute('class') || '') + ' '
		    var tar = ' ' + cls + ' '
		    while (cur.indexOf(tar) >= 0) {
		      cur = cur.replace(tar, ' ')
		    }
		    el.setAttribute('class', cur.trim())
		  }
		}

		/**
		 * Extract raw content inside an element into a temporary
		 * container div
		 *
		 * @param {Element} el
		 * @param {Boolean} asFragment
		 * @return {Element}
		 */

		exports.extractContent = function (el, asFragment) {
		  var child
		  var rawContent
		  /* istanbul ignore if */
		  if (
		    exports.isTemplate(el) &&
		    el.content instanceof DocumentFragment
		  ) {
		    el = el.content
		  }
		  if (el.hasChildNodes()) {
		    trim(el, el.firstChild)
		    trim(el, el.lastChild)
		    rawContent = asFragment
		      ? document.createDocumentFragment()
		      : document.createElement('div')
		    /* eslint-disable no-cond-assign */
		    while (child = el.firstChild) {
		    /* eslint-enable no-cond-assign */
		      rawContent.appendChild(child)
		    }
		  }
		  return rawContent
		}

		function trim (content, node) {
		  if (node && node.nodeType === 3 && !node.data.trim()) {
		    content.removeChild(node)
		  }
		}

		/**
		 * Check if an element is a template tag.
		 * Note if the template appears inside an SVG its tagName
		 * will be in lowercase.
		 *
		 * @param {Element} el
		 */

		exports.isTemplate = function (el) {
		  return el.tagName &&
		    el.tagName.toLowerCase() === 'template'
		}


	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		var config = __webpack_require__(3)

		/**
		 * Enable debug utilities. The enableDebug() function and
		 * all _.log() & _.warn() calls will be dropped in the
		 * minified production build.
		 */

		enableDebug()

		function enableDebug () {

		  var hasConsole = typeof console !== 'undefined'

		  /**
		   * Log a message.
		   *
		   * @param {String} msg
		   */

		  exports.log = function (msg) {
		    if (hasConsole && config.debug) {
		      console.log('[Vue info]: ' + msg)
		    }
		  }

		  /**
		   * We've got a problem here.
		   *
		   * @param {String} msg
		   */

		  exports.warn = function (msg, e) {
		    if (hasConsole && (!config.silent || config.debug)) {
		      console.warn('[Vue warn]: ' + msg)
		      /* istanbul ignore if */
		      if (config.debug) {
		        console.warn((e || new Error('Warning Stack Trace')).stack)
		      }
		    }
		  }

		  /**
		   * Assert asset exists
		   */

		  exports.assertAsset = function (val, type, id) {
		    /* istanbul ignore if */
		    if (type === 'directive') {
		      if (id === 'with') {
		        exports.warn(
		          'v-with has been deprecated in ^0.12.0. ' +
		          'Use props instead.'
		        )
		        return
		      }
		      if (id === 'events') {
		        exports.warn(
		          'v-events has been deprecated in ^0.12.0. ' +
		          'Pass down methods as callback props instead.'
		        )
		        return
		      }
		    }
		    if (!val) {
		      exports.warn('Failed to resolve ' + type + ': ' + id)
		    }
		  }
		}


	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var extend = _.extend

		/**
		 * Option overwriting strategies are functions that handle
		 * how to merge a parent option value and a child option
		 * value into the final value.
		 *
		 * All strategy functions follow the same signature:
		 *
		 * @param {*} parentVal
		 * @param {*} childVal
		 * @param {Vue} [vm]
		 */

		var strats = Object.create(null)

		/**
		 * Helper that recursively merges two data objects together.
		 */

		function mergeData (to, from) {
		  var key, toVal, fromVal
		  for (key in from) {
		    toVal = to[key]
		    fromVal = from[key]
		    if (!to.hasOwnProperty(key)) {
		      to.$add(key, fromVal)
		    } else if (_.isObject(toVal) && _.isObject(fromVal)) {
		      mergeData(toVal, fromVal)
		    }
		  }
		  return to
		}

		/**
		 * Data
		 */

		strats.data = function (parentVal, childVal, vm) {
		  if (!vm) {
		    // in a Vue.extend merge, both should be functions
		    if (!childVal) {
		      return parentVal
		    }
		    if (typeof childVal !== 'function') {
		      _.warn(
		        'The "data" option should be a function ' +
		        'that returns a per-instance value in component ' +
		        'definitions.'
		      )
		      return parentVal
		    }
		    if (!parentVal) {
		      return childVal
		    }
		    // when parentVal & childVal are both present,
		    // we need to return a function that returns the
		    // merged result of both functions... no need to
		    // check if parentVal is a function here because
		    // it has to be a function to pass previous merges.
		    return function mergedDataFn () {
		      return mergeData(
		        childVal.call(this),
		        parentVal.call(this)
		      )
		    }
		  } else if (parentVal || childVal) {
		    return function mergedInstanceDataFn () {
		      // instance merge
		      var instanceData = typeof childVal === 'function'
		        ? childVal.call(vm)
		        : childVal
		      var defaultData = typeof parentVal === 'function'
		        ? parentVal.call(vm)
		        : undefined
		      if (instanceData) {
		        return mergeData(instanceData, defaultData)
		      } else {
		        return defaultData
		      }
		    }
		  }
		}

		/**
		 * El
		 */

		strats.el = function (parentVal, childVal, vm) {
		  if (!vm && childVal && typeof childVal !== 'function') {
		    _.warn(
		      'The "el" option should be a function ' +
		      'that returns a per-instance value in component ' +
		      'definitions.'
		    )
		    return
		  }
		  var ret = childVal || parentVal
		  // invoke the element factory if this is instance merge
		  return vm && typeof ret === 'function'
		    ? ret.call(vm)
		    : ret
		}

		/**
		 * Hooks and param attributes are merged as arrays.
		 */

		strats.created =
		strats.ready =
		strats.attached =
		strats.detached =
		strats.beforeCompile =
		strats.compiled =
		strats.beforeDestroy =
		strats.destroyed =
		strats.props = function (parentVal, childVal) {
		  return childVal
		    ? parentVal
		      ? parentVal.concat(childVal)
		      : _.isArray(childVal)
		        ? childVal
		        : [childVal]
		    : parentVal
		}

		/**
		 * 0.11 deprecation warning
		 */

		strats.paramAttributes = function () {
		  /* istanbul ignore next */
		  _.warn(
		    '"paramAttributes" option has been deprecated in 0.12. ' +
		    'Use "props" instead.'
		  )
		}

		/**
		 * Assets
		 *
		 * When a vm is present (instance creation), we need to do
		 * a three-way merge between constructor options, instance
		 * options and parent options.
		 */

		strats.directives =
		strats.filters =
		strats.transitions =
		strats.components =
		strats.partials =
		strats.elementDirectives = function (parentVal, childVal) {
		  var res = Object.create(parentVal)
		  return childVal
		    ? extend(res, childVal)
		    : res
		}

		/**
		 * Events & Watchers.
		 *
		 * Events & watchers hashes should not overwrite one
		 * another, so we merge them as arrays.
		 */

		strats.watch =
		strats.events = function (parentVal, childVal) {
		  if (!childVal) return parentVal
		  if (!parentVal) return childVal
		  var ret = {}
		  extend(ret, parentVal)
		  for (var key in childVal) {
		    var parent = ret[key]
		    var child = childVal[key]
		    if (parent && !_.isArray(parent)) {
		      parent = [parent]
		    }
		    ret[key] = parent
		      ? parent.concat(child)
		      : [child]
		  }
		  return ret
		}

		/**
		 * Other object hashes.
		 */

		strats.methods =
		strats.computed = function (parentVal, childVal) {
		  if (!childVal) return parentVal
		  if (!parentVal) return childVal
		  var ret = Object.create(parentVal)
		  extend(ret, childVal)
		  return ret
		}

		/**
		 * Default strategy.
		 */

		var defaultStrat = function (parentVal, childVal) {
		  return childVal === undefined
		    ? parentVal
		    : childVal
		}

		/**
		 * Make sure component options get converted to actual
		 * constructors.
		 *
		 * @param {Object} components
		 */

		function guardComponents (components) {
		  if (components) {
		    var def
		    for (var key in components) {
		      if (_.commonTagRE.test(key)) {
		        _.warn(
		          'Do not use built-in HTML elements as component ' +
		          'name: ' + key
		        )
		      }
		      def = components[key]
		      if (_.isPlainObject(def)) {
		        def.name = key
		        components[key] = _.Vue.extend(def)
		      }
		    }
		  }
		}

		/**
		 * Ensure all props option syntax are normalized into the
		 * Object-based format.
		 *
		 * @param {Object} options
		 */

		function guardProps (options) {
		  var props = options.props
		  if (_.isPlainObject(props)) {
		    options.props = Object.keys(props).map(function (key) {
		      var val = props[key]
		      if (!_.isPlainObject(val)) {
		        val = { type: val }
		      }
		      val.name = key
		      return val
		    })
		  } else if (_.isArray(props)) {
		    options.props = props.map(function (prop) {
		      return typeof prop === 'string'
		        ? { name: prop }
		        : prop
		    })
		  }
		}

		/**
		 * Merge two option objects into a new one.
		 * Core utility used in both instantiation and inheritance.
		 *
		 * @param {Object} parent
		 * @param {Object} child
		 * @param {Vue} [vm] - if vm is present, indicates this is
		 *                     an instantiation merge.
		 */

		exports.mergeOptions = function merge (parent, child, vm) {
		  guardComponents(child.components)
		  guardProps(child)
		  var options = {}
		  var key
		  if (child.mixins) {
		    for (var i = 0, l = child.mixins.length; i < l; i++) {
		      parent = merge(parent, child.mixins[i], vm)
		    }
		  }
		  for (key in parent) {
		    mergeField(key)
		  }
		  for (key in child) {
		    if (!(parent.hasOwnProperty(key))) {
		      mergeField(key)
		    }
		  }
		  function mergeField (key) {
		    var strat = strats[key] || defaultStrat
		    options[key] = strat(parent[key], child[key], vm, key)
		  }
		  return options
		}

		/**
		 * Resolve an asset.
		 * This function is used because child instances need access
		 * to assets defined in its ancestor chain.
		 *
		 * @param {Object} options
		 * @param {String} type
		 * @param {String} id
		 * @return {Object|Function}
		 */

		exports.resolveAsset = function resolve (options, type, id) {
		  var asset = options[type][id]
		  while (!asset && options._parent) {
		    options = options._parent.$options
		    asset = options[type][id]
		  }
		  return asset
		}


	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(3)

		/**
		 * Expose useful internals
		 */

		exports.util = _
		exports.nextTick = _.nextTick
		exports.config = __webpack_require__(3)
		exports.compiler = __webpack_require__(10)

		exports.parsers = {
		  path: __webpack_require__(23),
		  text: __webpack_require__(14),
		  template: __webpack_require__(12),
		  directive: __webpack_require__(15),
		  expression: __webpack_require__(22)
		}

		/**
		 * Each instance constructor, including Vue, has a unique
		 * cid. This enables us to create wrapped "child
		 * constructors" for prototypal inheritance and cache them.
		 */

		exports.cid = 0
		var cid = 1

		/**
		 * Class inehritance
		 *
		 * @param {Object} extendOptions
		 */

		exports.extend = function (extendOptions) {
		  extendOptions = extendOptions || {}
		  var Super = this
		  var Sub = createClass(
		    extendOptions.name ||
		    Super.options.name ||
		    'VueComponent'
		  )
		  Sub.prototype = Object.create(Super.prototype)
		  Sub.prototype.constructor = Sub
		  Sub.cid = cid++
		  Sub.options = _.mergeOptions(
		    Super.options,
		    extendOptions
		  )
		  Sub['super'] = Super
		  // allow further extension
		  Sub.extend = Super.extend
		  // create asset registers, so extended classes
		  // can have their private assets too.
		  config._assetTypes.forEach(function (type) {
		    Sub[type] = Super[type]
		  })
		  return Sub
		}

		/**
		 * A function that returns a sub-class constructor with the
		 * given name. This gives us much nicer output when
		 * logging instances in the console.
		 *
		 * @param {String} name
		 * @return {Function}
		 */

		function createClass (name) {
		  return new Function(
		    'return function ' + _.classify(name) +
		    ' (options) { this._init(options) }'
		  )()
		}

		/**
		 * Plugin system
		 *
		 * @param {Object} plugin
		 */

		exports.use = function (plugin) {
		  // additional parameters
		  var args = _.toArray(arguments, 1)
		  args.unshift(this)
		  if (typeof plugin.install === 'function') {
		    plugin.install.apply(plugin, args)
		  } else {
		    plugin.apply(null, args)
		  }
		  return this
		}

		/**
		 * Create asset registration methods with the following
		 * signature:
		 *
		 * @param {String} id
		 * @param {*} definition
		 */

		config._assetTypes.forEach(function (type) {
		  exports[type] = function (id, definition) {
		    if (!definition) {
		      return this.options[type + 's'][id]
		    } else {
		      if (
		        type === 'component' &&
		        _.isPlainObject(definition)
		      ) {
		        definition.name = id
		        definition = _.Vue.extend(definition)
		      }
		      this.options[type + 's'][id] = definition
		    }
		  }
		})


	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		_.extend(exports, __webpack_require__(11))
		_.extend(exports, __webpack_require__(26))


	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(3)
		var textParser = __webpack_require__(14)
		var dirParser = __webpack_require__(15)
		var templateParser = __webpack_require__(12)
		var resolveAsset = _.resolveAsset
		var propBindingModes = config._propBindingModes

		// internal directives
		var propDef = __webpack_require__(16)
		var componentDef = __webpack_require__(25)

		// terminal directives
		var terminalDirectives = [
		  'repeat',
		  'if'
		]

		/**
		 * Compile a template and return a reusable composite link
		 * function, which recursively contains more link functions
		 * inside. This top level compile function would normally
		 * be called on instance root nodes, but can also be used
		 * for partial compilation if the partial argument is true.
		 *
		 * The returned composite link function, when called, will
		 * return an unlink function that tearsdown all directives
		 * created during the linking phase.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Object} options
		 * @param {Boolean} partial
		 * @param {Vue} [host] - host vm of transcluded content
		 * @return {Function}
		 */

		exports.compile = function (el, options, partial, host) {
		  // link function for the node itself.
		  var nodeLinkFn = partial || !options._asComponent
		    ? compileNode(el, options)
		    : null
		  // link function for the childNodes
		  var childLinkFn =
		    !(nodeLinkFn && nodeLinkFn.terminal) &&
		    el.tagName !== 'SCRIPT' &&
		    el.hasChildNodes()
		      ? compileNodeList(el.childNodes, options)
		      : null

		  /**
		   * A composite linker function to be called on a already
		   * compiled piece of DOM, which instantiates all directive
		   * instances.
		   *
		   * @param {Vue} vm
		   * @param {Element|DocumentFragment} el
		   * @return {Function|undefined}
		   */

		  return function compositeLinkFn (vm, el) {
		    // cache childNodes before linking parent, fix #657
		    var childNodes = _.toArray(el.childNodes)
		    // link
		    var dirs = linkAndCapture(function () {
		      if (nodeLinkFn) nodeLinkFn(vm, el, host)
		      if (childLinkFn) childLinkFn(vm, childNodes, host)
		    }, vm)
		    return makeUnlinkFn(vm, dirs)
		  }
		}

		/**
		 * Apply a linker to a vm/element pair and capture the
		 * directives created during the process.
		 *
		 * @param {Function} linker
		 * @param {Vue} vm
		 */

		function linkAndCapture (linker, vm) {
		  var originalDirCount = vm._directives.length
		  linker()
		  return vm._directives.slice(originalDirCount)
		}

		/**
		 * Linker functions return an unlink function that
		 * tearsdown all directives instances generated during
		 * the process.
		 *
		 * We create unlink functions with only the necessary
		 * information to avoid retaining additional closures.
		 *
		 * @param {Vue} vm
		 * @param {Array} dirs
		 * @param {Vue} [context]
		 * @param {Array} [contextDirs]
		 * @return {Function}
		 */

		function makeUnlinkFn (vm, dirs, context, contextDirs) {
		  return function unlink (destroying) {
		    teardownDirs(vm, dirs, destroying)
		    if (context && contextDirs) {
		      teardownDirs(context, contextDirs)
		    }
		  }
		}

		/**
		 * Teardown partial linked directives.
		 *
		 * @param {Vue} vm
		 * @param {Array} dirs
		 * @param {Boolean} destroying
		 */

		function teardownDirs (vm, dirs, destroying) {
		  var i = dirs.length
		  while (i--) {
		    dirs[i]._teardown()
		    if (!destroying) {
		      vm._directives.$remove(dirs[i])
		    }
		  }
		}

		/**
		 * Compile link props on an instance.
		 *
		 * @param {Vue} vm
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function}
		 */

		exports.compileAndLinkProps = function (vm, el, props) {
		  var propsLinkFn = compileProps(el, props)
		  var propDirs = linkAndCapture(function () {
		    propsLinkFn(vm, null)
		  }, vm)
		  return makeUnlinkFn(vm, propDirs)
		}

		/**
		 * Compile the root element of an instance.
		 *
		 * 1. attrs on context container (context scope)
		 * 2. attrs on the component template root node, if
		 *    replace:true (child scope)
		 *
		 * If this is a block instance, we only need to compile 1.
		 *
		 * This function does compile and link at the same time,
		 * since root linkers can not be reused. It returns the
		 * unlink function for potential context directives on the
		 * container.
		 *
		 * @param {Vue} vm
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function}
		 */

		exports.compileAndLinkRoot = function (vm, el, options) {
		  var containerAttrs = options._containerAttrs
		  var replacerAttrs = options._replacerAttrs
		  var contextLinkFn, replacerLinkFn

		  // only need to compile other attributes for
		  // non-block instances
		  if (el.nodeType !== 11) {
		    // for components, container and replacer need to be
		    // compiled separately and linked in different scopes.
		    if (options._asComponent) {
		      // 2. container attributes
		      if (containerAttrs) {
		        contextLinkFn = compileDirectives(containerAttrs, options)
		      }
		      if (replacerAttrs) {
		        // 3. replacer attributes
		        replacerLinkFn = compileDirectives(replacerAttrs, options)
		      }
		    } else {
		      // non-component, just compile as a normal element.
		      replacerLinkFn = compileDirectives(el, options)
		    }
		  }

		  // link context scope dirs
		  var context = vm._context
		  var contextDirs
		  if (context && contextLinkFn) {
		    contextDirs = linkAndCapture(function () {
		      contextLinkFn(context, el)
		    }, context)
		  }

		  // link self
		  var selfDirs = linkAndCapture(function () {
		    if (replacerLinkFn) replacerLinkFn(vm, el)
		  }, vm)

		  // return the unlink function that tearsdown context
		  // container directives.
		  return makeUnlinkFn(vm, selfDirs, context, contextDirs)
		}

		/**
		 * Compile a node and return a nodeLinkFn based on the
		 * node type.
		 *
		 * @param {Node} node
		 * @param {Object} options
		 * @return {Function|null}
		 */

		function compileNode (node, options) {
		  var type = node.nodeType
		  if (type === 1 && node.tagName !== 'SCRIPT') {
		    return compileElement(node, options)
		  } else if (type === 3 && config.interpolate && node.data.trim()) {
		    return compileTextNode(node, options)
		  } else {
		    return null
		  }
		}

		/**
		 * Compile an element and return a nodeLinkFn.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function|null}
		 */

		function compileElement (el, options) {
		  var linkFn
		  var hasAttrs = el.hasAttributes()
		  // check terminal directives (repeat & if)
		  if (hasAttrs) {
		    linkFn = checkTerminalDirectives(el, options)
		  }
		  // check element directives
		  if (!linkFn) {
		    linkFn = checkElementDirectives(el, options)
		  }
		  // check component
		  if (!linkFn) {
		    linkFn = checkComponent(el, options, hasAttrs)
		  }
		  // normal directives
		  if (!linkFn && hasAttrs) {
		    linkFn = compileDirectives(el, options)
		  }
		  // if the element is a textarea, we need to interpolate
		  // its content on initial render.
		  if (el.tagName === 'TEXTAREA') {
		    var realLinkFn = linkFn
		    linkFn = function (vm, el) {
		      el.value = vm.$interpolate(el.value)
		      if (realLinkFn) realLinkFn(vm, el)
		    }
		    linkFn.terminal = true
		  }
		  return linkFn
		}

		/**
		 * Compile a textNode and return a nodeLinkFn.
		 *
		 * @param {TextNode} node
		 * @param {Object} options
		 * @return {Function|null} textNodeLinkFn
		 */

		function compileTextNode (node, options) {
		  var tokens = textParser.parse(node.data)
		  if (!tokens) {
		    return null
		  }
		  var frag = document.createDocumentFragment()
		  var el, token
		  for (var i = 0, l = tokens.length; i < l; i++) {
		    token = tokens[i]
		    el = token.tag
		      ? processTextToken(token, options)
		      : document.createTextNode(token.value)
		    frag.appendChild(el)
		  }
		  return makeTextNodeLinkFn(tokens, frag, options)
		}

		/**
		 * Process a single text token.
		 *
		 * @param {Object} token
		 * @param {Object} options
		 * @return {Node}
		 */

		function processTextToken (token, options) {
		  var el
		  if (token.oneTime) {
		    el = document.createTextNode(token.value)
		  } else {
		    if (token.html) {
		      el = document.createComment('v-html')
		      setTokenType('html')
		    } else {
		      // IE will clean up empty textNodes during
		      // frag.cloneNode(true), so we have to give it
		      // something here...
		      el = document.createTextNode(' ')
		      setTokenType('text')
		    }
		  }
		  function setTokenType (type) {
		    token.type = type
		    token.def = resolveAsset(options, 'directives', type)
		    token.descriptor = dirParser.parse(token.value)[0]
		  }
		  return el
		}

		/**
		 * Build a function that processes a textNode.
		 *
		 * @param {Array<Object>} tokens
		 * @param {DocumentFragment} frag
		 */

		function makeTextNodeLinkFn (tokens, frag) {
		  return function textNodeLinkFn (vm, el) {
		    var fragClone = frag.cloneNode(true)
		    var childNodes = _.toArray(fragClone.childNodes)
		    var token, value, node
		    for (var i = 0, l = tokens.length; i < l; i++) {
		      token = tokens[i]
		      value = token.value
		      if (token.tag) {
		        node = childNodes[i]
		        if (token.oneTime) {
		          value = vm.$eval(value)
		          if (token.html) {
		            _.replace(node, templateParser.parse(value, true))
		          } else {
		            node.data = value
		          }
		        } else {
		          vm._bindDir(token.type, node,
		                      token.descriptor, token.def)
		        }
		      }
		    }
		    _.replace(el, fragClone)
		  }
		}

		/**
		 * Compile a node list and return a childLinkFn.
		 *
		 * @param {NodeList} nodeList
		 * @param {Object} options
		 * @return {Function|undefined}
		 */

		function compileNodeList (nodeList, options) {
		  var linkFns = []
		  var nodeLinkFn, childLinkFn, node
		  for (var i = 0, l = nodeList.length; i < l; i++) {
		    node = nodeList[i]
		    nodeLinkFn = compileNode(node, options)
		    childLinkFn =
		      !(nodeLinkFn && nodeLinkFn.terminal) &&
		      node.tagName !== 'SCRIPT' &&
		      node.hasChildNodes()
		        ? compileNodeList(node.childNodes, options)
		        : null
		    linkFns.push(nodeLinkFn, childLinkFn)
		  }
		  return linkFns.length
		    ? makeChildLinkFn(linkFns)
		    : null
		}

		/**
		 * Make a child link function for a node's childNodes.
		 *
		 * @param {Array<Function>} linkFns
		 * @return {Function} childLinkFn
		 */

		function makeChildLinkFn (linkFns) {
		  return function childLinkFn (vm, nodes, host) {
		    var node, nodeLinkFn, childrenLinkFn
		    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
		      node = nodes[n]
		      nodeLinkFn = linkFns[i++]
		      childrenLinkFn = linkFns[i++]
		      // cache childNodes before linking parent, fix #657
		      var childNodes = _.toArray(node.childNodes)
		      if (nodeLinkFn) {
		        nodeLinkFn(vm, node, host)
		      }
		      if (childrenLinkFn) {
		        childrenLinkFn(vm, childNodes, host)
		      }
		    }
		  }
		}

		/**
		 * Compile param attributes on a root element and return
		 * a props link function.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Array} propOptions
		 * @return {Function} propsLinkFn
		 */

		var dataAttrRE = /^data-/
		var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/
		var literalValueRE = /^(true|false)$|^\d.*/
		var identRE = __webpack_require__(23).identRE

		function compileProps (el, propOptions) {
		  var props = []
		  var i = propOptions.length
		  var options, name, value, path, prop, literal, single
		  while (i--) {
		    options = propOptions[i]
		    name = options.name
		    // props could contain dashes, which will be
		    // interpreted as minus calculations by the parser
		    // so we need to camelize the path here
		    path = _.camelize(name.replace(dataAttrRE, ''))
		    if (/[A-Z]/.test(name)) {
		      _.warn(
		        'You seem to be using camelCase for a component prop, ' +
		        'but HTML doesn\'t differentiate between upper and ' +
		        'lower case. You should use hyphen-delimited ' +
		        'attribute names. For more info see ' +
		        'http://vuejs.org/api/options.html#props'
		      )
		    }
		    if (!identRE.test(path)) {
		      _.warn(
		        'Invalid prop key: "' + name + '". Prop keys ' +
		        'must be valid identifiers.'
		      )
		    }
		    value = el.getAttribute(name)
		    // create a prop descriptor
		    prop = {
		      name: name,
		      raw: value,
		      path: path,
		      options: options,
		      mode: propBindingModes.ONE_WAY
		    }
		    if (value !== null) {
		      // important so that this doesn't get compiled
		      // again as a normal attribute binding
		      el.removeAttribute(name)
		      var tokens = textParser.parse(value)
		      if (tokens) {
		        if (el && el.nodeType === 1) {
		          el.removeAttribute(name)
		        }
		        prop.dynamic = true
		        prop.parentPath = textParser.tokensToExp(tokens)
		        // check prop binding type.
		        single = tokens.length === 1
		        literal = literalValueRE.test(prop.parentPath)
		        // one time: {{* prop}}
		        if (literal || (single && tokens[0].oneTime)) {
		          prop.mode = propBindingModes.ONE_TIME
		        } else if (
		          !literal &&
		          (single && tokens[0].twoWay)
		        ) {
		          if (settablePathRE.test(prop.parentPath)) {
		            prop.mode = propBindingModes.TWO_WAY
		          } else {
		            _.warn(
		              'Cannot bind two-way prop with non-settable ' +
		              'parent path: ' + prop.parentPath
		            )
		          }
		        }
		      }
		    } else if (options && options.required) {
		      _.warn('Missing required prop: ' + name)
		    }
		    props.push(prop)
		  }
		  return makePropsLinkFn(props)
		}

		/**
		 * Build a function that applies props to a vm.
		 *
		 * @param {Array} props
		 * @return {Function} propsLinkFn
		 */

		function makePropsLinkFn (props) {
		  return function propsLinkFn (vm, el) {
		    var i = props.length
		    var prop, path, options, value
		    while (i--) {
		      prop = props[i]
		      path = prop.path
		      options = prop.options
		      if (prop.raw === null) {
		        // initialize absent prop
		        vm._data[path] = options.type === Boolean
		          ? false
		          : options.hasOwnProperty('default')
		            ? options.default
		            : undefined
		      } else if (prop.dynamic) {
		        // dynamic prop
		        if (vm._context) {
		          if (prop.mode === propBindingModes.ONE_TIME) {
		            // one time binding
		            value = vm._context.$get(prop.parentPath)
		            if (_.assertProp(prop, value)) {
		              vm[path] = vm._data[path] = value
		            }
		          } else {
		            // dynamic binding
		            vm._bindDir('prop', el, prop, propDef)
		          }
		        } else {
		          _.warn(
		            'Cannot bind dynamic prop on a root instance' +
		            ' with no parent: ' + prop.name + '="' +
		            prop.raw + '"'
		          )
		        }
		      } else {
		        // literal, cast it and just set once
		        value = options.type === Boolean && prop.raw === ''
		          ? true
		          : _.toBoolean(_.toNumber(prop.raw))
		        if (_.assertProp(prop, value)) {
		          vm[path] = vm._data[path] = value
		        }
		      }
		    }
		  }
		}

		/**
		 * Check for element directives (custom elements that should
		 * be resovled as terminal directives).
		 *
		 * @param {Element} el
		 * @param {Object} options
		 */

		function checkElementDirectives (el, options) {
		  var tag = el.tagName.toLowerCase()
		  if (_.commonTagRE.test(tag)) return
		  var def = resolveAsset(options, 'elementDirectives', tag)
		  if (def) {
		    return makeTerminalNodeLinkFn(el, tag, '', options, def)
		  }
		}

		/**
		 * Check if an element is a component. If yes, return
		 * a component link function.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @param {Boolean} hasAttrs
		 * @return {Function|undefined}
		 */

		function checkComponent (el, options, hasAttrs) {
		  var componentId = _.checkComponent(el, options, hasAttrs)
		  if (componentId) {
		    var componentLinkFn = function (vm, el, host) {
		      vm._bindDir('component', el, {
		        expression: componentId
		      }, componentDef, host)
		    }
		    componentLinkFn.terminal = true
		    return componentLinkFn
		  }
		}

		/**
		 * Check an element for terminal directives in fixed order.
		 * If it finds one, return a terminal link function.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Function} terminalLinkFn
		 */

		function checkTerminalDirectives (el, options) {
		  if (_.attr(el, 'pre') !== null) {
		    return skip
		  }
		  var value, dirName
		  for (var i = 0, l = terminalDirectives.length; i < l; i++) {
		    dirName = terminalDirectives[i]
		    if ((value = _.attr(el, dirName)) !== null) {
		      return makeTerminalNodeLinkFn(el, dirName, value, options)
		    }
		  }
		}

		function skip () {}
		skip.terminal = true

		/**
		 * Build a node link function for a terminal directive.
		 * A terminal link function terminates the current
		 * compilation recursion and handles compilation of the
		 * subtree in the directive.
		 *
		 * @param {Element} el
		 * @param {String} dirName
		 * @param {String} value
		 * @param {Object} options
		 * @param {Object} [def]
		 * @return {Function} terminalLinkFn
		 */

		function makeTerminalNodeLinkFn (el, dirName, value, options, def) {
		  var descriptor = dirParser.parse(value)[0]
		  // no need to call resolveAsset since terminal directives
		  // are always internal
		  def = def || options.directives[dirName]
		  var fn = function terminalNodeLinkFn (vm, el, host) {
		    vm._bindDir(dirName, el, descriptor, def, host)
		  }
		  fn.terminal = true
		  return fn
		}

		/**
		 * Compile the directives on an element and return a linker.
		 *
		 * @param {Element|Object} elOrAttrs
		 *        - could be an object of already-extracted
		 *          container attributes.
		 * @param {Object} options
		 * @return {Function}
		 */

		function compileDirectives (elOrAttrs, options) {
		  var attrs = _.isPlainObject(elOrAttrs)
		    ? mapToList(elOrAttrs)
		    : elOrAttrs.attributes
		  var i = attrs.length
		  var dirs = []
		  var attr, name, value, dir, dirName, dirDef
		  while (i--) {
		    attr = attrs[i]
		    name = attr.name
		    value = attr.value
		    if (name.indexOf(config.prefix) === 0) {
		      dirName = name.slice(config.prefix.length)
		      dirDef = resolveAsset(options, 'directives', dirName)
		      _.assertAsset(dirDef, 'directive', dirName)
		      if (dirDef) {
		        dirs.push({
		          name: dirName,
		          descriptors: dirParser.parse(value),
		          def: dirDef
		        })
		      }
		    } else if (config.interpolate) {
		      dir = collectAttrDirective(name, value, options)
		      if (dir) {
		        dirs.push(dir)
		      }
		    }
		  }
		  // sort by priority, LOW to HIGH
		  if (dirs.length) {
		    dirs.sort(directiveComparator)
		    return makeNodeLinkFn(dirs)
		  }
		}

		/**
		 * Convert a map (Object) of attributes to an Array.
		 *
		 * @param {Object} map
		 * @return {Array}
		 */

		function mapToList (map) {
		  var list = []
		  for (var key in map) {
		    list.push({
		      name: key,
		      value: map[key]
		    })
		  }
		  return list
		}

		/**
		 * Build a link function for all directives on a single node.
		 *
		 * @param {Array} directives
		 * @return {Function} directivesLinkFn
		 */

		function makeNodeLinkFn (directives) {
		  return function nodeLinkFn (vm, el, host) {
		    // reverse apply because it's sorted low to high
		    var i = directives.length
		    var dir, j, k
		    while (i--) {
		      dir = directives[i]
		      if (dir._link) {
		        // custom link fn
		        dir._link(vm, el)
		      } else {
		        k = dir.descriptors.length
		        for (j = 0; j < k; j++) {
		          vm._bindDir(dir.name, el,
		            dir.descriptors[j], dir.def, host)
		        }
		      }
		    }
		  }
		}

		/**
		 * Check an attribute for potential dynamic bindings,
		 * and return a directive object.
		 *
		 * @param {String} name
		 * @param {String} value
		 * @param {Object} options
		 * @return {Object}
		 */

		function collectAttrDirective (name, value, options) {
		  var tokens = textParser.parse(value)
		  if (tokens) {
		    var def = options.directives.attr
		    var i = tokens.length
		    var allOneTime = true
		    while (i--) {
		      var token = tokens[i]
		      if (token.tag && !token.oneTime) {
		        allOneTime = false
		      }
		    }
		    return {
		      def: def,
		      _link: allOneTime
		        ? function (vm, el) {
		            el.setAttribute(name, vm.$interpolate(value))
		          }
		        : function (vm, el) {
		            var value = textParser.tokensToExp(tokens, vm)
		            var desc = dirParser.parse(name + ':' + value)[0]
		            vm._bindDir('attr', el, desc, def)
		          }
		    }
		  }
		}

		/**
		 * Directive priority sort comparator
		 *
		 * @param {Object} a
		 * @param {Object} b
		 */

		function directiveComparator (a, b) {
		  a = a.def.priority || 0
		  b = b.def.priority || 0
		  return a > b ? 1 : -1
		}


	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Cache = __webpack_require__(13)
		var templateCache = new Cache(1000)
		var idSelectorCache = new Cache(1000)

		var map = {
		  _default: [0, '', ''],
		  legend: [1, '<fieldset>', '</fieldset>'],
		  tr: [2, '<table><tbody>', '</tbody></table>'],
		  col: [
		    2,
		    '<table><tbody></tbody><colgroup>',
		    '</colgroup></table>'
		  ]
		}

		map.td =
		map.th = [
		  3,
		  '<table><tbody><tr>',
		  '</tr></tbody></table>'
		]

		map.option =
		map.optgroup = [
		  1,
		  '<select multiple="multiple">',
		  '</select>'
		]

		map.thead =
		map.tbody =
		map.colgroup =
		map.caption =
		map.tfoot = [1, '<table>', '</table>']

		map.g =
		map.defs =
		map.symbol =
		map.use =
		map.image =
		map.text =
		map.circle =
		map.ellipse =
		map.line =
		map.path =
		map.polygon =
		map.polyline =
		map.rect = [
		  1,
		  '<svg ' +
		    'xmlns="http://www.w3.org/2000/svg" ' +
		    'xmlns:xlink="http://www.w3.org/1999/xlink" ' +
		    'xmlns:ev="http://www.w3.org/2001/xml-events"' +
		    'version="1.1">',
		  '</svg>'
		]

		var tagRE = /<([\w:]+)/
		var entityRE = /&\w+;/

		/**
		 * Convert a string template to a DocumentFragment.
		 * Determines correct wrapping by tag types. Wrapping
		 * strategy found in jQuery & component/domify.
		 *
		 * @param {String} templateString
		 * @return {DocumentFragment}
		 */

		function stringToFragment (templateString) {
		  // try a cache hit first
		  var hit = templateCache.get(templateString)
		  if (hit) {
		    return hit
		  }

		  var frag = document.createDocumentFragment()
		  var tagMatch = templateString.match(tagRE)
		  var entityMatch = entityRE.test(templateString)

		  if (!tagMatch && !entityMatch) {
		    // text only, return a single text node.
		    frag.appendChild(
		      document.createTextNode(templateString)
		    )
		  } else {

		    var tag = tagMatch && tagMatch[1]
		    var wrap = map[tag] || map._default
		    var depth = wrap[0]
		    var prefix = wrap[1]
		    var suffix = wrap[2]
		    var node = document.createElement('div')

		    node.innerHTML = prefix + templateString.trim() + suffix
		    while (depth--) {
		      node = node.lastChild
		    }

		    var child
		    /* eslint-disable no-cond-assign */
		    while (child = node.firstChild) {
		    /* eslint-enable no-cond-assign */
		      frag.appendChild(child)
		    }
		  }

		  templateCache.put(templateString, frag)
		  return frag
		}

		/**
		 * Convert a template node to a DocumentFragment.
		 *
		 * @param {Node} node
		 * @return {DocumentFragment}
		 */

		function nodeToFragment (node) {
		  // if its a template tag and the browser supports it,
		  // its content is already a document fragment.
		  if (
		    _.isTemplate(node) &&
		    node.content instanceof DocumentFragment
		  ) {
		    return node.content
		  }
		  // script template
		  if (node.tagName === 'SCRIPT') {
		    return stringToFragment(node.textContent)
		  }
		  // normal node, clone it to avoid mutating the original
		  var clone = exports.clone(node)
		  var frag = document.createDocumentFragment()
		  var child
		  /* eslint-disable no-cond-assign */
		  while (child = clone.firstChild) {
		  /* eslint-enable no-cond-assign */
		    frag.appendChild(child)
		  }
		  return frag
		}

		// Test for the presence of the Safari template cloning bug
		// https://bugs.webkit.org/show_bug.cgi?id=137755
		var hasBrokenTemplate = _.inBrowser
		  ? (function () {
		      var a = document.createElement('div')
		      a.innerHTML = '<template>1</template>'
		      return !a.cloneNode(true).firstChild.innerHTML
		    })()
		  : false

		// Test for IE10/11 textarea placeholder clone bug
		var hasTextareaCloneBug = _.inBrowser
		  ? (function () {
		      var t = document.createElement('textarea')
		      t.placeholder = 't'
		      return t.cloneNode(true).value === 't'
		    })()
		  : false

		/**
		 * 1. Deal with Safari cloning nested <template> bug by
		 *    manually cloning all template instances.
		 * 2. Deal with IE10/11 textarea placeholder bug by setting
		 *    the correct value after cloning.
		 *
		 * @param {Element|DocumentFragment} node
		 * @return {Element|DocumentFragment}
		 */

		exports.clone = function (node) {
		  var res = node.cloneNode(true)
		  var i, original, cloned
		  /* istanbul ignore if */
		  if (hasBrokenTemplate) {
		    original = node.querySelectorAll('template')
		    if (original.length) {
		      cloned = res.querySelectorAll('template')
		      i = cloned.length
		      while (i--) {
		        cloned[i].parentNode.replaceChild(
		          original[i].cloneNode(true),
		          cloned[i]
		        )
		      }
		    }
		  }
		  /* istanbul ignore if */
		  if (hasTextareaCloneBug) {
		    if (node.tagName === 'TEXTAREA') {
		      res.value = node.value
		    } else {
		      original = node.querySelectorAll('textarea')
		      if (original.length) {
		        cloned = res.querySelectorAll('textarea')
		        i = cloned.length
		        while (i--) {
		          cloned[i].value = original[i].value
		        }
		      }
		    }
		  }
		  return res
		}

		/**
		 * Process the template option and normalizes it into a
		 * a DocumentFragment that can be used as a partial or a
		 * instance template.
		 *
		 * @param {*} template
		 *    Possible values include:
		 *    - DocumentFragment object
		 *    - Node object of type Template
		 *    - id selector: '#some-template-id'
		 *    - template string: '<div><span>{{msg}}</span></div>'
		 * @param {Boolean} clone
		 * @param {Boolean} noSelector
		 * @return {DocumentFragment|undefined}
		 */

		exports.parse = function (template, clone, noSelector) {
		  var node, frag

		  // if the template is already a document fragment,
		  // do nothing
		  if (template instanceof DocumentFragment) {
		    return clone
		      ? template.cloneNode(true)
		      : template
		  }

		  if (typeof template === 'string') {
		    // id selector
		    if (!noSelector && template.charAt(0) === '#') {
		      // id selector can be cached too
		      frag = idSelectorCache.get(template)
		      if (!frag) {
		        node = document.getElementById(template.slice(1))
		        if (node) {
		          frag = nodeToFragment(node)
		          // save selector to cache
		          idSelectorCache.put(template, frag)
		        }
		      }
		    } else {
		      // normal string template
		      frag = stringToFragment(template)
		    }
		  } else if (template.nodeType) {
		    // a direct node
		    frag = nodeToFragment(template)
		  }

		  return frag && clone
		    ? exports.clone(frag)
		    : frag
		}


	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		/**
		 * A doubly linked list-based Least Recently Used (LRU)
		 * cache. Will keep most recently used items while
		 * discarding least recently used items when its limit is
		 * reached. This is a bare-bone version of
		 * Rasmus Andersson's js-lru:
		 *
		 *   https://github.com/rsms/js-lru
		 *
		 * @param {Number} limit
		 * @constructor
		 */

		function Cache (limit) {
		  this.size = 0
		  this.limit = limit
		  this.head = this.tail = undefined
		  this._keymap = {}
		}

		var p = Cache.prototype

		/**
		 * Put <value> into the cache associated with <key>.
		 * Returns the entry which was removed to make room for
		 * the new entry. Otherwise undefined is returned.
		 * (i.e. if there was enough room already).
		 *
		 * @param {String} key
		 * @param {*} value
		 * @return {Entry|undefined}
		 */

		p.put = function (key, value) {
		  var entry = {
		    key: key,
		    value: value
		  }
		  this._keymap[key] = entry
		  if (this.tail) {
		    this.tail.newer = entry
		    entry.older = this.tail
		  } else {
		    this.head = entry
		  }
		  this.tail = entry
		  if (this.size === this.limit) {
		    return this.shift()
		  } else {
		    this.size++
		  }
		}

		/**
		 * Purge the least recently used (oldest) entry from the
		 * cache. Returns the removed entry or undefined if the
		 * cache was empty.
		 */

		p.shift = function () {
		  var entry = this.head
		  if (entry) {
		    this.head = this.head.newer
		    this.head.older = undefined
		    entry.newer = entry.older = undefined
		    this._keymap[entry.key] = undefined
		  }
		  return entry
		}

		/**
		 * Get and register recent use of <key>. Returns the value
		 * associated with <key> or undefined if not in cache.
		 *
		 * @param {String} key
		 * @param {Boolean} returnEntry
		 * @return {Entry|*}
		 */

		p.get = function (key, returnEntry) {
		  var entry = this._keymap[key]
		  if (entry === undefined) return
		  if (entry === this.tail) {
		    return returnEntry
		      ? entry
		      : entry.value
		  }
		  // HEAD--------------TAIL
		  //   <.older   .newer>
		  //  <--- add direction --
		  //   A  B  C  <D>  E
		  if (entry.newer) {
		    if (entry === this.head) {
		      this.head = entry.newer
		    }
		    entry.newer.older = entry.older // C <-- E.
		  }
		  if (entry.older) {
		    entry.older.newer = entry.newer // C. --> E
		  }
		  entry.newer = undefined // D --x
		  entry.older = this.tail // D. --> E
		  if (this.tail) {
		    this.tail.newer = entry // E. <-- D
		  }
		  this.tail = entry
		  return returnEntry
		    ? entry
		    : entry.value
		}

		module.exports = Cache


	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		var Cache = __webpack_require__(13)
		var config = __webpack_require__(3)
		var dirParser = __webpack_require__(15)
		var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g
		var cache, tagRE, htmlRE, firstChar, lastChar

		/**
		 * Escape a string so it can be used in a RegExp
		 * constructor.
		 *
		 * @param {String} str
		 */

		function escapeRegex (str) {
		  return str.replace(regexEscapeRE, '\\$&')
		}

		/**
		 * Compile the interpolation tag regex.
		 *
		 * @return {RegExp}
		 */

		function compileRegex () {
		  config._delimitersChanged = false
		  var open = config.delimiters[0]
		  var close = config.delimiters[1]
		  firstChar = open.charAt(0)
		  lastChar = close.charAt(close.length - 1)
		  var firstCharRE = escapeRegex(firstChar)
		  var lastCharRE = escapeRegex(lastChar)
		  var openRE = escapeRegex(open)
		  var closeRE = escapeRegex(close)
		  tagRE = new RegExp(
		    firstCharRE + '?' + openRE +
		    '(.+?)' +
		    closeRE + lastCharRE + '?',
		    'g'
		  )
		  htmlRE = new RegExp(
		    '^' + firstCharRE + openRE +
		    '.*' +
		    closeRE + lastCharRE + '$'
		  )
		  // reset cache
		  cache = new Cache(1000)
		}

		/**
		 * Parse a template text string into an array of tokens.
		 *
		 * @param {String} text
		 * @return {Array<Object> | null}
		 *               - {String} type
		 *               - {String} value
		 *               - {Boolean} [html]
		 *               - {Boolean} [oneTime]
		 */

		exports.parse = function (text) {
		  if (config._delimitersChanged) {
		    compileRegex()
		  }
		  var hit = cache.get(text)
		  if (hit) {
		    return hit
		  }
		  text = text.replace(/\n/g, '')
		  if (!tagRE.test(text)) {
		    return null
		  }
		  var tokens = []
		  var lastIndex = tagRE.lastIndex = 0
		  var match, index, value, first, oneTime, twoWay
		  /* eslint-disable no-cond-assign */
		  while (match = tagRE.exec(text)) {
		  /* eslint-enable no-cond-assign */
		    index = match.index
		    // push text token
		    if (index > lastIndex) {
		      tokens.push({
		        value: text.slice(lastIndex, index)
		      })
		    }
		    // tag token
		    first = match[1].charCodeAt(0)
		    oneTime = first === 42 // *
		    twoWay = first === 64  // @
		    value = oneTime || twoWay
		      ? match[1].slice(1)
		      : match[1]
		    tokens.push({
		      tag: true,
		      value: value.trim(),
		      html: htmlRE.test(match[0]),
		      oneTime: oneTime,
		      twoWay: twoWay
		    })
		    lastIndex = index + match[0].length
		  }
		  if (lastIndex < text.length) {
		    tokens.push({
		      value: text.slice(lastIndex)
		    })
		  }
		  cache.put(text, tokens)
		  return tokens
		}

		/**
		 * Format a list of tokens into an expression.
		 * e.g. tokens parsed from 'a {{b}} c' can be serialized
		 * into one single expression as '"a " + b + " c"'.
		 *
		 * @param {Array} tokens
		 * @param {Vue} [vm]
		 * @return {String}
		 */

		exports.tokensToExp = function (tokens, vm) {
		  return tokens.length > 1
		    ? tokens.map(function (token) {
		        return formatToken(token, vm)
		      }).join('+')
		    : formatToken(tokens[0], vm, true)
		}

		/**
		 * Format a single token.
		 *
		 * @param {Object} token
		 * @param {Vue} [vm]
		 * @param {Boolean} single
		 * @return {String}
		 */

		function formatToken (token, vm, single) {
		  return token.tag
		    ? vm && token.oneTime
		      ? '"' + vm.$eval(token.value) + '"'
		      : inlineFilters(token.value, single)
		    : '"' + token.value + '"'
		}

		/**
		 * For an attribute with multiple interpolation tags,
		 * e.g. attr="some-{{thing | filter}}", in order to combine
		 * the whole thing into a single watchable expression, we
		 * have to inline those filters. This function does exactly
		 * that. This is a bit hacky but it avoids heavy changes
		 * to directive parser and watcher mechanism.
		 *
		 * @param {String} exp
		 * @param {Boolean} single
		 * @return {String}
		 */

		var filterRE = /[^|]\|[^|]/
		function inlineFilters (exp, single) {
		  if (!filterRE.test(exp)) {
		    return single
		      ? exp
		      : '(' + exp + ')'
		  } else {
		    var dir = dirParser.parse(exp)[0]
		    if (!dir.filters) {
		      return '(' + exp + ')'
		    } else {
		      return 'this._applyFilters(' +
		        dir.expression + // value
		        ',null,' +       // oldValue (null for read)
		        JSON.stringify(dir.filters) + // filter descriptors
		        ',false)'        // write?
		    }
		  }
		}


	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Cache = __webpack_require__(13)
		var cache = new Cache(1000)
		var argRE = /^[^\{\?]+$|^'[^']*'$|^"[^"]*"$/
		var filterTokenRE = /[^\s'"]+|'[^']+'|"[^"]+"/g
		var reservedArgRE = /^in$|^-?\d+/

		/**
		 * Parser state
		 */

		var str
		var c, i, l
		var inSingle
		var inDouble
		var curly
		var square
		var paren
		var begin
		var argIndex
		var dirs
		var dir
		var lastFilterIndex
		var arg

		/**
		 * Push a directive object into the result Array
		 */

		function pushDir () {
		  dir.raw = str.slice(begin, i).trim()
		  if (dir.expression === undefined) {
		    dir.expression = str.slice(argIndex, i).trim()
		  } else if (lastFilterIndex !== begin) {
		    pushFilter()
		  }
		  if (i === 0 || dir.expression) {
		    dirs.push(dir)
		  }
		}

		/**
		 * Push a filter to the current directive object
		 */

		function pushFilter () {
		  var exp = str.slice(lastFilterIndex, i).trim()
		  var filter
		  if (exp) {
		    filter = {}
		    var tokens = exp.match(filterTokenRE)
		    filter.name = tokens[0]
		    if (tokens.length > 1) {
		      filter.args = tokens.slice(1).map(processFilterArg)
		    }
		  }
		  if (filter) {
		    (dir.filters = dir.filters || []).push(filter)
		  }
		  lastFilterIndex = i + 1
		}

		/**
		 * Check if an argument is dynamic and strip quotes.
		 *
		 * @param {String} arg
		 * @return {Object}
		 */

		function processFilterArg (arg) {
		  var stripped = reservedArgRE.test(arg)
		    ? arg
		    : _.stripQuotes(arg)
		  return {
		    value: stripped || arg,
		    dynamic: !stripped
		  }
		}

		/**
		 * Parse a directive string into an Array of AST-like
		 * objects representing directives.
		 *
		 * Example:
		 *
		 * "click: a = a + 1 | uppercase" will yield:
		 * {
		 *   arg: 'click',
		 *   expression: 'a = a + 1',
		 *   filters: [
		 *     { name: 'uppercase', args: null }
		 *   ]
		 * }
		 *
		 * @param {String} str
		 * @return {Array<Object>}
		 */

		exports.parse = function (s) {

		  var hit = cache.get(s)
		  if (hit) {
		    return hit
		  }

		  // reset parser state
		  str = s
		  inSingle = inDouble = false
		  curly = square = paren = begin = argIndex = 0
		  lastFilterIndex = 0
		  dirs = []
		  dir = {}
		  arg = null

		  for (i = 0, l = str.length; i < l; i++) {
		    c = str.charCodeAt(i)
		    if (inSingle) {
		      // check single quote
		      if (c === 0x27) inSingle = !inSingle
		    } else if (inDouble) {
		      // check double quote
		      if (c === 0x22) inDouble = !inDouble
		    } else if (
		      c === 0x2C && // comma
		      !paren && !curly && !square
		    ) {
		      // reached the end of a directive
		      pushDir()
		      // reset & skip the comma
		      dir = {}
		      begin = argIndex = lastFilterIndex = i + 1
		    } else if (
		      c === 0x3A && // colon
		      !dir.expression &&
		      !dir.arg
		    ) {
		      // argument
		      arg = str.slice(begin, i).trim()
		      // test for valid argument here
		      // since we may have caught stuff like first half of
		      // an object literal or a ternary expression.
		      if (argRE.test(arg)) {
		        argIndex = i + 1
		        dir.arg = _.stripQuotes(arg) || arg
		      }
		    } else if (
		      c === 0x7C && // pipe
		      str.charCodeAt(i + 1) !== 0x7C &&
		      str.charCodeAt(i - 1) !== 0x7C
		    ) {
		      if (dir.expression === undefined) {
		        // first filter, end of expression
		        lastFilterIndex = i + 1
		        dir.expression = str.slice(argIndex, i).trim()
		      } else {
		        // already has filter
		        pushFilter()
		      }
		    } else {
		      switch (c) {
		        case 0x22: inDouble = true; break // "
		        case 0x27: inSingle = true; break // '
		        case 0x28: paren++; break         // (
		        case 0x29: paren--; break         // )
		        case 0x5B: square++; break        // [
		        case 0x5D: square--; break        // ]
		        case 0x7B: curly++; break         // {
		        case 0x7D: curly--; break         // }
		      }
		    }
		  }

		  if (i === 0 || begin !== i) {
		    pushDir()
		  }

		  cache.put(s, dirs)
		  return dirs
		}


	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		// NOTE: the prop internal directive is compiled and linked
		// during _initScope(), before the created hook is called.
		// The purpose is to make the initial prop values available
		// inside `created` hooks and `data` functions.

		var _ = __webpack_require__(1)
		var Watcher = __webpack_require__(17)
		var bindingModes = __webpack_require__(3)._propBindingModes

		module.exports = {

		  bind: function () {

		    var child = this.vm
		    var parent = child._context
		    // passed in from compiler directly
		    var prop = this._descriptor
		    var childKey = prop.path
		    var parentKey = prop.parentPath

		    // simple lock to avoid circular updates.
		    // without this it would stabilize too, but this makes
		    // sure it doesn't cause other watchers to re-evaluate.
		    var locked = false
		    function withLock (fn) {
		      return function (val) {
		        if (!locked) {
		          locked = true
		          fn(val)
		          _.nextTick(function () {
		            locked = false
		          })
		        }
		      }
		    }

		    this.parentWatcher = new Watcher(
		      parent,
		      parentKey,
		      withLock(function (val) {
		        if (_.assertProp(prop, val)) {
		          child[childKey] = val
		        }
		      })
		    )

		    // set the child initial value.
		    // !!! We need to set it also on raw data here, because
		    // props are initialized before data is fully observed
		    var value = this.parentWatcher.value
		    if (_.assertProp(prop, value)) {
		      if (childKey === '$data') {
		        child._data = value
		      } else {
		        child[childKey] = child._data[childKey] = value
		      }
		    }

		    // only setup two-way binding if this is not a one-way
		    // binding.
		    if (prop.mode === bindingModes.TWO_WAY) {
		      // important: defer the child watcher creation until
		      // the created hook (after data observation)
		      var self = this
		      child.$once('hook:created', function () {
		        self.childWatcher = new Watcher(
		          child,
		          childKey,
		          withLock(function (val) {
		            parent.$set(parentKey, val)
		          })
		        )
		      })
		    }
		  },

		  unbind: function () {
		    if (this.parentWatcher) {
		      this.parentWatcher.teardown()
		    }
		    if (this.childWatcher) {
		      this.childWatcher.teardown()
		    }
		  }
		}


	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(3)
		var Observer = __webpack_require__(18)
		var expParser = __webpack_require__(22)
		var batcher = __webpack_require__(24)
		var uid = 0

		/**
		 * A watcher parses an expression, collects dependencies,
		 * and fires callback when the expression value changes.
		 * This is used for both the $watch() api and directives.
		 *
		 * @param {Vue} vm
		 * @param {String} expression
		 * @param {Function} cb
		 * @param {Object} options
		 *                 - {Array} filters
		 *                 - {Boolean} twoWay
		 *                 - {Boolean} deep
		 *                 - {Boolean} user
		 *                 - {Function} [preProcess]
		 * @constructor
		 */

		function Watcher (vm, expOrFn, cb, options) {
		  var isFn = typeof expOrFn === 'function'
		  this.vm = vm
		  vm._watchers.push(this)
		  this.expression = isFn ? '' : expOrFn
		  this.cb = cb
		  this.id = ++uid // uid for batching
		  this.active = true
		  options = options || {}
		  this.deep = !!options.deep
		  this.user = !!options.user
		  this.twoWay = !!options.twoWay
		  this.filters = options.filters
		  this.preProcess = options.preProcess
		  this.deps = []
		  this.newDeps = []
		  // parse expression for getter/setter
		  if (isFn) {
		    this.getter = expOrFn
		    this.setter = undefined
		  } else {
		    var res = expParser.parse(expOrFn, options.twoWay)
		    this.getter = res.get
		    this.setter = res.set
		  }
		  this.value = this.get()
		}

		var p = Watcher.prototype

		/**
		 * Add a dependency to this directive.
		 *
		 * @param {Dep} dep
		 */

		p.addDep = function (dep) {
		  var newDeps = this.newDeps
		  var old = this.deps
		  if (_.indexOf(newDeps, dep) < 0) {
		    newDeps.push(dep)
		    var i = _.indexOf(old, dep)
		    if (i < 0) {
		      dep.addSub(this)
		    } else {
		      old[i] = null
		    }
		  }
		}

		/**
		 * Evaluate the getter, and re-collect dependencies.
		 */

		p.get = function () {
		  this.beforeGet()
		  var vm = this.vm
		  var value
		  try {
		    value = this.getter.call(vm, vm)
		  } catch (e) {
		    if (config.warnExpressionErrors) {
		      _.warn(
		        'Error when evaluating expression "' +
		        this.expression + '". ' +
		        (config.debug
		          ? '' :
		          'Turn on debug mode to see stack trace.'
		        ), e
		      )
		    }
		  }
		  // "touch" every property so they are all tracked as
		  // dependencies for deep watching
		  if (this.deep) {
		    traverse(value)
		  }
		  if (this.preProcess) {
		    value = this.preProcess(value)
		  }
		  if (this.filters) {
		    value = vm._applyFilters(value, null, this.filters, false)
		  }
		  this.afterGet()
		  return value
		}

		/**
		 * Set the corresponding value with the setter.
		 *
		 * @param {*} value
		 */

		p.set = function (value) {
		  var vm = this.vm
		  if (this.filters) {
		    value = vm._applyFilters(
		      value, this.value, this.filters, true)
		  }
		  try {
		    this.setter.call(vm, vm, value)
		  } catch (e) {
		    if (config.warnExpressionErrors) {
		      _.warn(
		        'Error when evaluating setter "' +
		        this.expression + '"', e
		      )
		    }
		  }
		}

		/**
		 * Prepare for dependency collection.
		 */

		p.beforeGet = function () {
		  Observer.setTarget(this)
		}

		/**
		 * Clean up for dependency collection.
		 */

		p.afterGet = function () {
		  Observer.setTarget(null)
		  var i = this.deps.length
		  while (i--) {
		    var dep = this.deps[i]
		    if (dep) {
		      dep.removeSub(this)
		    }
		  }
		  this.deps = this.newDeps
		  this.newDeps = []
		}

		/**
		 * Subscriber interface.
		 * Will be called when a dependency changes.
		 */

		p.update = function () {
		  if (!config.async) {
		    this.run()
		  } else {
		    batcher.push(this)
		  }
		}

		/**
		 * Batcher job interface.
		 * Will be called by the batcher.
		 */

		p.run = function () {
		  if (this.active) {
		    var value = this.get()
		    if (
		      value !== this.value ||
		      _.isArray(value) ||
		      this.deep
		    ) {
		      var oldValue = this.value
		      this.value = value
		      this.cb(value, oldValue)
		    }
		  }
		}

		/**
		 * Remove self from all dependencies' subcriber list.
		 */

		p.teardown = function () {
		  if (this.active) {
		    // remove self from vm's watcher list
		    // we can skip this if the vm if being destroyed
		    // which can improve teardown performance.
		    if (!this.vm._isBeingDestroyed) {
		      this.vm._watchers.$remove(this)
		    }
		    var i = this.deps.length
		    while (i--) {
		      this.deps[i].removeSub(this)
		    }
		    this.active = false
		    this.vm = this.cb = this.value = null
		  }
		}

		/**
		 * Recrusively traverse an object to evoke all converted
		 * getters, so that every nested property inside the object
		 * is collected as a "deep" dependency.
		 *
		 * @param {Object} obj
		 */

		function traverse (obj) {
		  var key, val, i
		  for (key in obj) {
		    val = obj[key]
		    if (_.isArray(val)) {
		      i = val.length
		      while (i--) traverse(val[i])
		    } else if (_.isObject(val)) {
		      traverse(val)
		    }
		  }
		}

		module.exports = Watcher


	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(3)
		var Dep = __webpack_require__(19)
		var arrayMethods = __webpack_require__(20)
		var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
		__webpack_require__(21)

		var uid = 0

		/**
		 * Type enums
		 */

		var ARRAY = 0
		var OBJECT = 1

		/**
		 * Observer class that are attached to each observed
		 * object. Once attached, the observer converts target
		 * object's property keys into getter/setters that
		 * collect dependencies and dispatches updates.
		 *
		 * @param {Array|Object} value
		 * @param {Number} type
		 * @constructor
		 */

		function Observer (value, type) {
		  this.id = ++uid
		  this.value = value
		  this.active = true
		  this.deps = []
		  _.define(value, '__ob__', this)
		  if (type === ARRAY) {
		    var augment = config.proto && _.hasProto
		      ? protoAugment
		      : copyAugment
		    augment(value, arrayMethods, arrayKeys)
		    this.observeArray(value)
		  } else if (type === OBJECT) {
		    this.walk(value)
		  }
		}

		// Static methods

		/**
		 * Attempt to create an observer instance for a value,
		 * returns the new observer if successfully observed,
		 * or the existing observer if the value already has one.
		 *
		 * @param {*} value
		 * @return {Observer|undefined}
		 * @static
		 */

		Observer.create = function (value) {
		  if (
		    value &&
		    value.hasOwnProperty('__ob__') &&
		    value.__ob__ instanceof Observer
		  ) {
		    return value.__ob__
		  } else if (_.isArray(value)) {
		    return new Observer(value, ARRAY)
		  } else if (
		    _.isPlainObject(value) &&
		    !value._isVue // avoid Vue instance
		  ) {
		    return new Observer(value, OBJECT)
		  }
		}

		/**
		 * Set the target watcher that is currently being evaluated.
		 *
		 * @param {Watcher} watcher
		 */

		Observer.setTarget = function (watcher) {
		  Dep.target = watcher
		}

		// Instance methods

		var p = Observer.prototype

		/**
		 * Walk through each property and convert them into
		 * getter/setters. This method should only be called when
		 * value type is Object. Properties prefixed with `$` or `_`
		 * and accessor properties are ignored.
		 *
		 * @param {Object} obj
		 */

		p.walk = function (obj) {
		  var keys = Object.keys(obj)
		  var i = keys.length
		  var key, prefix
		  while (i--) {
		    key = keys[i]
		    prefix = key.charCodeAt(0)
		    if (prefix !== 0x24 && prefix !== 0x5F) { // skip $ or _
		      this.convert(key, obj[key])
		    }
		  }
		}

		/**
		 * Try to carete an observer for a child value,
		 * and if value is array, link dep to the array.
		 *
		 * @param {*} val
		 * @return {Dep|undefined}
		 */

		p.observe = function (val) {
		  return Observer.create(val)
		}

		/**
		 * Observe a list of Array items.
		 *
		 * @param {Array} items
		 */

		p.observeArray = function (items) {
		  var i = items.length
		  while (i--) {
		    this.observe(items[i])
		  }
		}

		/**
		 * Convert a property into getter/setter so we can emit
		 * the events when the property is accessed/changed.
		 *
		 * @param {String} key
		 * @param {*} val
		 */

		p.convert = function (key, val) {
		  var ob = this
		  var childOb = ob.observe(val)
		  var dep = new Dep()
		  if (childOb) {
		    childOb.deps.push(dep)
		  }
		  Object.defineProperty(ob.value, key, {
		    enumerable: true,
		    configurable: true,
		    get: function () {
		      if (ob.active) {
		        dep.depend()
		      }
		      return val
		    },
		    set: function (newVal) {
		      if (newVal === val) return
		      // remove dep from old value
		      var oldChildOb = val && val.__ob__
		      if (oldChildOb) {
		        oldChildOb.deps.$remove(dep)
		      }
		      val = newVal
		      // add dep to new value
		      var newChildOb = ob.observe(newVal)
		      if (newChildOb) {
		        newChildOb.deps.push(dep)
		      }
		      dep.notify()
		    }
		  })
		}

		/**
		 * Notify change on all self deps on an observer.
		 * This is called when a mutable value mutates. e.g.
		 * when an Array's mutating methods are called, or an
		 * Object's $add/$delete are called.
		 */

		p.notify = function () {
		  var deps = this.deps
		  for (var i = 0, l = deps.length; i < l; i++) {
		    deps[i].notify()
		  }
		}

		/**
		 * Add an owner vm, so that when $add/$delete mutations
		 * happen we can notify owner vms to proxy the keys and
		 * digest the watchers. This is only called when the object
		 * is observed as an instance's root $data.
		 *
		 * @param {Vue} vm
		 */

		p.addVm = function (vm) {
		  (this.vms || (this.vms = [])).push(vm)
		}

		/**
		 * Remove an owner vm. This is called when the object is
		 * swapped out as an instance's $data object.
		 *
		 * @param {Vue} vm
		 */

		p.removeVm = function (vm) {
		  this.vms.$remove(vm)
		}

		// helpers

		/**
		 * Augment an target Object or Array by intercepting
		 * the prototype chain using __proto__
		 *
		 * @param {Object|Array} target
		 * @param {Object} proto
		 */

		function protoAugment (target, src) {
		  target.__proto__ = src
		}

		/**
		 * Augment an target Object or Array by defining
		 * hidden properties.
		 *
		 * @param {Object|Array} target
		 * @param {Object} proto
		 */

		function copyAugment (target, src, keys) {
		  var i = keys.length
		  var key
		  while (i--) {
		    key = keys[i]
		    _.define(target, key, src[key])
		  }
		}

		module.exports = Observer


	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * A dep is an observable that can have multiple
		 * directives subscribing to it.
		 *
		 * @constructor
		 */

		function Dep () {
		  this.subs = []
		}

		// the current target watcher being evaluated.
		// this is globally unique because there could be only one
		// watcher being evaluated at any time.
		Dep.target = null

		var p = Dep.prototype

		/**
		 * Add a directive subscriber.
		 *
		 * @param {Directive} sub
		 */

		p.addSub = function (sub) {
		  this.subs.push(sub)
		}

		/**
		 * Remove a directive subscriber.
		 *
		 * @param {Directive} sub
		 */

		p.removeSub = function (sub) {
		  this.subs.$remove(sub)
		}

		/**
		 * Add self as a dependency to the target watcher.
		 */

		p.depend = function () {
		  if (Dep.target) {
		    Dep.target.addDep(this)
		  }
		}

		/**
		 * Notify all subscribers of a new value.
		 */

		p.notify = function () {
		  // stablize the subscriber list first
		  var subs = _.toArray(this.subs)
		  for (var i = 0, l = subs.length; i < l; i++) {
		    subs[i].update()
		  }
		}

		module.exports = Dep


	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var arrayProto = Array.prototype
		var arrayMethods = Object.create(arrayProto)

		/**
		 * Intercept mutating methods and emit events
		 */

		;[
		  'push',
		  'pop',
		  'shift',
		  'unshift',
		  'splice',
		  'sort',
		  'reverse'
		]
		.forEach(function (method) {
		  // cache original method
		  var original = arrayProto[method]
		  _.define(arrayMethods, method, function mutator () {
		    // avoid leaking arguments:
		    // http://jsperf.com/closure-with-arguments
		    var i = arguments.length
		    var args = new Array(i)
		    while (i--) {
		      args[i] = arguments[i]
		    }
		    var result = original.apply(this, args)
		    var ob = this.__ob__
		    var inserted
		    switch (method) {
		      case 'push':
		        inserted = args
		        break
		      case 'unshift':
		        inserted = args
		        break
		      case 'splice':
		        inserted = args.slice(2)
		        break
		    }
		    if (inserted) ob.observeArray(inserted)
		    // notify change
		    ob.notify()
		    return result
		  })
		})

		/**
		 * Swap the element at the given index with a new value
		 * and emits corresponding event.
		 *
		 * @param {Number} index
		 * @param {*} val
		 * @return {*} - replaced element
		 */

		_.define(
		  arrayProto,
		  '$set',
		  function $set (index, val) {
		    if (index >= this.length) {
		      this.length = index + 1
		    }
		    return this.splice(index, 1, val)[0]
		  }
		)

		/**
		 * Convenience method to remove the element at given index.
		 *
		 * @param {Number} index
		 * @param {*} val
		 */

		_.define(
		  arrayProto,
		  '$remove',
		  function $remove (index) {
		    /* istanbul ignore if */
		    if (!this.length) return
		    if (typeof index !== 'number') {
		      index = _.indexOf(this, index)
		    }
		    if (index > -1) {
		      return this.splice(index, 1)
		    }
		  }
		)

		module.exports = arrayMethods


	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var objProto = Object.prototype

		/**
		 * Add a new property to an observed object
		 * and emits corresponding event
		 *
		 * @param {String} key
		 * @param {*} val
		 * @public
		 */

		_.define(
		  objProto,
		  '$add',
		  function $add (key, val) {
		    if (this.hasOwnProperty(key)) return
		    var ob = this.__ob__
		    if (!ob || _.isReserved(key)) {
		      this[key] = val
		      return
		    }
		    ob.convert(key, val)
		    ob.notify()
		    if (ob.vms) {
		      var i = ob.vms.length
		      while (i--) {
		        var vm = ob.vms[i]
		        vm._proxy(key)
		        vm._digest()
		      }
		    }
		  }
		)

		/**
		 * Set a property on an observed object, calling add to
		 * ensure the property is observed.
		 *
		 * @param {String} key
		 * @param {*} val
		 * @public
		 */

		_.define(
		  objProto,
		  '$set',
		  function $set (key, val) {
		    this.$add(key, val)
		    this[key] = val
		  }
		)

		/**
		 * Deletes a property from an observed object
		 * and emits corresponding event
		 *
		 * @param {String} key
		 * @public
		 */

		_.define(
		  objProto,
		  '$delete',
		  function $delete (key) {
		    if (!this.hasOwnProperty(key)) return
		    delete this[key]
		    var ob = this.__ob__
		    if (!ob || _.isReserved(key)) {
		      return
		    }
		    ob.notify()
		    if (ob.vms) {
		      var i = ob.vms.length
		      while (i--) {
		        var vm = ob.vms[i]
		        vm._unproxy(key)
		        vm._digest()
		      }
		    }
		  }
		)


	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Path = __webpack_require__(23)
		var Cache = __webpack_require__(13)
		var expressionCache = new Cache(1000)

		var allowedKeywords =
		  'Math,Date,this,true,false,null,undefined,Infinity,NaN,' +
		  'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' +
		  'encodeURIComponent,parseInt,parseFloat'
		var allowedKeywordsRE =
		  new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)')

		// keywords that don't make sense inside expressions
		var improperKeywords =
		  'break,case,class,catch,const,continue,debugger,default,' +
		  'delete,do,else,export,extends,finally,for,function,if,' +
		  'import,in,instanceof,let,return,super,switch,throw,try,' +
		  'var,while,with,yield,enum,await,implements,package,' +
		  'proctected,static,interface,private,public'
		var improperKeywordsRE =
		  new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)')

		var wsRE = /\s/g
		var newlineRE = /\n/g
		var saveRE = /[\{,]\s*[\w\$_]+\s*:|('[^']*'|"[^"]*")|new |typeof |void /g
		var restoreRE = /"(\d+)"/g
		var pathTestRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
		var pathReplaceRE = /[^\w$\.]([A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\])*)/g
		var booleanLiteralRE = /^(true|false)$/

		/**
		 * Save / Rewrite / Restore
		 *
		 * When rewriting paths found in an expression, it is
		 * possible for the same letter sequences to be found in
		 * strings and Object literal property keys. Therefore we
		 * remove and store these parts in a temporary array, and
		 * restore them after the path rewrite.
		 */

		var saved = []

		/**
		 * Save replacer
		 *
		 * The save regex can match two possible cases:
		 * 1. An opening object literal
		 * 2. A string
		 * If matched as a plain string, we need to escape its
		 * newlines, since the string needs to be preserved when
		 * generating the function body.
		 *
		 * @param {String} str
		 * @param {String} isString - str if matched as a string
		 * @return {String} - placeholder with index
		 */

		function save (str, isString) {
		  var i = saved.length
		  saved[i] = isString
		    ? str.replace(newlineRE, '\\n')
		    : str
		  return '"' + i + '"'
		}

		/**
		 * Path rewrite replacer
		 *
		 * @param {String} raw
		 * @return {String}
		 */

		function rewrite (raw) {
		  var c = raw.charAt(0)
		  var path = raw.slice(1)
		  if (allowedKeywordsRE.test(path)) {
		    return raw
		  } else {
		    path = path.indexOf('"') > -1
		      ? path.replace(restoreRE, restore)
		      : path
		    return c + 'scope.' + path
		  }
		}

		/**
		 * Restore replacer
		 *
		 * @param {String} str
		 * @param {String} i - matched save index
		 * @return {String}
		 */

		function restore (str, i) {
		  return saved[i]
		}

		/**
		 * Rewrite an expression, prefixing all path accessors with
		 * `scope.` and generate getter/setter functions.
		 *
		 * @param {String} exp
		 * @param {Boolean} needSet
		 * @return {Function}
		 */

		function compileExpFns (exp, needSet) {
		  if (improperKeywordsRE.test(exp)) {
		    _.warn(
		      'Avoid using reserved keywords in expression: ' + exp
		    )
		  }
		  // reset state
		  saved.length = 0
		  // save strings and object literal keys
		  var body = exp
		    .replace(saveRE, save)
		    .replace(wsRE, '')
		  // rewrite all paths
		  // pad 1 space here becaue the regex matches 1 extra char
		  body = (' ' + body)
		    .replace(pathReplaceRE, rewrite)
		    .replace(restoreRE, restore)
		  var getter = makeGetter(body)
		  if (getter) {
		    return {
		      get: getter,
		      body: body,
		      set: needSet
		        ? makeSetter(body)
		        : null
		    }
		  }
		}

		/**
		 * Compile getter setters for a simple path.
		 *
		 * @param {String} exp
		 * @return {Function}
		 */

		function compilePathFns (exp) {
		  var getter, path
		  if (exp.indexOf('[') < 0) {
		    // really simple path
		    path = exp.split('.')
		    path.raw = exp
		    getter = Path.compileGetter(path)
		  } else {
		    // do the real parsing
		    path = Path.parse(exp)
		    getter = path.get
		  }
		  return {
		    get: getter,
		    // always generate setter for simple paths
		    set: function (obj, val) {
		      Path.set(obj, path, val)
		    }
		  }
		}

		/**
		 * Build a getter function. Requires eval.
		 *
		 * We isolate the try/catch so it doesn't affect the
		 * optimization of the parse function when it is not called.
		 *
		 * @param {String} body
		 * @return {Function|undefined}
		 */

		function makeGetter (body) {
		  try {
		    return new Function('scope', 'return ' + body + ';')
		  } catch (e) {
		    _.warn(
		      'Invalid expression. ' +
		      'Generated function body: ' + body
		    )
		  }
		}

		/**
		 * Build a setter function.
		 *
		 * This is only needed in rare situations like "a[b]" where
		 * a settable path requires dynamic evaluation.
		 *
		 * This setter function may throw error when called if the
		 * expression body is not a valid left-hand expression in
		 * assignment.
		 *
		 * @param {String} body
		 * @return {Function|undefined}
		 */

		function makeSetter (body) {
		  try {
		    return new Function('scope', 'value', body + '=value;')
		  } catch (e) {
		    _.warn('Invalid setter function body: ' + body)
		  }
		}

		/**
		 * Check for setter existence on a cache hit.
		 *
		 * @param {Function} hit
		 */

		function checkSetter (hit) {
		  if (!hit.set) {
		    hit.set = makeSetter(hit.body)
		  }
		}

		/**
		 * Parse an expression into re-written getter/setters.
		 *
		 * @param {String} exp
		 * @param {Boolean} needSet
		 * @return {Function}
		 */

		exports.parse = function (exp, needSet) {
		  exp = exp.trim()
		  // try cache
		  var hit = expressionCache.get(exp)
		  if (hit) {
		    if (needSet) {
		      checkSetter(hit)
		    }
		    return hit
		  }
		  // we do a simple path check to optimize for them.
		  // the check fails valid paths with unusal whitespaces,
		  // but that's too rare and we don't care.
		  // also skip boolean literals and paths that start with
		  // global "Math"
		  var res = exports.isSimplePath(exp)
		    ? compilePathFns(exp)
		    : compileExpFns(exp, needSet)
		  expressionCache.put(exp, res)
		  return res
		}

		/**
		 * Check if an expression is a simple path.
		 *
		 * @param {String} exp
		 * @return {Boolean}
		 */

		exports.isSimplePath = function (exp) {
		  return pathTestRE.test(exp) &&
		    // don't treat true/false as paths
		    !booleanLiteralRE.test(exp) &&
		    // Math constants e.g. Math.PI, Math.E etc.
		    exp.slice(0, 5) !== 'Math.'
		}


	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Cache = __webpack_require__(13)
		var pathCache = new Cache(1000)
		var identRE = exports.identRE = /^[$_a-zA-Z]+[\w$]*$/

		/**
		 * Path-parsing algorithm scooped from Polymer/observe-js
		 */

		var pathStateMachine = {
		  'beforePath': {
		    'ws': ['beforePath'],
		    'ident': ['inIdent', 'append'],
		    '[': ['beforeElement'],
		    'eof': ['afterPath']
		  },

		  'inPath': {
		    'ws': ['inPath'],
		    '.': ['beforeIdent'],
		    '[': ['beforeElement'],
		    'eof': ['afterPath']
		  },

		  'beforeIdent': {
		    'ws': ['beforeIdent'],
		    'ident': ['inIdent', 'append']
		  },

		  'inIdent': {
		    'ident': ['inIdent', 'append'],
		    '0': ['inIdent', 'append'],
		    'number': ['inIdent', 'append'],
		    'ws': ['inPath', 'push'],
		    '.': ['beforeIdent', 'push'],
		    '[': ['beforeElement', 'push'],
		    'eof': ['afterPath', 'push'],
		    ']': ['inPath', 'push']
		  },

		  'beforeElement': {
		    'ws': ['beforeElement'],
		    '0': ['afterZero', 'append'],
		    'number': ['inIndex', 'append'],
		    "'": ['inSingleQuote', 'append', ''],
		    '"': ['inDoubleQuote', 'append', ''],
		    'ident': ['inIdent', 'append', '*']
		  },

		  'afterZero': {
		    'ws': ['afterElement', 'push'],
		    ']': ['inPath', 'push']
		  },

		  'inIndex': {
		    '0': ['inIndex', 'append'],
		    'number': ['inIndex', 'append'],
		    'ws': ['afterElement'],
		    ']': ['inPath', 'push']
		  },

		  'inSingleQuote': {
		    "'": ['afterElement'],
		    'eof': 'error',
		    'else': ['inSingleQuote', 'append']
		  },

		  'inDoubleQuote': {
		    '"': ['afterElement'],
		    'eof': 'error',
		    'else': ['inDoubleQuote', 'append']
		  },

		  'afterElement': {
		    'ws': ['afterElement'],
		    ']': ['inPath', 'push']
		  }
		}

		function noop () {}

		/**
		 * Determine the type of a character in a keypath.
		 *
		 * @param {Char} ch
		 * @return {String} type
		 */

		function getPathCharType (ch) {
		  if (ch === undefined) {
		    return 'eof'
		  }

		  var code = ch.charCodeAt(0)

		  switch (code) {
		    case 0x5B: // [
		    case 0x5D: // ]
		    case 0x2E: // .
		    case 0x22: // "
		    case 0x27: // '
		    case 0x30: // 0
		      return ch

		    case 0x5F: // _
		    case 0x24: // $
		      return 'ident'

		    case 0x20: // Space
		    case 0x09: // Tab
		    case 0x0A: // Newline
		    case 0x0D: // Return
		    case 0xA0:  // No-break space
		    case 0xFEFF:  // Byte Order Mark
		    case 0x2028:  // Line Separator
		    case 0x2029:  // Paragraph Separator
		      return 'ws'
		  }

		  // a-z, A-Z
		  if (
		    (code >= 0x61 && code <= 0x7A) ||
		    (code >= 0x41 && code <= 0x5A)
		  ) {
		    return 'ident'
		  }

		  // 1-9
		  if (code >= 0x31 && code <= 0x39) {
		    return 'number'
		  }

		  return 'else'
		}

		/**
		 * Parse a string path into an array of segments
		 * Todo implement cache
		 *
		 * @param {String} path
		 * @return {Array|undefined}
		 */

		function parsePath (path) {
		  var keys = []
		  var index = -1
		  var mode = 'beforePath'
		  var c, newChar, key, type, transition, action, typeMap

		  var actions = {
		    push: function () {
		      if (key === undefined) {
		        return
		      }
		      keys.push(key)
		      key = undefined
		    },
		    append: function () {
		      if (key === undefined) {
		        key = newChar
		      } else {
		        key += newChar
		      }
		    }
		  }

		  function maybeUnescapeQuote () {
		    var nextChar = path[index + 1]
		    if ((mode === 'inSingleQuote' && nextChar === "'") ||
		        (mode === 'inDoubleQuote' && nextChar === '"')) {
		      index++
		      newChar = nextChar
		      actions.append()
		      return true
		    }
		  }

		  while (mode) {
		    index++
		    c = path[index]

		    if (c === '\\' && maybeUnescapeQuote()) {
		      continue
		    }

		    type = getPathCharType(c)
		    typeMap = pathStateMachine[mode]
		    transition = typeMap[type] || typeMap['else'] || 'error'

		    if (transition === 'error') {
		      return // parse error
		    }

		    mode = transition[0]
		    action = actions[transition[1]] || noop
		    newChar = transition[2]
		    newChar = newChar === undefined
		      ? c
		      : newChar === '*'
		        ? newChar + c
		        : newChar
		    action()

		    if (mode === 'afterPath') {
		      keys.raw = path
		      return keys
		    }
		  }
		}

		/**
		 * Format a accessor segment based on its type.
		 *
		 * @param {String} key
		 * @return {Boolean}
		 */

		function formatAccessor (key) {
		  if (identRE.test(key)) { // identifier
		    return '.' + key
		  } else if (+key === key >>> 0) { // bracket index
		    return '[' + key + ']'
		  } else if (key.charAt(0) === '*') {
		    return '[o' + formatAccessor(key.slice(1)) + ']'
		  } else { // bracket string
		    return '["' + key.replace(/"/g, '\\"') + '"]'
		  }
		}

		/**
		 * Compiles a getter function with a fixed path.
		 * The fixed path getter supresses errors.
		 *
		 * @param {Array} path
		 * @return {Function}
		 */

		exports.compileGetter = function (path) {
		  var body = 'return o' + path.map(formatAccessor).join('')
		  return new Function('o', body)
		}

		/**
		 * External parse that check for a cache hit first
		 *
		 * @param {String} path
		 * @return {Array|undefined}
		 */

		exports.parse = function (path) {
		  var hit = pathCache.get(path)
		  if (!hit) {
		    hit = parsePath(path)
		    if (hit) {
		      hit.get = exports.compileGetter(hit)
		      pathCache.put(path, hit)
		    }
		  }
		  return hit
		}

		/**
		 * Get from an object from a path string
		 *
		 * @param {Object} obj
		 * @param {String} path
		 */

		exports.get = function (obj, path) {
		  path = exports.parse(path)
		  if (path) {
		    return path.get(obj)
		  }
		}

		/**
		 * Set on an object from a path
		 *
		 * @param {Object} obj
		 * @param {String | Array} path
		 * @param {*} val
		 */

		exports.set = function (obj, path, val) {
		  var original = obj
		  if (typeof path === 'string') {
		    path = exports.parse(path)
		  }
		  if (!path || !_.isObject(obj)) {
		    return false
		  }
		  var last, key
		  for (var i = 0, l = path.length; i < l; i++) {
		    last = obj
		    key = path[i]
		    if (key.charAt(0) === '*') {
		      key = original[key.slice(1)]
		    }
		    if (i < l - 1) {
		      obj = obj[key]
		      if (!_.isObject(obj)) {
		        obj = {}
		        last.$add(key, obj)
		        warnNonExistent(path)
		      }
		    } else {
		      if (_.isArray(obj)) {
		        obj.$set(key, val)
		      } else if (key in obj) {
		        obj[key] = val
		      } else {
		        obj.$add(key, val)
		        warnNonExistent(path)
		      }
		    }
		  }
		  return true
		}

		function warnNonExistent (path) {
		  _.warn(
		    'You are setting a non-existent path "' + path.raw + '" ' +
		    'on a vm instance. Consider pre-initializing the property ' +
		    'with the "data" option for more reliable reactivity ' +
		    'and better performance.'
		  )
		}


	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(3)

		// we have two separate queues: one for directive updates
		// and one for user watcher registered via $watch().
		// we want to guarantee directive updates to be called
		// before user watchers so that when user watchers are
		// triggered, the DOM would have already been in updated
		// state.
		var queue = []
		var userQueue = []
		var has = {}
		var waiting = false
		var flushing = false
		var internalQueueDepleted = false

		/**
		 * Reset the batcher's state.
		 */

		function reset () {
		  queue = []
		  userQueue = []
		  has = {}
		  waiting = flushing = internalQueueDepleted = false
		}

		/**
		 * Flush both queues and run the jobs.
		 */

		function flush () {
		  flushing = true
		  run(queue)
		  internalQueueDepleted = true
		  run(userQueue)
		  reset()
		}

		/**
		 * Run the jobs in a single queue.
		 *
		 * @param {Array} queue
		 */

		function run (queue) {
		  // do not cache length because more jobs might be pushed
		  // as we run existing jobs
		  for (var i = 0; i < queue.length; i++) {
		    queue[i].run()
		  }
		}

		/**
		 * Push a job into the job queue.
		 * Jobs with duplicate IDs will be skipped unless it's
		 * pushed when the queue is being flushed.
		 *
		 * @param {Object} job
		 *   properties:
		 *   - {String|Number} id
		 *   - {Function}      run
		 */

		exports.push = function (job) {
		  var id = job.id
		  if (!id || !has[id] || flushing) {
		    if (!has[id]) {
		      has[id] = 1
		    } else {
		      has[id]++
		      // detect possible infinite update loops
		      if (has[id] > config._maxUpdateCount) {
		        _.warn(
		          'You may have an infinite update loop for the ' +
		          'watcher with expression: "' + job.expression + '".'
		        )
		        return
		      }
		    }
		    // A user watcher callback could trigger another
		    // directive update during the flushing; at that time
		    // the directive queue would already have been run, so
		    // we call that update immediately as it is pushed.
		    if (flushing && !job.user && internalQueueDepleted) {
		      job.run()
		      return
		    }
		    ;(job.user ? userQueue : queue).push(job)
		    if (!waiting) {
		      waiting = true
		      _.nextTick(flush)
		    }
		  }
		}


	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var templateParser = __webpack_require__(12)

		module.exports = {

		  isLiteral: true,

		  /**
		   * Setup. Two possible usages:
		   *
		   * - static:
		   *   v-component="comp"
		   *
		   * - dynamic:
		   *   v-component="{{currentView}}"
		   */

		  bind: function () {
		    if (!this.el.__vue__) {
		      // create a ref anchor
		      this.anchor = _.createAnchor('v-component')
		      _.replace(this.el, this.anchor)
		      // check keep-alive options.
		      // If yes, instead of destroying the active vm when
		      // hiding (v-if) or switching (dynamic literal) it,
		      // we simply remove it from the DOM and save it in a
		      // cache object, with its constructor id as the key.
		      this.keepAlive = this._checkParam('keep-alive') != null
		      // wait for event before insertion
		      this.readyEvent = this._checkParam('wait-for')
		      // check ref
		      this.refID = _.attr(this.el, 'ref')
		      if (this.keepAlive) {
		        this.cache = {}
		      }
		      // check inline-template
		      if (this._checkParam('inline-template') !== null) {
		        // extract inline template as a DocumentFragment
		        this.template = _.extractContent(this.el, true)
		      }
		      // component resolution related state
		      this._pendingCb =
		      this.ctorId =
		      this.Ctor = null
		      // if static, build right now.
		      if (!this._isDynamicLiteral) {
		        this.resolveCtor(this.expression, _.bind(this.initStatic, this))
		      } else {
		        // check dynamic component params
		        this.transMode = this._checkParam('transition-mode')
		      }
		    } else {
		      _.warn(
		        'Do not create a component that only contains ' +
		        'a single other component - they will be mounted to ' +
		        'the same element and cause conflict. Wrap it with ' +
		        'an outer element.'
		      )
		    }
		  },

		  /**
		   * Initialize a static component.
		   */

		  initStatic: function () {
		    var child = this.build()
		    var anchor = this.anchor
		    this.setCurrent(child)
		    if (!this.readyEvent) {
		      child.$before(anchor)
		    } else {
		      child.$once(this.readyEvent, function () {
		        child.$before(anchor)
		      })
		    }
		  },

		  /**
		   * Public update, called by the watcher in the dynamic
		   * literal scenario, e.g. v-component="{{view}}"
		   */

		  update: function (value) {
		    this.setComponent(value)
		  },

		  /**
		   * Switch dynamic components. May resolve the component
		   * asynchronously, and perform transition based on
		   * specified transition mode. Accepts a few additional
		   * arguments specifically for vue-router.
		   *
		   * @param {String} value
		   * @param {Object} data
		   * @param {Function} afterBuild
		   * @param {Function} afterTransition
		   */

		  setComponent: function (value, data, afterBuild, afterTransition) {
		    this.invalidatePending()
		    if (!value) {
		      // just remove current
		      this.unbuild()
		      this.remove(this.childVM, afterTransition)
		      this.unsetCurrent()
		    } else {
		      this.resolveCtor(value, _.bind(function () {
		        this.unbuild()
		        var newComponent = this.build(data)
		        /* istanbul ignore if */
		        if (afterBuild) afterBuild(newComponent)
		        var self = this
		        if (this.readyEvent) {
		          newComponent.$once(this.readyEvent, function () {
		            self.transition(newComponent, afterTransition)
		          })
		        } else {
		          this.transition(newComponent, afterTransition)
		        }
		      }, this))
		    }
		  },

		  /**
		   * Resolve the component constructor to use when creating
		   * the child vm.
		   */

		  resolveCtor: function (id, cb) {
		    var self = this
		    this._pendingCb = _.cancellable(function (ctor) {
		      self.ctorId = id
		      self.Ctor = ctor
		      cb()
		    })
		    this.vm._resolveComponent(id, this._pendingCb)
		  },

		  /**
		   * When the component changes or unbinds before an async
		   * constructor is resolved, we need to invalidate its
		   * pending callback.
		   */

		  invalidatePending: function () {
		    if (this._pendingCb) {
		      this._pendingCb.cancel()
		      this._pendingCb = null
		    }
		  },

		  /**
		   * Instantiate/insert a new child vm.
		   * If keep alive and has cached instance, insert that
		   * instance; otherwise build a new one and cache it.
		   *
		   * @param {Object} [data]
		   * @return {Vue} - the created instance
		   */

		  build: function (data) {
		    if (this.keepAlive) {
		      var cached = this.cache[this.ctorId]
		      if (cached) {
		        return cached
		      }
		    }
		    if (this.Ctor) {
		      var parent = this._host || this.vm
		      var el = templateParser.clone(this.el)
		      var child = parent.$addChild({
		        el: el,
		        data: data,
		        template: this.template,
		        // if no inline-template, then the compiled
		        // linker can be cached for better performance.
		        _linkerCachable: !this.template,
		        _asComponent: true,
		        _isRouterView: this._isRouterView,
		        _context: this.vm
		      }, this.Ctor)
		      if (this.keepAlive) {
		        this.cache[this.ctorId] = child
		      }
		      return child
		    }
		  },

		  /**
		   * Teardown the current child, but defers cleanup so
		   * that we can separate the destroy and removal steps.
		   */

		  unbuild: function () {
		    var child = this.childVM
		    if (!child || this.keepAlive) {
		      return
		    }
		    // the sole purpose of `deferCleanup` is so that we can
		    // "deactivate" the vm right now and perform DOM removal
		    // later.
		    child.$destroy(false, true)
		  },

		  /**
		   * Remove current destroyed child and manually do
		   * the cleanup after removal.
		   *
		   * @param {Function} cb
		   */

		  remove: function (child, cb) {
		    var keepAlive = this.keepAlive
		    if (child) {
		      child.$remove(function () {
		        if (!keepAlive) child._cleanup()
		        if (cb) cb()
		      })
		    } else if (cb) {
		      cb()
		    }
		  },

		  /**
		   * Actually swap the components, depending on the
		   * transition mode. Defaults to simultaneous.
		   *
		   * @param {Vue} target
		   * @param {Function} [cb]
		   */

		  transition: function (target, cb) {
		    var self = this
		    var current = this.childVM
		    this.unsetCurrent()
		    this.setCurrent(target)
		    switch (self.transMode) {
		      case 'in-out':
		        target.$before(self.anchor, function () {
		          self.remove(current, cb)
		        })
		        break
		      case 'out-in':
		        self.remove(current, function () {
		          if (!target._isDestroyed) {
		            target.$before(self.anchor, cb)
		          }
		        })
		        break
		      default:
		        self.remove(current)
		        target.$before(self.anchor, cb)
		    }
		  },

		  /**
		   * Set childVM and parent ref
		   */

		  setCurrent: function (child) {
		    this.childVM = child
		    var refID = child._refID || this.refID
		    if (refID) {
		      this.vm.$[refID] = child
		    }
		  },

		  /**
		   * Unset childVM and parent ref
		   */

		  unsetCurrent: function () {
		    var child = this.childVM
		    this.childVM = null
		    var refID = (child && child._refID) || this.refID
		    if (refID) {
		      this.vm.$[refID] = null
		    }
		  },

		  /**
		   * Unbind.
		   */

		  unbind: function () {
		    this.invalidatePending()
		    this.unbuild()
		    this.unsetCurrent()
		    // destroy all keep-alive cached instances
		    if (this.cache) {
		      for (var key in this.cache) {
		        this.cache[key].$destroy()
		      }
		      this.cache = null
		    }
		  }
		}


	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(3)
		var templateParser = __webpack_require__(12)

		/**
		 * Process an element or a DocumentFragment based on a
		 * instance option object. This allows us to transclude
		 * a template node/fragment before the instance is created,
		 * so the processed fragment can then be cloned and reused
		 * in v-repeat.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Element|DocumentFragment}
		 */

		exports.transclude = function (el, options) {
		  // extract container attributes to pass them down
		  // to compiler, because they need to be compiled in
		  // parent scope. we are mutating the options object here
		  // assuming the same object will be used for compile
		  // right after this.
		  if (options) {
		    options._containerAttrs = extractAttrs(el)
		  }
		  // for template tags, what we want is its content as
		  // a documentFragment (for block instances)
		  if (_.isTemplate(el)) {
		    el = templateParser.parse(el)
		  }
		  if (options) {
		    if (options._asComponent && !options.template) {
		      options.template = '<content></content>'
		    }
		    if (options.template) {
		      options._content = _.extractContent(el)
		      el = transcludeTemplate(el, options)
		    }
		  }
		  if (el instanceof DocumentFragment) {
		    // anchors for block instance
		    // passing in `persist: true` to avoid them being
		    // discarded by IE during template cloning
		    _.prepend(_.createAnchor('v-start', true), el)
		    el.appendChild(_.createAnchor('v-end', true))
		  }
		  return el
		}

		/**
		 * Process the template option.
		 * If the replace option is true this will swap the $el.
		 *
		 * @param {Element} el
		 * @param {Object} options
		 * @return {Element|DocumentFragment}
		 */

		function transcludeTemplate (el, options) {
		  var template = options.template
		  var frag = templateParser.parse(template, true)
		  if (!frag) {
		    _.warn('Invalid template option: ' + template)
		  } else {
		    var replacer = frag.firstChild
		    var tag = replacer.tagName && replacer.tagName.toLowerCase()
		    if (options.replace) {
		      if (
		        // multi-children template
		        frag.childNodes.length > 1 ||
		        // non-element template
		        replacer.nodeType !== 1 ||
		        // when root node is <component>, is an element
		        // directive, or has v-repeat, the instance could
		        // end up having multiple top-level nodes, thus
		        // becoming a block instance.
		        tag === 'component' ||
		        _.resolveAsset(options, 'elementDirectives', tag) ||
		        replacer.hasAttribute(config.prefix + 'repeat')
		      ) {
		        return frag
		      } else {
		        options._replacerAttrs = extractAttrs(replacer)
		        mergeAttrs(el, replacer)
		        return replacer
		      }
		    } else {
		      el.appendChild(frag)
		      return el
		    }
		  }
		}

		/**
		 * Helper to extract a component container's attribute names
		 * into a map.
		 *
		 * @param {Element} el
		 * @return {Object}
		 */

		function extractAttrs (el) {
		  if (el.nodeType === 1 && el.hasAttributes()) {
		    var attrs = el.attributes
		    var res = {}
		    var i = attrs.length
		    while (i--) {
		      res[attrs[i].name] = attrs[i].value
		    }
		    return res
		  }
		}

		/**
		 * Merge the attributes of two elements, and make sure
		 * the class names are merged properly.
		 *
		 * @param {Element} from
		 * @param {Element} to
		 */

		function mergeAttrs (from, to) {
		  var attrs = from.attributes
		  var i = attrs.length
		  var name, value
		  while (i--) {
		    name = attrs[i].name
		    value = attrs[i].value
		    if (!to.hasAttribute(name)) {
		      to.setAttribute(name, value)
		    } else if (name === 'class') {
		      to.className = to.className + ' ' + value
		    }
		  }
		}


	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		// manipulation directives
		exports.text = __webpack_require__(29)
		exports.html = __webpack_require__(30)
		exports.attr = __webpack_require__(31)
		exports.show = __webpack_require__(32)
		exports['class'] = __webpack_require__(34)
		exports.el = __webpack_require__(35)
		exports.ref = __webpack_require__(36)
		exports.cloak = __webpack_require__(37)
		exports.style = __webpack_require__(28)
		exports.transition = __webpack_require__(38)

		// event listener directives
		exports.on = __webpack_require__(41)
		exports.model = __webpack_require__(42)

		// logic control directives
		exports.repeat = __webpack_require__(47)
		exports['if'] = __webpack_require__(48)

		// internal directives that should not be used directly
		// but we still want to expose them for advanced usage.
		exports._component = __webpack_require__(25)
		exports._prop = __webpack_require__(16)


	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var prefixes = ['-webkit-', '-moz-', '-ms-']
		var camelPrefixes = ['Webkit', 'Moz', 'ms']
		var importantRE = /!important;?$/
		var camelRE = /([a-z])([A-Z])/g
		var testEl = null
		var propCache = {}

		module.exports = {

		  deep: true,

		  update: function (value) {
		    if (this.arg) {
		      this.setProp(this.arg, value)
		    } else {
		      if (typeof value === 'object') {
		        this.objectHandler(value)
		      } else {
		        this.el.style.cssText = value
		      }
		    }
		  },

		  objectHandler: function (value) {
		    // cache object styles so that only changed props
		    // are actually updated.
		    var cache = this.cache || (this.cache = {})
		    var prop, val
		    for (prop in cache) {
		      if (!(prop in value)) {
		        this.setProp(prop, null)
		        delete cache[prop]
		      }
		    }
		    for (prop in value) {
		      val = value[prop]
		      if (val !== cache[prop]) {
		        cache[prop] = val
		        this.setProp(prop, val)
		      }
		    }
		  },

		  setProp: function (prop, value) {
		    prop = normalize(prop)
		    if (!prop) return // unsupported prop
		    // cast possible numbers/booleans into strings
		    if (value != null) value += ''
		    if (value) {
		      var isImportant = importantRE.test(value)
		        ? 'important'
		        : ''
		      if (isImportant) {
		        value = value.replace(importantRE, '').trim()
		      }
		      this.el.style.setProperty(prop, value, isImportant)
		    } else {
		      this.el.style.removeProperty(prop)
		    }
		  }

		}

		/**
		 * Normalize a CSS property name.
		 * - cache result
		 * - auto prefix
		 * - camelCase -> dash-case
		 *
		 * @param {String} prop
		 * @return {String}
		 */

		function normalize (prop) {
		  if (propCache[prop]) {
		    return propCache[prop]
		  }
		  var res = prefix(prop)
		  propCache[prop] = propCache[res] = res
		  return res
		}

		/**
		 * Auto detect the appropriate prefix for a CSS property.
		 * https://gist.github.com/paulirish/523692
		 *
		 * @param {String} prop
		 * @return {String}
		 */

		function prefix (prop) {
		  prop = prop.replace(camelRE, '$1-$2').toLowerCase()
		  var camel = _.camelize(prop)
		  var upper = camel.charAt(0).toUpperCase() + camel.slice(1)
		  if (!testEl) {
		    testEl = document.createElement('div')
		  }
		  if (camel in testEl.style) {
		    return prop
		  }
		  var i = prefixes.length
		  var prefixed
		  while (i--) {
		    prefixed = camelPrefixes[i] + upper
		    if (prefixed in testEl.style) {
		      return prefixes[i] + prop
		    }
		  }
		}


	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  bind: function () {
		    this.attr = this.el.nodeType === 3
		      ? 'nodeValue'
		      : 'textContent'
		  },

		  update: function (value) {
		    this.el[this.attr] = _.toString(value)
		  }
		}


	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var templateParser = __webpack_require__(12)

		module.exports = {

		  bind: function () {
		    // a comment node means this is a binding for
		    // {{{ inline unescaped html }}}
		    if (this.el.nodeType === 8) {
		      // hold nodes
		      this.nodes = []
		      // replace the placeholder with proper anchor
		      this.anchor = _.createAnchor('v-html')
		      _.replace(this.el, this.anchor)
		    }
		  },

		  update: function (value) {
		    value = _.toString(value)
		    if (this.nodes) {
		      this.swap(value)
		    } else {
		      this.el.innerHTML = value
		    }
		  },

		  swap: function (value) {
		    // remove old nodes
		    var i = this.nodes.length
		    while (i--) {
		      _.remove(this.nodes[i])
		    }
		    // convert new value to a fragment
		    // do not attempt to retrieve from id selector
		    var frag = templateParser.parse(value, true, true)
		    // save a reference to these nodes so we can remove later
		    this.nodes = _.toArray(frag.childNodes)
		    _.before(frag, this.anchor)
		  }
		}


	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		// xlink
		var xlinkNS = 'http://www.w3.org/1999/xlink'
		var xlinkRE = /^xlink:/

		module.exports = {

		  priority: 850,

		  update: function (value) {
		    if (this.arg) {
		      this.setAttr(this.arg, value)
		    } else if (typeof value === 'object') {
		      this.objectHandler(value)
		    }
		  },

		  objectHandler: function (value) {
		    // cache object attrs so that only changed attrs
		    // are actually updated.
		    var cache = this.cache || (this.cache = {})
		    var attr, val
		    for (attr in cache) {
		      if (!(attr in value)) {
		        this.setAttr(attr, null)
		        delete cache[attr]
		      }
		    }
		    for (attr in value) {
		      val = value[attr]
		      if (val !== cache[attr]) {
		        cache[attr] = val
		        this.setAttr(attr, val)
		      }
		    }
		  },

		  setAttr: function (attr, value) {
		    if (value || value === 0) {
		      if (xlinkRE.test(attr)) {
		        this.el.setAttributeNS(xlinkNS, attr, value)
		      } else {
		        this.el.setAttribute(attr, value)
		      }
		    } else {
		      this.el.removeAttribute(attr)
		    }
		  }

		}


	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		var transition = __webpack_require__(33)

		module.exports = function (value) {
		  var el = this.el
		  transition.apply(el, value ? 1 : -1, function () {
		    el.style.display = value ? '' : 'none'
		  }, this.vm)
		}


	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Append with transition.
		 *
		 * @oaram {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.append = function (el, target, vm, cb) {
		  apply(el, 1, function () {
		    target.appendChild(el)
		  }, vm, cb)
		}

		/**
		 * InsertBefore with transition.
		 *
		 * @oaram {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.before = function (el, target, vm, cb) {
		  apply(el, 1, function () {
		    _.before(el, target)
		  }, vm, cb)
		}

		/**
		 * Remove with transition.
		 *
		 * @oaram {Element} el
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.remove = function (el, vm, cb) {
		  apply(el, -1, function () {
		    _.remove(el)
		  }, vm, cb)
		}

		/**
		 * Remove by appending to another parent with transition.
		 * This is only used in block operations.
		 *
		 * @oaram {Element} el
		 * @param {Element} target
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		exports.removeThenAppend = function (el, target, vm, cb) {
		  apply(el, -1, function () {
		    target.appendChild(el)
		  }, vm, cb)
		}

		/**
		 * Append the childNodes of a fragment to target.
		 *
		 * @param {DocumentFragment} block
		 * @param {Node} target
		 * @param {Vue} vm
		 */

		exports.blockAppend = function (block, target, vm) {
		  var nodes = _.toArray(block.childNodes)
		  for (var i = 0, l = nodes.length; i < l; i++) {
		    exports.before(nodes[i], target, vm)
		  }
		}

		/**
		 * Remove a block of nodes between two edge nodes.
		 *
		 * @param {Node} start
		 * @param {Node} end
		 * @param {Vue} vm
		 */

		exports.blockRemove = function (start, end, vm) {
		  var node = start.nextSibling
		  var next
		  while (node !== end) {
		    next = node.nextSibling
		    exports.remove(node, vm)
		    node = next
		  }
		}

		/**
		 * Apply transitions with an operation callback.
		 *
		 * @oaram {Element} el
		 * @param {Number} direction
		 *                  1: enter
		 *                 -1: leave
		 * @param {Function} op - the actual DOM operation
		 * @param {Vue} vm
		 * @param {Function} [cb]
		 */

		var apply = exports.apply = function (el, direction, op, vm, cb) {
		  var transition = el.__v_trans
		  if (
		    !transition ||
		    // skip if there are no js hooks and CSS transition is
		    // not supported
		    (!transition.hooks && !_.transitionEndEvent) ||
		    // skip transitions for initial compile
		    !vm._isCompiled ||
		    // if the vm is being manipulated by a parent directive
		    // during the parent's compilation phase, skip the
		    // animation.
		    (vm.$parent && !vm.$parent._isCompiled)
		  ) {
		    op()
		    if (cb) cb()
		    return
		  }
		  var action = direction > 0 ? 'enter' : 'leave'
		  transition[action](op, cb)
		}


	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var addClass = _.addClass
		var removeClass = _.removeClass

		module.exports = {

		  update: function (value) {
		    if (this.arg) {
		      // single toggle
		      var method = value ? addClass : removeClass
		      method(this.el, this.arg)
		    } else {
		      this.cleanup()
		      if (value && typeof value === 'string') {
		        // raw class text
		        addClass(this.el, value)
		        this.lastVal = value
		      } else if (_.isPlainObject(value)) {
		        // object toggle
		        for (var key in value) {
		          if (value[key]) {
		            addClass(this.el, key)
		          } else {
		            removeClass(this.el, key)
		          }
		        }
		        this.prevKeys = Object.keys(value)
		      }
		    }
		  },

		  cleanup: function (value) {
		    if (this.lastVal) {
		      removeClass(this.el, this.lastVal)
		    }
		    if (this.prevKeys) {
		      var i = this.prevKeys.length
		      while (i--) {
		        if (!value || !value[this.prevKeys[i]]) {
		          removeClass(this.el, this.prevKeys[i])
		        }
		      }
		    }
		  }
		}


	/***/ },
	/* 35 */
	/***/ function(module, exports, __webpack_require__) {

		module.exports = {

		  isLiteral: true,

		  bind: function () {
		    this.vm.$$[this.expression] = this.el
		  },

		  unbind: function () {
		    delete this.vm.$$[this.expression]
		  }
		}


	/***/ },
	/* 36 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  isLiteral: true,

		  bind: function () {
		    var vm = this.el.__vue__
		    if (!vm) {
		      _.warn(
		        'v-ref should only be used on a component root element.'
		      )
		      return
		    }
		    // If we get here, it means this is a `v-ref` on a
		    // child, because parent scope `v-ref` is stripped in
		    // `v-component` already. So we just record our own ref
		    // here - it will overwrite parent ref in `v-component`,
		    // if any.
		    vm._refID = this.expression
		  }
		}


	/***/ },
	/* 37 */
	/***/ function(module, exports, __webpack_require__) {

		var config = __webpack_require__(3)

		module.exports = {
		  bind: function () {
		    var el = this.el
		    this.vm.$once('hook:compiled', function () {
		      el.removeAttribute(config.prefix + 'cloak')
		    })
		  }
		}


	/***/ },
	/* 38 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Transition = __webpack_require__(39)

		module.exports = {

		  priority: 1000,
		  isLiteral: true,

		  bind: function () {
		    if (!this._isDynamicLiteral) {
		      this.update(this.expression)
		    }
		  },

		  update: function (id, oldId) {
		    var el = this.el
		    var vm = this.el.__vue__ || this.vm
		    var hooks = _.resolveAsset(vm.$options, 'transitions', id)
		    id = id || 'v'
		    el.__v_trans = new Transition(el, id, hooks, vm)
		    if (oldId) {
		      _.removeClass(el, oldId + '-transition')
		    }
		    _.addClass(el, id + '-transition')
		  }
		}


	/***/ },
	/* 39 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var queue = __webpack_require__(40)
		var addClass = _.addClass
		var removeClass = _.removeClass
		var transitionEndEvent = _.transitionEndEvent
		var animationEndEvent = _.animationEndEvent
		var transDurationProp = _.transitionProp + 'Duration'
		var animDurationProp = _.animationProp + 'Duration'

		var TYPE_TRANSITION = 1
		var TYPE_ANIMATION = 2

		/**
		 * A Transition object that encapsulates the state and logic
		 * of the transition.
		 *
		 * @param {Element} el
		 * @param {String} id
		 * @param {Object} hooks
		 * @param {Vue} vm
		 */

		function Transition (el, id, hooks, vm) {
		  this.el = el
		  this.enterClass = id + '-enter'
		  this.leaveClass = id + '-leave'
		  this.hooks = hooks
		  this.vm = vm
		  // async state
		  this.pendingCssEvent =
		  this.pendingCssCb =
		  this.cancel =
		  this.pendingJsCb =
		  this.op =
		  this.cb = null
		  this.typeCache = {}
		  // bind
		  var self = this
		  ;['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone']
		    .forEach(function (m) {
		      self[m] = _.bind(self[m], self)
		    })
		}

		var p = Transition.prototype

		/**
		 * Start an entering transition.
		 *
		 * 1. enter transition triggered
		 * 2. call beforeEnter hook
		 * 3. add enter class
		 * 4. insert/show element
		 * 5. call enter hook (with possible explicit js callback)
		 * 6. reflow
		 * 7. based on transition type:
		 *    - transition:
		 *        remove class now, wait for transitionend,
		 *        then done if there's no explicit js callback.
		 *    - animation:
		 *        wait for animationend, remove class,
		 *        then done if there's no explicit js callback.
		 *    - no css transition:
		 *        done now if there's no explicit js callback.
		 * 8. wait for either done or js callback, then call
		 *    afterEnter hook.
		 *
		 * @param {Function} op - insert/show the element
		 * @param {Function} [cb]
		 */

		p.enter = function (op, cb) {
		  this.cancelPending()
		  this.callHook('beforeEnter')
		  this.cb = cb
		  addClass(this.el, this.enterClass)
		  op()
		  this.callHookWithCb('enter')
		  this.cancel = this.hooks && this.hooks.enterCancelled
		  queue.push(this.enterNextTick)
		}

		/**
		 * The "nextTick" phase of an entering transition, which is
		 * to be pushed into a queue and executed after a reflow so
		 * that removing the class can trigger a CSS transition.
		 */

		p.enterNextTick = function () {
		  var type = this.getCssTransitionType(this.enterClass)
		  var enterDone = this.enterDone
		  if (type === TYPE_TRANSITION) {
		    // trigger transition by removing enter class now
		    removeClass(this.el, this.enterClass)
		    this.setupCssCb(transitionEndEvent, enterDone)
		  } else if (type === TYPE_ANIMATION) {
		    this.setupCssCb(animationEndEvent, enterDone)
		  } else if (!this.pendingJsCb) {
		    enterDone()
		  }
		}

		/**
		 * The "cleanup" phase of an entering transition.
		 */

		p.enterDone = function () {
		  this.cancel = this.pendingJsCb = null
		  removeClass(this.el, this.enterClass)
		  this.callHook('afterEnter')
		  if (this.cb) this.cb()
		}

		/**
		 * Start a leaving transition.
		 *
		 * 1. leave transition triggered.
		 * 2. call beforeLeave hook
		 * 3. add leave class (trigger css transition)
		 * 4. call leave hook (with possible explicit js callback)
		 * 5. reflow if no explicit js callback is provided
		 * 6. based on transition type:
		 *    - transition or animation:
		 *        wait for end event, remove class, then done if
		 *        there's no explicit js callback.
		 *    - no css transition:
		 *        done if there's no explicit js callback.
		 * 7. wait for either done or js callback, then call
		 *    afterLeave hook.
		 *
		 * @param {Function} op - remove/hide the element
		 * @param {Function} [cb]
		 */

		p.leave = function (op, cb) {
		  this.cancelPending()
		  this.callHook('beforeLeave')
		  this.op = op
		  this.cb = cb
		  addClass(this.el, this.leaveClass)
		  this.callHookWithCb('leave')
		  this.cancel = this.hooks && this.hooks.enterCancelled
		  // only need to do leaveNextTick if there's no explicit
		  // js callback
		  if (!this.pendingJsCb) {
		    queue.push(this.leaveNextTick)
		  }
		}

		/**
		 * The "nextTick" phase of a leaving transition.
		 */

		p.leaveNextTick = function () {
		  var type = this.getCssTransitionType(this.leaveClass)
		  if (type) {
		    var event = type === TYPE_TRANSITION
		      ? transitionEndEvent
		      : animationEndEvent
		    this.setupCssCb(event, this.leaveDone)
		  } else {
		    this.leaveDone()
		  }
		}

		/**
		 * The "cleanup" phase of a leaving transition.
		 */

		p.leaveDone = function () {
		  this.cancel = this.pendingJsCb = null
		  this.op()
		  removeClass(this.el, this.leaveClass)
		  this.callHook('afterLeave')
		  if (this.cb) this.cb()
		}

		/**
		 * Cancel any pending callbacks from a previously running
		 * but not finished transition.
		 */

		p.cancelPending = function () {
		  this.op = this.cb = null
		  var hasPending = false
		  if (this.pendingCssCb) {
		    hasPending = true
		    _.off(this.el, this.pendingCssEvent, this.pendingCssCb)
		    this.pendingCssEvent = this.pendingCssCb = null
		  }
		  if (this.pendingJsCb) {
		    hasPending = true
		    this.pendingJsCb.cancel()
		    this.pendingJsCb = null
		  }
		  if (hasPending) {
		    removeClass(this.el, this.enterClass)
		    removeClass(this.el, this.leaveClass)
		  }
		  if (this.cancel) {
		    this.cancel.call(this.vm, this.el)
		    this.cancel = null
		  }
		}

		/**
		 * Call a user-provided synchronous hook function.
		 *
		 * @param {String} type
		 */

		p.callHook = function (type) {
		  if (this.hooks && this.hooks[type]) {
		    this.hooks[type].call(this.vm, this.el)
		  }
		}

		/**
		 * Call a user-provided, potentially-async hook function.
		 * We check for the length of arguments to see if the hook
		 * expects a `done` callback. If true, the transition's end
		 * will be determined by when the user calls that callback;
		 * otherwise, the end is determined by the CSS transition or
		 * animation.
		 *
		 * @param {String} type
		 */

		p.callHookWithCb = function (type) {
		  var hook = this.hooks && this.hooks[type]
		  if (hook) {
		    if (hook.length > 1) {
		      this.pendingJsCb = _.cancellable(this[type + 'Done'])
		    }
		    hook.call(this.vm, this.el, this.pendingJsCb)
		  }
		}

		/**
		 * Get an element's transition type based on the
		 * calculated styles.
		 *
		 * @param {String} className
		 * @return {Number}
		 */

		p.getCssTransitionType = function (className) {
		  /* istanbul ignore if */
		  if (
		    !transitionEndEvent ||
		    // skip CSS transitions if page is not visible -
		    // this solves the issue of transitionend events not
		    // firing until the page is visible again.
		    // pageVisibility API is supported in IE10+, same as
		    // CSS transitions.
		    document.hidden ||
		    // explicit js-only transition
		    (this.hooks && this.hooks.css === false)
		  ) {
		    return
		  }
		  var type = this.typeCache[className]
		  if (type) return type
		  var inlineStyles = this.el.style
		  var computedStyles = window.getComputedStyle(this.el)
		  var transDuration =
		    inlineStyles[transDurationProp] ||
		    computedStyles[transDurationProp]
		  if (transDuration && transDuration !== '0s') {
		    type = TYPE_TRANSITION
		  } else {
		    var animDuration =
		      inlineStyles[animDurationProp] ||
		      computedStyles[animDurationProp]
		    if (animDuration && animDuration !== '0s') {
		      type = TYPE_ANIMATION
		    }
		  }
		  if (type) {
		    this.typeCache[className] = type
		  }
		  return type
		}

		/**
		 * Setup a CSS transitionend/animationend callback.
		 *
		 * @param {String} event
		 * @param {Function} cb
		 */

		p.setupCssCb = function (event, cb) {
		  this.pendingCssEvent = event
		  var self = this
		  var el = this.el
		  var onEnd = this.pendingCssCb = function (e) {
		    if (e.target === el) {
		      _.off(el, event, onEnd)
		      self.pendingCssEvent = self.pendingCssCb = null
		      if (!self.pendingJsCb && cb) {
		        cb()
		      }
		    }
		  }
		  _.on(el, event, onEnd)
		}

		module.exports = Transition


	/***/ },
	/* 40 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var queue = []
		var queued = false

		/**
		 * Push a job into the queue.
		 *
		 * @param {Function} job
		 */

		exports.push = function (job) {
		  queue.push(job)
		  if (!queued) {
		    queued = true
		    _.nextTick(flush)
		  }
		}

		/**
		 * Flush the queue, and do one forced reflow before
		 * triggering transitions.
		 */

		function flush () {
		  // Force layout
		  var f = document.documentElement.offsetHeight
		  for (var i = 0; i < queue.length; i++) {
		    queue[i]()
		  }
		  queue = []
		  queued = false
		  // dummy return, so js linters don't complain about
		  // unused variable f
		  return f
		}


	/***/ },
	/* 41 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  acceptStatement: true,
		  priority: 700,

		  bind: function () {
		    // deal with iframes
		    if (
		      this.el.tagName === 'IFRAME' &&
		      this.arg !== 'load'
		    ) {
		      var self = this
		      this.iframeBind = function () {
		        _.on(self.el.contentWindow, self.arg, self.handler)
		      }
		      _.on(this.el, 'load', this.iframeBind)
		    }
		  },

		  update: function (handler) {
		    if (typeof handler !== 'function') {
		      _.warn(
		        'Directive "v-on:' + this.expression + '" ' +
		        'expects a function value.'
		      )
		      return
		    }
		    this.reset()
		    var vm = this.vm
		    this.handler = function (e) {
		      e.targetVM = vm
		      vm.$event = e
		      var res = handler(e)
		      vm.$event = null
		      return res
		    }
		    if (this.iframeBind) {
		      this.iframeBind()
		    } else {
		      _.on(this.el, this.arg, this.handler)
		    }
		  },

		  reset: function () {
		    var el = this.iframeBind
		      ? this.el.contentWindow
		      : this.el
		    if (this.handler) {
		      _.off(el, this.arg, this.handler)
		    }
		  },

		  unbind: function () {
		    this.reset()
		    _.off(this.el, 'load', this.iframeBind)
		  }
		}


	/***/ },
	/* 42 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		var handlers = {
		  text: __webpack_require__(43),
		  radio: __webpack_require__(44),
		  select: __webpack_require__(45),
		  checkbox: __webpack_require__(46)
		}

		module.exports = {

		  priority: 800,
		  twoWay: true,
		  handlers: handlers,

		  /**
		   * Possible elements:
		   *   <select>
		   *   <textarea>
		   *   <input type="*">
		   *     - text
		   *     - checkbox
		   *     - radio
		   *     - number
		   *     - TODO: more types may be supplied as a plugin
		   */

		  bind: function () {
		    // friendly warning...
		    this.checkFilters()
		    if (this.hasRead && !this.hasWrite) {
		      _.warn(
		        'It seems you are using a read-only filter with ' +
		        'v-model. You might want to use a two-way filter ' +
		        'to ensure correct behavior.'
		      )
		    }
		    var el = this.el
		    var tag = el.tagName
		    var handler
		    if (tag === 'INPUT') {
		      handler = handlers[el.type] || handlers.text
		    } else if (tag === 'SELECT') {
		      handler = handlers.select
		    } else if (tag === 'TEXTAREA') {
		      handler = handlers.text
		    } else {
		      _.warn('v-model does not support element type: ' + tag)
		      return
		    }
		    handler.bind.call(this)
		    this.update = handler.update
		    this.unbind = handler.unbind
		  },

		  /**
		   * Check read/write filter stats.
		   */

		  checkFilters: function () {
		    var filters = this.filters
		    if (!filters) return
		    var i = filters.length
		    while (i--) {
		      var filter = _.resolveAsset(this.vm.$options, 'filters', filters[i].name)
		      if (typeof filter === 'function' || filter.read) {
		        this.hasRead = true
		      }
		      if (filter.write) {
		        this.hasWrite = true
		      }
		    }
		  }
		}


	/***/ },
	/* 43 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el

		    // check params
		    // - lazy: update model on "change" instead of "input"
		    var lazy = this._checkParam('lazy') != null
		    // - number: cast value into number when updating model.
		    var number = this._checkParam('number') != null
		    // - debounce: debounce the input listener
		    var debounce = parseInt(this._checkParam('debounce'), 10)

		    // handle composition events.
		    //   http://blog.evanyou.me/2014/01/03/composition-event/
		    // skip this for Android because it handles composition
		    // events quite differently. Android doesn't trigger
		    // composition events for language input methods e.g.
		    // Chinese, but instead triggers them for spelling
		    // suggestions... (see Discussion/#162)
		    var composing = false
		    if (!_.isAndroid) {
		      this.onComposeStart = function () {
		        composing = true
		      }
		      this.onComposeEnd = function () {
		        composing = false
		        // in IE11 the "compositionend" event fires AFTER
		        // the "input" event, so the input handler is blocked
		        // at the end... have to call it here.
		        self.listener()
		      }
		      _.on(el, 'compositionstart', this.onComposeStart)
		      _.on(el, 'compositionend', this.onComposeEnd)
		    }

		    function syncToModel () {
		      var val = number
		        ? _.toNumber(el.value)
		        : el.value
		      self.set(val)
		    }

		    // if the directive has filters, we need to
		    // record cursor position and restore it after updating
		    // the input with the filtered value.
		    // also force update for type="range" inputs to enable
		    // "lock in range" (see #506)
		    if (this.hasRead || el.type === 'range') {
		      this.listener = function () {
		        if (composing) return
		        var charsOffset
		        // some HTML5 input types throw error here
		        try {
		          // record how many chars from the end of input
		          // the cursor was at
		          charsOffset = el.value.length - el.selectionStart
		        } catch (e) {}
		        // Fix IE10/11 infinite update cycle
		        // https://github.com/yyx990803/vue/issues/592
		        /* istanbul ignore if */
		        if (charsOffset < 0) {
		          return
		        }
		        syncToModel()
		        _.nextTick(function () {
		          // force a value update, because in
		          // certain cases the write filters output the
		          // same result for different input values, and
		          // the Observer set events won't be triggered.
		          var newVal = self._watcher.value
		          self.update(newVal)
		          if (charsOffset != null) {
		            var cursorPos =
		              _.toString(newVal).length - charsOffset
		            el.setSelectionRange(cursorPos, cursorPos)
		          }
		        })
		      }
		    } else {
		      this.listener = function () {
		        if (composing) return
		        syncToModel()
		      }
		    }

		    if (debounce) {
		      this.listener = _.debounce(this.listener, debounce)
		    }

		    // Now attach the main listener

		    this.event = lazy ? 'change' : 'input'
		    // Support jQuery events, since jQuery.trigger() doesn't
		    // trigger native events in some cases and some plugins
		    // rely on $.trigger()
		    //
		    // We want to make sure if a listener is attached using
		    // jQuery, it is also removed with jQuery, that's why
		    // we do the check for each directive instance and
		    // store that check result on itself. This also allows
		    // easier test coverage control by unsetting the global
		    // jQuery variable in tests.
		    this.hasjQuery = typeof jQuery === 'function'
		    if (this.hasjQuery) {
		      jQuery(el).on(this.event, this.listener)
		    } else {
		      _.on(el, this.event, this.listener)
		    }

		    // IE9 doesn't fire input event on backspace/del/cut
		    if (!lazy && _.isIE9) {
		      this.onCut = function () {
		        _.nextTick(self.listener)
		      }
		      this.onDel = function (e) {
		        if (e.keyCode === 46 || e.keyCode === 8) {
		          self.listener()
		        }
		      }
		      _.on(el, 'cut', this.onCut)
		      _.on(el, 'keyup', this.onDel)
		    }

		    // set initial value if present
		    if (
		      el.hasAttribute('value') ||
		      (el.tagName === 'TEXTAREA' && el.value.trim())
		    ) {
		      this._initValue = number
		        ? _.toNumber(el.value)
		        : el.value
		    }
		  },

		  update: function (value) {
		    this.el.value = _.toString(value)
		  },

		  unbind: function () {
		    var el = this.el
		    if (this.hasjQuery) {
		      jQuery(el).off(this.event, this.listener)
		    } else {
		      _.off(el, this.event, this.listener)
		    }
		    if (this.onComposeStart) {
		      _.off(el, 'compositionstart', this.onComposeStart)
		      _.off(el, 'compositionend', this.onComposeEnd)
		    }
		    if (this.onCut) {
		      _.off(el, 'cut', this.onCut)
		      _.off(el, 'keyup', this.onDel)
		    }
		  }
		}


	/***/ },
	/* 44 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el
		    this.listener = function () {
		      self.set(el.value)
		    }
		    _.on(el, 'change', this.listener)
		    if (el.checked) {
		      this._initValue = el.value
		    }
		  },

		  update: function (value) {
		    /* eslint-disable eqeqeq */
		    this.el.checked = value == this.el.value
		    /* eslint-enable eqeqeq */
		  },

		  unbind: function () {
		    _.off(this.el, 'change', this.listener)
		  }
		}


	/***/ },
	/* 45 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Watcher = __webpack_require__(17)
		var dirParser = __webpack_require__(15)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el
		    // check options param
		    var optionsParam = this._checkParam('options')
		    if (optionsParam) {
		      initOptions.call(this, optionsParam)
		    }
		    this.number = this._checkParam('number') != null
		    this.multiple = el.hasAttribute('multiple')
		    this.listener = function () {
		      var value = self.multiple
		        ? getMultiValue(el)
		        : el.value
		      value = self.number
		        ? _.isArray(value)
		          ? value.map(_.toNumber)
		          : _.toNumber(value)
		        : value
		      self.set(value)
		    }
		    _.on(el, 'change', this.listener)
		    checkInitialValue.call(this)
		  },

		  update: function (value) {
		    var el = this.el
		    el.selectedIndex = -1
		    var multi = this.multiple && _.isArray(value)
		    var options = el.options
		    var i = options.length
		    var option
		    while (i--) {
		      option = options[i]
		      /* eslint-disable eqeqeq */
		      option.selected = multi
		        ? indexOf(value, option.value) > -1
		        : value == option.value
		      /* eslint-enable eqeqeq */
		    }
		  },

		  unbind: function () {
		    _.off(this.el, 'change', this.listener)
		    if (this.optionWatcher) {
		      this.optionWatcher.teardown()
		    }
		  }

		}

		/**
		 * Initialize the option list from the param.
		 *
		 * @param {String} expression
		 */

		function initOptions (expression) {
		  var self = this
		  var descriptor = dirParser.parse(expression)[0]
		  function optionUpdateWatcher (value) {
		    if (_.isArray(value)) {
		      self.el.innerHTML = ''
		      buildOptions(self.el, value)
		      if (self._watcher) {
		        self.update(self._watcher.value)
		      }
		    } else {
		      _.warn('Invalid options value for v-model: ' + value)
		    }
		  }
		  this.optionWatcher = new Watcher(
		    this.vm,
		    descriptor.expression,
		    optionUpdateWatcher,
		    {
		      deep: true,
		      filters: descriptor.filters
		    }
		  )
		  // update with initial value
		  optionUpdateWatcher(this.optionWatcher.value)
		}

		/**
		 * Build up option elements. IE9 doesn't create options
		 * when setting innerHTML on <select> elements, so we have
		 * to use DOM API here.
		 *
		 * @param {Element} parent - a <select> or an <optgroup>
		 * @param {Array} options
		 */

		function buildOptions (parent, options) {
		  var op, el
		  for (var i = 0, l = options.length; i < l; i++) {
		    op = options[i]
		    if (!op.options) {
		      el = document.createElement('option')
		      if (typeof op === 'string') {
		        el.text = el.value = op
		      } else {
		        if (op.value != null) {
		          el.value = op.value
		        }
		        el.text = op.text || op.value || ''
		        if (op.disabled) {
		          el.disabled = true
		        }
		      }
		    } else {
		      el = document.createElement('optgroup')
		      el.label = op.label
		      buildOptions(el, op.options)
		    }
		    parent.appendChild(el)
		  }
		}

		/**
		 * Check the initial value for selected options.
		 */

		function checkInitialValue () {
		  var initValue
		  var options = this.el.options
		  for (var i = 0, l = options.length; i < l; i++) {
		    if (options[i].hasAttribute('selected')) {
		      if (this.multiple) {
		        (initValue || (initValue = []))
		          .push(options[i].value)
		      } else {
		        initValue = options[i].value
		      }
		    }
		  }
		  if (typeof initValue !== 'undefined') {
		    this._initValue = this.number
		      ? _.toNumber(initValue)
		      : initValue
		  }
		}

		/**
		 * Helper to extract a value array for select[multiple]
		 *
		 * @param {SelectElement} el
		 * @return {Array}
		 */

		function getMultiValue (el) {
		  return Array.prototype.filter
		    .call(el.options, filterSelected)
		    .map(getOptionValue)
		}

		function filterSelected (op) {
		  return op.selected
		}

		function getOptionValue (op) {
		  return op.value || op.text
		}

		/**
		 * Native Array.indexOf uses strict equal, but in this
		 * case we need to match string/numbers with soft equal.
		 *
		 * @param {Array} arr
		 * @param {*} val
		 */

		function indexOf (arr, val) {
		  var i = arr.length
		  while (i--) {
		    /* eslint-disable eqeqeq */
		    if (arr[i] == val) return i
		    /* eslint-enable eqeqeq */
		  }
		  return -1
		}


	/***/ },
	/* 46 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		module.exports = {

		  bind: function () {
		    var self = this
		    var el = this.el
		    this.listener = function () {
		      self.set(el.checked)
		    }
		    _.on(el, 'change', this.listener)
		    if (el.checked) {
		      this._initValue = el.checked
		    }
		  },

		  update: function (value) {
		    this.el.checked = !!value
		  },

		  unbind: function () {
		    _.off(this.el, 'change', this.listener)
		  }
		}


	/***/ },
	/* 47 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var isObject = _.isObject
		var isPlainObject = _.isPlainObject
		var textParser = __webpack_require__(14)
		var expParser = __webpack_require__(22)
		var templateParser = __webpack_require__(12)
		var compiler = __webpack_require__(10)
		var uid = 0

		// async component resolution states
		var UNRESOLVED = 0
		var PENDING = 1
		var RESOLVED = 2
		var ABORTED = 3

		module.exports = {

		  /**
		   * Setup.
		   */

		  bind: function () {
		    // uid as a cache identifier
		    this.id = '__v_repeat_' + (++uid)
		    // setup anchor nodes
		    this.start = _.createAnchor('v-repeat-start')
		    this.end = _.createAnchor('v-repeat-end')
		    _.replace(this.el, this.end)
		    _.before(this.start, this.end)
		    // check if this is a block repeat
		    this.template = _.isTemplate(this.el)
		      ? templateParser.parse(this.el, true)
		      : this.el
		    // check other directives that need to be handled
		    // at v-repeat level
		    this.checkIf()
		    this.checkRef()
		    this.checkComponent()
		    // check for trackby param
		    this.idKey =
		      this._checkParam('track-by') ||
		      this._checkParam('trackby') // 0.11.0 compat
		    // check for transition stagger
		    var stagger = +this._checkParam('stagger')
		    this.enterStagger = +this._checkParam('enter-stagger') || stagger
		    this.leaveStagger = +this._checkParam('leave-stagger') || stagger
		    this.cache = Object.create(null)
		  },

		  /**
		   * Warn against v-if usage.
		   */

		  checkIf: function () {
		    if (_.attr(this.el, 'if') !== null) {
		      _.warn(
		        'Don\'t use v-if with v-repeat. ' +
		        'Use v-show or the "filterBy" filter instead.'
		      )
		    }
		  },

		  /**
		   * Check if v-ref/ v-el is also present.
		   */

		  checkRef: function () {
		    var refID = _.attr(this.el, 'ref')
		    this.refID = refID
		      ? this.vm.$interpolate(refID)
		      : null
		    var elId = _.attr(this.el, 'el')
		    this.elId = elId
		      ? this.vm.$interpolate(elId)
		      : null
		  },

		  /**
		   * Check the component constructor to use for repeated
		   * instances. If static we resolve it now, otherwise it
		   * needs to be resolved at build time with actual data.
		   */

		  checkComponent: function () {
		    this.componentState = UNRESOLVED
		    var options = this.vm.$options
		    var id = _.checkComponent(this.el, options)
		    if (!id) {
		      // default constructor
		      this.Ctor = _.Vue
		      // inline repeats should inherit
		      this.inherit = true
		      // important: transclude with no options, just
		      // to ensure block start and block end
		      this.template = compiler.transclude(this.template)
		      var copy = _.extend({}, options)
		      copy._asComponent = false
		      this._linkFn = compiler.compile(this.template, copy)
		    } else {
		      this.Ctor = null
		      this.asComponent = true
		      // check inline-template
		      if (this._checkParam('inline-template') !== null) {
		        // extract inline template as a DocumentFragment
		        this.inlineTemplate = _.extractContent(this.el, true)
		      }
		      var tokens = textParser.parse(id)
		      if (tokens) {
		        // dynamic component to be resolved later
		        var ctorExp = textParser.tokensToExp(tokens)
		        this.ctorGetter = expParser.parse(ctorExp).get
		      } else {
		        // static
		        this.componentId = id
		        this.pendingData = null
		      }
		    }
		  },

		  resolveComponent: function () {
		    this.componentState = PENDING
		    this.vm._resolveComponent(this.componentId, _.bind(function (Ctor) {
		      if (this.componentState === ABORTED) {
		        return
		      }
		      this.Ctor = Ctor
		      this.componentState = RESOLVED
		      this.realUpdate(this.pendingData)
		      this.pendingData = null
		    }, this))
		  },

		    /**
		   * Resolve a dynamic component to use for an instance.
		   * The tricky part here is that there could be dynamic
		   * components depending on instance data.
		   *
		   * @param {Object} data
		   * @param {Object} meta
		   * @return {Function}
		   */

		  resolveDynamicComponent: function (data, meta) {
		    // create a temporary context object and copy data
		    // and meta properties onto it.
		    // use _.define to avoid accidentally overwriting scope
		    // properties.
		    var context = Object.create(this.vm)
		    var key
		    for (key in data) {
		      _.define(context, key, data[key])
		    }
		    for (key in meta) {
		      _.define(context, key, meta[key])
		    }
		    var id = this.ctorGetter.call(context, context)
		    var Ctor = _.resolveAsset(this.vm.$options, 'components', id)
		    _.assertAsset(Ctor, 'component', id)
		    if (!Ctor.options) {
		      _.warn(
		        'Async resolution is not supported for v-repeat ' +
		        '+ dynamic component. (component: ' + id + ')'
		      )
		      return _.Vue
		    }
		    return Ctor
		  },

		  /**
		   * Update.
		   * This is called whenever the Array mutates. If we have
		   * a component, we might need to wait for it to resolve
		   * asynchronously.
		   *
		   * @param {Array|Number|String} data
		   */

		  update: function (data) {
		    if (this.componentId) {
		      var state = this.componentState
		      if (state === UNRESOLVED) {
		        this.pendingData = data
		        // once resolved, it will call realUpdate
		        this.resolveComponent()
		      } else if (state === PENDING) {
		        this.pendingData = data
		      } else if (state === RESOLVED) {
		        this.realUpdate(data)
		      }
		    } else {
		      this.realUpdate(data)
		    }
		  },

		  /**
		   * The real update that actually modifies the DOM.
		   *
		   * @param {Array|Number|String} data
		   */

		  realUpdate: function (data) {
		    this.vms = this.diff(data, this.vms)
		    // update v-ref
		    if (this.refID) {
		      this.vm.$[this.refID] = this.converted
		        ? toRefObject(this.vms)
		        : this.vms
		    }
		    if (this.elId) {
		      this.vm.$$[this.elId] = this.vms.map(function (vm) {
		        return vm.$el
		      })
		    }
		  },

		  /**
		   * Diff, based on new data and old data, determine the
		   * minimum amount of DOM manipulations needed to make the
		   * DOM reflect the new data Array.
		   *
		   * The algorithm diffs the new data Array by storing a
		   * hidden reference to an owner vm instance on previously
		   * seen data. This allows us to achieve O(n) which is
		   * better than a levenshtein distance based algorithm,
		   * which is O(m * n).
		   *
		   * @param {Array} data
		   * @param {Array} oldVms
		   * @return {Array}
		   */

		  diff: function (data, oldVms) {
		    var idKey = this.idKey
		    var converted = this.converted
		    var start = this.start
		    var end = this.end
		    var inDoc = _.inDoc(start)
		    var alias = this.arg
		    var init = !oldVms
		    var vms = new Array(data.length)
		    var obj, raw, vm, i, l, primitive
		    // First pass, go through the new Array and fill up
		    // the new vms array. If a piece of data has a cached
		    // instance for it, we reuse it. Otherwise build a new
		    // instance.
		    for (i = 0, l = data.length; i < l; i++) {
		      obj = data[i]
		      raw = converted ? obj.$value : obj
		      primitive = !isObject(raw)
		      vm = !init && this.getVm(raw, i, converted ? obj.$key : null)
		      if (vm) { // reusable instance
		        vm._reused = true
		        vm.$index = i // update $index
		        // update data for track-by or object repeat,
		        // since in these two cases the data is replaced
		        // rather than mutated.
		        if (idKey || converted || primitive) {
		          if (alias) {
		            vm[alias] = raw
		          } else if (_.isPlainObject(raw)) {
		            vm.$data = raw
		          } else {
		            vm.$value = raw
		          }
		        }
		      } else { // new instance
		        vm = this.build(obj, i, true)
		        vm._reused = false
		      }
		      vms[i] = vm
		      // insert if this is first run
		      if (init) {
		        vm.$before(end)
		      }
		    }
		    // if this is the first run, we're done.
		    if (init) {
		      return vms
		    }
		    // Second pass, go through the old vm instances and
		    // destroy those who are not reused (and remove them
		    // from cache)
		    var removalIndex = 0
		    var totalRemoved = oldVms.length - vms.length
		    for (i = 0, l = oldVms.length; i < l; i++) {
		      vm = oldVms[i]
		      if (!vm._reused) {
		        this.uncacheVm(vm)
		        vm.$destroy(false, true) // defer cleanup until removal
		        this.remove(vm, removalIndex++, totalRemoved, inDoc)
		      }
		    }
		    // final pass, move/insert new instances into the
		    // right place.
		    var targetPrev, prevEl, currentPrev
		    var insertionIndex = 0
		    for (i = 0, l = vms.length; i < l; i++) {
		      vm = vms[i]
		      // this is the vm that we should be after
		      targetPrev = vms[i - 1]
		      prevEl = targetPrev
		        ? targetPrev._staggerCb
		          ? targetPrev._staggerAnchor
		          : targetPrev._blockEnd || targetPrev.$el
		        : start
		      if (vm._reused && !vm._staggerCb) {
		        currentPrev = findPrevVm(vm, start, this.id)
		        if (currentPrev !== targetPrev) {
		          this.move(vm, prevEl)
		        }
		      } else {
		        // new instance, or still in stagger.
		        // insert with updated stagger index.
		        this.insert(vm, insertionIndex++, prevEl, inDoc)
		      }
		      vm._reused = false
		    }
		    return vms
		  },

		  /**
		   * Build a new instance and cache it.
		   *
		   * @param {Object} data
		   * @param {Number} index
		   * @param {Boolean} needCache
		   */

		  build: function (data, index, needCache) {
		    var meta = { $index: index }
		    if (this.converted) {
		      meta.$key = data.$key
		    }
		    var raw = this.converted ? data.$value : data
		    var alias = this.arg
		    if (alias) {
		      data = {}
		      data[alias] = raw
		    } else if (!isPlainObject(raw)) {
		      // non-object values
		      data = {}
		      meta.$value = raw
		    } else {
		      // default
		      data = raw
		    }
		    // resolve constructor
		    var Ctor = this.Ctor || this.resolveDynamicComponent(data, meta)
		    var parent = this._host || this.vm
		    var vm = parent.$addChild({
		      el: templateParser.clone(this.template),
		      data: data,
		      inherit: this.inherit,
		      template: this.inlineTemplate,
		      // repeater meta, e.g. $index, $key
		      _meta: meta,
		      // mark this as an inline-repeat instance
		      _repeat: this.inherit,
		      // is this a component?
		      _asComponent: this.asComponent,
		      // linker cachable if no inline-template
		      _linkerCachable: !this.inlineTemplate && Ctor !== _.Vue,
		      // pre-compiled linker for simple repeats
		      _linkFn: this._linkFn,
		      // identifier, shows that this vm belongs to this collection
		      _repeatId: this.id,
		      // transclusion content owner
		      _context: this.vm
		    }, Ctor)
		    // cache instance
		    if (needCache) {
		      this.cacheVm(raw, vm, index, this.converted ? meta.$key : null)
		    }
		    // sync back changes for two-way bindings of primitive values
		    var type = typeof raw
		    var dir = this
		    if (
		      this.rawType === 'object' &&
		      (type === 'string' || type === 'number')
		    ) {
		      vm.$watch(alias || '$value', function (val) {
		        if (dir.filters) {
		          _.warn(
		            'You seem to be mutating the $value reference of ' +
		            'a v-repeat instance (likely through v-model) ' +
		            'and filtering the v-repeat at the same time. ' +
		            'This will not work properly with an Array of ' +
		            'primitive values. Please use an Array of ' +
		            'Objects instead.'
		          )
		        }
		        dir._withLock(function () {
		          if (dir.converted) {
		            dir.rawValue[vm.$key] = val
		          } else {
		            dir.rawValue.$set(vm.$index, val)
		          }
		        })
		      })
		    }
		    return vm
		  },

		  /**
		   * Unbind, teardown everything
		   */

		  unbind: function () {
		    this.componentState = ABORTED
		    if (this.refID) {
		      this.vm.$[this.refID] = null
		    }
		    if (this.vms) {
		      var i = this.vms.length
		      var vm
		      while (i--) {
		        vm = this.vms[i]
		        this.uncacheVm(vm)
		        vm.$destroy()
		      }
		    }
		  },

		  /**
		   * Cache a vm instance based on its data.
		   *
		   * If the data is an object, we save the vm's reference on
		   * the data object as a hidden property. Otherwise we
		   * cache them in an object and for each primitive value
		   * there is an array in case there are duplicates.
		   *
		   * @param {Object} data
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {String} [key]
		   */

		  cacheVm: function (data, vm, index, key) {
		    var idKey = this.idKey
		    var cache = this.cache
		    var primitive = !isObject(data)
		    var id
		    if (key || idKey || primitive) {
		      id = idKey
		        ? idKey === '$index'
		          ? index
		          : data[idKey]
		        : (key || index)
		      if (!cache[id]) {
		        cache[id] = vm
		      } else if (!primitive && idKey !== '$index') {
		        _.warn('Duplicate track-by key in v-repeat: ' + id)
		      }
		    } else {
		      id = this.id
		      if (data.hasOwnProperty(id)) {
		        if (data[id] === null) {
		          data[id] = vm
		        } else {
		          _.warn(
		            'Duplicate objects are not supported in v-repeat ' +
		            'when using components or transitions.'
		          )
		        }
		      } else {
		        _.define(data, id, vm)
		      }
		    }
		    vm._raw = data
		  },

		  /**
		   * Try to get a cached instance from a piece of data.
		   *
		   * @param {Object} data
		   * @param {Number} index
		   * @param {String} [key]
		   * @return {Vue|undefined}
		   */

		  getVm: function (data, index, key) {
		    var idKey = this.idKey
		    var primitive = !isObject(data)
		    if (key || idKey || primitive) {
		      var id = idKey
		        ? idKey === '$index'
		          ? index
		          : data[idKey]
		        : (key || index)
		      return this.cache[id]
		    } else {
		      return data[this.id]
		    }
		  },

		  /**
		   * Delete a cached vm instance.
		   *
		   * @param {Vue} vm
		   */

		  uncacheVm: function (vm) {
		    var data = vm._raw
		    var idKey = this.idKey
		    var index = vm.$index
		    // fix #948: avoid accidentally fall through to
		    // a parent repeater which happens to have $key.
		    var key = vm.hasOwnProperty('$key') && vm.$key
		    var primitive = !isObject(data)
		    if (idKey || key || primitive) {
		      var id = idKey
		        ? idKey === '$index'
		          ? index
		          : data[idKey]
		        : (key || index)
		      this.cache[id] = null
		    } else {
		      data[this.id] = null
		      vm._raw = null
		    }
		  },

		  /**
		   * Pre-process the value before piping it through the
		   * filters, and convert non-Array objects to arrays.
		   *
		   * This function will be bound to this directive instance
		   * and passed into the watcher.
		   *
		   * @param {*} value
		   * @return {Array}
		   * @private
		   */

		  _preProcess: function (value) {
		    // regardless of type, store the un-filtered raw value.
		    this.rawValue = value
		    var type = this.rawType = typeof value
		    if (!isPlainObject(value)) {
		      this.converted = false
		      if (type === 'number') {
		        value = range(value)
		      } else if (type === 'string') {
		        value = _.toArray(value)
		      }
		      return value || []
		    } else {
		      // convert plain object to array.
		      var keys = Object.keys(value)
		      var i = keys.length
		      var res = new Array(i)
		      var key
		      while (i--) {
		        key = keys[i]
		        res[i] = {
		          $key: key,
		          $value: value[key]
		        }
		      }
		      this.converted = true
		      return res
		    }
		  },

		  /**
		   * Insert an instance.
		   *
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {Node} prevEl
		   * @param {Boolean} inDoc
		   */

		  insert: function (vm, index, prevEl, inDoc) {
		    if (vm._staggerCb) {
		      vm._staggerCb.cancel()
		      vm._staggerCb = null
		    }
		    var staggerAmount = this.getStagger(vm, index, null, 'enter')
		    if (inDoc && staggerAmount) {
		      // create an anchor and insert it synchronously,
		      // so that we can resolve the correct order without
		      // worrying about some elements not inserted yet
		      var anchor = vm._staggerAnchor
		      if (!anchor) {
		        anchor = vm._staggerAnchor = _.createAnchor('stagger-anchor')
		        anchor.__vue__ = vm
		      }
		      _.after(anchor, prevEl)
		      var op = vm._staggerCb = _.cancellable(function () {
		        vm._staggerCb = null
		        vm.$before(anchor)
		        _.remove(anchor)
		      })
		      setTimeout(op, staggerAmount)
		    } else {
		      vm.$after(prevEl)
		    }
		  },

		  /**
		   * Move an already inserted instance.
		   *
		   * @param {Vue} vm
		   * @param {Node} prevEl
		   */

		  move: function (vm, prevEl) {
		    vm.$after(prevEl, null, false)
		  },

		  /**
		   * Remove an instance.
		   *
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {Boolean} inDoc
		   */

		  remove: function (vm, index, total, inDoc) {
		    if (vm._staggerCb) {
		      vm._staggerCb.cancel()
		      vm._staggerCb = null
		      // it's not possible for the same vm to be removed
		      // twice, so if we have a pending stagger callback,
		      // it means this vm is queued for enter but removed
		      // before its transition started. Since it is already
		      // destroyed, we can just leave it in detached state.
		      return
		    }
		    var staggerAmount = this.getStagger(vm, index, total, 'leave')
		    if (inDoc && staggerAmount) {
		      var op = vm._staggerCb = _.cancellable(function () {
		        vm._staggerCb = null
		        remove()
		      })
		      setTimeout(op, staggerAmount)
		    } else {
		      remove()
		    }
		    function remove () {
		      vm.$remove(function () {
		        vm._cleanup()
		      })
		    }
		  },

		  /**
		   * Get the stagger amount for an insertion/removal.
		   *
		   * @param {Vue} vm
		   * @param {Number} index
		   * @param {String} type
		   * @param {Number} total
		   */

		  getStagger: function (vm, index, total, type) {
		    type = type + 'Stagger'
		    var transition = vm.$el.__v_trans
		    var hooks = transition && transition.hooks
		    var hook = hooks && (hooks[type] || hooks.stagger)
		    return hook
		      ? hook.call(vm, index, total)
		      : index * this[type]
		  }

		}

		/**
		 * Helper to find the previous element that is an instance
		 * root node. This is necessary because a destroyed vm's
		 * element could still be lingering in the DOM before its
		 * leaving transition finishes, but its __vue__ reference
		 * should have been removed so we can skip them.
		 *
		 * If this is a block repeat, we want to make sure we only
		 * return vm that is bound to this v-repeat. (see #929)
		 *
		 * @param {Vue} vm
		 * @param {Comment|Text} anchor
		 * @return {Vue}
		 */

		function findPrevVm (vm, anchor, id) {
		  var el = vm.$el.previousSibling
		  while (
		    (!el.__vue__ || el.__vue__.$options._repeatId !== id) &&
		    el !== anchor
		  ) {
		    el = el.previousSibling
		  }
		  return el.__vue__
		}

		/**
		 * Create a range array from given number.
		 *
		 * @param {Number} n
		 * @return {Array}
		 */

		function range (n) {
		  var i = -1
		  var ret = new Array(n)
		  while (++i < n) {
		    ret[i] = i
		  }
		  return ret
		}

		/**
		 * Convert a vms array to an object ref for v-ref on an
		 * Object value.
		 *
		 * @param {Array} vms
		 * @return {Object}
		 */

		function toRefObject (vms) {
		  var ref = {}
		  for (var i = 0, l = vms.length; i < l; i++) {
		    ref[vms[i].$key] = vms[i]
		  }
		  return ref
		}


	/***/ },
	/* 48 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var compiler = __webpack_require__(10)
		var templateParser = __webpack_require__(12)
		var transition = __webpack_require__(33)

		module.exports = {

		  bind: function () {
		    var el = this.el
		    if (!el.__vue__) {
		      this.start = _.createAnchor('v-if-start')
		      this.end = _.createAnchor('v-if-end')
		      _.replace(el, this.end)
		      _.before(this.start, this.end)
		      if (_.isTemplate(el)) {
		        this.template = templateParser.parse(el, true)
		      } else {
		        this.template = document.createDocumentFragment()
		        this.template.appendChild(templateParser.clone(el))
		      }
		      // compile the nested partial
		      this.linker = compiler.compile(
		        this.template,
		        this.vm.$options,
		        true
		      )
		    } else {
		      this.invalid = true
		      _.warn(
		        'v-if="' + this.expression + '" cannot be ' +
		        'used on an instance root element.'
		      )
		    }
		  },

		  update: function (value) {
		    if (this.invalid) return
		    if (value) {
		      // avoid duplicate compiles, since update() can be
		      // called with different truthy values
		      if (!this.unlink) {
		        this.link(
		          templateParser.clone(this.template),
		          this.linker
		        )
		      }
		    } else {
		      this.teardown()
		    }
		  },

		  link: function (frag, linker) {
		    var vm = this.vm
		    this.unlink = linker(vm, frag)
		    transition.blockAppend(frag, this.end, vm)
		    // call attached for all the child components created
		    // during the compilation
		    if (_.inDoc(vm.$el)) {
		      var children = this.getContainedComponents()
		      if (children) children.forEach(callAttach)
		    }
		  },

		  teardown: function () {
		    if (!this.unlink) return
		    // collect children beforehand
		    var children
		    if (_.inDoc(this.vm.$el)) {
		      children = this.getContainedComponents()
		    }
		    transition.blockRemove(this.start, this.end, this.vm)
		    if (children) children.forEach(callDetach)
		    this.unlink()
		    this.unlink = null
		  },

		  getContainedComponents: function () {
		    var vm = this.vm
		    var start = this.start.nextSibling
		    var end = this.end

		    function contains (c) {
		      var cur = start
		      var next
		      while (next !== end) {
		        next = cur.nextSibling
		        if (
		          cur === c.$el ||
		          cur.contains && cur.contains(c.$el)
		        ) {
		          return true
		        }
		        cur = next
		      }
		      return false
		    }

		    return vm.$children.length &&
		      vm.$children.filter(contains)
		  },

		  unbind: function () {
		    if (this.unlink) this.unlink()
		  }

		}

		function callAttach (child) {
		  if (!child._isAttached) {
		    child._callHook('attached')
		  }
		}

		function callDetach (child) {
		  if (child._isAttached) {
		    child._callHook('detached')
		  }
		}


	/***/ },
	/* 49 */
	/***/ function(module, exports, __webpack_require__) {

		exports.content = __webpack_require__(50)
		exports.partial = __webpack_require__(51)


	/***/ },
	/* 50 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		// This is the elementDirective that handles <content>
		// transclusions. It relies on the raw content of an
		// instance being stored as `$options._content` during
		// the transclude phase.

		module.exports = {

		  bind: function () {
		    var vm = this.vm
		    var host = vm
		    // we need find the content context, which is the
		    // closest non-inline-repeater instance.
		    while (host.$options._repeat) {
		      host = host.$parent
		    }
		    var raw = host.$options._content
		    var content
		    if (!raw) {
		      this.fallback()
		      return
		    }
		    var context = host._context
		    var selector = this.el.getAttribute('select')
		    if (!selector) {
		      // Default content
		      var self = this
		      var compileDefaultContent = function () {
		        self.compile(
		          extractFragment(raw.childNodes, raw, true),
		          context,
		          vm
		        )
		      }
		      if (!host._isCompiled) {
		        // defer until the end of instance compilation,
		        // because the default outlet must wait until all
		        // other possible outlets with selectors have picked
		        // out their contents.
		        host.$once('hook:compiled', compileDefaultContent)
		      } else {
		        compileDefaultContent()
		      }
		    } else {
		      // select content
		      selector = vm.$interpolate(selector)
		      var nodes = raw.querySelectorAll(selector)
		      if (nodes.length) {
		        content = extractFragment(nodes, raw)
		        if (content.hasChildNodes()) {
		          this.compile(content, context, vm)
		        } else {
		          this.fallback()
		        }
		      } else {
		        this.fallback()
		      }
		    }
		  },

		  fallback: function () {
		    this.compile(_.extractContent(this.el, true), this.vm)
		  },

		  compile: function (content, context, host) {
		    if (content && context) {
		      this.unlink = context.$compile(content, host)
		    }
		    if (content) {
		      _.replace(this.el, content)
		    } else {
		      _.remove(this.el)
		    }
		  },

		  unbind: function () {
		    if (this.unlink) {
		      this.unlink()
		    }
		  }
		}

		/**
		 * Extract qualified content nodes from a node list.
		 *
		 * @param {NodeList} nodes
		 * @param {Element} parent
		 * @param {Boolean} main
		 * @return {DocumentFragment}
		 */

		function extractFragment (nodes, parent, main) {
		  var frag = document.createDocumentFragment()
		  for (var i = 0, l = nodes.length; i < l; i++) {
		    var node = nodes[i]
		    // if this is the main outlet, we want to skip all
		    // previously selected nodes;
		    // otherwise, we want to mark the node as selected.
		    // clone the node so the original raw content remains
		    // intact. this ensures proper re-compilation in cases
		    // where the outlet is inside a conditional block
		    if (main && !node.__v_selected) {
		      frag.appendChild(node.cloneNode(true))
		    } else if (!main && node.parentNode === parent) {
		      node.__v_selected = true
		      frag.appendChild(node.cloneNode(true))
		    }
		  }
		  return frag
		}


	/***/ },
	/* 51 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var templateParser = __webpack_require__(12)
		var textParser = __webpack_require__(14)
		var compiler = __webpack_require__(10)
		var Cache = __webpack_require__(13)
		var cache = new Cache(1000)

		// v-partial reuses logic from v-if
		var vIf = __webpack_require__(48)

		module.exports = {

		  link: vIf.link,
		  teardown: vIf.teardown,
		  getContainedComponents: vIf.getContainedComponents,

		  bind: function () {
		    var el = this.el
		    this.start = _.createAnchor('v-partial-start')
		    this.end = _.createAnchor('v-partial-end')
		    _.replace(el, this.end)
		    _.before(this.start, this.end)
		    var id = el.getAttribute('name')
		    var tokens = textParser.parse(id)
		    if (tokens) {
		      // dynamic partial
		      this.setupDynamic(tokens)
		    } else {
		      // static partial
		      this.insert(id)
		    }
		  },

		  setupDynamic: function (tokens) {
		    var self = this
		    var exp = textParser.tokensToExp(tokens)
		    this.unwatch = this.vm.$watch(exp, function (value) {
		      self.teardown()
		      self.insert(value)
		    }, {
		      immediate: true,
		      user: false
		    })
		  },

		  insert: function (id) {
		    var partial = _.resolveAsset(this.vm.$options, 'partials', id)
		    _.assertAsset(partial, 'partial', id)
		    if (partial) {
		      var frag = templateParser.parse(partial, true)
		      // cache partials based on constructor id.
		      var cacheId = (this.vm.constructor.cid || '') + partial
		      var linker = this.compile(frag, cacheId)
		      // this is provided by v-if
		      this.link(frag, linker)
		    }
		  },

		  compile: function (frag, cacheId) {
		    var hit = cache.get(cacheId)
		    if (hit) return hit
		    var linker = compiler.compile(frag, this.vm.$options, true)
		    cache.put(cacheId, linker)
		    return linker
		  },

		  unbind: function () {
		    if (this.unlink) this.unlink()
		    if (this.unwatch) this.unwatch()
		  }
		}


	/***/ },
	/* 52 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Stringify value.
		 *
		 * @param {Number} indent
		 */

		exports.json = {
		  read: function (value, indent) {
		    return typeof value === 'string'
		      ? value
		      : JSON.stringify(value, null, Number(indent) || 2)
		  },
		  write: function (value) {
		    try {
		      return JSON.parse(value)
		    } catch (e) {
		      return value
		    }
		  }
		}

		/**
		 * 'abc' => 'Abc'
		 */

		exports.capitalize = function (value) {
		  if (!value && value !== 0) return ''
		  value = value.toString()
		  return value.charAt(0).toUpperCase() + value.slice(1)
		}

		/**
		 * 'abc' => 'ABC'
		 */

		exports.uppercase = function (value) {
		  return (value || value === 0)
		    ? value.toString().toUpperCase()
		    : ''
		}

		/**
		 * 'AbC' => 'abc'
		 */

		exports.lowercase = function (value) {
		  return (value || value === 0)
		    ? value.toString().toLowerCase()
		    : ''
		}

		/**
		 * 12345 => $12,345.00
		 *
		 * @param {String} sign
		 */

		var digitsRE = /(\d{3})(?=\d)/g
		exports.currency = function (value, currency) {
		  value = parseFloat(value)
		  if (!isFinite(value) || (!value && value !== 0)) return ''
		  currency = currency || '$'
		  var stringified = Math.abs(value).toFixed(2)
		  var _int = stringified.slice(0, -3)
		  var i = _int.length % 3
		  var head = i > 0
		    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
		    : ''
		  var _float = stringified.slice(-3)
		  var sign = value < 0 ? '-' : ''
		  return currency + sign + head +
		    _int.slice(i).replace(digitsRE, '$1,') +
		    _float
		}

		/**
		 * 'item' => 'items'
		 *
		 * @params
		 *  an array of strings corresponding to
		 *  the single, double, triple ... forms of the word to
		 *  be pluralized. When the number to be pluralized
		 *  exceeds the length of the args, it will use the last
		 *  entry in the array.
		 *
		 *  e.g. ['single', 'double', 'triple', 'multiple']
		 */

		exports.pluralize = function (value) {
		  var args = _.toArray(arguments, 1)
		  return args.length > 1
		    ? (args[value % 10 - 1] || args[args.length - 1])
		    : (args[0] + (value === 1 ? '' : 's'))
		}

		/**
		 * A special filter that takes a handler function,
		 * wraps it so it only gets triggered on specific
		 * keypresses. v-on only.
		 *
		 * @param {String} key
		 */

		var keyCodes = {
		  esc: 27,
		  tab: 9,
		  enter: 13,
		  'delete': 46,
		  up: 38,
		  left: 37,
		  right: 39,
		  down: 40
		}

		exports.key = function (handler, key) {
		  if (!handler) return
		  var code = keyCodes[key]
		  if (!code) {
		    code = parseInt(key, 10)
		  }
		  return function (e) {
		    if (e.keyCode === code) {
		      return handler.call(this, e)
		    }
		  }
		}

		// expose keycode hash
		exports.key.keyCodes = keyCodes

		/**
		 * Install special array filters
		 */

		_.extend(exports, __webpack_require__(53))


	/***/ },
	/* 53 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Path = __webpack_require__(23)

		/**
		 * Filter filter for v-repeat
		 *
		 * @param {String} searchKey
		 * @param {String} [delimiter]
		 * @param {String} dataKey
		 */

		exports.filterBy = function (arr, search, delimiter, dataKey) {
		  // allow optional `in` delimiter
		  // because why not
		  if (delimiter && delimiter !== 'in') {
		    dataKey = delimiter
		  }
		  if (search == null) {
		    return arr
		  }
		  // cast to lowercase string
		  search = ('' + search).toLowerCase()
		  return arr.filter(function (item) {
		    return dataKey
		      ? contains(Path.get(item, dataKey), search)
		      : contains(item, search)
		  })
		}

		/**
		 * Filter filter for v-repeat
		 *
		 * @param {String} sortKey
		 * @param {String} reverse
		 */

		exports.orderBy = function (arr, sortKey, reverse) {
		  if (!sortKey) {
		    return arr
		  }
		  var order = 1
		  if (arguments.length > 2) {
		    if (reverse === '-1') {
		      order = -1
		    } else {
		      order = reverse ? -1 : 1
		    }
		  }
		  // sort on a copy to avoid mutating original array
		  return arr.slice().sort(function (a, b) {
		    if (sortKey !== '$key' && sortKey !== '$value') {
		      if (a && '$value' in a) a = a.$value
		      if (b && '$value' in b) b = b.$value
		    }
		    a = _.isObject(a) ? Path.get(a, sortKey) : a
		    b = _.isObject(b) ? Path.get(b, sortKey) : b
		    return a === b ? 0 : a > b ? order : -order
		  })
		}

		/**
		 * String contain helper
		 *
		 * @param {*} val
		 * @param {String} search
		 */

		function contains (val, search) {
		  if (_.isPlainObject(val)) {
		    for (var key in val) {
		      if (contains(val[key], search)) {
		        return true
		      }
		    }
		  } else if (_.isArray(val)) {
		    var i = val.length
		    while (i--) {
		      if (contains(val[i], search)) {
		        return true
		      }
		    }
		  } else if (val != null) {
		    return val.toString().toLowerCase().indexOf(search) > -1
		  }
		}


	/***/ },
	/* 54 */
	/***/ function(module, exports, __webpack_require__) {

		var mergeOptions = __webpack_require__(1).mergeOptions

		/**
		 * The main init sequence. This is called for every
		 * instance, including ones that are created from extended
		 * constructors.
		 *
		 * @param {Object} options - this options object should be
		 *                           the result of merging class
		 *                           options and the options passed
		 *                           in to the constructor.
		 */

		exports._init = function (options) {

		  options = options || {}

		  this.$el = null
		  this.$parent = options._parent
		  this.$root = options._root || this
		  this.$children = []
		  this.$ = {}           // child vm references
		  this.$$ = {}          // element references
		  this._watchers = []   // all watchers as an array
		  this._directives = [] // all directives
		  this._childCtors = {} // inherit:true constructors

		  // a flag to avoid this being observed
		  this._isVue = true

		  // events bookkeeping
		  this._events = {}            // registered callbacks
		  this._eventsCount = {}       // for $broadcast optimization
		  this._eventCancelled = false // for event cancellation

		  // block instance properties
		  this._isBlock = false
		  this._blockStart =    // @type {CommentNode}
		  this._blockEnd = null // @type {CommentNode}

		  // lifecycle state
		  this._isCompiled =
		  this._isDestroyed =
		  this._isReady =
		  this._isAttached =
		  this._isBeingDestroyed = false
		  this._unlinkFn = null

		  // context: the scope in which the component was used,
		  // and the scope in which props and contents of this
		  // instance should be compiled in.
		  this._context =
		    options._context ||
		    options._parent

		  // push self into parent / transclusion host
		  if (this.$parent) {
		    this.$parent.$children.push(this)
		  }

		  // props used in v-repeat diffing
		  this._reused = false
		  this._staggerOp = null

		  // merge options.
		  options = this.$options = mergeOptions(
		    this.constructor.options,
		    options,
		    this
		  )

		  // initialize data as empty object.
		  // it will be filled up in _initScope().
		  this._data = {}

		  // initialize data observation and scope inheritance.
		  this._initScope()

		  // setup event system and option events.
		  this._initEvents()

		  // call created hook
		  this._callHook('created')

		  // if `el` option is passed, start compilation.
		  if (options.el) {
		    this.$mount(options.el)
		  }
		}


	/***/ },
	/* 55 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var inDoc = _.inDoc

		/**
		 * Setup the instance's option events & watchers.
		 * If the value is a string, we pull it from the
		 * instance's methods by name.
		 */

		exports._initEvents = function () {
		  var options = this.$options
		  registerCallbacks(this, '$on', options.events)
		  registerCallbacks(this, '$watch', options.watch)
		}

		/**
		 * Register callbacks for option events and watchers.
		 *
		 * @param {Vue} vm
		 * @param {String} action
		 * @param {Object} hash
		 */

		function registerCallbacks (vm, action, hash) {
		  if (!hash) return
		  var handlers, key, i, j
		  for (key in hash) {
		    handlers = hash[key]
		    if (_.isArray(handlers)) {
		      for (i = 0, j = handlers.length; i < j; i++) {
		        register(vm, action, key, handlers[i])
		      }
		    } else {
		      register(vm, action, key, handlers)
		    }
		  }
		}

		/**
		 * Helper to register an event/watch callback.
		 *
		 * @param {Vue} vm
		 * @param {String} action
		 * @param {String} key
		 * @param {Function|String|Object} handler
		 * @param {Object} [options]
		 */

		function register (vm, action, key, handler, options) {
		  var type = typeof handler
		  if (type === 'function') {
		    vm[action](key, handler, options)
		  } else if (type === 'string') {
		    var methods = vm.$options.methods
		    var method = methods && methods[handler]
		    if (method) {
		      vm[action](key, method, options)
		    } else {
		      _.warn(
		        'Unknown method: "' + handler + '" when ' +
		        'registering callback for ' + action +
		        ': "' + key + '".'
		      )
		    }
		  } else if (handler && type === 'object') {
		    register(vm, action, key, handler.handler, handler)
		  }
		}

		/**
		 * Setup recursive attached/detached calls
		 */

		exports._initDOMHooks = function () {
		  this.$on('hook:attached', onAttached)
		  this.$on('hook:detached', onDetached)
		}

		/**
		 * Callback to recursively call attached hook on children
		 */

		function onAttached () {
		  this._isAttached = true
		  this.$children.forEach(callAttach)
		}

		/**
		 * Iterator to call attached hook
		 *
		 * @param {Vue} child
		 */

		function callAttach (child) {
		  if (!child._isAttached && inDoc(child.$el)) {
		    child._callHook('attached')
		  }
		}

		/**
		 * Callback to recursively call detached hook on children
		 */

		function onDetached () {
		  this._isAttached = false
		  this.$children.forEach(callDetach)
		}

		/**
		 * Iterator to call detached hook
		 *
		 * @param {Vue} child
		 */

		function callDetach (child) {
		  if (child._isAttached && !inDoc(child.$el)) {
		    child._callHook('detached')
		  }
		}

		/**
		 * Trigger all handlers for a hook
		 *
		 * @param {String} hook
		 */

		exports._callHook = function (hook) {
		  var handlers = this.$options[hook]
		  if (handlers) {
		    for (var i = 0, j = handlers.length; i < j; i++) {
		      handlers[i].call(this)
		    }
		  }
		  this.$emit('hook:' + hook)
		}


	/***/ },
	/* 56 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var compiler = __webpack_require__(10)
		var Observer = __webpack_require__(18)
		var Dep = __webpack_require__(19)

		/**
		 * Setup the scope of an instance, which contains:
		 * - observed data
		 * - computed properties
		 * - user methods
		 * - meta properties
		 */

		exports._initScope = function () {
		  this._initProps()
		  this._initMeta()
		  this._initMethods()
		  this._initData()
		  this._initComputed()
		}

		/**
		 * Initialize props.
		 */

		exports._initProps = function () {
		  var options = this.$options
		  var el = options.el
		  var props = options.props
		  if (props && !el) {
		    _.warn(
		      'Props will not be compiled if no `el` option is ' +
		      'provided at instantiation.'
		    )
		  }
		  // make sure to convert string selectors into element now
		  el = options.el = _.query(el)
		  this._propsUnlinkFn = el && props
		    ? compiler.compileAndLinkProps(
		        this, el, props
		      )
		    : null
		}

		/**
		 * Initialize the data.
		 */

		exports._initData = function () {
		  var propsData = this._data
		  var optionsDataFn = this.$options.data
		  var optionsData = optionsDataFn && optionsDataFn()
		  if (optionsData) {
		    this._data = optionsData
		    for (var prop in propsData) {
		      if (
		        !optionsData.hasOwnProperty(prop) ||
		        propsData[prop] !== undefined
		      ) {
		        optionsData.$set(prop, propsData[prop])
		      }
		    }
		  }
		  var data = this._data
		  // proxy data on instance
		  var keys = Object.keys(data)
		  var i, key
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!_.isReserved(key)) {
		      this._proxy(key)
		    }
		  }
		  // observe data
		  Observer.create(data).addVm(this)
		}

		/**
		 * Swap the isntance's $data. Called in $data's setter.
		 *
		 * @param {Object} newData
		 */

		exports._setData = function (newData) {
		  newData = newData || {}
		  var oldData = this._data
		  this._data = newData
		  var keys, key, i
		  // copy props.
		  // this should only happen during a v-repeat of component
		  // that also happens to have compiled props.
		  var props = this.$options.props
		  if (props) {
		    i = props.length
		    while (i--) {
		      key = props[i].name
		      if (key !== '$data' && !newData.hasOwnProperty(key)) {
		        newData.$set(key, oldData[key])
		      }
		    }
		  }
		  // unproxy keys not present in new data
		  keys = Object.keys(oldData)
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!_.isReserved(key) && !(key in newData)) {
		      this._unproxy(key)
		    }
		  }
		  // proxy keys not already proxied,
		  // and trigger change for changed values
		  keys = Object.keys(newData)
		  i = keys.length
		  while (i--) {
		    key = keys[i]
		    if (!this.hasOwnProperty(key) && !_.isReserved(key)) {
		      // new property
		      this._proxy(key)
		    }
		  }
		  oldData.__ob__.removeVm(this)
		  Observer.create(newData).addVm(this)
		  this._digest()
		}

		/**
		 * Proxy a property, so that
		 * vm.prop === vm._data.prop
		 *
		 * @param {String} key
		 */

		exports._proxy = function (key) {
		  // need to store ref to self here
		  // because these getter/setters might
		  // be called by child instances!
		  var self = this
		  Object.defineProperty(self, key, {
		    configurable: true,
		    enumerable: true,
		    get: function proxyGetter () {
		      return self._data[key]
		    },
		    set: function proxySetter (val) {
		      self._data[key] = val
		    }
		  })
		}

		/**
		 * Unproxy a property.
		 *
		 * @param {String} key
		 */

		exports._unproxy = function (key) {
		  delete this[key]
		}

		/**
		 * Force update on every watcher in scope.
		 */

		exports._digest = function () {
		  var i = this._watchers.length
		  while (i--) {
		    this._watchers[i].update()
		  }
		  var children = this.$children
		  i = children.length
		  while (i--) {
		    var child = children[i]
		    if (child.$options.inherit) {
		      child._digest()
		    }
		  }
		}

		/**
		 * Setup computed properties. They are essentially
		 * special getter/setters
		 */

		function noop () {}
		exports._initComputed = function () {
		  var computed = this.$options.computed
		  if (computed) {
		    for (var key in computed) {
		      var userDef = computed[key]
		      var def = {
		        enumerable: true,
		        configurable: true
		      }
		      if (typeof userDef === 'function') {
		        def.get = _.bind(userDef, this)
		        def.set = noop
		      } else {
		        def.get = userDef.get
		          ? _.bind(userDef.get, this)
		          : noop
		        def.set = userDef.set
		          ? _.bind(userDef.set, this)
		          : noop
		      }
		      Object.defineProperty(this, key, def)
		    }
		  }
		}

		/**
		 * Setup instance methods. Methods must be bound to the
		 * instance since they might be called by children
		 * inheriting them.
		 */

		exports._initMethods = function () {
		  var methods = this.$options.methods
		  if (methods) {
		    for (var key in methods) {
		      this[key] = _.bind(methods[key], this)
		    }
		  }
		}

		/**
		 * Initialize meta information like $index, $key & $value.
		 */

		exports._initMeta = function () {
		  var metas = this.$options._meta
		  if (metas) {
		    for (var key in metas) {
		      this._defineMeta(key, metas[key])
		    }
		  }
		}

		/**
		 * Define a meta property, e.g $index, $key, $value
		 * which only exists on the vm instance but not in $data.
		 *
		 * @param {String} key
		 * @param {*} value
		 */

		exports._defineMeta = function (key, value) {
		  var dep = new Dep()
		  Object.defineProperty(this, key, {
		    enumerable: true,
		    configurable: true,
		    get: function metaGetter () {
		      dep.depend()
		      return value
		    },
		    set: function metaSetter (val) {
		      if (val !== value) {
		        value = val
		        dep.notify()
		      }
		    }
		  })
		}


	/***/ },
	/* 57 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var Directive = __webpack_require__(58)
		var compiler = __webpack_require__(10)

		/**
		 * Transclude, compile and link element.
		 *
		 * If a pre-compiled linker is available, that means the
		 * passed in element will be pre-transcluded and compiled
		 * as well - all we need to do is to call the linker.
		 *
		 * Otherwise we need to call transclude/compile/link here.
		 *
		 * @param {Element} el
		 * @return {Element}
		 */

		exports._compile = function (el) {
		  var options = this.$options
		  var host = this._host
		  if (options._linkFn) {
		    // pre-transcluded with linker, just use it
		    this._initElement(el)
		    this._unlinkFn = options._linkFn(this, el, host)
		  } else {
		    // transclude and init element
		    // transclude can potentially replace original
		    // so we need to keep reference; this step also injects
		    // the template and caches the original attributes
		    // on the container node and replacer node.
		    var original = el
		    el = compiler.transclude(el, options)
		    this._initElement(el)

		    // root is always compiled per-instance, because
		    // container attrs and props can be different every time.
		    var rootUnlinkFn =
		      compiler.compileAndLinkRoot(this, el, options)

		    // compile and link the rest
		    var linker
		    var ctor = this.constructor
		    // component compilation can be cached
		    // as long as it's not using inline-template
		    if (options._linkerCachable) {
		      linker = ctor.linker
		      if (!linker) {
		        linker = ctor.linker = compiler.compile(el, options)
		      }
		    }
		    var contentUnlinkFn = linker
		      ? linker(this, el)
		      : compiler.compile(el, options)(this, el, host)

		    this._unlinkFn = function () {
		      rootUnlinkFn()
		      // passing destroying: true to avoid searching and
		      // splicing the directives
		      contentUnlinkFn(true)
		    }

		    // finally replace original
		    if (options.replace) {
		      _.replace(original, el)
		    }
		  }
		  return el
		}

		/**
		 * Initialize instance element. Called in the public
		 * $mount() method.
		 *
		 * @param {Element} el
		 */

		exports._initElement = function (el) {
		  if (el instanceof DocumentFragment) {
		    this._isBlock = true
		    this.$el = this._blockStart = el.firstChild
		    this._blockEnd = el.lastChild
		    // set persisted text anchors to empty
		    if (this._blockStart.nodeType === 3) {
		      this._blockStart.data = this._blockEnd.data = ''
		    }
		    this._blockFragment = el
		  } else {
		    this.$el = el
		  }
		  this.$el.__vue__ = this
		  this._callHook('beforeCompile')
		}

		/**
		 * Create and bind a directive to an element.
		 *
		 * @param {String} name - directive name
		 * @param {Node} node   - target node
		 * @param {Object} desc - parsed directive descriptor
		 * @param {Object} def  - directive definition object
		 * @param {Vue|undefined} host - transclusion host component
		 */

		exports._bindDir = function (name, node, desc, def, host) {
		  this._directives.push(
		    new Directive(name, node, this, desc, def, host)
		  )
		}

		/**
		 * Teardown an instance, unobserves the data, unbind all the
		 * directives, turn off all the event listeners, etc.
		 *
		 * @param {Boolean} remove - whether to remove the DOM node.
		 * @param {Boolean} deferCleanup - if true, defer cleanup to
		 *                                 be called later
		 */

		exports._destroy = function (remove, deferCleanup) {
		  if (this._isBeingDestroyed) {
		    return
		  }
		  this._callHook('beforeDestroy')
		  this._isBeingDestroyed = true
		  var i
		  // remove self from parent. only necessary
		  // if parent is not being destroyed as well.
		  var parent = this.$parent
		  if (parent && !parent._isBeingDestroyed) {
		    parent.$children.$remove(this)
		  }
		  // destroy all children.
		  i = this.$children.length
		  while (i--) {
		    this.$children[i].$destroy()
		  }
		  // teardown props
		  if (this._propsUnlinkFn) {
		    this._propsUnlinkFn()
		  }
		  // teardown all directives. this also tearsdown all
		  // directive-owned watchers.
		  if (this._unlinkFn) {
		    this._unlinkFn()
		  }
		  i = this._watchers.length
		  while (i--) {
		    this._watchers[i].teardown()
		  }
		  // remove reference to self on $el
		  if (this.$el) {
		    this.$el.__vue__ = null
		  }
		  // remove DOM element
		  var self = this
		  if (remove && this.$el) {
		    this.$remove(function () {
		      self._cleanup()
		    })
		  } else if (!deferCleanup) {
		    this._cleanup()
		  }
		}

		/**
		 * Clean up to ensure garbage collection.
		 * This is called after the leave transition if there
		 * is any.
		 */

		exports._cleanup = function () {
		  // remove reference from data ob
		  this._data.__ob__.removeVm(this)
		  this._data =
		  this._watchers =
		  this.$el =
		  this.$parent =
		  this.$root =
		  this.$children =
		  this._directives = null
		  // call the last hook...
		  this._isDestroyed = true
		  this._callHook('destroyed')
		  // turn off all instance listeners.
		  this.$off()
		}


	/***/ },
	/* 58 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var config = __webpack_require__(3)
		var Watcher = __webpack_require__(17)
		var textParser = __webpack_require__(14)
		var expParser = __webpack_require__(22)

		/**
		 * A directive links a DOM element with a piece of data,
		 * which is the result of evaluating an expression.
		 * It registers a watcher with the expression and calls
		 * the DOM update function when a change is triggered.
		 *
		 * @param {String} name
		 * @param {Node} el
		 * @param {Vue} vm
		 * @param {Object} descriptor
		 *                 - {String} expression
		 *                 - {String} [arg]
		 *                 - {Array<Object>} [filters]
		 * @param {Object} def - directive definition object
		 * @param {Vue|undefined} host - transclusion host target
		 * @constructor
		 */

		function Directive (name, el, vm, descriptor, def, host) {
		  // public
		  this.name = name
		  this.el = el
		  this.vm = vm
		  // copy descriptor props
		  this.raw = descriptor.raw
		  this.expression = descriptor.expression
		  this.arg = descriptor.arg
		  this.filters = descriptor.filters
		  // private
		  this._descriptor = descriptor
		  this._host = host
		  this._locked = false
		  this._bound = false
		  // init
		  this._bind(def)
		}

		var p = Directive.prototype

		/**
		 * Initialize the directive, mixin definition properties,
		 * setup the watcher, call definition bind() and update()
		 * if present.
		 *
		 * @param {Object} def
		 */

		p._bind = function (def) {
		  if (this.name !== 'cloak' && this.el && this.el.removeAttribute) {
		    this.el.removeAttribute(config.prefix + this.name)
		  }
		  if (typeof def === 'function') {
		    this.update = def
		  } else {
		    _.extend(this, def)
		  }
		  this._watcherExp = this.expression
		  this._checkDynamicLiteral()
		  if (this.bind) {
		    this.bind()
		  }
		  if (this._watcherExp &&
		      (this.update || this.twoWay) &&
		      (!this.isLiteral || this._isDynamicLiteral) &&
		      !this._checkStatement()) {
		    // wrapped updater for context
		    var dir = this
		    var update = this._update = this.update
		      ? function (val, oldVal) {
		          if (!dir._locked) {
		            dir.update(val, oldVal)
		          }
		        }
		      : function () {} // noop if no update is provided
		    // pre-process hook called before the value is piped
		    // through the filters. used in v-repeat.
		    var preProcess = this._preProcess
		      ? _.bind(this._preProcess, this)
		      : null
		    var watcher = this._watcher = new Watcher(
		      this.vm,
		      this._watcherExp,
		      update, // callback
		      {
		        filters: this.filters,
		        twoWay: this.twoWay,
		        deep: this.deep,
		        preProcess: preProcess
		      }
		    )
		    if (this._initValue != null) {
		      watcher.set(this._initValue)
		    } else if (this.update) {
		      this.update(watcher.value)
		    }
		  }
		  this._bound = true
		}

		/**
		 * check if this is a dynamic literal binding.
		 *
		 * e.g. v-component="{{currentView}}"
		 */

		p._checkDynamicLiteral = function () {
		  var expression = this.expression
		  if (expression && this.isLiteral) {
		    var tokens = textParser.parse(expression)
		    if (tokens) {
		      var exp = textParser.tokensToExp(tokens)
		      this.expression = this.vm.$get(exp)
		      this._watcherExp = exp
		      this._isDynamicLiteral = true
		    }
		  }
		}

		/**
		 * Check if the directive is a function caller
		 * and if the expression is a callable one. If both true,
		 * we wrap up the expression and use it as the event
		 * handler.
		 *
		 * e.g. v-on="click: a++"
		 *
		 * @return {Boolean}
		 */

		p._checkStatement = function () {
		  var expression = this.expression
		  if (
		    expression && this.acceptStatement &&
		    !expParser.isSimplePath(expression)
		  ) {
		    var fn = expParser.parse(expression).get
		    var vm = this.vm
		    var handler = function () {
		      fn.call(vm, vm)
		    }
		    if (this.filters) {
		      handler = vm._applyFilters(handler, null, this.filters)
		    }
		    this.update(handler)
		    return true
		  }
		}

		/**
		 * Check for an attribute directive param, e.g. lazy
		 *
		 * @param {String} name
		 * @return {String}
		 */

		p._checkParam = function (name) {
		  var param = this.el.getAttribute(name)
		  if (param !== null) {
		    this.el.removeAttribute(name)
		  }
		  return param
		}

		/**
		 * Teardown the watcher and call unbind.
		 */

		p._teardown = function () {
		  if (this._bound) {
		    this._bound = false
		    if (this.unbind) {
		      this.unbind()
		    }
		    if (this._watcher) {
		      this._watcher.teardown()
		    }
		    this.vm = this.el = this._watcher = null
		  }
		}

		/**
		 * Set the corresponding value with the setter.
		 * This should only be used in two-way directives
		 * e.g. v-model.
		 *
		 * @param {*} value
		 * @public
		 */

		p.set = function (value) {
		  if (this.twoWay) {
		    this._withLock(function () {
		      this._watcher.set(value)
		    })
		  }
		}

		/**
		 * Execute a function while preventing that function from
		 * triggering updates on this directive instance.
		 *
		 * @param {Function} fn
		 */

		p._withLock = function (fn) {
		  var self = this
		  self._locked = true
		  fn.call(self)
		  _.nextTick(function () {
		    self._locked = false
		  })
		}

		module.exports = Directive


	/***/ },
	/* 59 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Apply a list of filter (descriptors) to a value.
		 * Using plain for loops here because this will be called in
		 * the getter of any watcher with filters so it is very
		 * performance sensitive.
		 *
		 * @param {*} value
		 * @param {*} [oldValue]
		 * @param {Array} filters
		 * @param {Boolean} write
		 * @return {*}
		 */

		exports._applyFilters = function (value, oldValue, filters, write) {
		  var filter, fn, args, arg, offset, i, l, j, k
		  for (i = 0, l = filters.length; i < l; i++) {
		    filter = filters[i]
		    fn = _.resolveAsset(this.$options, 'filters', filter.name)
		    _.assertAsset(fn, 'filter', filter.name)
		    if (!fn) continue
		    fn = write ? fn.write : (fn.read || fn)
		    if (typeof fn !== 'function') continue
		    args = write ? [value, oldValue] : [value]
		    offset = write ? 2 : 1
		    if (filter.args) {
		      for (j = 0, k = filter.args.length; j < k; j++) {
		        arg = filter.args[j]
		        args[j + offset] = arg.dynamic
		          ? this.$get(arg.value)
		          : arg.value
		      }
		    }
		    value = fn.apply(this, args)
		  }
		  return value
		}

		/**
		 * Resolve a component, depending on whether the component
		 * is defined normally or using an async factory function.
		 * Resolves synchronously if already resolved, otherwise
		 * resolves asynchronously and caches the resolved
		 * constructor on the factory.
		 *
		 * @param {String} id
		 * @param {Function} cb
		 */

		exports._resolveComponent = function (id, cb) {
		  var factory = _.resolveAsset(this.$options, 'components', id)
		  _.assertAsset(factory, 'component', id)
		  // async component factory
		  if (!factory.options) {
		    if (factory.resolved) {
		      // cached
		      cb(factory.resolved)
		    } else if (factory.requested) {
		      // pool callbacks
		      factory.pendingCallbacks.push(cb)
		    } else {
		      factory.requested = true
		      var cbs = factory.pendingCallbacks = [cb]
		      factory(function resolve (res) {
		        if (_.isPlainObject(res)) {
		          res = _.Vue.extend(res)
		        }
		        // cache resolved
		        factory.resolved = res
		        // invoke callbacks
		        for (var i = 0, l = cbs.length; i < l; i++) {
		          cbs[i](res)
		        }
		      }, function reject (reason) {
		        _.warn(
		          'Failed to resolve async component: ' + id + '. ' +
		          (reason ? '\nReason: ' + reason : '')
		        )
		      })
		    }
		  } else {
		    // normal component
		    cb(factory)
		  }
		}


	/***/ },
	/* 60 */
	/***/ function(module, exports, __webpack_require__) {

		var Watcher = __webpack_require__(17)
		var Path = __webpack_require__(23)
		var textParser = __webpack_require__(14)
		var dirParser = __webpack_require__(15)
		var expParser = __webpack_require__(22)
		var filterRE = /[^|]\|[^|]/

		/**
		 * Get the value from an expression on this vm.
		 *
		 * @param {String} exp
		 * @return {*}
		 */

		exports.$get = function (exp) {
		  var res = expParser.parse(exp)
		  if (res) {
		    try {
		      return res.get.call(this, this)
		    } catch (e) {}
		  }
		}

		/**
		 * Set the value from an expression on this vm.
		 * The expression must be a valid left-hand
		 * expression in an assignment.
		 *
		 * @param {String} exp
		 * @param {*} val
		 */

		exports.$set = function (exp, val) {
		  var res = expParser.parse(exp, true)
		  if (res && res.set) {
		    res.set.call(this, this, val)
		  }
		}

		/**
		 * Add a property on the VM
		 *
		 * @param {String} key
		 * @param {*} val
		 */

		exports.$add = function (key, val) {
		  this._data.$add(key, val)
		}

		/**
		 * Delete a property on the VM
		 *
		 * @param {String} key
		 */

		exports.$delete = function (key) {
		  this._data.$delete(key)
		}

		/**
		 * Watch an expression, trigger callback when its
		 * value changes.
		 *
		 * @param {String} exp
		 * @param {Function} cb
		 * @param {Object} [options]
		 *                 - {Boolean} deep
		 *                 - {Boolean} immediate
		 *                 - {Boolean} user
		 * @return {Function} - unwatchFn
		 */

		exports.$watch = function (exp, cb, options) {
		  var vm = this
		  var wrappedCb = function (val, oldVal) {
		    cb.call(vm, val, oldVal)
		  }
		  var watcher = new Watcher(vm, exp, wrappedCb, {
		    deep: options && options.deep,
		    user: !options || options.user !== false
		  })
		  if (options && options.immediate) {
		    wrappedCb(watcher.value)
		  }
		  return function unwatchFn () {
		    watcher.teardown()
		  }
		}

		/**
		 * Evaluate a text directive, including filters.
		 *
		 * @param {String} text
		 * @return {String}
		 */

		exports.$eval = function (text) {
		  // check for filters.
		  if (filterRE.test(text)) {
		    var dir = dirParser.parse(text)[0]
		    // the filter regex check might give false positive
		    // for pipes inside strings, so it's possible that
		    // we don't get any filters here
		    var val = this.$get(dir.expression)
		    return dir.filters
		      ? this._applyFilters(val, null, dir.filters)
		      : val
		  } else {
		    // no filter
		    return this.$get(text)
		  }
		}

		/**
		 * Interpolate a piece of template text.
		 *
		 * @param {String} text
		 * @return {String}
		 */

		exports.$interpolate = function (text) {
		  var tokens = textParser.parse(text)
		  var vm = this
		  if (tokens) {
		    return tokens.length === 1
		      ? vm.$eval(tokens[0].value)
		      : tokens.map(function (token) {
		          return token.tag
		            ? vm.$eval(token.value)
		            : token.value
		        }).join('')
		  } else {
		    return text
		  }
		}

		/**
		 * Log instance data as a plain JS object
		 * so that it is easier to inspect in console.
		 * This method assumes console is available.
		 *
		 * @param {String} [path]
		 */

		exports.$log = function (path) {
		  var data = path
		    ? Path.get(this._data, path)
		    : this._data
		  if (data) {
		    data = JSON.parse(JSON.stringify(data))
		  }
		  console.log(data)
		}


	/***/ },
	/* 61 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var transition = __webpack_require__(33)

		/**
		 * Convenience on-instance nextTick. The callback is
		 * auto-bound to the instance, and this avoids component
		 * modules having to rely on the global Vue.
		 *
		 * @param {Function} fn
		 */

		exports.$nextTick = function (fn) {
		  _.nextTick(fn, this)
		}

		/**
		 * Append instance to target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$appendTo = function (target, cb, withTransition) {
		  return insert(
		    this, target, cb, withTransition,
		    append, transition.append
		  )
		}

		/**
		 * Prepend instance to target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$prependTo = function (target, cb, withTransition) {
		  target = query(target)
		  if (target.hasChildNodes()) {
		    this.$before(target.firstChild, cb, withTransition)
		  } else {
		    this.$appendTo(target, cb, withTransition)
		  }
		  return this
		}

		/**
		 * Insert instance before target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$before = function (target, cb, withTransition) {
		  return insert(
		    this, target, cb, withTransition,
		    before, transition.before
		  )
		}

		/**
		 * Insert instance after target
		 *
		 * @param {Node} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$after = function (target, cb, withTransition) {
		  target = query(target)
		  if (target.nextSibling) {
		    this.$before(target.nextSibling, cb, withTransition)
		  } else {
		    this.$appendTo(target.parentNode, cb, withTransition)
		  }
		  return this
		}

		/**
		 * Remove instance from DOM
		 *
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition] - defaults to true
		 */

		exports.$remove = function (cb, withTransition) {
		  if (!this.$el.parentNode) {
		    return cb && cb()
		  }
		  var inDoc = this._isAttached && _.inDoc(this.$el)
		  // if we are not in document, no need to check
		  // for transitions
		  if (!inDoc) withTransition = false
		  var op
		  var self = this
		  var realCb = function () {
		    if (inDoc) self._callHook('detached')
		    if (cb) cb()
		  }
		  if (
		    this._isBlock &&
		    !this._blockFragment.hasChildNodes()
		  ) {
		    op = withTransition === false
		      ? append
		      : transition.removeThenAppend
		    blockOp(this, this._blockFragment, op, realCb)
		  } else {
		    op = withTransition === false
		      ? remove
		      : transition.remove
		    op(this.$el, this, realCb)
		  }
		  return this
		}

		/**
		 * Shared DOM insertion function.
		 *
		 * @param {Vue} vm
		 * @param {Element} target
		 * @param {Function} [cb]
		 * @param {Boolean} [withTransition]
		 * @param {Function} op1 - op for non-transition insert
		 * @param {Function} op2 - op for transition insert
		 * @return vm
		 */

		function insert (vm, target, cb, withTransition, op1, op2) {
		  target = query(target)
		  var targetIsDetached = !_.inDoc(target)
		  var op = withTransition === false || targetIsDetached
		    ? op1
		    : op2
		  var shouldCallHook =
		    !targetIsDetached &&
		    !vm._isAttached &&
		    !_.inDoc(vm.$el)
		  if (vm._isBlock) {
		    blockOp(vm, target, op, cb)
		  } else {
		    op(vm.$el, target, vm, cb)
		  }
		  if (shouldCallHook) {
		    vm._callHook('attached')
		  }
		  return vm
		}

		/**
		 * Execute a transition operation on a block instance,
		 * iterating through all its block nodes.
		 *
		 * @param {Vue} vm
		 * @param {Node} target
		 * @param {Function} op
		 * @param {Function} cb
		 */

		function blockOp (vm, target, op, cb) {
		  var current = vm._blockStart
		  var end = vm._blockEnd
		  var next
		  while (next !== end) {
		    next = current.nextSibling
		    op(current, target, vm)
		    current = next
		  }
		  op(end, target, vm, cb)
		}

		/**
		 * Check for selectors
		 *
		 * @param {String|Element} el
		 */

		function query (el) {
		  return typeof el === 'string'
		    ? document.querySelector(el)
		    : el
		}

		/**
		 * Append operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Node} target
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */

		function append (el, target, vm, cb) {
		  target.appendChild(el)
		  if (cb) cb()
		}

		/**
		 * InsertBefore operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Node} target
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */

		function before (el, target, vm, cb) {
		  _.before(el, target)
		  if (cb) cb()
		}

		/**
		 * Remove operation that takes a callback.
		 *
		 * @param {Node} el
		 * @param {Vue} vm - unused
		 * @param {Function} [cb]
		 */

		function remove (el, vm, cb) {
		  _.remove(el)
		  if (cb) cb()
		}


	/***/ },
	/* 62 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Listen on the given `event` with `fn`.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */

		exports.$on = function (event, fn) {
		  (this._events[event] || (this._events[event] = []))
		    .push(fn)
		  modifyListenerCount(this, event, 1)
		  return this
		}

		/**
		 * Adds an `event` listener that will be invoked a single
		 * time then automatically removed.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */

		exports.$once = function (event, fn) {
		  var self = this
		  function on () {
		    self.$off(event, on)
		    fn.apply(this, arguments)
		  }
		  on.fn = fn
		  this.$on(event, on)
		  return this
		}

		/**
		 * Remove the given callback for `event` or all
		 * registered callbacks.
		 *
		 * @param {String} event
		 * @param {Function} fn
		 */

		exports.$off = function (event, fn) {
		  var cbs
		  // all
		  if (!arguments.length) {
		    if (this.$parent) {
		      for (event in this._events) {
		        cbs = this._events[event]
		        if (cbs) {
		          modifyListenerCount(this, event, -cbs.length)
		        }
		      }
		    }
		    this._events = {}
		    return this
		  }
		  // specific event
		  cbs = this._events[event]
		  if (!cbs) {
		    return this
		  }
		  if (arguments.length === 1) {
		    modifyListenerCount(this, event, -cbs.length)
		    this._events[event] = null
		    return this
		  }
		  // specific handler
		  var cb
		  var i = cbs.length
		  while (i--) {
		    cb = cbs[i]
		    if (cb === fn || cb.fn === fn) {
		      modifyListenerCount(this, event, -1)
		      cbs.splice(i, 1)
		      break
		    }
		  }
		  return this
		}

		/**
		 * Trigger an event on self.
		 *
		 * @param {String} event
		 */

		exports.$emit = function (event) {
		  this._eventCancelled = false
		  var cbs = this._events[event]
		  if (cbs) {
		    // avoid leaking arguments:
		    // http://jsperf.com/closure-with-arguments
		    var i = arguments.length - 1
		    var args = new Array(i)
		    while (i--) {
		      args[i] = arguments[i + 1]
		    }
		    i = 0
		    cbs = cbs.length > 1
		      ? _.toArray(cbs)
		      : cbs
		    for (var l = cbs.length; i < l; i++) {
		      if (cbs[i].apply(this, args) === false) {
		        this._eventCancelled = true
		      }
		    }
		  }
		  return this
		}

		/**
		 * Recursively broadcast an event to all children instances.
		 *
		 * @param {String} event
		 * @param {...*} additional arguments
		 */

		exports.$broadcast = function (event) {
		  // if no child has registered for this event,
		  // then there's no need to broadcast.
		  if (!this._eventsCount[event]) return
		  var children = this.$children
		  for (var i = 0, l = children.length; i < l; i++) {
		    var child = children[i]
		    child.$emit.apply(child, arguments)
		    if (!child._eventCancelled) {
		      child.$broadcast.apply(child, arguments)
		    }
		  }
		  return this
		}

		/**
		 * Recursively propagate an event up the parent chain.
		 *
		 * @param {String} event
		 * @param {...*} additional arguments
		 */

		exports.$dispatch = function () {
		  var parent = this.$parent
		  while (parent) {
		    parent.$emit.apply(parent, arguments)
		    parent = parent._eventCancelled
		      ? null
		      : parent.$parent
		  }
		  return this
		}

		/**
		 * Modify the listener counts on all parents.
		 * This bookkeeping allows $broadcast to return early when
		 * no child has listened to a certain event.
		 *
		 * @param {Vue} vm
		 * @param {String} event
		 * @param {Number} count
		 */

		var hookRE = /^hook:/
		function modifyListenerCount (vm, event, count) {
		  var parent = vm.$parent
		  // hooks do not get broadcasted so no need
		  // to do bookkeeping for them
		  if (!parent || !count || hookRE.test(event)) return
		  while (parent) {
		    parent._eventsCount[event] =
		      (parent._eventsCount[event] || 0) + count
		    parent = parent.$parent
		  }
		}


	/***/ },
	/* 63 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)

		/**
		 * Create a child instance that prototypally inehrits
		 * data on parent. To achieve that we create an intermediate
		 * constructor with its prototype pointing to parent.
		 *
		 * @param {Object} opts
		 * @param {Function} [BaseCtor]
		 * @return {Vue}
		 * @public
		 */

		exports.$addChild = function (opts, BaseCtor) {
		  BaseCtor = BaseCtor || _.Vue
		  opts = opts || {}
		  var parent = this
		  var ChildVue
		  var inherit = opts.inherit !== undefined
		    ? opts.inherit
		    : BaseCtor.options.inherit
		  if (inherit) {
		    var ctors = parent._childCtors
		    ChildVue = ctors[BaseCtor.cid]
		    if (!ChildVue) {
		      var optionName = BaseCtor.options.name
		      var className = optionName
		        ? _.classify(optionName)
		        : 'VueComponent'
		      ChildVue = new Function(
		        'return function ' + className + ' (options) {' +
		        'this.constructor = ' + className + ';' +
		        'this._init(options) }'
		      )()
		      ChildVue.options = BaseCtor.options
		      ChildVue.linker = BaseCtor.linker
		      ChildVue.prototype = this
		      ctors[BaseCtor.cid] = ChildVue
		    }
		  } else {
		    ChildVue = BaseCtor
		  }
		  opts._parent = parent
		  opts._root = parent.$root
		  var child = new ChildVue(opts)
		  return child
		}


	/***/ },
	/* 64 */
	/***/ function(module, exports, __webpack_require__) {

		var _ = __webpack_require__(1)
		var compiler = __webpack_require__(10)

		/**
		 * Set instance target element and kick off the compilation
		 * process. The passed in `el` can be a selector string, an
		 * existing Element, or a DocumentFragment (for block
		 * instances).
		 *
		 * @param {Element|DocumentFragment|string} el
		 * @public
		 */

		exports.$mount = function (el) {
		  if (this._isCompiled) {
		    _.warn('$mount() should be called only once.')
		    return
		  }
		  el = _.query(el)
		  if (!el) {
		    el = document.createElement('div')
		  }
		  this._compile(el)
		  this._isCompiled = true
		  this._callHook('compiled')
		  if (_.inDoc(this.$el)) {
		    this._callHook('attached')
		    this._initDOMHooks()
		    ready.call(this)
		  } else {
		    this._initDOMHooks()
		    this.$once('hook:attached', ready)
		  }
		  return this
		}

		/**
		 * Mark an instance as ready.
		 */

		function ready () {
		  this._isAttached = true
		  this._isReady = true
		  this._callHook('ready')
		}

		/**
		 * Teardown the instance, simply delegate to the internal
		 * _destroy.
		 */

		exports.$destroy = function (remove, deferCleanup) {
		  this._destroy(remove, deferCleanup)
		}

		/**
		 * Partially compile a piece of DOM and return a
		 * decompile function.
		 *
		 * @param {Element|DocumentFragment} el
		 * @param {Vue} [host]
		 * @return {Function}
		 */

		exports.$compile = function (el, host) {
		  return compiler.compile(el, this.$options, true, host)(this, el)
		}


	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! UIkit 2.21.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */
	(function(core) {

	    if (true) { // AMD

	        !(__WEBPACK_AMD_DEFINE_RESULT__ = function(){

	            var uikit = window.UIkit || core(window, window.jQuery, window.document);

	            uikit.load = function(res, req, onload, config) {

	                var resources = res.split(','), load = [], i, base = (config.config && config.config.uikit && config.config.uikit.base ? config.config.uikit.base : "").replace(/\/+$/g, "");

	                if (!base) {
	                    throw new Error( "Please define base path to UIkit in the requirejs config." );
	                }

	                for (i = 0; i < resources.length; i += 1) {
	                    var resource = resources[i].replace(/\./g, '/');
	                    load.push(base+'/components/'+resource);
	                }

	                req(load, function() {
	                    onload(uikit);
	                });
	            };

	            return uikit;
	        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }

	    if (!window.jQuery) {
	        throw new Error( "UIkit requires jQuery" );
	    }

	    if (window && window.jQuery) {
	        core(window, window.jQuery, window.document);
	    }


	})(function(global, $, doc) {

	    "use strict";

	    var UI = {}, _UI = global.UIkit ? Object.create(global.UIkit) : undefined;

	    UI.version = '2.21.0';

	    UI.noConflict = function() {
	        // restore UIkit version
	        if (_UI) {
	            global.UIkit = _UI;
	            $.UIkit      = _UI;
	            $.fn.uk      = _UI.fn;
	        }

	        return UI;
	    };

	    UI.prefix = function(str) {
	        return str;
	    };

	    // cache jQuery
	    UI.$ = $;

	    UI.$doc  = UI.$(document);
	    UI.$win  = UI.$(window);
	    UI.$html = UI.$('html');

	    UI.support = {};
	    UI.support.transition = (function() {

	        var transitionEnd = (function() {

	            var element = doc.body || doc.documentElement,
	                transEndEventNames = {
	                    WebkitTransition : 'webkitTransitionEnd',
	                    MozTransition    : 'transitionend',
	                    OTransition      : 'oTransitionEnd otransitionend',
	                    transition       : 'transitionend'
	                }, name;

	            for (name in transEndEventNames) {
	                if (element.style[name] !== undefined) return transEndEventNames[name];
	            }
	        }());

	        return transitionEnd && { end: transitionEnd };
	    })();

	    UI.support.animation = (function() {

	        var animationEnd = (function() {

	            var element = doc.body || doc.documentElement,
	                animEndEventNames = {
	                    WebkitAnimation : 'webkitAnimationEnd',
	                    MozAnimation    : 'animationend',
	                    OAnimation      : 'oAnimationEnd oanimationend',
	                    animation       : 'animationend'
	                }, name;

	            for (name in animEndEventNames) {
	                if (element.style[name] !== undefined) return animEndEventNames[name];
	            }
	        }());

	        return animationEnd && { end: animationEnd };
	    })();

	    // requestAnimationFrame polyfill
	    // https://gist.github.com/paulirish/1579671
	    (function(){

	        var lastTime = 0;

	        global.requestAnimationFrame = global.requestAnimationFrame || global.webkitRequestAnimationFrame || function(callback, element) {
	            var currTime = new Date().getTime();
	            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	            var id = global.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
	            lastTime = currTime + timeToCall;
	            return id;
	        };

	        if (!global.cancelAnimationFrame) {

	            global.cancelAnimationFrame = function(id) {
	                clearTimeout(id);
	            };
	        }

	    })();

	    UI.support.touch = (
	        ('ontouchstart' in document) ||
	        (global.DocumentTouch && document instanceof global.DocumentTouch)  ||
	        (global.navigator.msPointerEnabled && global.navigator.msMaxTouchPoints > 0) || //IE 10
	        (global.navigator.pointerEnabled && global.navigator.maxTouchPoints > 0) || //IE >=11
	        false
	    );

	    UI.support.mutationobserver = (global.MutationObserver || global.WebKitMutationObserver || null);

	    UI.Utils = {};

	    UI.Utils.isFullscreen = function() {
	        return document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.fullscreenElement || false;
	    };

	    UI.Utils.str2json = function(str, notevil) {
	        try {
	            if (notevil) {
	                return JSON.parse(str
	                    // wrap keys without quote with valid double quote
	                    .replace(/([\$\w]+)\s*:/g, function(_, $1){return '"'+$1+'":';})
	                    // replacing single quote wrapped ones to double quote
	                    .replace(/'([^']+)'/g, function(_, $1){return '"'+$1+'"';})
	                );
	            } else {
	                return (new Function("", "var json = " + str + "; return JSON.parse(JSON.stringify(json));"))();
	            }
	        } catch(e) { return false; }
	    };

	    UI.Utils.debounce = function(func, wait, immediate) {
	        var timeout;
	        return function() {
	            var context = this, args = arguments;
	            var later = function() {
	                timeout = null;
	                if (!immediate) func.apply(context, args);
	            };
	            var callNow = immediate && !timeout;
	            clearTimeout(timeout);
	            timeout = setTimeout(later, wait);
	            if (callNow) func.apply(context, args);
	        };
	    };

	    UI.Utils.removeCssRules = function(selectorRegEx) {
	        var idx, idxs, stylesheet, _i, _j, _k, _len, _len1, _len2, _ref;

	        if(!selectorRegEx) return;

	        setTimeout(function(){
	            try {
	              _ref = document.styleSheets;
	              for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	                stylesheet = _ref[_i];
	                idxs = [];
	                stylesheet.cssRules = stylesheet.cssRules;
	                for (idx = _j = 0, _len1 = stylesheet.cssRules.length; _j < _len1; idx = ++_j) {
	                  if (stylesheet.cssRules[idx].type === CSSRule.STYLE_RULE && selectorRegEx.test(stylesheet.cssRules[idx].selectorText)) {
	                    idxs.unshift(idx);
	                  }
	                }
	                for (_k = 0, _len2 = idxs.length; _k < _len2; _k++) {
	                  stylesheet.deleteRule(idxs[_k]);
	                }
	              }
	            } catch (_error) {}
	        }, 0);
	    };

	    UI.Utils.isInView = function(element, options) {

	        var $element = $(element);

	        if (!$element.is(':visible')) {
	            return false;
	        }

	        var window_left = UI.$win.scrollLeft(), window_top = UI.$win.scrollTop(), offset = $element.offset(), left = offset.left, top = offset.top;

	        options = $.extend({topoffset:0, leftoffset:0}, options);

	        if (top + $element.height() >= window_top && top - options.topoffset <= window_top + UI.$win.height() &&
	            left + $element.width() >= window_left && left - options.leftoffset <= window_left + UI.$win.width()) {
	          return true;
	        } else {
	          return false;
	        }
	    };

	    UI.Utils.checkDisplay = function(context, initanimation) {

	        var elements = UI.$('[data-uk-margin], [data-uk-grid-match], [data-uk-grid-margin], [data-uk-check-display]', context || document), animated;

	        if (context && !elements.length) {
	            elements = $(context);
	        }

	        elements.trigger('display.uk.check');

	        // fix firefox / IE animations
	        if (initanimation) {

	            if (typeof(initanimation)!='string') {
	                initanimation = '[class*="uk-animation-"]';
	            }

	            elements.find(initanimation).each(function(){

	                var ele  = UI.$(this),
	                    cls  = ele.attr('class'),
	                    anim = cls.match(/uk\-animation\-(.+)/);

	                ele.removeClass(anim[0]).width();

	                ele.addClass(anim[0]);
	            });
	        }

	        return elements;
	    };

	    UI.Utils.options = function(string) {

	        if ($.isPlainObject(string)) return string;

	        var start = (string ? string.indexOf("{") : -1), options = {};

	        if (start != -1) {
	            try {
	                options = UI.Utils.str2json(string.substr(start));
	            } catch (e) {}
	        }

	        return options;
	    };

	    UI.Utils.animate = function(element, cls) {

	        var d = $.Deferred();

	        element = UI.$(element);
	        cls     = cls;

	        element.css('display', 'none').addClass(cls).one(UI.support.animation.end, function() {
	            element.removeClass(cls);
	            d.resolve();
	        }).width();

	        element.css('display', '');

	        return d.promise();
	    };

	    UI.Utils.uid = function(prefix) {
	        return (prefix || 'id') + (new Date().getTime())+"RAND"+(Math.ceil(Math.random() * 100000));
	    };

	    UI.Utils.template = function(str, data) {

	        var tokens = str.replace(/\n/g, '\\n').replace(/\{\{\{\s*(.+?)\s*\}\}\}/g, "{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),
	            i=0, toc, cmd, prop, val, fn, output = [], openblocks = 0;

	        while(i < tokens.length) {

	            toc = tokens[i];

	            if(toc.match(/\{\{\s*(.+?)\s*\}\}/)) {
	                i = i + 1;
	                toc  = tokens[i];
	                cmd  = toc[0];
	                prop = toc.substring(toc.match(/^(\^|\#|\!|\~|\:)/) ? 1:0);

	                switch(cmd) {
	                    case '~':
	                        output.push("for(var $i=0;$i<"+prop+".length;$i++) { var $item = "+prop+"[$i];");
	                        openblocks++;
	                        break;
	                    case ':':
	                        output.push("for(var $key in "+prop+") { var $val = "+prop+"[$key];");
	                        openblocks++;
	                        break;
	                    case '#':
	                        output.push("if("+prop+") {");
	                        openblocks++;
	                        break;
	                    case '^':
	                        output.push("if(!"+prop+") {");
	                        openblocks++;
	                        break;
	                    case '/':
	                        output.push("}");
	                        openblocks--;
	                        break;
	                    case '!':
	                        output.push("__ret.push("+prop+");");
	                        break;
	                    default:
	                        output.push("__ret.push(escape("+prop+"));");
	                        break;
	                }
	            } else {
	                output.push("__ret.push('"+toc.replace(/\'/g, "\\'")+"');");
	            }
	            i = i + 1;
	        }

	        fn  = new Function('$data', [
	            'var __ret = [];',
	            'try {',
	            'with($data){', (!openblocks ? output.join('') : '__ret = ["Not all blocks are closed correctly."]'), '};',
	            '}catch(e){__ret = [e.message];}',
	            'return __ret.join("").replace(/\\n\\n/g, "\\n");',
	            "function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"
	        ].join("\n"));

	        return data ? fn(data) : fn;
	    };

	    UI.Utils.events       = {};
	    UI.Utils.events.click = UI.support.touch ? 'tap' : 'click';

	    global.UIkit = UI;

	    // deprecated

	    UI.fn = function(command, options) {

	        var args = arguments, cmd = command.match(/^([a-z\-]+)(?:\.([a-z]+))?/i), component = cmd[1], method = cmd[2];

	        if (!UI[component]) {
	            $.error("UIkit component [" + component + "] does not exist.");
	            return this;
	        }

	        return this.each(function() {
	            var $this = $(this), data = $this.data(component);
	            if (!data) $this.data(component, (data = UI[component](this, method ? undefined : options)));
	            if (method) data[method].apply(data, Array.prototype.slice.call(args, 1));
	        });
	    };

	    $.UIkit          = UI;
	    $.fn.uk          = UI.fn;

	    UI.langdirection = UI.$html.attr("dir") == "rtl" ? "right" : "left";

	    UI.components    = {};

	    UI.component = function(name, def) {

	        var fn = function(element, options) {

	            var $this = this;

	            this.UIkit   = UI;
	            this.element = element ? UI.$(element) : null;
	            this.options = $.extend(true, {}, this.defaults, options);
	            this.plugins = {};

	            if (this.element) {
	                this.element.data(name, this);
	            }

	            this.init();

	            (this.options.plugins.length ? this.options.plugins : Object.keys(fn.plugins)).forEach(function(plugin) {

	                if (fn.plugins[plugin].init) {
	                    fn.plugins[plugin].init($this);
	                    $this.plugins[plugin] = true;
	                }

	            });

	            this.trigger('init.uk.component', [name, this]);

	            return this;
	        };

	        fn.plugins = {};

	        $.extend(true, fn.prototype, {

	            defaults : {plugins: []},

	            boot: function(){},
	            init: function(){},

	            on: function(a1,a2,a3){
	                return UI.$(this.element || this).on(a1,a2,a3);
	            },

	            one: function(a1,a2,a3){
	                return UI.$(this.element || this).one(a1,a2,a3);
	            },

	            off: function(evt){
	                return UI.$(this.element || this).off(evt);
	            },

	            trigger: function(evt, params) {
	                return UI.$(this.element || this).trigger(evt, params);
	            },

	            find: function(selector) {
	                return UI.$(this.element ? this.element: []).find(selector);
	            },

	            proxy: function(obj, methods) {

	                var $this = this;

	                methods.split(' ').forEach(function(method) {
	                    if (!$this[method]) $this[method] = function() { return obj[method].apply(obj, arguments); };
	                });
	            },

	            mixin: function(obj, methods) {

	                var $this = this;

	                methods.split(' ').forEach(function(method) {
	                    if (!$this[method]) $this[method] = obj[method].bind($this);
	                });
	            },

	            option: function() {

	                if (arguments.length == 1) {
	                    return this.options[arguments[0]] || undefined;
	                } else if (arguments.length == 2) {
	                    this.options[arguments[0]] = arguments[1];
	                }
	            }

	        }, def);

	        this.components[name] = fn;

	        this[name] = function() {

	            var element, options;

	            if (arguments.length) {

	                switch(arguments.length) {
	                    case 1:

	                        if (typeof arguments[0] === "string" || arguments[0].nodeType || arguments[0] instanceof jQuery) {
	                            element = $(arguments[0]);
	                        } else {
	                            options = arguments[0];
	                        }

	                        break;
	                    case 2:

	                        element = $(arguments[0]);
	                        options = arguments[1];
	                        break;
	                }
	            }

	            if (element && element.data(name)) {
	                return element.data(name);
	            }

	            return (new UI.components[name](element, options));
	        };

	        if (UI.domready) {
	            UI.component.boot(name);
	        }

	        return fn;
	    };

	    UI.plugin = function(component, name, def) {
	        this.components[component].plugins[name] = def;
	    };

	    UI.component.boot = function(name) {

	        if (UI.components[name].prototype && UI.components[name].prototype.boot && !UI.components[name].booted) {
	            UI.components[name].prototype.boot.apply(UI, []);
	            UI.components[name].booted = true;
	        }
	    };

	    UI.component.bootComponents = function() {

	        for (var component in UI.components) {
	            UI.component.boot(component);
	        }
	    };


	    // DOM mutation save ready helper function

	    UI.domObservers = [];
	    UI.domready     = false;

	    UI.ready = function(fn) {

	        UI.domObservers.push(fn);

	        if (UI.domready) {
	            fn(document);
	        }
	    };

	    UI.on = function(a1,a2,a3){

	        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
	            a2.apply(UI.$doc);
	        }

	        return UI.$doc.on(a1,a2,a3);
	    };

	    UI.one = function(a1,a2,a3){

	        if (a1 && a1.indexOf('ready.uk.dom') > -1 && UI.domready) {
	            a2.apply(UI.$doc);
	            return UI.$doc;
	        }

	        return UI.$doc.one(a1,a2,a3);
	    };

	    UI.trigger = function(evt, params) {
	        return UI.$doc.trigger(evt, params);
	    };

	    UI.domObserve = function(selector, fn) {

	        if(!UI.support.mutationobserver) return;

	        fn = fn || function() {};

	        UI.$(selector).each(function() {

	            var element  = this,
	                $element = UI.$(element);

	            if ($element.data('observer')) {
	                return;
	            }

	            try {

	                var observer = new UI.support.mutationobserver(UI.Utils.debounce(function(mutations) {
	                    fn.apply(element, []);
	                    $element.trigger('changed.uk.dom');
	                }, 50));

	                // pass in the target node, as well as the observer options
	                observer.observe(element, { childList: true, subtree: true });

	                $element.data('observer', observer);

	            } catch(e) {}
	        });
	    };

	    UI.init = function(root) {

	        root = root || document;

	        UI.domObservers.forEach(function(fn){
	            fn(root);
	        });
	    };

	    UI.on('domready.uk.dom', function(){

	        UI.init();

	        if (UI.domready) UI.Utils.checkDisplay();
	    });

	    $(function(){

	        UI.$body = UI.$('body');

	        UI.ready(function(context){
	            UI.domObserve('[data-uk-observe]');
	        });

	        UI.on('changed.uk.dom', function(e) {
	            UI.init(e.target);
	            UI.Utils.checkDisplay(e.target);
	        });

	        UI.trigger('beforeready.uk.dom');

	        UI.component.bootComponents();

	        // custom scroll observer
	        setInterval((function(){

	            var memory = {x: window.pageXOffset, y:window.pageYOffset}, dir;

	            var fn = function(){

	                if (memory.x != window.pageXOffset || memory.y != window.pageYOffset) {

	                    dir = {x: 0 , y: 0};

	                    if (window.pageXOffset != memory.x) dir.x = window.pageXOffset > memory.x ? 1:-1;
	                    if (window.pageYOffset != memory.y) dir.y = window.pageYOffset > memory.y ? 1:-1;

	                    memory = {
	                        "dir": dir, "x": window.pageXOffset, "y": window.pageYOffset
	                    };

	                    UI.$doc.trigger('scrolling.uk.document', [memory]);
	                }
	            };

	            if (UI.support.touch) {
	                UI.$html.on('touchmove touchend MSPointerMove MSPointerUp pointermove pointerup', fn);
	            }

	            if (memory.x || memory.y) fn();

	            return fn;

	        })(), 15);

	        // run component init functions on dom
	        UI.trigger('domready.uk.dom');

	        if (UI.support.touch) {

	            // remove css hover rules for touch devices
	            // UI.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/);

	            // viewport unit fix for uk-height-viewport - should be fixed in iOS 8
	            if (navigator.userAgent.match(/(iPad|iPhone|iPod)/g)) {

	                UI.$win.on('load orientationchange resize', UI.Utils.debounce((function(){

	                    var fn = function() {
	                        $('.uk-height-viewport').css('height', window.innerHeight);
	                        return fn;
	                    };

	                    return fn();

	                })(), 100));
	            }
	        }

	        UI.trigger('afterready.uk.dom');

	        // mark that domready is left behind
	        UI.domready = true;
	    });

	    // add touch identifier class
	    UI.$html.addClass(UI.support.touch ? "uk-touch" : "uk-notouch");

	    // add uk-hover class on tap to support overlays on touch devices
	    if (UI.support.touch) {

	        var hoverset = false,
	            exclude,
	            hovercls = 'uk-hover',
	            selector = '.uk-overlay, .uk-overlay-hover, .uk-overlay-toggle, .uk-animation-hover, .uk-has-hover';

	        UI.$html.on('mouseenter touchstart MSPointerDown pointerdown', selector, function() {

	            if (hoverset) $('.'+hovercls).removeClass(hovercls);

	            hoverset = $(this).addClass(hovercls);

	        }).on('mouseleave touchend MSPointerUp pointerup', function(e) {

	            exclude = $(e.target).parents(selector);

	            if (hoverset) {
	                hoverset.not(exclude).removeClass(hovercls);
	            }
	        });
	    }

	    return UI;
	});

	//  Based on Zeptos touch.js
	//  https://raw.github.com/madrobby/zepto/master/src/touch.js
	//  Zepto.js may be freely distributed under the MIT license.

	;(function($){

	  if ($.fn.swipeLeft) {
	    return;
	  }


	  var touch = {}, touchTimeout, tapTimeout, swipeTimeout, longTapTimeout, longTapDelay = 750, gesture;

	  function swipeDirection(x1, x2, y1, y2) {
	    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
	  }

	  function longTap() {
	    longTapTimeout = null;
	    if (touch.last) {
	      touch.el.trigger('longTap');
	      touch = {};
	    }
	  }

	  function cancelLongTap() {
	    if (longTapTimeout) clearTimeout(longTapTimeout);
	    longTapTimeout = null;
	  }

	  function cancelAll() {
	    if (touchTimeout)   clearTimeout(touchTimeout);
	    if (tapTimeout)     clearTimeout(tapTimeout);
	    if (swipeTimeout)   clearTimeout(swipeTimeout);
	    if (longTapTimeout) clearTimeout(longTapTimeout);
	    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
	    touch = {};
	  }

	  function isPrimaryTouch(event){
	    return event.pointerType == event.MSPOINTER_TYPE_TOUCH && event.isPrimary;
	  }

	  $(function(){
	    var now, delta, deltaX = 0, deltaY = 0, firstTouch;

	    if ('MSGesture' in window) {
	      gesture = new MSGesture();
	      gesture.target = document.body;
	    }

	    $(document)
	      .on('MSGestureEnd gestureend', function(e){

	        var swipeDirectionFromVelocity = e.originalEvent.velocityX > 1 ? 'Right' : e.originalEvent.velocityX < -1 ? 'Left' : e.originalEvent.velocityY > 1 ? 'Down' : e.originalEvent.velocityY < -1 ? 'Up' : null;

	        if (swipeDirectionFromVelocity) {
	          touch.el.trigger('swipe');
	          touch.el.trigger('swipe'+ swipeDirectionFromVelocity);
	        }
	      })
	      // MSPointerDown: for IE10
	      // pointerdown: for IE11
	      .on('touchstart MSPointerDown pointerdown', function(e){

	        if(e.type == 'MSPointerDown' && !isPrimaryTouch(e.originalEvent)) return;

	        firstTouch = (e.type == 'MSPointerDown' || e.type == 'pointerdown') ? e : e.originalEvent.touches[0];

	        now      = Date.now();
	        delta    = now - (touch.last || now);
	        touch.el = $('tagName' in firstTouch.target ? firstTouch.target : firstTouch.target.parentNode);

	        if(touchTimeout) clearTimeout(touchTimeout);

	        touch.x1 = firstTouch.pageX;
	        touch.y1 = firstTouch.pageY;

	        if (delta > 0 && delta <= 250) touch.isDoubleTap = true;

	        touch.last = now;
	        longTapTimeout = setTimeout(longTap, longTapDelay);

	        // adds the current touch contact for IE gesture recognition
	        if (gesture && ( e.type == 'MSPointerDown' || e.type == 'pointerdown' || e.type == 'touchstart' ) ) {
	          gesture.addPointer(e.originalEvent.pointerId);
	        }

	      })
	      // MSPointerMove: for IE10
	      // pointermove: for IE11
	      .on('touchmove MSPointerMove pointermove', function(e){

	        if (e.type == 'MSPointerMove' && !isPrimaryTouch(e.originalEvent)) return;

	        firstTouch = (e.type == 'MSPointerMove' || e.type == 'pointermove') ? e : e.originalEvent.touches[0];

	        cancelLongTap();
	        touch.x2 = firstTouch.pageX;
	        touch.y2 = firstTouch.pageY;

	        deltaX += Math.abs(touch.x1 - touch.x2);
	        deltaY += Math.abs(touch.y1 - touch.y2);
	      })
	      // MSPointerUp: for IE10
	      // pointerup: for IE11
	      .on('touchend MSPointerUp pointerup', function(e){

	        if (e.type == 'MSPointerUp' && !isPrimaryTouch(e.originalEvent)) return;

	        cancelLongTap();

	        // swipe
	        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > 30) || (touch.y2 && Math.abs(touch.y1 - touch.y2) > 30)){

	          swipeTimeout = setTimeout(function() {
	            touch.el.trigger('swipe');
	            touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
	            touch = {};
	          }, 0);

	        // normal tap
	        } else if ('last' in touch) {

	          // don't fire tap when delta position changed by more than 30 pixels,
	          // for instance when moving to a point and back to origin
	          if (isNaN(deltaX) || (deltaX < 30 && deltaY < 30)) {
	            // delay by one tick so we can cancel the 'tap' event if 'scroll' fires
	            // ('tap' fires before 'scroll')
	            tapTimeout = setTimeout(function() {

	              // trigger universal 'tap' with the option to cancelTouch()
	              // (cancelTouch cancels processing of single vs double taps for faster 'tap' response)
	              var event = $.Event('tap');
	              event.cancelTouch = cancelAll;
	              touch.el.trigger(event);

	              // trigger double tap immediately
	              if (touch.isDoubleTap) {
	                touch.el.trigger('doubleTap');
	                touch = {};
	              }

	              // trigger single tap after 250ms of inactivity
	              else {
	                touchTimeout = setTimeout(function(){
	                  touchTimeout = null;
	                  touch.el.trigger('singleTap');
	                  touch = {};
	                }, 250);
	              }
	            }, 0);
	          } else {
	            touch = {};
	          }
	          deltaX = deltaY = 0;
	        }
	      })
	      // when the browser window loses focus,
	      // for example when a modal dialog is shown,
	      // cancel all ongoing events
	      .on('touchcancel MSPointerCancel', cancelAll);

	    // scrolling the window indicates intention of the user
	    // to scroll, not tap or swipe, so cancel all ongoing events
	    $(window).on('scroll', cancelAll);
	  });

	  ['swipe', 'swipeLeft', 'swipeRight', 'swipeUp', 'swipeDown', 'doubleTap', 'tap', 'singleTap', 'longTap'].forEach(function(eventName){
	    $.fn[eventName] = function(callback){ return $(this).on(eventName, callback); };
	  });
	})(jQuery);

	(function(UI) {

	    "use strict";

	    var stacks = [];

	    UI.component('stackMargin', {

	        defaults: {
	            'cls': 'uk-margin-small-top'
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-margin]", context).each(function() {

	                    var ele = UI.$(this), obj;

	                    if (!ele.data("stackMargin")) {
	                        obj = UI.stackMargin(ele, UI.Utils.options(ele.attr("data-uk-margin")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.columns = [];

	            UI.$win.on('resize orientationchange', (function() {

	                var fn = function() {
	                    $this.process();
	                };

	                UI.$(function() {
	                    fn();
	                    UI.$win.on("load", fn);
	                });

	                return UI.Utils.debounce(fn, 20);
	            })());

	            UI.$html.on("changed.uk.dom", function(e) {
	                $this.process();
	            });

	            this.on("display.uk.check", function(e) {
	                if (this.element.is(":visible")) this.process();
	            }.bind(this));

	            stacks.push(this);
	        },

	        process: function() {

	            this.columns = this.element.children();

	            UI.Utils.stackMargin(this.columns, this.options);

	            return this;
	        },

	        revert: function() {
	            this.columns.removeClass(this.options.cls);
	            return this;
	        }
	    });


	    // responsive element e.g. iframes

	    (function(){

	        var elements = [], check = function(ele) {

	            if (!ele.is(':visible')) return;

	            var width  = ele.parent().width(),
	                iwidth = ele.data('width'),
	                ratio  = (width / iwidth),
	                height = Math.floor(ratio * ele.data('height'));

	            ele.css({'height': (width < iwidth) ? height : ele.data('height')});
	        };

	        UI.component('responsiveElement', {

	            defaults: {},

	            boot: function() {

	                // init code
	                UI.ready(function(context) {

	                    UI.$("iframe.uk-responsive-width, [data-uk-responsive]", context).each(function() {

	                        var ele = UI.$(this), obj;

	                        if (!ele.data("responsiveIframe")) {
	                            obj = UI.responsiveElement(ele, {});
	                        }
	                    });
	                });
	            },

	            init: function() {

	                var ele = this.element;

	                if (ele.attr('width') && ele.attr('height')) {

	                    ele.data({

	                        'width' : ele.attr('width'),
	                        'height': ele.attr('height')

	                    }).on('display.uk.check', function(){
	                        check(ele);
	                    });

	                    check(ele);

	                    elements.push(ele);
	                }
	            }
	        });

	        UI.$win.on('resize load', UI.Utils.debounce(function(){

	            elements.forEach(function(ele){
	                check(ele);
	            });

	        }, 15));

	    })();



	    // helper

	    UI.Utils.stackMargin = function(elements, options) {

	        options = UI.$.extend({
	            'cls': 'uk-margin-small-top'
	        }, options);

	        options.cls = options.cls;

	        elements = UI.$(elements).removeClass(options.cls);

	        var skip         = false,
	            firstvisible = elements.filter(":visible:first"),
	            offset       = firstvisible.length ? (firstvisible.position().top + firstvisible.outerHeight()) - 1 : false; // (-1): weird firefox bug when parent container is display:flex

	        if (offset === false) return;

	        elements.each(function() {

	            var column = UI.$(this);

	            if (column.is(":visible")) {

	                if (skip) {
	                    column.addClass(options.cls);
	                } else {

	                    if (column.position().top >= offset) {
	                        skip = column.addClass(options.cls);
	                    }
	                }
	            }
	        });
	    };

	    UI.Utils.matchHeights = function(elements, options) {

	        elements = UI.$(elements).css('min-height', '');
	        options  = UI.$.extend({ row : true }, options);

	        var matchHeights = function(group){

	            if (group.length < 2) return;

	            var max = 0;

	            group.each(function() {
	                max = Math.max(max, UI.$(this).outerHeight());
	            }).each(function() {

	                var element = UI.$(this),
	                    height  = max - (element.css('box-sizing') == 'border-box' ? 0 : (element.outerHeight() - element.height()));

	                element.css('min-height', height + 'px');
	            });
	        };

	        if (options.row) {

	            elements.first().width(); // force redraw

	            setTimeout(function(){

	                var lastoffset = false, group = [];

	                elements.each(function() {

	                    var ele = UI.$(this), offset = ele.offset().top;

	                    if (offset != lastoffset && group.length) {

	                        matchHeights(UI.$(group));
	                        group  = [];
	                        offset = ele.offset().top;
	                    }

	                    group.push(ele);
	                    lastoffset = offset;
	                });

	                if (group.length) {
	                    matchHeights(UI.$(group));
	                }

	            }, 0);

	        } else {
	            matchHeights(elements);
	        }
	    };

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('smoothScroll', {

	        boot: function() {

	            // init code
	            UI.$html.on("click.smooth-scroll.uikit", "[data-uk-smooth-scroll]", function(e) {
	                var ele = UI.$(this);

	                if (!ele.data("smoothScroll")) {
	                    var obj = UI.smoothScroll(ele, UI.Utils.options(ele.attr("data-uk-smooth-scroll")));
	                    ele.trigger("click");
	                }

	                return false;
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on("click", function(e) {
	                e.preventDefault();
	                scrollToElement(UI.$(this.hash).length ? UI.$(this.hash) : UI.$("body"), $this.options);
	            });
	        }
	    });

	    function scrollToElement(ele, options) {

	        options = UI.$.extend({
	            duration: 1000,
	            transition: 'easeOutExpo',
	            offset: 0,
	            complete: function(){}
	        }, options);

	        // get / set parameters
	        var target    = ele.offset().top - options.offset,
	            docheight = UI.$doc.height(),
	            winheight = window.innerHeight;

	        if ((target + winheight) > docheight) {
	            target = docheight - winheight;
	        }

	        // animate to target, fire callback when done
	        UI.$("html,body").stop().animate({scrollTop: target}, options.duration, options.transition).promise().done(options.complete);
	    }

	    UI.Utils.scrollToElement = scrollToElement;

	    if (!UI.$.easing.easeOutExpo) {
	        UI.$.easing.easeOutExpo = function(x, t, b, c, d) { return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b; };
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var $win           = UI.$win,
	        $doc           = UI.$doc,
	        scrollspies    = [],
	        checkScrollSpy = function() {
	            for(var i=0; i < scrollspies.length; i++) {
	                window.requestAnimationFrame.apply(window, [scrollspies[i].check]);
	            }
	        };

	    UI.component('scrollspy', {

	        defaults: {
	            "target"     : false,
	            "cls"        : "uk-scrollspy-inview",
	            "initcls"    : "uk-scrollspy-init-inview",
	            "topoffset"  : 0,
	            "leftoffset" : 0,
	            "repeat"     : false,
	            "delay"      : 0
	        },

	        boot: function() {

	            // listen to scroll and resize
	            $doc.on("scrolling.uk.document", checkScrollSpy);
	            $win.on("load resize orientationchange", UI.Utils.debounce(checkScrollSpy, 50));

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-scrollspy]", context).each(function() {

	                    var element = UI.$(this);

	                    if (!element.data("scrollspy")) {
	                        var obj = UI.scrollspy(element, UI.Utils.options(element.attr("data-uk-scrollspy")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this, inviewstate, initinview, togglecls = this.options.cls.split(/,/), fn = function(){

	                var elements     = $this.options.target ? $this.element.find($this.options.target) : $this.element,
	                    delayIdx     = elements.length === 1 ? 1 : 0,
	                    toggleclsIdx = 0;

	                elements.each(function(idx){

	                    var element     = UI.$(this),
	                        inviewstate = element.data('inviewstate'),
	                        inview      = UI.Utils.isInView(element, $this.options),
	                        toggle      = element.data('ukScrollspyCls') || togglecls[toggleclsIdx].trim();

	                    if (inview && !inviewstate && !element.data('scrollspy-idle')) {

	                        if (!initinview) {
	                            element.addClass($this.options.initcls);
	                            $this.offset = element.offset();
	                            initinview = true;

	                            element.trigger("init.uk.scrollspy");
	                        }

	                        element.data('scrollspy-idle', setTimeout(function(){

	                            element.addClass("uk-scrollspy-inview").toggleClass(toggle).width();
	                            element.trigger("inview.uk.scrollspy");

	                            element.data('scrollspy-idle', false);
	                            element.data('inviewstate', true);

	                        }, $this.options.delay * delayIdx));

	                        delayIdx++;
	                    }

	                    if (!inview && inviewstate && $this.options.repeat) {

	                        if (element.data('scrollspy-idle')) {
	                            clearTimeout(element.data('scrollspy-idle'));
	                        }

	                        element.removeClass("uk-scrollspy-inview").toggleClass(toggle);
	                        element.data('inviewstate', false);

	                        element.trigger("outview.uk.scrollspy");
	                    }

	                    toggleclsIdx = togglecls[toggleclsIdx + 1] ? (toggleclsIdx + 1) : 0;

	                });
	            };

	            fn();

	            this.check = fn;

	            scrollspies.push(this);
	        }
	    });


	    var scrollspynavs = [],
	        checkScrollSpyNavs = function() {
	            for(var i=0; i < scrollspynavs.length; i++) {
	                window.requestAnimationFrame.apply(window, [scrollspynavs[i].check]);
	            }
	        };

	    UI.component('scrollspynav', {

	        defaults: {
	            "cls"          : 'uk-active',
	            "closest"      : false,
	            "topoffset"    : 0,
	            "leftoffset"   : 0,
	            "smoothscroll" : false
	        },

	        boot: function() {

	            // listen to scroll and resize
	            $doc.on("scrolling.uk.document", checkScrollSpyNavs);
	            $win.on("resize orientationchange", UI.Utils.debounce(checkScrollSpyNavs, 50));

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-scrollspy-nav]", context).each(function() {

	                    var element = UI.$(this);

	                    if (!element.data("scrollspynav")) {
	                        var obj = UI.scrollspynav(element, UI.Utils.options(element.attr("data-uk-scrollspy-nav")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var ids     = [],
	                links   = this.find("a[href^='#']").each(function(){ ids.push(UI.$(this).attr("href")); }),
	                targets = UI.$(ids.join(",")),

	                clsActive  = this.options.cls,
	                clsClosest = this.options.closest || this.options.closest;

	            var $this = this, inviews, fn = function(){

	                inviews = [];

	                for (var i=0 ; i < targets.length ; i++) {
	                    if (UI.Utils.isInView(targets.eq(i), $this.options)) {
	                        inviews.push(targets.eq(i));
	                    }
	                }

	                if (inviews.length) {

	                    var navitems,
	                        scrollTop = $win.scrollTop(),
	                        target = (function(){
	                            for(var i=0; i< inviews.length;i++){
	                                if(inviews[i].offset().top >= scrollTop){
	                                    return inviews[i];
	                                }
	                            }
	                        })();

	                    if (!target) return;

	                    if ($this.options.closest) {
	                        links.closest(clsClosest).removeClass(clsActive);
	                        navitems = links.filter("a[href='#"+target.attr("id")+"']").closest(clsClosest).addClass(clsActive);
	                    } else {
	                        navitems = links.removeClass(clsActive).filter("a[href='#"+target.attr("id")+"']").addClass(clsActive);
	                    }

	                    $this.element.trigger("inview.uk.scrollspynav", [target, navitems]);
	                }
	            };

	            if (this.options.smoothscroll && UI.smoothScroll) {
	                links.each(function(){
	                    UI.smoothScroll(this, $this.options.smoothscroll);
	                });
	            }

	            fn();

	            this.element.data("scrollspynav", this);

	            this.check = fn;
	            scrollspynavs.push(this);

	        }
	    });

	})(UIkit);

	(function(UI){

	    "use strict";

	    var toggles = [];

	    UI.component('toggle', {

	        defaults: {
	            target    : false,
	            cls       : 'uk-hidden',
	            animation : false,
	            duration  : 200
	        },

	        boot: function(){

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-toggle]", context).each(function() {
	                    var ele = UI.$(this);

	                    if (!ele.data("toggle")) {
	                        var obj = UI.toggle(ele, UI.Utils.options(ele.attr("data-uk-toggle")));
	                    }
	                });

	                setTimeout(function(){

	                    toggles.forEach(function(toggle){
	                        toggle.getToggles();
	                    });

	                }, 0);
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.aria = (this.options.cls.indexOf('uk-hidden') !== -1);

	            this.getToggles();

	            this.on("click", function(e) {
	                if ($this.element.is('a[href="#"]')) e.preventDefault();
	                $this.toggle();
	            });

	            toggles.push(this);
	        },

	        toggle: function() {

	            if(!this.totoggle.length) return;

	            if (this.options.animation && UI.support.animation) {

	                var $this = this, animations = this.options.animation.split(',');

	                if (animations.length == 1) {
	                    animations[1] = animations[0];
	                }

	                animations[0] = animations[0].trim();
	                animations[1] = animations[1].trim();

	                this.totoggle.css('animation-duration', this.options.duration+'ms');

	                if (this.totoggle.hasClass(this.options.cls)) {

	                    this.totoggle.toggleClass(this.options.cls);

	                    this.totoggle.each(function(){
	                        UI.Utils.animate(this, animations[0]).then(function(){
	                            UI.$(this).css('animation-duration', '');
	                            UI.Utils.checkDisplay(this);
	                        });
	                    });

	                } else {

	                    this.totoggle.each(function(){
	                        UI.Utils.animate(this, animations[1]+' uk-animation-reverse').then(function(){
	                            UI.$(this).toggleClass($this.options.cls).css('animation-duration', '');
	                            UI.Utils.checkDisplay(this);
	                        }.bind(this));
	                    });
	                }

	            } else {
	                this.totoggle.toggleClass(this.options.cls);
	                UI.Utils.checkDisplay(this.totoggle);
	            }

	            this.updateAria();

	        },

	        getToggles: function() {
	            this.totoggle = this.options.target ? UI.$(this.options.target):[];
	            this.updateAria();
	        },

	        updateAria: function() {
	            if (this.aria && this.totoggle.length) {
	                this.totoggle.each(function(){
	                    UI.$(this).attr('aria-hidden', UI.$(this).hasClass('uk-hidden'));
	                });
	            }
	        }
	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('alert', {

	        defaults: {
	            "fade": true,
	            "duration": 200,
	            "trigger": ".uk-alert-close"
	        },

	        boot: function() {

	            // init code
	            UI.$html.on("click.alert.uikit", "[data-uk-alert]", function(e) {

	                var ele = UI.$(this);

	                if (!ele.data("alert")) {

	                    var alert = UI.alert(ele, UI.Utils.options(ele.attr("data-uk-alert")));

	                    if (UI.$(e.target).is(alert.options.trigger)) {
	                        e.preventDefault();
	                        alert.close();
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on("click", this.options.trigger, function(e) {
	                e.preventDefault();
	                $this.close();
	            });
	        },

	        close: function() {

	            var element       = this.trigger("close.uk.alert"),
	                removeElement = function () {
	                    this.trigger("closed.uk.alert").remove();
	                }.bind(this);

	            if (this.options.fade) {
	                element.css("overflow", "hidden").css("max-height", element.height()).animate({
	                    "height"         : 0,
	                    "opacity"        : 0,
	                    "padding-top"    : 0,
	                    "padding-bottom" : 0,
	                    "margin-top"     : 0,
	                    "margin-bottom"  : 0
	                }, this.options.duration, removeElement);
	            } else {
	                removeElement();
	            }
	        }

	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('buttonRadio', {

	        defaults: {
	            "target": ".uk-button"
	        },

	        boot: function() {

	            // init code
	            UI.$html.on("click.buttonradio.uikit", "[data-uk-button-radio]", function(e) {

	                var ele = UI.$(this);

	                if (!ele.data("buttonRadio")) {

	                    var obj    = UI.buttonRadio(ele, UI.Utils.options(ele.attr("data-uk-button-radio"))),
	                        target = UI.$(e.target);

	                    if (target.is(obj.options.target)) {
	                        target.trigger("click");
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            // Init ARIA
	            this.find($this.options.target).attr('aria-checked', 'false').filter(".uk-active").attr('aria-checked', 'true');

	            this.on("click", this.options.target, function(e) {

	                var ele = UI.$(this);

	                if (ele.is('a[href="#"]')) e.preventDefault();

	                $this.find($this.options.target).not(ele).removeClass("uk-active").blur();
	                ele.addClass("uk-active");

	                // Update ARIA
	                $this.find($this.options.target).not(ele).attr('aria-checked', 'false');
	                ele.attr('aria-checked', 'true');

	                $this.trigger("change.uk.button", [ele]);
	            });

	        },

	        getSelected: function() {
	            return this.find(".uk-active");
	        }
	    });

	    UI.component('buttonCheckbox', {

	        defaults: {
	            "target": ".uk-button"
	        },

	        boot: function() {

	            UI.$html.on("click.buttoncheckbox.uikit", "[data-uk-button-checkbox]", function(e) {
	                var ele = UI.$(this);

	                if (!ele.data("buttonCheckbox")) {

	                    var obj    = UI.buttonCheckbox(ele, UI.Utils.options(ele.attr("data-uk-button-checkbox"))),
	                        target = UI.$(e.target);

	                    if (target.is(obj.options.target)) {
	                        target.trigger("click");
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            // Init ARIA
	            this.find($this.options.target).attr('aria-checked', 'false').filter(".uk-active").attr('aria-checked', 'true');

	            this.on("click", this.options.target, function(e) {
	                var ele = UI.$(this);

	                if (ele.is('a[href="#"]')) e.preventDefault();

	                ele.toggleClass("uk-active").blur();

	                // Update ARIA
	                ele.attr('aria-checked', ele.hasClass("uk-active"));

	                $this.trigger("change.uk.button", [ele]);
	            });

	        },

	        getSelected: function() {
	            return this.find(".uk-active");
	        }
	    });


	    UI.component('button', {

	        defaults: {},

	        boot: function() {

	            UI.$html.on("click.button.uikit", "[data-uk-button]", function(e) {
	                var ele = UI.$(this);

	                if (!ele.data("button")) {

	                    var obj = UI.button(ele, UI.Utils.options(ele.attr("data-uk-button")));
	                    ele.trigger("click");
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            // Init ARIA
	            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));

	            this.on("click", function(e) {

	                if ($this.element.is('a[href="#"]')) e.preventDefault();

	                $this.toggle();
	                $this.trigger("change.uk.button", [$this.element.blur().hasClass("uk-active")]);
	            });

	        },

	        toggle: function() {
	            this.element.toggleClass("uk-active");

	            // Update ARIA
	            this.element.attr('aria-pressed', this.element.hasClass("uk-active"));
	        }
	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var active = false, hoverIdle;

	    UI.component('dropdown', {

	        defaults: {
	           'mode'       : 'hover',
	           'remaintime' : 800,
	           'justify'    : false,
	           'boundary'   : UI.$win,
	           'delay'      : 0,
	           'hoverDelayIdle'  : 250
	        },

	        remainIdle: false,

	        boot: function() {

	            var triggerevent = UI.support.touch ? "click" : "mouseenter";

	            // init code
	            UI.$html.on(triggerevent+".dropdown.uikit", "[data-uk-dropdown]", function(e) {

	                var ele = UI.$(this);

	                if (!ele.data("dropdown")) {

	                    var dropdown = UI.dropdown(ele, UI.Utils.options(ele.attr("data-uk-dropdown")));

	                    if (triggerevent=="click" || (triggerevent=="mouseenter" && dropdown.options.mode=="hover")) {
	                        dropdown.element.trigger(triggerevent);
	                    }

	                    if (dropdown.element.find('.uk-dropdown').length) {
	                        e.preventDefault();
	                    }
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.dropdown  = this.find('.uk-dropdown');

	            this.centered  = this.dropdown.hasClass('uk-dropdown-center');
	            this.justified = this.options.justify ? UI.$(this.options.justify) : false;

	            this.boundary  = UI.$(this.options.boundary);
	            this.flipped   = this.dropdown.hasClass('uk-dropdown-flip');

	            if (!this.boundary.length) {
	                this.boundary = UI.$win;
	            }

	            // Init ARIA
	            this.element.attr('aria-haspopup', 'true');
	            this.element.attr('aria-expanded', this.element.hasClass("uk-open"));

	            if (this.options.mode == "click" || UI.support.touch) {

	                this.on("click.uikit.dropdown", function(e) {

	                    var $target = UI.$(e.target);

	                    if (!$target.parents(".uk-dropdown").length) {

	                        if ($target.is("a[href='#']") || $target.parent().is("a[href='#']") || ($this.dropdown.length && !$this.dropdown.is(":visible")) ){
	                            e.preventDefault();
	                        }

	                        $target.blur();
	                    }

	                    if (!$this.element.hasClass('uk-open')) {

	                        $this.show();

	                    } else {

	                        if (!$this.dropdown.find(e.target).length || $target.is(".uk-dropdown-close") || $target.parents(".uk-dropdown-close").length) {
	                            $this.hide();
	                        }
	                    }
	                });

	            } else {

	                this.on("mouseenter", function(e) {

	                    if ($this.remainIdle) {
	                        clearTimeout($this.remainIdle);
	                    }

	                    if (hoverIdle) {
	                        clearTimeout(hoverIdle);
	                    }

	                    if (active && active == $this) {
	                        return;
	                    }

	                    // pseudo manuAim
	                    if (active && active != $this) {

	                        hoverIdle = setTimeout(function() {
	                            hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
	                        }, $this.options.hoverDelayIdle);

	                    } else {

	                        hoverIdle = setTimeout($this.show.bind($this), $this.options.delay);
	                    }

	                }).on("mouseleave", function() {

	                    if (hoverIdle) {
	                        clearTimeout(hoverIdle);
	                    }

	                    $this.remainIdle = setTimeout(function() {
	                        if (active && active == $this) $this.hide();
	                    }, $this.options.remaintime);

	                }).on("click", function(e){

	                    var $target = UI.$(e.target);

	                    if ($this.remainIdle) {
	                        clearTimeout($this.remainIdle);
	                    }

	                    if ($target.is("a[href='#']") || $target.parent().is("a[href='#']")){
	                        e.preventDefault();
	                    }

	                    $this.show();
	                });
	            }
	        },

	        show: function(){

	            UI.$html.off("click.outer.dropdown");

	            if (active && active != this) {
	                active.hide();
	            }

	            if (hoverIdle) {
	                clearTimeout(hoverIdle);
	            }

	            this.checkDimensions();
	            this.element.addClass('uk-open');

	            // Update ARIA
	            this.element.attr('aria-expanded', 'true');

	            this.trigger('show.uk.dropdown', [this]);

	            UI.Utils.checkDisplay(this.dropdown, true);
	            active = this;

	            this.registerOuterClick();
	        },

	        hide: function() {
	            this.element.removeClass('uk-open');

	            if (this.remainIdle) {
	                clearTimeout(this.remainIdle);
	            }

	            this.remainIdle = false;

	            // Update ARIA
	            this.element.attr('aria-expanded', 'false');

	            this.trigger('hide.uk.dropdown', [this]);

	            if (active == this) active = false;
	        },

	        registerOuterClick: function(){

	            var $this = this;

	            UI.$html.off("click.outer.dropdown");

	            setTimeout(function() {

	                UI.$html.on("click.outer.dropdown", function(e) {

	                    if (hoverIdle) {
	                        clearTimeout(hoverIdle);
	                    }

	                    var $target = UI.$(e.target);

	                    if (active == $this && !$this.element.find(e.target).length) {
	                        $this.hide();
	                        UI.$html.off("click.outer.dropdown");
	                    }
	                });
	            }, 10);
	        },

	        checkDimensions: function() {

	            if (!this.dropdown.length) return;

	            if (this.justified && this.justified.length) {
	                this.dropdown.css("min-width", "");
	            }

	            var $this     = this,
	                dropdown  = this.dropdown.css("margin-" + UI.langdirection, ""),
	                offset    = dropdown.show().offset(),
	                width     = dropdown.outerWidth(),
	                boundarywidth  = this.boundary.width(),
	                boundaryoffset = this.boundary.offset() ? this.boundary.offset().left:0;

	            // centered dropdown
	            if (this.centered) {
	                dropdown.css("margin-" + UI.langdirection, (parseFloat(width) / 2 - dropdown.parent().width() / 2) * -1);
	                offset = dropdown.offset();

	                // reset dropdown
	                if ((width + offset.left) > boundarywidth || offset.left < 0) {
	                    dropdown.css("margin-" + UI.langdirection, "");
	                    offset = dropdown.offset();
	                }
	            }

	            // justify dropdown
	            if (this.justified && this.justified.length) {

	                var jwidth = this.justified.outerWidth();

	                dropdown.css("min-width", jwidth);

	                if (UI.langdirection == 'right') {

	                    var right1   = boundarywidth - (this.justified.offset().left + jwidth),
	                        right2   = boundarywidth - (dropdown.offset().left + dropdown.outerWidth());

	                    dropdown.css("margin-right", right1 - right2);

	                } else {
	                    dropdown.css("margin-left", this.justified.offset().left - offset.left);
	                }

	                offset = dropdown.offset();

	            }

	            if ((width + (offset.left-boundaryoffset)) > boundarywidth) {
	                dropdown.addClass('uk-dropdown-flip');
	                offset = dropdown.offset();
	            }

	            if ((offset.left-boundaryoffset) < 0) {

	                dropdown.addClass("uk-dropdown-stack");

	                if (dropdown.hasClass('uk-dropdown-flip')) {

	                    if (!this.flipped) {
	                        dropdown.removeClass('uk-dropdown-flip');
	                        offset = dropdown.offset();
	                        dropdown.addClass('uk-dropdown-flip');
	                    }

	                    setTimeout(function(){

	                        if ((dropdown.offset().left-boundaryoffset) < 0 || !$this.flipped && (dropdown.outerWidth() + (offset.left-boundaryoffset)) < boundarywidth) {
	                            dropdown.removeClass('uk-dropdown-flip');
	                        }
	                    }, 0);
	                }

	                this.trigger('stack.uk.dropdown', [this]);
	            }

	            dropdown.css("display", "");
	        }

	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var grids = [];

	    UI.component('gridMatchHeight', {

	        defaults: {
	            "target"        : false,
	            "row"           : true,
	            "ignorestacked" : false
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-grid-match]", context).each(function() {
	                    var grid = UI.$(this), obj;

	                    if (!grid.data("gridMatchHeight")) {
	                        obj = UI.gridMatchHeight(grid, UI.Utils.options(grid.attr("data-uk-grid-match")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.columns  = this.element.children();
	            this.elements = this.options.target ? this.find(this.options.target) : this.columns;

	            if (!this.columns.length) return;

	            UI.$win.on('load resize orientationchange', (function() {

	                var fn = function() {
	                    $this.match();
	                };

	                UI.$(function() { fn(); });

	                return UI.Utils.debounce(fn, 50);
	            })());

	            UI.$html.on("changed.uk.dom", function(e) {
	                $this.columns  = $this.element.children();
	                $this.elements = $this.options.target ? $this.find($this.options.target) : $this.columns;
	                $this.match();
	            });

	            this.on("display.uk.check", function(e) {
	                if(this.element.is(":visible")) this.match();
	            }.bind(this));

	            grids.push(this);
	        },

	        match: function() {

	            var firstvisible = this.columns.filter(":visible:first");

	            if (!firstvisible.length) return;

	            var stacked = Math.ceil(100 * parseFloat(firstvisible.css('width')) / parseFloat(firstvisible.parent().css('width'))) >= 100;

	            if (stacked && !this.options.ignorestacked) {
	                this.revert();
	            } else {
	                UI.Utils.matchHeights(this.elements, this.options);
	            }

	            return this;
	        },

	        revert: function() {
	            this.elements.css('min-height', '');
	            return this;
	        }
	    });

	    UI.component('gridMargin', {

	        defaults: {
	            "cls": "uk-grid-margin"
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-grid-margin]", context).each(function() {
	                    var grid = UI.$(this), obj;

	                    if (!grid.data("gridMargin")) {
	                        obj = UI.gridMargin(grid, UI.Utils.options(grid.attr("data-uk-grid-margin")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var stackMargin = UI.stackMargin(this.element, this.options);
	        }
	    });

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var active = false, activeCount = 0, $html = UI.$html, body;

	    UI.component('modal', {

	        defaults: {
	            keyboard: true,
	            bgclose: true,
	            minScrollHeight: 150,
	            center: false,
	            modal: true
	        },

	        scrollable: false,
	        transition: false,

	        init: function() {

	            if (!body) body = UI.$('body');

	            if (!this.element.length) return;

	            var $this = this;

	            this.paddingdir = "padding-" + (UI.langdirection == 'left' ? "right":"left");
	            this.dialog     = this.find(".uk-modal-dialog");

	            this.active     = false;

	            // Update ARIA
	            this.element.attr('aria-hidden', this.element.hasClass("uk-open"));

	            this.on("click", ".uk-modal-close", function(e) {
	                e.preventDefault();
	                $this.hide();
	            }).on("click", function(e) {

	                var target = UI.$(e.target);

	                if (target[0] == $this.element[0] && $this.options.bgclose) {
	                    $this.hide();
	                }
	            });
	        },

	        toggle: function() {
	            return this[this.isActive() ? "hide" : "show"]();
	        },

	        show: function() {

	            if (!this.element.length) return;

	            var $this = this;

	            if (this.isActive()) return;

	            if (this.options.modal && active) {
	                active.hide(true);
	            }

	            this.element.removeClass("uk-open").show();
	            this.resize();

	            if (this.options.modal) {
	                active = this;
	            }

	            this.active = true;

	            activeCount++;

	            this.element.addClass("uk-open");

	            $html.addClass("uk-modal-page").height(); // force browser engine redraw

	            // Update ARIA
	            this.element.attr('aria-hidden', 'false');

	            this.element.trigger("show.uk.modal");

	            UI.Utils.checkDisplay(this.dialog, true);

	            return this;
	        },

	        hide: function(force) {

	            if (!force && UI.support.transition) {

	                var $this = this;

	                this.one(UI.support.transition.end, function() {
	                    $this._hide();
	                }).removeClass("uk-open");

	            } else {

	                this._hide();
	            }

	            return this;
	        },

	        resize: function() {

	            var bodywidth  = body.width();

	            this.scrollbarwidth = window.innerWidth - bodywidth;

	            body.css(this.paddingdir, this.scrollbarwidth);

	            this.element.css('overflow-y', this.scrollbarwidth ? 'scroll' : 'auto');

	            if (!this.updateScrollable() && this.options.center) {

	                var dh  = this.dialog.outerHeight(),
	                pad = parseInt(this.dialog.css('margin-top'), 10) + parseInt(this.dialog.css('margin-bottom'), 10);

	                if ((dh + pad) < window.innerHeight) {
	                    this.dialog.css({'top': (window.innerHeight/2 - dh/2) - pad });
	                } else {
	                    this.dialog.css({'top': ''});
	                }
	            }
	        },

	        updateScrollable: function() {

	            // has scrollable?
	            var scrollable = this.dialog.find('.uk-overflow-container:visible:first');

	            if (scrollable.length) {

	                scrollable.css("height", 0);

	                var offset = Math.abs(parseInt(this.dialog.css("margin-top"), 10)),
	                dh     = this.dialog.outerHeight(),
	                wh     = window.innerHeight,
	                h      = wh - 2*(offset < 20 ? 20:offset) - dh;

	                scrollable.css("height", h < this.options.minScrollHeight ? "":h);

	                return true;
	            }

	            return false;
	        },

	        _hide: function() {

	            this.active = false;
	            activeCount--;

	            this.element.hide().removeClass("uk-open");

	            // Update ARIA
	            this.element.attr('aria-hidden', 'true');

	            if (!activeCount) {
	                $html.removeClass("uk-modal-page");
	                body.css(this.paddingdir, "");
	            }

	            if(active===this) active = false;

	            this.trigger("hide.uk.modal");
	        },

	        isActive: function() {
	            return this.active;
	        }

	    });

	    UI.component('modalTrigger', {

	        boot: function() {

	            // init code
	            UI.$html.on("click.modal.uikit", "[data-uk-modal]", function(e) {

	                var ele = UI.$(this);

	                if (ele.is("a")) {
	                    e.preventDefault();
	                }

	                if (!ele.data("modalTrigger")) {
	                    var modal = UI.modalTrigger(ele, UI.Utils.options(ele.attr("data-uk-modal")));
	                    modal.show();
	                }

	            });

	            // close modal on esc button
	            UI.$html.on('keydown.modal.uikit', function (e) {

	                if (active && e.keyCode === 27 && active.options.keyboard) { // ESC
	                    e.preventDefault();
	                    active.hide();
	                }
	            });

	            UI.$win.on("resize orientationchange", UI.Utils.debounce(function(){
	                if (active) active.resize();
	            }, 150));
	        },

	        init: function() {

	            var $this = this;

	            this.options = UI.$.extend({
	                "target": $this.element.is("a") ? $this.element.attr("href") : false
	            }, this.options);

	            this.modal = UI.modal(this.options.target, this.options);

	            this.on("click", function(e) {
	                e.preventDefault();
	                $this.show();
	            });

	            //methods
	            this.proxy(this.modal, "show hide isActive");
	        }
	    });

	    UI.modal.dialog = function(content, options) {

	        var modal = UI.modal(UI.$(UI.modal.dialog.template).appendTo("body"), options);

	        modal.on("hide.uk.modal", function(){
	            if (modal.persist) {
	                modal.persist.appendTo(modal.persist.data("modalPersistParent"));
	                modal.persist = false;
	            }
	            modal.element.remove();
	        });

	        setContent(content, modal);

	        return modal;
	    };

	    UI.modal.dialog.template = '<div class="uk-modal"><div class="uk-modal-dialog" style="min-height:0;"></div></div>';

	    UI.modal.alert = function(content, options) {

	        options = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, options);

	        var modal = UI.modal.dialog(([
	            '<div class="uk-margin uk-modal-content">'+String(content)+'</div>',
	            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-button-primary uk-modal-close">'+options.labels.Ok+'</button></div>'
	        ]).join(""), options);

	        modal.on('show.uk.modal', function(){
	            setTimeout(function(){
	                modal.element.find('button:first').focus();
	            }, 50);
	        });

	        modal.show();
	    };

	    UI.modal.confirm = function(content, onconfirm, options) {

	        onconfirm = UI.$.isFunction(onconfirm) ? onconfirm : function(){};
	        options   = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, options);

	        var modal = UI.modal.dialog(([
	            '<div class="uk-margin uk-modal-content">'+String(content)+'</div>',
	            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+options.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-confirm">'+options.labels.Ok+'</button></div>'
	        ]).join(""), options);

	        modal.element.find(".js-modal-confirm").on("click", function(){
	            onconfirm();
	            modal.hide();
	        });

	        modal.on('show.uk.modal', function(){
	            setTimeout(function(){
	                modal.element.find('button:first').focus();
	            }, 50);
	        });

	        modal.show();
	    };

	    UI.modal.prompt = function(text, value, onsubmit, options) {

	        onsubmit = UI.$.isFunction(onsubmit) ? onsubmit : function(value){};
	        options  = UI.$.extend(true, {bgclose:false, keyboard:false, modal:false, labels:UI.modal.labels}, options);

	        var modal = UI.modal.dialog(([
	            text ? '<div class="uk-modal-content uk-form">'+String(text)+'</div>':'',
	            '<div class="uk-margin-small-top uk-modal-content uk-form"><p><input type="text" class="uk-width-1-1"></p></div>',
	            '<div class="uk-modal-footer uk-text-right"><button class="uk-button uk-modal-close">'+options.labels.Cancel+'</button> <button class="uk-button uk-button-primary js-modal-ok">'+options.labels.Ok+'</button></div>'
	        ]).join(""), options),

	        input = modal.element.find("input[type='text']").val(value || '').on('keyup', function(e){
	            if (e.keyCode == 13) {
	                modal.element.find(".js-modal-ok").trigger('click');
	            }
	        });

	        modal.element.find(".js-modal-ok").on("click", function(){
	            if (onsubmit(input.val())!==false){
	                modal.hide();
	            }
	        });

	        modal.on('show.uk.modal', function(){
	            setTimeout(function(){
	                input.focus();
	            }, 50);
	        });

	        modal.show();
	    };

	    UI.modal.blockUI = function(content, options) {

	        var modal = UI.modal.dialog(([
	            '<div class="uk-margin uk-modal-content">'+String(content || '<div class="uk-text-center">...</div>')+'</div>'
	        ]).join(""), UI.$.extend({bgclose:false, keyboard:false, modal:false}, options));

	        modal.content = modal.element.find('.uk-modal-content:first');
	        modal.show();

	        return modal;
	    };


	    UI.modal.labels = {
	        'Ok': 'Ok',
	        'Cancel': 'Cancel'
	    };


	    // helper functions
	    function setContent(content, modal){

	        if(!modal) return;

	        if (typeof content === 'object') {

	            // convert DOM object to a jQuery object
	            content = content instanceof jQuery ? content : UI.$(content);

	            if(content.parent().length) {
	                modal.persist = content;
	                modal.persist.data("modalPersistParent", content.parent());
	            }
	        }else if (typeof content === 'string' || typeof content === 'number') {
	                // just insert the data as innerHTML
	                content = UI.$('<div></div>').html(content);
	        }else {
	                // unsupported data type!
	                content = UI.$('<div></div>').html('UIkit.modal Error: Unsupported data type: ' + typeof content);
	        }

	        content.appendTo(modal.element.find('.uk-modal-dialog'));

	        return modal;
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('nav', {

	        defaults: {
	            "toggle": ">li.uk-parent > a[href='#']",
	            "lists": ">li.uk-parent > ul",
	            "multiple": false
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-nav]", context).each(function() {
	                    var nav = UI.$(this);

	                    if (!nav.data("nav")) {
	                        var obj = UI.nav(nav, UI.Utils.options(nav.attr("data-uk-nav")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on("click.uikit.nav", this.options.toggle, function(e) {
	                e.preventDefault();
	                var ele = UI.$(this);
	                $this.open(ele.parent()[0] == $this.element[0] ? ele : ele.parent("li"));
	            });

	            this.find(this.options.lists).each(function() {
	                var $ele   = UI.$(this),
	                    parent = $ele.parent(),
	                    active = parent.hasClass("uk-active");

	                $ele.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>');
	                parent.data("list-container", $ele.parent()[active ? 'removeClass':'addClass']('uk-hidden'));

	                // Init ARIA
	                parent.attr('aria-expanded', parent.hasClass("uk-open"));

	                if (active) $this.open(parent, true);
	            });

	        },

	        open: function(li, noanimation) {

	            var $this = this, element = this.element, $li = UI.$(li), $container = $li.data('list-container');

	            if (!this.options.multiple) {

	                element.children('.uk-open').not(li).each(function() {

	                    var ele = UI.$(this);

	                    if (ele.data('list-container')) {
	                        ele.data('list-container').stop().animate({height: 0}, function() {
	                            UI.$(this).parent().removeClass('uk-open').end().addClass('uk-hidden');
	                        });
	                    }
	                });
	            }

	            $li.toggleClass('uk-open');

	            // Update ARIA
	            $li.attr('aria-expanded', $li.hasClass('uk-open'));

	            if ($container) {

	                if ($li.hasClass('uk-open')) {
	                    $container.removeClass('uk-hidden');
	                }

	                if (noanimation) {

	                    $container.stop().height($li.hasClass('uk-open') ? 'auto' : 0);

	                    if (!$li.hasClass('uk-open')) {
	                        $container.addClass('uk-hidden');
	                    }

	                    this.trigger('display.uk.check');

	                } else {

	                    $container.stop().animate({
	                        height: ($li.hasClass('uk-open') ? getHeight($container.find('ul:first')) : 0)
	                    }, function() {

	                        if (!$li.hasClass('uk-open')) {
	                            $container.addClass('uk-hidden');
	                        } else {
	                            $container.css('height', '');
	                        }

	                        $this.trigger('display.uk.check');
	                    });
	                }
	            }
	        }
	    });


	    // helper

	    function getHeight(ele) {
	        var $ele = UI.$(ele), height = "auto";

	        if ($ele.is(":visible")) {
	            height = $ele.outerHeight();
	        } else {
	            var tmp = {
	                position: $ele.css("position"),
	                visibility: $ele.css("visibility"),
	                display: $ele.css("display")
	            };

	            height = $ele.css({position: 'absolute', visibility: 'hidden', display: 'block'}).outerHeight();

	            $ele.css(tmp); // reset element
	        }

	        return height;
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var scrollpos = {x: window.scrollX, y: window.scrollY},
	        $win      = UI.$win,
	        $doc      = UI.$doc,
	        $html     = UI.$html,
	        Offcanvas = {

	        show: function(element) {

	            element = UI.$(element);

	            if (!element.length) return;

	            var $body     = UI.$('body'),
	                bar       = element.find(".uk-offcanvas-bar:first"),
	                rtl       = (UI.langdirection == "right"),
	                flip      = bar.hasClass("uk-offcanvas-bar-flip") ? -1:1,
	                dir       = flip * (rtl ? -1 : 1);

	            scrollpos = {x: window.pageXOffset, y: window.pageYOffset};

	            element.addClass("uk-active");

	            $body.css({"width": window.innerWidth, "height": window.innerHeight}).addClass("uk-offcanvas-page");
	            $body.css((rtl ? "margin-right" : "margin-left"), (rtl ? -1 : 1) * (bar.outerWidth() * dir)).width(); // .width() - force redraw

	            $html.css('margin-top', scrollpos.y * -1);

	            bar.addClass("uk-offcanvas-bar-show");

	            this._initElement(element);

	            bar.trigger('show.uk.offcanvas', [element, bar]);

	            // Update ARIA
	            element.attr('aria-hidden', 'false');
	        },

	        hide: function(force) {

	            var $body = UI.$('body'),
	                panel = UI.$(".uk-offcanvas.uk-active"),
	                rtl   = (UI.langdirection == "right"),
	                bar   = panel.find(".uk-offcanvas-bar:first"),
	                finalize = function() {
	                    $body.removeClass("uk-offcanvas-page").css({"width": "", "height": "", "margin-left": "", "margin-right": ""});
	                    panel.removeClass("uk-active");

	                    bar.removeClass("uk-offcanvas-bar-show");
	                    $html.css('margin-top', '');
	                    window.scrollTo(scrollpos.x, scrollpos.y);
	                    bar.trigger('hide.uk.offcanvas', [panel, bar]);

	                    // Update ARIA
	                    panel.attr('aria-hidden', 'true');
	                };

	            if (!panel.length) return;

	            if (UI.support.transition && !force) {

	                $body.one(UI.support.transition.end, function() {
	                    finalize();
	                }).css((rtl ? "margin-right" : "margin-left"), "");

	                setTimeout(function(){
	                    bar.removeClass("uk-offcanvas-bar-show");
	                }, 0);

	            } else {
	                finalize();
	            }
	        },

	        _initElement: function(element) {

	            if (element.data("OffcanvasInit")) return;

	            element.on("click.uk.offcanvas swipeRight.uk.offcanvas swipeLeft.uk.offcanvas", function(e) {

	                var target = UI.$(e.target);

	                if (!e.type.match(/swipe/)) {

	                    if (!target.hasClass("uk-offcanvas-close")) {
	                        if (target.hasClass("uk-offcanvas-bar")) return;
	                        if (target.parents(".uk-offcanvas-bar:first").length) return;
	                    }
	                }

	                e.stopImmediatePropagation();
	                Offcanvas.hide();
	            });

	            element.on("click", "a[href^='#']", function(e){

	                var link = UI.$(this),
	                    href = link.attr("href");

	                if (href == "#") {
	                    return;
	                }

	                UI.$doc.one('hide.uk.offcanvas', function() {

	                    var target;

	                    try {
	                        target = UI.$(href);
	                    } catch (e){
	                        target = ""
	                    }

	                    if (!target.length) {
	                        target = UI.$('[name="'+href.replace('#','')+'"]');
	                    }

	                    if (target.length && link.attr('data-uk-smooth-scroll') && UI.Utils.scrollToElement) {
	                        UI.Utils.scrollToElement(target, UI.Utils.options(link.attr('data-uk-smooth-scroll') || '{}'));
	                    } else {
	                        window.location.href = href;
	                    }
	                });

	                Offcanvas.hide();
	            });

	            element.data("OffcanvasInit", true);
	        }
	    };

	    UI.component('offcanvasTrigger', {

	        boot: function() {

	            // init code
	            $html.on("click.offcanvas.uikit", "[data-uk-offcanvas]", function(e) {

	                e.preventDefault();

	                var ele = UI.$(this);

	                if (!ele.data("offcanvasTrigger")) {
	                    var obj = UI.offcanvasTrigger(ele, UI.Utils.options(ele.attr("data-uk-offcanvas")));
	                    ele.trigger("click");
	                }
	            });

	            $html.on('keydown.uk.offcanvas', function(e) {

	                if (e.keyCode === 27) { // ESC
	                    Offcanvas.hide();
	                }
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.options = UI.$.extend({
	                "target": $this.element.is("a") ? $this.element.attr("href") : false
	            }, this.options);

	            this.on("click", function(e) {
	                e.preventDefault();
	                Offcanvas.show($this.options.target);
	            });
	        }
	    });

	    UI.offcanvas = Offcanvas;

	})(UIkit);

	(function(UI) {

	    "use strict";

	    var Animations;

	    UI.component('switcher', {

	        defaults: {
	            connect   : false,
	            toggle    : ">*",
	            active    : 0,
	            animation : false,
	            duration  : 200
	        },

	        animating: false,

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-switcher]", context).each(function() {
	                    var switcher = UI.$(this);

	                    if (!switcher.data("switcher")) {
	                        var obj = UI.switcher(switcher, UI.Utils.options(switcher.attr("data-uk-switcher")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.on("click.uikit.switcher", this.options.toggle, function(e) {
	                e.preventDefault();
	                $this.show(this);
	            });

	            if (this.options.connect) {

	                this.connect = UI.$(this.options.connect);

	                this.connect.find(".uk-active").removeClass(".uk-active");

	                // delegate switch commands within container content
	                if (this.connect.length) {

	                    // Init ARIA for connect
	                    this.connect.children().attr('aria-hidden', 'true');

	                    this.connect.on("click", '[data-uk-switcher-item]', function(e) {

	                        e.preventDefault();

	                        var item = UI.$(this).attr('data-uk-switcher-item');

	                        if ($this.index == item) return;

	                        switch(item) {
	                            case 'next':
	                            case 'previous':
	                                $this.show($this.index + (item=='next' ? 1:-1));
	                                break;
	                            default:
	                                $this.show(parseInt(item, 10));
	                        }
	                    }).on('swipeRight swipeLeft', function(e) {
	                        e.preventDefault();
	                        if(!window.getSelection().toString()) {
	                            $this.show($this.index + (e.type == 'swipeLeft' ? 1 : -1));
	                        }
	                    });
	                }

	                var toggles = this.find(this.options.toggle),
	                    active  = toggles.filter(".uk-active");

	                if (active.length) {
	                    this.show(active, false);
	                } else {

	                    if (this.options.active===false) return;

	                    active = toggles.eq(this.options.active);
	                    this.show(active.length ? active : toggles.eq(0), false);
	                }

	                // Init ARIA for toggles
	                toggles.not(active).attr('aria-expanded', 'false');
	                active.attr('aria-expanded', 'true');

	                this.on('changed.uk.dom', function() {
	                    $this.connect = UI.$($this.options.connect);
	                });
	            }

	        },

	        show: function(tab, animate) {

	            if (this.animating) {
	                return;
	            }

	            if (isNaN(tab)) {
	                tab = UI.$(tab);
	            } else {

	                var toggles = this.find(this.options.toggle);

	                tab = tab < 0 ? toggles.length-1 : tab;
	                tab = toggles.eq(toggles[tab] ? tab : 0);
	            }

	            var $this     = this,
	                toggles   = this.find(this.options.toggle),
	                active    = UI.$(tab),
	                animation = Animations[this.options.animation] || function(current, next) {

	                    if (!$this.options.animation) {
	                        return Animations.none.apply($this);
	                    }

	                    var anim = $this.options.animation.split(',');

	                    if (anim.length == 1) {
	                        anim[1] = anim[0];
	                    }

	                    anim[0] = anim[0].trim();
	                    anim[1] = anim[1].trim();

	                    return coreAnimation.apply($this, [anim, current, next]);
	                };

	            if (animate===false || !UI.support.animation) {
	                animation = Animations.none;
	            }

	            if (active.hasClass("uk-disabled")) return;

	            // Update ARIA for Toggles
	            toggles.attr('aria-expanded', 'false');
	            active.attr('aria-expanded', 'true');

	            toggles.filter(".uk-active").removeClass("uk-active");
	            active.addClass("uk-active");

	            if (this.options.connect && this.connect.length) {

	                this.index = this.find(this.options.toggle).index(active);

	                if (this.index == -1 ) {
	                    this.index = 0;
	                }

	                this.connect.each(function() {

	                    var container = UI.$(this),
	                        children  = UI.$(container.children()),
	                        current   = UI.$(children.filter('.uk-active')),
	                        next      = UI.$(children.eq($this.index));

	                        $this.animating = true;

	                        animation.apply($this, [current, next]).then(function(){

	                            current.removeClass("uk-active");
	                            next.addClass("uk-active");

	                            // Update ARIA for connect
	                            current.attr('aria-hidden', 'true');
	                            next.attr('aria-hidden', 'false');

	                            UI.Utils.checkDisplay(next, true);

	                            $this.animating = false;
	                        });
	                });
	            }

	            this.trigger("show.uk.switcher", [active]);
	        }
	    });

	    Animations = {

	        'none': function() {
	            var d = UI.$.Deferred();
	            d.resolve();
	            return d.promise();
	        },

	        'fade': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-fade', current, next]);
	        },

	        'slide-bottom': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-bottom', current, next]);
	        },

	        'slide-top': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-top', current, next]);
	        },

	        'slide-vertical': function(current, next, dir) {

	            var anim = ['uk-animation-slide-top', 'uk-animation-slide-bottom'];

	            if (current && current.index() > next.index()) {
	                anim.reverse();
	            }

	            return coreAnimation.apply(this, [anim, current, next]);
	        },

	        'slide-left': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-left', current, next]);
	        },

	        'slide-right': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-slide-right', current, next]);
	        },

	        'slide-horizontal': function(current, next, dir) {

	            var anim = ['uk-animation-slide-right', 'uk-animation-slide-left'];

	            if (current && current.index() > next.index()) {
	                anim.reverse();
	            }

	            return coreAnimation.apply(this, [anim, current, next]);
	        },

	        'scale': function(current, next) {
	            return coreAnimation.apply(this, ['uk-animation-scale-up', current, next]);
	        }
	    };

	    UI.switcher.animations = Animations;


	    // helpers

	    function coreAnimation(cls, current, next) {

	        var d = UI.$.Deferred(), clsIn = cls, clsOut = cls, release;

	        if (next[0]===current[0]) {
	            d.resolve();
	            return d.promise();
	        }

	        if (typeof(cls) == 'object') {
	            clsIn  = cls[0];
	            clsOut = cls[1] || cls[0];
	        }

	        release = function() {

	            if (current) current.hide().removeClass('uk-active '+clsOut+' uk-animation-reverse');

	            next.addClass(clsIn).one(UI.support.animation.end, function() {

	                next.removeClass(''+clsIn+'').css({opacity:'', display:''});

	                d.resolve();

	                if (current) current.css({opacity:'', display:''});

	            }.bind(this)).show();
	        };

	        next.css('animation-duration', this.options.duration+'ms');

	        if (current && current.length) {

	            current.css('animation-duration', this.options.duration+'ms');

	            current.css('display', 'none').addClass(clsOut+' uk-animation-reverse').one(UI.support.animation.end, function() {
	                release();
	            }.bind(this)).css('display', '');

	        } else {
	            next.addClass('uk-active');
	            release();
	        }

	        return d.promise();
	    }

	})(UIkit);

	(function(UI) {

	    "use strict";

	    UI.component('tab', {

	        defaults: {
	            'target'    : '>li:not(.uk-tab-responsive, .uk-disabled)',
	            'connect'   : false,
	            'active'    : 0,
	            'animation' : false,
	            'duration'  : 200
	        },

	        boot: function() {

	            // init code
	            UI.ready(function(context) {

	                UI.$("[data-uk-tab]", context).each(function() {

	                    var tab = UI.$(this);

	                    if (!tab.data("tab")) {
	                        var obj = UI.tab(tab, UI.Utils.options(tab.attr("data-uk-tab")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            var $this = this;

	            this.current = false;

	            this.on("click.uikit.tab", this.options.target, function(e) {

	                e.preventDefault();

	                if ($this.switcher && $this.switcher.animating) {
	                    return;
	                }

	                var current = $this.find($this.options.target).not(this);

	                current.removeClass("uk-active").blur();

	                $this.trigger("change.uk.tab", [UI.$(this).addClass("uk-active"), $this.current]);

	                $this.current = UI.$(this);

	                // Update ARIA
	                if (!$this.options.connect) {
	                    current.attr('aria-expanded', 'false');
	                    UI.$(this).attr('aria-expanded', 'true');
	                }
	            });

	            if (this.options.connect) {
	                this.connect = UI.$(this.options.connect);
	            }

	            // init responsive tab
	            this.responsivetab = UI.$('<li class="uk-tab-responsive uk-active"><a></a></li>').append('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>');

	            this.responsivetab.dropdown = this.responsivetab.find('.uk-dropdown');
	            this.responsivetab.lst      = this.responsivetab.dropdown.find('ul');
	            this.responsivetab.caption  = this.responsivetab.find('a:first');

	            if (this.element.hasClass("uk-tab-bottom")) this.responsivetab.dropdown.addClass("uk-dropdown-up");

	            // handle click
	            this.responsivetab.lst.on('click.uikit.tab', 'a', function(e) {

	                e.preventDefault();
	                e.stopPropagation();

	                var link = UI.$(this);

	                $this.element.children('li:not(.uk-tab-responsive)').eq(link.data('index')).trigger('click');
	            });

	            this.on('show.uk.switcher change.uk.tab', function(e, tab) {
	                $this.responsivetab.caption.html(tab.text());
	            });

	            this.element.append(this.responsivetab);

	            // init UIkit components
	            if (this.options.connect) {
	                this.switcher = UI.switcher(this.element, {
	                    "toggle"    : ">li:not(.uk-tab-responsive)",
	                    "connect"   : this.options.connect,
	                    "active"    : this.options.active,
	                    "animation" : this.options.animation,
	                    "duration"  : this.options.duration
	                });
	            }

	            UI.dropdown(this.responsivetab, {"mode": "click"});

	            // init
	            $this.trigger("change.uk.tab", [this.element.find(this.options.target).not('.uk-tab-responsive').filter('.uk-active')]);

	            this.check();

	            UI.$win.on('resize orientationchange', UI.Utils.debounce(function(){
	                if ($this.element.is(":visible"))  $this.check();
	            }, 100));

	            this.on('display.uk.check', function(){
	                if ($this.element.is(":visible"))  $this.check();
	            });
	        },

	        check: function() {

	            var children = this.element.children('li:not(.uk-tab-responsive)').removeClass('uk-hidden');

	            if (!children.length) {
	                this.responsivetab.addClass('uk-hidden');
	                return;
	            }

	            var top          = (children.eq(0).offset().top + Math.ceil(children.eq(0).height()/2)),
	                doresponsive = false,
	                item, link, clone;

	            this.responsivetab.lst.empty();

	            children.each(function(){

	                if (UI.$(this).offset().top > top) {
	                    doresponsive = true;
	                }
	            });

	            if (doresponsive) {

	                for (var i = 0; i < children.length; i++) {

	                    item  = UI.$(children.eq(i));
	                    link  = item.find('a');

	                    if (item.css('float') != 'none' && !item.attr('uk-dropdown')) {

	                        if (!item.hasClass('uk-disabled')) {

	                            clone = item[0].outerHTML.replace('<a ', '<a data-index="'+i+'" ');

	                            this.responsivetab.lst.append(clone);
	                        }

	                        item.addClass('uk-hidden');
	                    }
	                }
	            }

	            this.responsivetab[this.responsivetab.lst.children('li').length ? 'removeClass':'addClass']('uk-hidden');
	        }
	    });

	})(UIkit);

	(function(UI){

	    "use strict";

	    UI.component('cover', {

	        defaults: {
	            automute : true
	        },

	        boot: function() {

	            // auto init
	            UI.ready(function(context) {

	                UI.$("[data-uk-cover]", context).each(function(){

	                    var ele = UI.$(this);

	                    if(!ele.data("cover")) {
	                        var plugin = UI.cover(ele, UI.Utils.options(ele.attr("data-uk-cover")));
	                    }
	                });
	            });
	        },

	        init: function() {

	            this.parent = this.element.parent();

	            UI.$win.on('load resize orientationchange', UI.Utils.debounce(function(){
	                this.check();
	            }.bind(this), 100));

	            this.on("display.uk.check", function(e) {
	                if(this.element.is(":visible")) this.check();
	            }.bind(this));

	            this.check();

	            if (this.element.is('iframe') && this.options.automute) {

	                var src = this.element.attr('src');

	                this.element.attr('src', '').on('load', function(){

	                    this.contentWindow.postMessage('{ "event": "command", "func": "mute", "method":"setVolume", "value":0}', '*');

	                }).attr('src', [src, (src.indexOf('?') > -1 ? '&':'?'), 'enablejsapi=1&api=1'].join(''));
	            }
	        },

	        check: function() {

	            this.element.css({
	                'width'  : '',
	                'height' : ''
	            });

	            this.dimension = {w: this.element.width(), h: this.element.height()};

	            if (this.element.attr('width') && !isNaN(this.element.attr('width'))) {
	                this.dimension.w = this.element.attr('width');
	            }

	            if (this.element.attr('height') && !isNaN(this.element.attr('height'))) {
	                this.dimension.h = this.element.attr('height');
	            }

	            this.ratio     = this.dimension.w / this.dimension.h;

	            var w = this.parent.width(), h = this.parent.height(), width, height;

	            // if element height < parent height (gap underneath)
	            if ((w / this.ratio) < h) {

	                width  = Math.ceil(h * this.ratio);
	                height = h;

	            // element width < parent width (gap to right)
	            } else {

	                width  = w;
	                height = Math.ceil(w / this.ratio);
	            }

	            this.element.css({
	                'width'  : width,
	                'height' : height
	            });
	        }
	    });

	})(UIkit);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module, global) {/**
	 * @license
	 * lodash 3.9.3 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern -o ./lodash.js`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	;(function() {

	  /** Used as a safe reference for `undefined` in pre-ES5 environments. */
	  var undefined;

	  /** Used as the semantic version number. */
	  var VERSION = '3.9.3';

	  /** Used to compose bitmasks for wrapper metadata. */
	  var BIND_FLAG = 1,
	      BIND_KEY_FLAG = 2,
	      CURRY_BOUND_FLAG = 4,
	      CURRY_FLAG = 8,
	      CURRY_RIGHT_FLAG = 16,
	      PARTIAL_FLAG = 32,
	      PARTIAL_RIGHT_FLAG = 64,
	      ARY_FLAG = 128,
	      REARG_FLAG = 256;

	  /** Used as default options for `_.trunc`. */
	  var DEFAULT_TRUNC_LENGTH = 30,
	      DEFAULT_TRUNC_OMISSION = '...';

	  /** Used to detect when a function becomes hot. */
	  var HOT_COUNT = 150,
	      HOT_SPAN = 16;

	  /** Used to indicate the type of lazy iteratees. */
	  var LAZY_DROP_WHILE_FLAG = 0,
	      LAZY_FILTER_FLAG = 1,
	      LAZY_MAP_FLAG = 2;

	  /** Used as the `TypeError` message for "Functions" methods. */
	  var FUNC_ERROR_TEXT = 'Expected a function';

	  /** Used as the internal argument placeholder. */
	  var PLACEHOLDER = '__lodash_placeholder__';

	  /** `Object#toString` result references. */
	  var argsTag = '[object Arguments]',
	      arrayTag = '[object Array]',
	      boolTag = '[object Boolean]',
	      dateTag = '[object Date]',
	      errorTag = '[object Error]',
	      funcTag = '[object Function]',
	      mapTag = '[object Map]',
	      numberTag = '[object Number]',
	      objectTag = '[object Object]',
	      regexpTag = '[object RegExp]',
	      setTag = '[object Set]',
	      stringTag = '[object String]',
	      weakMapTag = '[object WeakMap]';

	  var arrayBufferTag = '[object ArrayBuffer]',
	      float32Tag = '[object Float32Array]',
	      float64Tag = '[object Float64Array]',
	      int8Tag = '[object Int8Array]',
	      int16Tag = '[object Int16Array]',
	      int32Tag = '[object Int32Array]',
	      uint8Tag = '[object Uint8Array]',
	      uint8ClampedTag = '[object Uint8ClampedArray]',
	      uint16Tag = '[object Uint16Array]',
	      uint32Tag = '[object Uint32Array]';

	  /** Used to match empty string literals in compiled template source. */
	  var reEmptyStringLeading = /\b__p \+= '';/g,
	      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
	      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

	  /** Used to match HTML entities and HTML characters. */
	  var reEscapedHtml = /&(?:amp|lt|gt|quot|#39|#96);/g,
	      reUnescapedHtml = /[&<>"'`]/g,
	      reHasEscapedHtml = RegExp(reEscapedHtml.source),
	      reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

	  /** Used to match template delimiters. */
	  var reEscape = /<%-([\s\S]+?)%>/g,
	      reEvaluate = /<%([\s\S]+?)%>/g,
	      reInterpolate = /<%=([\s\S]+?)%>/g;

	  /** Used to match property names within property paths. */
	  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	      reIsPlainProp = /^\w*$/,
	      rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	  /**
	   * Used to match `RegExp` [special characters](http://www.regular-expressions.info/characters.html#special).
	   * In addition to special characters the forward slash is escaped to allow for
	   * easier `eval` use and `Function` compilation.
	   */
	  var reRegExpChars = /[.*+?^${}()|[\]\/\\]/g,
	      reHasRegExpChars = RegExp(reRegExpChars.source);

	  /** Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks). */
	  var reComboMark = /[\u0300-\u036f\ufe20-\ufe23]/g;

	  /** Used to match backslashes in property paths. */
	  var reEscapeChar = /\\(\\)?/g;

	  /** Used to match [ES template delimiters](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-template-literal-lexical-components). */
	  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

	  /** Used to match `RegExp` flags from their coerced string values. */
	  var reFlags = /\w*$/;

	  /** Used to detect hexadecimal string values. */
	  var reHasHexPrefix = /^0[xX]/;

	  /** Used to detect host constructors (Safari > 5). */
	  var reIsHostCtor = /^\[object .+?Constructor\]$/;

	  /** Used to detect unsigned integer values. */
	  var reIsUint = /^\d+$/;

	  /** Used to match latin-1 supplementary letters (excluding mathematical operators). */
	  var reLatin1 = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;

	  /** Used to ensure capturing order of template delimiters. */
	  var reNoMatch = /($^)/;

	  /** Used to match unescaped characters in compiled string literals. */
	  var reUnescapedString = /['\n\r\u2028\u2029\\]/g;

	  /** Used to match words to create compound words. */
	  var reWords = (function() {
	    var upper = '[A-Z\\xc0-\\xd6\\xd8-\\xde]',
	        lower = '[a-z\\xdf-\\xf6\\xf8-\\xff]+';

	    return RegExp(upper + '+(?=' + upper + lower + ')|' + upper + '?' + lower + '|' + upper + '+|[0-9]+', 'g');
	  }());

	  /** Used to detect and test for whitespace. */
	  var whitespace = (
	    // Basic whitespace characters.
	    ' \t\x0b\f\xa0\ufeff' +

	    // Line terminators.
	    '\n\r\u2028\u2029' +

	    // Unicode category "Zs" space separators.
	    '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
	  );

	  /** Used to assign default `context` object properties. */
	  var contextProps = [
	    'Array', 'ArrayBuffer', 'Date', 'Error', 'Float32Array', 'Float64Array',
	    'Function', 'Int8Array', 'Int16Array', 'Int32Array', 'Math', 'Number',
	    'Object', 'RegExp', 'Set', 'String', '_', 'clearTimeout', 'document',
	    'isFinite', 'parseFloat', 'parseInt', 'setTimeout', 'TypeError', 'Uint8Array',
	    'Uint8ClampedArray', 'Uint16Array', 'Uint32Array', 'WeakMap', 'window'
	  ];

	  /** Used to make template sourceURLs easier to identify. */
	  var templateCounter = -1;

	  /** Used to identify `toStringTag` values of typed arrays. */
	  var typedArrayTags = {};
	  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	  typedArrayTags[uint32Tag] = true;
	  typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	  typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	  typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	  typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	  typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	  typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	  /** Used to identify `toStringTag` values supported by `_.clone`. */
	  var cloneableTags = {};
	  cloneableTags[argsTag] = cloneableTags[arrayTag] =
	  cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	  cloneableTags[dateTag] = cloneableTags[float32Tag] =
	  cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	  cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	  cloneableTags[numberTag] = cloneableTags[objectTag] =
	  cloneableTags[regexpTag] = cloneableTags[stringTag] =
	  cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	  cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	  cloneableTags[errorTag] = cloneableTags[funcTag] =
	  cloneableTags[mapTag] = cloneableTags[setTag] =
	  cloneableTags[weakMapTag] = false;

	  /** Used as an internal `_.debounce` options object by `_.throttle`. */
	  var debounceOptions = {
	    'leading': false,
	    'maxWait': 0,
	    'trailing': false
	  };

	  /** Used to map latin-1 supplementary letters to basic latin letters. */
	  var deburredLetters = {
	    '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	    '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	    '\xc7': 'C',  '\xe7': 'c',
	    '\xd0': 'D',  '\xf0': 'd',
	    '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	    '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	    '\xcC': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	    '\xeC': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	    '\xd1': 'N',  '\xf1': 'n',
	    '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	    '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	    '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	    '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	    '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	    '\xc6': 'Ae', '\xe6': 'ae',
	    '\xde': 'Th', '\xfe': 'th',
	    '\xdf': 'ss'
	  };

	  /** Used to map characters to HTML entities. */
	  var htmlEscapes = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '`': '&#96;'
	  };

	  /** Used to map HTML entities to characters. */
	  var htmlUnescapes = {
	    '&amp;': '&',
	    '&lt;': '<',
	    '&gt;': '>',
	    '&quot;': '"',
	    '&#39;': "'",
	    '&#96;': '`'
	  };

	  /** Used to determine if values are of the language type `Object`. */
	  var objectTypes = {
	    'function': true,
	    'object': true
	  };

	  /** Used to escape characters for inclusion in compiled string literals. */
	  var stringEscapes = {
	    '\\': '\\',
	    "'": "'",
	    '\n': 'n',
	    '\r': 'r',
	    '\u2028': 'u2028',
	    '\u2029': 'u2029'
	  };

	  /** Detect free variable `exports`. */
	  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

	  /** Detect free variable `module`. */
	  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

	  /** Detect free variable `global` from Node.js. */
	  var freeGlobal = freeExports && freeModule && typeof global == 'object' && global && global.Object && global;

	  /** Detect free variable `self`. */
	  var freeSelf = objectTypes[typeof self] && self && self.Object && self;

	  /** Detect free variable `window`. */
	  var freeWindow = objectTypes[typeof window] && window && window.Object && window;

	  /** Detect the popular CommonJS extension `module.exports`. */
	  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

	  /**
	   * Used as a reference to the global object.
	   *
	   * The `this` value is used if it's the global object to avoid Greasemonkey's
	   * restricted `window` object, otherwise the `window` object is used.
	   */
	  var root = freeGlobal || ((freeWindow !== (this && this.window)) && freeWindow) || freeSelf || this;

	  /*--------------------------------------------------------------------------*/

	  /**
	   * The base implementation of `compareAscending` which compares values and
	   * sorts them in ascending order without guaranteeing a stable sort.
	   *
	   * @private
	   * @param {*} value The value to compare.
	   * @param {*} other The other value to compare.
	   * @returns {number} Returns the sort order indicator for `value`.
	   */
	  function baseCompareAscending(value, other) {
	    if (value !== other) {
	      var valIsNull = value === null,
	          valIsUndef = value === undefined,
	          valIsReflexive = value === value;

	      var othIsNull = other === null,
	          othIsUndef = other === undefined,
	          othIsReflexive = other === other;

	      if ((value > other && !othIsNull) || !valIsReflexive ||
	          (valIsNull && !othIsUndef && othIsReflexive) ||
	          (valIsUndef && othIsReflexive)) {
	        return 1;
	      }
	      if ((value < other && !valIsNull) || !othIsReflexive ||
	          (othIsNull && !valIsUndef && valIsReflexive) ||
	          (othIsUndef && valIsReflexive)) {
	        return -1;
	      }
	    }
	    return 0;
	  }

	  /**
	   * The base implementation of `_.findIndex` and `_.findLastIndex` without
	   * support for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {Function} predicate The function invoked per iteration.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseFindIndex(array, predicate, fromRight) {
	    var length = array.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      if (predicate(array[index], index, array)) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.indexOf` without support for binary searches.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {*} value The value to search for.
	   * @param {number} fromIndex The index to search from.
	   * @returns {number} Returns the index of the matched value, else `-1`.
	   */
	  function baseIndexOf(array, value, fromIndex) {
	    if (value !== value) {
	      return indexOfNaN(array, fromIndex);
	    }
	    var index = fromIndex - 1,
	        length = array.length;

	    while (++index < length) {
	      if (array[index] === value) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * The base implementation of `_.isFunction` without support for environments
	   * with incorrect `typeof` results.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	   */
	  function baseIsFunction(value) {
	    // Avoid a Chakra JIT bug in compatibility modes of IE 11.
	    // See https://github.com/jashkenas/underscore/issues/1621 for more details.
	    return typeof value == 'function' || false;
	  }

	  /**
	   * Converts `value` to a string if it's not one. An empty string is returned
	   * for `null` or `undefined` values.
	   *
	   * @private
	   * @param {*} value The value to process.
	   * @returns {string} Returns the string.
	   */
	  function baseToString(value) {
	    if (typeof value == 'string') {
	      return value;
	    }
	    return value == null ? '' : (value + '');
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the first character not found in `chars`.
	   */
	  function charsLeftIndex(string, chars) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last character
	   * of `string` that is not found in `chars`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @param {string} chars The characters to find.
	   * @returns {number} Returns the index of the last character not found in `chars`.
	   */
	  function charsRightIndex(string, chars) {
	    var index = string.length;

	    while (index-- && chars.indexOf(string.charAt(index)) > -1) {}
	    return index;
	  }

	  /**
	   * Used by `_.sortBy` to compare transformed elements of a collection and stable
	   * sort them in ascending order.
	   *
	   * @private
	   * @param {Object} object The object to compare to `other`.
	   * @param {Object} other The object to compare to `object`.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareAscending(object, other) {
	    return baseCompareAscending(object.criteria, other.criteria) || (object.index - other.index);
	  }

	  /**
	   * Used by `_.sortByOrder` to compare multiple properties of each element
	   * in a collection and stable sort them in the following order:
	   *
	   * If `orders` is unspecified, sort in ascending order for all properties.
	   * Otherwise, for each property, sort in ascending order if its corresponding value in
	   * orders is true, and descending order if false.
	   *
	   * @private
	   * @param {Object} object The object to compare to `other`.
	   * @param {Object} other The object to compare to `object`.
	   * @param {boolean[]} orders The order to sort by for each property.
	   * @returns {number} Returns the sort order indicator for `object`.
	   */
	  function compareMultiple(object, other, orders) {
	    var index = -1,
	        objCriteria = object.criteria,
	        othCriteria = other.criteria,
	        length = objCriteria.length,
	        ordersLength = orders.length;

	    while (++index < length) {
	      var result = baseCompareAscending(objCriteria[index], othCriteria[index]);
	      if (result) {
	        if (index >= ordersLength) {
	          return result;
	        }
	        return result * (orders[index] ? 1 : -1);
	      }
	    }
	    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
	    // that causes it, under certain circumstances, to provide the same value for
	    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
	    // for more details.
	    //
	    // This also ensures a stable sort in V8 and other engines.
	    // See https://code.google.com/p/v8/issues/detail?id=90 for more details.
	    return object.index - other.index;
	  }

	  /**
	   * Used by `_.deburr` to convert latin-1 supplementary letters to basic latin letters.
	   *
	   * @private
	   * @param {string} letter The matched letter to deburr.
	   * @returns {string} Returns the deburred letter.
	   */
	  function deburrLetter(letter) {
	    return deburredLetters[letter];
	  }

	  /**
	   * Used by `_.escape` to convert characters to HTML entities.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeHtmlChar(chr) {
	    return htmlEscapes[chr];
	  }

	  /**
	   * Used by `_.template` to escape characters for inclusion in compiled
	   * string literals.
	   *
	   * @private
	   * @param {string} chr The matched character to escape.
	   * @returns {string} Returns the escaped character.
	   */
	  function escapeStringChar(chr) {
	    return '\\' + stringEscapes[chr];
	  }

	  /**
	   * Gets the index at which the first occurrence of `NaN` is found in `array`.
	   *
	   * @private
	   * @param {Array} array The array to search.
	   * @param {number} fromIndex The index to search from.
	   * @param {boolean} [fromRight] Specify iterating from right to left.
	   * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	   */
	  function indexOfNaN(array, fromIndex, fromRight) {
	    var length = array.length,
	        index = fromIndex + (fromRight ? 0 : -1);

	    while ((fromRight ? index-- : ++index < length)) {
	      var other = array[index];
	      if (other !== other) {
	        return index;
	      }
	    }
	    return -1;
	  }

	  /**
	   * Checks if `value` is object-like.
	   *
	   * @private
	   * @param {*} value The value to check.
	   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	   */
	  function isObjectLike(value) {
	    return !!value && typeof value == 'object';
	  }

	  /**
	   * Used by `trimmedLeftIndex` and `trimmedRightIndex` to determine if a
	   * character code is whitespace.
	   *
	   * @private
	   * @param {number} charCode The character code to inspect.
	   * @returns {boolean} Returns `true` if `charCode` is whitespace, else `false`.
	   */
	  function isSpace(charCode) {
	    return ((charCode <= 160 && (charCode >= 9 && charCode <= 13) || charCode == 32 || charCode == 160) || charCode == 5760 || charCode == 6158 ||
	      (charCode >= 8192 && (charCode <= 8202 || charCode == 8232 || charCode == 8233 || charCode == 8239 || charCode == 8287 || charCode == 12288 || charCode == 65279)));
	  }

	  /**
	   * Replaces all `placeholder` elements in `array` with an internal placeholder
	   * and returns an array of their indexes.
	   *
	   * @private
	   * @param {Array} array The array to modify.
	   * @param {*} placeholder The placeholder to replace.
	   * @returns {Array} Returns the new array of placeholder indexes.
	   */
	  function replaceHolders(array, placeholder) {
	    var index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      if (array[index] === placeholder) {
	        array[index] = PLACEHOLDER;
	        result[++resIndex] = index;
	      }
	    }
	    return result;
	  }

	  /**
	   * An implementation of `_.uniq` optimized for sorted arrays without support
	   * for callback shorthands and `this` binding.
	   *
	   * @private
	   * @param {Array} array The array to inspect.
	   * @param {Function} [iteratee] The function invoked per iteration.
	   * @returns {Array} Returns the new duplicate-value-free array.
	   */
	  function sortedUniq(array, iteratee) {
	    var seen,
	        index = -1,
	        length = array.length,
	        resIndex = -1,
	        result = [];

	    while (++index < length) {
	      var value = array[index],
	          computed = iteratee ? iteratee(value, index, array) : value;

	      if (!index || seen !== computed) {
	        seen = computed;
	        result[++resIndex] = value;
	      }
	    }
	    return result;
	  }

	  /**
	   * Used by `_.trim` and `_.trimLeft` to get the index of the first non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the first non-whitespace character.
	   */
	  function trimmedLeftIndex(string) {
	    var index = -1,
	        length = string.length;

	    while (++index < length && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.trim` and `_.trimRight` to get the index of the last non-whitespace
	   * character of `string`.
	   *
	   * @private
	   * @param {string} string The string to inspect.
	   * @returns {number} Returns the index of the last non-whitespace character.
	   */
	  function trimmedRightIndex(string) {
	    var index = string.length;

	    while (index-- && isSpace(string.charCodeAt(index))) {}
	    return index;
	  }

	  /**
	   * Used by `_.unescape` to convert HTML entities to characters.
	   *
	   * @private
	   * @param {string} chr The matched character to unescape.
	   * @returns {string} Returns the unescaped character.
	   */
	  function unescapeHtmlChar(chr) {
	    return htmlUnescapes[chr];
	  }

	  /*--------------------------------------------------------------------------*/

	  /**
	   * Create a new pristine `lodash` function using the given `context` object.
	   *
	   * @static
	   * @memberOf _
	   * @category Utility
	   * @param {Object} [context=root] The context object.
	   * @returns {Function} Returns a new `lodash` function.
	   * @example
	   *
	   * _.mixin({ 'foo': _.constant('foo') });
	   *
	   * var lodash = _.runInContext();
	   * lodash.mixin({ 'bar': lodash.constant('bar') });
	   *
	   * _.isFunction(_.foo);
	   * // => true
	   * _.isFunction(_.bar);
	   * // => false
	   *
	   * lodash.isFunction(lodash.foo);
	   * // => false
	   * lodash.isFunction(lodash.bar);
	   * // => true
	   *
	   * // using `context` to mock `Date#getTime` use in `_.now`
	   * var mock = _.runInContext({
	   *   'Date': function() {
	   *     return { 'getTime': getTimeMock };
	   *   }
	   * });
	   *
	   * // or creating a suped-up `defer` in Node.js
	   * var defer = _.runInContext({ 'setTimeout': setImmediate }).defer;
	   */
	  function runInContext(context) {
	    // Avoid issues with some ES3 environments that attempt to use values, named
	    // after built-in constructors like `Object`, for the creation of literals.
	    // ES5 clears this up by stating that literals must use built-in constructors.
	    // See https://es5.github.io/#x11.1.5 for more details.
	    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

	    /** Native constructor references. */
	    var Array = context.Array,
	        Date = context.Date,
	        Error = context.Error,
	        Function = context.Function,
	        Math = context.Math,
	        Number = context.Number,
	        Object = context.Object,
	        RegExp = context.RegExp,
	        String = context.String,
	        TypeError = context.TypeError;

	    /** Used for native method references. */
	    var arrayProto = Array.prototype,
	        objectProto = Object.prototype,
	        stringProto = String.prototype;

	    /** Used to detect DOM support. */
	    var document = (document = context.window) ? document.document : null;

	    /** Used to resolve the decompiled source of functions. */
	    var fnToString = Function.prototype.toString;

	    /** Used to check objects for own properties. */
	    var hasOwnProperty = objectProto.hasOwnProperty;

	    /** Used to generate unique IDs. */
	    var idCounter = 0;

	    /**
	     * Used to resolve the [`toStringTag`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.prototype.tostring)
	     * of values.
	     */
	    var objToString = objectProto.toString;

	    /** Used to restore the original `_` reference in `_.noConflict`. */
	    var oldDash = context._;

	    /** Used to detect if a method is native. */
	    var reIsNative = RegExp('^' +
	      escapeRegExp(fnToString.call(hasOwnProperty))
	      .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	    );

	    /** Native method references. */
	    var ArrayBuffer = getNative(context, 'ArrayBuffer'),
	        bufferSlice = getNative(ArrayBuffer && new ArrayBuffer(0), 'slice'),
	        ceil = Math.ceil,
	        clearTimeout = context.clearTimeout,
	        floor = Math.floor,
	        getPrototypeOf = getNative(Object, 'getPrototypeOf'),
	        parseFloat = context.parseFloat,
	        push = arrayProto.push,
	        Set = getNative(context, 'Set'),
	        setTimeout = context.setTimeout,
	        splice = arrayProto.splice,
	        Uint8Array = getNative(context, 'Uint8Array'),
	        WeakMap = getNative(context, 'WeakMap');

	    /** Used to clone array buffers. */
	    var Float64Array = (function() {
	      // Safari 5 errors when using an array buffer to initialize a typed array
	      // where the array buffer's `byteLength` is not a multiple of the typed
	      // array's `BYTES_PER_ELEMENT`.
	      try {
	        var func = getNative(context, 'Float64Array'),
	            result = new func(new ArrayBuffer(10), 0, 1) && func;
	      } catch(e) {}
	      return result || null;
	    }());

	    /* Native method references for those with the same name as other `lodash` methods. */
	    var nativeCreate = getNative(Object, 'create'),
	        nativeIsArray = getNative(Array, 'isArray'),
	        nativeIsFinite = context.isFinite,
	        nativeKeys = getNative(Object, 'keys'),
	        nativeMax = Math.max,
	        nativeMin = Math.min,
	        nativeNow = getNative(Date, 'now'),
	        nativeNumIsFinite = getNative(Number, 'isFinite'),
	        nativeParseInt = context.parseInt,
	        nativeRandom = Math.random;

	    /** Used as references for `-Infinity` and `Infinity`. */
	    var NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY,
	        POSITIVE_INFINITY = Number.POSITIVE_INFINITY;

	    /** Used as references for the maximum length and index of an array. */
	    var MAX_ARRAY_LENGTH = 4294967295,
	        MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1,
	        HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;

	    /** Used as the size, in bytes, of each `Float64Array` element. */
	    var FLOAT64_BYTES_PER_ELEMENT = Float64Array ? Float64Array.BYTES_PER_ELEMENT : 0;

	    /**
	     * Used as the [maximum length](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.max_safe_integer)
	     * of an array-like value.
	     */
	    var MAX_SAFE_INTEGER = 9007199254740991;

	    /** Used to store function metadata. */
	    var metaMap = WeakMap && new WeakMap;

	    /** Used to lookup unminified function names. */
	    var realNames = {};

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object which wraps `value` to enable implicit chaining.
	     * Methods that operate on and return arrays, collections, and functions can
	     * be chained together. Methods that return a boolean or single value will
	     * automatically end the chain returning the unwrapped value. Explicit chaining
	     * may be enabled using `_.chain`. The execution of chained methods is lazy,
	     * that is, execution is deferred until `_#value` is implicitly or explicitly
	     * called.
	     *
	     * Lazy evaluation allows several methods to support shortcut fusion. Shortcut
	     * fusion is an optimization that merges iteratees to avoid creating intermediate
	     * arrays and reduce the number of iteratee executions.
	     *
	     * Chaining is supported in custom builds as long as the `_#value` method is
	     * directly or indirectly included in the build.
	     *
	     * In addition to lodash methods, wrappers have `Array` and `String` methods.
	     *
	     * The wrapper `Array` methods are:
	     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`,
	     * `splice`, and `unshift`
	     *
	     * The wrapper `String` methods are:
	     * `replace` and `split`
	     *
	     * The wrapper methods that support shortcut fusion are:
	     * `compact`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `filter`,
	     * `first`, `initial`, `last`, `map`, `pluck`, `reject`, `rest`, `reverse`,
	     * `slice`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `toArray`,
	     * and `where`
	     *
	     * The chainable wrapper methods are:
	     * `after`, `ary`, `assign`, `at`, `before`, `bind`, `bindAll`, `bindKey`,
	     * `callback`, `chain`, `chunk`, `commit`, `compact`, `concat`, `constant`,
	     * `countBy`, `create`, `curry`, `debounce`, `defaults`, `defer`, `delay`,
	     * `difference`, `drop`, `dropRight`, `dropRightWhile`, `dropWhile`, `fill`,
	     * `filter`, `flatten`, `flattenDeep`, `flow`, `flowRight`, `forEach`,
	     * `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `functions`,
	     * `groupBy`, `indexBy`, `initial`, `intersection`, `invert`, `invoke`, `keys`,
	     * `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
	     * `memoize`, `merge`, `method`, `methodOf`, `mixin`, `negate`, `omit`, `once`,
	     * `pairs`, `partial`, `partialRight`, `partition`, `pick`, `plant`, `pluck`,
	     * `property`, `propertyOf`, `pull`, `pullAt`, `push`, `range`, `rearg`,
	     * `reject`, `remove`, `rest`, `restParam`, `reverse`, `set`, `shuffle`,
	     * `slice`, `sort`, `sortBy`, `sortByAll`, `sortByOrder`, `splice`, `spread`,
	     * `take`, `takeRight`, `takeRightWhile`, `takeWhile`, `tap`, `throttle`,
	     * `thru`, `times`, `toArray`, `toPlainObject`, `transform`, `union`, `uniq`,
	     * `unshift`, `unzip`, `unzipWith`, `values`, `valuesIn`, `where`, `without`,
	     * `wrap`, `xor`, `zip`, `zipObject`, `zipWith`
	     *
	     * The wrapper methods that are **not** chainable by default are:
	     * `add`, `attempt`, `camelCase`, `capitalize`, `clone`, `cloneDeep`, `deburr`,
	     * `endsWith`, `escape`, `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`,
	     * `findLast`, `findLastIndex`, `findLastKey`, `findWhere`, `first`, `get`,
	     * `gt`, `gte`, `has`, `identity`, `includes`, `indexOf`, `inRange`, `isArguments`,
	     * `isArray`, `isBoolean`, `isDate`, `isElement`, `isEmpty`, `isEqual`, `isError`,
	     * `isFinite` `isFunction`, `isMatch`, `isNative`, `isNaN`, `isNull`, `isNumber`,
	     * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`,
	     * `isTypedArray`, `join`, `kebabCase`, `last`, `lastIndexOf`, `lt`, `lte`,
	     * `max`, `min`, `noConflict`, `noop`, `now`, `pad`, `padLeft`, `padRight`,
	     * `parseInt`, `pop`, `random`, `reduce`, `reduceRight`, `repeat`, `result`,
	     * `runInContext`, `shift`, `size`, `snakeCase`, `some`, `sortedIndex`,
	     * `sortedLastIndex`, `startCase`, `startsWith`, `sum`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `unescape`, `uniqueId`, `value`, and `words`
	     *
	     * The wrapper method `sample` will return a wrapped value when `n` is provided,
	     * otherwise an unwrapped value is returned.
	     *
	     * @name _
	     * @constructor
	     * @category Chain
	     * @param {*} value The value to wrap in a `lodash` instance.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var wrapped = _([1, 2, 3]);
	     *
	     * // returns an unwrapped value
	     * wrapped.reduce(function(total, n) {
	     *   return total + n;
	     * });
	     * // => 6
	     *
	     * // returns a wrapped value
	     * var squares = wrapped.map(function(n) {
	     *   return n * n;
	     * });
	     *
	     * _.isArray(squares);
	     * // => false
	     *
	     * _.isArray(squares.value());
	     * // => true
	     */
	    function lodash(value) {
	      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
	        if (value instanceof LodashWrapper) {
	          return value;
	        }
	        if (hasOwnProperty.call(value, '__chain__') && hasOwnProperty.call(value, '__wrapped__')) {
	          return wrapperClone(value);
	        }
	      }
	      return new LodashWrapper(value);
	    }

	    /**
	     * The function whose prototype all chaining wrappers inherit from.
	     *
	     * @private
	     */
	    function baseLodash() {
	      // No operation performed.
	    }

	    /**
	     * The base constructor for creating `lodash` wrapper objects.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     * @param {boolean} [chainAll] Enable chaining for all wrapper methods.
	     * @param {Array} [actions=[]] Actions to peform to resolve the unwrapped value.
	     */
	    function LodashWrapper(value, chainAll, actions) {
	      this.__wrapped__ = value;
	      this.__actions__ = actions || [];
	      this.__chain__ = !!chainAll;
	    }

	    /**
	     * An object environment feature flags.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    var support = lodash.support = {};

	    (function(x) {
	      var Ctor = function() { this.x = x; },
	          object = { '0': x, 'length': x },
	          props = [];

	      Ctor.prototype = { 'valueOf': x, 'y': x };
	      for (var key in new Ctor) { props.push(key); }

	      /**
	       * Detect if the DOM is supported.
	       *
	       * @memberOf _.support
	       * @type boolean
	       */
	      try {
	        support.dom = document.createDocumentFragment().nodeType === 11;
	      } catch(e) {
	        support.dom = false;
	      }
	    }(1, 0));

	    /**
	     * By default, the template delimiters used by lodash are like those in
	     * embedded Ruby (ERB). Change the following template settings to use
	     * alternative delimiters.
	     *
	     * @static
	     * @memberOf _
	     * @type Object
	     */
	    lodash.templateSettings = {

	      /**
	       * Used to detect `data` property values to be HTML-escaped.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'escape': reEscape,

	      /**
	       * Used to detect code to be evaluated.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'evaluate': reEvaluate,

	      /**
	       * Used to detect `data` property values to inject.
	       *
	       * @memberOf _.templateSettings
	       * @type RegExp
	       */
	      'interpolate': reInterpolate,

	      /**
	       * Used to reference the data object in the template text.
	       *
	       * @memberOf _.templateSettings
	       * @type string
	       */
	      'variable': '',

	      /**
	       * Used to import variables into the compiled template.
	       *
	       * @memberOf _.templateSettings
	       * @type Object
	       */
	      'imports': {

	        /**
	         * A reference to the `lodash` function.
	         *
	         * @memberOf _.templateSettings.imports
	         * @type Function
	         */
	        '_': lodash
	      }
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
	     *
	     * @private
	     * @param {*} value The value to wrap.
	     */
	    function LazyWrapper(value) {
	      this.__wrapped__ = value;
	      this.__actions__ = null;
	      this.__dir__ = 1;
	      this.__dropCount__ = 0;
	      this.__filtered__ = false;
	      this.__iteratees__ = null;
	      this.__takeCount__ = POSITIVE_INFINITY;
	      this.__views__ = null;
	    }

	    /**
	     * Creates a clone of the lazy wrapper object.
	     *
	     * @private
	     * @name clone
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the cloned `LazyWrapper` object.
	     */
	    function lazyClone() {
	      var actions = this.__actions__,
	          iteratees = this.__iteratees__,
	          views = this.__views__,
	          result = new LazyWrapper(this.__wrapped__);

	      result.__actions__ = actions ? arrayCopy(actions) : null;
	      result.__dir__ = this.__dir__;
	      result.__filtered__ = this.__filtered__;
	      result.__iteratees__ = iteratees ? arrayCopy(iteratees) : null;
	      result.__takeCount__ = this.__takeCount__;
	      result.__views__ = views ? arrayCopy(views) : null;
	      return result;
	    }

	    /**
	     * Reverses the direction of lazy iteration.
	     *
	     * @private
	     * @name reverse
	     * @memberOf LazyWrapper
	     * @returns {Object} Returns the new reversed `LazyWrapper` object.
	     */
	    function lazyReverse() {
	      if (this.__filtered__) {
	        var result = new LazyWrapper(this);
	        result.__dir__ = -1;
	        result.__filtered__ = true;
	      } else {
	        result = this.clone();
	        result.__dir__ *= -1;
	      }
	      return result;
	    }

	    /**
	     * Extracts the unwrapped value from its lazy wrapper.
	     *
	     * @private
	     * @name value
	     * @memberOf LazyWrapper
	     * @returns {*} Returns the unwrapped value.
	     */
	    function lazyValue() {
	      var array = this.__wrapped__.value();
	      if (!isArray(array)) {
	        return baseWrapperValue(array, this.__actions__);
	      }
	      var dir = this.__dir__,
	          isRight = dir < 0,
	          view = getView(0, array.length, this.__views__),
	          start = view.start,
	          end = view.end,
	          length = end - start,
	          index = isRight ? end : (start - 1),
	          takeCount = nativeMin(length, this.__takeCount__),
	          iteratees = this.__iteratees__,
	          iterLength = iteratees ? iteratees.length : 0,
	          resIndex = 0,
	          result = [];

	      outer:
	      while (length-- && resIndex < takeCount) {
	        index += dir;

	        var iterIndex = -1,
	            value = array[index];

	        while (++iterIndex < iterLength) {
	          var data = iteratees[iterIndex],
	              iteratee = data.iteratee,
	              type = data.type;

	          if (type == LAZY_DROP_WHILE_FLAG) {
	            if (data.done && (isRight ? (index > data.index) : (index < data.index))) {
	              data.count = 0;
	              data.done = false;
	            }
	            data.index = index;
	            if (!data.done) {
	              var limit = data.limit;
	              if (!(data.done = limit > -1 ? (data.count++ >= limit) : !iteratee(value))) {
	                continue outer;
	              }
	            }
	          } else {
	            var computed = iteratee(value);
	            if (type == LAZY_MAP_FLAG) {
	              value = computed;
	            } else if (!computed) {
	              if (type == LAZY_FILTER_FLAG) {
	                continue outer;
	              } else {
	                break outer;
	              }
	            }
	          }
	        }
	        result[resIndex++] = value;
	      }
	      return result;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a cache object to store key/value pairs.
	     *
	     * @private
	     * @static
	     * @name Cache
	     * @memberOf _.memoize
	     */
	    function MapCache() {
	      this.__data__ = {};
	    }

	    /**
	     * Removes `key` and its value from the cache.
	     *
	     * @private
	     * @name delete
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to remove.
	     * @returns {boolean} Returns `true` if the entry was removed successfully, else `false`.
	     */
	    function mapDelete(key) {
	      return this.has(key) && delete this.__data__[key];
	    }

	    /**
	     * Gets the cached value for `key`.
	     *
	     * @private
	     * @name get
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to get.
	     * @returns {*} Returns the cached value.
	     */
	    function mapGet(key) {
	      return key == '__proto__' ? undefined : this.__data__[key];
	    }

	    /**
	     * Checks if a cached value for `key` exists.
	     *
	     * @private
	     * @name has
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the entry to check.
	     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	     */
	    function mapHas(key) {
	      return key != '__proto__' && hasOwnProperty.call(this.__data__, key);
	    }

	    /**
	     * Sets `value` to `key` of the cache.
	     *
	     * @private
	     * @name set
	     * @memberOf _.memoize.Cache
	     * @param {string} key The key of the value to cache.
	     * @param {*} value The value to cache.
	     * @returns {Object} Returns the cache object.
	     */
	    function mapSet(key, value) {
	      if (key != '__proto__') {
	        this.__data__[key] = value;
	      }
	      return this;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     *
	     * Creates a cache object to store unique values.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     */
	    function SetCache(values) {
	      var length = values ? values.length : 0;

	      this.data = { 'hash': nativeCreate(null), 'set': new Set };
	      while (length--) {
	        this.push(values[length]);
	      }
	    }

	    /**
	     * Checks if `value` is in `cache` mimicking the return signature of
	     * `_.indexOf` by returning `0` if the value is found, else `-1`.
	     *
	     * @private
	     * @param {Object} cache The cache to search.
	     * @param {*} value The value to search for.
	     * @returns {number} Returns `0` if `value` is found, else `-1`.
	     */
	    function cacheIndexOf(cache, value) {
	      var data = cache.data,
	          result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	      return result ? 0 : -1;
	    }

	    /**
	     * Adds `value` to the cache.
	     *
	     * @private
	     * @name push
	     * @memberOf SetCache
	     * @param {*} value The value to cache.
	     */
	    function cachePush(value) {
	      var data = this.data;
	      if (typeof value == 'string' || isObject(value)) {
	        data.set.add(value);
	      } else {
	        data.hash[value] = true;
	      }
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Copies the values of `source` to `array`.
	     *
	     * @private
	     * @param {Array} source The array to copy values from.
	     * @param {Array} [array=[]] The array to copy values to.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayCopy(source, array) {
	      var index = -1,
	          length = source.length;

	      array || (array = Array(length));
	      while (++index < length) {
	        array[index] = source[index];
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEach` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEach(array, iteratee) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (iteratee(array[index], index, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.forEachRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns `array`.
	     */
	    function arrayEachRight(array, iteratee) {
	      var length = array.length;

	      while (length--) {
	        if (iteratee(array[length], length, array) === false) {
	          break;
	        }
	      }
	      return array;
	    }

	    /**
	     * A specialized version of `_.every` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     */
	    function arrayEvery(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (!predicate(array[index], index, array)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseExtremum` for arrays which invokes `iteratee`
	     * with one argument: (value).
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function arrayExtremum(array, iteratee, comparator, exValue) {
	      var index = -1,
	          length = array.length,
	          computed = exValue,
	          result = computed;

	      while (++index < length) {
	        var value = array[index],
	            current = +iteratee(value);

	        if (comparator(current, computed)) {
	          computed = current;
	          result = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.filter` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function arrayFilter(array, predicate) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.map` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function arrayMap(array, iteratee) {
	      var index = -1,
	          length = array.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = iteratee(array[index], index, array);
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.reduce` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the first element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduce(array, iteratee, accumulator, initFromArray) {
	      var index = -1,
	          length = array.length;

	      if (initFromArray && length) {
	        accumulator = array[++index];
	      }
	      while (++index < length) {
	        accumulator = iteratee(accumulator, array[index], index, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.reduceRight` for arrays without support for
	     * callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {boolean} [initFromArray] Specify using the last element of `array`
	     *  as the initial value.
	     * @returns {*} Returns the accumulated value.
	     */
	    function arrayReduceRight(array, iteratee, accumulator, initFromArray) {
	      var length = array.length;
	      if (initFromArray && length) {
	        accumulator = array[--length];
	      }
	      while (length--) {
	        accumulator = iteratee(accumulator, array[length], length, array);
	      }
	      return accumulator;
	    }

	    /**
	     * A specialized version of `_.some` for arrays without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function arraySome(array, predicate) {
	      var index = -1,
	          length = array.length;

	      while (++index < length) {
	        if (predicate(array[index], index, array)) {
	          return true;
	        }
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `_.sum` for arrays without support for iteratees.
	     *
	     * @private
	     * @param {Array} array The array to iterate over.
	     * @returns {number} Returns the sum.
	     */
	    function arraySum(array) {
	      var length = array.length,
	          result = 0;

	      while (length--) {
	        result += +array[length] || 0;
	      }
	      return result;
	    }

	    /**
	     * Used by `_.defaults` to customize its `_.assign` use.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignDefaults(objectValue, sourceValue) {
	      return objectValue === undefined ? sourceValue : objectValue;
	    }

	    /**
	     * Used by `_.template` to customize its `_.assign` use.
	     *
	     * **Note:** This function is like `assignDefaults` except that it ignores
	     * inherited property values when checking if a property is `undefined`.
	     *
	     * @private
	     * @param {*} objectValue The destination object property value.
	     * @param {*} sourceValue The source object property value.
	     * @param {string} key The key associated with the object and source values.
	     * @param {Object} object The destination object.
	     * @returns {*} Returns the value to assign to the destination object.
	     */
	    function assignOwnDefaults(objectValue, sourceValue, key, object) {
	      return (objectValue === undefined || !hasOwnProperty.call(object, key))
	        ? sourceValue
	        : objectValue;
	    }

	    /**
	     * A specialized version of `_.assign` for customizing assigned values without
	     * support for argument juggling, multiple sources, and `this` binding `customizer`
	     * functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} customizer The function to customize assigned values.
	     * @returns {Object} Returns `object`.
	     */
	    function assignWith(object, source, customizer) {
	      var index = -1,
	          props = keys(source),
	          length = props.length;

	      while (++index < length) {
	        var key = props[index],
	            value = object[key],
	            result = customizer(value, source[key], key, object, source);

	        if ((result === result ? (result !== value) : (value === value)) ||
	            (value === undefined && !(key in object))) {
	          object[key] = result;
	        }
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.assign` without support for argument juggling,
	     * multiple sources, and `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @returns {Object} Returns `object`.
	     */
	    function baseAssign(object, source) {
	      return source == null
	        ? object
	        : baseCopy(source, keys(source), object);
	    }

	    /**
	     * The base implementation of `_.at` without support for string collections
	     * and individual key arguments.
	     *
	     * @private
	     * @param {Array|Object} collection The collection to iterate over.
	     * @param {number[]|string[]} props The property names or indexes of elements to pick.
	     * @returns {Array} Returns the new array of picked elements.
	     */
	    function baseAt(collection, props) {
	      var index = -1,
	          isNil = collection == null,
	          isArr = !isNil && isArrayLike(collection),
	          length = isArr ? collection.length : 0,
	          propsLength = props.length,
	          result = Array(propsLength);

	      while(++index < propsLength) {
	        var key = props[index];
	        if (isArr) {
	          result[index] = isIndex(key, length) ? collection[key] : undefined;
	        } else {
	          result[index] = isNil ? undefined : collection[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * Copies properties of `source` to `object`.
	     *
	     * @private
	     * @param {Object} source The object to copy properties from.
	     * @param {Array} props The property names to copy.
	     * @param {Object} [object={}] The object to copy properties to.
	     * @returns {Object} Returns `object`.
	     */
	    function baseCopy(source, props, object) {
	      object || (object = {});

	      var index = -1,
	          length = props.length;

	      while (++index < length) {
	        var key = props[index];
	        object[key] = source[key];
	      }
	      return object;
	    }

	    /**
	     * The base implementation of `_.callback` which supports specifying the
	     * number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function baseCallback(func, thisArg, argCount) {
	      var type = typeof func;
	      if (type == 'function') {
	        return thisArg === undefined
	          ? func
	          : bindCallback(func, thisArg, argCount);
	      }
	      if (func == null) {
	        return identity;
	      }
	      if (type == 'object') {
	        return baseMatches(func);
	      }
	      return thisArg === undefined
	        ? property(func)
	        : baseMatchesProperty(func, thisArg);
	    }

	    /**
	     * The base implementation of `_.clone` without support for argument juggling
	     * and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {string} [key] The key of `value`.
	     * @param {Object} [object] The object `value` belongs to.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates clones with source counterparts.
	     * @returns {*} Returns the cloned value.
	     */
	    function baseClone(value, isDeep, customizer, key, object, stackA, stackB) {
	      var result;
	      if (customizer) {
	        result = object ? customizer(value, key, object) : customizer(value);
	      }
	      if (result !== undefined) {
	        return result;
	      }
	      if (!isObject(value)) {
	        return value;
	      }
	      var isArr = isArray(value);
	      if (isArr) {
	        result = initCloneArray(value);
	        if (!isDeep) {
	          return arrayCopy(value, result);
	        }
	      } else {
	        var tag = objToString.call(value),
	            isFunc = tag == funcTag;

	        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	          result = initCloneObject(isFunc ? {} : value);
	          if (!isDeep) {
	            return baseAssign(result, value);
	          }
	        } else {
	          return cloneableTags[tag]
	            ? initCloneByTag(value, tag, isDeep)
	            : (object ? value : {});
	        }
	      }
	      // Check for circular references and return corresponding clone.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == value) {
	          return stackB[length];
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate it with its clone.
	      stackA.push(value);
	      stackB.push(result);

	      // Recursively populate clone (susceptible to call stack limits).
	      (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	        result[key] = baseClone(subValue, isDeep, customizer, key, value, stackA, stackB);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.create` without support for assigning
	     * properties to the created object.
	     *
	     * @private
	     * @param {Object} prototype The object to inherit from.
	     * @returns {Object} Returns the new object.
	     */
	    var baseCreate = (function() {
	      function object() {}
	      return function(prototype) {
	        if (isObject(prototype)) {
	          object.prototype = prototype;
	          var result = new object;
	          object.prototype = null;
	        }
	        return result || {};
	      };
	    }());

	    /**
	     * The base implementation of `_.delay` and `_.defer` which accepts an index
	     * of where to slice the arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {Object} args The arguments provide to `func`.
	     * @returns {number} Returns the timer id.
	     */
	    function baseDelay(func, wait, args) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return setTimeout(function() { func.apply(undefined, args); }, wait);
	    }

	    /**
	     * The base implementation of `_.difference` which accepts a single array
	     * of values to exclude.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Array} values The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     */
	    function baseDifference(array, values) {
	      var length = array ? array.length : 0,
	          result = [];

	      if (!length) {
	        return result;
	      }
	      var index = -1,
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          cache = (isCommon && values.length >= 200) ? createCache(values) : null,
	          valuesLength = values.length;

	      if (cache) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	        values = cache;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index];

	        if (isCommon && value === value) {
	          var valuesIndex = valuesLength;
	          while (valuesIndex--) {
	            if (values[valuesIndex] === value) {
	              continue outer;
	            }
	          }
	          result.push(value);
	        }
	        else if (indexOf(values, value, 0) < 0) {
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.forEach` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEach = createBaseEach(baseForOwn);

	    /**
	     * The base implementation of `_.forEachRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array|Object|string} Returns `collection`.
	     */
	    var baseEachRight = createBaseEach(baseForOwnRight, true);

	    /**
	     * The base implementation of `_.every` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`
	     */
	    function baseEvery(collection, predicate) {
	      var result = true;
	      baseEach(collection, function(value, index, collection) {
	        result = !!predicate(value, index, collection);
	        return result;
	      });
	      return result;
	    }

	    /**
	     * Gets the extremum value of `collection` invoking `iteratee` for each value
	     * in `collection` to generate the criterion by which the value is ranked.
	     * The `iteratee` is invoked with three arguments: (value, index|key, collection).
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {*} Returns the extremum value.
	     */
	    function baseExtremum(collection, iteratee, comparator, exValue) {
	      var computed = exValue,
	          result = computed;

	      baseEach(collection, function(value, index, collection) {
	        var current = +iteratee(value, index, collection);
	        if (comparator(current, computed) || (current === exValue && current === result)) {
	          computed = current;
	          result = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.fill` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     */
	    function baseFill(array, value, start, end) {
	      var length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : (end >>> 0);
	      start >>>= 0;

	      while (start < length) {
	        array[start++] = value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.filter` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Array} Returns the new filtered array.
	     */
	    function baseFilter(collection, predicate) {
	      var result = [];
	      baseEach(collection, function(value, index, collection) {
	        if (predicate(value, index, collection)) {
	          result.push(value);
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.find`, `_.findLast`, `_.findKey`, and `_.findLastKey`,
	     * without support for callback shorthands and `this` binding, which iterates
	     * over `collection` using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @param {boolean} [retKey] Specify returning the key of the found element
	     *  instead of the element itself.
	     * @returns {*} Returns the found element or its key, else `undefined`.
	     */
	    function baseFind(collection, predicate, eachFunc, retKey) {
	      var result;
	      eachFunc(collection, function(value, key, collection) {
	        if (predicate(value, key, collection)) {
	          result = retKey ? key : value;
	          return false;
	        }
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.flatten` with added support for restricting
	     * flattening and specifying the start index.
	     *
	     * @private
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	     * @returns {Array} Returns the new flattened array.
	     */
	    function baseFlatten(array, isDeep, isStrict) {
	      var index = -1,
	          length = array.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (isObjectLike(value) && isArrayLike(value) &&
	            (isStrict || isArray(value) || isArguments(value))) {
	          if (isDeep) {
	            // Recursively flatten arrays (susceptible to call stack limits).
	            value = baseFlatten(value, isDeep, isStrict);
	          }
	          var valIndex = -1,
	              valLength = value.length;

	          while (++valIndex < valLength) {
	            result[++resIndex] = value[valIndex];
	          }
	        } else if (!isStrict) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `baseForIn` and `baseForOwn` which iterates
	     * over `object` properties returned by `keysFunc` invoking `iteratee` for
	     * each property. Iteratee functions may exit iteration early by explicitly
	     * returning `false`.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseFor = createBaseFor();

	    /**
	     * This function is like `baseFor` except that it iterates over properties
	     * in the opposite order.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {Function} keysFunc The function to get the keys of `object`.
	     * @returns {Object} Returns `object`.
	     */
	    var baseForRight = createBaseFor(true);

	    /**
	     * The base implementation of `_.forIn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForIn(object, iteratee) {
	      return baseFor(object, iteratee, keysIn);
	    }

	    /**
	     * The base implementation of `_.forOwn` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwn(object, iteratee) {
	      return baseFor(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.forOwnRight` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Object} Returns `object`.
	     */
	    function baseForOwnRight(object, iteratee) {
	      return baseForRight(object, iteratee, keys);
	    }

	    /**
	     * The base implementation of `_.functions` which creates an array of
	     * `object` function property names filtered from those provided.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} props The property names to filter.
	     * @returns {Array} Returns the new array of filtered property names.
	     */
	    function baseFunctions(object, props) {
	      var index = -1,
	          length = props.length,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var key = props[index];
	        if (isFunction(object[key])) {
	          result[++resIndex] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `get` without support for string paths
	     * and default values.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} path The path of the property to get.
	     * @param {string} [pathKey] The key representation of path.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseGet(object, path, pathKey) {
	      if (object == null) {
	        return;
	      }
	      if (pathKey !== undefined && pathKey in toObject(object)) {
	        path = [pathKey];
	      }
	      var index = 0,
	          length = path.length;

	      while (object != null && index < length) {
	        object = object[path[index++]];
	      }
	      return (index && index == length) ? object : undefined;
	    }

	    /**
	     * The base implementation of `_.isEqual` without support for `this` binding
	     * `customizer` functions.
	     *
	     * @private
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     */
	    function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	      if (value === other) {
	        return true;
	      }
	      if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	        return value !== value && other !== other;
	      }
	      return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	    }

	    /**
	     * A specialized version of `baseIsEqual` for arrays and objects which performs
	     * deep comparisons and tracks traversed objects enabling objects with circular
	     * references to be compared.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	     * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objIsArr = isArray(object),
	          othIsArr = isArray(other),
	          objTag = arrayTag,
	          othTag = arrayTag;

	      if (!objIsArr) {
	        objTag = objToString.call(object);
	        if (objTag == argsTag) {
	          objTag = objectTag;
	        } else if (objTag != objectTag) {
	          objIsArr = isTypedArray(object);
	        }
	      }
	      if (!othIsArr) {
	        othTag = objToString.call(other);
	        if (othTag == argsTag) {
	          othTag = objectTag;
	        } else if (othTag != objectTag) {
	          othIsArr = isTypedArray(other);
	        }
	      }
	      var objIsObj = objTag == objectTag,
	          othIsObj = othTag == objectTag,
	          isSameTag = objTag == othTag;

	      if (isSameTag && !(objIsArr || objIsObj)) {
	        return equalByTag(object, other, objTag);
	      }
	      if (!isLoose) {
	        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	            othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	        if (objIsWrapped || othIsWrapped) {
	          return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	        }
	      }
	      if (!isSameTag) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      // For more information on detecting circular references see https://es5.github.io/#JO.
	      stackA || (stackA = []);
	      stackB || (stackB = []);

	      var length = stackA.length;
	      while (length--) {
	        if (stackA[length] == object) {
	          return stackB[length] == other;
	        }
	      }
	      // Add `object` and `other` to the stack of traversed objects.
	      stackA.push(object);
	      stackB.push(other);

	      var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	      stackA.pop();
	      stackB.pop();

	      return result;
	    }

	    /**
	     * The base implementation of `_.isMatch` without support for callback
	     * shorthands and `this` binding.
	     *
	     * @private
	     * @param {Object} object The object to inspect.
	     * @param {Array} matchData The propery names, values, and compare flags to match.
	     * @param {Function} [customizer] The function to customize comparing objects.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     */
	    function baseIsMatch(object, matchData, customizer) {
	      var index = matchData.length,
	          length = index,
	          noCustomizer = !customizer;

	      if (object == null) {
	        return !length;
	      }
	      object = toObject(object);
	      while (index--) {
	        var data = matchData[index];
	        if ((noCustomizer && data[2])
	              ? data[1] !== object[data[0]]
	              : !(data[0] in object)
	            ) {
	          return false;
	        }
	      }
	      while (++index < length) {
	        data = matchData[index];
	        var key = data[0],
	            objValue = object[key],
	            srcValue = data[1];

	        if (noCustomizer && data[2]) {
	          if (objValue === undefined && !(key in object)) {
	            return false;
	          }
	        } else {
	          var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	          if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	            return false;
	          }
	        }
	      }
	      return true;
	    }

	    /**
	     * The base implementation of `_.map` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {Array} Returns the new mapped array.
	     */
	    function baseMap(collection, iteratee) {
	      var index = -1,
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value, key, collection) {
	        result[++index] = iteratee(value, key, collection);
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.matches` which does not clone `source`.
	     *
	     * @private
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatches(source) {
	      var matchData = getMatchData(source);
	      if (matchData.length == 1 && matchData[0][2]) {
	        var key = matchData[0][0],
	            value = matchData[0][1];

	        return function(object) {
	          if (object == null) {
	            return false;
	          }
	          return object[key] === value && (value !== undefined || (key in toObject(object)));
	        };
	      }
	      return function(object) {
	        return baseIsMatch(object, matchData);
	      };
	    }

	    /**
	     * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	     *
	     * @private
	     * @param {string} path The path of the property to get.
	     * @param {*} srcValue The value to compare.
	     * @returns {Function} Returns the new function.
	     */
	    function baseMatchesProperty(path, srcValue) {
	      var isArr = isArray(path),
	          isCommon = isKey(path) && isStrictComparable(srcValue),
	          pathKey = (path + '');

	      path = toPath(path);
	      return function(object) {
	        if (object == null) {
	          return false;
	        }
	        var key = pathKey;
	        object = toObject(object);
	        if ((isArr || !isCommon) && !(key in object)) {
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          if (object == null) {
	            return false;
	          }
	          key = last(path);
	          object = toObject(object);
	        }
	        return object[key] === srcValue
	          ? (srcValue !== undefined || (key in object))
	          : baseIsEqual(srcValue, object[key], undefined, true);
	      };
	    }

	    /**
	     * The base implementation of `_.merge` without support for argument juggling,
	     * multiple sources, and `this` binding `customizer` functions.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {Function} [customizer] The function to customize merging properties.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {Object} Returns `object`.
	     */
	    function baseMerge(object, source, customizer, stackA, stackB) {
	      if (!isObject(object)) {
	        return object;
	      }
	      var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	          props = isSrcArr ? null : keys(source);

	      arrayEach(props || source, function(srcValue, key) {
	        if (props) {
	          key = srcValue;
	          srcValue = source[key];
	        }
	        if (isObjectLike(srcValue)) {
	          stackA || (stackA = []);
	          stackB || (stackB = []);
	          baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	        }
	        else {
	          var value = object[key],
	              result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	              isCommon = result === undefined;

	          if (isCommon) {
	            result = srcValue;
	          }
	          if ((result !== undefined || (isSrcArr && !(key in object))) &&
	              (isCommon || (result === result ? (result !== value) : (value === value)))) {
	            object[key] = result;
	          }
	        }
	      });
	      return object;
	    }

	    /**
	     * A specialized version of `baseMerge` for arrays and objects which performs
	     * deep merges and tracks traversed objects enabling objects with circular
	     * references to be merged.
	     *
	     * @private
	     * @param {Object} object The destination object.
	     * @param {Object} source The source object.
	     * @param {string} key The key of the value to merge.
	     * @param {Function} mergeFunc The function to merge values.
	     * @param {Function} [customizer] The function to customize merging properties.
	     * @param {Array} [stackA=[]] Tracks traversed source objects.
	     * @param {Array} [stackB=[]] Associates values with source counterparts.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	      var length = stackA.length,
	          srcValue = source[key];

	      while (length--) {
	        if (stackA[length] == srcValue) {
	          object[key] = stackB[length];
	          return;
	        }
	      }
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	        if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	          result = isArray(value)
	            ? value
	            : (isArrayLike(value) ? arrayCopy(value) : []);
	        }
	        else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	          result = isArguments(value)
	            ? toPlainObject(value)
	            : (isPlainObject(value) ? value : {});
	        }
	        else {
	          isCommon = false;
	        }
	      }
	      // Add the source value to the stack of traversed objects and associate
	      // it with its merged value.
	      stackA.push(srcValue);
	      stackB.push(result);

	      if (isCommon) {
	        // Recursively merge objects and arrays (susceptible to call stack limits).
	        object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	      } else if (result === result ? (result !== value) : (value === value)) {
	        object[key] = result;
	      }
	    }

	    /**
	     * The base implementation of `_.property` without support for deep paths.
	     *
	     * @private
	     * @param {string} key The key of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function baseProperty(key) {
	      return function(object) {
	        return object == null ? undefined : object[key];
	      };
	    }

	    /**
	     * A specialized version of `baseProperty` which supports deep paths.
	     *
	     * @private
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     */
	    function basePropertyDeep(path) {
	      var pathKey = (path + '');
	      path = toPath(path);
	      return function(object) {
	        return baseGet(object, path, pathKey);
	      };
	    }

	    /**
	     * The base implementation of `_.pullAt` without support for individual
	     * index arguments and capturing the removed elements.
	     *
	     * @private
	     * @param {Array} array The array to modify.
	     * @param {number[]} indexes The indexes of elements to remove.
	     * @returns {Array} Returns `array`.
	     */
	    function basePullAt(array, indexes) {
	      var length = array ? indexes.length : 0;
	      while (length--) {
	        var index = indexes[length];
	        if (index != previous && isIndex(index)) {
	          var previous = index;
	          splice.call(array, index, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.random` without support for argument juggling
	     * and returning floating-point numbers.
	     *
	     * @private
	     * @param {number} min The minimum possible value.
	     * @param {number} max The maximum possible value.
	     * @returns {number} Returns the random number.
	     */
	    function baseRandom(min, max) {
	      return min + floor(nativeRandom() * (max - min + 1));
	    }

	    /**
	     * The base implementation of `_.reduce` and `_.reduceRight` without support
	     * for callback shorthands and `this` binding, which iterates over `collection`
	     * using the provided `eachFunc`.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {*} accumulator The initial value.
	     * @param {boolean} initFromCollection Specify using the first or last element
	     *  of `collection` as the initial value.
	     * @param {Function} eachFunc The function to iterate over `collection`.
	     * @returns {*} Returns the accumulated value.
	     */
	    function baseReduce(collection, iteratee, accumulator, initFromCollection, eachFunc) {
	      eachFunc(collection, function(value, index, collection) {
	        accumulator = initFromCollection
	          ? (initFromCollection = false, value)
	          : iteratee(accumulator, value, index, collection);
	      });
	      return accumulator;
	    }

	    /**
	     * The base implementation of `setData` without support for hot loop detection.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var baseSetData = !metaMap ? identity : function(func, data) {
	      metaMap.set(func, data);
	      return func;
	    };

	    /**
	     * The base implementation of `_.slice` without an iteratee call guard.
	     *
	     * @private
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseSlice(array, start, end) {
	      var index = -1,
	          length = array.length;

	      start = start == null ? 0 : (+start || 0);
	      if (start < 0) {
	        start = -start > length ? 0 : (length + start);
	      }
	      end = (end === undefined || end > length) ? length : (+end || 0);
	      if (end < 0) {
	        end += length;
	      }
	      length = start > end ? 0 : ((end - start) >>> 0);
	      start >>>= 0;

	      var result = Array(length);
	      while (++index < length) {
	        result[index] = array[index + start];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.some` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     */
	    function baseSome(collection, predicate) {
	      var result;

	      baseEach(collection, function(value, index, collection) {
	        result = predicate(value, index, collection);
	        return !result;
	      });
	      return !!result;
	    }

	    /**
	     * The base implementation of `_.sortBy` which uses `comparer` to define
	     * the sort order of `array` and replaces criteria objects with their
	     * corresponding values.
	     *
	     * @private
	     * @param {Array} array The array to sort.
	     * @param {Function} comparer The function to define sort order.
	     * @returns {Array} Returns `array`.
	     */
	    function baseSortBy(array, comparer) {
	      var length = array.length;

	      array.sort(comparer);
	      while (length--) {
	        array[length] = array[length].value;
	      }
	      return array;
	    }

	    /**
	     * The base implementation of `_.sortByOrder` without param guards.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @returns {Array} Returns the new sorted array.
	     */
	    function baseSortByOrder(collection, iteratees, orders) {
	      var callback = getCallback(),
	          index = -1;

	      iteratees = arrayMap(iteratees, function(iteratee) { return callback(iteratee); });

	      var result = baseMap(collection, function(value) {
	        var criteria = arrayMap(iteratees, function(iteratee) { return iteratee(value); });
	        return { 'criteria': criteria, 'index': ++index, 'value': value };
	      });

	      return baseSortBy(result, function(object, other) {
	        return compareMultiple(object, other, orders);
	      });
	    }

	    /**
	     * The base implementation of `_.sum` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @returns {number} Returns the sum.
	     */
	    function baseSum(collection, iteratee) {
	      var result = 0;
	      baseEach(collection, function(value, index, collection) {
	        result += +iteratee(value, index, collection) || 0;
	      });
	      return result;
	    }

	    /**
	     * The base implementation of `_.uniq` without support for callback shorthands
	     * and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to inspect.
	     * @param {Function} [iteratee] The function invoked per iteration.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     */
	    function baseUniq(array, iteratee) {
	      var index = -1,
	          indexOf = getIndexOf(),
	          length = array.length,
	          isCommon = indexOf == baseIndexOf,
	          isLarge = isCommon && length >= 200,
	          seen = isLarge ? createCache() : null,
	          result = [];

	      if (seen) {
	        indexOf = cacheIndexOf;
	        isCommon = false;
	      } else {
	        isLarge = false;
	        seen = iteratee ? [] : result;
	      }
	      outer:
	      while (++index < length) {
	        var value = array[index],
	            computed = iteratee ? iteratee(value, index, array) : value;

	        if (isCommon && value === value) {
	          var seenIndex = seen.length;
	          while (seenIndex--) {
	            if (seen[seenIndex] === computed) {
	              continue outer;
	            }
	          }
	          if (iteratee) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	        else if (indexOf(seen, computed, 0) < 0) {
	          if (iteratee || isLarge) {
	            seen.push(computed);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.values` and `_.valuesIn` which creates an
	     * array of `object` property values corresponding to the property names
	     * of `props`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array} props The property names to get values for.
	     * @returns {Object} Returns the array of property values.
	     */
	    function baseValues(object, props) {
	      var index = -1,
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        result[index] = object[props[index]];
	      }
	      return result;
	    }

	    /**
	     * The base implementation of `_.dropRightWhile`, `_.dropWhile`, `_.takeRightWhile`,
	     * and `_.takeWhile` without support for callback shorthands and `this` binding.
	     *
	     * @private
	     * @param {Array} array The array to query.
	     * @param {Function} predicate The function invoked per iteration.
	     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function baseWhile(array, predicate, isDrop, fromRight) {
	      var length = array.length,
	          index = fromRight ? length : -1;

	      while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {}
	      return isDrop
	        ? baseSlice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
	        : baseSlice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index));
	    }

	    /**
	     * The base implementation of `wrapperValue` which returns the result of
	     * performing a sequence of actions on the unwrapped `value`, where each
	     * successive action is supplied the return value of the previous.
	     *
	     * @private
	     * @param {*} value The unwrapped value.
	     * @param {Array} actions Actions to peform to resolve the unwrapped value.
	     * @returns {*} Returns the resolved value.
	     */
	    function baseWrapperValue(value, actions) {
	      var result = value;
	      if (result instanceof LazyWrapper) {
	        result = result.value();
	      }
	      var index = -1,
	          length = actions.length;

	      while (++index < length) {
	        var args = [result],
	            action = actions[index];

	        push.apply(args, action.args);
	        result = action.func.apply(action.thisArg, args);
	      }
	      return result;
	    }

	    /**
	     * Performs a binary search of `array` to determine the index at which `value`
	     * should be inserted into `array` in order to maintain its sort order.
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndex(array, value, retHighest) {
	      var low = 0,
	          high = array ? array.length : low;

	      if (typeof value == 'number' && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
	        while (low < high) {
	          var mid = (low + high) >>> 1,
	              computed = array[mid];

	          if ((retHighest ? (computed <= value) : (computed < value)) && computed !== null) {
	            low = mid + 1;
	          } else {
	            high = mid;
	          }
	        }
	        return high;
	      }
	      return binaryIndexBy(array, value, identity, retHighest);
	    }

	    /**
	     * This function is like `binaryIndex` except that it invokes `iteratee` for
	     * `value` and each element of `array` to compute their sort ranking. The
	     * iteratee is invoked with one argument; (value).
	     *
	     * @private
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function} iteratee The function invoked per iteration.
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     */
	    function binaryIndexBy(array, value, iteratee, retHighest) {
	      value = iteratee(value);

	      var low = 0,
	          high = array ? array.length : 0,
	          valIsNaN = value !== value,
	          valIsNull = value === null,
	          valIsUndef = value === undefined;

	      while (low < high) {
	        var mid = floor((low + high) / 2),
	            computed = iteratee(array[mid]),
	            isDef = computed !== undefined,
	            isReflexive = computed === computed;

	        if (valIsNaN) {
	          var setLow = isReflexive || retHighest;
	        } else if (valIsNull) {
	          setLow = isReflexive && isDef && (retHighest || computed != null);
	        } else if (valIsUndef) {
	          setLow = isReflexive && (retHighest || isDef);
	        } else if (computed == null) {
	          setLow = false;
	        } else {
	          setLow = retHighest ? (computed <= value) : (computed < value);
	        }
	        if (setLow) {
	          low = mid + 1;
	        } else {
	          high = mid;
	        }
	      }
	      return nativeMin(high, MAX_ARRAY_INDEX);
	    }

	    /**
	     * A specialized version of `baseCallback` which only supports `this` binding
	     * and specifying the number of arguments to provide to `func`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {number} [argCount] The number of arguments to provide to `func`.
	     * @returns {Function} Returns the callback.
	     */
	    function bindCallback(func, thisArg, argCount) {
	      if (typeof func != 'function') {
	        return identity;
	      }
	      if (thisArg === undefined) {
	        return func;
	      }
	      switch (argCount) {
	        case 1: return function(value) {
	          return func.call(thisArg, value);
	        };
	        case 3: return function(value, index, collection) {
	          return func.call(thisArg, value, index, collection);
	        };
	        case 4: return function(accumulator, value, index, collection) {
	          return func.call(thisArg, accumulator, value, index, collection);
	        };
	        case 5: return function(value, other, key, object, source) {
	          return func.call(thisArg, value, other, key, object, source);
	        };
	      }
	      return function() {
	        return func.apply(thisArg, arguments);
	      };
	    }

	    /**
	     * Creates a clone of the given array buffer.
	     *
	     * @private
	     * @param {ArrayBuffer} buffer The array buffer to clone.
	     * @returns {ArrayBuffer} Returns the cloned array buffer.
	     */
	    function bufferClone(buffer) {
	      return bufferSlice.call(buffer, 0);
	    }
	    if (!bufferSlice) {
	      // PhantomJS has `ArrayBuffer` and `Uint8Array` but not `Float64Array`.
	      bufferClone = !(ArrayBuffer && Uint8Array) ? constant(null) : function(buffer) {
	        var byteLength = buffer.byteLength,
	            floatLength = Float64Array ? floor(byteLength / FLOAT64_BYTES_PER_ELEMENT) : 0,
	            offset = floatLength * FLOAT64_BYTES_PER_ELEMENT,
	            result = new ArrayBuffer(byteLength);

	        if (floatLength) {
	          var view = new Float64Array(result, 0, floatLength);
	          view.set(new Float64Array(buffer, 0, floatLength));
	        }
	        if (byteLength != offset) {
	          view = new Uint8Array(result, offset);
	          view.set(new Uint8Array(buffer, offset));
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates an array that is the composition of partially applied arguments,
	     * placeholders, and provided arguments into a single array of arguments.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to prepend to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgs(args, partials, holders) {
	      var holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          leftIndex = -1,
	          leftLength = partials.length,
	          result = Array(argsLength + leftLength);

	      while (++leftIndex < leftLength) {
	        result[leftIndex] = partials[leftIndex];
	      }
	      while (++argsIndex < holdersLength) {
	        result[holders[argsIndex]] = args[argsIndex];
	      }
	      while (argsLength--) {
	        result[leftIndex++] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * This function is like `composeArgs` except that the arguments composition
	     * is tailored for `_.partialRight`.
	     *
	     * @private
	     * @param {Array|Object} args The provided arguments.
	     * @param {Array} partials The arguments to append to those provided.
	     * @param {Array} holders The `partials` placeholder indexes.
	     * @returns {Array} Returns the new array of composed arguments.
	     */
	    function composeArgsRight(args, partials, holders) {
	      var holdersIndex = -1,
	          holdersLength = holders.length,
	          argsIndex = -1,
	          argsLength = nativeMax(args.length - holdersLength, 0),
	          rightIndex = -1,
	          rightLength = partials.length,
	          result = Array(argsLength + rightLength);

	      while (++argsIndex < argsLength) {
	        result[argsIndex] = args[argsIndex];
	      }
	      var offset = argsIndex;
	      while (++rightIndex < rightLength) {
	        result[offset + rightIndex] = partials[rightIndex];
	      }
	      while (++holdersIndex < holdersLength) {
	        result[offset + holders[holdersIndex]] = args[argsIndex++];
	      }
	      return result;
	    }

	    /**
	     * Creates a function that aggregates a collection, creating an accumulator
	     * object composed from the results of running each element in the collection
	     * through an iteratee.
	     *
	     * **Note:** This function is used to create `_.countBy`, `_.groupBy`, `_.indexBy`,
	     * and `_.partition`.
	     *
	     * @private
	     * @param {Function} setter The function to set keys and values of the accumulator object.
	     * @param {Function} [initializer] The function to initialize the accumulator object.
	     * @returns {Function} Returns the new aggregator function.
	     */
	    function createAggregator(setter, initializer) {
	      return function(collection, iteratee, thisArg) {
	        var result = initializer ? initializer() : {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        if (isArray(collection)) {
	          var index = -1,
	              length = collection.length;

	          while (++index < length) {
	            var value = collection[index];
	            setter(result, value, iteratee(value, index, collection), collection);
	          }
	        } else {
	          baseEach(collection, function(value, key, collection) {
	            setter(result, value, iteratee(value, key, collection), collection);
	          });
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that assigns properties of source object(s) to a given
	     * destination object.
	     *
	     * **Note:** This function is used to create `_.assign`, `_.defaults`, and `_.merge`.
	     *
	     * @private
	     * @param {Function} assigner The function to assign values.
	     * @returns {Function} Returns the new assigner function.
	     */
	    function createAssigner(assigner) {
	      return restParam(function(object, sources) {
	        var index = -1,
	            length = object == null ? 0 : sources.length,
	            customizer = length > 2 ? sources[length - 2] : undefined,
	            guard = length > 2 ? sources[2] : undefined,
	            thisArg = length > 1 ? sources[length - 1] : undefined;

	        if (typeof customizer == 'function') {
	          customizer = bindCallback(customizer, thisArg, 5);
	          length -= 2;
	        } else {
	          customizer = typeof thisArg == 'function' ? thisArg : undefined;
	          length -= (customizer ? 1 : 0);
	        }
	        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	          customizer = length < 3 ? undefined : customizer;
	          length = 1;
	        }
	        while (++index < length) {
	          var source = sources[index];
	          if (source) {
	            assigner(object, source, customizer);
	          }
	        }
	        return object;
	      });
	    }

	    /**
	     * Creates a `baseEach` or `baseEachRight` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseEach(eachFunc, fromRight) {
	      return function(collection, iteratee) {
	        var length = collection ? getLength(collection) : 0;
	        if (!isLength(length)) {
	          return eachFunc(collection, iteratee);
	        }
	        var index = fromRight ? length : -1,
	            iterable = toObject(collection);

	        while ((fromRight ? index-- : ++index < length)) {
	          if (iteratee(iterable[index], index, iterable) === false) {
	            break;
	          }
	        }
	        return collection;
	      };
	    }

	    /**
	     * Creates a base function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new base function.
	     */
	    function createBaseFor(fromRight) {
	      return function(object, iteratee, keysFunc) {
	        var iterable = toObject(object),
	            props = keysFunc(object),
	            length = props.length,
	            index = fromRight ? length : -1;

	        while ((fromRight ? index-- : ++index < length)) {
	          var key = props[index];
	          if (iteratee(iterable[key], key, iterable) === false) {
	            break;
	          }
	        }
	        return object;
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the `this`
	     * binding of `thisArg`.
	     *
	     * @private
	     * @param {Function} func The function to bind.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createBindWrapper(func, thisArg) {
	      var Ctor = createCtorWrapper(func);

	      function wrapper() {
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(thisArg, arguments);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `Set` cache object to optimize linear searches of large arrays.
	     *
	     * @private
	     * @param {Array} [values] The values to cache.
	     * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	     */
	    var createCache = !(nativeCreate && Set) ? constant(null) : function(values) {
	      return new SetCache(values);
	    };

	    /**
	     * Creates a function that produces compound words out of the words in a
	     * given string.
	     *
	     * @private
	     * @param {Function} callback The function to combine each word.
	     * @returns {Function} Returns the new compounder function.
	     */
	    function createCompounder(callback) {
	      return function(string) {
	        var index = -1,
	            array = words(deburr(string)),
	            length = array.length,
	            result = '';

	        while (++index < length) {
	          result = callback(result, array[index], index);
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that produces an instance of `Ctor` regardless of
	     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
	     *
	     * @private
	     * @param {Function} Ctor The constructor to wrap.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createCtorWrapper(Ctor) {
	      return function() {
	        // Use a `switch` statement to work with class constructors.
	        // See https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-function-objects-call-thisargument-argumentslist
	        // for more details.
	        var args = arguments;
	        switch (args.length) {
	          case 0: return new Ctor;
	          case 1: return new Ctor(args[0]);
	          case 2: return new Ctor(args[0], args[1]);
	          case 3: return new Ctor(args[0], args[1], args[2]);
	          case 4: return new Ctor(args[0], args[1], args[2], args[3]);
	          case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
	        }
	        var thisBinding = baseCreate(Ctor.prototype),
	            result = Ctor.apply(thisBinding, args);

	        // Mimic the constructor's `return` behavior.
	        // See https://es5.github.io/#x13.2.2 for more details.
	        return isObject(result) ? result : thisBinding;
	      };
	    }

	    /**
	     * Creates a `_.curry` or `_.curryRight` function.
	     *
	     * @private
	     * @param {boolean} flag The curry bit flag.
	     * @returns {Function} Returns the new curry function.
	     */
	    function createCurry(flag) {
	      function curryFunc(func, arity, guard) {
	        if (guard && isIterateeCall(func, arity, guard)) {
	          arity = null;
	        }
	        var result = createWrapper(func, flag, null, null, null, null, null, arity);
	        result.placeholder = curryFunc.placeholder;
	        return result;
	      }
	      return curryFunc;
	    }

	    /**
	     * Creates a `_.max` or `_.min` function.
	     *
	     * @private
	     * @param {Function} comparator The function used to compare values.
	     * @param {*} exValue The initial extremum value.
	     * @returns {Function} Returns the new extremum function.
	     */
	    function createExtremum(comparator, exValue) {
	      return function(collection, iteratee, thisArg) {
	        if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	          iteratee = null;
	        }
	        iteratee = getCallback(iteratee, thisArg, 3);
	        if (iteratee.length == 1) {
	          collection = toIterable(collection);
	          var result = arrayExtremum(collection, iteratee, comparator, exValue);
	          if (!(collection.length && result === exValue)) {
	            return result;
	          }
	        }
	        return baseExtremum(collection, iteratee, comparator, exValue);
	      };
	    }

	    /**
	     * Creates a `_.find` or `_.findLast` function.
	     *
	     * @private
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFind(eachFunc, fromRight) {
	      return function(collection, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        if (isArray(collection)) {
	          var index = baseFindIndex(collection, predicate, fromRight);
	          return index > -1 ? collection[index] : undefined;
	        }
	        return baseFind(collection, predicate, eachFunc);
	      };
	    }

	    /**
	     * Creates a `_.findIndex` or `_.findLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindIndex(fromRight) {
	      return function(array, predicate, thisArg) {
	        if (!(array && array.length)) {
	          return -1;
	        }
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFindIndex(array, predicate, fromRight);
	      };
	    }

	    /**
	     * Creates a `_.findKey` or `_.findLastKey` function.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new find function.
	     */
	    function createFindKey(objectFunc) {
	      return function(object, predicate, thisArg) {
	        predicate = getCallback(predicate, thisArg, 3);
	        return baseFind(object, predicate, objectFunc, true);
	      };
	    }

	    /**
	     * Creates a `_.flow` or `_.flowRight` function.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify iterating from right to left.
	     * @returns {Function} Returns the new flow function.
	     */
	    function createFlow(fromRight) {
	      return function() {
	        var wrapper,
	            length = arguments.length,
	            index = fromRight ? length : -1,
	            leftIndex = 0,
	            funcs = Array(length);

	        while ((fromRight ? index-- : ++index < length)) {
	          var func = funcs[leftIndex++] = arguments[index];
	          if (typeof func != 'function') {
	            throw new TypeError(FUNC_ERROR_TEXT);
	          }
	          if (!wrapper && LodashWrapper.prototype.thru && getFuncName(func) == 'wrapper') {
	            wrapper = new LodashWrapper([]);
	          }
	        }
	        index = wrapper ? -1 : length;
	        while (++index < length) {
	          func = funcs[index];

	          var funcName = getFuncName(func),
	              data = funcName == 'wrapper' ? getData(func) : null;

	          if (data && isLaziable(data[0]) && data[1] == (ARY_FLAG | CURRY_FLAG | PARTIAL_FLAG | REARG_FLAG) && !data[4].length && data[9] == 1) {
	            wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
	          } else {
	            wrapper = (func.length == 1 && isLaziable(func)) ? wrapper[funcName]() : wrapper.thru(func);
	          }
	        }
	        return function() {
	          var args = arguments;
	          if (wrapper && args.length == 1 && isArray(args[0])) {
	            return wrapper.plant(args[0]).value();
	          }
	          var index = 0,
	              result = length ? funcs[index].apply(this, args) : args[0];

	          while (++index < length) {
	            result = funcs[index].call(this, result);
	          }
	          return result;
	        };
	      };
	    }

	    /**
	     * Creates a function for `_.forEach` or `_.forEachRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForEach(arrayFunc, eachFunc) {
	      return function(collection, iteratee, thisArg) {
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee)
	          : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	      };
	    }

	    /**
	     * Creates a function for `_.forIn` or `_.forInRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForIn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee, keysIn);
	      };
	    }

	    /**
	     * Creates a function for `_.forOwn` or `_.forOwnRight`.
	     *
	     * @private
	     * @param {Function} objectFunc The function to iterate over an object.
	     * @returns {Function} Returns the new each function.
	     */
	    function createForOwn(objectFunc) {
	      return function(object, iteratee, thisArg) {
	        if (typeof iteratee != 'function' || thisArg !== undefined) {
	          iteratee = bindCallback(iteratee, thisArg, 3);
	        }
	        return objectFunc(object, iteratee);
	      };
	    }

	    /**
	     * Creates a function for `_.mapKeys` or `_.mapValues`.
	     *
	     * @private
	     * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	     * @returns {Function} Returns the new map function.
	     */
	    function createObjectMapper(isMapKeys) {
	      return function(object, iteratee, thisArg) {
	        var result = {};
	        iteratee = getCallback(iteratee, thisArg, 3);

	        baseForOwn(object, function(value, key, object) {
	          var mapped = iteratee(value, key, object);
	          key = isMapKeys ? mapped : key;
	          value = isMapKeys ? value : mapped;
	          result[key] = value;
	        });
	        return result;
	      };
	    }

	    /**
	     * Creates a function for `_.padLeft` or `_.padRight`.
	     *
	     * @private
	     * @param {boolean} [fromRight] Specify padding from the right.
	     * @returns {Function} Returns the new pad function.
	     */
	    function createPadDir(fromRight) {
	      return function(string, length, chars) {
	        string = baseToString(string);
	        return (fromRight ? string : '') + createPadding(string, length, chars) + (fromRight ? '' : string);
	      };
	    }

	    /**
	     * Creates a `_.partial` or `_.partialRight` function.
	     *
	     * @private
	     * @param {boolean} flag The partial bit flag.
	     * @returns {Function} Returns the new partial function.
	     */
	    function createPartial(flag) {
	      var partialFunc = restParam(function(func, partials) {
	        var holders = replaceHolders(partials, partialFunc.placeholder);
	        return createWrapper(func, flag, null, partials, holders);
	      });
	      return partialFunc;
	    }

	    /**
	     * Creates a function for `_.reduce` or `_.reduceRight`.
	     *
	     * @private
	     * @param {Function} arrayFunc The function to iterate over an array.
	     * @param {Function} eachFunc The function to iterate over a collection.
	     * @returns {Function} Returns the new each function.
	     */
	    function createReduce(arrayFunc, eachFunc) {
	      return function(collection, iteratee, accumulator, thisArg) {
	        var initFromArray = arguments.length < 3;
	        return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	          ? arrayFunc(collection, iteratee, accumulator, initFromArray)
	          : baseReduce(collection, getCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
	      };
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with optional `this`
	     * binding of, partial application, and currying.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to prepend to those provided to the new function.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [partialsRight] The arguments to append to those provided to the new function.
	     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createHybridWrapper(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
	      var isAry = bitmask & ARY_FLAG,
	          isBind = bitmask & BIND_FLAG,
	          isBindKey = bitmask & BIND_KEY_FLAG,
	          isCurry = bitmask & CURRY_FLAG,
	          isCurryBound = bitmask & CURRY_BOUND_FLAG,
	          isCurryRight = bitmask & CURRY_RIGHT_FLAG,
	          Ctor = isBindKey ? null : createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it to other functions.
	        var length = arguments.length,
	            index = length,
	            args = Array(length);

	        while (index--) {
	          args[index] = arguments[index];
	        }
	        if (partials) {
	          args = composeArgs(args, partials, holders);
	        }
	        if (partialsRight) {
	          args = composeArgsRight(args, partialsRight, holdersRight);
	        }
	        if (isCurry || isCurryRight) {
	          var placeholder = wrapper.placeholder,
	              argsHolders = replaceHolders(args, placeholder);

	          length -= argsHolders.length;
	          if (length < arity) {
	            var newArgPos = argPos ? arrayCopy(argPos) : null,
	                newArity = nativeMax(arity - length, 0),
	                newsHolders = isCurry ? argsHolders : null,
	                newHoldersRight = isCurry ? null : argsHolders,
	                newPartials = isCurry ? args : null,
	                newPartialsRight = isCurry ? null : args;

	            bitmask |= (isCurry ? PARTIAL_FLAG : PARTIAL_RIGHT_FLAG);
	            bitmask &= ~(isCurry ? PARTIAL_RIGHT_FLAG : PARTIAL_FLAG);

	            if (!isCurryBound) {
	              bitmask &= ~(BIND_FLAG | BIND_KEY_FLAG);
	            }
	            var newData = [func, bitmask, thisArg, newPartials, newsHolders, newPartialsRight, newHoldersRight, newArgPos, ary, newArity],
	                result = createHybridWrapper.apply(undefined, newData);

	            if (isLaziable(func)) {
	              setData(result, newData);
	            }
	            result.placeholder = placeholder;
	            return result;
	          }
	        }
	        var thisBinding = isBind ? thisArg : this,
	            fn = isBindKey ? thisBinding[func] : func;

	        if (argPos) {
	          args = reorder(args, argPos);
	        }
	        if (isAry && ary < args.length) {
	          args.length = ary;
	        }
	        if (this && this !== root && this instanceof wrapper) {
	          fn = Ctor || createCtorWrapper(func);
	        }
	        return fn.apply(thisBinding, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates the padding required for `string` based on the given `length`.
	     * The `chars` string is truncated if the number of characters exceeds `length`.
	     *
	     * @private
	     * @param {string} string The string to create padding for.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the pad for `string`.
	     */
	    function createPadding(string, length, chars) {
	      var strLength = string.length;
	      length = +length;

	      if (strLength >= length || !nativeIsFinite(length)) {
	        return '';
	      }
	      var padLength = length - strLength;
	      chars = chars == null ? ' ' : (chars + '');
	      return repeat(chars, ceil(padLength / chars.length)).slice(0, padLength);
	    }

	    /**
	     * Creates a function that wraps `func` and invokes it with the optional `this`
	     * binding of `thisArg` and the `partials` prepended to those provided to
	     * the wrapper.
	     *
	     * @private
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {number} bitmask The bitmask of flags. See `createWrapper` for more details.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {Array} partials The arguments to prepend to those provided to the new function.
	     * @returns {Function} Returns the new bound function.
	     */
	    function createPartialWrapper(func, bitmask, thisArg, partials) {
	      var isBind = bitmask & BIND_FLAG,
	          Ctor = createCtorWrapper(func);

	      function wrapper() {
	        // Avoid `arguments` object use disqualifying optimizations by
	        // converting it to an array before providing it `func`.
	        var argsIndex = -1,
	            argsLength = arguments.length,
	            leftIndex = -1,
	            leftLength = partials.length,
	            args = Array(argsLength + leftLength);

	        while (++leftIndex < leftLength) {
	          args[leftIndex] = partials[leftIndex];
	        }
	        while (argsLength--) {
	          args[leftIndex++] = arguments[++argsIndex];
	        }
	        var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
	        return fn.apply(isBind ? thisArg : this, args);
	      }
	      return wrapper;
	    }

	    /**
	     * Creates a `_.sortedIndex` or `_.sortedLastIndex` function.
	     *
	     * @private
	     * @param {boolean} [retHighest] Specify returning the highest qualified index.
	     * @returns {Function} Returns the new index function.
	     */
	    function createSortedIndex(retHighest) {
	      return function(array, value, iteratee, thisArg) {
	        var callback = getCallback(iteratee);
	        return (iteratee == null && callback === baseCallback)
	          ? binaryIndex(array, value, retHighest)
	          : binaryIndexBy(array, value, callback(iteratee, thisArg, 1), retHighest);
	      };
	    }

	    /**
	     * Creates a function that either curries or invokes `func` with optional
	     * `this` binding and partially applied arguments.
	     *
	     * @private
	     * @param {Function|string} func The function or method name to reference.
	     * @param {number} bitmask The bitmask of flags.
	     *  The bitmask may be composed of the following flags:
	     *     1 - `_.bind`
	     *     2 - `_.bindKey`
	     *     4 - `_.curry` or `_.curryRight` of a bound function
	     *     8 - `_.curry`
	     *    16 - `_.curryRight`
	     *    32 - `_.partial`
	     *    64 - `_.partialRight`
	     *   128 - `_.rearg`
	     *   256 - `_.ary`
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param {Array} [partials] The arguments to be partially applied.
	     * @param {Array} [holders] The `partials` placeholder indexes.
	     * @param {Array} [argPos] The argument positions of the new function.
	     * @param {number} [ary] The arity cap of `func`.
	     * @param {number} [arity] The arity of `func`.
	     * @returns {Function} Returns the new wrapped function.
	     */
	    function createWrapper(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
	      var isBindKey = bitmask & BIND_KEY_FLAG;
	      if (!isBindKey && typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var length = partials ? partials.length : 0;
	      if (!length) {
	        bitmask &= ~(PARTIAL_FLAG | PARTIAL_RIGHT_FLAG);
	        partials = holders = null;
	      }
	      length -= (holders ? holders.length : 0);
	      if (bitmask & PARTIAL_RIGHT_FLAG) {
	        var partialsRight = partials,
	            holdersRight = holders;

	        partials = holders = null;
	      }
	      var data = isBindKey ? null : getData(func),
	          newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

	      if (data) {
	        mergeData(newData, data);
	        bitmask = newData[1];
	        arity = newData[9];
	      }
	      newData[9] = arity == null
	        ? (isBindKey ? 0 : func.length)
	        : (nativeMax(arity - length, 0) || 0);

	      if (bitmask == BIND_FLAG) {
	        var result = createBindWrapper(newData[0], newData[2]);
	      } else if ((bitmask == PARTIAL_FLAG || bitmask == (BIND_FLAG | PARTIAL_FLAG)) && !newData[4].length) {
	        result = createPartialWrapper.apply(undefined, newData);
	      } else {
	        result = createHybridWrapper.apply(undefined, newData);
	      }
	      var setter = data ? baseSetData : setData;
	      return setter(result, newData);
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for arrays with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Array} array The array to compare.
	     * @param {Array} other The other array to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing arrays.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	     */
	    function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var index = -1,
	          arrLength = array.length,
	          othLength = other.length;

	      if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	        return false;
	      }
	      // Ignore non-index properties.
	      while (++index < arrLength) {
	        var arrValue = array[index],
	            othValue = other[index],
	            result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	        if (result !== undefined) {
	          if (result) {
	            continue;
	          }
	          return false;
	        }
	        // Recursively compare arrays (susceptible to call stack limits).
	        if (isLoose) {
	          if (!arraySome(other, function(othValue) {
	                return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	              })) {
	            return false;
	          }
	        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for comparing objects of
	     * the same `toStringTag`.
	     *
	     * **Note:** This function only supports comparing values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} value The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {string} tag The `toStringTag` of the objects to compare.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalByTag(object, other, tag) {
	      switch (tag) {
	        case boolTag:
	        case dateTag:
	          // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	          return +object == +other;

	        case errorTag:
	          return object.name == other.name && object.message == other.message;

	        case numberTag:
	          // Treat `NaN` vs. `NaN` as equal.
	          return (object != +object)
	            ? other != +other
	            : object == +other;

	        case regexpTag:
	        case stringTag:
	          // Coerce regexes to strings and treat strings primitives and string
	          // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	          return object == (other + '');
	      }
	      return false;
	    }

	    /**
	     * A specialized version of `baseIsEqualDeep` for objects with support for
	     * partial deep comparisons.
	     *
	     * @private
	     * @param {Object} object The object to compare.
	     * @param {Object} other The other object to compare.
	     * @param {Function} equalFunc The function to determine equivalents of values.
	     * @param {Function} [customizer] The function to customize comparing values.
	     * @param {boolean} [isLoose] Specify performing partial comparisons.
	     * @param {Array} [stackA] Tracks traversed `value` objects.
	     * @param {Array} [stackB] Tracks traversed `other` objects.
	     * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	     */
	    function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	      var objProps = keys(object),
	          objLength = objProps.length,
	          othProps = keys(other),
	          othLength = othProps.length;

	      if (objLength != othLength && !isLoose) {
	        return false;
	      }
	      var index = objLength;
	      while (index--) {
	        var key = objProps[index];
	        if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	          return false;
	        }
	      }
	      var skipCtor = isLoose;
	      while (++index < objLength) {
	        key = objProps[index];
	        var objValue = object[key],
	            othValue = other[key],
	            result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	        // Recursively compare objects (susceptible to call stack limits).
	        if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	          return false;
	        }
	        skipCtor || (skipCtor = key == 'constructor');
	      }
	      if (!skipCtor) {
	        var objCtor = object.constructor,
	            othCtor = other.constructor;

	        // Non `Object` object instances with different constructors are not equal.
	        if (objCtor != othCtor &&
	            ('constructor' in object && 'constructor' in other) &&
	            !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	              typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	          return false;
	        }
	      }
	      return true;
	    }

	    /**
	     * Gets the appropriate "callback" function. If the `_.callback` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseCallback` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function} Returns the chosen function or its result.
	     */
	    function getCallback(func, thisArg, argCount) {
	      var result = lodash.callback || callback;
	      result = result === callback ? baseCallback : result;
	      return argCount ? result(func, thisArg, argCount) : result;
	    }

	    /**
	     * Gets metadata for `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {*} Returns the metadata for `func`.
	     */
	    var getData = !metaMap ? noop : function(func) {
	      return metaMap.get(func);
	    };

	    /**
	     * Gets the name of `func`.
	     *
	     * @private
	     * @param {Function} func The function to query.
	     * @returns {string} Returns the function name.
	     */
	    function getFuncName(func) {
	      var result = func.name,
	          array = realNames[result],
	          length = array ? array.length : 0;

	      while (length--) {
	        var data = array[length],
	            otherFunc = data.func;
	        if (otherFunc == null || otherFunc == func) {
	          return data.name;
	        }
	      }
	      return result;
	    }

	    /**
	     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
	     * customized this function returns the custom method, otherwise it returns
	     * the `baseIndexOf` function. If arguments are provided the chosen function
	     * is invoked with them and its result is returned.
	     *
	     * @private
	     * @returns {Function|number} Returns the chosen function or its result.
	     */
	    function getIndexOf(collection, target, fromIndex) {
	      var result = lodash.indexOf || indexOf;
	      result = result === indexOf ? baseIndexOf : result;
	      return collection ? result(collection, target, fromIndex) : result;
	    }

	    /**
	     * Gets the "length" property value of `object`.
	     *
	     * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	     * that affects Safari on at least iOS 8.1-8.3 ARM64.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {*} Returns the "length" value.
	     */
	    var getLength = baseProperty('length');

	    /**
	     * Gets the propery names, values, and compare flags of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the match data of `object`.
	     */
	    function getMatchData(object) {
	      var result = pairs(object),
	          length = result.length;

	      while (length--) {
	        result[length][2] = isStrictComparable(result[length][1]);
	      }
	      return result;
	    }

	    /**
	     * Gets the native function at `key` of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {string} key The key of the method to get.
	     * @returns {*} Returns the function if it's native, else `undefined`.
	     */
	    function getNative(object, key) {
	      var value = object == null ? undefined : object[key];
	      return isNative(value) ? value : undefined;
	    }

	    /**
	     * Gets the view, applying any `transforms` to the `start` and `end` positions.
	     *
	     * @private
	     * @param {number} start The start of the view.
	     * @param {number} end The end of the view.
	     * @param {Array} [transforms] The transformations to apply to the view.
	     * @returns {Object} Returns an object containing the `start` and `end`
	     *  positions of the view.
	     */
	    function getView(start, end, transforms) {
	      var index = -1,
	          length = transforms ? transforms.length : 0;

	      while (++index < length) {
	        var data = transforms[index],
	            size = data.size;

	        switch (data.type) {
	          case 'drop':      start += size; break;
	          case 'dropRight': end -= size; break;
	          case 'take':      end = nativeMin(end, start + size); break;
	          case 'takeRight': start = nativeMax(start, end - size); break;
	        }
	      }
	      return { 'start': start, 'end': end };
	    }

	    /**
	     * Initializes an array clone.
	     *
	     * @private
	     * @param {Array} array The array to clone.
	     * @returns {Array} Returns the initialized clone.
	     */
	    function initCloneArray(array) {
	      var length = array.length,
	          result = new array.constructor(length);

	      // Add array properties assigned by `RegExp#exec`.
	      if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	        result.index = array.index;
	        result.input = array.input;
	      }
	      return result;
	    }

	    /**
	     * Initializes an object clone.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneObject(object) {
	      var Ctor = object.constructor;
	      if (!(typeof Ctor == 'function' && Ctor instanceof Ctor)) {
	        Ctor = Object;
	      }
	      return new Ctor;
	    }

	    /**
	     * Initializes an object clone based on its `toStringTag`.
	     *
	     * **Note:** This function only supports cloning values with tags of
	     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	     *
	     * @private
	     * @param {Object} object The object to clone.
	     * @param {string} tag The `toStringTag` of the object to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @returns {Object} Returns the initialized clone.
	     */
	    function initCloneByTag(object, tag, isDeep) {
	      var Ctor = object.constructor;
	      switch (tag) {
	        case arrayBufferTag:
	          return bufferClone(object);

	        case boolTag:
	        case dateTag:
	          return new Ctor(+object);

	        case float32Tag: case float64Tag:
	        case int8Tag: case int16Tag: case int32Tag:
	        case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	          var buffer = object.buffer;
	          return new Ctor(isDeep ? bufferClone(buffer) : buffer, object.byteOffset, object.length);

	        case numberTag:
	        case stringTag:
	          return new Ctor(object);

	        case regexpTag:
	          var result = new Ctor(object.source, reFlags.exec(object));
	          result.lastIndex = object.lastIndex;
	      }
	      return result;
	    }

	    /**
	     * Invokes the method at `path` on `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {Array} args The arguments to invoke the method with.
	     * @returns {*} Returns the result of the invoked method.
	     */
	    function invokePath(object, path, args) {
	      if (object != null && !isKey(path, object)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        path = last(path);
	      }
	      var func = object == null ? object : object[path];
	      return func == null ? undefined : func.apply(object, args);
	    }

	    /**
	     * Checks if `value` is array-like.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	     */
	    function isArrayLike(value) {
	      return value != null && isLength(getLength(value));
	    }

	    /**
	     * Checks if `value` is a valid array-like index.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	     */
	    function isIndex(value, length) {
	      value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	      length = length == null ? MAX_SAFE_INTEGER : length;
	      return value > -1 && value % 1 == 0 && value < length;
	    }

	    /**
	     * Checks if the provided arguments are from an iteratee call.
	     *
	     * @private
	     * @param {*} value The potential iteratee value argument.
	     * @param {*} index The potential iteratee index or key argument.
	     * @param {*} object The potential iteratee object argument.
	     * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	     */
	    function isIterateeCall(value, index, object) {
	      if (!isObject(object)) {
	        return false;
	      }
	      var type = typeof index;
	      if (type == 'number'
	          ? (isArrayLike(object) && isIndex(index, object.length))
	          : (type == 'string' && index in object)) {
	        var other = object[index];
	        return value === value ? (value === other) : (other !== other);
	      }
	      return false;
	    }

	    /**
	     * Checks if `value` is a property name and not a property path.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @param {Object} [object] The object to query keys on.
	     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	     */
	    function isKey(value, object) {
	      var type = typeof value;
	      if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	        return true;
	      }
	      if (isArray(value)) {
	        return false;
	      }
	      var result = !reIsDeepProp.test(value);
	      return result || (object != null && value in toObject(object));
	    }

	    /**
	     * Checks if `func` has a lazy counterpart.
	     *
	     * @private
	     * @param {Function} func The function to check.
	     * @returns {boolean} Returns `true` if `func` has a lazy counterpart, else `false`.
	     */
	    function isLaziable(func) {
	      var funcName = getFuncName(func);
	      if (!(funcName in LazyWrapper.prototype)) {
	        return false;
	      }
	      var other = lodash[funcName];
	      if (func === other) {
	        return true;
	      }
	      var data = getData(other);
	      return !!data && func === data[0];
	    }

	    /**
	     * Checks if `value` is a valid array-like length.
	     *
	     * **Note:** This function is based on [`ToLength`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength).
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	     */
	    function isLength(value) {
	      return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	    }

	    /**
	     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` if suitable for strict
	     *  equality comparisons, else `false`.
	     */
	    function isStrictComparable(value) {
	      return value === value && !isObject(value);
	    }

	    /**
	     * Merges the function metadata of `source` into `data`.
	     *
	     * Merging metadata reduces the number of wrappers required to invoke a function.
	     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
	     * may be applied regardless of execution order. Methods like `_.ary` and `_.rearg`
	     * augment function arguments, making the order in which they are executed important,
	     * preventing the merging of metadata. However, we make an exception for a safe
	     * common case where curried functions have `_.ary` and or `_.rearg` applied.
	     *
	     * @private
	     * @param {Array} data The destination metadata.
	     * @param {Array} source The source metadata.
	     * @returns {Array} Returns `data`.
	     */
	    function mergeData(data, source) {
	      var bitmask = data[1],
	          srcBitmask = source[1],
	          newBitmask = bitmask | srcBitmask,
	          isCommon = newBitmask < ARY_FLAG;

	      var isCombo =
	        (srcBitmask == ARY_FLAG && bitmask == CURRY_FLAG) ||
	        (srcBitmask == ARY_FLAG && bitmask == REARG_FLAG && data[7].length <= source[8]) ||
	        (srcBitmask == (ARY_FLAG | REARG_FLAG) && bitmask == CURRY_FLAG);

	      // Exit early if metadata can't be merged.
	      if (!(isCommon || isCombo)) {
	        return data;
	      }
	      // Use source `thisArg` if available.
	      if (srcBitmask & BIND_FLAG) {
	        data[2] = source[2];
	        // Set when currying a bound function.
	        newBitmask |= (bitmask & BIND_FLAG) ? 0 : CURRY_BOUND_FLAG;
	      }
	      // Compose partial arguments.
	      var value = source[3];
	      if (value) {
	        var partials = data[3];
	        data[3] = partials ? composeArgs(partials, value, source[4]) : arrayCopy(value);
	        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : arrayCopy(source[4]);
	      }
	      // Compose partial right arguments.
	      value = source[5];
	      if (value) {
	        partials = data[5];
	        data[5] = partials ? composeArgsRight(partials, value, source[6]) : arrayCopy(value);
	        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : arrayCopy(source[6]);
	      }
	      // Use source `argPos` if available.
	      value = source[7];
	      if (value) {
	        data[7] = arrayCopy(value);
	      }
	      // Use source `ary` if it's smaller.
	      if (srcBitmask & ARY_FLAG) {
	        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
	      }
	      // Use source `arity` if one is not provided.
	      if (data[9] == null) {
	        data[9] = source[9];
	      }
	      // Use source `func` and merge bitmasks.
	      data[0] = source[0];
	      data[1] = newBitmask;

	      return data;
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties specified
	     * by `props`.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {string[]} props The property names to pick.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByArray(object, props) {
	      object = toObject(object);

	      var index = -1,
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index];
	        if (key in object) {
	          result[key] = object[key];
	        }
	      }
	      return result;
	    }

	    /**
	     * A specialized version of `_.pick` which picks `object` properties `predicate`
	     * returns truthy for.
	     *
	     * @private
	     * @param {Object} object The source object.
	     * @param {Function} predicate The function invoked per iteration.
	     * @returns {Object} Returns the new object.
	     */
	    function pickByCallback(object, predicate) {
	      var result = {};
	      baseForIn(object, function(value, key, object) {
	        if (predicate(value, key, object)) {
	          result[key] = value;
	        }
	      });
	      return result;
	    }

	    /**
	     * Reorder `array` according to the specified indexes where the element at
	     * the first index is assigned as the first element, the element at
	     * the second index is assigned as the second element, and so on.
	     *
	     * @private
	     * @param {Array} array The array to reorder.
	     * @param {Array} indexes The arranged array indexes.
	     * @returns {Array} Returns `array`.
	     */
	    function reorder(array, indexes) {
	      var arrLength = array.length,
	          length = nativeMin(indexes.length, arrLength),
	          oldArray = arrayCopy(array);

	      while (length--) {
	        var index = indexes[length];
	        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
	      }
	      return array;
	    }

	    /**
	     * Sets metadata for `func`.
	     *
	     * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
	     * period of time, it will trip its breaker and transition to an identity function
	     * to avoid garbage collection pauses in V8. See [V8 issue 2070](https://code.google.com/p/v8/issues/detail?id=2070)
	     * for more details.
	     *
	     * @private
	     * @param {Function} func The function to associate metadata with.
	     * @param {*} data The metadata.
	     * @returns {Function} Returns `func`.
	     */
	    var setData = (function() {
	      var count = 0,
	          lastCalled = 0;

	      return function(key, value) {
	        var stamp = now(),
	            remaining = HOT_SPAN - (stamp - lastCalled);

	        lastCalled = stamp;
	        if (remaining > 0) {
	          if (++count >= HOT_COUNT) {
	            return key;
	          }
	        } else {
	          count = 0;
	        }
	        return baseSetData(key, value);
	      };
	    }());

	    /**
	     * A fallback implementation of `_.isPlainObject` which checks if `value`
	     * is an object created by the `Object` constructor or has a `[[Prototype]]`
	     * of `null`.
	     *
	     * @private
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     */
	    function shimIsPlainObject(value) {
	      var Ctor,
	          support = lodash.support;

	      // Exit early for non `Object` objects.
	      if (!(isObjectLike(value) && objToString.call(value) == objectTag) ||
	          (!hasOwnProperty.call(value, 'constructor') &&
	            (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	        return false;
	      }
	      // IE < 9 iterates inherited properties before own properties. If the first
	      // iterated property is an object's own property then there are no inherited
	      // enumerable properties.
	      var result;
	      // In most environments an object's own properties are iterated before
	      // its inherited properties. If the last iterated property is an object's
	      // own property then there are no inherited enumerable properties.
	      baseForIn(value, function(subValue, key) {
	        result = key;
	      });
	      return result === undefined || hasOwnProperty.call(value, result);
	    }

	    /**
	     * A fallback implementation of `Object.keys` which creates an array of the
	     * own enumerable property names of `object`.
	     *
	     * @private
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     */
	    function shimKeys(object) {
	      var props = keysIn(object),
	          propsLength = props.length,
	          length = propsLength && object.length;

	      var allowIndexes = !!length && isLength(length) &&
	        (isArray(object) || isArguments(object));

	      var index = -1,
	          result = [];

	      while (++index < propsLength) {
	        var key = props[index];
	        if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * Converts `value` to an array-like object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array|Object} Returns the array-like object.
	     */
	    function toIterable(value) {
	      if (value == null) {
	        return [];
	      }
	      if (!isArrayLike(value)) {
	        return values(value);
	      }
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to an object if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Object} Returns the object.
	     */
	    function toObject(value) {
	      return isObject(value) ? value : Object(value);
	    }

	    /**
	     * Converts `value` to property path array if it's not one.
	     *
	     * @private
	     * @param {*} value The value to process.
	     * @returns {Array} Returns the property path array.
	     */
	    function toPath(value) {
	      if (isArray(value)) {
	        return value;
	      }
	      var result = [];
	      baseToString(value).replace(rePropName, function(match, number, quote, string) {
	        result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	      });
	      return result;
	    }

	    /**
	     * Creates a clone of `wrapper`.
	     *
	     * @private
	     * @param {Object} wrapper The wrapper to clone.
	     * @returns {Object} Returns the cloned wrapper.
	     */
	    function wrapperClone(wrapper) {
	      return wrapper instanceof LazyWrapper
	        ? wrapper.clone()
	        : new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__, arrayCopy(wrapper.__actions__));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements split into groups the length of `size`.
	     * If `collection` can't be split evenly, the final chunk will be the remaining
	     * elements.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to process.
	     * @param {number} [size=1] The length of each chunk.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new array containing chunks.
	     * @example
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 2);
	     * // => [['a', 'b'], ['c', 'd']]
	     *
	     * _.chunk(['a', 'b', 'c', 'd'], 3);
	     * // => [['a', 'b', 'c'], ['d']]
	     */
	    function chunk(array, size, guard) {
	      if (guard ? isIterateeCall(array, size, guard) : size == null) {
	        size = 1;
	      } else {
	        size = nativeMax(+size || 1, 1);
	      }
	      var index = 0,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = Array(ceil(length / size));

	      while (index < length) {
	        result[++resIndex] = baseSlice(array, index, (index += size));
	      }
	      return result;
	    }

	    /**
	     * Creates an array with all falsey values removed. The values `false`, `null`,
	     * `0`, `""`, `undefined`, and `NaN` are falsey.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to compact.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.compact([0, 1, false, 2, '', 3]);
	     * // => [1, 2, 3]
	     */
	    function compact(array) {
	      var index = -1,
	          length = array ? array.length : 0,
	          resIndex = -1,
	          result = [];

	      while (++index < length) {
	        var value = array[index];
	        if (value) {
	          result[++resIndex] = value;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of unique `array` values not included in the other
	     * provided arrays using [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {...Array} [values] The arrays of values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.difference([1, 2, 3], [4, 2]);
	     * // => [1, 3]
	     */
	    var difference = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, baseFlatten(values, false, true))
	        : [];
	    });

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.drop([1, 2, 3]);
	     * // => [2, 3]
	     *
	     * _.drop([1, 2, 3], 2);
	     * // => [3]
	     *
	     * _.drop([1, 2, 3], 5);
	     * // => []
	     *
	     * _.drop([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function drop(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements dropped from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to drop.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRight([1, 2, 3]);
	     * // => [1, 2]
	     *
	     * _.dropRight([1, 2, 3], 2);
	     * // => [1]
	     *
	     * _.dropRight([1, 2, 3], 5);
	     * // => []
	     *
	     * _.dropRight([1, 2, 3], 0);
	     * // => [1, 2, 3]
	     */
	    function dropRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the end.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that match the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [1]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active', false), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropRightWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` excluding elements dropped from the beginning.
	     * Elements are dropped until `predicate` returns falsey. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.dropWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.dropWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active', false), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.dropWhile(users, 'active'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function dropWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), true)
	        : [];
	    }

	    /**
	     * Fills elements of `array` with `value` from `start` up to, but not
	     * including, `end`.
	     *
	     * **Note:** This method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to fill.
	     * @param {*} value The value to fill `array` with.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _.fill(array, 'a');
	     * console.log(array);
	     * // => ['a', 'a', 'a']
	     *
	     * _.fill(Array(3), 2);
	     * // => [2, 2, 2]
	     *
	     * _.fill([4, 6, 8], '*', 1, 2);
	     * // => [4, '*', 8]
	     */
	    function fill(array, value, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (start && typeof start != 'number' && isIterateeCall(array, value, start)) {
	        start = 0;
	        end = length;
	      }
	      return baseFill(array, value, start, end);
	    }

	    /**
	     * This method is like `_.find` except that it returns the index of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * _.findIndex(users, function(chr) {
	     *   return chr.user == 'barney';
	     * });
	     * // => 0
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findIndex(users, { 'user': 'fred', 'active': false });
	     * // => 1
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findIndex(users, 'active', false);
	     * // => 0
	     *
	     * // using the `_.property` callback shorthand
	     * _.findIndex(users, 'active');
	     * // => 2
	     */
	    var findIndex = createFindIndex();

	    /**
	     * This method is like `_.findIndex` except that it iterates over elements
	     * of `collection` from right to left.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {number} Returns the index of the found element, else `-1`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * _.findLastIndex(users, function(chr) {
	     *   return chr.user == 'pebbles';
	     * });
	     * // => 2
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
	     * // => 0
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastIndex(users, 'active', false);
	     * // => 2
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastIndex(users, 'active');
	     * // => 0
	     */
	    var findLastIndex = createFindIndex(true);

	    /**
	     * Gets the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias head
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the first element of `array`.
	     * @example
	     *
	     * _.first([1, 2, 3]);
	     * // => 1
	     *
	     * _.first([]);
	     * // => undefined
	     */
	    function first(array) {
	      return array ? array[0] : undefined;
	    }

	    /**
	     * Flattens a nested array. If `isDeep` is `true` the array is recursively
	     * flattened, otherwise it is only flattened a single level.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to flatten.
	     * @param {boolean} [isDeep] Specify a deep flatten.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flatten([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, [4]]
	     *
	     * // using `isDeep`
	     * _.flatten([1, [2, 3, [4]]], true);
	     * // => [1, 2, 3, 4]
	     */
	    function flatten(array, isDeep, guard) {
	      var length = array ? array.length : 0;
	      if (guard && isIterateeCall(array, isDeep, guard)) {
	        isDeep = false;
	      }
	      return length ? baseFlatten(array, isDeep) : [];
	    }

	    /**
	     * Recursively flattens a nested array.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to recursively flatten.
	     * @returns {Array} Returns the new flattened array.
	     * @example
	     *
	     * _.flattenDeep([1, [2, 3, [4]]]);
	     * // => [1, 2, 3, 4]
	     */
	    function flattenDeep(array) {
	      var length = array ? array.length : 0;
	      return length ? baseFlatten(array, true) : [];
	    }

	    /**
	     * Gets the index at which the first occurrence of `value` is found in `array`
	     * using [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `array`. If `array` is sorted providing `true` for `fromIndex`
	     * performs a faster binary search.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
	     *  to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.indexOf([1, 2, 1, 2], 2);
	     * // => 1
	     *
	     * // using `fromIndex`
	     * _.indexOf([1, 2, 1, 2], 2, 2);
	     * // => 3
	     *
	     * // performing a binary search
	     * _.indexOf([1, 1, 2, 2], 2, true);
	     * // => 2
	     */
	    function indexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      if (typeof fromIndex == 'number') {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : fromIndex;
	      } else if (fromIndex) {
	        var index = binaryIndex(array, value),
	            other = array[index];

	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      return baseIndexOf(array, value, fromIndex || 0);
	    }

	    /**
	     * Gets all but the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.initial([1, 2, 3]);
	     * // => [1, 2]
	     */
	    function initial(array) {
	      return dropRight(array, 1);
	    }

	    /**
	     * Creates an array of unique values that are included in all of the provided
	     * arrays using [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of shared values.
	     * @example
	     * _.intersection([1, 2], [4, 2], [2, 1]);
	     * // => [2]
	     */
	    var intersection = restParam(function(arrays) {
	      var othLength = arrays.length,
	          othIndex = othLength,
	          caches = Array(length),
	          indexOf = getIndexOf(),
	          isCommon = indexOf == baseIndexOf,
	          result = [];

	      while (othIndex--) {
	        var value = arrays[othIndex] = isArrayLike(value = arrays[othIndex]) ? value : [];
	        caches[othIndex] = (isCommon && value.length >= 120) ? createCache(othIndex && value) : null;
	      }
	      var array = arrays[0],
	          index = -1,
	          length = array ? array.length : 0,
	          seen = caches[0];

	      outer:
	      while (++index < length) {
	        value = array[index];
	        if ((seen ? cacheIndexOf(seen, value) : indexOf(result, value, 0)) < 0) {
	          var othIndex = othLength;
	          while (--othIndex) {
	            var cache = caches[othIndex];
	            if ((cache ? cacheIndexOf(cache, value) : indexOf(arrays[othIndex], value, 0)) < 0) {
	              continue outer;
	            }
	          }
	          if (seen) {
	            seen.push(value);
	          }
	          result.push(value);
	        }
	      }
	      return result;
	    });

	    /**
	     * Gets the last element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {*} Returns the last element of `array`.
	     * @example
	     *
	     * _.last([1, 2, 3]);
	     * // => 3
	     */
	    function last(array) {
	      var length = array ? array.length : 0;
	      return length ? array[length - 1] : undefined;
	    }

	    /**
	     * This method is like `_.indexOf` except that it iterates over elements of
	     * `array` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to search.
	     * @param {*} value The value to search for.
	     * @param {boolean|number} [fromIndex=array.length-1] The index to search from
	     *  or `true` to perform a binary search on a sorted array.
	     * @returns {number} Returns the index of the matched value, else `-1`.
	     * @example
	     *
	     * _.lastIndexOf([1, 2, 1, 2], 2);
	     * // => 3
	     *
	     * // using `fromIndex`
	     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
	     * // => 1
	     *
	     * // performing a binary search
	     * _.lastIndexOf([1, 1, 2, 2], 2, true);
	     * // => 3
	     */
	    function lastIndexOf(array, value, fromIndex) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return -1;
	      }
	      var index = length;
	      if (typeof fromIndex == 'number') {
	        index = (fromIndex < 0 ? nativeMax(length + fromIndex, 0) : nativeMin(fromIndex || 0, length - 1)) + 1;
	      } else if (fromIndex) {
	        index = binaryIndex(array, value, true) - 1;
	        var other = array[index];
	        if (value === value ? (value === other) : (other !== other)) {
	          return index;
	        }
	        return -1;
	      }
	      if (value !== value) {
	        return indexOfNaN(array, index, true);
	      }
	      while (index--) {
	        if (array[index] === value) {
	          return index;
	        }
	      }
	      return -1;
	    }

	    /**
	     * Removes all provided values from `array` using
	     * [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * **Note:** Unlike `_.without`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...*} [values] The values to remove.
	     * @returns {Array} Returns `array`.
	     * @example
	     *
	     * var array = [1, 2, 3, 1, 2, 3];
	     *
	     * _.pull(array, 2, 3);
	     * console.log(array);
	     * // => [1, 1]
	     */
	    function pull() {
	      var args = arguments,
	          array = args[0];

	      if (!(array && array.length)) {
	        return array;
	      }
	      var index = 0,
	          indexOf = getIndexOf(),
	          length = args.length;

	      while (++index < length) {
	        var fromIndex = 0,
	            value = args[index];

	        while ((fromIndex = indexOf(array, value, fromIndex)) > -1) {
	          splice.call(array, fromIndex, 1);
	        }
	      }
	      return array;
	    }

	    /**
	     * Removes elements from `array` corresponding to the given indexes and returns
	     * an array of the removed elements. Indexes may be specified as an array of
	     * indexes or as individual arguments.
	     *
	     * **Note:** Unlike `_.at`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {...(number|number[])} [indexes] The indexes of elements to remove,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [5, 10, 15, 20];
	     * var evens = _.pullAt(array, 1, 3);
	     *
	     * console.log(array);
	     * // => [5, 15]
	     *
	     * console.log(evens);
	     * // => [10, 20]
	     */
	    var pullAt = restParam(function(array, indexes) {
	      indexes = baseFlatten(indexes);

	      var result = baseAt(array, indexes);
	      basePullAt(array, indexes.sort(baseCompareAscending));
	      return result;
	    });

	    /**
	     * Removes all elements from `array` that `predicate` returns truthy for
	     * and returns an array of the removed elements. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * **Note:** Unlike `_.filter`, this method mutates `array`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to modify.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new array of removed elements.
	     * @example
	     *
	     * var array = [1, 2, 3, 4];
	     * var evens = _.remove(array, function(n) {
	     *   return n % 2 == 0;
	     * });
	     *
	     * console.log(array);
	     * // => [1, 3]
	     *
	     * console.log(evens);
	     * // => [2, 4]
	     */
	    function remove(array, predicate, thisArg) {
	      var result = [];
	      if (!(array && array.length)) {
	        return result;
	      }
	      var index = -1,
	          indexes = [],
	          length = array.length;

	      predicate = getCallback(predicate, thisArg, 3);
	      while (++index < length) {
	        var value = array[index];
	        if (predicate(value, index, array)) {
	          result.push(value);
	          indexes.push(index);
	        }
	      }
	      basePullAt(array, indexes);
	      return result;
	    }

	    /**
	     * Gets all but the first element of `array`.
	     *
	     * @static
	     * @memberOf _
	     * @alias tail
	     * @category Array
	     * @param {Array} array The array to query.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.rest([1, 2, 3]);
	     * // => [2, 3]
	     */
	    function rest(array) {
	      return drop(array, 1);
	    }

	    /**
	     * Creates a slice of `array` from `start` up to, but not including, `end`.
	     *
	     * **Note:** This method is used instead of `Array#slice` to support node
	     * lists in IE < 9 and to ensure dense arrays are returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to slice.
	     * @param {number} [start=0] The start position.
	     * @param {number} [end=array.length] The end position.
	     * @returns {Array} Returns the slice of `array`.
	     */
	    function slice(array, start, end) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (end && typeof end != 'number' && isIterateeCall(array, start, end)) {
	        start = 0;
	        end = length;
	      }
	      return baseSlice(array, start, end);
	    }

	    /**
	     * Uses a binary search to determine the lowest index at which `value` should
	     * be inserted into `array` in order to maintain its sort order. If an iteratee
	     * function is provided it is invoked for `value` and each element of `array`
	     * to compute their sort ranking. The iteratee is bound to `thisArg` and
	     * invoked with one argument; (value).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedIndex([30, 50], 40);
	     * // => 1
	     *
	     * _.sortedIndex([4, 4, 5, 5], 5);
	     * // => 2
	     *
	     * var dict = { 'data': { 'thirty': 30, 'forty': 40, 'fifty': 50 } };
	     *
	     * // using an iteratee function
	     * _.sortedIndex(['thirty', 'fifty'], 'forty', function(word) {
	     *   return this.data[word];
	     * }, dict);
	     * // => 1
	     *
	     * // using the `_.property` callback shorthand
	     * _.sortedIndex([{ 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
	     * // => 1
	     */
	    var sortedIndex = createSortedIndex();

	    /**
	     * This method is like `_.sortedIndex` except that it returns the highest
	     * index at which `value` should be inserted into `array` in order to
	     * maintain its sort order.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The sorted array to inspect.
	     * @param {*} value The value to evaluate.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the index at which `value` should be inserted
	     *  into `array`.
	     * @example
	     *
	     * _.sortedLastIndex([4, 4, 5, 5], 5);
	     * // => 4
	     */
	    var sortedLastIndex = createSortedIndex(true);

	    /**
	     * Creates a slice of `array` with `n` elements taken from the beginning.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.take([1, 2, 3]);
	     * // => [1]
	     *
	     * _.take([1, 2, 3], 2);
	     * // => [1, 2]
	     *
	     * _.take([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.take([1, 2, 3], 0);
	     * // => []
	     */
	    function take(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      return baseSlice(array, 0, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with `n` elements taken from the end.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {number} [n=1] The number of elements to take.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRight([1, 2, 3]);
	     * // => [3]
	     *
	     * _.takeRight([1, 2, 3], 2);
	     * // => [2, 3]
	     *
	     * _.takeRight([1, 2, 3], 5);
	     * // => [1, 2, 3]
	     *
	     * _.takeRight([1, 2, 3], 0);
	     * // => []
	     */
	    function takeRight(array, n, guard) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (guard ? isIterateeCall(array, n, guard) : n == null) {
	        n = 1;
	      }
	      n = length - (+n || 0);
	      return baseSlice(array, n < 0 ? 0 : n);
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the end. Elements are
	     * taken until `predicate` returns falsey. The predicate is bound to `thisArg`
	     * and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeRightWhile([1, 2, 3], function(n) {
	     *   return n > 1;
	     * });
	     * // => [2, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': true },
	     *   { 'user': 'fred',    'active': false },
	     *   { 'user': 'pebbles', 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeRightWhile(users, { 'user': 'pebbles', 'active': false }), 'user');
	     * // => ['pebbles']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active', false), 'user');
	     * // => ['fred', 'pebbles']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeRightWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeRightWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3), false, true)
	        : [];
	    }

	    /**
	     * Creates a slice of `array` with elements taken from the beginning. Elements
	     * are taken until `predicate` returns falsey. The predicate is bound to
	     * `thisArg` and invoked with three arguments: (value, index, array).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to query.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the slice of `array`.
	     * @example
	     *
	     * _.takeWhile([1, 2, 3], function(n) {
	     *   return n < 3;
	     * });
	     * // => [1, 2]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'active': false },
	     *   { 'user': 'fred',    'active': false},
	     *   { 'user': 'pebbles', 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.takeWhile(users, { 'user': 'barney', 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active', false), 'user');
	     * // => ['barney', 'fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.takeWhile(users, 'active'), 'user');
	     * // => []
	     */
	    function takeWhile(array, predicate, thisArg) {
	      return (array && array.length)
	        ? baseWhile(array, getCallback(predicate, thisArg, 3))
	        : [];
	    }

	    /**
	     * Creates an array of unique values, in order, from all of the provided arrays
	     * using [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of combined values.
	     * @example
	     *
	     * _.union([1, 2], [4, 2], [2, 1]);
	     * // => [1, 2, 4]
	     */
	    var union = restParam(function(arrays) {
	      return baseUniq(baseFlatten(arrays, false, true));
	    });

	    /**
	     * Creates a duplicate-free version of an array, using
	     * [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
	     * for equality comparisons, in which only the first occurence of each element
	     * is kept. Providing `true` for `isSorted` performs a faster search algorithm
	     * for sorted arrays. If an iteratee function is provided it is invoked for
	     * each element in the array to generate the criterion by which uniqueness
	     * is computed. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, array).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias unique
	     * @category Array
	     * @param {Array} array The array to inspect.
	     * @param {boolean} [isSorted] Specify the array is sorted.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new duplicate-value-free array.
	     * @example
	     *
	     * _.uniq([2, 1, 2]);
	     * // => [2, 1]
	     *
	     * // using `isSorted`
	     * _.uniq([1, 1, 2], true);
	     * // => [1, 2]
	     *
	     * // using an iteratee function
	     * _.uniq([1, 2.5, 1.5, 2], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => [1, 2.5]
	     *
	     * // using the `_.property` callback shorthand
	     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
	     * // => [{ 'x': 1 }, { 'x': 2 }]
	     */
	    function uniq(array, isSorted, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      if (isSorted != null && typeof isSorted != 'boolean') {
	        thisArg = iteratee;
	        iteratee = isIterateeCall(array, isSorted, thisArg) ? null : isSorted;
	        isSorted = false;
	      }
	      var callback = getCallback();
	      if (!(iteratee == null && callback === baseCallback)) {
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return (isSorted && getIndexOf() == baseIndexOf)
	        ? sortedUniq(array, iteratee)
	        : baseUniq(array, iteratee);
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an array of grouped
	     * elements and creates an array regrouping the elements to their pre-zip
	     * configuration.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     *
	     * _.unzip(zipped);
	     * // => [['fred', 'barney'], [30, 40], [true, false]]
	     */
	    function unzip(array) {
	      if (!(array && array.length)) {
	        return [];
	      }
	      var index = -1,
	          length = 0;

	      array = arrayFilter(array, function(group) {
	        if (isArrayLike(group)) {
	          length = nativeMax(group.length, length);
	          return true;
	        }
	      });
	      var result = Array(length);
	      while (++index < length) {
	        result[index] = arrayMap(array, baseProperty(index));
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.unzip` except that it accepts an iteratee to specify
	     * how regrouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array of grouped elements to process.
	     * @param {Function} [iteratee] The function to combine regrouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of regrouped elements.
	     * @example
	     *
	     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
	     * // => [[1, 10, 100], [2, 20, 200]]
	     *
	     * _.unzipWith(zipped, _.add);
	     * // => [3, 30, 300]
	     */
	    function unzipWith(array, iteratee, thisArg) {
	      var length = array ? array.length : 0;
	      if (!length) {
	        return [];
	      }
	      var result = unzip(array);
	      if (iteratee == null) {
	        return result;
	      }
	      iteratee = bindCallback(iteratee, thisArg, 4);
	      return arrayMap(result, function(group) {
	        return arrayReduce(group, iteratee, undefined, true);
	      });
	    }

	    /**
	     * Creates an array excluding all provided values using
	     * [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
	     * for equality comparisons.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {Array} array The array to filter.
	     * @param {...*} [values] The values to exclude.
	     * @returns {Array} Returns the new array of filtered values.
	     * @example
	     *
	     * _.without([1, 2, 1, 3], 1, 2);
	     * // => [3]
	     */
	    var without = restParam(function(array, values) {
	      return isArrayLike(array)
	        ? baseDifference(array, values)
	        : [];
	    });

	    /**
	     * Creates an array of unique values that is the [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
	     * of the provided arrays.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to inspect.
	     * @returns {Array} Returns the new array of values.
	     * @example
	     *
	     * _.xor([1, 2], [4, 2]);
	     * // => [1, 4]
	     */
	    function xor() {
	      var index = -1,
	          length = arguments.length;

	      while (++index < length) {
	        var array = arguments[index];
	        if (isArrayLike(array)) {
	          var result = result
	            ? baseDifference(result, array).concat(baseDifference(array, result))
	            : array;
	        }
	      }
	      return result ? baseUniq(result) : [];
	    }

	    /**
	     * Creates an array of grouped elements, the first of which contains the first
	     * elements of the given arrays, the second of which contains the second elements
	     * of the given arrays, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
	     * // => [['fred', 30, true], ['barney', 40, false]]
	     */
	    var zip = restParam(unzip);

	    /**
	     * The inverse of `_.pairs`; this method returns an object composed from arrays
	     * of property names and values. Provide either a single two dimensional array,
	     * e.g. `[[key1, value1], [key2, value2]]` or two arrays, one of property names
	     * and one of corresponding values.
	     *
	     * @static
	     * @memberOf _
	     * @alias object
	     * @category Array
	     * @param {Array} props The property names.
	     * @param {Array} [values=[]] The property values.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * _.zipObject([['fred', 30], ['barney', 40]]);
	     * // => { 'fred': 30, 'barney': 40 }
	     *
	     * _.zipObject(['fred', 'barney'], [30, 40]);
	     * // => { 'fred': 30, 'barney': 40 }
	     */
	    function zipObject(props, values) {
	      var index = -1,
	          length = props ? props.length : 0,
	          result = {};

	      if (length && !values && !isArray(props[0])) {
	        values = [];
	      }
	      while (++index < length) {
	        var key = props[index];
	        if (values) {
	          result[key] = values[index];
	        } else if (key) {
	          result[key[0]] = key[1];
	        }
	      }
	      return result;
	    }

	    /**
	     * This method is like `_.zip` except that it accepts an iteratee to specify
	     * how grouped values should be combined. The `iteratee` is bound to `thisArg`
	     * and invoked with four arguments: (accumulator, value, index, group).
	     *
	     * @static
	     * @memberOf _
	     * @category Array
	     * @param {...Array} [arrays] The arrays to process.
	     * @param {Function} [iteratee] The function to combine grouped values.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new array of grouped elements.
	     * @example
	     *
	     * _.zipWith([1, 2], [10, 20], [100, 200], _.add);
	     * // => [111, 222]
	     */
	    var zipWith = restParam(function(arrays) {
	      var length = arrays.length,
	          iteratee = length > 2 ? arrays[length - 2] : undefined,
	          thisArg = length > 1 ? arrays[length - 1] : undefined;

	      if (length > 2 && typeof iteratee == 'function') {
	        length -= 2;
	      } else {
	        iteratee = (length > 1 && typeof thisArg == 'function') ? (--length, thisArg) : undefined;
	        thisArg = undefined;
	      }
	      arrays.length = length;
	      return unzipWith(arrays, iteratee, thisArg);
	    });

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a `lodash` object that wraps `value` with explicit method
	     * chaining enabled.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to wrap.
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36 },
	     *   { 'user': 'fred',    'age': 40 },
	     *   { 'user': 'pebbles', 'age': 1 }
	     * ];
	     *
	     * var youngest = _.chain(users)
	     *   .sortBy('age')
	     *   .map(function(chr) {
	     *     return chr.user + ' is ' + chr.age;
	     *   })
	     *   .first()
	     *   .value();
	     * // => 'pebbles is 1'
	     */
	    function chain(value) {
	      var result = lodash(value);
	      result.__chain__ = true;
	      return result;
	    }

	    /**
	     * This method invokes `interceptor` and returns `value`. The interceptor is
	     * bound to `thisArg` and invoked with one argument; (value). The purpose of
	     * this method is to "tap into" a method chain in order to perform operations
	     * on intermediate results within the chain.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * _([1, 2, 3])
	     *  .tap(function(array) {
	     *    array.pop();
	     *  })
	     *  .reverse()
	     *  .value();
	     * // => [2, 1]
	     */
	    function tap(value, interceptor, thisArg) {
	      interceptor.call(thisArg, value);
	      return value;
	    }

	    /**
	     * This method is like `_.tap` except that it returns the result of `interceptor`.
	     *
	     * @static
	     * @memberOf _
	     * @category Chain
	     * @param {*} value The value to provide to `interceptor`.
	     * @param {Function} interceptor The function to invoke.
	     * @param {*} [thisArg] The `this` binding of `interceptor`.
	     * @returns {*} Returns the result of `interceptor`.
	     * @example
	     *
	     * _('  abc  ')
	     *  .chain()
	     *  .trim()
	     *  .thru(function(value) {
	     *    return [value];
	     *  })
	     *  .value();
	     * // => ['abc']
	     */
	    function thru(value, interceptor, thisArg) {
	      return interceptor.call(thisArg, value);
	    }

	    /**
	     * Enables explicit method chaining on the wrapper object.
	     *
	     * @name chain
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // without explicit chaining
	     * _(users).first();
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // with explicit chaining
	     * _(users).chain()
	     *   .first()
	     *   .pick('user')
	     *   .value();
	     * // => { 'user': 'barney' }
	     */
	    function wrapperChain() {
	      return chain(this);
	    }

	    /**
	     * Executes the chained sequence and returns the wrapped result.
	     *
	     * @name commit
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapper = _(array).push(3);
	     *
	     * console.log(array);
	     * // => [1, 2]
	     *
	     * wrapper = wrapper.commit();
	     * console.log(array);
	     * // => [1, 2, 3]
	     *
	     * wrapper.last();
	     * // => 3
	     *
	     * console.log(array);
	     * // => [1, 2, 3]
	     */
	    function wrapperCommit() {
	      return new LodashWrapper(this.value(), this.__chain__);
	    }

	    /**
	     * Creates a clone of the chained sequence planting `value` as the wrapped value.
	     *
	     * @name plant
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2];
	     * var wrapper = _(array).map(function(value) {
	     *   return Math.pow(value, 2);
	     * });
	     *
	     * var other = [3, 4];
	     * var otherWrapper = wrapper.plant(other);
	     *
	     * otherWrapper.value();
	     * // => [9, 16]
	     *
	     * wrapper.value();
	     * // => [1, 4]
	     */
	    function wrapperPlant(value) {
	      var result,
	          parent = this;

	      while (parent instanceof baseLodash) {
	        var clone = wrapperClone(parent);
	        if (result) {
	          previous.__wrapped__ = clone;
	        } else {
	          result = clone;
	        }
	        var previous = clone;
	        parent = parent.__wrapped__;
	      }
	      previous.__wrapped__ = value;
	      return result;
	    }

	    /**
	     * Reverses the wrapped array so the first element becomes the last, the
	     * second element becomes the second to last, and so on.
	     *
	     * **Note:** This method mutates the wrapped array.
	     *
	     * @name reverse
	     * @memberOf _
	     * @category Chain
	     * @returns {Object} Returns the new reversed `lodash` wrapper instance.
	     * @example
	     *
	     * var array = [1, 2, 3];
	     *
	     * _(array).reverse().value()
	     * // => [3, 2, 1]
	     *
	     * console.log(array);
	     * // => [3, 2, 1]
	     */
	    function wrapperReverse() {
	      var value = this.__wrapped__;
	      if (value instanceof LazyWrapper) {
	        if (this.__actions__.length) {
	          value = new LazyWrapper(this);
	        }
	        return new LodashWrapper(value.reverse(), this.__chain__);
	      }
	      return this.thru(function(value) {
	        return value.reverse();
	      });
	    }

	    /**
	     * Produces the result of coercing the unwrapped value to a string.
	     *
	     * @name toString
	     * @memberOf _
	     * @category Chain
	     * @returns {string} Returns the coerced string value.
	     * @example
	     *
	     * _([1, 2, 3]).toString();
	     * // => '1,2,3'
	     */
	    function wrapperToString() {
	      return (this.value() + '');
	    }

	    /**
	     * Executes the chained sequence to extract the unwrapped value.
	     *
	     * @name value
	     * @memberOf _
	     * @alias run, toJSON, valueOf
	     * @category Chain
	     * @returns {*} Returns the resolved unwrapped value.
	     * @example
	     *
	     * _([1, 2, 3]).value();
	     * // => [1, 2, 3]
	     */
	    function wrapperValue() {
	      return baseWrapperValue(this.__wrapped__, this.__actions__);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates an array of elements corresponding to the given keys, or indexes,
	     * of `collection`. Keys may be specified as individual arguments or as arrays
	     * of keys.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(number|number[]|string|string[])} [props] The property names
	     *  or indexes of elements to pick, specified individually or in arrays.
	     * @returns {Array} Returns the new array of picked elements.
	     * @example
	     *
	     * _.at(['a', 'b', 'c'], [0, 2]);
	     * // => ['a', 'c']
	     *
	     * _.at(['barney', 'fred', 'pebbles'], 0, 2);
	     * // => ['barney', 'pebbles']
	     */
	    var at = restParam(function(collection, props) {
	      return baseAt(collection, baseFlatten(props));
	    });

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the number of times the key was returned by `iteratee`.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy([4.3, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': 1, '6': 2 }
	     *
	     * _.countBy(['one', 'two', 'three'], 'length');
	     * // => { '3': 2, '5': 1 }
	     */
	    var countBy = createAggregator(function(result, value, key) {
	      hasOwnProperty.call(result, key) ? ++result[key] : (result[key] = 1);
	    });

	    /**
	     * Checks if `predicate` returns truthy for **all** elements of `collection`.
	     * The predicate is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias all
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if all elements pass the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.every([true, 1, null, 'yes'], Boolean);
	     * // => false
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': false },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.every(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.every(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.every(users, 'active');
	     * // => false
	     */
	    function every(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayEvery : baseEvery;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = null;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning an array of all elements
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias select
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.filter([4, 5, 6], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 6]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.filter(users, { 'age': 36, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.filter(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.filter(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function filter(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, predicate);
	    }

	    /**
	     * Iterates over elements of `collection`, returning the first element
	     * `predicate` returns truthy for. The predicate is bound to `thisArg` and
	     * invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias detect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': true },
	     *   { 'user': 'fred',    'age': 40, 'active': false },
	     *   { 'user': 'pebbles', 'age': 1,  'active': true }
	     * ];
	     *
	     * _.result(_.find(users, function(chr) {
	     *   return chr.age < 40;
	     * }), 'user');
	     * // => 'barney'
	     *
	     * // using the `_.matches` callback shorthand
	     * _.result(_.find(users, { 'age': 1, 'active': true }), 'user');
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.result(_.find(users, 'active', false), 'user');
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.result(_.find(users, 'active'), 'user');
	     * // => 'barney'
	     */
	    var find = createFind(baseEach);

	    /**
	     * This method is like `_.find` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * _.findLast([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 1;
	     * });
	     * // => 3
	     */
	    var findLast = createFind(baseEachRight, true);

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning the first element that has equivalent property
	     * values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {*} Returns the matched element, else `undefined`.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.result(_.findWhere(users, { 'age': 36, 'active': true }), 'user');
	     * // => 'barney'
	     *
	     * _.result(_.findWhere(users, { 'age': 40, 'active': false }), 'user');
	     * // => 'fred'
	     */
	    function findWhere(collection, source) {
	      return find(collection, baseMatches(source));
	    }

	    /**
	     * Iterates over elements of `collection` invoking `iteratee` for each element.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection). Iteratee functions may exit iteration early
	     * by explicitly returning `false`.
	     *
	     * **Note:** As with other "Collections" methods, objects with a "length" property
	     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	     * may be used for object iteration.
	     *
	     * @static
	     * @memberOf _
	     * @alias each
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEach(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from left to right and returns the array
	     *
	     * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	     *   console.log(n, key);
	     * });
	     * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	     */
	    var forEach = createForEach(arrayEach, baseEach);

	    /**
	     * This method is like `_.forEach` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias eachRight
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array|Object|string} Returns `collection`.
	     * @example
	     *
	     * _([1, 2]).forEachRight(function(n) {
	     *   console.log(n);
	     * }).value();
	     * // => logs each value from right to left and returns the array
	     */
	    var forEachRight = createForEach(arrayEachRight, baseEachRight);

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is an array of the elements responsible for generating the key.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return Math.floor(n);
	     * });
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * _.groupBy([4.2, 6.1, 6.4], function(n) {
	     *   return this.floor(n);
	     * }, Math);
	     * // => { '4': [4.2], '6': [6.1, 6.4] }
	     *
	     * // using the `_.property` callback shorthand
	     * _.groupBy(['one', 'two', 'three'], 'length');
	     * // => { '3': ['one', 'two'], '5': ['three'] }
	     */
	    var groupBy = createAggregator(function(result, value, key) {
	      if (hasOwnProperty.call(result, key)) {
	        result[key].push(value);
	      } else {
	        result[key] = [value];
	      }
	    });

	    /**
	     * Checks if `value` is in `collection` using
	     * [`SameValueZero`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-samevaluezero)
	     * for equality comparisons. If `fromIndex` is negative, it is used as the offset
	     * from the end of `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @alias contains, include
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {*} target The value to search for.
	     * @param {number} [fromIndex=0] The index to search from.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {boolean} Returns `true` if a matching element is found, else `false`.
	     * @example
	     *
	     * _.includes([1, 2, 3], 1);
	     * // => true
	     *
	     * _.includes([1, 2, 3], 1, 2);
	     * // => false
	     *
	     * _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
	     * // => true
	     *
	     * _.includes('pebbles', 'eb');
	     * // => true
	     */
	    function includes(collection, target, fromIndex, guard) {
	      var length = collection ? getLength(collection) : 0;
	      if (!isLength(length)) {
	        collection = values(collection);
	        length = collection.length;
	      }
	      if (!length) {
	        return false;
	      }
	      if (typeof fromIndex != 'number' || (guard && isIterateeCall(target, fromIndex, guard))) {
	        fromIndex = 0;
	      } else {
	        fromIndex = fromIndex < 0 ? nativeMax(length + fromIndex, 0) : (fromIndex || 0);
	      }
	      return (typeof collection == 'string' || !isArray(collection) && isString(collection))
	        ? (fromIndex < length && collection.indexOf(target, fromIndex) > -1)
	        : (getIndexOf(collection, target, fromIndex) > -1);
	    }

	    /**
	     * Creates an object composed of keys generated from the results of running
	     * each element of `collection` through `iteratee`. The corresponding value
	     * of each key is the last element responsible for generating the key. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the composed aggregate object.
	     * @example
	     *
	     * var keyData = [
	     *   { 'dir': 'left', 'code': 97 },
	     *   { 'dir': 'right', 'code': 100 }
	     * ];
	     *
	     * _.indexBy(keyData, 'dir');
	     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return String.fromCharCode(object.code);
	     * });
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     *
	     * _.indexBy(keyData, function(object) {
	     *   return this.fromCharCode(object.code);
	     * }, String);
	     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
	     */
	    var indexBy = createAggregator(function(result, value, key) {
	      result[key] = value;
	    });

	    /**
	     * Invokes the method at `path` of each element in `collection`, returning
	     * an array of the results of each invoked method. Any additional arguments
	     * are provided to each invoked method. If `methodName` is a function it is
	     * invoked for, and `this` bound to, each element in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|Function|string} path The path of the method to invoke or
	     *  the function invoked per iteration.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
	     * // => [[1, 5, 7], [1, 2, 3]]
	     *
	     * _.invoke([123, 456], String.prototype.split, '');
	     * // => [['1', '2', '3'], ['4', '5', '6']]
	     */
	    var invoke = restParam(function(collection, path, args) {
	      var index = -1,
	          isFunc = typeof path == 'function',
	          isProp = isKey(path),
	          result = isArrayLike(collection) ? Array(collection.length) : [];

	      baseEach(collection, function(value) {
	        var func = isFunc ? path : ((isProp && value != null) ? value[path] : null);
	        result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
	      });
	      return result;
	    });

	    /**
	     * Creates an array of values by running each element in `collection` through
	     * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	     *
	     * The guarded methods are:
	     * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	     * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	     * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	     * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	     * `sum`, `uniq`, and `words`
	     *
	     * @static
	     * @memberOf _
	     * @alias collect
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new mapped array.
	     * @example
	     *
	     * function timesThree(n) {
	     *   return n * 3;
	     * }
	     *
	     * _.map([1, 2], timesThree);
	     * // => [3, 6]
	     *
	     * _.map({ 'a': 1, 'b': 2 }, timesThree);
	     * // => [3, 6] (iteration order is not guaranteed)
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(users, 'user');
	     * // => ['barney', 'fred']
	     */
	    function map(collection, iteratee, thisArg) {
	      var func = isArray(collection) ? arrayMap : baseMap;
	      iteratee = getCallback(iteratee, thisArg, 3);
	      return func(collection, iteratee);
	    }

	    /**
	     * Creates an array of elements split into two groups, the first of which
	     * contains elements `predicate` returns truthy for, while the second of which
	     * contains elements `predicate` returns falsey for. The predicate is bound
	     * to `thisArg` and invoked with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the array of grouped elements.
	     * @example
	     *
	     * _.partition([1, 2, 3], function(n) {
	     *   return n % 2;
	     * });
	     * // => [[1, 3], [2]]
	     *
	     * _.partition([1.2, 2.3, 3.4], function(n) {
	     *   return this.floor(n) % 2;
	     * }, Math);
	     * // => [[1.2, 3.4], [2.3]]
	     *
	     * var users = [
	     *   { 'user': 'barney',  'age': 36, 'active': false },
	     *   { 'user': 'fred',    'age': 40, 'active': true },
	     *   { 'user': 'pebbles', 'age': 1,  'active': false }
	     * ];
	     *
	     * var mapper = function(array) {
	     *   return _.pluck(array, 'user');
	     * };
	     *
	     * // using the `_.matches` callback shorthand
	     * _.map(_.partition(users, { 'age': 1, 'active': false }), mapper);
	     * // => [['pebbles'], ['barney', 'fred']]
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.map(_.partition(users, 'active', false), mapper);
	     * // => [['barney', 'pebbles'], ['fred']]
	     *
	     * // using the `_.property` callback shorthand
	     * _.map(_.partition(users, 'active'), mapper);
	     * // => [['fred'], ['barney', 'pebbles']]
	     */
	    var partition = createAggregator(function(result, value, key) {
	      result[key ? 0 : 1].push(value);
	    }, function() { return [[], []]; });

	    /**
	     * Gets the property value of `path` from all elements in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Array|string} path The path of the property to pluck.
	     * @returns {Array} Returns the property values.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.pluck(users, 'user');
	     * // => ['barney', 'fred']
	     *
	     * var userIndex = _.indexBy(users, 'user');
	     * _.pluck(userIndex, 'age');
	     * // => [36, 40] (iteration order is not guaranteed)
	     */
	    function pluck(collection, path) {
	      return map(collection, property(path));
	    }

	    /**
	     * Reduces `collection` to a value which is the accumulated result of running
	     * each element in `collection` through `iteratee`, where each successive
	     * invocation is supplied the return value of the previous. If `accumulator`
	     * is not provided the first element of `collection` is used as the initial
	     * value. The `iteratee` is bound to `thisArg` and invoked with four arguments:
	     * (accumulator, value, index|key, collection).
	     *
	     * Many lodash methods are guarded to work as iteratees for methods like
	     * `_.reduce`, `_.reduceRight`, and `_.transform`.
	     *
	     * The guarded methods are:
	     * `assign`, `defaults`, `includes`, `merge`, `sortByAll`, and `sortByOrder`
	     *
	     * @static
	     * @memberOf _
	     * @alias foldl, inject
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.reduce([1, 2], function(total, n) {
	     *   return total + n;
	     * });
	     * // => 3
	     *
	     * _.reduce({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     *   return result;
	     * }, {});
	     * // => { 'a': 3, 'b': 6 } (iteration order is not guaranteed)
	     */
	    var reduce = createReduce(arrayReduce, baseEach);

	    /**
	     * This method is like `_.reduce` except that it iterates over elements of
	     * `collection` from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias foldr
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The initial value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * var array = [[0, 1], [2, 3], [4, 5]];
	     *
	     * _.reduceRight(array, function(flattened, other) {
	     *   return flattened.concat(other);
	     * }, []);
	     * // => [4, 5, 2, 3, 0, 1]
	     */
	    var reduceRight = createReduce(arrayReduceRight, baseEachRight);

	    /**
	     * The opposite of `_.filter`; this method returns the elements of `collection`
	     * that `predicate` does **not** return truthy for.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * _.reject([1, 2, 3, 4], function(n) {
	     *   return n % 2 == 0;
	     * });
	     * // => [1, 3]
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false },
	     *   { 'user': 'fred',   'age': 40, 'active': true }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	     * // => ['barney']
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.pluck(_.reject(users, 'active', false), 'user');
	     * // => ['fred']
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.reject(users, 'active'), 'user');
	     * // => ['barney']
	     */
	    function reject(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arrayFilter : baseFilter;
	      predicate = getCallback(predicate, thisArg, 3);
	      return func(collection, function(value, index, collection) {
	        return !predicate(value, index, collection);
	      });
	    }

	    /**
	     * Gets a random element or `n` random elements from a collection.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to sample.
	     * @param {number} [n] The number of elements to sample.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {*} Returns the random sample(s).
	     * @example
	     *
	     * _.sample([1, 2, 3, 4]);
	     * // => 2
	     *
	     * _.sample([1, 2, 3, 4], 2);
	     * // => [3, 1]
	     */
	    function sample(collection, n, guard) {
	      if (guard ? isIterateeCall(collection, n, guard) : n == null) {
	        collection = toIterable(collection);
	        var length = collection.length;
	        return length > 0 ? collection[baseRandom(0, length - 1)] : undefined;
	      }
	      var index = -1,
	          result = toArray(collection),
	          length = result.length,
	          lastIndex = length - 1;

	      n = nativeMin(n < 0 ? 0 : (+n || 0), length);
	      while (++index < n) {
	        var rand = baseRandom(index, lastIndex),
	            value = result[rand];

	        result[rand] = result[index];
	        result[index] = value;
	      }
	      result.length = n;
	      return result;
	    }

	    /**
	     * Creates an array of shuffled values, using a version of the
	     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to shuffle.
	     * @returns {Array} Returns the new shuffled array.
	     * @example
	     *
	     * _.shuffle([1, 2, 3, 4]);
	     * // => [4, 1, 3, 2]
	     */
	    function shuffle(collection) {
	      return sample(collection, POSITIVE_INFINITY);
	    }

	    /**
	     * Gets the size of `collection` by returning its length for array-like
	     * values or the number of own enumerable properties for objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to inspect.
	     * @returns {number} Returns the size of `collection`.
	     * @example
	     *
	     * _.size([1, 2, 3]);
	     * // => 3
	     *
	     * _.size({ 'a': 1, 'b': 2 });
	     * // => 2
	     *
	     * _.size('pebbles');
	     * // => 7
	     */
	    function size(collection) {
	      var length = collection ? getLength(collection) : 0;
	      return isLength(length) ? length : keys(collection).length;
	    }

	    /**
	     * Checks if `predicate` returns truthy for **any** element of `collection`.
	     * The function returns as soon as it finds a passing value and does not iterate
	     * over the entire collection. The predicate is bound to `thisArg` and invoked
	     * with three arguments: (value, index|key, collection).
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias any
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {boolean} Returns `true` if any element passes the predicate check,
	     *  else `false`.
	     * @example
	     *
	     * _.some([null, 0, 'yes', false], Boolean);
	     * // => true
	     *
	     * var users = [
	     *   { 'user': 'barney', 'active': true },
	     *   { 'user': 'fred',   'active': false }
	     * ];
	     *
	     * // using the `_.matches` callback shorthand
	     * _.some(users, { 'user': 'barney', 'active': false });
	     * // => false
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.some(users, 'active', false);
	     * // => true
	     *
	     * // using the `_.property` callback shorthand
	     * _.some(users, 'active');
	     * // => true
	     */
	    function some(collection, predicate, thisArg) {
	      var func = isArray(collection) ? arraySome : baseSome;
	      if (thisArg && isIterateeCall(collection, predicate, thisArg)) {
	        predicate = null;
	      }
	      if (typeof predicate != 'function' || thisArg !== undefined) {
	        predicate = getCallback(predicate, thisArg, 3);
	      }
	      return func(collection, predicate);
	    }

	    /**
	     * Creates an array of elements, sorted in ascending order by the results of
	     * running each element in a collection through `iteratee`. This method performs
	     * a stable sort, that is, it preserves the original sort order of equal elements.
	     * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	     * (value, index|key, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return Math.sin(n);
	     * });
	     * // => [3, 1, 2]
	     *
	     * _.sortBy([1, 2, 3], function(n) {
	     *   return this.sin(n);
	     * }, Math);
	     * // => [3, 1, 2]
	     *
	     * var users = [
	     *   { 'user': 'fred' },
	     *   { 'user': 'pebbles' },
	     *   { 'user': 'barney' }
	     * ];
	     *
	     * // using the `_.property` callback shorthand
	     * _.pluck(_.sortBy(users, 'user'), 'user');
	     * // => ['barney', 'fred', 'pebbles']
	     */
	    function sortBy(collection, iteratee, thisArg) {
	      if (collection == null) {
	        return [];
	      }
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = null;
	      }
	      var index = -1;
	      iteratee = getCallback(iteratee, thisArg, 3);

	      var result = baseMap(collection, function(value, key, collection) {
	        return { 'criteria': iteratee(value, key, collection), 'index': ++index, 'value': value };
	      });
	      return baseSortBy(result, compareAscending);
	    }

	    /**
	     * This method is like `_.sortBy` except that it can sort by multiple iteratees
	     * or property names.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {...(Function|Function[]|Object|Object[]|string|string[])} iteratees
	     *  The iteratees to sort by, specified as individual values or arrays of values.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 34 }
	     * ];
	     *
	     * _.map(_.sortByAll(users, ['user', 'age']), _.values);
	     * // => [['barney', 34], ['barney', 36], ['fred', 42], ['fred', 48]]
	     *
	     * _.map(_.sortByAll(users, 'user', function(chr) {
	     *   return Math.floor(chr.age / 10);
	     * }), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    var sortByAll = restParam(function(collection, iteratees) {
	      if (collection == null) {
	        return [];
	      }
	      var guard = iteratees[2];
	      if (guard && isIterateeCall(iteratees[0], iteratees[1], guard)) {
	        iteratees.length = 1;
	      }
	      return baseSortByOrder(collection, baseFlatten(iteratees), []);
	    });

	    /**
	     * This method is like `_.sortByAll` except that it allows specifying the
	     * sort orders of the iteratees to sort by. A truthy value in `orders` will
	     * sort the corresponding property name in ascending order while a falsey
	     * value will sort it in descending order.
	     *
	     * If a property name is provided for an iteratee the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If an object is provided for an iteratee the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
	     * @param {boolean[]} orders The sort orders of `iteratees`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.reduce`.
	     * @returns {Array} Returns the new sorted array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'fred',   'age': 48 },
	     *   { 'user': 'barney', 'age': 34 },
	     *   { 'user': 'fred',   'age': 42 },
	     *   { 'user': 'barney', 'age': 36 }
	     * ];
	     *
	     * // sort by `user` in ascending order and by `age` in descending order
	     * _.map(_.sortByOrder(users, ['user', 'age'], [true, false]), _.values);
	     * // => [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 42]]
	     */
	    function sortByOrder(collection, iteratees, orders, guard) {
	      if (collection == null) {
	        return [];
	      }
	      if (guard && isIterateeCall(iteratees, orders, guard)) {
	        orders = null;
	      }
	      if (!isArray(iteratees)) {
	        iteratees = iteratees == null ? [] : [iteratees];
	      }
	      if (!isArray(orders)) {
	        orders = orders == null ? [] : [orders];
	      }
	      return baseSortByOrder(collection, iteratees, orders);
	    }

	    /**
	     * Performs a deep comparison between each element in `collection` and the
	     * source object, returning an array of all elements that have equivalent
	     * property values.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Collection
	     * @param {Array|Object|string} collection The collection to search.
	     * @param {Object} source The object of property values to match.
	     * @returns {Array} Returns the new filtered array.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': false, 'pets': ['hoppy'] },
	     *   { 'user': 'fred',   'age': 40, 'active': true, 'pets': ['baby puss', 'dino'] }
	     * ];
	     *
	     * _.pluck(_.where(users, { 'age': 36, 'active': false }), 'user');
	     * // => ['barney']
	     *
	     * _.pluck(_.where(users, { 'pets': ['dino'] }), 'user');
	     * // => ['fred']
	     */
	    function where(collection, source) {
	      return filter(collection, baseMatches(source));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Gets the number of milliseconds that have elapsed since the Unix epoch
	     * (1 January 1970 00:00:00 UTC).
	     *
	     * @static
	     * @memberOf _
	     * @category Date
	     * @example
	     *
	     * _.defer(function(stamp) {
	     *   console.log(_.now() - stamp);
	     * }, _.now());
	     * // => logs the number of milliseconds it took for the deferred function to be invoked
	     */
	    var now = nativeNow || function() {
	      return new Date().getTime();
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The opposite of `_.before`; this method creates a function that invokes
	     * `func` once it is called `n` or more times.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls before `func` is invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var saves = ['profile', 'settings'];
	     *
	     * var done = _.after(saves.length, function() {
	     *   console.log('done saving!');
	     * });
	     *
	     * _.forEach(saves, function(type) {
	     *   asyncSave({ 'type': type, 'complete': done });
	     * });
	     * // => logs 'done saving!' after the two async saves have completed
	     */
	    function after(n, func) {
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      n = nativeIsFinite(n = +n) ? n : 0;
	      return function() {
	        if (--n < 1) {
	          return func.apply(this, arguments);
	        }
	      };
	    }

	    /**
	     * Creates a function that accepts up to `n` arguments ignoring any
	     * additional arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to cap arguments for.
	     * @param {number} [n=func.length] The arity cap.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
	     * // => [6, 8, 10]
	     */
	    function ary(func, n, guard) {
	      if (guard && isIterateeCall(func, n, guard)) {
	        n = null;
	      }
	      n = (func && n == null) ? func.length : nativeMax(+n || 0, 0);
	      return createWrapper(func, ARY_FLAG, null, null, null, null, n);
	    }

	    /**
	     * Creates a function that invokes `func`, with the `this` binding and arguments
	     * of the created function, while it is called less than `n` times. Subsequent
	     * calls to the created function return the result of the last `func` invocation.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {number} n The number of calls at which `func` is no longer invoked.
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * jQuery('#add').on('click', _.before(5, addContactToList));
	     * // => allows adding up to 4 contacts to the list
	     */
	    function before(n, func) {
	      var result;
	      if (typeof func != 'function') {
	        if (typeof n == 'function') {
	          var temp = n;
	          n = func;
	          func = temp;
	        } else {
	          throw new TypeError(FUNC_ERROR_TEXT);
	        }
	      }
	      return function() {
	        if (--n > 0) {
	          result = func.apply(this, arguments);
	        }
	        if (n <= 1) {
	          func = null;
	        }
	        return result;
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and prepends any additional `_.bind` arguments to those provided to the
	     * bound function.
	     *
	     * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** Unlike native `Function#bind` this method does not set the "length"
	     * property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to bind.
	     * @param {*} thisArg The `this` binding of `func`.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var greet = function(greeting, punctuation) {
	     *   return greeting + ' ' + this.user + punctuation;
	     * };
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * var bound = _.bind(greet, object, 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * // using placeholders
	     * var bound = _.bind(greet, object, _, '!');
	     * bound('hi');
	     * // => 'hi fred!'
	     */
	    var bind = restParam(function(func, thisArg, partials) {
	      var bitmask = BIND_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bind.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(func, bitmask, thisArg, partials, holders);
	    });

	    /**
	     * Binds methods of an object to the object itself, overwriting the existing
	     * method. Method names may be specified as individual arguments or as arrays
	     * of method names. If no method names are provided all enumerable function
	     * properties, own and inherited, of `object` are bound.
	     *
	     * **Note:** This method does not set the "length" property of bound functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object to bind and assign the bound methods to.
	     * @param {...(string|string[])} [methodNames] The object method names to bind,
	     *  specified as individual method names or arrays of method names.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var view = {
	     *   'label': 'docs',
	     *   'onClick': function() {
	     *     console.log('clicked ' + this.label);
	     *   }
	     * };
	     *
	     * _.bindAll(view);
	     * jQuery('#docs').on('click', view.onClick);
	     * // => logs 'clicked docs' when the element is clicked
	     */
	    var bindAll = restParam(function(object, methodNames) {
	      methodNames = methodNames.length ? baseFlatten(methodNames) : functions(object);

	      var index = -1,
	          length = methodNames.length;

	      while (++index < length) {
	        var key = methodNames[index];
	        object[key] = createWrapper(object[key], BIND_FLAG, object);
	      }
	      return object;
	    });

	    /**
	     * Creates a function that invokes the method at `object[key]` and prepends
	     * any additional `_.bindKey` arguments to those provided to the bound function.
	     *
	     * This method differs from `_.bind` by allowing bound functions to reference
	     * methods that may be redefined or don't yet exist.
	     * See [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
	     * for more details.
	     *
	     * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Object} object The object the method belongs to.
	     * @param {string} key The key of the method.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new bound function.
	     * @example
	     *
	     * var object = {
	     *   'user': 'fred',
	     *   'greet': function(greeting, punctuation) {
	     *     return greeting + ' ' + this.user + punctuation;
	     *   }
	     * };
	     *
	     * var bound = _.bindKey(object, 'greet', 'hi');
	     * bound('!');
	     * // => 'hi fred!'
	     *
	     * object.greet = function(greeting, punctuation) {
	     *   return greeting + 'ya ' + this.user + punctuation;
	     * };
	     *
	     * bound('!');
	     * // => 'hiya fred!'
	     *
	     * // using placeholders
	     * var bound = _.bindKey(object, 'greet', _, '!');
	     * bound('hi');
	     * // => 'hiya fred!'
	     */
	    var bindKey = restParam(function(object, key, partials) {
	      var bitmask = BIND_FLAG | BIND_KEY_FLAG;
	      if (partials.length) {
	        var holders = replaceHolders(partials, bindKey.placeholder);
	        bitmask |= PARTIAL_FLAG;
	      }
	      return createWrapper(key, bitmask, object, partials, holders);
	    });

	    /**
	     * Creates a function that accepts one or more arguments of `func` that when
	     * called either invokes `func` returning its result, if all `func` arguments
	     * have been provided, or returns a function that accepts one or more of the
	     * remaining `func` arguments, and so on. The arity of `func` may be specified
	     * if `func.length` is not sufficient.
	     *
	     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
	     * may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curry(abc);
	     *
	     * curried(1)(2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2)(3);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(1)(_, 3)(2);
	     * // => [1, 2, 3]
	     */
	    var curry = createCurry(CURRY_FLAG);

	    /**
	     * This method is like `_.curry` except that arguments are applied to `func`
	     * in the manner of `_.partialRight` instead of `_.partial`.
	     *
	     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for provided arguments.
	     *
	     * **Note:** This method does not set the "length" property of curried functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to curry.
	     * @param {number} [arity=func.length] The arity of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the new curried function.
	     * @example
	     *
	     * var abc = function(a, b, c) {
	     *   return [a, b, c];
	     * };
	     *
	     * var curried = _.curryRight(abc);
	     *
	     * curried(3)(2)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(2, 3)(1);
	     * // => [1, 2, 3]
	     *
	     * curried(1, 2, 3);
	     * // => [1, 2, 3]
	     *
	     * // using placeholders
	     * curried(3)(1, _)(2);
	     * // => [1, 2, 3]
	     */
	    var curryRight = createCurry(CURRY_RIGHT_FLAG);

	    /**
	     * Creates a debounced function that delays invoking `func` until after `wait`
	     * milliseconds have elapsed since the last time the debounced function was
	     * invoked. The debounced function comes with a `cancel` method to cancel
	     * delayed invocations. Provide an options object to indicate that `func`
	     * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	     * Subsequent calls to the debounced function return the result of the last
	     * `func` invocation.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the debounced function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.debounce` and `_.throttle`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to debounce.
	     * @param {number} [wait=0] The number of milliseconds to delay.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=false] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	     *  delayed before it is invoked.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new debounced function.
	     * @example
	     *
	     * // avoid costly calculations while the window size is in flux
	     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	     *
	     * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	     *   'leading': true,
	     *   'trailing': false
	     * }));
	     *
	     * // ensure `batchLog` is invoked once after 1 second of debounced calls
	     * var source = new EventSource('/stream');
	     * jQuery(source).on('message', _.debounce(batchLog, 250, {
	     *   'maxWait': 1000
	     * }));
	     *
	     * // cancel a debounced call
	     * var todoChanges = _.debounce(batchLog, 1000);
	     * Object.observe(models.todo, todoChanges);
	     *
	     * Object.observe(models, function(changes) {
	     *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	     *     todoChanges.cancel();
	     *   }
	     * }, ['delete']);
	     *
	     * // ...at some point `models.todo` is changed
	     * models.todo.completed = true;
	     *
	     * // ...before 1 second has passed `models.todo` is deleted
	     * // which cancels the debounced `todoChanges` call
	     * delete models.todo;
	     */
	    function debounce(func, wait, options) {
	      var args,
	          maxTimeoutId,
	          result,
	          stamp,
	          thisArg,
	          timeoutId,
	          trailingCall,
	          lastCalled = 0,
	          maxWait = false,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      wait = wait < 0 ? 0 : (+wait || 0);
	      if (options === true) {
	        var leading = true;
	        trailing = false;
	      } else if (isObject(options)) {
	        leading = options.leading;
	        maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	        trailing = 'trailing' in options ? options.trailing : trailing;
	      }

	      function cancel() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        if (maxTimeoutId) {
	          clearTimeout(maxTimeoutId);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	      }

	      function delayed() {
	        var remaining = wait - (now() - stamp);
	        if (remaining <= 0 || remaining > wait) {
	          if (maxTimeoutId) {
	            clearTimeout(maxTimeoutId);
	          }
	          var isCalled = trailingCall;
	          maxTimeoutId = timeoutId = trailingCall = undefined;
	          if (isCalled) {
	            lastCalled = now();
	            result = func.apply(thisArg, args);
	            if (!timeoutId && !maxTimeoutId) {
	              args = thisArg = null;
	            }
	          }
	        } else {
	          timeoutId = setTimeout(delayed, remaining);
	        }
	      }

	      function maxDelayed() {
	        if (timeoutId) {
	          clearTimeout(timeoutId);
	        }
	        maxTimeoutId = timeoutId = trailingCall = undefined;
	        if (trailing || (maxWait !== wait)) {
	          lastCalled = now();
	          result = func.apply(thisArg, args);
	          if (!timeoutId && !maxTimeoutId) {
	            args = thisArg = null;
	          }
	        }
	      }

	      function debounced() {
	        args = arguments;
	        stamp = now();
	        thisArg = this;
	        trailingCall = trailing && (timeoutId || !leading);

	        if (maxWait === false) {
	          var leadingCall = leading && !timeoutId;
	        } else {
	          if (!maxTimeoutId && !leading) {
	            lastCalled = stamp;
	          }
	          var remaining = maxWait - (stamp - lastCalled),
	              isCalled = remaining <= 0 || remaining > maxWait;

	          if (isCalled) {
	            if (maxTimeoutId) {
	              maxTimeoutId = clearTimeout(maxTimeoutId);
	            }
	            lastCalled = stamp;
	            result = func.apply(thisArg, args);
	          }
	          else if (!maxTimeoutId) {
	            maxTimeoutId = setTimeout(maxDelayed, remaining);
	          }
	        }
	        if (isCalled && timeoutId) {
	          timeoutId = clearTimeout(timeoutId);
	        }
	        else if (!timeoutId && wait !== maxWait) {
	          timeoutId = setTimeout(delayed, wait);
	        }
	        if (leadingCall) {
	          isCalled = true;
	          result = func.apply(thisArg, args);
	        }
	        if (isCalled && !timeoutId && !maxTimeoutId) {
	          args = thisArg = null;
	        }
	        return result;
	      }
	      debounced.cancel = cancel;
	      return debounced;
	    }

	    /**
	     * Defers invoking the `func` until the current call stack has cleared. Any
	     * additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to defer.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.defer(function(text) {
	     *   console.log(text);
	     * }, 'deferred');
	     * // logs 'deferred' after one or more milliseconds
	     */
	    var defer = restParam(function(func, args) {
	      return baseDelay(func, 1, args);
	    });

	    /**
	     * Invokes `func` after `wait` milliseconds. Any additional arguments are
	     * provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to delay.
	     * @param {number} wait The number of milliseconds to delay invocation.
	     * @param {...*} [args] The arguments to invoke the function with.
	     * @returns {number} Returns the timer id.
	     * @example
	     *
	     * _.delay(function(text) {
	     *   console.log(text);
	     * }, 1000, 'later');
	     * // => logs 'later' after one second
	     */
	    var delay = restParam(function(func, wait, args) {
	      return baseDelay(func, wait, args);
	    });

	    /**
	     * Creates a function that returns the result of invoking the provided
	     * functions with the `this` binding of the created function, where each
	     * successive invocation is supplied the return value of the previous.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flow(_.add, square);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flow = createFlow();

	    /**
	     * This method is like `_.flow` except that it creates a function that
	     * invokes the provided functions from right to left.
	     *
	     * @static
	     * @memberOf _
	     * @alias backflow, compose
	     * @category Function
	     * @param {...Function} [funcs] Functions to invoke.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function square(n) {
	     *   return n * n;
	     * }
	     *
	     * var addSquare = _.flowRight(square, _.add);
	     * addSquare(1, 2);
	     * // => 9
	     */
	    var flowRight = createFlow(true);

	    /**
	     * Creates a function that memoizes the result of `func`. If `resolver` is
	     * provided it determines the cache key for storing the result based on the
	     * arguments provided to the memoized function. By default, the first argument
	     * provided to the memoized function is coerced to a string and used as the
	     * cache key. The `func` is invoked with the `this` binding of the memoized
	     * function.
	     *
	     * **Note:** The cache is exposed as the `cache` property on the memoized
	     * function. Its creation may be customized by replacing the `_.memoize.Cache`
	     * constructor with one whose instances implement the [`Map`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-properties-of-the-map-prototype-object)
	     * method interface of `get`, `has`, and `set`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to have its output memoized.
	     * @param {Function} [resolver] The function to resolve the cache key.
	     * @returns {Function} Returns the new memoizing function.
	     * @example
	     *
	     * var upperCase = _.memoize(function(string) {
	     *   return string.toUpperCase();
	     * });
	     *
	     * upperCase('fred');
	     * // => 'FRED'
	     *
	     * // modifying the result cache
	     * upperCase.cache.set('fred', 'BARNEY');
	     * upperCase('fred');
	     * // => 'BARNEY'
	     *
	     * // replacing `_.memoize.Cache`
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'barney' };
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'fred' }
	     *
	     * _.memoize.Cache = WeakMap;
	     * var identity = _.memoize(_.identity);
	     *
	     * identity(object);
	     * // => { 'user': 'fred' }
	     * identity(other);
	     * // => { 'user': 'barney' }
	     */
	    function memoize(func, resolver) {
	      if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      var memoized = function() {
	        var args = arguments,
	            key = resolver ? resolver.apply(this, args) : args[0],
	            cache = memoized.cache;

	        if (cache.has(key)) {
	          return cache.get(key);
	        }
	        var result = func.apply(this, args);
	        memoized.cache = cache.set(key, result);
	        return result;
	      };
	      memoized.cache = new memoize.Cache;
	      return memoized;
	    }

	    /**
	     * Creates a function that negates the result of the predicate `func`. The
	     * `func` predicate is invoked with the `this` binding and arguments of the
	     * created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} predicate The predicate to negate.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * function isEven(n) {
	     *   return n % 2 == 0;
	     * }
	     *
	     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
	     * // => [1, 3, 5]
	     */
	    function negate(predicate) {
	      if (typeof predicate != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function() {
	        return !predicate.apply(this, arguments);
	      };
	    }

	    /**
	     * Creates a function that is restricted to invoking `func` once. Repeat calls
	     * to the function return the value of the first call. The `func` is invoked
	     * with the `this` binding and arguments of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to restrict.
	     * @returns {Function} Returns the new restricted function.
	     * @example
	     *
	     * var initialize = _.once(createApplication);
	     * initialize();
	     * initialize();
	     * // `initialize` invokes `createApplication` once
	     */
	    function once(func) {
	      return before(2, func);
	    }

	    /**
	     * Creates a function that invokes `func` with `partial` arguments prepended
	     * to those provided to the new function. This method is like `_.bind` except
	     * it does **not** alter the `this` binding.
	     *
	     * The `_.partial.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var sayHelloTo = _.partial(greet, 'hello');
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     *
	     * // using placeholders
	     * var greetFred = _.partial(greet, _, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     */
	    var partial = createPartial(PARTIAL_FLAG);

	    /**
	     * This method is like `_.partial` except that partially applied arguments
	     * are appended to those provided to the new function.
	     *
	     * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
	     * builds, may be used as a placeholder for partially applied arguments.
	     *
	     * **Note:** This method does not set the "length" property of partially
	     * applied functions.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to partially apply arguments to.
	     * @param {...*} [partials] The arguments to be partially applied.
	     * @returns {Function} Returns the new partially applied function.
	     * @example
	     *
	     * var greet = function(greeting, name) {
	     *   return greeting + ' ' + name;
	     * };
	     *
	     * var greetFred = _.partialRight(greet, 'fred');
	     * greetFred('hi');
	     * // => 'hi fred'
	     *
	     * // using placeholders
	     * var sayHelloTo = _.partialRight(greet, 'hello', _);
	     * sayHelloTo('fred');
	     * // => 'hello fred'
	     */
	    var partialRight = createPartial(PARTIAL_RIGHT_FLAG);

	    /**
	     * Creates a function that invokes `func` with arguments arranged according
	     * to the specified indexes where the argument value at the first index is
	     * provided as the first argument, the argument value at the second index is
	     * provided as the second argument, and so on.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to rearrange arguments for.
	     * @param {...(number|number[])} indexes The arranged argument indexes,
	     *  specified as individual indexes or arrays of indexes.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var rearged = _.rearg(function(a, b, c) {
	     *   return [a, b, c];
	     * }, 2, 0, 1);
	     *
	     * rearged('b', 'c', 'a')
	     * // => ['a', 'b', 'c']
	     *
	     * var map = _.rearg(_.map, [1, 0]);
	     * map(function(n) {
	     *   return n * 3;
	     * }, [1, 2, 3]);
	     * // => [3, 6, 9]
	     */
	    var rearg = restParam(function(func, indexes) {
	      return createWrapper(func, REARG_FLAG, null, null, null, baseFlatten(indexes));
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the
	     * created function and arguments from `start` and beyond provided as an array.
	     *
	     * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to apply a rest parameter to.
	     * @param {number} [start=func.length-1] The start position of the rest parameter.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.restParam(function(what, names) {
	     *   return what + ' ' + _.initial(names).join(', ') +
	     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	     * });
	     *
	     * say('hello', 'fred', 'barney', 'pebbles');
	     * // => 'hello fred, barney, & pebbles'
	     */
	    function restParam(func, start) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	      return function() {
	        var args = arguments,
	            index = -1,
	            length = nativeMax(args.length - start, 0),
	            rest = Array(length);

	        while (++index < length) {
	          rest[index] = args[start + index];
	        }
	        switch (start) {
	          case 0: return func.call(this, rest);
	          case 1: return func.call(this, args[0], rest);
	          case 2: return func.call(this, args[0], args[1], rest);
	        }
	        var otherArgs = Array(start + 1);
	        index = -1;
	        while (++index < start) {
	          otherArgs[index] = args[index];
	        }
	        otherArgs[start] = rest;
	        return func.apply(this, otherArgs);
	      };
	    }

	    /**
	     * Creates a function that invokes `func` with the `this` binding of the created
	     * function and an array of arguments much like [`Function#apply`](https://es5.github.io/#x15.3.4.3).
	     *
	     * **Note:** This method is based on the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator).
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to spread arguments over.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var say = _.spread(function(who, what) {
	     *   return who + ' says ' + what;
	     * });
	     *
	     * say(['fred', 'hello']);
	     * // => 'fred says hello'
	     *
	     * // with a Promise
	     * var numbers = Promise.all([
	     *   Promise.resolve(40),
	     *   Promise.resolve(36)
	     * ]);
	     *
	     * numbers.then(_.spread(function(x, y) {
	     *   return x + y;
	     * }));
	     * // => a Promise of 76
	     */
	    function spread(func) {
	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      return function(array) {
	        return func.apply(this, array);
	      };
	    }

	    /**
	     * Creates a throttled function that only invokes `func` at most once per
	     * every `wait` milliseconds. The throttled function comes with a `cancel`
	     * method to cancel delayed invocations. Provide an options object to indicate
	     * that `func` should be invoked on the leading and/or trailing edge of the
	     * `wait` timeout. Subsequent calls to the throttled function return the
	     * result of the last `func` call.
	     *
	     * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	     * on the trailing edge of the timeout only if the the throttled function is
	     * invoked more than once during the `wait` timeout.
	     *
	     * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	     * for details over the differences between `_.throttle` and `_.debounce`.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {Function} func The function to throttle.
	     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.leading=true] Specify invoking on the leading
	     *  edge of the timeout.
	     * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	     *  edge of the timeout.
	     * @returns {Function} Returns the new throttled function.
	     * @example
	     *
	     * // avoid excessively updating the position while scrolling
	     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	     *
	     * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	     *   'trailing': false
	     * }));
	     *
	     * // cancel a trailing throttled call
	     * jQuery(window).on('popstate', throttled.cancel);
	     */
	    function throttle(func, wait, options) {
	      var leading = true,
	          trailing = true;

	      if (typeof func != 'function') {
	        throw new TypeError(FUNC_ERROR_TEXT);
	      }
	      if (options === false) {
	        leading = false;
	      } else if (isObject(options)) {
	        leading = 'leading' in options ? !!options.leading : leading;
	        trailing = 'trailing' in options ? !!options.trailing : trailing;
	      }
	      debounceOptions.leading = leading;
	      debounceOptions.maxWait = +wait;
	      debounceOptions.trailing = trailing;
	      return debounce(func, wait, debounceOptions);
	    }

	    /**
	     * Creates a function that provides `value` to the wrapper function as its
	     * first argument. Any additional arguments provided to the function are
	     * appended to those provided to the wrapper function. The wrapper is invoked
	     * with the `this` binding of the created function.
	     *
	     * @static
	     * @memberOf _
	     * @category Function
	     * @param {*} value The value to wrap.
	     * @param {Function} wrapper The wrapper function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var p = _.wrap(_.escape, function(func, text) {
	     *   return '<p>' + func(text) + '</p>';
	     * });
	     *
	     * p('fred, barney, & pebbles');
	     * // => '<p>fred, barney, &amp; pebbles</p>'
	     */
	    function wrap(value, wrapper) {
	      wrapper = wrapper == null ? identity : wrapper;
	      return createWrapper(wrapper, PARTIAL_FLAG, null, [value], []);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Creates a clone of `value`. If `isDeep` is `true` nested objects are cloned,
	     * otherwise they are assigned by reference. If `customizer` is provided it is
	     * invoked to produce the cloned values. If `customizer` returns `undefined`
	     * cloning is handled by the method instead. The `customizer` is bound to
	     * `thisArg` and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to clone.
	     * @param {boolean} [isDeep] Specify a deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var shallow = _.clone(users);
	     * shallow[0] === users[0];
	     * // => true
	     *
	     * var deep = _.clone(users, true);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.clone(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(false);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 0
	     */
	    function clone(value, isDeep, customizer, thisArg) {
	      if (isDeep && typeof isDeep != 'boolean' && isIterateeCall(value, isDeep, customizer)) {
	        isDeep = false;
	      }
	      else if (typeof isDeep == 'function') {
	        thisArg = customizer;
	        customizer = isDeep;
	        isDeep = false;
	      }
	      return typeof customizer == 'function'
	        ? baseClone(value, isDeep, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, isDeep);
	    }

	    /**
	     * Creates a deep clone of `value`. If `customizer` is provided it is invoked
	     * to produce the cloned values. If `customizer` returns `undefined` cloning
	     * is handled by the method instead. The `customizer` is bound to `thisArg`
	     * and invoked with two argument; (value [, index|key, object]).
	     *
	     * **Note:** This method is loosely based on the
	     * [structured clone algorithm](http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm).
	     * The enumerable properties of `arguments` objects and objects created by
	     * constructors other than `Object` are cloned to plain `Object` objects. An
	     * empty object is returned for uncloneable values such as functions, DOM nodes,
	     * Maps, Sets, and WeakMaps.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to deep clone.
	     * @param {Function} [customizer] The function to customize cloning values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {*} Returns the deep cloned value.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * var deep = _.cloneDeep(users);
	     * deep[0] === users[0];
	     * // => false
	     *
	     * // using a customizer callback
	     * var el = _.cloneDeep(document.body, function(value) {
	     *   if (_.isElement(value)) {
	     *     return value.cloneNode(true);
	     *   }
	     * });
	     *
	     * el === document.body
	     * // => false
	     * el.nodeName
	     * // => BODY
	     * el.childNodes.length;
	     * // => 20
	     */
	    function cloneDeep(value, customizer, thisArg) {
	      return typeof customizer == 'function'
	        ? baseClone(value, true, bindCallback(customizer, thisArg, 1))
	        : baseClone(value, true);
	    }

	    /**
	     * Checks if `value` is greater than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than `other`, else `false`.
	     * @example
	     *
	     * _.gt(3, 1);
	     * // => true
	     *
	     * _.gt(3, 3);
	     * // => false
	     *
	     * _.gt(1, 3);
	     * // => false
	     */
	    function gt(value, other) {
	      return value > other;
	    }

	    /**
	     * Checks if `value` is greater than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is greater than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.gte(3, 1);
	     * // => true
	     *
	     * _.gte(3, 3);
	     * // => true
	     *
	     * _.gte(1, 3);
	     * // => false
	     */
	    function gte(value, other) {
	      return value >= other;
	    }

	    /**
	     * Checks if `value` is classified as an `arguments` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArguments(function() { return arguments; }());
	     * // => true
	     *
	     * _.isArguments([1, 2, 3]);
	     * // => false
	     */
	    function isArguments(value) {
	      return isObjectLike(value) && isArrayLike(value) && objToString.call(value) == argsTag;
	    }

	    /**
	     * Checks if `value` is classified as an `Array` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isArray([1, 2, 3]);
	     * // => true
	     *
	     * _.isArray(function() { return arguments; }());
	     * // => false
	     */
	    var isArray = nativeIsArray || function(value) {
	      return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	    };

	    /**
	     * Checks if `value` is classified as a boolean primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isBoolean(false);
	     * // => true
	     *
	     * _.isBoolean(null);
	     * // => false
	     */
	    function isBoolean(value) {
	      return value === true || value === false || (isObjectLike(value) && objToString.call(value) == boolTag);
	    }

	    /**
	     * Checks if `value` is classified as a `Date` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isDate(new Date);
	     * // => true
	     *
	     * _.isDate('Mon April 23 2012');
	     * // => false
	     */
	    function isDate(value) {
	      return isObjectLike(value) && objToString.call(value) == dateTag;
	    }

	    /**
	     * Checks if `value` is a DOM element.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
	     * @example
	     *
	     * _.isElement(document.body);
	     * // => true
	     *
	     * _.isElement('<body>');
	     * // => false
	     */
	    function isElement(value) {
	      return !!value && value.nodeType === 1 && isObjectLike(value) &&
	        (objToString.call(value).indexOf('Element') > -1);
	    }
	    // Fallback for environments without DOM support.
	    if (!support.dom) {
	      isElement = function(value) {
	        return !!value && value.nodeType === 1 && isObjectLike(value) && !isPlainObject(value);
	      };
	    }

	    /**
	     * Checks if `value` is empty. A value is considered empty unless it is an
	     * `arguments` object, array, string, or jQuery-like collection with a length
	     * greater than `0` or an object with own enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Array|Object|string} value The value to inspect.
	     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	     * @example
	     *
	     * _.isEmpty(null);
	     * // => true
	     *
	     * _.isEmpty(true);
	     * // => true
	     *
	     * _.isEmpty(1);
	     * // => true
	     *
	     * _.isEmpty([1, 2, 3]);
	     * // => false
	     *
	     * _.isEmpty({ 'a': 1 });
	     * // => false
	     */
	    function isEmpty(value) {
	      if (value == null) {
	        return true;
	      }
	      if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	          (isObjectLike(value) && isFunction(value.splice)))) {
	        return !value.length;
	      }
	      return !keys(value).length;
	    }

	    /**
	     * Performs a deep comparison between two values to determine if they are
	     * equivalent. If `customizer` is provided it is invoked to compare values.
	     * If `customizer` returns `undefined` comparisons are handled by the method
	     * instead. The `customizer` is bound to `thisArg` and invoked with three
	     * arguments: (value, other [, index|key]).
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. Functions and DOM nodes
	     * are **not** supported. Provide a customizer function to extend support
	     * for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @alias eq
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var other = { 'user': 'fred' };
	     *
	     * object == other;
	     * // => false
	     *
	     * _.isEqual(object, other);
	     * // => true
	     *
	     * // using a customizer callback
	     * var array = ['hello', 'goodbye'];
	     * var other = ['hi', 'goodbye'];
	     *
	     * _.isEqual(array, other, function(value, other) {
	     *   if (_.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/)) {
	     *     return true;
	     *   }
	     * });
	     * // => true
	     */
	    function isEqual(value, other, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      var result = customizer ? customizer(value, other) : undefined;
	      return  result === undefined ? baseIsEqual(value, other, customizer) : !!result;
	    }

	    /**
	     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
	     * `SyntaxError`, `TypeError`, or `URIError` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
	     * @example
	     *
	     * _.isError(new Error);
	     * // => true
	     *
	     * _.isError(Error);
	     * // => false
	     */
	    function isError(value) {
	      return isObjectLike(value) && typeof value.message == 'string' && objToString.call(value) == errorTag;
	    }

	    /**
	     * Checks if `value` is a finite primitive number.
	     *
	     * **Note:** This method is based on [`Number.isFinite`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite).
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
	     * @example
	     *
	     * _.isFinite(10);
	     * // => true
	     *
	     * _.isFinite('10');
	     * // => false
	     *
	     * _.isFinite(true);
	     * // => false
	     *
	     * _.isFinite(Object(10));
	     * // => false
	     *
	     * _.isFinite(Infinity);
	     * // => false
	     */
	    var isFinite = nativeNumIsFinite || function(value) {
	      return typeof value == 'number' && nativeIsFinite(value);
	    };

	    /**
	     * Checks if `value` is classified as a `Function` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isFunction(_);
	     * // => true
	     *
	     * _.isFunction(/abc/);
	     * // => false
	     */
	    var isFunction = !(baseIsFunction(/x/) || (Uint8Array && !baseIsFunction(Uint8Array))) ? baseIsFunction : function(value) {
	      // The use of `Object#toString` avoids issues with the `typeof` operator
	      // in older versions of Chrome and Safari which return 'function' for regexes
	      // and Safari 8 equivalents which return 'object' for typed array constructors.
	      return objToString.call(value) == funcTag;
	    };

	    /**
	     * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	     * @example
	     *
	     * _.isObject({});
	     * // => true
	     *
	     * _.isObject([1, 2, 3]);
	     * // => true
	     *
	     * _.isObject(1);
	     * // => false
	     */
	    function isObject(value) {
	      // Avoid a V8 JIT bug in Chrome 19-20.
	      // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	      var type = typeof value;
	      return !!value && (type == 'object' || type == 'function');
	    }

	    /**
	     * Performs a deep comparison between `object` and `source` to determine if
	     * `object` contains equivalent property values. If `customizer` is provided
	     * it is invoked to compare values. If `customizer` returns `undefined`
	     * comparisons are handled by the method instead. The `customizer` is bound
	     * to `thisArg` and invoked with three arguments: (value, other, index|key).
	     *
	     * **Note:** This method supports comparing properties of arrays, booleans,
	     * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
	     * and DOM nodes are **not** supported. Provide a customizer function to extend
	     * support for comparing other values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {Object} object The object to inspect.
	     * @param {Object} source The object of property values to match.
	     * @param {Function} [customizer] The function to customize value comparisons.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.isMatch(object, { 'age': 40 });
	     * // => true
	     *
	     * _.isMatch(object, { 'age': 36 });
	     * // => false
	     *
	     * // using a customizer callback
	     * var object = { 'greeting': 'hello' };
	     * var source = { 'greeting': 'hi' };
	     *
	     * _.isMatch(object, source, function(value, other) {
	     *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
	     * });
	     * // => true
	     */
	    function isMatch(object, source, customizer, thisArg) {
	      customizer = typeof customizer == 'function' ? bindCallback(customizer, thisArg, 3) : undefined;
	      return baseIsMatch(object, getMatchData(source), customizer);
	    }

	    /**
	     * Checks if `value` is `NaN`.
	     *
	     * **Note:** This method is not the same as [`isNaN`](https://es5.github.io/#x15.1.2.4)
	     * which returns `true` for `undefined` and other non-numeric values.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
	     * @example
	     *
	     * _.isNaN(NaN);
	     * // => true
	     *
	     * _.isNaN(new Number(NaN));
	     * // => true
	     *
	     * isNaN(undefined);
	     * // => true
	     *
	     * _.isNaN(undefined);
	     * // => false
	     */
	    function isNaN(value) {
	      // An `NaN` primitive is the only value that is not equal to itself.
	      // Perform the `toStringTag` check first to avoid errors with some host objects in IE.
	      return isNumber(value) && value != +value;
	    }

	    /**
	     * Checks if `value` is a native function.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	     * @example
	     *
	     * _.isNative(Array.prototype.push);
	     * // => true
	     *
	     * _.isNative(_);
	     * // => false
	     */
	    function isNative(value) {
	      if (value == null) {
	        return false;
	      }
	      if (objToString.call(value) == funcTag) {
	        return reIsNative.test(fnToString.call(value));
	      }
	      return isObjectLike(value) && reIsHostCtor.test(value);
	    }

	    /**
	     * Checks if `value` is `null`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
	     * @example
	     *
	     * _.isNull(null);
	     * // => true
	     *
	     * _.isNull(void 0);
	     * // => false
	     */
	    function isNull(value) {
	      return value === null;
	    }

	    /**
	     * Checks if `value` is classified as a `Number` primitive or object.
	     *
	     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified
	     * as numbers, use the `_.isFinite` method.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isNumber(8.4);
	     * // => true
	     *
	     * _.isNumber(NaN);
	     * // => true
	     *
	     * _.isNumber('8.4');
	     * // => false
	     */
	    function isNumber(value) {
	      return typeof value == 'number' || (isObjectLike(value) && objToString.call(value) == numberTag);
	    }

	    /**
	     * Checks if `value` is a plain object, that is, an object created by the
	     * `Object` constructor or one with a `[[Prototype]]` of `null`.
	     *
	     * **Note:** This method assumes objects created by the `Object` constructor
	     * have no inherited enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     * }
	     *
	     * _.isPlainObject(new Foo);
	     * // => false
	     *
	     * _.isPlainObject([1, 2, 3]);
	     * // => false
	     *
	     * _.isPlainObject({ 'x': 0, 'y': 0 });
	     * // => true
	     *
	     * _.isPlainObject(Object.create(null));
	     * // => true
	     */
	    var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
	      if (!(value && objToString.call(value) == objectTag)) {
	        return false;
	      }
	      var valueOf = getNative(value, 'valueOf'),
	          objProto = valueOf && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

	      return objProto
	        ? (value == objProto || getPrototypeOf(value) == objProto)
	        : shimIsPlainObject(value);
	    };

	    /**
	     * Checks if `value` is classified as a `RegExp` object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isRegExp(/abc/);
	     * // => true
	     *
	     * _.isRegExp('/abc/');
	     * // => false
	     */
	    function isRegExp(value) {
	      return isObjectLike(value) && objToString.call(value) == regexpTag;
	    }

	    /**
	     * Checks if `value` is classified as a `String` primitive or object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isString('abc');
	     * // => true
	     *
	     * _.isString(1);
	     * // => false
	     */
	    function isString(value) {
	      return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	    }

	    /**
	     * Checks if `value` is classified as a typed array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	     * @example
	     *
	     * _.isTypedArray(new Uint8Array);
	     * // => true
	     *
	     * _.isTypedArray([]);
	     * // => false
	     */
	    function isTypedArray(value) {
	      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	    }

	    /**
	     * Checks if `value` is `undefined`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to check.
	     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
	     * @example
	     *
	     * _.isUndefined(void 0);
	     * // => true
	     *
	     * _.isUndefined(null);
	     * // => false
	     */
	    function isUndefined(value) {
	      return value === undefined;
	    }

	    /**
	     * Checks if `value` is less than `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than `other`, else `false`.
	     * @example
	     *
	     * _.lt(1, 3);
	     * // => true
	     *
	     * _.lt(3, 3);
	     * // => false
	     *
	     * _.lt(3, 1);
	     * // => false
	     */
	    function lt(value, other) {
	      return value < other;
	    }

	    /**
	     * Checks if `value` is less than or equal to `other`.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to compare.
	     * @param {*} other The other value to compare.
	     * @returns {boolean} Returns `true` if `value` is less than or equal to `other`, else `false`.
	     * @example
	     *
	     * _.lte(1, 3);
	     * // => true
	     *
	     * _.lte(3, 3);
	     * // => true
	     *
	     * _.lte(3, 1);
	     * // => false
	     */
	    function lte(value, other) {
	      return value <= other;
	    }

	    /**
	     * Converts `value` to an array.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Array} Returns the converted array.
	     * @example
	     *
	     * (function() {
	     *   return _.toArray(arguments).slice(1);
	     * }(1, 2, 3));
	     * // => [2, 3]
	     */
	    function toArray(value) {
	      var length = value ? getLength(value) : 0;
	      if (!isLength(length)) {
	        return values(value);
	      }
	      if (!length) {
	        return [];
	      }
	      return arrayCopy(value);
	    }

	    /**
	     * Converts `value` to a plain object flattening inherited enumerable
	     * properties of `value` to own properties of the plain object.
	     *
	     * @static
	     * @memberOf _
	     * @category Lang
	     * @param {*} value The value to convert.
	     * @returns {Object} Returns the converted plain object.
	     * @example
	     *
	     * function Foo() {
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.assign({ 'a': 1 }, new Foo);
	     * // => { 'a': 1, 'b': 2 }
	     *
	     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	     * // => { 'a': 1, 'b': 2, 'c': 3 }
	     */
	    function toPlainObject(value) {
	      return baseCopy(value, keysIn(value));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object. Subsequent sources overwrite property assignments of previous sources.
	     * If `customizer` is provided it is invoked to produce the assigned values.
	     * The `customizer` is bound to `thisArg` and invoked with five arguments:
	     * (objectValue, sourceValue, key, object, source).
	     *
	     * **Note:** This method mutates `object` and is based on
	     * [`Object.assign`](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign).
	     *
	     * @static
	     * @memberOf _
	     * @alias extend
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using a customizer callback
	     * var defaults = _.partialRight(_.assign, function(value, other) {
	     *   return _.isUndefined(value) ? other : value;
	     * });
	     *
	     * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var assign = createAssigner(function(object, source, customizer) {
	      return customizer
	        ? assignWith(object, source, customizer)
	        : baseAssign(object, source);
	    });

	    /**
	     * Creates an object that inherits from the given `prototype` object. If a
	     * `properties` object is provided its own enumerable properties are assigned
	     * to the created object.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} prototype The object to inherit from.
	     * @param {Object} [properties] The properties to assign to the object.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * function Shape() {
	     *   this.x = 0;
	     *   this.y = 0;
	     * }
	     *
	     * function Circle() {
	     *   Shape.call(this);
	     * }
	     *
	     * Circle.prototype = _.create(Shape.prototype, {
	     *   'constructor': Circle
	     * });
	     *
	     * var circle = new Circle;
	     * circle instanceof Circle;
	     * // => true
	     *
	     * circle instanceof Shape;
	     * // => true
	     */
	    function create(prototype, properties, guard) {
	      var result = baseCreate(prototype);
	      if (guard && isIterateeCall(prototype, properties, guard)) {
	        properties = null;
	      }
	      return properties ? baseAssign(result, properties) : result;
	    }

	    /**
	     * Assigns own enumerable properties of source object(s) to the destination
	     * object for all destination properties that resolve to `undefined`. Once a
	     * property is set, additional values of the same property are ignored.
	     *
	     * **Note:** This method mutates `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var defaults = restParam(function(args) {
	      var object = args[0];
	      if (object == null) {
	        return object;
	      }
	      args.push(assignDefaults);
	      return assign.apply(undefined, args);
	    });

	    /**
	     * This method is like `_.find` except that it returns the key of the first
	     * element `predicate` returns truthy for instead of the element itself.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => 'barney' (iteration order is not guaranteed)
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findKey(users, { 'age': 1, 'active': true });
	     * // => 'pebbles'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findKey(users, 'active');
	     * // => 'barney'
	     */
	    var findKey = createFindKey(baseForOwn);

	    /**
	     * This method is like `_.findKey` except that it iterates over elements of
	     * a collection in the opposite order.
	     *
	     * If a property name is provided for `predicate` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `predicate` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to search.
	     * @param {Function|Object|string} [predicate=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {string|undefined} Returns the key of the matched element, else `undefined`.
	     * @example
	     *
	     * var users = {
	     *   'barney':  { 'age': 36, 'active': true },
	     *   'fred':    { 'age': 40, 'active': false },
	     *   'pebbles': { 'age': 1,  'active': true }
	     * };
	     *
	     * _.findLastKey(users, function(chr) {
	     *   return chr.age < 40;
	     * });
	     * // => returns `pebbles` assuming `_.findKey` returns `barney`
	     *
	     * // using the `_.matches` callback shorthand
	     * _.findLastKey(users, { 'age': 36, 'active': true });
	     * // => 'barney'
	     *
	     * // using the `_.matchesProperty` callback shorthand
	     * _.findLastKey(users, 'active', false);
	     * // => 'fred'
	     *
	     * // using the `_.property` callback shorthand
	     * _.findLastKey(users, 'active');
	     * // => 'pebbles'
	     */
	    var findLastKey = createFindKey(baseForOwnRight);

	    /**
	     * Iterates over own and inherited enumerable properties of an object invoking
	     * `iteratee` for each property. The `iteratee` is bound to `thisArg` and invoked
	     * with three arguments: (value, key, object). Iteratee functions may exit
	     * iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forIn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a', 'b', and 'c' (iteration order is not guaranteed)
	     */
	    var forIn = createForIn(baseFor);

	    /**
	     * This method is like `_.forIn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forInRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'c', 'b', and 'a' assuming `_.forIn ` logs 'a', 'b', and 'c'
	     */
	    var forInRight = createForIn(baseForRight);

	    /**
	     * Iterates over own enumerable properties of an object invoking `iteratee`
	     * for each property. The `iteratee` is bound to `thisArg` and invoked with
	     * three arguments: (value, key, object). Iteratee functions may exit iteration
	     * early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwn(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'a' and 'b' (iteration order is not guaranteed)
	     */
	    var forOwn = createForOwn(baseForOwn);

	    /**
	     * This method is like `_.forOwn` except that it iterates over properties of
	     * `object` in the opposite order.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.forOwnRight(new Foo, function(value, key) {
	     *   console.log(key);
	     * });
	     * // => logs 'b' and 'a' assuming `_.forOwn` logs 'a' and 'b'
	     */
	    var forOwnRight = createForOwn(baseForOwnRight);

	    /**
	     * Creates an array of function property names from all enumerable properties,
	     * own and inherited, of `object`.
	     *
	     * @static
	     * @memberOf _
	     * @alias methods
	     * @category Object
	     * @param {Object} object The object to inspect.
	     * @returns {Array} Returns the new array of property names.
	     * @example
	     *
	     * _.functions(_);
	     * // => ['after', 'ary', 'assign', ...]
	     */
	    function functions(object) {
	      return baseFunctions(object, keysIn(object));
	    }

	    /**
	     * Gets the property value at `path` of `object`. If the resolved value is
	     * `undefined` the `defaultValue` is used in its place.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.get(object, 'a[0].b.c');
	     * // => 3
	     *
	     * _.get(object, ['a', '0', 'b', 'c']);
	     * // => 3
	     *
	     * _.get(object, 'a.b.c', 'default');
	     * // => 'default'
	     */
	    function get(object, path, defaultValue) {
	      var result = object == null ? undefined : baseGet(object, toPath(path), path + '');
	      return result === undefined ? defaultValue : result;
	    }

	    /**
	     * Checks if `path` is a direct property.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path to check.
	     * @returns {boolean} Returns `true` if `path` is a direct property, else `false`.
	     * @example
	     *
	     * var object = { 'a': { 'b': { 'c': 3 } } };
	     *
	     * _.has(object, 'a');
	     * // => true
	     *
	     * _.has(object, 'a.b.c');
	     * // => true
	     *
	     * _.has(object, ['a', 'b', 'c']);
	     * // => true
	     */
	    function has(object, path) {
	      if (object == null) {
	        return false;
	      }
	      var result = hasOwnProperty.call(object, path);
	      if (!result && !isKey(path)) {
	        path = toPath(path);
	        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	        if (object == null) {
	          return false;
	        }
	        path = last(path);
	        result = hasOwnProperty.call(object, path);
	      }
	      return result || (isLength(object.length) && isIndex(path, object.length) &&
	        (isArray(object) || isArguments(object)));
	    }

	    /**
	     * Creates an object composed of the inverted keys and values of `object`.
	     * If `object` contains duplicate values, subsequent values overwrite property
	     * assignments of previous values unless `multiValue` is `true`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to invert.
	     * @param {boolean} [multiValue] Allow multiple values per key.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Object} Returns the new inverted object.
	     * @example
	     *
	     * var object = { 'a': 1, 'b': 2, 'c': 1 };
	     *
	     * _.invert(object);
	     * // => { '1': 'c', '2': 'b' }
	     *
	     * // with `multiValue`
	     * _.invert(object, true);
	     * // => { '1': ['a', 'c'], '2': ['b'] }
	     */
	    function invert(object, multiValue, guard) {
	      if (guard && isIterateeCall(object, multiValue, guard)) {
	        multiValue = null;
	      }
	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = {};

	      while (++index < length) {
	        var key = props[index],
	            value = object[key];

	        if (multiValue) {
	          if (hasOwnProperty.call(result, value)) {
	            result[value].push(key);
	          } else {
	            result[value] = [key];
	          }
	        }
	        else {
	          result[value] = key;
	        }
	      }
	      return result;
	    }

	    /**
	     * Creates an array of the own enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects. See the
	     * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.keys)
	     * for more details.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keys(new Foo);
	     * // => ['a', 'b'] (iteration order is not guaranteed)
	     *
	     * _.keys('hi');
	     * // => ['0', '1']
	     */
	    var keys = !nativeKeys ? shimKeys : function(object) {
	      var Ctor = object == null ? null : object.constructor;
	      if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	          (typeof object != 'function' && isArrayLike(object))) {
	        return shimKeys(object);
	      }
	      return isObject(object) ? nativeKeys(object) : [];
	    };

	    /**
	     * Creates an array of the own and inherited enumerable property names of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property names.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.keysIn(new Foo);
	     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	     */
	    function keysIn(object) {
	      if (object == null) {
	        return [];
	      }
	      if (!isObject(object)) {
	        object = Object(object);
	      }
	      var length = object.length;
	      length = (length && isLength(length) &&
	        (isArray(object) || isArguments(object)) && length) || 0;

	      var Ctor = object.constructor,
	          index = -1,
	          isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	          result = Array(length),
	          skipIndexes = length > 0;

	      while (++index < length) {
	        result[index] = (index + '');
	      }
	      for (var key in object) {
	        if (!(skipIndexes && isIndex(key, length)) &&
	            !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	          result.push(key);
	        }
	      }
	      return result;
	    }

	    /**
	     * The opposite of `_.mapValues`; this method creates an object with the
	     * same values as `object` and keys generated by running each own enumerable
	     * property of `object` through `iteratee`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
	     *   return key + value;
	     * });
	     * // => { 'a1': 1, 'b2': 2 }
	     */
	    var mapKeys = createObjectMapper(true);

	    /**
	     * Creates an object with the same keys as `object` and values generated by
	     * running each own enumerable property of `object` through `iteratee`. The
	     * iteratee function is bound to `thisArg` and invoked with three arguments:
	     * (value, key, object).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to iterate over.
	     * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	     *  per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Object} Returns the new mapped object.
	     * @example
	     *
	     * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	     *   return n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     *
	     * var users = {
	     *   'fred':    { 'user': 'fred',    'age': 40 },
	     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	     * };
	     *
	     * // using the `_.property` callback shorthand
	     * _.mapValues(users, 'age');
	     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	     */
	    var mapValues = createObjectMapper();

	    /**
	     * Recursively merges own enumerable properties of the source object(s), that
	     * don't resolve to `undefined` into the destination object. Subsequent sources
	     * overwrite property assignments of previous sources. If `customizer` is
	     * provided it is invoked to produce the merged values of the destination and
	     * source properties. If `customizer` returns `undefined` merging is handled
	     * by the method instead. The `customizer` is bound to `thisArg` and invoked
	     * with five arguments: (objectValue, sourceValue, key, object, source).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The destination object.
	     * @param {...Object} [sources] The source objects.
	     * @param {Function} [customizer] The function to customize assigned values.
	     * @param {*} [thisArg] The `this` binding of `customizer`.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var users = {
	     *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	     * };
	     *
	     * var ages = {
	     *   'data': [{ 'age': 36 }, { 'age': 40 }]
	     * };
	     *
	     * _.merge(users, ages);
	     * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	     *
	     * // using a customizer callback
	     * var object = {
	     *   'fruits': ['apple'],
	     *   'vegetables': ['beet']
	     * };
	     *
	     * var other = {
	     *   'fruits': ['banana'],
	     *   'vegetables': ['carrot']
	     * };
	     *
	     * _.merge(object, other, function(a, b) {
	     *   if (_.isArray(a)) {
	     *     return a.concat(b);
	     *   }
	     * });
	     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	     */
	    var merge = createAssigner(baseMerge);

	    /**
	     * The opposite of `_.pick`; this method creates an object composed of the
	     * own and inherited enumerable properties of `object` that are not omitted.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to omit, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.omit(object, 'age');
	     * // => { 'user': 'fred' }
	     *
	     * _.omit(object, _.isNumber);
	     * // => { 'user': 'fred' }
	     */
	    var omit = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      if (typeof props[0] != 'function') {
	        var props = arrayMap(baseFlatten(props), String);
	        return pickByArray(object, baseDifference(keysIn(object), props));
	      }
	      var predicate = bindCallback(props[0], props[1], 3);
	      return pickByCallback(object, function(value, key, object) {
	        return !predicate(value, key, object);
	      });
	    });

	    /**
	     * Creates a two dimensional array of the key-value pairs for `object`,
	     * e.g. `[[key1, value1], [key2, value2]]`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the new array of key-value pairs.
	     * @example
	     *
	     * _.pairs({ 'barney': 36, 'fred': 40 });
	     * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	     */
	    function pairs(object) {
	      object = toObject(object);

	      var index = -1,
	          props = keys(object),
	          length = props.length,
	          result = Array(length);

	      while (++index < length) {
	        var key = props[index];
	        result[index] = [key, object[key]];
	      }
	      return result;
	    }

	    /**
	     * Creates an object composed of the picked `object` properties. Property
	     * names may be specified as individual arguments or as arrays of property
	     * names. If `predicate` is provided it is invoked for each property of `object`
	     * picking the properties `predicate` returns truthy for. The predicate is
	     * bound to `thisArg` and invoked with three arguments: (value, key, object).
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The source object.
	     * @param {Function|...(string|string[])} [predicate] The function invoked per
	     *  iteration or property names to pick, specified as individual property
	     *  names or arrays of property names.
	     * @param {*} [thisArg] The `this` binding of `predicate`.
	     * @returns {Object} Returns the new object.
	     * @example
	     *
	     * var object = { 'user': 'fred', 'age': 40 };
	     *
	     * _.pick(object, 'user');
	     * // => { 'user': 'fred' }
	     *
	     * _.pick(object, _.isString);
	     * // => { 'user': 'fred' }
	     */
	    var pick = restParam(function(object, props) {
	      if (object == null) {
	        return {};
	      }
	      return typeof props[0] == 'function'
	        ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	        : pickByArray(object, baseFlatten(props));
	    });

	    /**
	     * This method is like `_.get` except that if the resolved value is a function
	     * it is invoked with the `this` binding of its parent object and its result
	     * is returned.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @param {Array|string} path The path of the property to resolve.
	     * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
	     * @returns {*} Returns the resolved value.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
	     *
	     * _.result(object, 'a[0].b.c1');
	     * // => 3
	     *
	     * _.result(object, 'a[0].b.c2');
	     * // => 4
	     *
	     * _.result(object, 'a.b.c', 'default');
	     * // => 'default'
	     *
	     * _.result(object, 'a.b.c', _.constant('default'));
	     * // => 'default'
	     */
	    function result(object, path, defaultValue) {
	      var result = object == null ? undefined : object[path];
	      if (result === undefined) {
	        if (object != null && !isKey(path, object)) {
	          path = toPath(path);
	          object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	          result = object == null ? undefined : object[last(path)];
	        }
	        result = result === undefined ? defaultValue : result;
	      }
	      return isFunction(result) ? result.call(object) : result;
	    }

	    /**
	     * Sets the property value of `path` on `object`. If a portion of `path`
	     * does not exist it is created.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to augment.
	     * @param {Array|string} path The path of the property to set.
	     * @param {*} value The value to set.
	     * @returns {Object} Returns `object`.
	     * @example
	     *
	     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	     *
	     * _.set(object, 'a[0].b.c', 4);
	     * console.log(object.a[0].b.c);
	     * // => 4
	     *
	     * _.set(object, 'x[0].y.z', 5);
	     * console.log(object.x[0].y.z);
	     * // => 5
	     */
	    function set(object, path, value) {
	      if (object == null) {
	        return object;
	      }
	      var pathKey = (path + '');
	      path = (object[pathKey] != null || isKey(path, object)) ? [pathKey] : toPath(path);

	      var index = -1,
	          length = path.length,
	          lastIndex = length - 1,
	          nested = object;

	      while (nested != null && ++index < length) {
	        var key = path[index];
	        if (isObject(nested)) {
	          if (index == lastIndex) {
	            nested[key] = value;
	          } else if (nested[key] == null) {
	            nested[key] = isIndex(path[index + 1]) ? [] : {};
	          }
	        }
	        nested = nested[key];
	      }
	      return object;
	    }

	    /**
	     * An alternative to `_.reduce`; this method transforms `object` to a new
	     * `accumulator` object which is the result of running each of its own enumerable
	     * properties through `iteratee`, with each invocation potentially mutating
	     * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	     * with four arguments: (accumulator, value, key, object). Iteratee functions
	     * may exit iteration early by explicitly returning `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Array|Object} object The object to iterate over.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [accumulator] The custom accumulator value.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the accumulated value.
	     * @example
	     *
	     * _.transform([2, 3, 4], function(result, n) {
	     *   result.push(n *= n);
	     *   return n % 2 == 0;
	     * });
	     * // => [4, 9]
	     *
	     * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
	     *   result[key] = n * 3;
	     * });
	     * // => { 'a': 3, 'b': 6 }
	     */
	    function transform(object, iteratee, accumulator, thisArg) {
	      var isArr = isArray(object) || isTypedArray(object);
	      iteratee = getCallback(iteratee, thisArg, 4);

	      if (accumulator == null) {
	        if (isArr || isObject(object)) {
	          var Ctor = object.constructor;
	          if (isArr) {
	            accumulator = isArray(object) ? new Ctor : [];
	          } else {
	            accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : null);
	          }
	        } else {
	          accumulator = {};
	        }
	      }
	      (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	        return iteratee(accumulator, value, index, object);
	      });
	      return accumulator;
	    }

	    /**
	     * Creates an array of the own enumerable property values of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.values(new Foo);
	     * // => [1, 2] (iteration order is not guaranteed)
	     *
	     * _.values('hi');
	     * // => ['h', 'i']
	     */
	    function values(object) {
	      return baseValues(object, keys(object));
	    }

	    /**
	     * Creates an array of the own and inherited enumerable property values
	     * of `object`.
	     *
	     * **Note:** Non-object values are coerced to objects.
	     *
	     * @static
	     * @memberOf _
	     * @category Object
	     * @param {Object} object The object to query.
	     * @returns {Array} Returns the array of property values.
	     * @example
	     *
	     * function Foo() {
	     *   this.a = 1;
	     *   this.b = 2;
	     * }
	     *
	     * Foo.prototype.c = 3;
	     *
	     * _.valuesIn(new Foo);
	     * // => [1, 2, 3] (iteration order is not guaranteed)
	     */
	    function valuesIn(object) {
	      return baseValues(object, keysIn(object));
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Checks if `n` is between `start` and up to but not including, `end`. If
	     * `end` is not specified it is set to `start` with `start` then set to `0`.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} n The number to check.
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @returns {boolean} Returns `true` if `n` is in the range, else `false`.
	     * @example
	     *
	     * _.inRange(3, 2, 4);
	     * // => true
	     *
	     * _.inRange(4, 8);
	     * // => true
	     *
	     * _.inRange(4, 2);
	     * // => false
	     *
	     * _.inRange(2, 2);
	     * // => false
	     *
	     * _.inRange(1.2, 2);
	     * // => true
	     *
	     * _.inRange(5.2, 4);
	     * // => false
	     */
	    function inRange(value, start, end) {
	      start = +start || 0;
	      if (typeof end === 'undefined') {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      return value >= nativeMin(start, end) && value < nativeMax(start, end);
	    }

	    /**
	     * Produces a random number between `min` and `max` (inclusive). If only one
	     * argument is provided a number between `0` and the given number is returned.
	     * If `floating` is `true`, or either `min` or `max` are floats, a floating-point
	     * number is returned instead of an integer.
	     *
	     * @static
	     * @memberOf _
	     * @category Number
	     * @param {number} [min=0] The minimum possible value.
	     * @param {number} [max=1] The maximum possible value.
	     * @param {boolean} [floating] Specify returning a floating-point number.
	     * @returns {number} Returns the random number.
	     * @example
	     *
	     * _.random(0, 5);
	     * // => an integer between 0 and 5
	     *
	     * _.random(5);
	     * // => also an integer between 0 and 5
	     *
	     * _.random(5, true);
	     * // => a floating-point number between 0 and 5
	     *
	     * _.random(1.2, 5.2);
	     * // => a floating-point number between 1.2 and 5.2
	     */
	    function random(min, max, floating) {
	      if (floating && isIterateeCall(min, max, floating)) {
	        max = floating = null;
	      }
	      var noMin = min == null,
	          noMax = max == null;

	      if (floating == null) {
	        if (noMax && typeof min == 'boolean') {
	          floating = min;
	          min = 1;
	        }
	        else if (typeof max == 'boolean') {
	          floating = max;
	          noMax = true;
	        }
	      }
	      if (noMin && noMax) {
	        max = 1;
	        noMax = false;
	      }
	      min = +min || 0;
	      if (noMax) {
	        max = min;
	        min = 0;
	      } else {
	        max = +max || 0;
	      }
	      if (floating || min % 1 || max % 1) {
	        var rand = nativeRandom();
	        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand + '').length - 1)))), max);
	      }
	      return baseRandom(min, max);
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the camel cased string.
	     * @example
	     *
	     * _.camelCase('Foo Bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('--foo-bar');
	     * // => 'fooBar'
	     *
	     * _.camelCase('__foo_bar__');
	     * // => 'fooBar'
	     */
	    var camelCase = createCompounder(function(result, word, index) {
	      word = word.toLowerCase();
	      return result + (index ? (word.charAt(0).toUpperCase() + word.slice(1)) : word);
	    });

	    /**
	     * Capitalizes the first character of `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to capitalize.
	     * @returns {string} Returns the capitalized string.
	     * @example
	     *
	     * _.capitalize('fred');
	     * // => 'Fred'
	     */
	    function capitalize(string) {
	      string = baseToString(string);
	      return string && (string.charAt(0).toUpperCase() + string.slice(1));
	    }

	    /**
	     * Deburrs `string` by converting [latin-1 supplementary letters](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	     * to basic latin letters and removing [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to deburr.
	     * @returns {string} Returns the deburred string.
	     * @example
	     *
	     * _.deburr('déjà vu');
	     * // => 'deja vu'
	     */
	    function deburr(string) {
	      string = baseToString(string);
	      return string && string.replace(reLatin1, deburrLetter).replace(reComboMark, '');
	    }

	    /**
	     * Checks if `string` ends with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=string.length] The position to search from.
	     * @returns {boolean} Returns `true` if `string` ends with `target`, else `false`.
	     * @example
	     *
	     * _.endsWith('abc', 'c');
	     * // => true
	     *
	     * _.endsWith('abc', 'b');
	     * // => false
	     *
	     * _.endsWith('abc', 'b', 2);
	     * // => true
	     */
	    function endsWith(string, target, position) {
	      string = baseToString(string);
	      target = (target + '');

	      var length = string.length;
	      position = position === undefined
	        ? length
	        : nativeMin(position < 0 ? 0 : (+position || 0), length);

	      position -= target.length;
	      return position >= 0 && string.indexOf(target, position) == position;
	    }

	    /**
	     * Converts the characters "&", "<", ">", '"', "'", and "\`", in `string` to
	     * their corresponding HTML entities.
	     *
	     * **Note:** No other characters are escaped. To escape additional characters
	     * use a third-party library like [_he_](https://mths.be/he).
	     *
	     * Though the ">" character is escaped for symmetry, characters like
	     * ">" and "/" don't need escaping in HTML and have no special meaning
	     * unless they're part of a tag or unquoted attribute value.
	     * See [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
	     * (under "semi-related fun fact") for more details.
	     *
	     * Backticks are escaped because in Internet Explorer < 9, they can break out
	     * of attribute values or HTML comments. See [#59](https://html5sec.org/#59),
	     * [#102](https://html5sec.org/#102), [#108](https://html5sec.org/#108), and
	     * [#133](https://html5sec.org/#133) of the [HTML5 Security Cheatsheet](https://html5sec.org/)
	     * for more details.
	     *
	     * When working with HTML you should always [quote attribute values](http://wonko.com/post/html-escaping)
	     * to reduce XSS vectors.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escape('fred, barney, & pebbles');
	     * // => 'fred, barney, &amp; pebbles'
	     */
	    function escape(string) {
	      // Reset `lastIndex` because in IE < 9 `String#replace` does not.
	      string = baseToString(string);
	      return (string && reHasUnescapedHtml.test(string))
	        ? string.replace(reUnescapedHtml, escapeHtmlChar)
	        : string;
	    }

	    /**
	     * Escapes the `RegExp` special characters "\", "/", "^", "$", ".", "|", "?",
	     * "*", "+", "(", ")", "[", "]", "{" and "}" in `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to escape.
	     * @returns {string} Returns the escaped string.
	     * @example
	     *
	     * _.escapeRegExp('[lodash](https://lodash.com/)');
	     * // => '\[lodash\]\(https:\/\/lodash\.com\/\)'
	     */
	    function escapeRegExp(string) {
	      string = baseToString(string);
	      return (string && reHasRegExpChars.test(string))
	        ? string.replace(reRegExpChars, '\\$&')
	        : string;
	    }

	    /**
	     * Converts `string` to [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the kebab cased string.
	     * @example
	     *
	     * _.kebabCase('Foo Bar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('fooBar');
	     * // => 'foo-bar'
	     *
	     * _.kebabCase('__foo_bar__');
	     * // => 'foo-bar'
	     */
	    var kebabCase = createCompounder(function(result, word, index) {
	      return result + (index ? '-' : '') + word.toLowerCase();
	    });

	    /**
	     * Pads `string` on the left and right sides if it's shorter than `length`.
	     * Padding characters are truncated if they can't be evenly divided by `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.pad('abc', 8);
	     * // => '  abc   '
	     *
	     * _.pad('abc', 8, '_-');
	     * // => '_-abc_-_'
	     *
	     * _.pad('abc', 3);
	     * // => 'abc'
	     */
	    function pad(string, length, chars) {
	      string = baseToString(string);
	      length = +length;

	      var strLength = string.length;
	      if (strLength >= length || !nativeIsFinite(length)) {
	        return string;
	      }
	      var mid = (length - strLength) / 2,
	          leftLength = floor(mid),
	          rightLength = ceil(mid);

	      chars = createPadding('', rightLength, chars);
	      return chars.slice(0, leftLength) + string + chars;
	    }

	    /**
	     * Pads `string` on the left side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padLeft('abc', 6);
	     * // => '   abc'
	     *
	     * _.padLeft('abc', 6, '_-');
	     * // => '_-_abc'
	     *
	     * _.padLeft('abc', 3);
	     * // => 'abc'
	     */
	    var padLeft = createPadDir();

	    /**
	     * Pads `string` on the right side if it's shorter than `length`. Padding
	     * characters are truncated if they exceed `length`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to pad.
	     * @param {number} [length=0] The padding length.
	     * @param {string} [chars=' '] The string used as padding.
	     * @returns {string} Returns the padded string.
	     * @example
	     *
	     * _.padRight('abc', 6);
	     * // => 'abc   '
	     *
	     * _.padRight('abc', 6, '_-');
	     * // => 'abc_-_'
	     *
	     * _.padRight('abc', 3);
	     * // => 'abc'
	     */
	    var padRight = createPadDir(true);

	    /**
	     * Converts `string` to an integer of the specified radix. If `radix` is
	     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a hexadecimal,
	     * in which case a `radix` of `16` is used.
	     *
	     * **Note:** This method aligns with the [ES5 implementation](https://es5.github.io/#E)
	     * of `parseInt`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} string The string to convert.
	     * @param {number} [radix] The radix to interpret `value` by.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {number} Returns the converted integer.
	     * @example
	     *
	     * _.parseInt('08');
	     * // => 8
	     *
	     * _.map(['6', '08', '10'], _.parseInt);
	     * // => [6, 8, 10]
	     */
	    function parseInt(string, radix, guard) {
	      if (guard && isIterateeCall(string, radix, guard)) {
	        radix = 0;
	      }
	      return nativeParseInt(string, radix);
	    }
	    // Fallback for environments with pre-ES5 implementations.
	    if (nativeParseInt(whitespace + '08') != 8) {
	      parseInt = function(string, radix, guard) {
	        // Firefox < 21 and Opera < 15 follow ES3 for `parseInt`.
	        // Chrome fails to trim leading <BOM> whitespace characters.
	        // See https://code.google.com/p/v8/issues/detail?id=3109 for more details.
	        if (guard ? isIterateeCall(string, radix, guard) : radix == null) {
	          radix = 0;
	        } else if (radix) {
	          radix = +radix;
	        }
	        string = trim(string);
	        return nativeParseInt(string, radix || (reHasHexPrefix.test(string) ? 16 : 10));
	      };
	    }

	    /**
	     * Repeats the given string `n` times.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to repeat.
	     * @param {number} [n=0] The number of times to repeat the string.
	     * @returns {string} Returns the repeated string.
	     * @example
	     *
	     * _.repeat('*', 3);
	     * // => '***'
	     *
	     * _.repeat('abc', 2);
	     * // => 'abcabc'
	     *
	     * _.repeat('abc', 0);
	     * // => ''
	     */
	    function repeat(string, n) {
	      var result = '';
	      string = baseToString(string);
	      n = +n;
	      if (n < 1 || !string || !nativeIsFinite(n)) {
	        return result;
	      }
	      // Leverage the exponentiation by squaring algorithm for a faster repeat.
	      // See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
	      do {
	        if (n % 2) {
	          result += string;
	        }
	        n = floor(n / 2);
	        string += string;
	      } while (n);

	      return result;
	    }

	    /**
	     * Converts `string` to [snake case](https://en.wikipedia.org/wiki/Snake_case).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the snake cased string.
	     * @example
	     *
	     * _.snakeCase('Foo Bar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('fooBar');
	     * // => 'foo_bar'
	     *
	     * _.snakeCase('--foo-bar');
	     * // => 'foo_bar'
	     */
	    var snakeCase = createCompounder(function(result, word, index) {
	      return result + (index ? '_' : '') + word.toLowerCase();
	    });

	    /**
	     * Converts `string` to [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to convert.
	     * @returns {string} Returns the start cased string.
	     * @example
	     *
	     * _.startCase('--foo-bar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('fooBar');
	     * // => 'Foo Bar'
	     *
	     * _.startCase('__foo_bar__');
	     * // => 'Foo Bar'
	     */
	    var startCase = createCompounder(function(result, word, index) {
	      return result + (index ? ' ' : '') + (word.charAt(0).toUpperCase() + word.slice(1));
	    });

	    /**
	     * Checks if `string` starts with the given target string.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to search.
	     * @param {string} [target] The string to search for.
	     * @param {number} [position=0] The position to search from.
	     * @returns {boolean} Returns `true` if `string` starts with `target`, else `false`.
	     * @example
	     *
	     * _.startsWith('abc', 'a');
	     * // => true
	     *
	     * _.startsWith('abc', 'b');
	     * // => false
	     *
	     * _.startsWith('abc', 'b', 1);
	     * // => true
	     */
	    function startsWith(string, target, position) {
	      string = baseToString(string);
	      position = position == null
	        ? 0
	        : nativeMin(position < 0 ? 0 : (+position || 0), string.length);

	      return string.lastIndexOf(target, position) == position;
	    }

	    /**
	     * Creates a compiled template function that can interpolate data properties
	     * in "interpolate" delimiters, HTML-escape interpolated data properties in
	     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
	     * properties may be accessed as free variables in the template. If a setting
	     * object is provided it takes precedence over `_.templateSettings` values.
	     *
	     * **Note:** In the development build `_.template` utilizes
	     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
	     * for easier debugging.
	     *
	     * For more information on precompiling templates see
	     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
	     *
	     * For more information on Chrome extension sandboxes see
	     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The template string.
	     * @param {Object} [options] The options object.
	     * @param {RegExp} [options.escape] The HTML "escape" delimiter.
	     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
	     * @param {Object} [options.imports] An object to import into the template as free variables.
	     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
	     * @param {string} [options.sourceURL] The sourceURL of the template's compiled source.
	     * @param {string} [options.variable] The data object variable name.
	     * @param- {Object} [otherOptions] Enables the legacy `options` param signature.
	     * @returns {Function} Returns the compiled template function.
	     * @example
	     *
	     * // using the "interpolate" delimiter to create a compiled template
	     * var compiled = _.template('hello <%= user %>!');
	     * compiled({ 'user': 'fred' });
	     * // => 'hello fred!'
	     *
	     * // using the HTML "escape" delimiter to escape data property values
	     * var compiled = _.template('<b><%- value %></b>');
	     * compiled({ 'value': '<script>' });
	     * // => '<b>&lt;script&gt;</b>'
	     *
	     * // using the "evaluate" delimiter to execute JavaScript and generate HTML
	     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the internal `print` function in "evaluate" delimiters
	     * var compiled = _.template('<% print("hello " + user); %>!');
	     * compiled({ 'user': 'barney' });
	     * // => 'hello barney!'
	     *
	     * // using the ES delimiter as an alternative to the default "interpolate" delimiter
	     * var compiled = _.template('hello ${ user }!');
	     * compiled({ 'user': 'pebbles' });
	     * // => 'hello pebbles!'
	     *
	     * // using custom template delimiters
	     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
	     * var compiled = _.template('hello {{ user }}!');
	     * compiled({ 'user': 'mustache' });
	     * // => 'hello mustache!'
	     *
	     * // using backslashes to treat delimiters as plain text
	     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
	     * compiled({ 'value': 'ignored' });
	     * // => '<%- value %>'
	     *
	     * // using the `imports` option to import `jQuery` as `jq`
	     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
	     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
	     * compiled({ 'users': ['fred', 'barney'] });
	     * // => '<li>fred</li><li>barney</li>'
	     *
	     * // using the `sourceURL` option to specify a custom sourceURL for the template
	     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
	     * compiled(data);
	     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
	     *
	     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
	     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
	     * compiled.source;
	     * // => function(data) {
	     * //   var __t, __p = '';
	     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
	     * //   return __p;
	     * // }
	     *
	     * // using the `source` property to inline compiled templates for meaningful
	     * // line numbers in error messages and a stack trace
	     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
	     *   var JST = {\
	     *     "main": ' + _.template(mainText).source + '\
	     *   };\
	     * ');
	     */
	    function template(string, options, otherOptions) {
	      // Based on John Resig's `tmpl` implementation (http://ejohn.org/blog/javascript-micro-templating/)
	      // and Laura Doktorova's doT.js (https://github.com/olado/doT).
	      var settings = lodash.templateSettings;

	      if (otherOptions && isIterateeCall(string, options, otherOptions)) {
	        options = otherOptions = null;
	      }
	      string = baseToString(string);
	      options = assignWith(baseAssign({}, otherOptions || options), settings, assignOwnDefaults);

	      var imports = assignWith(baseAssign({}, options.imports), settings.imports, assignOwnDefaults),
	          importsKeys = keys(imports),
	          importsValues = baseValues(imports, importsKeys);

	      var isEscaping,
	          isEvaluating,
	          index = 0,
	          interpolate = options.interpolate || reNoMatch,
	          source = "__p += '";

	      // Compile the regexp to match each delimiter.
	      var reDelimiters = RegExp(
	        (options.escape || reNoMatch).source + '|' +
	        interpolate.source + '|' +
	        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
	        (options.evaluate || reNoMatch).source + '|$'
	      , 'g');

	      // Use a sourceURL for easier debugging.
	      var sourceURL = '//# sourceURL=' +
	        ('sourceURL' in options
	          ? options.sourceURL
	          : ('lodash.templateSources[' + (++templateCounter) + ']')
	        ) + '\n';

	      string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
	        interpolateValue || (interpolateValue = esTemplateValue);

	        // Escape characters that can't be included in string literals.
	        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);

	        // Replace delimiters with snippets.
	        if (escapeValue) {
	          isEscaping = true;
	          source += "' +\n__e(" + escapeValue + ") +\n'";
	        }
	        if (evaluateValue) {
	          isEvaluating = true;
	          source += "';\n" + evaluateValue + ";\n__p += '";
	        }
	        if (interpolateValue) {
	          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
	        }
	        index = offset + match.length;

	        // The JS engine embedded in Adobe products requires returning the `match`
	        // string in order to produce the correct `offset` value.
	        return match;
	      });

	      source += "';\n";

	      // If `variable` is not specified wrap a with-statement around the generated
	      // code to add the data object to the top of the scope chain.
	      var variable = options.variable;
	      if (!variable) {
	        source = 'with (obj) {\n' + source + '\n}\n';
	      }
	      // Cleanup code by stripping empty strings.
	      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
	        .replace(reEmptyStringMiddle, '$1')
	        .replace(reEmptyStringTrailing, '$1;');

	      // Frame code as the function body.
	      source = 'function(' + (variable || 'obj') + ') {\n' +
	        (variable
	          ? ''
	          : 'obj || (obj = {});\n'
	        ) +
	        "var __t, __p = ''" +
	        (isEscaping
	           ? ', __e = _.escape'
	           : ''
	        ) +
	        (isEvaluating
	          ? ', __j = Array.prototype.join;\n' +
	            "function print() { __p += __j.call(arguments, '') }\n"
	          : ';\n'
	        ) +
	        source +
	        'return __p\n}';

	      var result = attempt(function() {
	        return Function(importsKeys, sourceURL + 'return ' + source).apply(undefined, importsValues);
	      });

	      // Provide the compiled function's source by its `toString` method or
	      // the `source` property as a convenience for inlining compiled templates.
	      result.source = source;
	      if (isError(result)) {
	        throw result;
	      }
	      return result;
	    }

	    /**
	     * Removes leading and trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trim('  abc  ');
	     * // => 'abc'
	     *
	     * _.trim('-_-abc-_-', '_-');
	     * // => 'abc'
	     *
	     * _.map(['  foo  ', '  bar  '], _.trim);
	     * // => ['foo', 'bar']
	     */
	    function trim(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string), trimmedRightIndex(string) + 1);
	      }
	      chars = (chars + '');
	      return string.slice(charsLeftIndex(string, chars), charsRightIndex(string, chars) + 1);
	    }

	    /**
	     * Removes leading whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimLeft('  abc  ');
	     * // => 'abc  '
	     *
	     * _.trimLeft('-_-abc-_-', '_-');
	     * // => 'abc-_-'
	     */
	    function trimLeft(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(trimmedLeftIndex(string));
	      }
	      return string.slice(charsLeftIndex(string, (chars + '')));
	    }

	    /**
	     * Removes trailing whitespace or specified characters from `string`.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to trim.
	     * @param {string} [chars=whitespace] The characters to trim.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the trimmed string.
	     * @example
	     *
	     * _.trimRight('  abc  ');
	     * // => '  abc'
	     *
	     * _.trimRight('-_-abc-_-', '_-');
	     * // => '-_-abc'
	     */
	    function trimRight(string, chars, guard) {
	      var value = string;
	      string = baseToString(string);
	      if (!string) {
	        return string;
	      }
	      if (guard ? isIterateeCall(value, chars, guard) : chars == null) {
	        return string.slice(0, trimmedRightIndex(string) + 1);
	      }
	      return string.slice(0, charsRightIndex(string, (chars + '')) + 1);
	    }

	    /**
	     * Truncates `string` if it's longer than the given maximum string length.
	     * The last characters of the truncated string are replaced with the omission
	     * string which defaults to "...".
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to truncate.
	     * @param {Object|number} [options] The options object or maximum string length.
	     * @param {number} [options.length=30] The maximum string length.
	     * @param {string} [options.omission='...'] The string to indicate text is omitted.
	     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {string} Returns the truncated string.
	     * @example
	     *
	     * _.trunc('hi-diddly-ho there, neighborino');
	     * // => 'hi-diddly-ho there, neighbo...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', 24);
	     * // => 'hi-diddly-ho there, n...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': ' '
	     * });
	     * // => 'hi-diddly-ho there,...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'length': 24,
	     *   'separator': /,? +/
	     * });
	     * // => 'hi-diddly-ho there...'
	     *
	     * _.trunc('hi-diddly-ho there, neighborino', {
	     *   'omission': ' [...]'
	     * });
	     * // => 'hi-diddly-ho there, neig [...]'
	     */
	    function trunc(string, options, guard) {
	      if (guard && isIterateeCall(string, options, guard)) {
	        options = null;
	      }
	      var length = DEFAULT_TRUNC_LENGTH,
	          omission = DEFAULT_TRUNC_OMISSION;

	      if (options != null) {
	        if (isObject(options)) {
	          var separator = 'separator' in options ? options.separator : separator;
	          length = 'length' in options ? (+options.length || 0) : length;
	          omission = 'omission' in options ? baseToString(options.omission) : omission;
	        } else {
	          length = +options || 0;
	        }
	      }
	      string = baseToString(string);
	      if (length >= string.length) {
	        return string;
	      }
	      var end = length - omission.length;
	      if (end < 1) {
	        return omission;
	      }
	      var result = string.slice(0, end);
	      if (separator == null) {
	        return result + omission;
	      }
	      if (isRegExp(separator)) {
	        if (string.slice(end).search(separator)) {
	          var match,
	              newEnd,
	              substring = string.slice(0, end);

	          if (!separator.global) {
	            separator = RegExp(separator.source, (reFlags.exec(separator) || '') + 'g');
	          }
	          separator.lastIndex = 0;
	          while ((match = separator.exec(substring))) {
	            newEnd = match.index;
	          }
	          result = result.slice(0, newEnd == null ? end : newEnd);
	        }
	      } else if (string.indexOf(separator, end) != end) {
	        var index = result.lastIndexOf(separator);
	        if (index > -1) {
	          result = result.slice(0, index);
	        }
	      }
	      return result + omission;
	    }

	    /**
	     * The inverse of `_.escape`; this method converts the HTML entities
	     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`, and `&#96;` in `string` to their
	     * corresponding characters.
	     *
	     * **Note:** No other HTML entities are unescaped. To unescape additional HTML
	     * entities use a third-party library like [_he_](https://mths.be/he).
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to unescape.
	     * @returns {string} Returns the unescaped string.
	     * @example
	     *
	     * _.unescape('fred, barney, &amp; pebbles');
	     * // => 'fred, barney, & pebbles'
	     */
	    function unescape(string) {
	      string = baseToString(string);
	      return (string && reHasEscapedHtml.test(string))
	        ? string.replace(reEscapedHtml, unescapeHtmlChar)
	        : string;
	    }

	    /**
	     * Splits `string` into an array of its words.
	     *
	     * @static
	     * @memberOf _
	     * @category String
	     * @param {string} [string=''] The string to inspect.
	     * @param {RegExp|string} [pattern] The pattern to match words.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Array} Returns the words of `string`.
	     * @example
	     *
	     * _.words('fred, barney, & pebbles');
	     * // => ['fred', 'barney', 'pebbles']
	     *
	     * _.words('fred, barney, & pebbles', /[^, ]+/g);
	     * // => ['fred', 'barney', '&', 'pebbles']
	     */
	    function words(string, pattern, guard) {
	      if (guard && isIterateeCall(string, pattern, guard)) {
	        pattern = null;
	      }
	      string = baseToString(string);
	      return string.match(pattern || reWords) || [];
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Attempts to invoke `func`, returning either the result or the caught error
	     * object. Any additional arguments are provided to `func` when it is invoked.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function} func The function to attempt.
	     * @returns {*} Returns the `func` result or error object.
	     * @example
	     *
	     * // avoid throwing errors for invalid selectors
	     * var elements = _.attempt(function(selector) {
	     *   return document.querySelectorAll(selector);
	     * }, '>_>');
	     *
	     * if (_.isError(elements)) {
	     *   elements = [];
	     * }
	     */
	    var attempt = restParam(function(func, args) {
	      try {
	        return func.apply(undefined, args);
	      } catch(e) {
	        return isError(e) ? e : new Error(e);
	      }
	    });

	    /**
	     * Creates a function that invokes `func` with the `this` binding of `thisArg`
	     * and arguments of the created function. If `func` is a property name the
	     * created callback returns the property value for a given element. If `func`
	     * is an object the created callback returns `true` for elements that contain
	     * the equivalent object properties, otherwise it returns `false`.
	     *
	     * @static
	     * @memberOf _
	     * @alias iteratee
	     * @category Utility
	     * @param {*} [func=_.identity] The value to convert to a callback.
	     * @param {*} [thisArg] The `this` binding of `func`.
	     * @param- {Object} [guard] Enables use as a callback for functions like `_.map`.
	     * @returns {Function} Returns the callback.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * // wrap to create custom callback shorthands
	     * _.callback = _.wrap(_.callback, function(callback, func, thisArg) {
	     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(func);
	     *   if (!match) {
	     *     return callback(func, thisArg);
	     *   }
	     *   return function(object) {
	     *     return match[2] == 'gt'
	     *       ? object[match[1]] > match[3]
	     *       : object[match[1]] < match[3];
	     *   };
	     * });
	     *
	     * _.filter(users, 'age__gt36');
	     * // => [{ 'user': 'fred', 'age': 40 }]
	     */
	    function callback(func, thisArg, guard) {
	      if (guard && isIterateeCall(func, thisArg, guard)) {
	        thisArg = null;
	      }
	      return isObjectLike(func)
	        ? matches(func)
	        : baseCallback(func, thisArg);
	    }

	    /**
	     * Creates a function that returns `value`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value The value to return from the new function.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     * var getter = _.constant(object);
	     *
	     * getter() === object;
	     * // => true
	     */
	    function constant(value) {
	      return function() {
	        return value;
	      };
	    }

	    /**
	     * This method returns the first argument provided to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {*} value Any value.
	     * @returns {*} Returns `value`.
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.identity(object) === object;
	     * // => true
	     */
	    function identity(value) {
	      return value;
	    }

	    /**
	     * Creates a function that performs a deep comparison between a given object
	     * and `source`, returning `true` if the given object has equivalent property
	     * values, else `false`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties. For comparing a single
	     * own or inherited property value see `_.matchesProperty`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} source The object of property values to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36, 'active': true },
	     *   { 'user': 'fred',   'age': 40, 'active': false }
	     * ];
	     *
	     * _.filter(users, _.matches({ 'age': 40, 'active': false }));
	     * // => [{ 'user': 'fred', 'age': 40, 'active': false }]
	     */
	    function matches(source) {
	      return baseMatches(baseClone(source, true));
	    }

	    /**
	     * Creates a function that compares the property value of `path` on a given
	     * object to `value`.
	     *
	     * **Note:** This method supports comparing arrays, booleans, `Date` objects,
	     * numbers, `Object` objects, regexes, and strings. Objects are compared by
	     * their own, not inherited, enumerable properties.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @param {*} srcValue The value to match.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var users = [
	     *   { 'user': 'barney' },
	     *   { 'user': 'fred' }
	     * ];
	     *
	     * _.find(users, _.matchesProperty('user', 'fred'));
	     * // => { 'user': 'fred' }
	     */
	    function matchesProperty(path, srcValue) {
	      return baseMatchesProperty(path, baseClone(srcValue, true));
	    }

	    /**
	     * Creates a function that invokes the method at `path` on a given object.
	     * Any additional arguments are provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the method to invoke.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': _.constant(2) } } },
	     *   { 'a': { 'b': { 'c': _.constant(1) } } }
	     * ];
	     *
	     * _.map(objects, _.method('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.invoke(_.sortBy(objects, _.method(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    var method = restParam(function(path, args) {
	      return function(object) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * The opposite of `_.method`; this method creates a function that invokes
	     * the method at a given path on `object`. Any additional arguments are
	     * provided to the invoked method.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @param {...*} [args] The arguments to invoke the method with.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = _.times(3, _.constant),
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.methodOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.methodOf(object));
	     * // => [2, 0]
	     */
	    var methodOf = restParam(function(object, args) {
	      return function(path) {
	        return invokePath(object, path, args);
	      };
	    });

	    /**
	     * Adds all own enumerable function properties of a source object to the
	     * destination object. If `object` is a function then methods are added to
	     * its prototype as well.
	     *
	     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
	     * avoid conflicts caused by modifying the original.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Function|Object} [object=lodash] The destination object.
	     * @param {Object} source The object of functions to add.
	     * @param {Object} [options] The options object.
	     * @param {boolean} [options.chain=true] Specify whether the functions added
	     *  are chainable.
	     * @returns {Function|Object} Returns `object`.
	     * @example
	     *
	     * function vowels(string) {
	     *   return _.filter(string, function(v) {
	     *     return /[aeiou]/i.test(v);
	     *   });
	     * }
	     *
	     * _.mixin({ 'vowels': vowels });
	     * _.vowels('fred');
	     * // => ['e']
	     *
	     * _('fred').vowels().value();
	     * // => ['e']
	     *
	     * _.mixin({ 'vowels': vowels }, { 'chain': false });
	     * _('fred').vowels();
	     * // => ['e']
	     */
	    function mixin(object, source, options) {
	      if (options == null) {
	        var isObj = isObject(source),
	            props = isObj ? keys(source) : null,
	            methodNames = (props && props.length) ? baseFunctions(source, props) : null;

	        if (!(methodNames ? methodNames.length : isObj)) {
	          methodNames = false;
	          options = source;
	          source = object;
	          object = this;
	        }
	      }
	      if (!methodNames) {
	        methodNames = baseFunctions(source, keys(source));
	      }
	      var chain = true,
	          index = -1,
	          isFunc = isFunction(object),
	          length = methodNames.length;

	      if (options === false) {
	        chain = false;
	      } else if (isObject(options) && 'chain' in options) {
	        chain = options.chain;
	      }
	      while (++index < length) {
	        var methodName = methodNames[index],
	            func = source[methodName];

	        object[methodName] = func;
	        if (isFunc) {
	          object.prototype[methodName] = (function(func) {
	            return function() {
	              var chainAll = this.__chain__;
	              if (chain || chainAll) {
	                var result = object(this.__wrapped__),
	                    actions = result.__actions__ = arrayCopy(this.__actions__);

	                actions.push({ 'func': func, 'args': arguments, 'thisArg': object });
	                result.__chain__ = chainAll;
	                return result;
	              }
	              var args = [this.value()];
	              push.apply(args, arguments);
	              return func.apply(object, args);
	            };
	          }(func));
	        }
	      }
	      return object;
	    }

	    /**
	     * Reverts the `_` variable to its previous value and returns a reference to
	     * the `lodash` function.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @returns {Function} Returns the `lodash` function.
	     * @example
	     *
	     * var lodash = _.noConflict();
	     */
	    function noConflict() {
	      context._ = oldDash;
	      return this;
	    }

	    /**
	     * A no-operation function that returns `undefined` regardless of the
	     * arguments it receives.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @example
	     *
	     * var object = { 'user': 'fred' };
	     *
	     * _.noop(object) === undefined;
	     * // => true
	     */
	    function noop() {
	      // No operation performed.
	    }

	    /**
	     * Creates a function that returns the property value at `path` on a
	     * given object.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Array|string} path The path of the property to get.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var objects = [
	     *   { 'a': { 'b': { 'c': 2 } } },
	     *   { 'a': { 'b': { 'c': 1 } } }
	     * ];
	     *
	     * _.map(objects, _.property('a.b.c'));
	     * // => [2, 1]
	     *
	     * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	     * // => [1, 2]
	     */
	    function property(path) {
	      return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	    }

	    /**
	     * The opposite of `_.property`; this method creates a function that returns
	     * the property value at a given path on `object`.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {Object} object The object to query.
	     * @returns {Function} Returns the new function.
	     * @example
	     *
	     * var array = [0, 1, 2],
	     *     object = { 'a': array, 'b': array, 'c': array };
	     *
	     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
	     * // => [2, 0]
	     *
	     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
	     * // => [2, 0]
	     */
	    function propertyOf(object) {
	      return function(path) {
	        return baseGet(object, toPath(path), path + '');
	      };
	    }

	    /**
	     * Creates an array of numbers (positive and/or negative) progressing from
	     * `start` up to, but not including, `end`. If `end` is not specified it is
	     * set to `start` with `start` then set to `0`. If `end` is less than `start`
	     * a zero-length range is created unless a negative `step` is specified.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} [start=0] The start of the range.
	     * @param {number} end The end of the range.
	     * @param {number} [step=1] The value to increment or decrement by.
	     * @returns {Array} Returns the new array of numbers.
	     * @example
	     *
	     * _.range(4);
	     * // => [0, 1, 2, 3]
	     *
	     * _.range(1, 5);
	     * // => [1, 2, 3, 4]
	     *
	     * _.range(0, 20, 5);
	     * // => [0, 5, 10, 15]
	     *
	     * _.range(0, -4, -1);
	     * // => [0, -1, -2, -3]
	     *
	     * _.range(1, 4, 0);
	     * // => [1, 1, 1]
	     *
	     * _.range(0);
	     * // => []
	     */
	    function range(start, end, step) {
	      if (step && isIterateeCall(start, end, step)) {
	        end = step = null;
	      }
	      start = +start || 0;
	      step = step == null ? 1 : (+step || 0);

	      if (end == null) {
	        end = start;
	        start = 0;
	      } else {
	        end = +end || 0;
	      }
	      // Use `Array(length)` so engines like Chakra and V8 avoid slower modes.
	      // See https://youtu.be/XAqIpGU8ZZk#t=17m25s for more details.
	      var index = -1,
	          length = nativeMax(ceil((end - start) / (step || 1)), 0),
	          result = Array(length);

	      while (++index < length) {
	        result[index] = start;
	        start += step;
	      }
	      return result;
	    }

	    /**
	     * Invokes the iteratee function `n` times, returning an array of the results
	     * of each invocation. The `iteratee` is bound to `thisArg` and invoked with
	     * one argument; (index).
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {number} n The number of times to invoke `iteratee`.
	     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {Array} Returns the array of results.
	     * @example
	     *
	     * var diceRolls = _.times(3, _.partial(_.random, 1, 6, false));
	     * // => [3, 6, 4]
	     *
	     * _.times(3, function(n) {
	     *   mage.castSpell(n);
	     * });
	     * // => invokes `mage.castSpell(n)` three times with `n` of `0`, `1`, and `2`
	     *
	     * _.times(3, function(n) {
	     *   this.cast(n);
	     * }, mage);
	     * // => also invokes `mage.castSpell(n)` three times
	     */
	    function times(n, iteratee, thisArg) {
	      n = floor(n);

	      // Exit early to avoid a JSC JIT bug in Safari 8
	      // where `Array(0)` is treated as `Array(1)`.
	      if (n < 1 || !nativeIsFinite(n)) {
	        return [];
	      }
	      var index = -1,
	          result = Array(nativeMin(n, MAX_ARRAY_LENGTH));

	      iteratee = bindCallback(iteratee, thisArg, 1);
	      while (++index < n) {
	        if (index < MAX_ARRAY_LENGTH) {
	          result[index] = iteratee(index);
	        } else {
	          iteratee(index);
	        }
	      }
	      return result;
	    }

	    /**
	     * Generates a unique ID. If `prefix` is provided the ID is appended to it.
	     *
	     * @static
	     * @memberOf _
	     * @category Utility
	     * @param {string} [prefix] The value to prefix the ID with.
	     * @returns {string} Returns the unique ID.
	     * @example
	     *
	     * _.uniqueId('contact_');
	     * // => 'contact_104'
	     *
	     * _.uniqueId();
	     * // => '105'
	     */
	    function uniqueId(prefix) {
	      var id = ++idCounter;
	      return baseToString(prefix) + id;
	    }

	    /*------------------------------------------------------------------------*/

	    /**
	     * Adds two numbers.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {number} augend The first number to add.
	     * @param {number} addend The second number to add.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.add(6, 4);
	     * // => 10
	     */
	    function add(augend, addend) {
	      return (+augend || 0) + (+addend || 0);
	    }

	    /**
	     * Gets the maximum value of `collection`. If `collection` is empty or falsey
	     * `-Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the maximum value.
	     * @example
	     *
	     * _.max([4, 2, 8, 6]);
	     * // => 8
	     *
	     * _.max([]);
	     * // => -Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.max(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'fred', 'age': 40 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.max(users, 'age');
	     * // => { 'user': 'fred', 'age': 40 }
	     */
	    var max = createExtremum(gt, NEGATIVE_INFINITY);

	    /**
	     * Gets the minimum value of `collection`. If `collection` is empty or falsey
	     * `Infinity` is returned. If an iteratee function is provided it is invoked
	     * for each value in `collection` to generate the criterion by which the value
	     * is ranked. The `iteratee` is bound to `thisArg` and invoked with three
	     * arguments: (value, index, collection).
	     *
	     * If a property name is provided for `iteratee` the created `_.property`
	     * style callback returns the property value of the given element.
	     *
	     * If a value is also provided for `thisArg` the created `_.matchesProperty`
	     * style callback returns `true` for elements that have a matching property
	     * value, else `false`.
	     *
	     * If an object is provided for `iteratee` the created `_.matches` style
	     * callback returns `true` for elements that have the properties of the given
	     * object, else `false`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {*} Returns the minimum value.
	     * @example
	     *
	     * _.min([4, 2, 8, 6]);
	     * // => 2
	     *
	     * _.min([]);
	     * // => Infinity
	     *
	     * var users = [
	     *   { 'user': 'barney', 'age': 36 },
	     *   { 'user': 'fred',   'age': 40 }
	     * ];
	     *
	     * _.min(users, function(chr) {
	     *   return chr.age;
	     * });
	     * // => { 'user': 'barney', 'age': 36 }
	     *
	     * // using the `_.property` callback shorthand
	     * _.min(users, 'age');
	     * // => { 'user': 'barney', 'age': 36 }
	     */
	    var min = createExtremum(lt, POSITIVE_INFINITY);

	    /**
	     * Gets the sum of the values in `collection`.
	     *
	     * @static
	     * @memberOf _
	     * @category Math
	     * @param {Array|Object|string} collection The collection to iterate over.
	     * @param {Function|Object|string} [iteratee] The function invoked per iteration.
	     * @param {*} [thisArg] The `this` binding of `iteratee`.
	     * @returns {number} Returns the sum.
	     * @example
	     *
	     * _.sum([4, 6]);
	     * // => 10
	     *
	     * _.sum({ 'a': 4, 'b': 6 });
	     * // => 10
	     *
	     * var objects = [
	     *   { 'n': 4 },
	     *   { 'n': 6 }
	     * ];
	     *
	     * _.sum(objects, function(object) {
	     *   return object.n;
	     * });
	     * // => 10
	     *
	     * // using the `_.property` callback shorthand
	     * _.sum(objects, 'n');
	     * // => 10
	     */
	    function sum(collection, iteratee, thisArg) {
	      if (thisArg && isIterateeCall(collection, iteratee, thisArg)) {
	        iteratee = null;
	      }
	      var callback = getCallback(),
	          noIteratee = iteratee == null;

	      if (!(noIteratee && callback === baseCallback)) {
	        noIteratee = false;
	        iteratee = callback(iteratee, thisArg, 3);
	      }
	      return noIteratee
	        ? arraySum(isArray(collection) ? collection : toIterable(collection))
	        : baseSum(collection, iteratee);
	    }

	    /*------------------------------------------------------------------------*/

	    // Ensure wrappers are instances of `baseLodash`.
	    lodash.prototype = baseLodash.prototype;

	    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
	    LodashWrapper.prototype.constructor = LodashWrapper;

	    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
	    LazyWrapper.prototype.constructor = LazyWrapper;

	    // Add functions to the `Map` cache.
	    MapCache.prototype['delete'] = mapDelete;
	    MapCache.prototype.get = mapGet;
	    MapCache.prototype.has = mapHas;
	    MapCache.prototype.set = mapSet;

	    // Add functions to the `Set` cache.
	    SetCache.prototype.push = cachePush;

	    // Assign cache to `_.memoize`.
	    memoize.Cache = MapCache;

	    // Add functions that return wrapped values when chaining.
	    lodash.after = after;
	    lodash.ary = ary;
	    lodash.assign = assign;
	    lodash.at = at;
	    lodash.before = before;
	    lodash.bind = bind;
	    lodash.bindAll = bindAll;
	    lodash.bindKey = bindKey;
	    lodash.callback = callback;
	    lodash.chain = chain;
	    lodash.chunk = chunk;
	    lodash.compact = compact;
	    lodash.constant = constant;
	    lodash.countBy = countBy;
	    lodash.create = create;
	    lodash.curry = curry;
	    lodash.curryRight = curryRight;
	    lodash.debounce = debounce;
	    lodash.defaults = defaults;
	    lodash.defer = defer;
	    lodash.delay = delay;
	    lodash.difference = difference;
	    lodash.drop = drop;
	    lodash.dropRight = dropRight;
	    lodash.dropRightWhile = dropRightWhile;
	    lodash.dropWhile = dropWhile;
	    lodash.fill = fill;
	    lodash.filter = filter;
	    lodash.flatten = flatten;
	    lodash.flattenDeep = flattenDeep;
	    lodash.flow = flow;
	    lodash.flowRight = flowRight;
	    lodash.forEach = forEach;
	    lodash.forEachRight = forEachRight;
	    lodash.forIn = forIn;
	    lodash.forInRight = forInRight;
	    lodash.forOwn = forOwn;
	    lodash.forOwnRight = forOwnRight;
	    lodash.functions = functions;
	    lodash.groupBy = groupBy;
	    lodash.indexBy = indexBy;
	    lodash.initial = initial;
	    lodash.intersection = intersection;
	    lodash.invert = invert;
	    lodash.invoke = invoke;
	    lodash.keys = keys;
	    lodash.keysIn = keysIn;
	    lodash.map = map;
	    lodash.mapKeys = mapKeys;
	    lodash.mapValues = mapValues;
	    lodash.matches = matches;
	    lodash.matchesProperty = matchesProperty;
	    lodash.memoize = memoize;
	    lodash.merge = merge;
	    lodash.method = method;
	    lodash.methodOf = methodOf;
	    lodash.mixin = mixin;
	    lodash.negate = negate;
	    lodash.omit = omit;
	    lodash.once = once;
	    lodash.pairs = pairs;
	    lodash.partial = partial;
	    lodash.partialRight = partialRight;
	    lodash.partition = partition;
	    lodash.pick = pick;
	    lodash.pluck = pluck;
	    lodash.property = property;
	    lodash.propertyOf = propertyOf;
	    lodash.pull = pull;
	    lodash.pullAt = pullAt;
	    lodash.range = range;
	    lodash.rearg = rearg;
	    lodash.reject = reject;
	    lodash.remove = remove;
	    lodash.rest = rest;
	    lodash.restParam = restParam;
	    lodash.set = set;
	    lodash.shuffle = shuffle;
	    lodash.slice = slice;
	    lodash.sortBy = sortBy;
	    lodash.sortByAll = sortByAll;
	    lodash.sortByOrder = sortByOrder;
	    lodash.spread = spread;
	    lodash.take = take;
	    lodash.takeRight = takeRight;
	    lodash.takeRightWhile = takeRightWhile;
	    lodash.takeWhile = takeWhile;
	    lodash.tap = tap;
	    lodash.throttle = throttle;
	    lodash.thru = thru;
	    lodash.times = times;
	    lodash.toArray = toArray;
	    lodash.toPlainObject = toPlainObject;
	    lodash.transform = transform;
	    lodash.union = union;
	    lodash.uniq = uniq;
	    lodash.unzip = unzip;
	    lodash.unzipWith = unzipWith;
	    lodash.values = values;
	    lodash.valuesIn = valuesIn;
	    lodash.where = where;
	    lodash.without = without;
	    lodash.wrap = wrap;
	    lodash.xor = xor;
	    lodash.zip = zip;
	    lodash.zipObject = zipObject;
	    lodash.zipWith = zipWith;

	    // Add aliases.
	    lodash.backflow = flowRight;
	    lodash.collect = map;
	    lodash.compose = flowRight;
	    lodash.each = forEach;
	    lodash.eachRight = forEachRight;
	    lodash.extend = assign;
	    lodash.iteratee = callback;
	    lodash.methods = functions;
	    lodash.object = zipObject;
	    lodash.select = filter;
	    lodash.tail = rest;
	    lodash.unique = uniq;

	    // Add functions to `lodash.prototype`.
	    mixin(lodash, lodash);

	    /*------------------------------------------------------------------------*/

	    // Add functions that return unwrapped values when chaining.
	    lodash.add = add;
	    lodash.attempt = attempt;
	    lodash.camelCase = camelCase;
	    lodash.capitalize = capitalize;
	    lodash.clone = clone;
	    lodash.cloneDeep = cloneDeep;
	    lodash.deburr = deburr;
	    lodash.endsWith = endsWith;
	    lodash.escape = escape;
	    lodash.escapeRegExp = escapeRegExp;
	    lodash.every = every;
	    lodash.find = find;
	    lodash.findIndex = findIndex;
	    lodash.findKey = findKey;
	    lodash.findLast = findLast;
	    lodash.findLastIndex = findLastIndex;
	    lodash.findLastKey = findLastKey;
	    lodash.findWhere = findWhere;
	    lodash.first = first;
	    lodash.get = get;
	    lodash.gt = gt;
	    lodash.gte = gte;
	    lodash.has = has;
	    lodash.identity = identity;
	    lodash.includes = includes;
	    lodash.indexOf = indexOf;
	    lodash.inRange = inRange;
	    lodash.isArguments = isArguments;
	    lodash.isArray = isArray;
	    lodash.isBoolean = isBoolean;
	    lodash.isDate = isDate;
	    lodash.isElement = isElement;
	    lodash.isEmpty = isEmpty;
	    lodash.isEqual = isEqual;
	    lodash.isError = isError;
	    lodash.isFinite = isFinite;
	    lodash.isFunction = isFunction;
	    lodash.isMatch = isMatch;
	    lodash.isNaN = isNaN;
	    lodash.isNative = isNative;
	    lodash.isNull = isNull;
	    lodash.isNumber = isNumber;
	    lodash.isObject = isObject;
	    lodash.isPlainObject = isPlainObject;
	    lodash.isRegExp = isRegExp;
	    lodash.isString = isString;
	    lodash.isTypedArray = isTypedArray;
	    lodash.isUndefined = isUndefined;
	    lodash.kebabCase = kebabCase;
	    lodash.last = last;
	    lodash.lastIndexOf = lastIndexOf;
	    lodash.lt = lt;
	    lodash.lte = lte;
	    lodash.max = max;
	    lodash.min = min;
	    lodash.noConflict = noConflict;
	    lodash.noop = noop;
	    lodash.now = now;
	    lodash.pad = pad;
	    lodash.padLeft = padLeft;
	    lodash.padRight = padRight;
	    lodash.parseInt = parseInt;
	    lodash.random = random;
	    lodash.reduce = reduce;
	    lodash.reduceRight = reduceRight;
	    lodash.repeat = repeat;
	    lodash.result = result;
	    lodash.runInContext = runInContext;
	    lodash.size = size;
	    lodash.snakeCase = snakeCase;
	    lodash.some = some;
	    lodash.sortedIndex = sortedIndex;
	    lodash.sortedLastIndex = sortedLastIndex;
	    lodash.startCase = startCase;
	    lodash.startsWith = startsWith;
	    lodash.sum = sum;
	    lodash.template = template;
	    lodash.trim = trim;
	    lodash.trimLeft = trimLeft;
	    lodash.trimRight = trimRight;
	    lodash.trunc = trunc;
	    lodash.unescape = unescape;
	    lodash.uniqueId = uniqueId;
	    lodash.words = words;

	    // Add aliases.
	    lodash.all = every;
	    lodash.any = some;
	    lodash.contains = includes;
	    lodash.eq = isEqual;
	    lodash.detect = find;
	    lodash.foldl = reduce;
	    lodash.foldr = reduceRight;
	    lodash.head = first;
	    lodash.include = includes;
	    lodash.inject = reduce;

	    mixin(lodash, (function() {
	      var source = {};
	      baseForOwn(lodash, function(func, methodName) {
	        if (!lodash.prototype[methodName]) {
	          source[methodName] = func;
	        }
	      });
	      return source;
	    }()), false);

	    /*------------------------------------------------------------------------*/

	    // Add functions capable of returning wrapped and unwrapped values when chaining.
	    lodash.sample = sample;

	    lodash.prototype.sample = function(n) {
	      if (!this.__chain__ && n == null) {
	        return sample(this.value());
	      }
	      return this.thru(function(value) {
	        return sample(value, n);
	      });
	    };

	    /*------------------------------------------------------------------------*/

	    /**
	     * The semantic version number.
	     *
	     * @static
	     * @memberOf _
	     * @type string
	     */
	    lodash.VERSION = VERSION;

	    // Assign default placeholders.
	    arrayEach(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function(methodName) {
	      lodash[methodName].placeholder = lodash;
	    });

	    // Add `LazyWrapper` methods that accept an `iteratee` value.
	    arrayEach(['dropWhile', 'filter', 'map', 'takeWhile'], function(methodName, type) {
	      var isFilter = type != LAZY_MAP_FLAG,
	          isDropWhile = type == LAZY_DROP_WHILE_FLAG;

	      LazyWrapper.prototype[methodName] = function(iteratee, thisArg) {
	        var filtered = this.__filtered__,
	            result = (filtered && isDropWhile) ? new LazyWrapper(this) : this.clone(),
	            iteratees = result.__iteratees__ || (result.__iteratees__ = []);

	        iteratees.push({
	          'done': false,
	          'count': 0,
	          'index': 0,
	          'iteratee': getCallback(iteratee, thisArg, 1),
	          'limit': -1,
	          'type': type
	        });

	        result.__filtered__ = filtered || isFilter;
	        return result;
	      };
	    });

	    // Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
	    arrayEach(['drop', 'take'], function(methodName, index) {
	      var whileName = methodName + 'While';

	      LazyWrapper.prototype[methodName] = function(n) {
	        var filtered = this.__filtered__,
	            result = (filtered && !index) ? this.dropWhile() : this.clone();

	        n = n == null ? 1 : nativeMax(floor(n) || 0, 0);
	        if (filtered) {
	          if (index) {
	            result.__takeCount__ = nativeMin(result.__takeCount__, n);
	          } else {
	            last(result.__iteratees__).limit = n;
	          }
	        } else {
	          var views = result.__views__ || (result.__views__ = []);
	          views.push({ 'size': n, 'type': methodName + (result.__dir__ < 0 ? 'Right' : '') });
	        }
	        return result;
	      };

	      LazyWrapper.prototype[methodName + 'Right'] = function(n) {
	        return this.reverse()[methodName](n).reverse();
	      };

	      LazyWrapper.prototype[methodName + 'RightWhile'] = function(predicate, thisArg) {
	        return this.reverse()[whileName](predicate, thisArg).reverse();
	      };
	    });

	    // Add `LazyWrapper` methods for `_.first` and `_.last`.
	    arrayEach(['first', 'last'], function(methodName, index) {
	      var takeName = 'take' + (index ? 'Right' : '');

	      LazyWrapper.prototype[methodName] = function() {
	        return this[takeName](1).value()[0];
	      };
	    });

	    // Add `LazyWrapper` methods for `_.initial` and `_.rest`.
	    arrayEach(['initial', 'rest'], function(methodName, index) {
	      var dropName = 'drop' + (index ? '' : 'Right');

	      LazyWrapper.prototype[methodName] = function() {
	        return this[dropName](1);
	      };
	    });

	    // Add `LazyWrapper` methods for `_.pluck` and `_.where`.
	    arrayEach(['pluck', 'where'], function(methodName, index) {
	      var operationName = index ? 'filter' : 'map',
	          createCallback = index ? baseMatches : property;

	      LazyWrapper.prototype[methodName] = function(value) {
	        return this[operationName](createCallback(value));
	      };
	    });

	    LazyWrapper.prototype.compact = function() {
	      return this.filter(identity);
	    };

	    LazyWrapper.prototype.reject = function(predicate, thisArg) {
	      predicate = getCallback(predicate, thisArg, 1);
	      return this.filter(function(value) {
	        return !predicate(value);
	      });
	    };

	    LazyWrapper.prototype.slice = function(start, end) {
	      start = start == null ? 0 : (+start || 0);

	      var result = this;
	      if (start < 0) {
	        result = this.takeRight(-start);
	      } else if (start) {
	        result = this.drop(start);
	      }
	      if (end !== undefined) {
	        end = (+end || 0);
	        result = end < 0 ? result.dropRight(-end) : result.take(end - start);
	      }
	      return result;
	    };

	    LazyWrapper.prototype.toArray = function() {
	      return this.drop(0);
	    };

	    // Add `LazyWrapper` methods to `lodash.prototype`.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (!lodashFunc) {
	        return;
	      }
	      var checkIteratee = /^(?:filter|map|reject)|While$/.test(methodName),
	          retUnwrapped = /^(?:first|last)$/.test(methodName);

	      lodash.prototype[methodName] = function() {
	        var args = arguments,
	            chainAll = this.__chain__,
	            value = this.__wrapped__,
	            isHybrid = !!this.__actions__.length,
	            isLazy = value instanceof LazyWrapper,
	            iteratee = args[0],
	            useLazy = isLazy || isArray(value);

	        if (useLazy && checkIteratee && typeof iteratee == 'function' && iteratee.length != 1) {
	          // avoid lazy use if the iteratee has a "length" value other than `1`
	          isLazy = useLazy = false;
	        }
	        var onlyLazy = isLazy && !isHybrid;
	        if (retUnwrapped && !chainAll) {
	          return onlyLazy
	            ? func.call(value)
	            : lodashFunc.call(lodash, this.value());
	        }
	        var interceptor = function(value) {
	          var otherArgs = [value];
	          push.apply(otherArgs, args);
	          return lodashFunc.apply(lodash, otherArgs);
	        };
	        if (useLazy) {
	          var wrapper = onlyLazy ? value : new LazyWrapper(this),
	              result = func.apply(wrapper, args);

	          if (!retUnwrapped && (isHybrid || result.__actions__)) {
	            var actions = result.__actions__ || (result.__actions__ = []);
	            actions.push({ 'func': thru, 'args': [interceptor], 'thisArg': lodash });
	          }
	          return new LodashWrapper(result, chainAll);
	        }
	        return this.thru(interceptor);
	      };
	    });

	    // Add `Array` and `String` methods to `lodash.prototype`.
	    arrayEach(['concat', 'join', 'pop', 'push', 'replace', 'shift', 'sort', 'splice', 'split', 'unshift'], function(methodName) {
	      var func = (/^(?:replace|split)$/.test(methodName) ? stringProto : arrayProto)[methodName],
	          chainName = /^(?:push|sort|unshift)$/.test(methodName) ? 'tap' : 'thru',
	          retUnwrapped = /^(?:join|pop|replace|shift)$/.test(methodName);

	      lodash.prototype[methodName] = function() {
	        var args = arguments;
	        if (retUnwrapped && !this.__chain__) {
	          return func.apply(this.value(), args);
	        }
	        return this[chainName](function(value) {
	          return func.apply(value, args);
	        });
	      };
	    });

	    // Map minified function names to their real names.
	    baseForOwn(LazyWrapper.prototype, function(func, methodName) {
	      var lodashFunc = lodash[methodName];
	      if (lodashFunc) {
	        var key = lodashFunc.name,
	            names = realNames[key] || (realNames[key] = []);

	        names.push({ 'name': methodName, 'func': lodashFunc });
	      }
	    });

	    realNames[createHybridWrapper(null, BIND_KEY_FLAG).name] = [{ 'name': 'wrapper', 'func': null }];

	    // Add functions to the lazy wrapper.
	    LazyWrapper.prototype.clone = lazyClone;
	    LazyWrapper.prototype.reverse = lazyReverse;
	    LazyWrapper.prototype.value = lazyValue;

	    // Add chaining functions to the `lodash` wrapper.
	    lodash.prototype.chain = wrapperChain;
	    lodash.prototype.commit = wrapperCommit;
	    lodash.prototype.plant = wrapperPlant;
	    lodash.prototype.reverse = wrapperReverse;
	    lodash.prototype.toString = wrapperToString;
	    lodash.prototype.run = lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;

	    // Add function aliases to the `lodash` wrapper.
	    lodash.prototype.collect = lodash.prototype.map;
	    lodash.prototype.head = lodash.prototype.first;
	    lodash.prototype.select = lodash.prototype.filter;
	    lodash.prototype.tail = lodash.prototype.rest;

	    return lodash;
	  }

	  /*--------------------------------------------------------------------------*/

	  // Export lodash.
	  var _ = runInContext();

	  // Some AMD build optimizers like r.js check for condition patterns like the following:
	  if (true) {
	    // Expose lodash to the global object when an AMD loader is present to avoid
	    // errors in cases where lodash is loaded by a script tag and not intended
	    // as an AMD module. See http://requirejs.org/docs/errors.html#mismatch for
	    // more details.
	    root._ = _;

	    // Define as an anonymous module so, through path mapping, it can be
	    // referenced as the "underscore" module.
	    !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return _;
	    }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  // Check for `exports` after `define` in case a build optimizer adds an `exports` object.
	  else if (freeExports && freeModule) {
	    // Export for Node.js or RingoJS.
	    if (moduleExports) {
	      (freeModule.exports = _)._ = _;
	    }
	    // Export for Rhino with CommonJS support.
	    else {
	      freeExports._ = _;
	    }
	  }
	  else {
	    // Export for a browser or Rhino.
	    root._ = _;
	  }
	}.call(this));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function install(Vue) {

	    window.$bixConfig = _.extend({
	        csrf: '',
	        url: '',
	        prefix: 'bpd',
	        saveStateDebounceTime: 750
	    }, window.$bixConfig);

	    /**
	     * Libraries/plugins
	     */

	    Vue.use(__webpack_require__(6));//must point to /src/index.js to work!
	    Vue.use(__webpack_require__(12));
	    Vue.use(__webpack_require__(13));
	    //require('vue-validator');
	    //require('./lib/globalize');
	    __webpack_require__(15)(Vue);
	    __webpack_require__(16)(Vue);


	    /**
	     * Components
	     */

	    //Vue.component('v-pagination', require('./components/pagination'));
	    Vue.component('colorpicker', __webpack_require__(17));

	    /**
	     * Directives
	     */

	    Vue.directive('confirm', __webpack_require__(18));

	    /**
	     * Resource
	     */

	    Vue.url.options.root = $bixConfig.url;
	    Vue.http.options.emulateHTTP = true;
	    Vue.http.options.headers = {'X-XSRF-TOKEN': $bixConfig.csrf};

	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Install plugin.
	 */

	function install (Vue) {
	    Vue.url = __webpack_require__(7)(Vue);
	    Vue.http = __webpack_require__(9)(Vue);
	    Vue.resource = __webpack_require__(11)(Vue);
	}

	if (window.Vue) {
	    Vue.use(install);
	}

	module.exports = install;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (Vue) {

	    var _ = __webpack_require__(8)(Vue);

	    /**
	     * Url provides URL templating.
	     *
	     * @param {String} url
	     * @param {Object} params
	     */

	    function Url (url, params) {

	        var urlParams = {}, queryParams = {}, options = url, query;

	        if (!_.isPlainObject(options)) {
	            options = {url: url, params: params};
	        }

	        options = _.extend({}, Url.options, _.options('url', this, options));

	        url = options.url.replace(/:([a-z]\w*)/gi, function (match, name) {

	            if (options.params[name]) {
	                urlParams[name] = true;
	                return encodeUriSegment(options.params[name]);
	            }

	            return '';
	        });

	        if (options.root !== false && !url.match(/^(https?:)?\//)) {
	            url = options.root + '/' + url;
	        }

	        url = url.replace(/([^:])[\/]{2,}/g, '$1/');
	        url = url.replace(/(\w+)\/+$/, '$1');

	        _.each(options.params, function (value, key) {
	            if (!urlParams[key]) {
	                queryParams[key] = value;
	            }
	        });

	        query = Url.params(queryParams);

	        if (query) {
	            url += (url.indexOf('?') == -1 ? '?' : '&') + query;
	        }

	        return url;
	    }

	    /**
	     * Url options.
	     */

	    Url.options = {
	        url: '',
	        root: false,
	        params: {}
	    };

	    /**
	     * Encodes a Url parameter string.
	     *
	     * @param {Object} obj
	     */

	    Url.params = function (obj) {

	        var params = [];

	        params.add = function (key, value) {

	            if (_.isFunction (value)) {
	                value = value();
	            }

	            if (value === null) {
	                value = '';
	            }

	            this.push(encodeUriSegment(key) + '=' + encodeUriSegment(value));
	        };

	        serialize(params, obj);

	        return params.join('&');
	    };

	    /**
	     * Parse a URL and return its components.
	     *
	     * @param {String} url
	     */

	    Url.parse = function (url) {

	        var pattern = new RegExp("^(?:([^:/?#]+):)?(?://([^/?#]*))?([^?#]*)(?:\\?([^#]*))?(?:#(.*))?"),
	            matches = url.match(pattern);

	        return {
	            url: url,
	            scheme: matches[1] || '',
	            host: matches[2] || '',
	            path: matches[3] || '',
	            query: matches[4] || '',
	            fragment: matches[5] || ''
	        };
	    };

	    function serialize (params, obj, scope) {

	        var array = _.isArray(obj), plain = _.isPlainObject(obj), hash;

	        _.each(obj, function (value, key) {

	            hash = _.isObject(value) || _.isArray(value);

	            if (scope) {
	                key = scope + '[' + (plain || hash ? key : '') + ']';
	            }

	            if (!scope && array) {
	                params.add(value.name, value.value);
	            } else if (hash) {
	                serialize(params, value, key);
	            } else {
	                params.add(key, value);
	            }
	        });
	    }

	    function encodeUriSegment (value) {

	        return encodeUriQuery(value, true).
	            replace(/%26/gi, '&').
	            replace(/%3D/gi, '=').
	            replace(/%2B/gi, '+');
	    }

	    function encodeUriQuery (value, spaces) {

	        return encodeURIComponent(value).
	            replace(/%40/gi, '@').
	            replace(/%3A/gi, ':').
	            replace(/%24/g, '$').
	            replace(/%2C/gi, ',').
	            replace(/%20/g, (spaces ? '%20' : '+'));
	    }

	    Object.defineProperty(Vue.prototype, '$url', {

	        get: function () {
	            return _.extend(Url.bind(this), Url);
	        }

	    });

	    return Url;
	};


/***/ },
/* 8 */
/***/ function(module, exports) {

	/**
	 * Utility functions.
	 */

	module.exports = function (Vue) {

	    var _ = Vue.util.extend({}, Vue.util);

	    _.options = function (key, obj, options) {

	        var opts = obj.$options || {};

	        return _.extend({},
	            opts[key],
	            options
	        );
	    };

	    _.each = function (obj, iterator) {

	        var i, key;

	        if (typeof obj.length == 'number') {
	            for (i = 0; i < obj.length; i++) {
	                iterator.call(obj[i], obj[i], i);
	            }
	        } else if (_.isObject(obj)) {
	            for (key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    iterator.call(obj[key], obj[key], key);
	                }
	            }
	        }

	        return obj;
	    };

	    _.extend = function (target) {

	        var array = [], args = array.slice.call(arguments, 1), deep;

	        if (typeof target == 'boolean') {
	            deep = target;
	            target = args.shift();
	        }

	        args.forEach(function (arg) {
	            extend(target, arg, deep);
	        });

	        return target;
	    };

	    function extend (target, source, deep) {
	        for (var key in source) {
	            if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
	                if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
	                    target[key] = {};
	                }
	                if (_.isArray(source[key]) && !_.isArray(target[key])) {
	                    target[key] = [];
	                }
	                extend(target[key], source[key], deep);
	            } else if (source[key] !== undefined) {
	                target[key] = source[key];
	            }
	        }
	    }

	    _.isFunction = function (obj) {
	        return obj && typeof obj === 'function';
	    };

	    return _;
	};


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (Vue) {

	    var _ = __webpack_require__(8)(Vue);
	    var Promise = __webpack_require__(10);
	    var jsonType = { 'Content-Type': 'application/json;charset=utf-8' };

	    /**
	     * Http provides a service for sending XMLHttpRequests.
	     */

	    function Http (url, options) {

	        var self = this, headers, promise;

	        options = options || {};

	        if (_.isPlainObject(url)) {
	            options = url;
	            url = '';
	        }

	        headers = _.extend({},
	            Http.headers.common,
	            Http.headers[options.method.toLowerCase()]
	        );

	        options = _.extend(true, {url: url, headers: headers},
	            Http.options, _.options('http', this, options)
	        );

	        promise = (options.method.toLowerCase() == 'jsonp' ? jsonp : xhr).call(this, this.$url || Vue.url, options);

	        _.extend(promise, {

	            success: function (onSuccess) {

	                this.then(function (request) {
	                    onSuccess.apply(self, parseReq(request));
	                }, function () {});

	                return this;
	            },

	            error: function (onError) {

	                this.catch(function (request) {
	                    onError.apply(self, parseReq(request));
	                });

	                return this;
	            },

	            always: function (onAlways) {

	                var cb = function (request) {
	                    onAlways.apply(self, parseReq(request));
	                };

	                this.then(cb, cb);

	                return this;
	            }

	        });

	        if (options.success) {
	            promise.success(options.success);
	        }

	        if (options.error) {
	            promise.error(options.error);
	        }

	        return promise;
	    }

	    function xhr(url, options) {

	        var request = new XMLHttpRequest();

	        if (_.isFunction(options.beforeSend)) {
	            options.beforeSend(request, options);
	        }

	        if (options.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(options.method)) {
	            options.headers['X-HTTP-Method-Override'] = options.method;
	            options.method = 'POST';
	        }

	        if (options.emulateJSON && _.isPlainObject(options.data)) {
	            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
	            options.data = url.params(options.data);
	        }

	        if (_.isObject(options.data) && /FormData/i.test(options.data.toString())) {
	            delete options.headers['Content-Type'];
	        }

	        if (_.isPlainObject(options.data)) {
	            options.data = JSON.stringify(options.data);
	        }

	        var promise = new Promise(function (resolve, reject) {

	            request.open(options.method, url(options), true);

	            _.each(options.headers, function (value, header) {
	                request.setRequestHeader(header, value);
	            });

	            request.onreadystatechange = function () {

	                if (this.readyState === 4) {

	                    if (this.status >= 200 && this.status < 300) {
	                        resolve(this);
	                    } else {
	                        reject(this);
	                    }
	                }
	            };

	            request.send(options.data);
	        });

	        _.extend(promise, {

	            abort: function () {
	                request.abort();
	            }

	        });

	        return promise;
	    }

	    function jsonp(url, options) {

	        var callback = '_jsonp' + Math.random().toString(36).substr(2), script, result;

	        _.extend(options.params, options.data);
	        options.params[options.jsonp] = callback;

	        if (_.isFunction(options.beforeSend)) {
	            options.beforeSend({}, options);
	        }

	        var promise = new Promise(function (resolve, reject) {

	            script = document.createElement('script');
	            script.src = url(options.url, options.params);
	            script.type = 'text/javascript';
	            script.async = true;

	            window[callback] = function (data) {
	                result = data;
	            };

	            var handler = function (event) {

	                delete window[callback];
	                document.body.removeChild(script);

	                if (event.type === 'load' && !result) {
	                    event.type = 'error';
	                }

	                var text = result ? result : event.type, status = event.type === 'error' ? 404 : 200;

	                (status === 200 ? resolve : reject)({ responseText: text, status: status });
	            };

	            script.onload = handler;
	            script.onerror = handler;

	            document.body.appendChild(script);
	        });

	        return promise;
	    }

	    function parseReq(request) {

	        var result;

	        try {
	            result = JSON.parse(request.responseText);
	        } catch (e) {
	            result = request.responseText;
	        }

	        return [result, request.status, request];
	    }

	    Http.options = {
	        method: 'GET',
	        params: {},
	        data: '',
	        jsonp: 'callback',
	        beforeSend: null,
	        emulateHTTP: false,
	        emulateJSON: false,
	    };

	    Http.headers = {
	        put: jsonType,
	        post: jsonType,
	        patch: jsonType,
	        delete: jsonType,
	        common: {
	            'Accept': 'application/json, text/plain, */*',
	            'X-Requested-With': 'XMLHttpRequest'
	        }
	    };

	    ['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {

	        Http[method] = function (url, data, success, options) {

	            if (_.isFunction(data)) {
	                options = success;
	                success = data;
	                data = undefined;
	            }

	            return this(url, _.extend({method: method, data: data, success: success}, options));
	        };
	    });

	    Object.defineProperty(Vue.prototype, '$http', {

	        get: function () {
	            return _.extend(Http.bind(this), Http);
	        }

	    });

	    return Http;
	};


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Promise polyfill (https://gist.github.com/briancavalier/814313)
	 */

	function Promise (executor) {
	    executor(this.resolve.bind(this), this.reject.bind(this));
	    this._thens = [];
	}

	Promise.prototype = {

	    then: function (onResolve, onReject, onProgress) {
	        this._thens.push({resolve: onResolve, reject: onReject, progress: onProgress});
	    },

	    'catch': function (onReject) {
	        this._thens.push({reject: onReject});
	    },

	    resolve: function (value) {
	        this._complete('resolve', value);
	    },

	    reject: function (reason) {
	        this._complete('reject', reason);
	    },

	    progress: function (status) {

	        var i = 0, aThen;

	        while (aThen = this._thens[i++]) {
	            aThen.progress && aThen.progress(status);
	        }
	    },

	    _complete: function (which, arg) {

	        this.then = which === 'resolve' ?
	            function (resolve, reject) { resolve && resolve(arg); } :
	            function (resolve, reject) { reject && reject(arg); };

	        this.resolve = this.reject = this.progress =
	            function () { throw new Error('Promise already completed.'); };

	        var aThen, i = 0;

	        while (aThen = this._thens[i++]) {
	            aThen[which] && aThen[which](arg);
	        }

	        delete this._thens;
	    }
	};

	module.exports = window.Promise ? window.Promise : Promise;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function (Vue) {

	    var _ = __webpack_require__(8)(Vue);

	    /**
	     * Resource provides interaction support with RESTful services.
	     */

	    function Resource (url, params, actions) {

	        var self = this, resource = {};

	        actions = _.extend({},
	            Resource.actions,
	            actions
	        );

	        _.each(actions, function (action, name) {

	            action = _.extend(true, {url: url, params: params || {}}, action);

	            resource[name] = function () {
	                return (self.$http || Vue.http)(opts(action, arguments));
	            };
	        });

	        return resource;
	    }

	    function opts (action, args) {

	        var options = _.extend({}, action), params = {}, data, success, error;

	        switch (args.length) {

	            case 4:

	                error = args[3];
	                success = args[2];

	            case 3:
	            case 2:

	                if (_.isFunction (args[1])) {

	                    if (_.isFunction (args[0])) {

	                        success = args[0];
	                        error = args[1];

	                        break;
	                    }

	                    success = args[1];
	                    error = args[2];

	                } else {

	                    params = args[0];
	                    data = args[1];
	                    success = args[2];

	                    break;
	                }

	            case 1:

	                if (_.isFunction (args[0])) {
	                    success = args[0];
	                } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
	                    data = args[0];
	                } else {
	                    params = args[0];
	                }

	                break;

	            case 0:

	                break;

	            default:

	                throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
	        }

	        options.url = action.url;
	        options.data = data;
	        options.params = _.extend({}, action.params, params);

	        if (success) {
	            options.success = success;
	        }

	        if (error) {
	            options.error = error;
	        }

	        return options;
	    }

	    Resource.actions = {

	        get: {method: 'GET'},
	        save: {method: 'POST'},
	        query: {method: 'GET'},
	        remove: {method: 'DELETE'},
	        delete: {method: 'DELETE'}

	    };

	    Object.defineProperty(Vue.prototype, '$resource', {

	        get: function () {
	            return Resource.bind(this);
	        }

	    });

	    return Resource;
	};


/***/ },
/* 12 */
/***/ function(module, exports) {

	/**
	 * Local Storage Plugin
	 * based on https://github.com/hosokawat/jquery-localstorage
	 */
	exports.install = function (Vue) {

	    var localStorage = window.localStorage,
	        supports = localStorage ? true : false;

	    var remove = function (key) {
	        if (localStorage) {
	            localStorage.removeItem(key);
	        }
	        return;
	    };

	    function allStorage() {
	        return supports ? localStorage : undefined;
	    }

	    var config = function (key, value) {
	        // All Read
	        if (arguments.length === 0) {
	            return allStorage(key);
	        }

	        // Write
	        if (value !== undefined) {
	            if (localStorage) {
	                localStorage.setItem(key, value);
	            }
	        }

	        // Read
	        var result;
	        if (localStorage) {
	            if (localStorage[key]) {
	                result = localStorage.getItem(key);
	            }
	        }
	        return result;
	    };

	    var io = function (key) {
	        return {
	            read: function () {
	                return config(key);
	            }, write: function (value) {
	                return config(key, value);
	            }, remove: function () {
	                return remove(key);
	            }, key: key
	        };
	    };
	    Vue.prototype.$localstorage = function (key, value) {
	        return config(key, value);
	    };
	    Vue.prototype.$localstorage.remove = remove;
	    Vue.prototype.$localstorage.io = io;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports.install = function (Vue) {
	    var _util = __webpack_require__(14);

	    var Layer = function Layer(type) {
	            this.id = _util.randomId();
	            this.title = type + ' layer';
	            this.type = type;
	            this.ordering = 0;
	            this.fObj = null;
	        };

	    _.extend(Layer.prototype, {
	        setFabricObject: function () {
	            if (typeof this.onSetFabricObject === 'function') {
	                this.onSetFabricObject();
	            } else {
	                this.fObj = new fabric.Text('No object set', {
	                    left: 10,
	                    top: 10,
	                    fill: '#ff0000'
	                });
	            }
	        },
	        updateValue: function (controlType) {

	            if (controlType === 'angle') {
	                this.fObj.setAngle(this.fObj.angle); //todo still not works
	            }

	            if (typeof this.onUpdateValue === 'function') {
	                this.onUpdateValue(controlType);
	            }
	            this.fObj.setCoords();
	        },
	        _toObject: function () {
	            return _.extend({}, this, {fObj: null});
	        }

	    });

	    Vue.prototype.$getLayer = function (type, layerObj) {
	        var layer = new Layer(type, layerObj);
	        _.extend(layer, layerObj);
	        if (layerObj.fObj === undefined) { //only on empty new instance
	            layer.setFabricObject();
	        }
	        return layer;
	    };
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	var util = {

	    randomId: function () {
	        function s4() {
	            return Math.floor((1 + Math.random()) * 0x10000)
	                .toString(16)
	                .substring(1);
	        }

	        return s4() + s4() + '-' + s4();
	    },

	    debounce: function (func, wait, immediate) {
	        var timeout;
	        return function () {
	            var context = this, args = arguments,
	                later = function () {
	                    timeout = null;
	                    if (!immediate) {
	                        func.apply(context, args);
	                    }
	                };
	            var callNow = immediate && !timeout;
	            clearTimeout(timeout);
	            timeout = setTimeout(later, wait);
	            if (callNow) {
	                func.apply(context, args);
	            }
	        };
	    }


	};

	module.exports = util;



/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function (Vue) {

	    //var formats = ['full', 'long', 'medium', 'short'];
	    //
	    //Vue.prototype.$date = function (date, format) {
	    //
	    //    var options = format;
	    //
	    //    if (typeof date == 'string') {
	    //        date = new Date(date);
	    //    }
	    //
	    //    if (typeof options == 'string') {
	    //        if (formats.indexOf(format) != -1) {
	    //            options = {date: format};
	    //        } else {
	    //            options = {skeleton: format};
	    //        }
	    //    }
	    //
	    //    return Globalize.formatDate(date, options);
	    //};
	    //
	    //Vue.prototype.$relativeDate = function (value, reference) {
	    //    var SECOND = 1000,
	    //        MINUTE = 60 * SECOND,
	    //        HOUR = 60 * MINUTE,
	    //        DAY = 24 * HOUR,
	    //        WEEK = 7 * DAY,
	    //        YEAR = DAY * 365,
	    //        MONTH = YEAR / 12;
	    //
	    //    var formats = [
	    //
	    //        [1.5 * MINUTE, 'minute', MINUTE],
	    //        [60 * MINUTE, 'minute', MINUTE],
	    //        [DAY, 'hour', HOUR],
	    //        [7 * DAY, 'day', DAY],
	    //        [MONTH, 'week', WEEK]
	    //
	    //    ], formatter;
	    //
	    //    if (typeof(value)) value = new Date(value);
	    //    if (!reference) reference = (new Date).getTime();
	    //    if (reference instanceof Date) reference = reference.getTime();
	    //    if (value instanceof Date) value = value.getTime();
	    //
	    //    var delta = reference - value, format, i, len;
	    //
	    //    for (i = -1, len = formats.length; ++i < len;) {
	    //
	    //        format = formats[i];
	    //
	    //        if (delta < format[0]) {
	    //
	    //            formatter = Globalize.relativeTimeFormatter(format[1]);
	    //
	    //            return formatter(Math.round(delta / format[2]) * -1);
	    //        }
	    //    }
	    //
	    //    return this.$date((new Date(value)).toISOString(), 'medium');
	    //};

	    //Vue.prototype.$trans = Globalize.trans;
	    //Vue.prototype.$transChoice = Globalize.transChoice;

	    Vue.prototype.$trans = function (id, parameters, domain, locale) {
	        //todo implement globalize
	        return id;
	    };

	};


/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = function (Vue) {

	    Vue.filter('baseUrl', function (url) {
	        return _.startsWith(url, Vue.url.options.root) ? url.substr(Vue.url.options.root.length) : url;
	    });

	    Vue.filter('trans', function (id, parameters, domain, locale) {
	        return this.$trans(id, parameters, domain, locale);
	    });

	    Vue.filter('snake', function (str) {
	        return _.snakeCase(str);
	    });

	    //Vue.filter('transChoice', function (id, number, parameters, domain, locale) {
	    //    return this.$transChoice(id, number, parameters, domain, locale);
	    //});
	    //
	    //Vue.filter('date', function (date, format) {
	    //    return this.$date(date, format);
	    //});
	    //
	    //Vue.filter('toOptions', function toOptions(collection) {
	    //    return collection ? Object.keys(collection).map(function (key) {
	    //
	    //        var op = collection[key];
	    //        if (typeof op === 'string') {
	    //            return {text: op, value: key};
	    //        } else {
	    //            return {label: key, options: toOptions(op)};
	    //        }
	    //
	    //    }) : [];
	    //});
	    //
	    //Vue.filter('trim', {
	    //
	    //    write: function (val) {
	    //        return val.trim();
	    //    }
	    //
	    //});
	    //
	    //Vue.filter('relativeDate', function (value, reference) {
	    //    try {
	    //        return this.$relativeDate(value, reference);
	    //    } catch (e) {
	    //        return 'NaN';
	    //    }
	    //});

	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	var __vue_template__ = "<input type=\"color\" v-el=\"picker\" id=\"{{ id }}\" v-on=\"change: updateValue(this.type)\">";
	module.exports = {

	    props: ['id', 'type', 'model-value', 'update-parent'],

	    ready: function () {
	        this.$on('set.bps.activelayer', function (layerID) {
	            this.$$.picker.value = this.modelValue;
	        }.bind(this));
	    },

	    methods: {
	        updateValue: function (type) {

	            this.modelValue = this.$$.picker.value;
	            console.log(type, this.modelValue);
	            this.updateParent(type, this.modelValue); //todo why can't this be bound to a getter/setter in $parent

	        }
	    }

	};
	;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;


/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function (options) {
	    var onConfirm = this.vm[this.arg] || function (e, button) {console.log('No onConfirm bound'); },
	        title = this.vm.$trans(options.t),
	        message = this.vm.$trans(options.m);

	    this.el.addEventListener('click', function (e) {
	        var button = this;
	        UIkit.modal.confirm('<h3 class="uk-modal-header">' + title + '</h3><p>' + message + '</p>', function () {
	            onConfirm(e, button);

	        }, {bgClose: false, center: true, labels: {'Ok': options.ok || 'Ok', 'Cancel': options.cancel || 'Annuleren'}});

	    });

	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var _util = __webpack_require__(14); //todo why is _ available, and _uitl not??
	//mixins
	var stateMixin = __webpack_require__(20); //todo I want this in app.js

	module.exports = {

	    template: __webpack_require__(21),

	    data: function () {
	        return {
	            projectName: this.$trans('Project 1'),
	            projectID: _util.randomId(),
	            bixConfig: window.$bixConfig,
	            canvasOptions: {
	                bgColor: 'white',
	                width: 520,
	                height: 300
	            },
	            activeAsset: {
	                src: false
	            },
	            layers: [],
	            activeLayerId: '',
	            activeLayer: {
	                type: false,
	                fObj: {}
	            },
	            canvas: null
	        };
	    },

	    components: {
	        fabric_layercontrols: __webpack_require__(22),
	        fabric_layerselect: __webpack_require__(24),
	        fabric_figures: __webpack_require__(26),
	        fabric_text: __webpack_require__(28),
	        fabric_images: __webpack_require__(30),
	        fabric_export: __webpack_require__(32),
	        fabric_state: __webpack_require__(33),
	        fabric_library: __webpack_require__(34)
	    },

	    mixins: [stateMixin],

	    created: function () {
	        this.$http.get('testdata.json', function (data, status, request) {

	            console.log(data);
	            // set data on vm
	            //this.$set('someData', data);

	        }).error(function (data, status, request) {
	            // handle error
	        });


	    },

	    ready: function () {

	        this.canvas = new fabric.Canvas(this.$$.canvas);
	        this.canvas.setBackgroundColor(this.canvasOptions.bgColor);
	        this.canvas.on({
	            'selection:cleared': this.clearActiveLayer,
	            'object:selected': this.setActiveLayer,
	            //'object:moving': this.setActiveLayer,
	            'object:scaling': this.updateControls
	            //'object:resizing': this.setActiveLayer,
	            //'object:rotating': this.setActiveLayer
	        });
	        this.updateCanvas();
	        console.log('loaded.bps.canvas');
	        this.$broadcast('loaded.bps.canvas');
	    },

	    filters: {
	        coupon: function (cost) {
	            return cost - (this.discount / 100 * cost);
	        }
	    },

	    methods: {
	        setActiveAsset: function (asset) {
	            this.activeAsset = asset;
	        },
	        /**
	         * update values from a external control
	         * @param controlType
	         */
	        updateValue: function (controlType) {
	            this.activeLayer.updateValue(controlType);
	            this.updateCanvas();
	        },
	        /**
	         * render canvas objects with new values
	         */
	        updateCanvas: function () {
	            this.canvas.renderAll();
	        },
	        /**
	         * canvasobjects have been altered, set activeLayer
	         */
	        setActiveLayer: function () {
	            var activeObject = this.canvas.getActiveObject();
	            _.forEach(this.layers, function (layer) {
	                if (activeObject === layer.fObj) {
	                    this.$set('activeLayerId', layer.id);
	                }
	            }.bind(this));
	        },
	        /**
	         * clear selected layers
	         */
	        clearActiveLayer: function () {
	            this.activeLayerId = '';
	        },
	        /**
	         * clear complete canvas
	         */
	        clearCanvas: function () {
	            this.clearActiveLayer();
	            this.layers = [];
	            this.canvas.clear();
	        },
	        /**
	         * triggered from canvas
	         * @param e
	         */
	        updateControls: function (e) {
	            var fObj = e.target;
	            if (this.activeLayer.fObj === fObj) { //just to make sure
	                //this.activeLayer.fObj.scaleX = fObj.getScaleX();
	                //this.activeLayer.fObj.scaleY = fObj.getScaleY();
	                //console.log(fObj.scaleX, fObj.scaleY);
	                //console.log(this.activeLayer.fObj.scaleX, this.activeLayer.fObj.scaleY);
	            }
	        },
	        /**
	         * add layer to canvas and data
	         * @param layer
	         * @private
	         */
	        _removeLayer: function (layer) {
	            this.layers = _.remove(this.layers, function (n) {
	                return n.id !== layer.id;
	            });
	            if (layer.id === this.activeLayerId) {
	                this.clearActiveLayer();
	            }
	            this.canvas.fxRemove(layer.fObj);
	        },
	        /**
	         * remove layer from canvas and data
	         * @param layer
	         * @private
	         */
	        _addLayer: function (layer) {
	            layer.ordering = this.layers.length + 1;
	            this.layers.push(layer);
	            this.canvas.add(layer.fObj);
	            this.activeLayerId = layer.id;
	        },
	        /**
	         * clone to object for storage
	         * @returns {{projectName: *, projectID: *, canvasOptions: *, layers: Array, canvas: (Object|*)}}
	         * @private
	         * todo get it more generic
	         */
	        _toObject: function () {
	            var obj = {
	                projectName: this.projectName,
	                projectID: this.projectID,
	                canvasOptions: this.canvasOptions,
	                layers: [],
	                canvas: this.canvas.toDatalessJSON()
	            };
	            this.layers.forEach(function (layer) {
	                obj.layers.push(layer._toObject());
	            });
	            return obj;
	        },
	        /**
	         * load object from storage
	         * @param data
	         * @private
	         * todo get it more generic
	         */
	        _loadFromObject: function (data) {
	            var $this = this;
	            ['projectName', 'projectID', 'canvasOptions'].forEach(function (key) {
	                $this.$set(key, data[key]);
	            });
	            this.layers = [];
	            if (this.canvas) {
	                this.canvas.loadFromDatalessJSON(data.canvas, function () {
	                    data.layers.forEach(function (layerData, idx) {
	                        var layer = $this.$getLayer(layerData.type, layerData);
	                        layer.fObj = $this.canvas._objects[idx]; //todo proper match to layer in canvas
	                        $this.layers.push(layer);
	                    });
	                });
	            }

	        }

	    },

	    watch: {
	        /**
	         * set reference to activelayer in canvas to this.activeLayer
	         * @param val
	         */
	        'activeLayerId': function (val) {
	            var layer;
	            if (val) {
	                layer = _.find(this.layers, 'id', val);
	                this.canvas.setActiveObject(layer.fObj);
	                this.$set('activeLayer', layer);
	                this.$broadcast('set.bps.activelayer', [layer.id]);
	            } else {
	                this.$set('activeLayer', {
	                    id: '',
	                    type: false,
	                    fObj: {}
	                });
	                this.$broadcast('clear.bps.activelayer');
	            }
	        }
	    }
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var _util = __webpack_require__(14); //todo why is _ available, and _uitl not??

	module.exports = {

	    methods: {

	        initState: function () {

	            var activeDesign = this.$localstorage(this.bixConfig.prefix + '.activeDesign');
	            this.debouncer = this._getSaveStateDebouncer();
	            if (activeDesign && activeDesign !== '') {
	                this.restoreState(JSON.parse(this.$localstorage(this.bixConfig.prefix + '.' + activeDesign) || '{}'));
	            } else {
	                this.saveState();
	            }

	        },

	        saveState: function () {

	            this.debouncer();

	        },

	        _getSaveStateDebouncer: function () {

	            return _util.debounce(function () {

	                this.$localstorage(this.bixConfig.prefix + '.activeDesign', this.projectID);
	                this.$localstorage(this.bixConfig.prefix + '.' + this.projectID, JSON.stringify(this._toObject()));
	                this.$broadcast('saved.bps.state');

	            }.bind(this), this.bixConfig.saveStateDebounceTime || 1500);

	        },

	        restoreState: function (data) {

	            if (data.projectID) {
	                this._loadFromObject(data);
	            }

	        }
	    }
	};



/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-panel uk-panel-box uk-panel-box\">\n    <div class=\"uk-grid uk-grid-small\">\n        <div class=\"uk-width-1-4\">\nsettings canvas\n        </div>\n        <div class=\"uk-width-1-2\">\n            <div class=\"uk-form-row\">\n                <label class=\"uk-form-label\" for=\"design-name\">{{ 'Naam design' | trans}}</label>\n                <div class=\"uk-form-controls\">\n                    <input type=\"text\" id=\"design-name\" class=\"uk-form-large uk-form-blank uk-width-1-1\"\n                           v-model=\"projectName\"\n                           v-on=\"change: saveState\"/>\n                </div>\n            </div>\n\n        </div>\n        <div class=\"uk-width-1-4\">\n\n            <div class=\"uk-margin\">\n                <fabric_state></fabric_state>\n            </div>\n            <div class=\"uk-margin\">\n                <fabric_export></fabric_export>\n            </div>\n\n        </div>\n\n\n    </div>\n</div>\n<div class=\"uk-margin\">\n    <div class=\"uk-width-1-1\">\n\n        <ul class=\"uk-tab\" data-uk-tab=\"{connect:'#tools-switcher'}\">\n            <li><a href=\"#\"><i class=\"uk-icon-pencil\"></i></a></li>\n            <li><a href=\"#\"><i class=\"uk-icon-font\"></i></a></li>\n            <li><a href=\"#\"><i class=\"uk-icon-image\"></i></a></li>\n        </ul>\n\n        <ul id=\"tools-switcher\" class=\"uk-switcher uk-margin\">\n            <li>\n                <fabric_figures></fabric_figures>\n            </li>\n            <li>\n                <fabric_text></fabric_text>\n            </li>\n            <li>\n                <fabric_images></fabric_images>\n            </li>\n        </ul>\n\n\n    </div>\n</div>\n\n\n<div class=\"uk-grid uk-grid-small\">\n\n    <div class=\"uk-width-medium-1-4 uk-width-large-1-5\">\n        <div class=\"uk-width-1-1\">\n\n            <fabric_layercontrols></fabric_layercontrols>\n\n        </div>\n\n    </div>\n\n    <div class=\"uk-width-medium-2-4 uk-width-large-3-5\">\n\n        <div class=\"uk-panel uk-panel-box\">\n\n            <canvas v-el=\"canvas\" width=\"{{ canvasOptions.width }}\" height=\"{{ canvasOptions.height }}\"></canvas>\n\n        </div>\n\n    </div>\n\n\n    <div class=\"uk-width-medium-1-4 uk-width-large-1-5\">\n        <div class=\"uk-width-1-1\">\n            <fabric_layerselect></fabric_layerselect>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"uk-margin\">\n\n    <fabric_library></fabric_library>\n\n</div>\n\n<pre>{{ $data.activeLayer.fObj | json }}</pre>\n<pre>{{ $data | json }}</pre>";

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	    template: __webpack_require__(23),

	    inherit: true

	    //todo fix scale/transp etc controls!

	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"uk-panel uk-panel-box\"\n     v-show=\"activeLayer.type\"\n        >\n    <h3 class=\"uk-panel-title\">{{ activeLayer.title}}</h3>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\" for=\"layercontrol-width\">{{ 'Breedte' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"text\" id=\"layercontrol-width\"\n                   v-model=\"activeLayer.fObj.width\"\n                   v-on=\"input: updateValue('width')\"\n                   number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\" for=\"layercontrol-height\">{{ 'Hoogte' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"text\" id=\"layercontrol-height\"\n                   v-model=\"activeLayer.fObj.height\"\n                   v-on=\"input: updateValue('height')\"\n                   number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\" for=\"layercontrol-opacity\">{{ 'Doorlaatbaarheid' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"range\" id=\"layercontrol-opacity\" min=\"0\" max=\"1\" step=\"0.01\"\n                   v-model=\"activeLayer.fObj.opacity\"\n                   v-on=\"input: updateValue('opacity')\"\n                   number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\" for=\"layercontrol-top\">{{ 'Top' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"range\" id=\"layercontrol-top\" min=\"0\" max=\"{{ canvasOptions.height }}\" step=\"1\"\n                   v-model=\"activeLayer.fObj.top\"\n                   v-on=\"input: updateValue('top')\"\n                   number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\" for=\"layercontrol-left\">{{ 'Links' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"range\" id=\"layercontrol-left\" min=\"0\" max=\"{{ canvasOptions.width }}\" step=\"1\"\n                   v-model=\"activeLayer.fObj.left\"\n                   v-on=\"input: updateValue('left')\"\n                   number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\" for=\"layercontrol-scalex\">{{ 'Schaal X-as' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"range\" id=\"layercontrol-scalex\" min=\"0\" max=\"3\" step=\"0.1\"\n                   v-model=\"activeLayer.fObj.scaleX\"\n                   v-on=\"input: updateValue('scale')\"\n                   number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\">\n        <label class=\"uk-form-label\" for=\"layercontrol-scaley\">{{ 'Schaal Y-as' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"range\" id=\"layercontrol-scaley\" min=\"0\" max=\"3\" step=\"0.1\"\n                   v-model=\"activeLayer.fObj.scaleY\"\n                   v-on=\"input: updateValue('scale')\"\n                   number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\" v-if=\"activeLayer.type == 'rectangle'\">\n        <label class=\"uk-form-label\" for=\"layercontrol-angle\">{{ 'Draaihoek' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"range\" id=\"layercontrol-angle\" min=\"0\" max=\"360\" step=\"1\"\n                   v-model=\"activeLayer.fObj.angle\"\n                   v-on=\"input: updateValue('angle')\"\n                   number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\" v-if=\"activeLayer.type == 'circle'\">\n        <label class=\"uk-form-label\" for=\"layercontrol-endangle\">{{ 'Draaihoek' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"range\" id=\"layercontrol-endangle\" min=\"0\" max=\"360\" step=\"1\"\n                   v-model=\"activeLayer.fObj.endAngle\"\n                   v-on=\"input: updateValue('endAngle')\"\n                   number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row\" v-if=\"activeLayer.type == 'circle'\">\n        <label class=\"uk-form-label\" for=\"layercontrol-radius\">{{ 'Straal' | trans}}</label>\n        <div class=\"uk-form-controls\">\n            <input type=\"range\" id=\"layercontrol-radius\" min=\"0\" max=\"500\" step=\"1\"\n                   v-model=\"activeLayer.fObj.radius\"\n                   v-on=\"input: updateValue('radius')\"\n                   number>\n        </div>\n    </div>\n\n</div>\n\n\n";

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	    template: __webpack_require__(25),

	    inherit: true,

	    data: function () {
	        return {
	        };
	    },

	    load: function () {
	        //require('uikit/js/components/sortable'); //todo

	    },

	    ready: function () {
	        var $this = this;

	        UIkit.init(this.$el);

	        UIkit.$(this.$el).on('change.uk.sortable', function (e, sortable, ele, mode) {

	            if (!mode || ['moved', 'added'].indexOf(mode) === -1) {
	                return;
	            }

	            ele = UIkit.$(ele);

	            //tricky part is that ordering is reverse of object array. Last in array is top layer
	            var newOrdering = ($this.layers.length -  ele.index()),
	                layerId   = ele.data('id'),
	                layer = _.find($this.layers, 'id', layerId),
	                diff = newOrdering - layer.ordering,
	                fnName = diff < 0 ? 'sendBackwards' : 'bringForward',
	                moves;

	            for (moves = 0; moves < Math.abs(diff); moves += 1) {
	                $this.canvas[fnName](layer.fObj, false);
	            }
	            //set layers ordering todo move to parent, but what about sortable (DOM)
	            sortable.element.children().each(function (j, child) {
	                child = UIkit.$(child);
	                _.find($this.layers, 'id', child.data('id')).ordering = ($this.layers.length - child.index());
	            });

	        });
	    },

	    methods: {

	        removeLayer: function (layer) {
	            this._removeLayer(layer);
	        },

	        selectLayer: function (layer) {
	            if (this.activeId === layer.id) {
	                return;
	            }
	            this.activeLayerId = layer.id;
	        }
	    }
	};

/***/ },
/* 25 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"uk-sortable uk-list uk-list-line uk-form\"\n    data-uk-sortable=\"{handleClass:'uk-sortable-handle', threshold: 1}\">\n    <li data-id=\"{{ layer.id }}\"\n        v-repeat=\"layer: layers | orderBy 'ordering' true\">\n        <div v-on=\"click: selectLayer(layer)\" class=\"uk-panel\" v-class=\"uk-panel-box-primary: layer.id == activeLayerId\">\n\n            <div class=\"uk-grid uk-grid-small uk-flex uk-flex-middle\">\n                <div class=\"uk-width-1-6 uk-text-center\">\n                    <button type=\"button\" class=\"uk-button uk-button-mini uk-sortable-handle\"><i\n                            class=\"uk-icon-bars\"></i></button>\n                </div>\n                <div class=\"uk-width-5-6\">\n\n                    <input type=\"text\" class=\"uk-form-blank uk-width-1-1\"\n                           v-model=\"layer.title\"/>\n\n                </div>\n            </div>\n\n            <div class=\"uk-width-1-1 uk-text-right\">\n                {{layer.ordering}}\n                <button type=\"button\" class=\"uk-button uk-button-danger uk-button-mini\"\n                        v-on=\"click: removeLayer(layer)\"\n                        ><i class=\"uk-icon-trash-o\"></i></button>\n            </div>\n\n        </div>\n\n    </li>\n</ul>\n";

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	    template: __webpack_require__(27),

	    inherit: true,

	    data: function () {
	        return {
	            figures: [
	                {
	                    type: 'rectangle',
	                    label: this.$trans('Rechthoek')
	                },
	                {
	                    type: 'triangle',
	                    label: this.$trans('Driehoek')
	                },
	                {
	                    type: 'circle',
	                    label: this.$trans('Cirkel')
	                }
	            ]
	        };
	    },

	    methods: {

	        addFigure: function (figure) {

	            this._addLayer(this.getLayerObject(figure));

	        },

	        setFill: function (controlType, value) {
	            if (controlType === 'fill') {
	                this.activeLayer.fObj.setFill(value);
	                this.updateValue(controlType);
	            }
	        },

	        getLayerObject: function (figure) {

	            return this.$getLayer(figure.type, {
	                onSetFabricObject: function () {
	                    switch (this.type) {
	                    case 'rectangle':
	                        this.fObj = new fabric.Rect({
	                            top: 110,
	                            left: 100,
	                            width: 60,
	                            height: 70,
	                            fill: '#00ff00'
	                        });
	                        break;
	                    case 'triangle':
	                        this.fObj = new fabric.Triangle({
	                            top: 100,
	                            left: 120,
	                            width: 60,
	                            height: 70,
	                            fill: '#ff0000'
	                        });
	                        break;
	                    case 'circle':
	                        this.fObj = new fabric.Circle({
	                            top: 80,
	                            left: 100,
	                            radius: 30,
	                            fill: '#0000ff'
	                        });
	                        break;
	                    }
	                },
	                onUpdateValue: function (controlType) {
	                }
	            });

	        }
	    }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-grid uk-grid-small\">\n    <div class=\"uk-width-1-3\">\n\n        <div class=\"uk-button-group\">\n\n            <button type=\"button\" class=\"uk-button\" v-repeat=\"figure: figures\" v-on=\"click: addFigure(figure)\"><i\n                    class=\"uk-icon-plus uk-margin-small-right\"></i>{{ figure.label }}\n            </button>\n\n        </div>\n\n    </div>\n    <div class=\"uk-width-2-3\">\n\n        <div class=\"uk-form-horizontal\"\n             v-show=\"activeLayer.type\">\n\n            <div class=\"uk-form-row\">\n                <label class=\"uk-form-label\" for=\"layercontrol-fill\">{{ 'Kleur' | trans}}</label>\n\n                <div class=\"uk-form-controls\">\n                    <colorpicker type=\"fill\" id=\"layercontrol-fill\"\n                                 model-value=\"{{ activeLayer.fObj.fill }}\"\n                                 update-parent=\"{{ setFill }}\"></colorpicker>\n                </div>\n            </div>\n\n        </div>\n\n\n    </div>\n\n</div>\n\n\n";

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	    template: __webpack_require__(29),

	    inherit: true,

	    data: function () {
	        return {
	            defaultText: 'Text',
	            fonts: [
	                {
	                    value: 'Times New Roman',
	                    text: 'Times New Roman'
	                },
	                {
	                    value: 'Georgia',
	                    text: 'Georgia'
	                },
	                {
	                    value: 'Arial',
	                    text: 'Arial'
	                },
	                {
	                    value: 'Lucida Sans Unicode',
	                    text: 'Lucida Sans'
	                },
	                {
	                    value: 'Courier New',
	                    text: 'Courier New'
	                },
	                {
	                    value: 'Trebuchet MS',
	                    text: 'Trebuchet'
	                },
	                {
	                    value: 'Tahoma',
	                    text: 'Tahoma'
	                },
	                {
	                    value: 'Comic Sans MS',
	                    text: 'Comic Sans'
	                }
	            ]
	        };
	    },

	    methods: {

	        addText: function () {
	            var $this = this, obj = this.$getLayer('text', {
	                onSetFabricObject: function () {
	                    this.fObj = new fabric.Text($this.defaultText, {
	                        left: 10,
	                        top: 10,
	                        fill: '#000000'
	                    });
	                },
	                onUpdateValue: function (controlType) {
	                    if (controlType === 'text') {
	                        this.title = this.fObj.text.substr(0, 15);
	                    }
	                }
	            });

	            this._addLayer(obj);
	        },

	        setFill: function (controlType, value) {
	            if (controlType === 'fill') {
	                this.activeLayer.fObj.setFill(value);
	                this.updateValue(controlType);
	            }
	        }

	    }
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"uk-grid uk-grid-small\">\n    <div class=\"uk-width-1-3\">\n\n        <div class=\"uk-button-group\">\n\n            <button type=\"button\" class=\"uk-button\" v-on=\"click: addText\"><i\n                    class=\"uk-icon-plus uk-margin-small-right\"></i>{{ 'Tekst' | trans}}</button>\n\n        </div>\n\n    </div>\n    <div class=\"uk-width-2-3\">\n\n        <div v-show=\"activeLayer.type\">\n\n            <div class=\"uk-grid\">\n                <div class=\"uk-width-medium-1-2\">\n\n                    <div class=\"uk-form-row\" v-if=\"activeLayer.type == 'text'\">\n                        <div class=\"uk-form-controls\">\n                    <textarea id=\"layercontrol-text\"\n                              v-model=\"activeLayer.fObj.text\"\n                              v-on=\"input: updateValue('text')\"></textarea>\n                        </div>\n                    </div>\n\n                    <div class=\"uk-form-row\" v-if=\"activeLayer.type == 'text'\">\n                        <label class=\"uk-form-label\" for=\"layercontrol-fontfamily\">{{ 'Lettertype' | trans}}</label>\n                        <div class=\"uk-form-controls\">\n                            <select id=\"layercontrol-fontfamily\"\n                                    v-model=\"activeLayer.fObj.fontFamily\"\n                                    options=\"fonts\"\n                                    v-on=\"change: updateValue('fontFamily')\"></select>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"uk-width-medium-1-2\">\n\n                    <div class=\"uk-form-row\">\n                        <label class=\"uk-form-label\" for=\"layercontrol-fill\">{{ 'Tekstkleur' | trans}}</label>\n\n                        <div class=\"uk-form-controls\">\n                            <colorpicker type=\"fill\" id=\"layercontrol-fill\"\n                                         model-value=\"{{ activeLayer.fObj.fill }}\"\n                                         update-parent=\"{{ setFill }}\"></colorpicker>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n\n        </div>\n\n\n    </div>\n\n</div>\n\n\n";

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	    template: __webpack_require__(31),

	    inherit: true,

	    data: function () {
	        return {
	            figures: []
	        };
	    },

	    methods: {

	        addImage: function () {
	            var $this = this, obj = this.$getLayer('image', {
	                onSetFabricObject: function () {
	                    var img = document.createElement('img');
	                    img.src = $this.activeAsset.url;
	                    this.fObj = new fabric.Image(img, {
	                        left: 10,
	                        top: 10,
	                        width: img.width,
	                        height: img.height
	                    });
	                }
	            });

	            this._addLayer(obj);
	        }
	    }
	};

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-grid uk-grid-small\">\n    <div class=\"uk-width-1-3\">\n\n        <div class=\"uk-button-group\">\n\n            <button type=\"button\" class=\"uk-button\"\n                    v-show=\"activeAsset.src\"\n                    v-on=\"click: addImage\"><i\n                    class=\"uk-icon-plus uk-margin-small-right\"></i>Image\n            </button>\n\n        </div>\n\n    </div>\n    <div class=\"uk-width-2-3\">\n\n        <div class=\"uk-width-1-1\">\n            <figure class=\"uk-overlay\"\n                    v-show=\"activeAsset.src\">\n                <img v-attr=\"src: activeAsset.src\" alt=\"{{ activeAsset.filename }}\" width=\"200\" height=\"500\">\n                <figcaption class=\"uk-overlay-panel\">{{ activeAsset.title }}</figcaption>\n            </figure>\n\n        </div>\n\n        <div class=\"uk-form-horizontal\"\n             v-show=\"activeLayer.type\">\n\n\n        </div>\n\n    </div>\n\n</div>\n\n\n";

/***/ },
/* 32 */
/***/ function(module, exports) {

	var __vue_template__ = "<a href=\"\" class=\"uk-button\" v-on=\"click: exportDesign\" download=\"{{ projectName | snake}}\">\n        <i class=\"uk-icon-download uk-margin-small-right\"></i>{{ 'Exporteer' | trans }}</a>";
	module.exports = {

	    props: [],

	    inherit: true,

	    ready: function () {

	    },

	    methods: {
	        exportDesign: function (e) {
	            this.canvas.discardActiveGroup();
	            this.canvas.discardActiveObject();
	            e.target.href = this.canvas.toDataURL();
	            console.log(this.canvas.toSVG());

	        }
	    }

	};
	;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;


/***/ },
/* 33 */
/***/ function(module, exports) {

	var __vue_template__ = "<div class=\"uk-badge uk-panel-badge {{ badgeClass }}\" v-show=\"badgeMessage\">\n        {{ badgeMessage }}\n    </div>\n\n    <button type=\"button\" class=\"uk-button\" v-confirm=\"clearCanvas: confirmClear\">\n        <i class=\"uk-icon-times uk-margin-small-right\"></i>{{ 'Wis design' | trans}}</button>";
	module.exports = {

	    props: [],

	    inherit: true,

	    data: function () {
	        return {
	            badgeClass: '',
	            badgeMessage: '',
	            confirmClear: {
	                t: 'Design wissen',
	                m: 'Weet u zeker dat u dit design wilt wissen?'
	            }
	        };
	    },

	    ready: function () {

	        this.$on('loaded.bps.canvas', function () {
	            this.initState();
	        }.bind(this));

	        this.$on('clear.bps.activelayer', function () {
	            this.saveState();
	        }.bind(this));

	        this.$on('saved.bps.state', function () {
	            this.badgeClass = 'uk-badge-success';
	            this.badgeMessage = this.$trans('Design opgeslagen');
	            setTimeout(this.clearBadge, 1200);
	        }.bind(this));

	    },
	     methods: {
	         clearBadge: function () {
	             this.badgeClass = '';
	             this.badgeMessage = '';
	         }
	     }

	};
	;(typeof module.exports === "function"? module.exports.options: module.exports).template = __vue_template__;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {

	    template: __webpack_require__(35),

	    inherit: true,

	    data: function () {
	        return {
	            images: [
	                {
	                    title: 'Image 51',
	                    filename: 'image1.jpg',
	                    src: 'images/Screenshot_51.png',
	                    url: 'images/Screenshot_51.png'
	                },
	                {
	                    title: 'Image 2',
	                    filename: 'image2.jpg',
	                    src: 'images/Screenshot_52.png',
	                    url: 'images/Screenshot_52.png'
	                }
	            ],

	            valid: false
	        };
	    },

	    methods: {
	        selectImage: function (image, e) {
	            e.preventDefault();
	            this.setActiveAsset(image);
	        }
	    }
	};

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "\n<ul class=\"uk-tab\" data-uk-tab=\"{connect:'#library-switcher'}\">\n    <li v-if=\"images.length\"><a href=\"\">{{ 'Afbeeldingen' | trans }}</a></li>\n</ul>\n<ul id=\"library-switcher\" class=\"uk-switcher uk-margin\">\n    <li v-if=\"images.length\">\n        <ul class=\"uk-thumbnav\">\n            <li v-repeat=\"image: images\">\n                <a href=\"#\" title=\"{{ image.title }}\" v-on=\"click: selectImage(image, $event)\">\n                    <img v-attr=\"src: image.src\" alt=\"{{ image.filename }}\" width=\"100\" height=\"150\"/>\n                </a>\n            </li>\n        </ul>\n\n    </li>\n</ul>\n\n";

/***/ }
/******/ ]);
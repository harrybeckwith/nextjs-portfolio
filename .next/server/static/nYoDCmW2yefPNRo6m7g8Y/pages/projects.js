module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RHEb");


/***/ }),

/***/ "3Hq7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/ActiveLink.js





var ActiveLink = Object(router_["withRouter"])(function (_ref) {
  var router = _ref.router,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  return external_react_default.a.createElement(link_default.a, props, external_react_default.a.cloneElement(external_react_["Children"].only(children), {
    className: router.pathname === props.href ? "menu__nav__active" : null
  }));
});
/* harmony default export */ var components_ActiveLink = (ActiveLink);
// CONCATENATED MODULE: ./components/Links.js



var Links_Links = function Links() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_ActiveLink, {
    href: "/"
  }, external_react_default.a.createElement("a", null, "Home")), external_react_default.a.createElement(components_ActiveLink, {
    href: "/sites"
  }, external_react_default.a.createElement("a", null, "Sites")), external_react_default.a.createElement(components_ActiveLink, {
    href: "/projects"
  }, external_react_default.a.createElement("a", null, "projects")), external_react_default.a.createElement(components_ActiveLink, {
    href: "/gallery"
  }, external_react_default.a.createElement("a", null, "Gallery")));
};

/* harmony default export */ var components_Links = (Links_Links);
// CONCATENATED MODULE: ./components/SocialIcons.js


var SocialIcons_SocialIcons = function SocialIcons() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement("a", {
    href: "https://www.instagram.com/harry_j_beckwith/?hl=en",
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: "menu__icons__icon",
    src: "/static/icons/instagram-logo.svg",
    alt: "instagram logo"
  })), external_react_default.a.createElement("a", {
    href: "https://github.com/harrybeckwith",
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: "menu__icons__icon",
    src: "/static/icons/github-logo.svg",
    alt: "github logo"
  })), external_react_default.a.createElement("a", {
    href: "https://medium.com/@harrybeckwith",
    target: "_blank"
  }, external_react_default.a.createElement("img", {
    className: "menu__icons__icon",
    src: "/static/icons/medium-logo.svg",
    alt: "medium logo"
  })));
};

/* harmony default export */ var components_SocialIcons = (SocialIcons_SocialIcons);
// CONCATENATED MODULE: ./components/Header.js




function Header(props) {
  return external_react_default.a.createElement("header", {
    className: "header ".concat(props.activeMenu ? "active-menu" : "")
  }, external_react_default.a.createElement("h3", {
    className: "title__underline title--md title__sm-only header__title"
  }, "Code:"), external_react_default.a.createElement("div", {
    className: "container-fixed"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "top-bar"
  }, external_react_default.a.createElement("img", {
    onClick: props.toggleMenu,
    className: "top-bar__toggle",
    src: "".concat(props.activeMenu ? "/static/icons/close.svg" : "/static/icons/menu.svg"),
    alt: "menu-icon"
  }), external_react_default.a.createElement("h3", {
    className: "title__underline title--md title__md-only"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("a", null, "   Code:"))), external_react_default.a.createElement("div", {
    className: "menu__icons"
  }, external_react_default.a.createElement(components_SocialIcons, null))))), external_react_default.a.createElement("div", {
    className: "menu"
  }, external_react_default.a.createElement("div", {
    className: "menu__container"
  }, external_react_default.a.createElement("nav", {
    className: "menu__nav"
  }, external_react_default.a.createElement(components_Links, null)), external_react_default.a.createElement("div", {
    className: "menu__about"
  }, external_react_default.a.createElement("div", {
    className: "menu__about__inside"
  }, external_react_default.a.createElement("img", {
    className: "menu__avatar",
    src: "/static/images/avatar.png",
    alt: "avatar"
  }), external_react_default.a.createElement("h3", {
    className: "menu__title"
  }, "Hi."), external_react_default.a.createElement("p", {
    className: "menu__desc"
  }, "Hello. Welcome to my portfolio, feel free to check out some my latest work as a front end developer. Current working with Vue js and React js."), external_react_default.a.createElement("p", {
    className: "menu__desc"
  }, "Feel free to contact me at ", external_react_default.a.createElement("a", {
    href: "mailto:harryjbeckwith@gmail.com"
  }, "harryjbeckwith@gmail.com")), external_react_default.a.createElement("div", {
    className: "menu__icons"
  }, external_react_default.a.createElement(components_SocialIcons, null)))))));
}
// CONCATENATED MODULE: ./components/Footer.js




var Footer_Footer = function Footer() {
  return external_react_default.a.createElement("footer", {
    className: "footer"
  }, external_react_default.a.createElement("div", {
    className: "container"
  }, external_react_default.a.createElement("div", {
    className: "footer__inside"
  }, external_react_default.a.createElement("div", {
    className: "footer__icons menu__icons"
  }, external_react_default.a.createElement(components_SocialIcons, null)), external_react_default.a.createElement("div", {
    className: "footer__note"
  }, external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
    href: "https://harrybeckwith.github.io/",
    target: "_blank"
  }, "Created by ", external_react_default.a.createElement("span", {
    className: "hl"
  }, "harry beckwith")))), external_react_default.a.createElement("div", {
    className: "footer__links"
  }, external_react_default.a.createElement(components_Links, null)))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./styles/base.scss
var base = __webpack_require__("59Bn");

// CONCATENATED MODULE: ./components/MyLayout.js












var MyLayout_Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Layout, _React$Component);

  function Layout() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Layout);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Layout)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "state", {
      activeMenu: false
    });

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "toggleMenu", function () {
      _this.setState({
        activeMenu: !_this.state.activeMenu
      });
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Layout, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Header, {
        toggleMenu: this.toggleMenu,
        activeMenu: this.state.activeMenu
      }), external_react_default.a.createElement("div", {
        className: "container"
      }, this.props.children), external_react_default.a.createElement(components_Footer, null));
    }
  }]);

  return Layout;
}(external_react_default.a.Component);

/* harmony default export */ var MyLayout = __webpack_exports__["a"] = (MyLayout_Layout);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "59Bn":
/***/ (function(module, exports) {



/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "MOoB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Front = function Front(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "front__card",
    onClick: function onClick() {
      return props.cardClick(props.curr);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "front__img",
    src: "".concat(props.info.thumbNail),
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "front__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text__sm text__light"
  }, props.info.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title--md title__underline__sm"
  }, props.info.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "front__card__group text__light text__sm"
  }, props.info.tag.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: index
    }, item);
  }).reduce(function (prev, curr) {
    return [prev, ',', curr];
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (Front);

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "RHEb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0iUn");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("sLSF");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("MI3g");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("a7VT");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AT/M");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Tit0");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("3Hq7");
/* harmony import */ var _static_content_projects_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("zIpF");
var _static_content_projects_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t("zIpF", 1);
/* harmony import */ var _components_Front_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("MOoB");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);













var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "state", {
      projects: _static_content_projects_json__WEBPACK_IMPORTED_MODULE_9__,
      currentsites: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(_this), "cardClick", function (current) {
      next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
        pathname: '/single-project',
        query: {
          current: current
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "front"
      }, this.state.projects.main.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Front_js__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
          info: item.front,
          key: index,
          curr: index,
          cardClick: _this2.cardClick
        });
      })));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "zIpF":
/***/ (function(module) {

module.exports = {"main":[{"front":{"title":"odds of tube delay","thumbNail":"static/images/projects/train.png","date":"April 2019","tag":["ES6","Javascript"]},"content":{"largeImg":"static/images/projects/train.png","title":"odds of tube delay","topContent":["Creating an intertative page that lets users know details on london tube delays. Usig ES6 Javascrip to create an engaging tube map to show the various tube lins on click. Displaying data in a presentable way that is easy to read and a engage with, through the use of drop downs and toggles. This page was used as marketing piece for City AM, and the Londonist, links available below."],"titleTwo":"code used","code":["es6","sass","javascript","mvc"],"links":[{"link":"http://www.cityam.com/274391/which-london-underground-line-suffers-worst-delays","text":"City AM"},{"link":"https://londonist.com/london/transport/tube-delays-by-line","text":"Lononist"}]}},{"front":{"title":"lightbox","thumbNail":"static/images/projects/lightboxV.png","date":"December 2019","tag":["ES6","lightbox","javascript"]},"content":{"largeImg":"static/images/projects/lightboxV.png","title":"lightbox","topContent":["Lightbox is small javascript library used to overlay images on top of the current page. It's easy to set up and works on all browers. Using vanilla JavaScript only, no extra libraries needed. Items can be grouped and captions and image count options can be set. Full instructions are available along with a download from my github."],"titleTwo":"code used","code":["ES^","sass","javascript","html"],"titleThree":"links","links":[{"link":"https://github.com/harrybeckwith/lightboxV","text":"github lightbox"}]}},{"front":{"title":"portfolio","thumbNail":"static/images/projects/portfolio.jpg","date":"May 2019","tag":["React","Next JS","javascript"]},"content":{"largeImg":"/static/images/gallery/croatia/4.jpg","title":"portfolio","topContent":["Using React JavaScript library to create this portfolio website. Combining react knowledge with Next Js to make use of server rendering, static exporting and routing. Building in a component based way approach, making use of state and passing data as props. Storing content in json files to make use of component based templates, so components can be re used."],"titleTwo":"code used","code":["React","Next Js","javascript","SASS"],"titleThree":"links","links":[{"link":"https://github.com/harrybeckwith/nextjs-portfolio","text":"github React portfolio"}]}},{"front":{"title":"glossary search","thumbNail":"static/images/projects/glossary.png","date":"May 2019","tag":["ES6","Javascript"]},"content":{"largeImg":"static/images/projects/glossary.png","title":"glossary search","topContent":["Using ES6 javaScript to loop through data and provide a search functionality that highlights matching words when typed. Users can click letters to bring up matching words of type the words. Using an mvc patttern to keep the code oragnised and clean. Working with the designers to talk through functionality and discussing any issues that may arise from the inital design."],"titleTwo":"code used","code":["es6","sass","javascript","mvc"],"links":[{"link":"https://www.casino.ca/guides/terminology/","text":"glossary search"}]}},{"front":{"title":"lightbox","thumbNail":"static/images/projects/lightbox.png","date":"March 2019","tag":["vue","lightbox","javascript"]},"content":{"largeImg":"static/images/projects/lightbox.png","title":"lightbox","topContent":["Using vue js to create a lightbox with vue transitions to create a fade effect one the slider is in action. Making use the vue syntax to loop through an array of objects that holds the lightbox data. Using click events and basic logic to move next and prev throug the slider."],"titleTwo":"code used","code":["vue","sass","javascript","html"],"titleThree":"links","links":[{"link":"https://medium.com/js-dojo/how-to-create-a-vue-js-lightbox-8554a88aae7a","text":"medium blog"}]}}]};

/***/ })

/******/ });
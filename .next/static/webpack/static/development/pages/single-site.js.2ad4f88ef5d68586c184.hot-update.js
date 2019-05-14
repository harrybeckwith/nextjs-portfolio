webpackHotUpdate("static/development/pages/single-site.js",{

/***/ "./pages/single-site.js":
/*!******************************!*\
  !*** ./pages/single-site.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _static_content_sites_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/content/sites.json */ "./static/content/sites.json");
var _static_content_sites_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../static/content/sites.json */ "./static/content/sites.json", 1);







var _jsxFileName = "/Users/harry.beckwith/Desktop/port/pages/single-site.js";




var SingleSite =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(SingleSite, _React$Component);

  function SingleSite() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SingleSite);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SingleSite)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      sites: _static_content_sites_json__WEBPACK_IMPORTED_MODULE_9__,
      content: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SingleSite, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState({
        content: this.state.sites.main[this.props.url.query.current].content
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "overview",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "overview__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "overview__img",
        style: {
          backgroundImage: "url(".concat(this.state.content.largeImg, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "overview__content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "overview__title title--md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, this.state.content.title), this.state.content.topContent.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
          key: index,
          href: item,
          className: "overview__text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, item);
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "overview__title--md title--md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, this.state.content.titleTwo), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        className: "overview__code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, this.state.content.code.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
          key: index,
          className: "overview__code__item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "- ", item);
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "overview__title--md title--md",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, this.state.content.titleThree), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "overview__links",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, this.state.content.links.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
          key: index,
          href: item.link,
          target: "_blank",
          className: "overview__links__link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, item.text);
      }))))));
    }
  }]);

  return SingleSite;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SingleSite);

/***/ })

})
//# sourceMappingURL=single-site.js.2ad4f88ef5d68586c184.hot-update.js.map
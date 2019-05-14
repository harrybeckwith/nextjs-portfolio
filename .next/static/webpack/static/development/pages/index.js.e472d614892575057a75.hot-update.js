webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
var _this = undefined,
    _jsxFileName = "/Users/harry.beckwith/Desktop/port/pages/index.js";




var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    class: "home__img",
    src: "/static/images/gallery/croatia/4.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overview__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overview__img",
    style: {
      backgroundImage: "url(".concat(_this.state.content.largeImg, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overview__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "overview__title title--md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, _this.state.content.title), _this.state.content.topContent.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: index,
      href: item,
      className: "overview__text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, item);
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "overview__title--md title--md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _this.state.content.titleTwo), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "overview__code",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, _this.state.content.code.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      className: "overview__code__item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "- ", item);
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "overview__title--md title--md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, _this.state.content.titleThree), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "overview__links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, _this.state.content.links.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      key: index,
      href: item.link,
      target: "_blank",
      className: "overview__links__link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, item.text);
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.e472d614892575057a75.hot-update.js.map
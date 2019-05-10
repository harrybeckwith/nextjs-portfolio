webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Front.js":
/*!*****************************!*\
  !*** ./components/Front.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/harry.beckwith/Desktop/naomi-port/components/Front.js";


var Front = function Front(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "front__card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "front__img",
    src: "".concat(props.info.thumbNail),
    alt: "",
    onClick: function onClick() {
      return props.cardClick(props.index);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "front__content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text__sm text__light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.info.date), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title--md title__underline__sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.info.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "front__card__group text__light text__sm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.info.tag.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, item);
  }).reduce(function (prev, curr) {
    return [prev, ', ', curr];
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Front);

/***/ })

})
//# sourceMappingURL=index.js.464f7977901e92539f7f.hot-update.js.map
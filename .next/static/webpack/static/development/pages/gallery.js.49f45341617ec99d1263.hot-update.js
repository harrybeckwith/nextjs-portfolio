webpackHotUpdate("static/development/pages/gallery.js",{

/***/ "./pages/gallery.js":
/*!**************************!*\
  !*** ./pages/gallery.js ***!
  \**************************/
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
/* harmony import */ var _styles_gallery_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/gallery.scss */ "./styles/gallery.scss");
/* harmony import */ var _styles_gallery_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_gallery_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var _static_gallery_london__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../static/gallery/london */ "./static/gallery/london.js");
/* harmony import */ var _static_gallery_croatia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../static/gallery/croatia */ "./static/gallery/croatia.js");







var _jsxFileName = "/Users/harry.beckwith/Desktop/port/pages/gallery.js";






var Gallery =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Gallery, _React$Component);

  function Gallery() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Gallery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Gallery)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      gallery: _static_gallery_london__WEBPACK_IMPORTED_MODULE_10__["default"],
      current: 0,
      active: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "imageClick", function (current) {
      _this.setState({
        current: current,
        active: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "hideLb", function () {
      _this.setState({
        active: false
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "next", function () {
      if (_this.state.current < _this.state.gallery.length - 1) {
        _this.setState({
          current: _this.state.current + 1
        });
      } else {
        _this.setState({
          current: 0
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "prev", function () {
      if (_this.state.current > 0) {
        _this.setState({
          current: _this.state.current - 1
        });
      } else {
        _this.setState({
          current: _this.state.gallery.length - 1
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "changeGallery", function (name) {
      if (name === 'london') {
        _this.setState({
          gallery: _static_gallery_london__WEBPACK_IMPORTED_MODULE_10__["default"]
        });
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Gallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "lightbox__bg ".concat(this.state.active ? 'show' : 'hide'),
        onClick: this.hideLb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "lightbox__btns",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "btn btn--ldn",
        onClick: function onClick() {
          return _this2.changeGallery('london');
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "London"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "btn btn--berlin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Berlin"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "btn btn--croatia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Croatia"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "btn btn--croatia",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Corsica")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "gallery",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "thumbnails",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, this.state.gallery.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "thumbnails__thumbnail",
          style: {
            backgroundImage: "url(".concat(item.thumbnail, ")")
          },
          key: index,
          onClick: function onClick() {
            return _this2.imageClick(index);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        });
      })))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "".concat(this.state.active ? 'show' : 'hide'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "lightbox__close",
        src: "/lightbox/close.svg",
        onClick: this.hideLb,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "lightbox__arrow lightbox__arrow--prev",
        src: "/lightbox/prev.svg",
        onClick: this.prev,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "lightbox__img ".concat(this.state.active ? 'show' : 'hide'),
        src: this.state.gallery[this.state.current].lightbox,
        alt: this.state.current.alt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
        className: "lightbox__caption",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, this.state.gallery[this.state.current].caption), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "lightbox__arrow lightbox__arrow--next",
        src: "/lightbox/next.svg",
        onClick: this.next,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Gallery);

/***/ }),

/***/ "./static/gallery/croatia.js":
/*!***********************************!*\
  !*** ./static/gallery/croatia.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var gallery = [{
  thumbnail: 'static/images/blog/example1.jpg',
  lightbox: 'static/images/blog/example1.jpg',
  alt: "img",
  caption: 'cro'
}, {
  thumbnail: 'static/images/blog/example1.jpg',
  lightbox: 'static/images/blog/example1.jpg',
  alt: "img",
  caption: '2'
}, {
  thumbnail: 'static/images/blog/example1.jpg',
  lightbox: 'static/images/blog/example1.jpg',
  alt: "img",
  caption: '1'
}, {
  thumbnail: 'static/images/blog/example1.jpg',
  lightbox: 'static/images/blog/example1.jpg',
  alt: "img",
  caption: '2'
}, {
  thumbnail: 'static/images/blog/example1.jpg',
  lightbox: 'static/images/blog/example1.jpg',
  alt: "img",
  caption: '1'
}, {
  thumbnail: 'static/images/blog/example1.jpg',
  lightbox: 'static/images/blog/example1.jpg',
  alt: "img",
  caption: '2'
}, {
  thumbnail: 'static/images/blog/example1.jpg',
  lightbox: 'static/images/blog/example1.jpg',
  alt: "img",
  caption: '1'
}, {
  thumbnail: 'static/images/blog/example1.jpg',
  lightbox: 'static/images/blog/example1.jpg',
  alt: "img",
  caption: '2'
}, {
  thumbnail: 'static/images/blog/example1.jpg',
  lightbox: 'static/images/blog/example1.jpg',
  alt: "img",
  caption: '2'
}];
/* harmony default export */ __webpack_exports__["default"] = (gallery);

/***/ })

})
//# sourceMappingURL=gallery.js.49f45341617ec99d1263.hot-update.js.map
webpackHotUpdate("static/development/pages/pricing.js",{

/***/ "./components/ProductCard.js":
/*!***********************************!*\
  !*** ./components/ProductCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/Nhat/Desktop/Github/scale/components/ProductCard.js";



var ProductCard =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ProductCard, _React$Component);

  function ProductCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProductCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ProductCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProductCard, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {}
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "jsx-317366000" + " " + "product-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-317366000" + " " + "product-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, this.props.productName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-317366000" + " " + "product-des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.props.productDes), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-317366000",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.featureList.map(function (feature) {
        return feature.type == _this.props.activeType && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: feature.id,
          className: "jsx-317366000",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-317366000" + " " + "l-col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "jsx-317366000" + " " + "feature-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, feature.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-317366000",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, feature.featureDes)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-317366000" + " " + "r-col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-317366000" + " " + "dark-btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, feature.pricing)));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "317366000",
        __self: this
      }, ".dark-btn.jsx-317366000{border-radius:20px;background-color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:20px;width:200px;text-transform:uppercase;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;color:white;-webkit-text-decoration:none;text-decoration:none;}.dark-btn.jsx-317366000 a.jsx-317366000:hover{box-shadow:0 10px 20px rgba(0,0,0,0.25);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);color:greenyellow;}.product-wrapper.jsx-317366000{margin:20px;padding:0 10px;color:black;background-color:white;box-shadow:5px 10px 10px rgba(0,0,0,0.25);border-radius:16px;font-size:16px;display:grid;grid-template-rows:1fr 1fr 3fr;font-weight:600;overflow:hidden;}.product-wrapper.jsx-317366000 h4.jsx-317366000{font-size:26px;}.feature-name.jsx-317366000{background-color:#e23e7c;border-radius:20px;padding:5px;text-transform:uppercase;color:white;font-weight:700;font-size:12px;}.product-wrapper.jsx-317366000 li.jsx-317366000{display:grid;grid-template-columns:2fr 3fr;padding:0;margin-top:10px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);}.r-col.jsx-317366000{padding-left:30px;}.product-wrapper.jsx-317366000 ul.jsx-317366000,.product-wrapper.jsx-317366000 p.jsx-317366000{padding:0;margin:0;color:#585858;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUdnQyxBQWF3QixBQUsvQixBQWNHLEFBR1UsQUFVWixBQVFLLEFBSVIsVUFDRCxFQXZDTSxDQTJCZSxFQWJoQyxHQXFCQSxDQXJEeUIsQUEwRFQsTUF2QkssRUFoQlAsTUF3Q2QsTUF2Q3lCLENBUEssRUFaZixDQTZDSCxDQVZFLFNBV0ksR0FWUyxNQWhCb0IsT0EyQmYsWUFWbEIsWUFDSSxXQWpCRyxLQWtCSixPQXRDSCxPQXFCRyxDQWtCakIsSUF0Q2MsUUFXTSxFQVVMLEVBcEJZLFdBcUJNLEdBVmpDLFdBVnlCLGlCQXFCUCxFQXVCK0IsY0F0Qi9CLGdCQUNsQixrREF0QmlCLGVBQ0gsQ0EyQ2QsV0ExQ3VCLGtEQUN2QiIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9zY2FsZS9jb21wb25lbnRzL1Byb2R1Y3RDYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBQcm9kdWN0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHt9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3Qtd3JhcHBlclwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+e3RoaXMucHJvcHMucHJvZHVjdE5hbWV9PC9oND5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXNcIj57dGhpcy5wcm9wcy5wcm9kdWN0RGVzfTwvcD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmZlYXR1cmVMaXN0Lm1hcChcbiAgICAgICAgICAgIGZlYXR1cmUgPT5cbiAgICAgICAgICAgICAgZmVhdHVyZS50eXBlID09IHRoaXMucHJvcHMuYWN0aXZlVHlwZSAmJiAoXG4gICAgICAgICAgICAgICAgPGxpIGtleT17ZmVhdHVyZS5pZH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImwtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZlYXR1cmUtbmFtZVwiPntmZWF0dXJlLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2ZlYXR1cmUuZmVhdHVyZURlc308L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwici1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGFyay1idG5cIj57ZmVhdHVyZS5wcmljaW5nfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmRhcmstYnRuIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRhcmstYnRuIGE6aG92ZXIge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XG4gICAgICAgICAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXdyYXBwZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiA1cHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAzZnI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvZHVjdC13cmFwcGVyIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZlYXR1cmUtbmFtZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzZTdjO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDNmcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMS4ycyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgdWwsXG4gICAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogIzU4NTg1ODtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdENhcmQ7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/ProductCard.js */"));
    }
  }]);

  return ProductCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=pricing.js.933c6c6b08181edf0aef.hot-update.js.map
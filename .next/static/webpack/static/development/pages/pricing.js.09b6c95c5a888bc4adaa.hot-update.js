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
        className: "jsx-3790039087" + " " + "product-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        className: "jsx-3790039087" + " " + "product-name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, this.props.productName), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        className: "jsx-3790039087" + " " + "product-des",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, this.props.productDes), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: "jsx-3790039087",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, this.props.featureList.map(function (feature) {
        return feature.type == _this.props.activeType && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: feature.id,
          className: "jsx-3790039087",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-3790039087" + " " + "l-col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "jsx-3790039087" + " " + "feature-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, feature.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-3790039087",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, feature.featureDes)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "jsx-3790039087" + " " + "r-col",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "jsx-3790039087" + " " + "dark-btn",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, feature.pricing)));
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3790039087",
        __self: this
      }, ".dark-btn.jsx-3790039087 a.jsx-3790039087{font-size:22px;border-radius:20px;background-color:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:30px;width:200px;text-transform:uppercase;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;cursor:pointer;color:white;-webkit-text-decoration:none;text-decoration:none;}.dark-btn.jsx-3790039087 a.jsx-3790039087:hover{box-shadow:0 10px 20px rgba(0,0,0,0.25);-webkit-transform:translateY(-10px);-ms-transform:translateY(-10px);transform:translateY(-10px);color:greenyellow;}.product-wrapper.jsx-3790039087{margin:20px;padding:0 10px;color:black;background-color:white;box-shadow:5px 10px 10px rgba(0,0,0,0.25);border-radius:16px;font-size:16px;display:grid;grid-template-rows:1fr 1fr 3fr;font-weight:600;overflow:hidden;}.product-wrapper.jsx-3790039087 h4.jsx-3790039087{font-size:26px;}.feature-name.jsx-3790039087{background-color:#e23e7c;border-radius:20px;padding:5px;text-transform:uppercase;color:white;font-weight:700;font-size:12px;}.product-wrapper.jsx-3790039087 li.jsx-3790039087{display:grid;grid-template-columns:2fr 3fr;padding:0;margin-top:10px;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);}.r-col.jsx-3790039087{padding-left:30px;}.product-wrapper.jsx-3790039087 ul.jsx-3790039087,.product-wrapper.jsx-3790039087 p.jsx-3790039087{padding:0;margin:0;color:#585858;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUc0QixBQWM0QixBQUsvQixBQWNHLEFBR1UsQUFVWixBQVFLLEFBSVIsVUFDRCxFQXZDTSxDQTJCZSxFQTlDWCxBQWlDckIsR0FxQkEsQ0FLZ0IsTUF2QkssRUFoQlAsTUF3Q2QsQ0EzRHlCLEtBb0JBLENBUEssR0FpQ2xCLENBVkUsU0FXSSxHQVZTLENBcENaLEtBb0JnQyxPQTJCZixZQVZsQixZQUNJLFdBakJHLEtBa0JKLGNBakJBLENBa0JqQixPQXZDYyxLQVlNLEVBVUwsS0FyQkQsUUFzQm1CLEdBVmpDLENBWDJCLHlCQUNGLEVBcUJQLEVBdUIrQixjQXRCL0IsZ0JBQ2xCLGlFQXRCaUIsQ0E0Q2pCLGNBM0NjLFlBQ1Msa0RBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJvZHVjdENhcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNsYXNzIFByb2R1Y3RDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge31cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC13cmFwcGVyXCI+XG4gICAgICAgIDxoNCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj57dGhpcy5wcm9wcy5wcm9kdWN0TmFtZX08L2g0PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRlc1wiPnt0aGlzLnByb3BzLnByb2R1Y3REZXN9PC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RoaXMucHJvcHMuZmVhdHVyZUxpc3QubWFwKFxuICAgICAgICAgICAgZmVhdHVyZSA9PlxuICAgICAgICAgICAgICBmZWF0dXJlLnR5cGUgPT0gdGhpcy5wcm9wcy5hY3RpdmVUeXBlICYmIChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtmZWF0dXJlLmlkfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmVhdHVyZS1uYW1lXCI+e2ZlYXR1cmUudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8cD57ZmVhdHVyZS5mZWF0dXJlRGVzfTwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyLWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXJrLWJ0blwiPntmZWF0dXJlLnByaWNpbmd9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZGFyay1idG4gYSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kYXJrLWJ0biBhOmhvdmVyIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICAgICAgICAgICAgY29sb3I6IGdyZWVueWVsbG93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC13cmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgM2ZyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mZWF0dXJlLW5hbWUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyM2U3YztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucHJvZHVjdC13cmFwcGVyIGxpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAzZnI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDEuMnMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuci1jb2wge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC13cmFwcGVyIHVsLFxuICAgICAgICAgIC5wcm9kdWN0LXdyYXBwZXIgcCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6ICM1ODU4NTg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RDYXJkO1xuIl19 */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/ProductCard.js */"));
    }
  }]);

  return ProductCard;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProductCard);

/***/ })

})
//# sourceMappingURL=pricing.js.09b6c95c5a888bc4adaa.hot-update.js.map
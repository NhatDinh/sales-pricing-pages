webpackHotUpdate("static/development/pages/pricing.js",{

/***/ "./components/PricingToggle.js":
/*!*************************************!*\
  !*** ./components/PricingToggle.js ***!
  \*************************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductCard */ "./components/ProductCard.js");






var _jsxFileName = "/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js";





var PricingToggle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PricingToggle, _React$Component);

  function PricingToggle(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PricingToggle);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PricingToggle).call(this, props));
    _this.state = {
      showStandard: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PricingToggle, [{
    key: "handleClick",
    value: function handleClick() {
      var _this2 = this;

      this.setState(function (state) {
        return {
          showStandard: !_this2.state.showStandard
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this.state.selected);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-429699588" + " " + "m-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h2", {
        className: "jsx-429699588",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "PLANS"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-429699588" + " " + "center-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        onClick: this.handleClick,
        className: "jsx-429699588" + " " + "pricing-toggle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-429699588" + " " + ((this.state.showStandard ? "standard standardActive" : "standard") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Standard"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        className: "jsx-429699588" + " " + ((this.state.showStandard ? "enterprise" : "enterprise enterpriseActive") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Enterprise"))), this.state.selected, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "jsx-429699588" + " " + "pc-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        type: this.state.showStandard,
        productName: "Computer Vision",
        productDes: "High level understanding from images or videos.",
        featureList: [{
          id: 1,
          title: "Video Annotation",
          pricing: "Contact Sales",
          type: "Enterprise",
          featureDes: "Human-powered video annotation by API"
        }, {
          id: 2,
          title: "Semantic Segmentation",
          pricing: "$6.40 / IMAGE",
          type: "Standard",
          featureDes: "Human-powered pixel-level image segmentation and annotation by API"
        }, {
          id: 3,
          title: "Sensor Fusion",
          pricing: "Contact Sales",
          type: "Enterprise",
          featureDes: "All the data you need to build 3D perception using LiDAR, camera, and radar"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
        productName: "Natural Language",
        productDes: "Processing of text in order to extract abstract syntactic and semantic content.",
        featureList: [{
          id: 1,
          title: "Ocr Transcription",
          pricing: "$0.12 / INVOICE + $0.08 / ANNOTATION",
          featureDes: "Invoice, Menu, and Form Transcription"
        }, {
          id: 2,
          title: "Text Categorization",
          pricing: "$0.08 / CATEGORIZATION",
          featureDes: "Content Moderation, Data Tagging, Other"
        }, {
          id: 3,
          title: "Comparison",
          pricing: "$0.08 / COMPARISON",
          featureDes: "Deduplication, A/B Comparisons, Others"
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "429699588",
        __self: this
      }, ".pc-wrapper.jsx-429699588{display:grid;grid-template-columns:repeat(2,1fr);}.pricing-toggle.jsx-429699588{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:600px;height:60px;background:white;border:1px solid #c4c4c4;border-radius:40px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;display:grid;grid-template-columns:repeat(2,1fr);padding:0 10px;}.pricing-toggle.jsx-429699588 span.jsx-429699588{font-size:26px;font-weight:400;text-transform:uppercase;}.enterprise.jsx-429699588{padding:5px 20px;background-color:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);}.enterpriseActive.jsx-429699588{border:1px solid black;background:#fd62e9;color:white;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);box-shadow:2px 5px 5px rgba(0,0,0,0.25);}.standard.jsx-429699588{padding:5px 20px;background-color:white;border-radius:40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:1.2s cubic-bezier(0.2,0.8,0.2,1);transition:1.2s cubic-bezier(0.2,0.8,0.2,1);}.standardActive.jsx-429699588{border:1px solid black;background-color:#fd62e9;color:white;box-shadow:2px 5px 5px rgba(0,0,0,0.25);}h2.jsx-429699588{color:black;text-align:center;font-size:40px;font-weight:300;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9OaGF0L0Rlc2t0b3AvR2l0aHViL3NjYWxlL2NvbXBvbmVudHMvUHJpY2luZ1RvZ2dsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR29CLEFBRzBCLEFBSU0sQUFhSixBQU1FLEFBV00sQUFRTixBQVdNLEFBT1gsWUFDTSxDQTVEbUIsRUFpQnJCLEVBTU8sQUFtQkEsTUFSSixBQW1CTSxPQVFWLENBM0NVLFNBTU4sQUFtQkEsRUFSUCxHQTJCSSxHQVJKLENBckRkLEtBbUNpRCxFQWpCakQsR0FNZSxBQW1CQSxDQVc4QixDQVE3QyxnQ0EzRGMsT0FvRGQsS0FuRGMsWUFDSyxnQkFvQk0sQUFtQkEsQ0F0Q0UsZ0JBOEJrQixTQTdCeEIsbUJBQ0ksWUE2QnpCLDBDQVhxQixBQW1CQSw2Q0FwQ04sYUFDd0IsbUNBaUJ0QixBQW1CQSxDQW5DQSxjQWlCZ0MsQUFtQkEsQ0FuQ2pELCtGQWlCQSxBQW1CQSIsImZpbGUiOiIvVXNlcnMvTmhhdC9EZXNrdG9wL0dpdGh1Yi9zY2FsZS9jb21wb25lbnRzL1ByaWNpbmdUb2dnbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIi4vUHJvZHVjdENhcmRcIjtcblxuY2xhc3MgUHJpY2luZ1RvZ2dsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IHNob3dTdGFuZGFyZDogZmFsc2UgfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoe1xuICAgICAgc2hvd1N0YW5kYXJkOiAhdGhpcy5zdGF0ZS5zaG93U3RhbmRhcmRcbiAgICB9KSk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zZWxlY3RlZCk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tY29udGFpbmVyXCI+XG4gICAgICAgIDxoMj5QTEFOUzwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNpbmctdG9nZ2xlXCIgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuc2hvd1N0YW5kYXJkID8gXCJzdGFuZGFyZCBzdGFuZGFyZEFjdGl2ZVwiIDogXCJzdGFuZGFyZFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU3RhbmRhcmRcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zaG93U3RhbmRhcmRcbiAgICAgICAgICAgICAgICAgID8gXCJlbnRlcnByaXNlXCJcbiAgICAgICAgICAgICAgICAgIDogXCJlbnRlcnByaXNlIGVudGVycHJpc2VBY3RpdmVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEVudGVycHJpc2VcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNlbGVjdGVkfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBjLXdyYXBwZXJcIj5cbiAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgIHR5cGU9e3RoaXMuc3RhdGUuc2hvd1N0YW5kYXJkfVxuICAgICAgICAgICAgcHJvZHVjdE5hbWU9XCJDb21wdXRlciBWaXNpb25cIlxuICAgICAgICAgICAgcHJvZHVjdERlcz1cIkhpZ2ggbGV2ZWwgdW5kZXJzdGFuZGluZyBmcm9tIGltYWdlcyBvciB2aWRlb3MuXCJcbiAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJWaWRlbyBBbm5vdGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZzogXCJDb250YWN0IFNhbGVzXCIsXG4gICAgICAgICAgICAgICAgdHlwZTogXCJFbnRlcnByaXNlXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZURlczogXCJIdW1hbi1wb3dlcmVkIHZpZGVvIGFubm90YXRpb24gYnkgQVBJXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlbWFudGljIFNlZ21lbnRhdGlvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiJDYuNDAgLyBJTUFHRVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiU3RhbmRhcmRcIixcbiAgICAgICAgICAgICAgICBmZWF0dXJlRGVzOlxuICAgICAgICAgICAgICAgICAgXCJIdW1hbi1wb3dlcmVkIHBpeGVsLWxldmVsIGltYWdlIHNlZ21lbnRhdGlvbiBhbmQgYW5ub3RhdGlvbiBieSBBUElcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU2Vuc29yIEZ1c2lvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiQ29udGFjdCBTYWxlc1wiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiRW50ZXJwcmlzZVwiLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVEZXM6XG4gICAgICAgICAgICAgICAgICBcIkFsbCB0aGUgZGF0YSB5b3UgbmVlZCB0byBidWlsZCAzRCBwZXJjZXB0aW9uIHVzaW5nIExpREFSLCBjYW1lcmEsIGFuZCByYWRhclwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgIHByb2R1Y3ROYW1lPVwiTmF0dXJhbCBMYW5ndWFnZVwiXG4gICAgICAgICAgICBwcm9kdWN0RGVzPVwiUHJvY2Vzc2luZyBvZiB0ZXh0IGluIG9yZGVyIHRvIGV4dHJhY3QgYWJzdHJhY3Qgc3ludGFjdGljIGFuZCBzZW1hbnRpYyBjb250ZW50LlwiXG4gICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiT2NyIFRyYW5zY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICBwcmljaW5nOiBcIiQwLjEyIC8gSU5WT0lDRSArICQwLjA4IC8gQU5OT1RBVElPTlwiLFxuICAgICAgICAgICAgICAgIGZlYXR1cmVEZXM6IFwiSW52b2ljZSwgTWVudSwgYW5kIEZvcm0gVHJhbnNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUZXh0IENhdGVnb3JpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgcHJpY2luZzogXCIkMC4wOCAvIENBVEVHT1JJWkFUSU9OXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZURlczogXCJDb250ZW50IE1vZGVyYXRpb24sIERhdGEgVGFnZ2luZywgT3RoZXJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ29tcGFyaXNvblwiLFxuICAgICAgICAgICAgICAgIHByaWNpbmc6IFwiJDAuMDggLyBDT01QQVJJU09OXCIsXG4gICAgICAgICAgICAgICAgZmVhdHVyZURlczogXCJEZWR1cGxpY2F0aW9uLCBBL0IgQ29tcGFyaXNvbnMsIE90aGVyc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wYy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJpY2luZy10b2dnbGUge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA2MDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2M0YzRjNDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5wcmljaW5nLXRvZ2dsZSBzcGFuIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbnRlcnByaXNlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDEuMnMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbnRlcnByaXNlQWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZkNjJlOTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDEuMnMgY3ViaWMtYmV6aWVyKDAuMiwgMC44LCAwLjIsIDEpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMnB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc3RhbmRhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogMS4ycyBjdWJpYy1iZXppZXIoMC4yLCAwLjgsIDAuMiwgMSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN0YW5kYXJkQWN0aXZlIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkNjJlOTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDJweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByaWNpbmdUb2dnbGU7XG4iXX0= */\n/*@ sourceURL=/Users/Nhat/Desktop/Github/scale/components/PricingToggle.js */"));
    }
  }]);

  return PricingToggle;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PricingToggle);

/***/ })

})
//# sourceMappingURL=pricing.js.62dabfac8e0434095d94.hot-update.js.map
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./comps/UploadForm.js":
/*!*****************************!*\
  !*** ./comps/UploadForm.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ \"./comps/ProgressBar.js\");\n/* harmony import */ var _styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/UploadForm.module.css */ \"./styles/UploadForm.module.css\");\n/* harmony import */ var _styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/hayden_west/Documents/Projects/FireGram/comps/UploadForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar UploadForm = function UploadForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var types = [\"image/png\", \"image/jpeg\"];\n\n  var changeHandler = function changeHandler(e) {\n    var selected = e.target.files[0]; // console.log(selected);\n\n    if (selected && types.includes(selected.type)) {\n      setFile(selected);\n      setError(null);\n    } else {\n      setFile(null);\n      setError(\"Please select an Image file (png or jpeg)\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: (_styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().form),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      className: (_styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n      type: \"file\",\n      onChange: changeHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().plus),\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"output\",\n      children: [error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"error\",\n        children: error\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 18\n      }, _this) : null, file ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"file\",\n        children: file.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this) : null, file ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.default, {\n        file: file,\n        setFile: setFile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UploadForm, \"g4In/gal2dmIIDovhnep1NQJW40=\");\n\n_c = UploadForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvVXBsb2FkRm9ybS5qcz8zZmYyIl0sIm5hbWVzIjpbIlVwbG9hZEZvcm0iLCJ1c2VTdGF0ZSIsImZpbGUiLCJzZXRGaWxlIiwiZXJyb3IiLCJzZXRFcnJvciIsInR5cGVzIiwiY2hhbmdlSGFuZGxlciIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiaW5jbHVkZXMiLCJ0eXBlIiwic3R5bGVzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDQ0MsK0NBQVEsQ0FBQyxJQUFELENBRFQ7QUFBQSxNQUNoQkMsSUFEZ0I7QUFBQSxNQUNWQyxPQURVOztBQUFBLG1CQUVHRiwrQ0FBUSxDQUFDLElBQUQsQ0FGWDtBQUFBLE1BRWhCRyxLQUZnQjtBQUFBLE1BRVRDLFFBRlM7O0FBSXZCLE1BQU1DLEtBQUssR0FBRyxDQUFDLFdBQUQsRUFBYyxZQUFkLENBQWQ7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0IsUUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBZixDQUQyQixDQUUzQjs7QUFFQSxRQUFJRixRQUFRLElBQUlILEtBQUssQ0FBQ00sUUFBTixDQUFlSCxRQUFRLENBQUNJLElBQXhCLENBQWhCLEVBQStDO0FBQzdDVixhQUFPLENBQUNNLFFBQUQsQ0FBUDtBQUNBSixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsS0FIRCxNQUdPO0FBQ0xGLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUUsY0FBUSxDQUFDLDJDQUFELENBQVI7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsc0JBQ0U7QUFBTSxhQUFTLEVBQUVTLDJFQUFqQjtBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFQSw0RUFEYjtBQUVFLFVBQUksRUFBQyxNQUZQO0FBR0UsY0FBUSxFQUFFUDtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQU1FO0FBQU0sZUFBUyxFQUFFTywyRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQU9FO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQSxpQkFDR1YsS0FBSyxnQkFBRztBQUFLLGlCQUFTLEVBQUMsT0FBZjtBQUFBLGtCQUF3QkE7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQTBDLElBRGxELEVBRUdGLElBQUksZ0JBQUc7QUFBSyxpQkFBUyxFQUFDLE1BQWY7QUFBQSxrQkFBdUJBLElBQUksQ0FBQ2E7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQTZDLElBRnBELEVBR0diLElBQUksZ0JBQUcsOERBQUMsaURBQUQ7QUFBYSxZQUFJLEVBQUVBLElBQW5CO0FBQXlCLGVBQU8sRUFBRUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFILEdBQW1ELElBSDFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FsQ0Q7O0dBQU1ILFU7O0tBQUFBLFU7QUFvQ04sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9jb21wcy9VcGxvYWRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9ncmVzc2JhciBmcm9tIFwiLi9Qcm9ncmVzc0JhclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL1VwbG9hZEZvcm0ubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBVcGxvYWRGb3JtID0gKCkgPT4ge1xuICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCB0eXBlcyA9IFtcImltYWdlL3BuZ1wiLCBcImltYWdlL2pwZWdcIl07XG5cbiAgY29uc3QgY2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XG4gICAgbGV0IHNlbGVjdGVkID0gZS50YXJnZXQuZmlsZXNbMF07XG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWQpO1xuXG4gICAgaWYgKHNlbGVjdGVkICYmIHR5cGVzLmluY2x1ZGVzKHNlbGVjdGVkLnR5cGUpKSB7XG4gICAgICBzZXRGaWxlKHNlbGVjdGVkKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRGaWxlKG51bGwpO1xuICAgICAgc2V0RXJyb3IoXCJQbGVhc2Ugc2VsZWN0IGFuIEltYWdlIGZpbGUgKHBuZyBvciBqcGVnKVwiKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn1cbiAgICAgID48L2lucHV0PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucGx1c30+Kzwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3V0cHV0XCI+XG4gICAgICAgIHtlcnJvciA/IDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj57ZXJyb3J9PC9kaXY+IDogbnVsbH1cbiAgICAgICAge2ZpbGUgPyA8ZGl2IGNsYXNzTmFtZT1cImZpbGVcIj57ZmlsZS5uYW1lfTwvZGl2PiA6IG51bGx9XG4gICAgICAgIHtmaWxlID8gPFByb2dyZXNzYmFyIGZpbGU9e2ZpbGV9IHNldEZpbGU9e3NldEZpbGV9IC8+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZEZvcm07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./comps/UploadForm.js\n");

/***/ })

});
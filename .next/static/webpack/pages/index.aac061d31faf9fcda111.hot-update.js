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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProgressBar */ \"./comps/ProgressBar.js\");\n/* harmony import */ var _styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/UploadForm.module.css */ \"./styles/UploadForm.module.css\");\n/* harmony import */ var _styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/hayden_west/Documents/Projects/FireGram/comps/UploadForm.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar UploadForm = function UploadForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      file = _useState[0],\n      setFile = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var types = [\"image/png\", \"image/jpeg\"];\n\n  var changeHandler = function changeHandler(e) {\n    var selected = e.target.files[0]; // console.log(selected);\n\n    if (selected && types.includes(selected.type)) {\n      setFile(selected);\n      setError(null);\n    } else {\n      setFile(null);\n      setError(\"Please select an Image file (png or jpeg)\");\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n    className: \"form\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n      className: (_styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n      type: \"file\",\n      onChange: changeHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      className: (_styles_UploadForm_module_css__WEBPACK_IMPORTED_MODULE_3___default().plus),\n      children: \"+\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"output\",\n      children: [error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"error\",\n        children: error\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 18\n      }, _this) : null, file ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"file\",\n        children: file.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, _this) : null, file ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProgressBar__WEBPACK_IMPORTED_MODULE_2__.default, {\n        file: file,\n        setFile: setFile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(UploadForm, \"g4In/gal2dmIIDovhnep1NQJW40=\");\n\n_c = UploadForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UploadForm);\n\nvar _c;\n\n$RefreshReg$(_c, \"UploadForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcHMvVXBsb2FkRm9ybS5qcz8zZmYyIl0sIm5hbWVzIjpbIlVwbG9hZEZvcm0iLCJ1c2VTdGF0ZSIsImZpbGUiLCJzZXRGaWxlIiwiZXJyb3IiLCJzZXRFcnJvciIsInR5cGVzIiwiY2hhbmdlSGFuZGxlciIsImUiLCJzZWxlY3RlZCIsInRhcmdldCIsImZpbGVzIiwiaW5jbHVkZXMiLCJ0eXBlIiwic3R5bGVzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxrQkFDQ0MsK0NBQVEsQ0FBQyxJQUFELENBRFQ7QUFBQSxNQUNoQkMsSUFEZ0I7QUFBQSxNQUNWQyxPQURVOztBQUFBLG1CQUVHRiwrQ0FBUSxDQUFDLElBQUQsQ0FGWDtBQUFBLE1BRWhCRyxLQUZnQjtBQUFBLE1BRVRDLFFBRlM7O0FBSXZCLE1BQU1DLEtBQUssR0FBRyxDQUFDLFdBQUQsRUFBYyxZQUFkLENBQWQ7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQU87QUFDM0IsUUFBSUMsUUFBUSxHQUFHRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBZixDQUQyQixDQUUzQjs7QUFFQSxRQUFJRixRQUFRLElBQUlILEtBQUssQ0FBQ00sUUFBTixDQUFlSCxRQUFRLENBQUNJLElBQXhCLENBQWhCLEVBQStDO0FBQzdDVixhQUFPLENBQUNNLFFBQUQsQ0FBUDtBQUNBSixjQUFRLENBQUMsSUFBRCxDQUFSO0FBQ0QsS0FIRCxNQUdPO0FBQ0xGLGFBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUUsY0FBUSxDQUFDLDJDQUFELENBQVI7QUFDRDtBQUNGLEdBWEQ7O0FBYUEsc0JBQ0U7QUFBTSxhQUFTLEVBQUMsTUFBaEI7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRVMsNEVBRGI7QUFFRSxVQUFJLEVBQUMsTUFGUDtBQUdFLGNBQVEsRUFBRVA7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFNLGVBQVMsRUFBRU8sMkVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsZUFPRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQUEsaUJBQ0dWLEtBQUssZ0JBQUc7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQSxrQkFBd0JBO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUEwQyxJQURsRCxFQUVHRixJQUFJLGdCQUFHO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsa0JBQXVCQSxJQUFJLENBQUNhO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUE2QyxJQUZwRCxFQUdHYixJQUFJLGdCQUFHLDhEQUFDLGlEQUFEO0FBQWEsWUFBSSxFQUFFQSxJQUFuQjtBQUF5QixlQUFPLEVBQUVDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSCxHQUFtRCxJQUgxRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWVELENBbENEOztHQUFNSCxVOztLQUFBQSxVO0FBb0NOLCtEQUFlQSxVQUFmIiwiZmlsZSI6Ii4vY29tcHMvVXBsb2FkRm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvZ3Jlc3NiYXIgZnJvbSBcIi4vUHJvZ3Jlc3NCYXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9VcGxvYWRGb3JtLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgVXBsb2FkRm9ybSA9ICgpID0+IHtcbiAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgdHlwZXMgPSBbXCJpbWFnZS9wbmdcIiwgXCJpbWFnZS9qcGVnXCJdO1xuXG4gIGNvbnN0IGNoYW5nZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgIGxldCBzZWxlY3RlZCA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkKTtcblxuICAgIGlmIChzZWxlY3RlZCAmJiB0eXBlcy5pbmNsdWRlcyhzZWxlY3RlZC50eXBlKSkge1xuICAgICAgc2V0RmlsZShzZWxlY3RlZCk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RmlsZShudWxsKTtcbiAgICAgIHNldEVycm9yKFwiUGxlYXNlIHNlbGVjdCBhbiBJbWFnZSBmaWxlIChwbmcgb3IganBlZylcIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxuICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgIG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfVxuICAgICAgPjwvaW5wdXQ+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wbHVzfT4rPC9zcGFuPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdXRwdXRcIj5cbiAgICAgICAge2Vycm9yID8gPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPntlcnJvcn08L2Rpdj4gOiBudWxsfVxuICAgICAgICB7ZmlsZSA/IDxkaXYgY2xhc3NOYW1lPVwiZmlsZVwiPntmaWxlLm5hbWV9PC9kaXY+IDogbnVsbH1cbiAgICAgICAge2ZpbGUgPyA8UHJvZ3Jlc3NiYXIgZmlsZT17ZmlsZX0gc2V0RmlsZT17c2V0RmlsZX0gLz4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./comps/UploadForm.js\n");

/***/ })

});
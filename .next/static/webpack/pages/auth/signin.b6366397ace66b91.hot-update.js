"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/auth/signin",{

/***/ "./src/auth/ui-auth-header/AuthHeader.jsx":
/*!************************************************!*\
  !*** ./src/auth/ui-auth-header/AuthHeader.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthHeader: function() { return /* binding */ AuthHeader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ \"./node_modules/classnames/bind.js\");\n/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ \"./src/auth/ui-auth-header/constant.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _AuthHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AuthHeader.module.scss */ \"./src/auth/ui-auth-header/AuthHeader.module.scss\");\n/* harmony import */ var _AuthHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AuthHeader_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst cx = classnames_bind__WEBPACK_IMPORTED_MODULE_1___default().bind((_AuthHeader_module_scss__WEBPACK_IMPORTED_MODULE_5___default()));\nconst AuthHeader = ({ page })=>{\n    const isSignIn = page === \"signin\" ? true : false;\n    const message = isSignIn ? \"회원이 아니신가요?\" : \"이미 회원이신가요?\";\n    const guide = isSignIn ? \"회원 가입하기\" : \"로그인 하기\";\n    const guideLink = isSignIn ? \"signup\" : \"로그인 하기\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: cx(\"auth-header\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    src: _constant__WEBPACK_IMPORTED_MODULE_2__.LOGO_IMAGE,\n                    width: 210.583,\n                    height: 38,\n                    alt: \"Linkbrary 로고\"\n                }, void 0, false, {\n                    fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-header/AuthHeader.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-header/AuthHeader.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: cx(\"check\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: message\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-header/AuthHeader.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: guideLink,\n                        children: guide\n                    }, void 0, false, {\n                        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-header/AuthHeader.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-header/AuthHeader.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shanshan/Desktop/2-Weekly-Mission/src/auth/ui-auth-header/AuthHeader.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AuthHeader;\nvar _c;\n$RefreshReg$(_c, \"AuthHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXV0aC91aS1hdXRoLWhlYWRlci9BdXRoSGVhZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0Q7QUFDVDtBQUNGO0FBQ2lCO0FBRTlDLE1BQU1LLEtBQUtMLDJEQUFlLENBQUNJLGdFQUFNQTtBQUUxQixNQUFNRyxhQUFhLENBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQ2pDLE1BQU1DLFdBQVdELFNBQVMsV0FBVyxPQUFPO0lBQzVDLE1BQU1FLFVBQVVELFdBQVcsZUFBZTtJQUMxQyxNQUFNRSxRQUFRRixXQUFXLFlBQVk7SUFDckMsTUFBTUcsWUFBWUgsV0FBVyxXQUFXO0lBRXhDLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFXVCxHQUFHOzswQkFDakIsOERBQUNGLGtEQUFJQTtnQkFBQ1ksTUFBSzswQkFDVCw0RUFBQ2IsbURBQUtBO29CQUNKYyxLQUFLZixpREFBVUE7b0JBQ2ZnQixPQUFPO29CQUNQQyxRQUFRO29CQUNSQyxLQUFJOzs7Ozs7Ozs7OzswQkFHUiw4REFBQ047Z0JBQUlDLFdBQVdULEdBQUc7O2tDQUNqQiw4REFBQ2U7a0NBQUdWOzs7Ozs7a0NBQ0osOERBQUNQLGtEQUFJQTt3QkFBQ1ksTUFBTUg7a0NBQVlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsRUFBRTtLQXRCV0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2F1dGgvdWktYXV0aC1oZWFkZXIvQXV0aEhlYWRlci5qc3g/MjRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lcy9iaW5kXCI7XG5pbXBvcnQgeyBMT0dPX0lNQUdFIH0gZnJvbSBcIi4vY29uc3RhbnRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BdXRoSGVhZGVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IGN4ID0gY2xhc3NOYW1lcy5iaW5kKHN0eWxlcyk7XG5cbmV4cG9ydCBjb25zdCBBdXRoSGVhZGVyID0gKHsgcGFnZSB9KSA9PiB7XG4gIGNvbnN0IGlzU2lnbkluID0gcGFnZSA9PT0gXCJzaWduaW5cIiA/IHRydWUgOiBmYWxzZTtcbiAgY29uc3QgbWVzc2FnZSA9IGlzU2lnbkluID8gXCLtmozsm5DsnbQg7JWE64uI7Iug6rCA7JqUP1wiIDogXCLsnbTrr7gg7ZqM7JuQ7J207Iug6rCA7JqUP1wiO1xuICBjb25zdCBndWlkZSA9IGlzU2lnbkluID8gXCLtmozsm5Ag6rCA7J6F7ZWY6riwXCIgOiBcIuuhnOq3uOyduCDtlZjquLBcIjtcbiAgY29uc3QgZ3VpZGVMaW5rID0gaXNTaWduSW4gPyBcInNpZ251cFwiIDogXCLroZzqt7jsnbgg7ZWY6riwXCI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3goXCJhdXRoLWhlYWRlclwiKX0+XG4gICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9e0xPR09fSU1BR0V9XG4gICAgICAgICAgd2lkdGg9ezIxMC41ODN9XG4gICAgICAgICAgaGVpZ2h0PXszOH1cbiAgICAgICAgICBhbHQ9XCJMaW5rYnJhcnkg66Gc6rOgXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjeChcImNoZWNrXCIpfT5cbiAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgICAgICA8TGluayBocmVmPXtndWlkZUxpbmt9PntndWlkZX08L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsIkxPR09fSU1BR0UiLCJJbWFnZSIsIkxpbmsiLCJzdHlsZXMiLCJjeCIsImJpbmQiLCJBdXRoSGVhZGVyIiwicGFnZSIsImlzU2lnbkluIiwibWVzc2FnZSIsImd1aWRlIiwiZ3VpZGVMaW5rIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/auth/ui-auth-header/AuthHeader.jsx\n"));

/***/ })

});
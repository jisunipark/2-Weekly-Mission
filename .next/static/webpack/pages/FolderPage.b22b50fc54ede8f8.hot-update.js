/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/FolderPage",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/link/ui-search-bar/SearchBar.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/link/ui-search-bar/SearchBar.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".SearchBar_container__l_Lcs {\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.SearchBar_input__TCSCc {\\n  width: 100%;\\n  max-width: 106rem;\\n  height: 4.3rem;\\n  padding-left: 3.8rem;\\n  padding-right: 1.6rem;\\n  border-radius: 1rem;\\n  background-color: #f5f5f5;\\n  font-size: 1.4rem;\\n}\\n@media (min-width: 768px) {\\n  .SearchBar_input__TCSCc {\\n    height: 5.4rem;\\n    padding-left: 4.2rem;\\n    font-size: 1.6rem;\\n    line-height: 150%;\\n  }\\n}\\n\\n.SearchBar_input__TCSCc::placeholder {\\n  color: #666666;\\n}\\n\\n.SearchBar_search-icon__0te5M {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  left: 1.6rem;\\n}\\n\\n.SearchBar_close__l01be {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  right: 1.6rem;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/link/ui-search-bar/SearchBar.module.scss\",\"webpack://src/sharing/styles/colors.scss\",\"webpack://src/sharing/styles/mixin.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,kBAAA;EACA,WAAA;AADF;;AAIA;EACE,WAAA;EACA,iBAAA;EACA,cAAA;EACA,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,yBCLiB;EDMjB,iBAAA;AADF;AEPE;EFAF;IAWI,cAAA;IACA,oBAAA;IACA,iBAAA;IACA,iBAAA;EAAF;AACF;;AAEA;EACE,cCXwB;ADY1B;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,YAAA;AACF;;AAEA;EACE,kBAAA;EACA,QAAA;EACA,2BAAA;EACA,aAAA;AACF\",\"sourcesContent\":[\"@import \\\"sharing/styles/global.scss\\\";\\n\\n.container {\\n  position: relative;\\n  width: 100%;\\n}\\n\\n.input {\\n  width: 100%;\\n  max-width: 106rem;\\n  height: 4.3rem;\\n  padding-left: 3.8rem;\\n  padding-right: 1.6rem;\\n  border-radius: 1rem;\\n  background-color: $color-gray-light;\\n  font-size: 1.4rem;\\n\\n  @include tablet {\\n    height: 5.4rem;\\n    padding-left: 4.2rem;\\n    font-size: 1.6rem;\\n    line-height: 150%;\\n  }\\n}\\n.input::placeholder {\\n  color: $color-text-content-gray;\\n}\\n\\n.search-icon {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  left: 1.6rem;\\n}\\n\\n.close {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  right: 1.6rem;\\n}\\n\",\"$color-primary: #6d6afe;\\n$color-red: #ff5b56;\\n$color-black: #111322;\\n$color-white: #ffffff;\\n\\n$color-gray100: #373740;\\n$color-gray60: #9fa6b2;\\n$color-gray20: #ccd5e3;\\n$color-gray10: #e7effb;\\n$color-gray-light: #f5f5f5;\\n\\n$color-light-blue: #f0f6ff;\\n\\n$color-text-gray: #676767;\\n$color-text-content-gray: #666666;\\n$color-text-content-black: #333333;\\n\",\"@mixin desktop {\\n  @media (min-width: 1200px) {\\n    @content;\\n  }\\n}\\n\\n@mixin tablet {\\n  @media (min-width: 768px) {\\n    @content;\\n  }\\n}\\n\\n@mixin ellipsis($line: 1) {\\n  overflow: hidden;\\n  text-overflow: ellipsis;\\n  white-space: nowrap !important;\\n\\n  @if $line > 1 {\\n    display: -webkit-box;\\n    -webkit-line-clamp: $line;\\n    white-space: initial !important;\\n    -webkit-box-orient: vertical;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"container\": \"SearchBar_container__l_Lcs\",\n\t\"input\": \"SearchBar_input__TCSCc\",\n\t\"search-icon\": \"SearchBar_search-icon__0te5M\",\n\t\"close\": \"SearchBar_close__l01be\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9saW5rL3VpLXNlYXJjaC1iYXIvU2VhcmNoQmFyLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMseUtBQXFGO0FBQy9IO0FBQ0E7QUFDQSx1RUFBdUUsdUJBQXVCLGdCQUFnQixHQUFHLDZCQUE2QixnQkFBZ0Isc0JBQXNCLG1CQUFtQix5QkFBeUIsMEJBQTBCLHdCQUF3Qiw4QkFBOEIsc0JBQXNCLEdBQUcsNkJBQTZCLDZCQUE2QixxQkFBcUIsMkJBQTJCLHdCQUF3Qix3QkFBd0IsS0FBSyxHQUFHLDBDQUEwQyxtQkFBbUIsR0FBRyxtQ0FBbUMsdUJBQXVCLGFBQWEsZ0NBQWdDLGlCQUFpQixHQUFHLDZCQUE2Qix1QkFBdUIsYUFBYSxnQ0FBZ0Msa0JBQWtCLEdBQUcsT0FBTyxrTUFBa00sV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFVBQVUsV0FBVyxVQUFVLGdFQUFnRSxnQkFBZ0IsdUJBQXVCLGdCQUFnQixHQUFHLFlBQVksZ0JBQWdCLHNCQUFzQixtQkFBbUIseUJBQXlCLDBCQUEwQix3QkFBd0Isd0NBQXdDLHNCQUFzQix1QkFBdUIscUJBQXFCLDJCQUEyQix3QkFBd0Isd0JBQXdCLEtBQUssR0FBRyx1QkFBdUIsb0NBQW9DLEdBQUcsa0JBQWtCLHVCQUF1QixhQUFhLGdDQUFnQyxpQkFBaUIsR0FBRyxZQUFZLHVCQUF1QixhQUFhLGdDQUFnQyxrQkFBa0IsR0FBRyw2QkFBNkIsc0JBQXNCLHdCQUF3Qix3QkFBd0IsNEJBQTRCLHlCQUF5Qix5QkFBeUIseUJBQXlCLDZCQUE2QiwrQkFBK0IsOEJBQThCLG9DQUFvQyxxQ0FBcUMscUJBQXFCLGdDQUFnQyxlQUFlLEtBQUssR0FBRyxtQkFBbUIsK0JBQStCLGVBQWUsS0FBSyxHQUFHLCtCQUErQixxQkFBcUIsNEJBQTRCLG1DQUFtQyxxQkFBcUIsMkJBQTJCLGdDQUFnQyxzQ0FBc0MsbUNBQW1DLEtBQUssR0FBRyxxQkFBcUI7QUFDNXhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpbmsvdWktc2VhcmNoLWJhci9TZWFyY2hCYXIubW9kdWxlLnNjc3M/ODJiZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlNlYXJjaEJhcl9jb250YWluZXJfX2xfTGNzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uU2VhcmNoQmFyX2lucHV0X19UQ1NDYyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTA2cmVtO1xcbiAgaGVpZ2h0OiA0LjNyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDMuOHJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDEuNnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLlNlYXJjaEJhcl9pbnB1dF9fVENTQ2Mge1xcbiAgICBoZWlnaHQ6IDUuNHJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0LjJyZW07XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcXG4gIH1cXG59XFxuXFxuLlNlYXJjaEJhcl9pbnB1dF9fVENTQ2M6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAjNjY2NjY2O1xcbn1cXG5cXG4uU2VhcmNoQmFyX3NlYXJjaC1pY29uX18wdGU1TSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGxlZnQ6IDEuNnJlbTtcXG59XFxuXFxuLlNlYXJjaEJhcl9jbG9zZV9fbDAxYmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICByaWdodDogMS42cmVtO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2xpbmsvdWktc2VhcmNoLWJhci9TZWFyY2hCYXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2hhcmluZy9zdHlsZXMvY29sb3JzLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc2hhcmluZy9zdHlsZXMvbWl4aW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQ0xpQjtFRE1qQixpQkFBQTtBQURGO0FFUEU7RUZBRjtJQVdJLGNBQUE7SUFDQSxvQkFBQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7RUFBRjtBQUNGOztBQUVBO0VBQ0UsY0NYd0I7QURZMUI7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcInNoYXJpbmcvc3R5bGVzL2dsb2JhbC5zY3NzXFxcIjtcXG5cXG4uY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwNnJlbTtcXG4gIGhlaWdodDogNC4zcmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjhyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjZyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWdyYXktbGlnaHQ7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG5cXG4gIEBpbmNsdWRlIHRhYmxldCB7XFxuICAgIGhlaWdodDogNS40cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDQuMnJlbTtcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xcbiAgfVxcbn1cXG4uaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAkY29sb3ItdGV4dC1jb250ZW50LWdyYXk7XFxufVxcblxcbi5zZWFyY2gtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIGxlZnQ6IDEuNnJlbTtcXG59XFxuXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgcmlnaHQ6IDEuNnJlbTtcXG59XFxuXCIsXCIkY29sb3ItcHJpbWFyeTogIzZkNmFmZTtcXG4kY29sb3ItcmVkOiAjZmY1YjU2O1xcbiRjb2xvci1ibGFjazogIzExMTMyMjtcXG4kY29sb3Itd2hpdGU6ICNmZmZmZmY7XFxuXFxuJGNvbG9yLWdyYXkxMDA6ICMzNzM3NDA7XFxuJGNvbG9yLWdyYXk2MDogIzlmYTZiMjtcXG4kY29sb3ItZ3JheTIwOiAjY2NkNWUzO1xcbiRjb2xvci1ncmF5MTA6ICNlN2VmZmI7XFxuJGNvbG9yLWdyYXktbGlnaHQ6ICNmNWY1ZjU7XFxuXFxuJGNvbG9yLWxpZ2h0LWJsdWU6ICNmMGY2ZmY7XFxuXFxuJGNvbG9yLXRleHQtZ3JheTogIzY3Njc2NztcXG4kY29sb3ItdGV4dC1jb250ZW50LWdyYXk6ICM2NjY2NjY7XFxuJGNvbG9yLXRleHQtY29udGVudC1ibGFjazogIzMzMzMzMztcXG5cIixcIkBtaXhpbiBkZXNrdG9wIHtcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcXG4gICAgQGNvbnRlbnQ7XFxuICB9XFxufVxcblxcbkBtaXhpbiB0YWJsZXQge1xcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAgIEBjb250ZW50O1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZWxsaXBzaXMoJGxpbmU6IDEpIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcXG5cXG4gIEBpZiAkbGluZSA+IDEge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAkbGluZTtcXG4gICAgd2hpdGUtc3BhY2U6IGluaXRpYWwgIWltcG9ydGFudDtcXG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU2VhcmNoQmFyX2NvbnRhaW5lcl9fbF9MY3NcIixcblx0XCJpbnB1dFwiOiBcIlNlYXJjaEJhcl9pbnB1dF9fVENTQ2NcIixcblx0XCJzZWFyY2gtaWNvblwiOiBcIlNlYXJjaEJhcl9zZWFyY2gtaWNvbl9fMHRlNU1cIixcblx0XCJjbG9zZVwiOiBcIlNlYXJjaEJhcl9jbG9zZV9fbDAxYmVcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/link/ui-search-bar/SearchBar.module.scss\n"));

/***/ })

});
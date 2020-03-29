webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./containers/Items/Items.jsx":
/*!************************************!*\
  !*** ./containers/Items/Items.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Item_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Item/Item */ "./components/Item/Item.jsx");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _itemsQueries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./itemsQueries */ "./containers/Items/itemsQueries.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\germa\\Desktop\\Shopping_Front\\containers\\Items\\Items.jsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


 // graphql




var Items = function Items() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_itemsQueries__WEBPACK_IMPORTED_MODULE_3__["GET_ITEMS"]),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 23
    }
  }, "Loading...");
  if (error) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, error);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, data.items.map(function (el) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: el.id
    }, el, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Items);

/***/ }),

/***/ "./containers/Items/itemsQueries.js":
/*!******************************************!*\
  !*** ./containers/Items/itemsQueries.js ***!
  \******************************************/
/*! exports provided: GET_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ITEMS", function() { return GET_ITEMS; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  {\n    items {\n      id\n      title\n      description\n      price\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GET_ITEMS = Object(apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject());

/***/ })

})
//# sourceMappingURL=index.js.c3aaf8428b0ad89c8d76.hot-update.js.map
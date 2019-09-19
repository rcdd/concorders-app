(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-drinks-drinks-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order/tabs/drinks/drinks.page.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order/tabs/drinks/drinks.page.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n    <app-product-item [item]=\"item\" *ngFor=\"let item of menu\"></app-product-item>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/order/tabs/drinks/drinks.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/order/tabs/drinks/drinks.module.ts ***!
  \**********************************************************/
/*! exports provided: DrinksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksPageModule", function() { return DrinksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _drinks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drinks.page */ "./src/app/pages/order/tabs/drinks/drinks.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _drinks_page__WEBPACK_IMPORTED_MODULE_6__["DrinksPage"]
    }
];
var DrinksPageModule = /** @class */ (function () {
    function DrinksPageModule() {
    }
    DrinksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_drinks_page__WEBPACK_IMPORTED_MODULE_6__["DrinksPage"]]
        })
    ], DrinksPageModule);
    return DrinksPageModule;
}());



/***/ }),

/***/ "./src/app/pages/order/tabs/drinks/drinks.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/order/tabs/drinks/drinks.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL3RhYnMvZHJpbmtzL2RyaW5rcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/order/tabs/drinks/drinks.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/order/tabs/drinks/drinks.page.ts ***!
  \********************************************************/
/*! exports provided: DrinksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinksPage", function() { return DrinksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/utils.service */ "./src/app/services/utils.service.ts");



var DrinksPage = /** @class */ (function () {
    function DrinksPage(utils) {
        this.utils = utils;
        this.menu = [];
    }
    DrinksPage.prototype.ngOnInit = function () {
        this.menu = this.utils.menus.filter(function (menu) { return menu.type === 'drinks'; });
    };
    DrinksPage.ctorParameters = function () { return [
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DrinksPage.prototype, "menu", void 0);
    DrinksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dishes',
            template: __webpack_require__(/*! raw-loader!./drinks.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order/tabs/drinks/drinks.page.html"),
            styles: [__webpack_require__(/*! ./drinks.page.scss */ "./src/app/pages/order/tabs/drinks/drinks.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"]])
    ], DrinksPage);
    return DrinksPage;
}());



/***/ })

}]);
//# sourceMappingURL=tabs-drinks-drinks-module-es5.js.map
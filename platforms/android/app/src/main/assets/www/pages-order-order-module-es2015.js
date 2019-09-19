(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-order-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/order/order.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/order/order.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"utils.currentOrder\">\n    <ion-header>\n        <ion-toolbar>\n            <ion-buttons slot=\"start\" class=\"ion-padding-start\">\n                <ion-button fill=\"outline\" color=\"dark\" (click)=\"navBack()\">\n                    <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n                    Voltar\n                </ion-button>\n            </ion-buttons>\n            <ion-title>\n                {{ utils.currentOrder.name }}\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n        <ion-tabs>\n            <ion-tab-bar slot=\"top\">\n                <ion-tab-button tab=\"starters\">\n                    <ion-icon name=\"wine\"></ion-icon>\n                    <ion-label>Entradas</ion-label>\n                </ion-tab-button>\n\n                <ion-tab-button tab=\"dishes\">\n                    <ion-icon name=\"restaurant\"></ion-icon>\n                    <ion-label>Pratos</ion-label>\n                </ion-tab-button>\n\n                <ion-tab-button tab=\"drinks\">\n                    <ion-icon name=\"beer\"></ion-icon>\n                    <ion-label>Bebidas</ion-label>\n                </ion-tab-button>\n\n                <ion-tab-button tab=\"deserts\">\n                    <ion-icon name=\"ice-cream\"></ion-icon>\n                    <ion-label>Sobremesas</ion-label>\n                </ion-tab-button>\n            </ion-tab-bar>\n        </ion-tabs>\n    </ion-content>\n\n    <ion-footer>\n        <ion-toolbar>\n            <ion-button expand=\"full\" color=\"success\" (click)=\"sendOrder()\">Enviar Pedido</ion-button>\n        </ion-toolbar>\n    </ion-footer>\n</ng-container>\n\n"

/***/ }),

/***/ "./src/app/pages/order/order.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.module.ts ***!
  \*********************************************/
/*! exports provided: OrderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order.page */ "./src/app/pages/order/order.page.ts");







let OrderPageModule = class OrderPageModule {
};
OrderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"],
                    children: [
                        {
                            path: 'deserts',
                            loadChildren: () => Promise.all(/*! import() | tabs-deserts-deserts-module */[__webpack_require__.e("common"), __webpack_require__.e("tabs-deserts-deserts-module")]).then(__webpack_require__.bind(null, /*! ./tabs/deserts/deserts.module */ "./src/app/pages/order/tabs/deserts/deserts.module.ts")).then(m => m.DesertsPageModule)
                        },
                        {
                            path: 'drinks',
                            loadChildren: () => Promise.all(/*! import() | tabs-drinks-drinks-module */[__webpack_require__.e("common"), __webpack_require__.e("tabs-drinks-drinks-module")]).then(__webpack_require__.bind(null, /*! ./tabs/drinks/drinks.module */ "./src/app/pages/order/tabs/drinks/drinks.module.ts")).then(m => m.DrinksPageModule)
                        },
                        {
                            path: 'dishes',
                            loadChildren: () => Promise.all(/*! import() | tabs-dishes-dishes-module */[__webpack_require__.e("common"), __webpack_require__.e("tabs-dishes-dishes-module")]).then(__webpack_require__.bind(null, /*! ./tabs/dishes/dishes.module */ "./src/app/pages/order/tabs/dishes/dishes.module.ts")).then(m => m.DishesPageModule)
                        },
                        {
                            path: 'starters',
                            loadChildren: () => Promise.all(/*! import() | tabs-starters-starters-module */[__webpack_require__.e("common"), __webpack_require__.e("tabs-starters-starters-module")]).then(__webpack_require__.bind(null, /*! ./tabs/starters/starters.module */ "./src/app/pages/order/tabs/starters/starters.module.ts")).then(m => m.StartersPageModule)
                        },
                        {
                            path: '',
                            redirectTo: '/order/starters',
                            pathMatch: 'full'
                        }
                    ]
                }
            ])
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_6__["OrderPage"]]
    })
], OrderPageModule);



/***/ }),

/***/ "./src/app/pages/order/order.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29yZGVyL29yZGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/order/order.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/order/order.page.ts ***!
  \*******************************************/
/*! exports provided: OrderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPage", function() { return OrderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rest.service */ "./src/app/services/rest.service.ts");





let OrderPage = class OrderPage {
    constructor(nav, utils, restService) {
        this.nav = nav;
        this.utils = utils;
        this.restService = restService;
    }
    ngOnInit() {
        if (!this.utils.currentOrder) {
            this.navBack();
            return;
        }
        // console.log('CurrentOrder', this.utils.currentOrder);
    }
    navBack() {
        this.nav.navigateBack('table-selection', { animated: true, animationDirection: 'back' });
    }
    sendOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.utils.showLoading();
            if (this.utils.currentOrder.newOrder) {
                this.newOrder();
            }
            else {
                this.updateOrder();
            }
        });
    }
    newOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.restService.newOrder(this.utils.currentOrder.id, this.utils.currentOrder).subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.utils.hideLoading();
                this.utils.currentOrder = {};
                this.nav.navigateBack('home', { animated: true, animationDirection: 'back' });
            }), (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.utils.hideLoading();
                console.error(error);
            }));
        });
    }
    updateOrder() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.restService.updateOrder(this.utils.currentOrder.id, this.utils.currentOrder.request).subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.utils.hideLoading();
                this.utils.currentOrder = {};
                this.nav.navigateBack('home', { animated: true, animationDirection: 'back' });
            }), (error) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield this.utils.hideLoading();
                console.error(error);
            }));
        });
    }
};
OrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
];
OrderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order',
        template: __webpack_require__(/*! raw-loader!./order.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/order/order.page.html"),
        styles: [__webpack_require__(/*! ./order.page.scss */ "./src/app/pages/order/order.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _services_utils_service__WEBPACK_IMPORTED_MODULE_2__["UtilsService"], _services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])
], OrderPage);



/***/ })

}]);
//# sourceMappingURL=pages-order-order-module-es2015.js.map
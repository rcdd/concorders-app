(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-table-selection-table-selection-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/table-selection/table-selection.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/table-selection/table-selection.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\" class=\"ion-padding-start\">\n            <ion-button fill=\"outline\" color=\"dark\" (click)=\"navBack()\">\n                <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n                Voltar\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ng-container *ngIf=\"placesInUse?.length > 0\">\n        <ion-item detail (click)=\"openTable(place)\" *ngFor=\"let place of placesInUse\">\n            <ion-label>{{ place.name }}</ion-label>\n        </ion-item>\n    </ng-container>\n    <ng-container *ngIf=\"!placesInUse || placesInUse.length == 0\">\n        <ion-title class=\"ion-padding\">\n            Mesa Vazia\n        </ion-title>\n    </ng-container>\n</ion-content>\n\n<ion-footer>\n    <ion-button (click)=\"newTable()\" expand=\"full\">Adicionar novo pedido</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/table-selection/table-selection.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/table-selection/table-selection.module.ts ***!
  \*****************************************************************/
/*! exports provided: TableSelectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSelectionPageModule", function() { return TableSelectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _table_selection_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-selection.page */ "./src/app/pages/table-selection/table-selection.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let TableSelectionPageModule = class TableSelectionPageModule {
};
TableSelectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _table_selection_page__WEBPACK_IMPORTED_MODULE_4__["TableSelectionPage"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: '',
                    component: _table_selection_page__WEBPACK_IMPORTED_MODULE_4__["TableSelectionPage"]
                }
            ])
        ]
    })
], TableSelectionPageModule);



/***/ }),

/***/ "./src/app/pages/table-selection/table-selection.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/table-selection/table-selection.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYmxlLXNlbGVjdGlvbi90YWJsZS1zZWxlY3Rpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/table-selection/table-selection.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/table-selection/table-selection.page.ts ***!
  \***************************************************************/
/*! exports provided: TableSelectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSelectionPage", function() { return TableSelectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rest.service */ "./src/app/services/rest.service.ts");





let TableSelectionPage = class TableSelectionPage {
    constructor(nav, utils, actionSheetController, restService) {
        this.nav = nav;
        this.utils = utils;
        this.actionSheetController = actionSheetController;
        this.restService = restService;
        this.placesInUse = [];
        this.placesNotInUse = [];
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!this.utils.currentTable) {
                this.navBack();
                return;
            }
            yield this.utils.showLoading();
            this.placesInUse = [];
            this.placesNotInUse = [];
            this.restService.getPlaces(this.utils.currentTable.id).subscribe((resp) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                yield resp.forEach(place => {
                    if (place.inUse) {
                        this.placesInUse.push(place);
                    }
                    else {
                        this.placesNotInUse.push(place);
                    }
                });
                yield this.utils.hideLoading();
            }));
        });
    }
    navBack() {
        this.nav.navigateBack('home', { animated: true, animationDirection: 'back' });
    }
    openTable(opt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.utils.currentOrder = {};
            let table;
            yield this.utils.showLoading();
            yield this.restService.getActiveOrder(opt.id).subscribe((order) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                table = order;
                if (!table) {
                    opt.newOrder = true;
                    table = opt;
                }
                table.name = opt.name;
                table.peopleCount = opt.peopleCount;
                this.utils.currentOrder = table;
                if (!this.utils.currentOrder.request) {
                    this.utils.currentOrder.request = [];
                }
                yield this.utils.hideLoading();
                this.nav.navigateForward('order', { animated: true, animationDirection: 'forward' });
            }));
        });
    }
    newTable() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const listTables = [];
            this.placesNotInUse.forEach(place => {
                listTables.push({
                    id: place.id,
                    text: place.name,
                    icon: 'today',
                    handler: () => {
                        this.openTable(place);
                    }
                });
            });
            const actionSheet = yield this.actionSheetController.create({
                header: 'Escolha o lugar da mesa',
                buttons: listTables.length !== 0 ? listTables : [{
                        id: -1,
                        text: 'Sem mais lugares',
                        icon: 'close'
                    }]
            });
            yield actionSheet.present();
        });
    }
};
TableSelectionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableSelectionPage.prototype, "placesInUse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TableSelectionPage.prototype, "placesNotInUse", void 0);
TableSelectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        template: __webpack_require__(/*! raw-loader!./table-selection.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/table-selection/table-selection.page.html"),
        selector: 'table-selection-page',
        styles: [__webpack_require__(/*! ./table-selection.page.scss */ "./src/app/pages/table-selection/table-selection.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])
], TableSelectionPage);



/***/ })

}]);
//# sourceMappingURL=pages-table-selection-table-selection-module-es2015.js.map
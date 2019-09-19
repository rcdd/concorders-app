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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _table_selection_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-selection.page */ "./src/app/pages/table-selection/table-selection.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var TableSelectionPageModule = /** @class */ (function () {
    function TableSelectionPageModule() {
    }
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
    return TableSelectionPageModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/utils.service */ "./src/app/services/utils.service.ts");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rest.service */ "./src/app/services/rest.service.ts");





var TableSelectionPage = /** @class */ (function () {
    function TableSelectionPage(nav, utils, actionSheetController, restService) {
        this.nav = nav;
        this.utils = utils;
        this.actionSheetController = actionSheetController;
        this.restService = restService;
        this.placesInUse = [];
        this.placesNotInUse = [];
    }
    TableSelectionPage.prototype.ionViewWillEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.utils.currentTable) {
                            this.navBack();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.utils.showLoading()];
                    case 1:
                        _a.sent();
                        this.placesInUse = [];
                        this.placesNotInUse = [];
                        this.restService.getPlaces(this.utils.currentTable.id).subscribe(function (resp) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _this = this;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, resp.forEach(function (place) {
                                            if (place.inUse) {
                                                _this.placesInUse.push(place);
                                            }
                                            else {
                                                _this.placesNotInUse.push(place);
                                            }
                                        })];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, this.utils.hideLoading()];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    TableSelectionPage.prototype.navBack = function () {
        this.nav.navigateBack('home', { animated: true, animationDirection: 'back' });
    };
    TableSelectionPage.prototype.openTable = function (opt) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var table;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.utils.currentOrder = {};
                        return [4 /*yield*/, this.utils.showLoading()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.restService.getActiveOrder(opt.id).subscribe(function (order) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
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
                                            return [4 /*yield*/, this.utils.hideLoading()];
                                        case 1:
                                            _a.sent();
                                            this.nav.navigateForward('order', { animated: true, animationDirection: 'forward' });
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TableSelectionPage.prototype.newTable = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var listTables, actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listTables = [];
                        this.placesNotInUse.forEach(function (place) {
                            listTables.push({
                                id: place.id,
                                text: place.name,
                                icon: 'today',
                                handler: function () {
                                    _this.openTable(place);
                                }
                            });
                        });
                        return [4 /*yield*/, this.actionSheetController.create({
                                header: 'Escolha o lugar da mesa',
                                buttons: listTables.length !== 0 ? listTables : [{
                                        id: -1,
                                        text: 'Sem mais lugares',
                                        icon: 'close'
                                    }]
                            })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TableSelectionPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
        { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
    ]; };
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
    return TableSelectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-table-selection-table-selection-module-es5.js.map
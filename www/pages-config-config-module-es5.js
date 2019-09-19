(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-config-config-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/config/config.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/config/config.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>Configurações</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-item>\n        <ion-label position=\"fixed\">IP</ion-label>\n        <ion-input placeholder=\"192.168.1.123\" [(ngModel)]=\"config.ip\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label position=\"fixed\">Porto</ion-label>\n        <ion-input placeholder=\"1234\" type=\"number\" [(ngModel)]=\"config.port\"></ion-input>\n    </ion-item>\n\n    <ion-list class=\"ion-padding\">\n        <ion-label color=\"danger\" size=\"small\">{{ errorMessage }}</ion-label>\n    </ion-list>\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-button expand=\"full\" color=\"success\" (click)=\"saveConfig()\">Gravar</ion-button>\n        <ion-button expand=\"full\" color=\"dark\" (click)=\"goBack()\">Cancel</ion-button>\n    </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/config/config.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/config/config.module.ts ***!
  \***********************************************/
/*! exports provided: ConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPageModule", function() { return ConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config.page */ "./src/app/pages/config/config.page.ts");







var routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]
    }
];
var ConfigPageModule = /** @class */ (function () {
    function ConfigPageModule() {
    }
    ConfigPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_config_page__WEBPACK_IMPORTED_MODULE_6__["ConfigPage"]]
        })
    ], ConfigPageModule);
    return ConfigPageModule;
}());



/***/ }),

/***/ "./src/app/pages/config/config.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/config/config.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpZy9jb25maWcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/config/config.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/config/config.page.ts ***!
  \*********************************************/
/*! exports provided: ConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _services_rest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rest.service */ "./src/app/services/rest.service.ts");





var ConfigPage = /** @class */ (function () {
    function ConfigPage(navCtrl, storage, restService) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.restService = restService;
        this.config = { ip: '', port: '' };
    }
    ConfigPage_1 = ConfigPage;
    ConfigPage.validateIP = function (ipaddress) {
        // tslint:disable-next-line
        return (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress));
    };
    ConfigPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.storage.get('concorders-config').then(function (val) {
                    if (val) {
                        Object.assign(_this.config, JSON.parse(val));
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ConfigPage.prototype.saveConfig = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.errorMessage = '';
                        if (!ConfigPage_1.validateIP(this.config.ip)) {
                            this.errorMessage = 'Insira um IP válido!';
                            return [2 /*return*/];
                        }
                        this.config.port = this.config.port.toString();
                        if (!this.config.port || this.config.port.trim() === ''
                            || !(Number(this.config.port) > 0 && Number(this.config.port) < 65536)) {
                            this.errorMessage = 'Insira um porto válido!';
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.storage.set('concorders-config', JSON.stringify(this.config))];
                    case 1:
                        _a.sent();
                        this.restService.updateConfig();
                        this.goBack();
                        return [2 /*return*/];
                }
            });
        });
    };
    ConfigPage.prototype.goBack = function () {
        this.navCtrl.navigateBack('/home');
    };
    var ConfigPage_1;
    ConfigPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: _services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"] }
    ]; };
    ConfigPage = ConfigPage_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-config',
            template: __webpack_require__(/*! raw-loader!./config.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/config/config.page.html"),
            styles: [__webpack_require__(/*! ./config.page.scss */ "./src/app/pages/config/config.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _services_rest_service__WEBPACK_IMPORTED_MODULE_4__["RestService"]])
    ], ConfigPage);
    return ConfigPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-config-config-module-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _routes_document_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/document/document.component */ "./src/app/routes/document/document.component.ts");





var routes = [
    {
        path: '',
        component: _routes_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'docs',
        component: _routes_document_document_component__WEBPACK_IMPORTED_MODULE_4__["DocumentComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AtomCssSite';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _routes_document_document_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/document/document.component */ "./src/app/routes/document/document.component.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _routes_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _routes_document_document_component__WEBPACK_IMPORTED_MODULE_10__["DocumentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"w_100 flex flex_column align_center bg_black\">\r\n      <span class=\"statement color_888 fontsize_16\">Copyright © 2018 made by Wendao.</span>\r\n      <span class=\"statement color_888 fontsize_16\">Inspire by NestJS.</span>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  line-height: 2;\n  padding: 24px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXE15IFdvcmtTdGF0aW9uXFxQcm9qZWN0c1xcQXRvbUNzc1NpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ00sZUFBYztFQUNkLGdCQUFlLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgIHBhZGRpbmc6IDI0cHggMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"flex justify_center w_100 fixed bg_black\">\n      <div class=\"header_content flex justify_between align_center\">\n            <div class=\"logo\">\n                  <a routerLink=\"/\">\n                        <img\n                              class=\"border_box\"\n                              src=\"../../../assets/images/img_top_logo.png\"\n                              alt=\"img_top_logo\"\n                        >\n                  </a>\n            </div>\n            <div class=\"right_options flex\">\n                  <ul class=\"menu\">\n                        <li>\n                              <a\n                                    class=\"white font_bold fontsize_18 transition_ease_normal border_box\"\n                                    routerLink=\"/docs\"\n                                    routerLinkActive=\"active\"\n                              >Documentation</a>\n                        </li>\n                  </ul>\n                  <div class=\"socials flex align_center\">\n                        <a\n                              class=\"border_box\"\n                              href=\"https://github.com/isVertical/atom.css\"\n                              target=\"_blank\"\n                        >\n                              <img\n                                    src=\"../../../assets/images/icon_github.png\"\n                                    alt=\"icon_github\"\n                              >\n                        </a>\n                        <a\n                              class=\"border_box\"\n                              href=\"https://zhuanlan.zhihu.com/yuan123\"\n                              target=\"_blank\"\n                        >\n                              <img\n                                    src=\"../../../assets/images/icon_zhihu.png\"\n                                    alt=\"icon_zhihu\"\n                              >\n                        </a>\n                  </div>\n            </div>\n      </div>\n</header>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  padding: 10px 0;\n  z-index: 99;\n  top: 0; }\n  header .header_content {\n    width: 1200px; }\n  header .header_content .logo a img {\n      width: 48px;\n      transition: all ease 0.3s;\n      border-radius: 100px;\n      background: transparent; }\n  header .header_content .logo a:hover img {\n      box-shadow: 0 0 80px #31b573;\n      transition: all ease 0.3s; }\n  header .header_content .right_options .menu {\n      list-style: none; }\n  header .header_content .right_options .menu a {\n        line-height: 18px; }\n  header .header_content .right_options .menu .active {\n        color: #31b573; }\n  header .header_content .right_options .menu a:hover {\n        color: #31b573; }\n  header .header_content .right_options .socials a {\n      margin-left: 24px;\n      transition: all ease 0.3s; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXE15IFdvcmtTdGF0aW9uXFxQcm9qZWN0c1xcQXRvbUNzc1NpdGUvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhlYWRlclxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9EOlxcTXkgV29ya1N0YXRpb25cXFByb2plY3RzXFxBdG9tQ3NzU2l0ZS9zcmNcXHZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNNLGdCQUFlO0VBQ2YsWUFBVztFQUNYLE9BQU0sRUErQ1g7RUFsREQ7SUFLWSxjQUFhLEVBNENsQjtFQWpEUDtNQVU4QixZQUFXO01BQ1gsMEJBQXlCO01BQ3pCLHFCQUFvQjtNQUNwQix3QkFBdUIsRUFDNUI7RUFkekI7TUFtQjhCLDZCQ3JCVjtNRHNCVSwwQkFBeUIsRUFDOUI7RUFyQnpCO01BMkJ3QixpQkFBZ0IsRUFhckI7RUF4Q25CO1FBOEI4QixrQkFBaUIsRUFDdEI7RUEvQnpCO1FBa0M4QixlQ3BDVixFRHFDSztFQW5DekI7UUFzQzhCLGVDeENWLEVEeUNLO0VBdkN6QjtNQTRDOEIsa0JBQWlCO01BQ2pCLDBCQUF5QixFQUM5QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcnMuc2Nzcyc7XHJcblxyXG5oZWFkZXIge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIC5oZWFkZXJfY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcblxyXG4gICAgICAgICAgICAubG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgIGEgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDgwcHggJGNvbG9yX21haW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuM3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAucmlnaHRfb3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgIC5tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl9tYWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl9tYWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5zb2NpYWxzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbn0iLCIkY29sb3JfbWFpbjogIzMxYjU3MztcclxuIl19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.active_page = "home";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/routes/document/document.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/document/document.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"document_wrap bg_white flex justify_center\">\n      <div class=\"document flex flex_column border_box\">\n            <div\n                  *ngIf=\"!is_classes_ready\"\n                  class=\"leading_box w_100 flex justify_center align_center\"\n            >\n                  <span class=\"loading_text font_bold fontsize_64 black\">Loading...</span>\n            </div>\n            <div\n                  *ngIf=\"is_classes_ready\"\n                  class=\"class_items w_100 flex flex_column\"\n            >\n                  <div\n                        *ngFor=\"let item of class_items\"\n                        class=\"class_item w_100\"\n                  >\n                        <span class=\"title font_bold inline_block mb_16 w_100\">{{item.title}}</span>\n                        <div class=\"classes w_100 flex flex_wrap\">\n                              <span\n                                    *ngFor=\"let class of item.classes\"\n                                    class=\"class\"\n                                    (click)=\"handleClickClass(class.class_content)\"\n                              >{{class.class_name}}</span>\n                        </div>\n                  </div>\n            </div>\n      </div>\n</section>\n\n<section *ngIf=\"is_modal_show\" class=\"mask_wrap w_100vw h_100vh fixed top_0 left_0 flex justify_center align_center\">\n      <div class=\"current_class_wrap border_box white relative\">\n            <div class=\"options absolute flex\">\n                  <button class=\"bg_red btn\" (click)=\"handleClickClose()\"></button>\n                  <button class=\"bg_orange btn\"></button>\n                  <button class=\"bg_green btn\"></button>\n            </div>\n            <span class=\"class_name font_bold inline_block\">.{{current_class.name}}</span>\n            <span class=\"bracket_start\">{{bracket_start}}</span>\n            <div class=\"class_content flex flex_column\">\n                  <span\n                        *ngFor=\"let item of current_class.value\"\n                        class=\"class_attribute\"\n                  >{{item}}</span>\n            </div>\n            <span class=\"bracket_end inline_block\">{{bracket_end}}</span>\n      </div>\n</section>"

/***/ }),

/***/ "./src/app/routes/document/document.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/routes/document/document.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".document_wrap {\n  margin-top: 70px; }\n  .document_wrap .document {\n    width: 1200px;\n    padding: 40px 20px; }\n  .document_wrap .document .leading_box {\n      height: calc(100vh - 140px - 122px); }\n  .document_wrap .document .class_items .class_item {\n      margin-bottom: 30px; }\n  .document_wrap .document .class_items .class_item .title {\n        font-size: 24px;\n        padding-left: 8px;\n        border-left: 6px solid #31b573; }\n  .document_wrap .document .class_items .class_item .classes .class:nth-of-type(6n) {\n        margin-right: 0; }\n  .document_wrap .document .class_items .class_item .classes .class {\n        width: calc(95% / 6);\n        height: 40px;\n        line-height: 40px;\n        text-align: center;\n        background-color: whitesmoke;\n        margin-right: 1%;\n        margin-bottom: 10px;\n        color: #333;\n        font-weight: 600;\n        font-size: 16px;\n        cursor: pointer;\n        transition: all ease 0.3s; }\n  .document_wrap .document .class_items .class_item .classes .class:hover {\n        background-color: #31b573;\n        color: white; }\n  .mask_wrap {\n  background-color: rgba(255, 255, 255, 0.9);\n  z-index: 9999; }\n  .mask_wrap .current_class_wrap {\n    width: 30vw;\n    height: 30vh;\n    background-color: black;\n    box-shadow: 0 0 12px black;\n    border-radius: 10px;\n    padding: 60px;\n    padding-top: 80px;\n    font-size: 24px; }\n  .mask_wrap .current_class_wrap .options {\n      top: 20px;\n      left: 20px; }\n  .mask_wrap .current_class_wrap .options .btn {\n        width: 20px;\n        height: 20px;\n        border-radius: 20px;\n        outline: none;\n        border: none;\n        margin-right: 10px; }\n  .mask_wrap .current_class_wrap .class_name {\n      color: #b83a3a;\n      margin-right: 10px;\n      margin-bottom: 10px; }\n  .mask_wrap .current_class_wrap .class_content {\n      margin-left: 60px; }\n  .mask_wrap .current_class_wrap .class_content .class_attribute {\n        font-style: italic;\n        padding: 4px 0; }\n  .mask_wrap .current_class_wrap .bracket_end {\n      margin-top: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2RvY3VtZW50L0Q6XFxNeSBXb3JrU3RhdGlvblxcUHJvamVjdHNcXEF0b21Dc3NTaXRlL3NyY1xcYXBwXFxyb3V0ZXNcXGRvY3VtZW50XFxkb2N1bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL2RvY3VtZW50L0Q6XFxNeSBXb3JrU3RhdGlvblxcUHJvamVjdHNcXEF0b21Dc3NTaXRlL3NyY1xcdmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ00saUJBQWdCLEVBZ0RyQjtFQWpERDtJQUlZLGNBQWE7SUFDYixtQkFBa0IsRUEyQ3ZCO0VBaERQO01BUWtCLG9DQUFtQyxFQUN4QztFQVRiO01BYXdCLG9CQUFtQixFQWlDeEI7RUE5Q25CO1FBZ0I4QixnQkFBZTtRQUNmLGtCQUFpQjtRQUNqQiwrQkNwQlYsRURxQks7RUFuQnpCO1FBdUJvQyxnQkFBZSxFQUNwQjtFQXhCL0I7UUEyQm9DLHFCQUFvQjtRQUNwQixhQUFZO1FBQ1osa0JBQWlCO1FBQ2pCLG1CQUFrQjtRQUNsQiw2QkFBNEI7UUFDNUIsaUJBQWdCO1FBQ2hCLG9CQUFtQjtRQUNuQixZQUFXO1FBQ1gsaUJBQWdCO1FBQ2hCLGdCQUFlO1FBQ2YsZ0JBQWU7UUFDZiwwQkFBeUIsRUFDOUI7RUF2Qy9CO1FBMENvQywwQkM1Q2hCO1FENkNnQixhQUFZLEVBQ2pCO0VBTy9CO0VBQ00sMkNBQTBDO0VBQzFDLGNBQWEsRUE0Q2xCO0VBOUNEO0lBS1ksWUFBVztJQUNYLGFBQVk7SUFDWix3QkFBdUI7SUFDdkIsMkJBQTBCO0lBQzFCLG9CQUFtQjtJQUNuQixjQUFhO0lBQ2Isa0JBQWlCO0lBQ2pCLGdCQUFlLEVBaUNwQjtFQTdDUDtNQWVrQixVQUFTO01BQ1QsV0FBVSxFQVNmO0VBekJiO1FBa0J3QixZQUFXO1FBQ1gsYUFBWTtRQUNaLG9CQUFtQjtRQUNuQixjQUFhO1FBQ2IsYUFBWTtRQUNaLG1CQUFrQixFQUN2QjtFQXhCbkI7TUE0QmtCLGVBQWM7TUFDZCxtQkFBa0I7TUFDbEIsb0JBQW1CLEVBQ3hCO0VBL0JiO01Ba0NrQixrQkFBaUIsRUFNdEI7RUF4Q2I7UUFxQ3dCLG1CQUFrQjtRQUNsQixlQUFjLEVBQ25CO0VBdkNuQjtNQTJDa0IsaUJBQWdCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2RvY3VtZW50L2RvY3VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFycy5zY3NzJztcclxuXHJcbi5kb2N1bWVudF93cmFwIHtcclxuICAgICAgbWFyZ2luLXRvcDogNzBweDtcclxuXHJcbiAgICAgIC5kb2N1bWVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuXHJcbiAgICAgICAgICAgIC5sZWFkaW5nX2JveCB7XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDE0MHB4IC0gMTIycHgpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jbGFzc19pdGVtcyB7XHJcbiAgICAgICAgICAgICAgICAgIC5jbGFzc19pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgJGNvbG9yX21haW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbGFzc2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzOm50aC1vZi10eXBlKDZuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNsYXNzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoOTUlIC8gNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2xhc3M6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3JfbWFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG5cclxuLm1hc2tfd3JhcCB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgICAgei1pbmRleDogOTk5OTtcclxuXHJcbiAgICAgIC5jdXJyZW50X2NsYXNzX3dyYXAge1xyXG4gICAgICAgICAgICB3aWR0aDogMzB2dztcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEycHggYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcblxyXG4gICAgICAgICAgICAub3B0aW9uc3tcclxuICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2xhc3NfbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAjYjgzYTNhO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jbGFzc19jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDYwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAuY2xhc3NfYXR0cmlidXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuYnJhY2tldF9lbmQge1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxufSIsIiRjb2xvcl9tYWluOiAjMzFiNTczO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/routes/document/document.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/document/document.component.ts ***!
  \*******************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(http) {
        this.http = http;
        this.is_classes_ready = false;
        this.is_modal_show = false;
        this.current_class = {
            "name": "flex",
            "value": [
                "display: -webkit-box;",
                "display: -ms-flexbox;"
            ]
        };
        this.bracket_start = '{';
        this.bracket_end = '}';
    }
    DocumentComponent.prototype.getClasses = function () {
        var _this = this;
        this.http
            .get('assets/data/classes.json')
            .subscribe(function (data) {
            _this.class_items = data;
            setTimeout(function () {
                _this.is_classes_ready = true;
            }, 300);
        });
    };
    DocumentComponent.prototype.handleClickClose = function () {
        this.is_modal_show = false;
    };
    DocumentComponent.prototype.handleClickClass = function (obj) {
        this.current_class = obj;
        this.is_modal_show = true;
    };
    DocumentComponent.prototype.ngOnInit = function () {
        this.getClasses();
    };
    DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document',
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/routes/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/routes/document/document.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/routes/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/routes/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg_home fixed w_100\">\n      <img\n            class=\"w_100\"\n            src=\"../../../assets/images/bg_home.jpg\"\n            alt=\"bg_home\"\n      >\n</div>\n\n<div class=\"cover bg_black w_100 relative border_box flex justify_center overflow_hidden\">\n      <img\n            class=\"bg_cover absolute\"\n            src=\"../../../assets/images/bg_cover.png\"\n            alt=\"bg_cover\"\n      >\n      <div class=\"cover_content flex flex_column align_center overflow_visible\">\n            <div class=\"big_title\">\n                  <span class=\"white font_bold\">atom.css</span>\n            </div>\n            <div class=\"slogan\">\n                  <span class=\"white fontsize_18 letter_spacing_1 text_center inline_block\">A atom-style\n                        library of CSS\n                        atomic\n                        elements. To build app\n                        faster and\n                        more flexible!</span>\n            </div>\n            <div class=\"cover_options flex\">\n                  <a routerLink=\"/docs\">\n                        <button class=\"btn_doc btn btn_main\">\n                              Documentation\n                        </button>\n                  </a>\n                  <a\n                        href=\"https://github.com/isVertical/atom.css\"\n                        target=\"_blank\"\n                  >\n                        <button class=\"btn_github btn btn_sub bg_black\">\n                              <img\n                                    class=\"mr_10\"\n                                    src=\"../../../assets/images/icon_github.png\"\n                                    alt=\"icon_github\"\n                              >\n                              <span>Source code</span>\n                        </button>\n                  </a>\n            </div>\n      </div>\n</div>\n\n<div class=\"featrues w_100 border_box flex justify_center\">\n      <div class=\"featrues_content flex justify_around\">\n            <div class=\"featrues_item flex flex_column align_center\">\n                  <img\n                        class=\"icon\"\n                        src=\"../../../assets/images/icon_flexible.png\"\n                        alt=\"icon_featrue\"\n                  >\n                  <span class=\"title fontsize_18 font_bolder\">FLEXIBLE</span>\n                  <span class=\"describtion text_center fontsize_16 color_333\">Built your web app like built a building\n                        blocks,change everything you want change in HTML.</span>\n            </div>\n            <div class=\"featrues_item flex flex_column align_center\">\n                  <img\n                        class=\"icon\"\n                        src=\"../../../assets/images/icon_simple.png\"\n                        alt=\"icon_featrue\"\n                  >\n                  <span class=\"title fontsize_18 font_bolder\">SIMPLE</span>\n                  <span class=\"describtion text_center fontsize_16 color_333\">Write atom-style CSS in HTML/React\n                        components/Angular templates,no more others,just CSS.</span>\n            </div>\n            <div class=\"featrues_item flex flex_column align_center\">\n                  <img\n                        class=\"icon\"\n                        src=\"../../../assets/images/icon_faster.png\"\n                        alt=\"icon_featrue\"\n                  >\n                  <span class=\"title fontsize_18 font_bolder\">FASTER</span>\n                  <span class=\"describtion text_center fontsize_16 color_333\">To code like a machine,write more\n                        pages in a few times,spend more time in JS or API.</span>\n            </div>\n      </div>\n</div>\n\n<div class=\"contact_us border_box flex justify_center\">\n      <div class=\"contact_us_content flex justify_start\">\n            <div class=\"wrap flex flex_column\">\n                  <span class=\"title fontsize_32 font_bold white letter_spacing_1\">The way of builting web App that\n                        based\n                        on future. Build in this way. </span>\n                  <span class=\"description fontsize_18 white letter_spacing_1\">Build your web App in the minimalist\n                        wind & atom.css.\n                        Contact\n                        us to get your own web App built by atom.css and Fic Design.</span>\n                  <button\n                        class=\"btn font_bold fontsize_16 border_none bg_white\"\n                        (click)=\"handleClickContact()\"\n                  >Contact us</button>\n            </div>\n      </div>\n</div>\n\n<div class=\"demonstration w_100 flex justify_center\">\n      <div class=\"demonstration_content flex flex_column align_center\">\n            <span class=\"title font_bold white\">Demonstration</span>\n            <span class=\"describtion white text_center fontsize_16\">See how to use atom.css building you web\n                  Appfaster,and\n                  flexible,\n                  all usage in Doc.</span>\n            <div class=\"demo_wrap\">\n                  <div class=\"toggle w_100 border_box flex\">\n                        <button\n                              *ngFor=\"let item of toggle_options\"\n                              [class.active]=\"item === selected_option\"\n                              (click)=\"onSelect(item)\"\n                              class=\"btn_toggle border_box white fontsize_14\"\n                        >{{item}}</button>\n                  </div>\n                  <div\n                        class=\"demons_panel flex w_100\"\n                        *ngIf=\"selected_option==='Center'\"\n                  >\n                        <div class=\"options h_100 border_box flex flex_column color_888 fontsize_12\">\n                              <a class=\"option_item active letter_spacing_1 border_box\">flex</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">justify_center</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">align_center</a>\n                        </div>\n                        <div class=\"panel h_100 border_box relative\">\n                              <div class=\"block_wrap w_100 h_100 border_box flex justify_center align_center\">\n                                    <div class=\"block_test bg_red white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_green white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_blue white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_orange black fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_black white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_white black fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                              </div>\n                        </div>\n                  </div>\n                  <div\n                        class=\"demons_panel flex w_100\"\n                        *ngIf=\"selected_option==='Vertical Center'\"\n                  >\n                        <div class=\"options h_100 border_box flex flex_column color_888 fontsize_12\">\n                              <a class=\"option_item active letter_spacing_1 border_box\">flex</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">align_center</a>\n                        </div>\n                        <div class=\"panel h_100 border_box relative\">\n                              <div class=\"block_wrap w_100 h_100 border_box flex align_center\">\n                                    <div class=\"block_test bg_red white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_green white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_blue white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_orange black fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_black white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_white black fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                              </div>\n                        </div>\n                  </div>\n                  <div\n                        class=\"demons_panel flex w_100\"\n                        *ngIf=\"selected_option==='Horizontal Center'\"\n                  >\n                        <div class=\"options h_100 border_box flex flex_column color_888 fontsize_12\">\n                              <a class=\"option_item active letter_spacing_1 border_box\">flex</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">justify_center</a>\n                        </div>\n                        <div class=\"panel h_100 border_box relative\">\n                              <div class=\"block_wrap w_100 h_100 border_box flex justify_center\">\n                                    <div class=\"block_test bg_red white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_green white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_blue white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_orange black fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_black white fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_white black fontsize_16 border_none flex justify_center align_center\">Who\n                                          is Superman</div>\n                              </div>\n                        </div>\n                  </div>\n                  <div\n                        class=\"demons_panel flex w_100\"\n                        *ngIf=\"selected_option==='Float'\"\n                  >\n                        <div class=\"options h_100 border_box flex flex_column color_888 fontsize_12\">\n                              <a class=\"option_item active letter_spacing_1 border_box\">left</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">clearfix</a>\n                        </div>\n                        <div class=\"panel h_100 border_box relative\">\n                              <div class=\"block_wrap w_100 h_100 border_box clearfix\">\n                                    <div class=\"block_test bg_red white fontsize_16 border_none left flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_green white fontsize_16 border_none left flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_blue white fontsize_16 border_none left flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_orange black fontsize_16 border_none left flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_black white fontsize_16 border_none left flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_white black fontsize_16 border_none left flex align_center\">Who\n                                          is Superman</div>\n                              </div>\n                        </div>\n                  </div>\n                  <div\n                        class=\"demons_panel flex w_100\"\n                        *ngIf=\"selected_option==='Interval'\"\n                  >\n                        <div class=\"options h_100 border_box flex flex_column color_888 fontsize_12\">\n                              <a class=\"option_item active letter_spacing_1 border_box\">pt_20</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">pb_20</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">mr_20</a>\n                        </div>\n                        <div class=\"panel h_100 border_box relative\">\n                              <div class=\"block_wrap w_100 h_100 border_box flex\">\n                                    <div class=\"block_test bg_red white fontsize_16 border_none flex align_center pt_20 pb_20 mr_20\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_green white fontsize_16 border_none flex align_center pt_20 pb_20 mr_20\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_blue white fontsize_16 border_none flex align_center pt_20 pb_20 mr_20\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_orange black fontsize_16 border_none flex align_center pt_20 pb_20 mr_20\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_black white fontsize_16 border_none flex align_center pt_20 pb_20 mr_20\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_white black fontsize_16 border_none flex align_center pt_20 pb_20 mr_20\">Who\n                                          is Superman</div>\n                              </div>\n                        </div>\n                  </div>\n                  <div\n                        class=\"demons_panel flex w_100\"\n                        *ngIf=\"selected_option==='Font'\"\n                  >\n                        <div class=\"options h_100 border_box flex flex_column color_888 fontsize_12\">\n                              <a class=\"option_item active letter_spacing_1 border_box\">font_bolder</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">fontsize_32</a>\n                        </div>\n                        <div class=\"panel h_100 border_box relative\">\n                              <div class=\"block_wrap w_100 h_100 border_box flex\">\n                                    <div class=\"block_test bg_red white fontsize_16 border_none flex align_center font_bolder fontsize_32\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_green white fontsize_16 border_none flex align_center font_bolder fontsize_32\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_blue white fontsize_16 border_none flex align_center font_bolder fontsize_32\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_orange black fontsize_16 border_none flex align_center font_bolder fontsize_32\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_black white fontsize_16 border_none flex align_center font_bolder fontsize_32\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_white black fontsize_16 border_none flex align_center font_bolder fontsize_32\">Who\n                                          is Superman</div>\n                              </div>\n                        </div>\n                  </div>\n                  <div\n                        class=\"demons_panel flex w_100\"\n                        *ngIf=\"selected_option==='Color'\"\n                  >\n                        <div class=\"options h_100 border_box flex flex_column color_888 fontsize_12\">\n                              <a class=\"option_item active letter_spacing_1 border_box\">bg_whitesmoke</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">black</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">white</a>\n                        </div>\n                        <div class=\"panel h_100 border_box relative\">\n                              <div class=\"block_wrap w_100 h_100 border_box flex bg_whitesmoke\">\n                                    <div class=\"block_test bg_red white fontsize_16 border_none flex align_center black\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_green white fontsize_16 border_none flex align_center black\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_blue white fontsize_16 border_none flex align_center black\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_orange black fontsize_16 border_none flex align_center black\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_black white fontsize_16 border_none flex align_center white\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_white black fontsize_16 border_none flex align_center\">Who\n                                          is Superman</div>\n                              </div>\n                        </div>\n                  </div>\n                  <div\n                        class=\"demons_panel flex w_100\"\n                        *ngIf=\"selected_option==='Position'\"\n                  >\n                        <div class=\"options h_100 border_box flex flex_column color_888 fontsize_12\">\n                              <a class=\"option_item active letter_spacing_1 border_box\">relative</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">absolute</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">right_0</a>\n                              <a class=\"option_item active letter_spacing_1 border_box\">bottom_0</a>\n                        </div>\n                        <div class=\"panel h_100 border_box relative\">\n                              <div class=\"block_wrap border_box flex absolute right_0 bottom_0\">\n                                    <div class=\"block_test bg_red white fontsize_16 border_none flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_green white fontsize_16 border_none flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_blue white fontsize_16 border_none flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_orange black fontsize_16 border_none flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_black white fontsize_16 border_none flex align_center\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_white black fontsize_16 border_none flex align_center\">Who\n                                          is Superman</div>\n                              </div>\n                        </div>\n                  </div>\n                  <div\n                        class=\"demons_panel flex w_100\"\n                        *ngIf=\"selected_option==='Display'\"\n                  >\n                        <div class=\"options h_100 border_box flex flex_column color_888 fontsize_12\">\n                              <a class=\"option_item active letter_spacing_1 border_box\">radius_4</a>\n                        </div>\n                        <div class=\"panel h_100 border_box relative\">\n                              <div class=\"block_wrap border_box w_100 h_100 flex\">\n                                    <div class=\"block_test bg_red white fontsize_16 border_none flex align_center radius_4 text_overflow_ellipsis\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_green white fontsize_16 border_none flex align_center radius_4\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_blue white fontsize_16 border_none flex align_center radius_4\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_orange black fontsize_16 border_none flex align_center radius_4\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_black white fontsize_16 border_none flex align_center radius_4\">Who\n                                          is Superman</div>\n                                    <div class=\"block_test bg_white black fontsize_16 border_none flex align_center radius_4\">Who\n                                          is Superman</div>\n                              </div>\n                        </div>\n                  </div>\n            </div>\n      </div>\n</div>\n\n<div class=\"who_used w_100 flex justify_center\">\n      <div class=\"who_used_content flex justify_center\">\n            <div class=\"wrap flex flex_column align_center\">\n                  <span class=\"title font_bold\">Who used</span>\n                  <div class=\"description_items flex flex_column align_center w_100\">\n                        <span class=\"describtion black text_center fontsize_16 letter_spacing_1\">We believe the truth\n                              that there must have someone know atom.css and like it.</span>\n                        <span class=\"describtion black text_center fontsize_16 letter_spacing_1\">Just let the skeptics\n                              to eat shit![emoji]</span>\n                  </div>\n                  <div class=\"used_items w_100 flex flex_wrap justify_center\">\n                        <div class=\"used_item bg_white flex justify_center align_center\">\n                              <img\n                                    src=\"../../../assets/images/microsoft.png\"\n                                    alt=\"iocn_used\"\n                              >\n                        </div>\n                        <div class=\"used_item bg_white flex justify_center align_center\">\n                              <img\n                                    src=\"../../../assets/images/apple.png\"\n                                    alt=\"iocn_used\"\n                              >\n                        </div>\n                        <div class=\"used_item bg_white flex justify_center align_center\">\n                              <img\n                                    src=\"../../../assets/images/amazon.png\"\n                                    alt=\"iocn_used\"\n                              >\n                        </div>\n                        <div class=\"used_item bg_white flex justify_center align_center\">\n                              <img\n                                    src=\"../../../assets/images/netflix.png\"\n                                    alt=\"iocn_used\"\n                              >\n                        </div>\n                        <div class=\"used_item bg_white flex justify_center align_center\">\n                              <img\n                                    src=\"../../../assets/images/facebook.png\"\n                                    alt=\"iocn_used\"\n                              >\n                        </div>\n                        <div class=\"used_item bg_white flex justify_center align_center\">\n                              <img\n                                    src=\"../../../assets/images/github.png\"\n                                    alt=\"iocn_used\"\n                              >\n                        </div>\n                        <div class=\"used_item bg_white flex justify_center align_center\">\n                              <img\n                                    src=\"../../../assets/images/google.png\"\n                                    alt=\"iocn_used\"\n                              >\n                        </div>\n                  </div>\n            </div>\n      </div>\n</div>\n\n<div class=\"support_us w_100 flex justify_center\">\n      <div class=\"support_us_content flex justify_center\">\n            <div class=\"wrap flex flex_column align_center w_100\">\n                  <span class=\"title font_bold\">Support us</span>\n                  <div class=\"description_items flex flex_column align_center\">\n                        <span class=\"description black text_center fontsize_16 letter_spacing_1\">If you want support\n                              us, you\n                              can give us the order that design & frontend,you provide the Apis, we will design\n                        </span>\n                        <span class=\"description black text_center fontsize_16 letter_spacing_1\">and build HTML\n                              templates by Fic Design and atom.css for you.</span>\n                        <span class=\"description black text_center fontsize_16 letter_spacing_1\">Besides, we don`t\n                              accept any donation.</span>\n                  </div>\n\n                  <span class=\"sponsors black font_bold fontsize_18\">Customer sponsors</span>\n                  <button\n                        class=\"btn btn_main\"\n                        (click)=\"handleClickContact()\"\n                  >Become a customer sponsor</button>\n            </div>\n      </div>\n</div>\n\n<section\n      *ngIf=\"is_modal_show\"\n      class=\"contact_wrap w_100vw h_100vh fixed top_0 left_0 flex justify_center align_center\"\n>\n      <div class=\"contact border_box flex flex_column justify_center align_center relative\">\n            <div class=\"options absolute flex\">\n                  <button\n                        class=\"bg_red btn\"\n                        (click)=\"handleClickClose()\"\n                  ></button>\n                  <button class=\"bg_orange btn\"></button>\n                  <button class=\"bg_green btn\"></button>\n            </div>\n            <span class=\"title\">OUR EMAIL:</span>\n            <span class=\"email font_bold\">xiewendao123@foxmail.com</span>\n      </div>\n</section>"

/***/ }),

/***/ "./src/app/routes/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/routes/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg_home {\n  top: -600px;\n  z-index: -1; }\n\n.cover {\n  padding: 240px 0 200px; }\n\n@-webkit-keyframes rotateForever {\n  from {\n    rotate: 0deg; }\n  to {\n    rotate: 360deg; } }\n\n@keyframes rotateForever {\n  from {\n    rotate: 0deg; }\n  to {\n    rotate: 360deg; } }\n\n.cover .bg_cover {\n    right: 0px;\n    top: 160px;\n    opacity: 0.6;\n    -webkit-animation: rotateForever 240s linear infinite;\n            animation: rotateForever 240s linear infinite; }\n\n.cover .cover_content {\n    width: 1200px; }\n\n.cover .cover_content .big_title {\n      padding-top: 16px;\n      padding-bottom: 36px; }\n\n.cover .cover_content .big_title span {\n        font-size: 72px; }\n\n.cover .cover_content .slogan {\n      padding-bottom: 72px; }\n\n.cover .cover_content .slogan span {\n        width: 640px;\n        line-height: 1.8; }\n\n.cover .cover_content .cover_options .btn {\n      width: 240px; }\n\n.cover .cover_content .cover_options .btn:hover {\n      border-radius: 100px; }\n\n.cover .cover_content .cover_options .btn_doc {\n      margin-right: 30px; }\n\n.cover .cover_content .cover_options .btn_doc:hover {\n      box-shadow: 0 0 80px #31b573; }\n\n.cover .cover_content .cover_options .btn_github a img {\n      max-width: 16px; }\n\n.cover .cover_content .cover_options .btn_github:hover {\n      box-shadow: 0 0 80px #fff; }\n\n.featrues {\n  padding: 120px 0;\n  background: #f1f3f3; }\n\n.featrues .featrues_content {\n    width: 1200px; }\n\n.featrues .featrues_content .featrues_item {\n      width: 300px; }\n\n.featrues .featrues_content .featrues_item .icon {\n        max-width: 80px;\n        max-height: 80px;\n        margin-bottom: 40px; }\n\n.featrues .featrues_content .featrues_item .title {\n        margin-bottom: 20px;\n        color: #31b573; }\n\n.featrues .featrues_content .featrues_item .describtion {\n        line-height: 2; }\n\n.contact_us {\n  padding: 120px 0; }\n\n.contact_us .contact_us_content {\n    width: 1200px; }\n\n.contact_us .contact_us_content .wrap {\n      width: 640px;\n      margin-left: 560px; }\n\n.contact_us .contact_us_content .wrap .title {\n        line-height: 2;\n        margin-bottom: 30px; }\n\n.contact_us .contact_us_content .wrap .description {\n        line-height: 2;\n        margin-bottom: 50px; }\n\n.contact_us .contact_us_content .wrap .btn {\n        width: 200px;\n        height: 54px;\n        color: #31b573; }\n\n.demonstration {\n  background: #111;\n  padding: 120px 0; }\n\n.demonstration .demonstration_content {\n    width: 1200px; }\n\n.demonstration .demonstration_content .title {\n      font-size: 36px;\n      margin-bottom: 50px; }\n\n.demonstration .demonstration_content .describtion {\n      width: 500px;\n      margin-bottom: 100px;\n      line-height: 2; }\n\n.demonstration .demonstration_content .demo_wrap {\n      width: 1200px;\n      height: 580px;\n      background: #1b1b1b; }\n\n.demonstration .demonstration_content .demo_wrap .toggle {\n        height: 80px;\n        background: #1f1f1f; }\n\n.demonstration .demonstration_content .demo_wrap .toggle .active {\n          background: #1b1b1b !important; }\n\n.demonstration .demonstration_content .demo_wrap .toggle .btn_toggle {\n          width: 133.33333333px;\n          padding: 0 20px;\n          word-wrap: break-word;\n          border: none;\n          outline: none;\n          background: transparent;\n          border-right: 1px solid #222;\n          border-top: 1px solid #222;\n          border-bottom: 1px solid #222;\n          line-height: 1.5;\n          cursor: pointer; }\n\n.demonstration .demonstration_content .demo_wrap .toggle .btn_toggle:hover {\n          background: #1b1b1b !important; }\n\n.demonstration .demonstration_content .demo_wrap .toggle .btn_toggle:first-child {\n          border-left: 1px solid #222; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel {\n        height: 500px; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel .options {\n          width: 20%;\n          overflow-y: auto;\n          border-right: 1px solid #222; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel .options .active {\n            color: #31b573; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel .options .option_item {\n            padding: 16px 20px;\n            cursor: pointer;\n            border-bottom: 1px solid #222; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel .panel {\n          width: 80%; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel .panel .btn_show_code {\n            right: 20px;\n            bottom: 20px;\n            cursor: pointer;\n            background: transparent;\n            border: 2px solid #31b573;\n            color: #31b573;\n            outline: none;\n            padding: 6px 12px;\n            z-index: 10;\n            transition: all ease 0.3s; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel .panel .btn_show_code:hover {\n            border-radius: 0; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel .panel .block_wrap {\n            padding: 40px;\n            overflow: auto;\n            border: 2px solid #333; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel .panel .block_wrap .block_test {\n              width: 120px;\n              height: 120px;\n              outline: none;\n              text-align: center; }\n\n.demonstration .demonstration_content .demo_wrap .demons_panel .panel .code_wrap {\n            border-radius: 8px;\n            background: rgba(34, 34, 34, 0.6); }\n\n.who_used {\n  background: #f7f7f7;\n  padding: 120px 0; }\n\n.who_used .who_used_content {\n    width: 1200px; }\n\n.who_used .who_used_content .wrap .title {\n      margin-bottom: 32px;\n      font-size: 36px;\n      color: #31b573; }\n\n.who_used .who_used_content .wrap .description_items {\n      line-height: 2;\n      margin-bottom: 80px; }\n\n.who_used .who_used_content .wrap .used_items {\n      width: 500px; }\n\n.who_used .who_used_content .wrap .used_items .used_item {\n        width: 80px;\n        height: 80px;\n        border-radius: 80px;\n        margin: 10px; }\n\n.who_used .who_used_content .wrap .used_items .used_item img {\n          max-width: 30px; }\n\n.support_us {\n  background: #fdfdfd; }\n\n.support_us .support_us_content {\n    width: 1200px;\n    padding: 120px 0; }\n\n.support_us .support_us_content .wrap .title {\n      font-size: 36px;\n      color: #31b573;\n      margin-bottom: 48px; }\n\n.support_us .support_us_content .wrap .description_items {\n      line-height: 2;\n      margin-bottom: 120px; }\n\n.support_us .support_us_content .wrap .sponsors {\n      margin-bottom: 60px; }\n\n.support_us .support_us_content .wrap .btn {\n      width: 280px;\n      height: 54px; }\n\n.contact_wrap {\n  z-index: 9999;\n  background-color: rgba(255, 255, 255, 0.9); }\n\n.contact_wrap .contact {\n    width: 30vw;\n    height: 30vh;\n    padding: 60px;\n    background-color: white;\n    box-shadow: 0 0 24px #ddd;\n    border-radius: 10px; }\n\n.contact_wrap .contact .options {\n      top: 20px;\n      left: 20px; }\n\n.contact_wrap .contact .options .btn {\n        width: 20px;\n        height: 20px;\n        border-radius: 20px;\n        outline: none;\n        border: none;\n        margin-right: 10px; }\n\n.contact_wrap .contact .title {\n      color: #333;\n      font-size: 20px;\n      margin-bottom: 30px; }\n\n.contact_wrap .contact .email {\n      color: #31b573;\n      font-size: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2hvbWUvRDpcXE15IFdvcmtTdGF0aW9uXFxQcm9qZWN0c1xcQXRvbUNzc1NpdGUvc3JjXFxhcHBcXHJvdXRlc1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcm91dGVzL2hvbWUvRDpcXE15IFdvcmtTdGF0aW9uXFxQcm9qZWN0c1xcQXRvbUNzc1NpdGUvc3JjXFx2YXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDTSxZQUFXO0VBQ1gsWUFBVyxFQUNoQjs7QUFFRDtFQUNNLHVCQUFzQixFQXNFM0I7O0FBcEVLO0VBQ007SUFDTSxhQUFjLEVBQUE7RUFHcEI7SUFDTSxlQUFnQixFQUFBLEVBQUE7O0FBTjVCO0VBQ007SUFDTSxhQUFjLEVBQUE7RUFHcEI7SUFDTSxlQUFnQixFQUFBLEVBQUE7O0FBVGxDO0lBY1ksV0FBVTtJQUNWLFdBQVU7SUFDVixhQUFZO0lBQ1osc0RBQTZDO1lBQTdDLDhDQUE2QyxFQUNsRDs7QUFsQlA7SUFxQlksY0FBYSxFQWlEbEI7O0FBdEVQO01Bd0JrQixrQkFBaUI7TUFDakIscUJBQW9CLEVBS3pCOztBQTlCYjtRQTRCd0IsZ0JBQWUsRUFDcEI7O0FBN0JuQjtNQWlDa0IscUJBQW9CLEVBTXpCOztBQXZDYjtRQW9Dd0IsYUFBWTtRQUNaLGlCQUFnQixFQUNyQjs7QUF0Q25CO01BMkN3QixhQUFZLEVBQ2pCOztBQTVDbkI7TUErQ3dCLHFCQUFvQixFQUN6Qjs7QUFoRG5CO01BbUR3QixtQkFBa0IsRUFDdkI7O0FBcERuQjtNQXVEd0IsNkJDOURKLEVEK0REOztBQXhEbkI7TUE2RG9DLGdCQUFlLEVBQ3BCOztBQTlEL0I7TUFtRXdCLDBCQUF5QixFQUM5Qjs7QUFLbkI7RUFDTSxpQkFBZ0I7RUFDaEIsb0JBQW1CLEVBd0J4Qjs7QUExQkQ7SUFLWSxjQUFhLEVBb0JsQjs7QUF6QlA7TUFRa0IsYUFBWSxFQWdCakI7O0FBeEJiO1FBV3dCLGdCQUFlO1FBQ2YsaUJBQWdCO1FBQ2hCLG9CQUFtQixFQUN4Qjs7QUFkbkI7UUFpQndCLG9CQUFtQjtRQUNuQixlQ2xHSixFRG1HRDs7QUFuQm5CO1FBc0J3QixlQUFjLEVBQ25COztBQUtuQjtFQUNNLGlCQUFnQixFQTBCckI7O0FBM0JEO0lBSVksY0FBYSxFQXNCbEI7O0FBMUJQO01BT2tCLGFBQVk7TUFDWixtQkFBa0IsRUFpQnZCOztBQXpCYjtRQVd3QixlQUFjO1FBQ2Qsb0JBQW1CLEVBQ3hCOztBQWJuQjtRQWdCd0IsZUFBYztRQUNkLG9CQUFtQixFQUN4Qjs7QUFsQm5CO1FBcUJ3QixhQUFZO1FBQ1osYUFBWTtRQUNaLGVDbklKLEVEb0lEOztBQUtuQjtFQUNNLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFpSHJCOztBQW5IRDtJQUtZLGNBQWEsRUE2R2xCOztBQWxIUDtNQVFrQixnQkFBZTtNQUNmLG9CQUFtQixFQUN4Qjs7QUFWYjtNQWFrQixhQUFZO01BQ1oscUJBQW9CO01BQ3BCLGVBQWMsRUFDbkI7O0FBaEJiO01BbUJrQixjQUFhO01BQ2IsY0FBYTtNQUNiLG9CQUFtQixFQTRGeEI7O0FBakhiO1FBd0J3QixhQUFZO1FBQ1osb0JBQW1CLEVBMkJ4Qjs7QUFwRG5CO1VBNEI4QiwrQkFBOEIsRUFDbkM7O0FBN0J6QjtVQWdDOEIsc0JBQWlCO1VBQ2pCLGdCQUFlO1VBQ2Ysc0JBQXFCO1VBQ3JCLGFBQVk7VUFDWixjQUFhO1VBQ2Isd0JBQXVCO1VBQ3ZCLDZCQUE0QjtVQUM1QiwyQkFBMEI7VUFDMUIsOEJBQTZCO1VBQzdCLGlCQUFnQjtVQUNoQixnQkFBZSxFQUNwQjs7QUEzQ3pCO1VBOEM4QiwrQkFBOEIsRUFDbkM7O0FBL0N6QjtVQWtEOEIsNEJBQTJCLEVBQ2hDOztBQW5EekI7UUF1RHdCLGNBQWEsRUF5RGxCOztBQWhIbkI7VUEwRDhCLFdBQVU7VUFDVixpQkFBZ0I7VUFDaEIsNkJBQTRCLEVBV2pDOztBQXZFekI7WUErRG9DLGVDeE1oQixFRHlNVzs7QUFoRS9CO1lBbUVvQyxtQkFBa0I7WUFDbEIsZ0JBQWU7WUFDZiw4QkFBNkIsRUFDbEM7O0FBdEUvQjtVQTBFOEIsV0FBVSxFQXFDZjs7QUEvR3pCO1lBNkVvQyxZQUFXO1lBQ1gsYUFBWTtZQUNaLGdCQUFlO1lBQ2Ysd0JBQXVCO1lBQ3ZCLDBCQzFOaEI7WUQyTmdCLGVDM05oQjtZRDROZ0IsY0FBYTtZQUNiLGtCQUFpQjtZQUNqQixZQUFXO1lBQ1gsMEJBQXlCLEVBQzlCOztBQXZGL0I7WUEwRm9DLGlCQUFnQixFQUNyQjs7QUEzRi9CO1lBOEZvQyxjQUFhO1lBQ2IsZUFBYztZQUNkLHVCQUFzQixFQU8zQjs7QUF2Ry9CO2NBa0cwQyxhQUFZO2NBQ1osY0FBYTtjQUNiLGNBQWE7Y0FDYixtQkFBa0IsRUFDdkI7O0FBdEdyQztZQTBHb0MsbUJBQWtCO1lBQ2xCLGtDQUFpQyxFQUN0Qzs7QUFTL0I7RUFDTSxvQkFBbUI7RUFDbkIsaUJBQWdCLEVBaUNyQjs7QUFuQ0Q7SUFLWSxjQUFhLEVBNkJsQjs7QUFsQ1A7TUFTd0Isb0JBQW1CO01BQ25CLGdCQUFlO01BQ2YsZUN6UUosRUQwUUQ7O0FBWm5CO01BZXdCLGVBQWM7TUFDZCxvQkFBbUIsRUFDeEI7O0FBakJuQjtNQW9Cd0IsYUFBWSxFQVlqQjs7QUFoQ25CO1FBdUI4QixZQUFXO1FBQ1gsYUFBWTtRQUNaLG9CQUFtQjtRQUNuQixhQUFZLEVBS2pCOztBQS9CekI7VUE2Qm9DLGdCQUFlLEVBQ3BCOztBQU8vQjtFQUNNLG9CQUFtQixFQTRCeEI7O0FBN0JEO0lBSVksY0FBYTtJQUNiLGlCQUFnQixFQXVCckI7O0FBNUJQO01BU3dCLGdCQUFlO01BQ2YsZUM3U0o7TUQ4U0ksb0JBQW1CLEVBQ3hCOztBQVpuQjtNQWV3QixlQUFjO01BQ2QscUJBQW9CLEVBQ3pCOztBQWpCbkI7TUFvQndCLG9CQUFtQixFQUN4Qjs7QUFyQm5CO01Bd0J3QixhQUFZO01BQ1osYUFBWSxFQUNqQjs7QUFLbkI7RUFDTSxjQUFhO0VBQ2IsMkNBQTBDLEVBOEIvQzs7QUFoQ0Q7SUFJWSxZQUFXO0lBQ1gsYUFBWTtJQUNaLGNBQWE7SUFDYix3QkFBdUI7SUFDdkIsMEJBQXlCO0lBQ3pCLG9CQUFtQixFQXNCeEI7O0FBL0JQO01BV2tCLFVBQVM7TUFDVCxXQUFVLEVBU2Y7O0FBckJiO1FBY3dCLFlBQVc7UUFDWCxhQUFZO1FBQ1osb0JBQW1CO1FBQ25CLGNBQWE7UUFDYixhQUFZO1FBQ1osbUJBQWtCLEVBQ3ZCOztBQXBCbkI7TUF1QmtCLFlBQVc7TUFDWCxnQkFBZTtNQUNmLG9CQUFtQixFQUN4Qjs7QUExQmI7TUE0QmtCLGVDOVZFO01EK1ZGLGdCQUFlLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcnMuc2Nzcyc7XHJcblxyXG4uYmdfaG9tZSB7XHJcbiAgICAgIHRvcDogLTYwMHB4O1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLmNvdmVyIHtcclxuICAgICAgcGFkZGluZzogMjQwcHggMCAyMDBweDtcclxuXHJcbiAgICAgIEBrZXlmcmFtZXMgcm90YXRlRm9yZXZlciB7XHJcbiAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICByb3RhdGU6ICgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICByb3RhdGU6ICgzNjBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5iZ19jb3ZlciB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTYwcHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGVGb3JldmVyIDI0MHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY292ZXJfY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcblxyXG4gICAgICAgICAgICAuYmlnX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAzNnB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNzJweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2xvZ2FuIHtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDcycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDY0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5jb3Zlcl9vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgLmJ0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmJ0bjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuYnRuX2RvYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmJ0bl9kb2M6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgODBweCAkY29sb3JfbWFpbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmJ0bl9naXRodWIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmJ0bl9naXRodWI6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgODBweCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG4uZmVhdHJ1ZXMge1xyXG4gICAgICBwYWRkaW5nOiAxMjBweCAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmM2YzO1xyXG5cclxuICAgICAgLmZlYXRydWVzX2NvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG5cclxuICAgICAgICAgICAgLmZlYXRydWVzX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcl9tYWluO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuZGVzY3JpYnRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmNvbnRhY3RfdXMge1xyXG4gICAgICBwYWRkaW5nOiAxMjBweCAwO1xyXG5cclxuICAgICAgLmNvbnRhY3RfdXNfY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcblxyXG4gICAgICAgICAgICAud3JhcCB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDU2MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfbWFpbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxufVxyXG5cclxuLmRlbW9uc3RyYXRpb24ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMTExO1xyXG4gICAgICBwYWRkaW5nOiAxMjBweCAwO1xyXG5cclxuICAgICAgLmRlbW9uc3RyYXRpb25fY29udGVudCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXNjcmlidGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGVtb193cmFwIHtcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1ODBweDtcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFiMWIxYjtcclxuXHJcbiAgICAgICAgICAgICAgICAgIC50b2dnbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZjFmMWY7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFiMWIxYiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnRuX3RvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAoMTIwMHB4LzkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIyMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyMjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG5fdG9nZ2xlOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMWIxYjFiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5idG5fdG9nZ2xlOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMjIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC5kZW1vbnNfcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjIyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfbWFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm9wdGlvbl9pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnRuX3Nob3dfY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcl9tYWluO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yX21haW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ0bl9zaG93X2NvZGU6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5ibG9ja193cmFwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzMzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJsb2NrX3Rlc3R7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb2RlX3dyYXAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzQsIDM0LCAzNCwgMC42KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgfVxyXG59XHJcblxyXG4ud2hvX3VzZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgICBwYWRkaW5nOiAxMjBweCAwO1xyXG5cclxuICAgICAgLndob191c2VkX2NvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG5cclxuICAgICAgICAgICAgLndyYXAge1xyXG4gICAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfbWFpbjtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uX2l0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC51c2VkX2l0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnVzZWRfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbn1cclxuXHJcbi5zdXBwb3J0X3VzIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZkZmRmZDtcclxuXHJcbiAgICAgIC5zdXBwb3J0X3VzX2NvbnRlbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMjBweCAwO1xyXG5cclxuICAgICAgICAgICAgLndyYXAge1xyXG4gICAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfbWFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLmRlc2NyaXB0aW9uX2l0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuc3BvbnNvcnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAuYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDU0cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICB9XHJcbn1cclxuXHJcbi5jb250YWN0X3dyYXB7XHJcbiAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcclxuICAgICAgLmNvbnRhY3R7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMjRweCAjZGRkO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAub3B0aW9uc3tcclxuICAgICAgICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAuYnRue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZW1haWx7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAkY29sb3JfbWFpbjtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgIH1cclxufSIsIiRjb2xvcl9tYWluOiAjMzFiNTczO1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/routes/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.is_modal_show = false;
        this.toggle_options = [
            "Center",
            "Vertical Center",
            "Horizontal Center",
            "Float",
            "Interval",
            "Font",
            "Color",
            "Position",
            "Display"
        ];
        this.selected_option = "Center";
    }
    HomeComponent.prototype.onSelect = function (obj) {
        this.selected_option = obj;
    };
    HomeComponent.prototype.handleClickContact = function () {
        this.is_modal_show = true;
    };
    HomeComponent.prototype.handleClickClose = function () {
        this.is_modal_show = false;
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/routes/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/routes/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\My WorkStation\Projects\AtomCssSite\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-author-author-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/author/auth-notice/auth-notice.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/author/auth-notice/auth-notice.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!message\" class=\"alert alert-{{type}}\" role=\"alert\" #alertNotice>\n\t<div class=\"alert-text\" [innerHTML]=\"message\"></div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/author/author.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/author/author.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-grid kt-grid--hor kt-grid--root kt-login kt-login--v1\" id=\"kt_login\">\n\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile\">\n<!--\t\t<div class=\"kt-grid__item kt-grid__item&#45;&#45;fluid kt-grid kt-grid&#45;&#45;hor-tablet-and-mobile\">-->\n\t\t<!--begin::Aside-->\n\t\t<div class=\"kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside\" style=\"background-image: url(../../../assets/media/bg/bg-4.jpg);\">\n\t\t\t<div class=\"kt-grid__item\">\n\t\t\t\t<a [routerLink]=\"['/']\" class=\"kt-login__logo\">\n<!--\t\t\t\t\t<img src=\"./assets/media/logos/logo-4.png\" alt=\"\">-->\n<!--\t\t\t\t\t<span style=\"color: white; font-size: 2em; font-weight: bold\">PRS_Logo</span>-->\n\t\t\t\t\t<img style=\"width: 118px\" src=\"../assets/media/bg/logo.png\" alt=\"PRS\"/>\n\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver\">\n\t\t\t\t<div class=\"kt-grid__item kt-grid__item--middle\">\n\t\t\t\t\t<h3 class=\"kt-login__title\">Welcome to The Peer Review System!</h3>\n\t\t\t\t\t<h4 class=\"kt-login__subtitle\">The quality and potential contribution of each manuscript is evaluated\n\t\t\t\t\tby one's peers in the scientific community.</h4>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"kt-grid__item\">\n\t\t\t\t<div class=\"kt-login__info\">\n\t\t\t\t\t<div class=\"kt-login__copyright\">\n\t\t\t\t\t\t© {{today|date:'yyyy'}} Blue Marble Enterprises, Inc.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"kt-login__menu\">\n\t\t\t\t\t\t<a [routerLink]=\"['/about']\"  class=\"kt-link\">About</a>\n\t\t\t\t\t\t<a [routerLink]=\"['/contact']\"  class=\"kt-link\">Contact</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- end ::Aside-->\n\n\t\t<!--begin::Content-->\n\t\t<div class=\"kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1 kt-login__wrapper\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t\t<!--end::Content-->\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/author/submission-form/submission-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/author/submission-form/submission-form.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--begin::Body-->\n\n<div class=\"kt-login__body\" *ngIf=\"tags$ | async as tags; else loadingMessage\">\n\t<!--begin::Signin-->\n\t<div class=\"kt-login__form\">\n\t\t<div class=\"kt-login__title\">\n\t\t\t<h3>Submit Your Work For Review</h3>\n\t\t</div>\n\t\t<kt-auth-notice></kt-auth-notice>\n\t\t<form class=\"kt-login__form kt-form\" [formGroup]=\"registerForm\" autocomplete=\"off\">\n\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<mat-label>Title</mat-label>\n\t\t\t\t\t<input matInput type=\"text\" #title placeholder=\"Title\" formControlName=\"title\" autocomplete=\"off\"\n\t\t\t\t\t\t   [autofocus]=\"true\"/>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('title','required')\">\n\t\t\t\t\t\t<strong>Required field</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('title','minlength')\">\n\t\t\t\t\t\t<strong>Minimum Length: 3</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('title','maxlength')\">\n\t\t\t\t\t\t<strong>Maximum length: 320</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<mat-label>Date Written</mat-label>\n\t\t\t\t\t<input matInput [matDatepicker]=\"dp3\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"MM/dd/YYYY\"\n\t\t\t\t\t\t   (focus)=\"dp3.open()\"\n\t\t\t\t\t\t   formControlName=\"date_written\"\n\t\t\t\t\t\t   disabled>\n\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dp3\">\n\t\t\t\t\t\t<mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n\t\t\t\t\t</mat-datepicker-toggle>\n\t\t\t\t\t<mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('date_written','required')\">\n\t\t\t\t\t\t<strong>Required field</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<mat-label>URL of Your Work</mat-label>\n\t\t\t\t\t<input matInput #url type=\"text\" placeholder=\"Url\" formControlName=\"url\"/>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('url','required')\">\n\t\t\t\t\t\t<strong>Required field</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('url','minlength')\">\n\t\t\t\t\t\t<strong> Minimum field length: 3</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('url','maxlength')\">\n\t\t\t\t\t\t<strong> Maximum field length: 100</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<!--         Author textfield-->\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<mat-label>Author(s)</mat-label>\n\t\t\t\t\t<input matInput type=\"text\" placeholder=\"Author(s)\" formControlName=\"author\"/>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('author','required')\">\n\t\t\t\t\t\t<strong>Required field</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('author','minlength')\">\n\t\t\t\t\t\t<strong> Minimum field length: 3</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('author','maxlength')\">\n\t\t\t\t\t\t<strong> Maximum field length: 100</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<mat-label>Email</mat-label>\n\t\t\t\t\t<input matInput type=\"email\" placeholder=\"Email\" formControlName=\"email\" autocomplete=\"off\"/>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('email','required')\">\n\t\t\t\t\t\t<strong>Required field</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('email','email')\">\n\t\t\t\t\t\t<strong>Invalid field</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('email','minlength')\">\n\t\t\t\t\t\t<strong>Minimum field length: 3</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('email','maxlength')\">\n\t\t\t\t\t\t<strong>Maximum field length: 320</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\n\t\t\t<!--         Tag option field-->\n\t\t\t<div class=\"form-group \">\n\n\t\t\t\t<div class=\"flex-container\">\n\t\t\t\t\t<div *ngFor=\"let tag of tags; let index=index\">\n\t\t\t\t\t\t<mat-form-field *ngIf=\"tag.isMultiple=='true'\">\n\t\t\t\t\t\t\t<mat-label>{{tag.Title | titlecase}}</mat-label>\n\t\t\t\t\t\t\t<mat-select\n\t\t\t\t\t\t\t\t#onFocus (focus)=\"onFocus.open()\"\n\t\t\t\t\t\t\t\tplaceholder=\"{{tag.Title | titlecase}}\"\n\t\t\t\t\t\t\t\tformControlName=\"tag{{index+1}}\"\n\t\t\t\t\t\t\t\t[(ngModel)]=\"selectedOptions[tag.Title]\"\n\t\t\t\t\t\t\t\tmultiple\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<mat-select-trigger>\n\n\t\t\t\t\t\t\t\t\t{{selectedOptions[tag.Title] ? selectedOptions[tag.Title][0] : ''}}\n\t\t\t\t\t\t\t\t\t<span *ngIf=\"selectedOptions[tag.Title]?.length > 1\"\n\t\t\t\t\t\t\t\t\t>\n                         \t\t\t\t\t\t (+{{selectedOptions[tag.Title].length - 1}} others)\n                      \t\t\t\t\t    </span>\n\t\t\t\t\t\t\t\t</mat-select-trigger>\n\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let selectOption of tag.TagList\" [value]=\"selectOption\"\n\t\t\t\t\t\t\t\t\t\t\t(onSelectionChange)=\"selectionChanged($event, tag.Title)\"\n\t\t\t\t\t\t\t\t>{{selectOption}}\n\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t</mat-select>\n\n\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\tsingle selection dropboxes-->\n\t\t\t\t\t\t<mat-form-field *ngIf=\"tag.isMultiple=='false'\">\n\t\t\t\t\t\t\t<mat-label>{{tag.Title | titlecase}}</mat-label>\n\t\t\t\t\t\t\t<mat-select #onFocus\n\t\t\t\t\t\t\t\t\t\t(focus)=\"onFocus.open()\"\n\t\t\t\t\t\t\t\t\t\t(selectionChange)=\"onFocus.close(); onFocus.focus()\"\n\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"{{tag.Title | titlecase}}\"\n\t\t\t\t\t\t\t\t\t\tformControlName=\"tag{{index+1}}\"\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"singleSelected[index]\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t\t<mat-option>None</mat-option>\n\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let selectOption of tag.TagList\" [value]=\"selectOption\"\n\t\t\t\t\t\t\t\t>{{selectOption}}\n\t\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t\t</mat-select>\n\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<!--\t\t\t\t\t\t\tChip buttons-->\n\t\t\t<div class=\"form-group\">\n\n\t\t\t\t<mat-form-field>\n\t\t\t\t\t<mat-chip-list #chipList>\n\t\t\t\t\t\t<ng-container *ngFor=\"let chip of singleSelected; let i=index\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<mat-chip *ngIf=\"chip\"\n\t\t\t\t\t\t\t\t\t  [selectable]=\"selectable\"\n\t\t\t\t\t\t\t\t\t  [removable]=\"removable\"\n\t\t\t\t\t\t\t\t\t  (removed)=\"removeFromSingleSelected(chip)\">\n\t\t\t\t\t\t\t\t{{chip}}\n\t\t\t\t\t\t\t\t<mat-icon matChipRemove>cancel</mat-icon>\n\t\t\t\t\t\t\t</mat-chip>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<ng-container *ngFor=\"let chip of chips\">\n\t\t\t\t\t\t\t<mat-chip\n\t\t\t\t\t\t\t\t[selectable]=\"selectable\"\n\t\t\t\t\t\t\t\t[removable]=\"removable\"\n\t\t\t\t\t\t\t\t(removed)=\"remove(chip)\">\n\t\t\t\t\t\t\t\t{{chip}}\n\t\t\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n\t\t\t\t\t\t\t</mat-chip>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t</mat-chip-list>\n\t\t\t\t</mat-form-field>\n\n\t\t\t</div>\n\n\t\t\t<!--begin::Action-->\n\t\t\t<div class=\"kt-login__actions\">\n\t\t\t\t<button routerLink=\"/\" id=\"kt_login_signup_cancel\"\n\t\t\t\t\t\tclass=\"btn btn-secondary btn-elevate kt-login__btn-secondary\">Back\n\t\t\t\t</button>\n\t\t\t\t<button (click)=\"submit()\" id=\"kt_login_signin_submit\"\n\t\t\t\t\t\tclass=\"btn btn-primary btn-elevate kt-login__btn-primary\"\n\t\t\t\t\t\t[ngClass]=\"{'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': loading}\">Submit\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<!--end::Action-->\n\t\t</form>\n\t</div>\n\n</div>\n\n<div class=\"form-group\">\n\t<div id=\"snackbar\">\n<!--\t\t<div class=\"center\">-->\n<!--\t\t\tYour Work has been submitted successfully!-->\n<!--\t\t</div>-->\n\t\tYour Work has been submitted successfully!\n\n\t</div>\n<!--\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"displaySnackBar('Your Work has been submitted successfully!')\">Click</button>-->\n\n</div>\n\n\n\n<ng-template #loadingMessage>\n\t<p class=\"text-center\">Loading...</p>\n</ng-template>\n\n<ng-template #multiple>\n\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/author/tag-selections/tags.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/author/tag-selections/tags.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<td *ngFor=\"let tag of tagLists; let index = index\">\n\t\t\t\t\t<mat-form-field *ngIf=\"index<3\">\n\t\t\t\t\t\t<mat-label>{{tag.name}}</mat-label>\n\n\t\t\t\t\t\t<mat-select placeholder=\"{{tag.name}}\" formControlName=\"{{tag.name}}\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"selecTags\" multiple>\n\t\t\t\t\t\t\t<mat-select-trigger>\n\t\t\t\t\t\t\t\t{{selecTags ? selecTags[index].tagOptions[0] : ''}}\n\t\t\t\t\t\t\t\t<span *ngIf=\"selecTags[index].tagOptions?.length > 1\"\n\t\t\t\t\t\t\t\t\t  class=\"example-additional-selection\">\n\t\t\t\t\t                                (+{{selecTags[index].tagOptions.length - 1}} others)\n\t\t\t\t\t                                </span>\n\t\t\t\t\t\t\t</mat-select-trigger>\n\n\t\t\t\t\t\t\t<mat-option *ngFor=\"let t of tag.tagOptions\" [value]=\"t\"\n\t\t\t\t\t\t\t>{{t}}\n\t\t\t\t\t\t\t</mat-option>\n\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t</mat-form-field>\n<!--\t\t\t\t\t{{selecTags[index].tagOptions}}-->\n<!--\t\t\t\t\t{{selecTags[index].name}}-->\n\n\n\t\t\t\t</td>\n\t\t\t</tr>\n\n\t\t</table>\n\n\t\t<div *ngIf=\"selecTags.length>0\">\n\t\t\t{{selecTags}}\n\t\t</div>\n\t<!--            Chip buttons-->\n<!--\t<mat-form-field *ngIf=\"selecTags.length>0\">-->\n<!--\t\t<mat-chip-list>-->\n<!--\t\t\t<ng-template *ngFor=\"let list of selecTags; let index=index\">-->\n<!--\t\t\t\t{{list}}-->\n<!--\t\t\t\t<mat-chip-->\n<!--\t\t\t\t\t*ngFor=\"let tag of list.tagOptions\"-->\n\n<!--\t\t\t\t\t[selectable]=\"selectable\"-->\n<!--\t\t\t\t\t[removable]=\"removable\"-->\n<!--\t\t\t\t\t(removed)=\"remove(tag,list.name)\">-->\n\n<!--\t\t\t\t\t{{tag}}-->\n<!--\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>-->\n<!--\t\t\t\t</mat-chip>-->\n\n<!--\t\t\t</ng-template>-->\n\n<!--\t\t</mat-chip-list>-->\n<!--\t</mat-form-field>-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/views/author/auth-notice/auth-notice.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/author/auth-notice/auth-notice.component.ts ***!
  \*******************************************************************/
/*! exports provided: AuthNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthNoticeComponent", function() { return AuthNoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");

// Angular

// Auth

var AuthNoticeComponent = /** @class */ (function () {
    /**
     * Component Constructure
     *
     * @param authNoticeService
     * @param cdr
     */
    function AuthNoticeComponent(authNoticeService, cdr) {
        this.authNoticeService = authNoticeService;
        this.cdr = cdr;
        this.message = '';
        // Private properties
        this.subscriptions = [];
    }
    /*
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */
    /**
     * On init
     */
    AuthNoticeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptions.push(this.authNoticeService.onNoticeChanged$.subscribe(function (notice) {
            notice = Object.assign({}, { message: '', type: '' }, notice);
            _this.message = notice.message;
            _this.type = notice.type;
            _this.cdr.markForCheck();
        }));
    };
    /**
     * On destroy
     */
    AuthNoticeComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
    };
    AuthNoticeComponent.ctorParameters = function () { return [
        { type: _core_auth__WEBPACK_IMPORTED_MODULE_2__["AuthNoticeService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthNoticeComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthNoticeComponent.prototype, "message", void 0);
    AuthNoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-auth-notice',
            template: __webpack_require__(/*! raw-loader!./auth-notice.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/author/auth-notice/auth-notice.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth__WEBPACK_IMPORTED_MODULE_2__["AuthNoticeService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AuthNoticeComponent);
    return AuthNoticeComponent;
}());



/***/ }),

/***/ "./src/app/views/author/author.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/author/author.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kt-login.kt-login--v1 .kt-login__aside {\n  width: 605px;\n  padding: 3rem 3.5rem;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__logo {\n    display: flex; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__title {\n    color: #ffffff;\n    font-size: 2rem;\n    font-weight: 500; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__subtitle {\n    font-size: 1.2rem;\n    font-weight: 200;\n    margin: 2.5rem 0 3.5rem 0;\n    color: rgba(255, 255, 255, 0.7); }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info {\n    display: flex;\n    justify-content: space-between; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__menu > a {\n      text-decoration: none;\n      color: #fff;\n      margin-right: 2rem;\n      display: inline-block;\n      color: rgba(255, 255, 255, 0.7); }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__menu > a:hover {\n        color: #fff; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__menu > a:hover:after {\n          border-bottom: 1px solid #fff;\n          opacity: 0.3; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__menu > a:last-child {\n        margin-right: 0; }\n  .kt-login.kt-login--v1 .kt-login__aside .kt-login__info .kt-login__copyright {\n      color: rgba(255, 255, 255, 0.4); }\n  .kt-login.kt-login--v1 .kt-login__wrapper {\n  padding: 3rem 3rem;\n  background: #fff; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__head {\n    font-size: 1rem;\n    font-weight: 500;\n    text-align: right; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__head .kt-login__signup-label {\n      color: #74788d; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__head .kt-login__signup-link {\n      color: #5d78ff; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form {\n      width: 100%;\n      max-width: 450px; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__title {\n        display: block;\n        text-align: center;\n        margin-bottom: 5rem;\n        text-decoration: none; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__title > h3 {\n          font-size: 2rem;\n          color: #67666e; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form {\n        margin: 4rem auto; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form .form-group {\n          margin: 0;\n          padding: 0;\n          margin: 0 auto; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form .form-group .form-control {\n            border: none;\n            height: 50px;\n            margin-top: 1.25rem;\n            background-color: rgba(247, 247, 249, 0.7);\n            padding-left: 1.25rem;\n            padding-right: 1.25rem;\n            transition: background-color 0.3s ease; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form .form-group .form-control:focus {\n              transition: background-color 0.3s ease;\n              background-color: #f7f7f9; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 3rem 0; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__link-forgot {\n          font-weight: 400;\n          color: #74788d; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__link-forgot:hover {\n            color: #5d78ff; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__link-forgot:hover:after {\n              border-bottom: 1px solid #5d78ff;\n              opacity: 0.3; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__btn-secondary,\n        .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__btn-primary {\n          font-weight: 500;\n          font-size: 1rem;\n          height: 50px;\n          padding-left: 2.75rem;\n          padding-right: 2.75rem; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__divider {\n        margin: 1rem 0 2rem 0; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__divider:not(:first-child):not(:last-child) {\n          font-weight: 400;\n          color: #b5b2c3;\n          font-size: 1rem; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options {\n        display: flex;\n        justify-content: center;\n        justify-content: space-between;\n        max-width: 100%; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options > a {\n          text-decoration: none;\n          flex: 1;\n          justify-content: center;\n          align-items: center;\n          display: flex; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options > a:not(:last-child) {\n            margin: 0 1.5rem 0 0; }\n  @media (min-width: 1025px) {\n  .kt-login.kt-login--v1 .kt-login__aside {\n    flex: 1; } }\n  @media (max-width: 1024px) {\n  .kt-login.kt-login--v1 .kt-login__aside {\n    width: 100%;\n    height: auto;\n    padding: 2rem 1.5rem; }\n    .kt-login.kt-login--v1 .kt-login__aside .kt-login__logo {\n      margin-bottom: 2.5rem; }\n    .kt-login.kt-login--v1 .kt-login__aside .kt-login__info {\n      margin-top: 2rem; }\n    .kt-login.kt-login--v1 .kt-login__aside .kt-login__subtitle {\n      margin: 2rem 0; }\n  .kt-login.kt-login--v1 .kt-login__wrapper {\n    padding: 3rem 1.5rem; }\n    .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__head {\n      padding-left: 2rem;\n      right: 2rem; }\n    .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 5rem; }\n      .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options > a:not(:first-child):not(:last-child) {\n        margin: 0 0.8rem; } }\n  .kt-login.kt-login--v1 .kt-login__aside {\n  width: 605px;\n  padding: 3rem 3.5rem;\n  background-repeat: no-repeat;\n  background-size: cover; }\n  .kt-login.kt-login--v1 .kt-login__wrapper {\n  padding: 3rem 3rem;\n  background: #fff; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form {\n      width: 100%;\n      max-width: 550px; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__title {\n        display: block;\n        text-align: center;\n        margin-bottom: 5rem;\n        text-decoration: none; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__title > h3 {\n          font-size: 2rem;\n          color: #67666e; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form {\n        margin: 4rem auto; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form .form-group {\n          margin: 0;\n          padding: 0;\n          margin: 0 auto; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form .form-group .form-control {\n            border: none;\n            height: 50px;\n            margin-top: 1.25rem;\n            background-color: rgba(247, 247, 249, 0.7);\n            padding-left: 1.25rem;\n            padding-right: 1.25rem;\n            transition: background-color 0.3s ease; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-form .form-group .form-control:focus {\n              transition: background-color 0.3s ease;\n              background-color: #f7f7f9; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: 3rem 0; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__link-forgot {\n          font-weight: 400;\n          color: #74788d; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__link-forgot:hover {\n            color: #5d78ff; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__link-forgot:hover:after {\n              border-bottom: 1px solid #5d78ff;\n              opacity: 0.3; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__btn-secondary,\n        .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__actions .kt-login__btn-primary {\n          font-weight: 500;\n          font-size: 1rem;\n          height: 50px;\n          padding-left: 2.75rem;\n          padding-right: 2.75rem; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__divider {\n        margin: 1rem 0 2rem 0; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__divider:not(:first-child):not(:last-child) {\n          font-weight: 400;\n          color: #b5b2c3;\n          font-size: 1rem; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options {\n        display: flex;\n        justify-content: center;\n        justify-content: space-between;\n        max-width: 100%; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options > a {\n          text-decoration: none;\n          flex: 1;\n          justify-content: center;\n          align-items: center;\n          display: flex; }\n  .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options > a:not(:last-child) {\n            margin: 0 1.5rem 0 0; }\n  @media (min-width: 1025px) {\n  .kt-login.kt-login--v1 .kt-login__aside {\n    flex: 1; } }\n  @media (max-width: 1024px) {\n  .kt-login.kt-login--v1 .kt-login__aside {\n    width: 100%;\n    height: auto;\n    padding: 2rem 1.5rem; }\n    .kt-login.kt-login--v1 .kt-login__aside .kt-login__logo {\n      margin-bottom: 2.5rem; }\n    .kt-login.kt-login--v1 .kt-login__aside .kt-login__info {\n      margin-top: 2rem; }\n    .kt-login.kt-login--v1 .kt-login__aside .kt-login__subtitle {\n      margin: 2rem 0; }\n  .kt-login.kt-login--v1 .kt-login__wrapper {\n    padding: 3rem 1.5rem; }\n    .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__head {\n      padding-left: 2rem;\n      right: 2rem; }\n    .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      margin-top: 5rem; }\n      .kt-login.kt-login--v1 .kt-login__wrapper .kt-login__body .kt-login__form .kt-login__options > a:not(:first-child):not(:last-child) {\n        margin: 0 0.8rem; } }\n  kt-auth, .kt-login {\n  height: 100%; }\n  kt-auth .mat-form-field, .kt-login .mat-form-field {\n    width: 100%; }\n  kt-auth .kt-spinner, .kt-login .kt-spinner {\n    padding-right: 3rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXNzZXRzL3Nhc3MvcGFnZXMvbG9naW4vbG9naW4tMS5zY3NzIiwiL2hvbWUva2FtaWwvUFJTX05FV19WZXJzaW9uL3NyYy9hc3NldHMvc2Fzcy9nbG9iYWwvY29tcG9uZW50cy90eXBvZ3JhcGh5L21peGlucy9fbGluay5zY3NzIiwiL2hvbWUva2FtaWwvUFJTX05FV19WZXJzaW9uL3NyYy9hc3NldHMvc2Fzcy9fY29uZmlnLnNjc3MiLCIvaG9tZS9rYW1pbC9QUlNfTkVXX1ZlcnNpb24vc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC9fbWl4aW5zLnNjc3MiLCIvaG9tZS9rYW1pbC9QUlNfTkVXX1ZlcnNpb24vc3JjL2FwcC92aWV3cy9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VBR1EsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7RUFOOUI7SUFTWSxhQUFhLEVBQUE7RUFUekI7SUFhWSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBZjVCO0lBbUJZLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLCtCQUFnQixFQUFBO0VBdEI1QjtJQTBCWSxhQUFhO0lBQ2IsOEJBQThCLEVBQUE7RUEzQjFDO01BK0JvQixxQkFBcUI7TUFDckIsV0FBVztNQUNYLGtCQUFrQjtNQUNsQixxQkFBcUI7TUN6Q3JDLCtCRDJDZ0QsRUFBQTtFQXBDcEQ7UUNKSyxXRHdDMkQsRUFBQTtFQXBDaEU7VUNETSw2QkRxQzBEO1VDcEMxRCxZQUFZLEVBQUE7RURBbEI7UUF1Q3dCLGVBQWUsRUFBQTtFQXZDdkM7TUE2Q2dCLCtCQUFnQixFQUFBO0VBN0NoQztFQW9EUSxrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7RUFyRHhCO0lBeURZLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUEzRDdCO01BOERnQixjRXlDRSxFQUFBO0VGdkdsQjtNQWtFZ0IsY0VISyxFQUFBO0VGL0RyQjtJQXdFWSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7RUEzRXhCO01BK0VnQixXQUFXO01BQ1gsZ0JBQWdCLEVBQUE7RUFoRmhDO1FBbUZvQixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixxQkFBcUIsRUFBQTtFQXRGekM7VUF5RndCLGVBQWU7VUFDZixjQUFjLEVBQUE7RUExRnRDO1FBZ0dvQixpQkFBaUIsRUFBQTtFQWhHckM7VUFtR3dCLFNBQVM7VUFDVCxVQUFVO1VBQ1YsY0FBYyxFQUFBO0VBckd0QztZQXdHNEIsWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsMENBQThCO1lBQzlCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsc0NBQXNDLEVBQUE7RUE5R2xFO2NBaUhnQyxzQ0FBc0M7Y0FDdEMseUJBQXlCLEVBQUE7RUFsSHpEO1FBMEhvQixhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQjtRQUNuQixjQUFjLEVBQUE7RUE3SGxDO1VBZ0l3QixnQkFBZ0I7VUN2SXBDLGNDOEdjLEVBQUE7RUZ2R2xCO1lDSkssY0NtRWdCLEVBQUE7RUYvRHJCO2NDRE0sZ0NDZ0VlO2NEL0RmLFlBQVksRUFBQTtFREFsQjs7VUFzSXdCLGdCQUFnQjtVQUNoQixlQUFlO1VBQ2YsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixzQkFBc0IsRUFBQTtFQTFJOUM7UUFnSm9CLHFCQUFxQixFQUFBO0VBaEp6QztVQW1Kd0IsZ0JBQWdCO1VBQ2hCLGNBQWM7VUFDZCxlQUFlLEVBQUE7RUFySnZDO1FBMkpvQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5QixlQUFlLEVBQUE7RUE5Sm5DO1VBaUt3QixxQkFBcUI7VUFDckIsT0FBTztVQUNQLHVCQUF1QjtVQUN2QixtQkFBbUI7VUFDbkIsYUFBYSxFQUFBO0VBcktyQztZQXdLNEIsb0JBQW9CLEVBQUE7RUc0STVDO0VIcFRKO0lBbUxZLE9BQU8sRUFBQSxFQUNWO0VHOEpMO0VIbFZKO0lBMExZLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0JBQW9CLEVBQUE7SUE1TGhDO01BK0xnQixxQkFBcUIsRUFBQTtJQS9MckM7TUFtTWdCLGdCQUFnQixFQUFBO0lBbk1oQztNQXVNZ0IsY0FBYyxFQUFBO0VBdk05QjtJQTZNWSxvQkFBb0IsRUFBQTtJQTdNaEM7TUFnTmdCLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7SUFqTjNCO01BcU5nQixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTtNQXhOaEM7UUE4TmdDLGdCQUFnQixFQUFBLEVBQ25CO0VJek83QjtFQUdFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBO0VBTnhCO0VBWUUsa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBO0VBYmxCO0lBaUJHLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFQXBCZjtNQXdCSSxXQUFXO01BRVgsZ0JBQWdCLEVBQUE7RUExQnBCO1FBOEJLLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHFCQUFxQixFQUFBO0VBakMxQjtVQW9DTSxlQUFlO1VBQ2YsY0FBYyxFQUFBO0VBckNwQjtRQTJDSyxpQkFBaUIsRUFBQTtFQTNDdEI7VUE4Q00sU0FBUztVQUNULFVBQVU7VUFDVixjQUFjLEVBQUE7RUFoRHBCO1lBbURPLFlBQVk7WUFDWixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLDBDQUE4QjtZQUM5QixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLHNDQUFzQyxFQUFBO0VBekQ3QztjQTREUSxzQ0FBc0M7Y0FDdEMseUJBQXlCLEVBQUE7RUE3RGpDO1FBcUVLLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsbUJBQW1CO1FBQ25CLGNBQWMsRUFBQTtFQXhFbkI7VUEyRU0sZ0JBQWdCO1VIeEVsQixjQzhHYyxFQUFBO0VFakhsQjtZSE1LLGNDbUVnQixFQUFBO0VFekVyQjtjSFNNLGdDQ2dFZTtjRC9EZixZQUFZLEVBQUE7RUdWbEI7O1VBaUZNLGdCQUFnQjtVQUNoQixlQUFlO1VBQ2YsWUFBWTtVQUNaLHFCQUFxQjtVQUNyQixzQkFBc0IsRUFBQTtFQXJGNUI7UUEyRksscUJBQXFCLEVBQUE7RUEzRjFCO1VBOEZNLGdCQUFnQjtVQUNoQixjQUFjO1VBQ2QsZUFBZSxFQUFBO0VBaEdyQjtRQXNHSyxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLDhCQUE4QjtRQUM5QixlQUFlLEVBQUE7RUF6R3BCO1VBNEdNLHFCQUFxQjtVQUNyQixPQUFPO1VBQ1AsdUJBQXVCO1VBQ3ZCLG1CQUFtQjtVQUNuQixhQUFhLEVBQUE7RUFoSG5CO1lBbUhPLG9CQUFvQixFQUFBO0VEMk12QjtFQzlUSjtJQThIRyxPQUFPLEVBQUEsRUFDUDtFRDZOQztFQzVWSjtJQXFJRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQixFQUFBO0lBdkl2QjtNQTBJSSxxQkFBcUIsRUFBQTtJQTFJekI7TUE4SUksZ0JBQWdCLEVBQUE7SUE5SXBCO01Ba0pJLGNBQWMsRUFBQTtFQWxKbEI7SUF3Skcsb0JBQW9CLEVBQUE7SUF4SnZCO01BMkpJLGtCQUFrQjtNQUNsQixXQUFXLEVBQUE7SUE1SmY7TUFnS0ksYUFBYTtNQUNiLHVCQUF1QjtNQUN2QixtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUE7TUFuS3BCO1FBeUtRLGdCQUFnQixFQUFBLEVBQ2hCO0VBWVI7RUFDQyxZQUFZLEVBQUE7RUFEYjtJQUlFLFdBQVcsRUFBQTtFQUpiO0lBU0UsOEJBQThCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hdXRob3IvYXV0aG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9cbi8vIFBhZ2UgLSBVc2VyIExvZ2luIDFcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXG4vL1xuXG5cblxuLy8gR2xvYmFsIGNvbmZpZ1xuQGltcG9ydCBcIi4uLy4uL2NvbmZpZ1wiO1xuXG4vLyBMYXlvdXQgY29uZmlnXG5AaW1wb3J0IFwiLi4vLi4vZ2xvYmFsL2xheW91dC9jb25maWcuc2Nzc1wiO1xuXG4vLyBMb2dpbiBCYXNlXG4ua3QtbG9naW4ua3QtbG9naW4tLXYxIHtcbiAgICAvLyBBc2lkZVxuICAgIC5rdC1sb2dpbl9fYXNpZGUge1xuICAgICAgICB3aWR0aDogNjA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMy41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgICAgIC5rdC1sb2dpbl9fbG9nbyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmt0LWxvZ2luX190aXRsZSB7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAua3QtbG9naW5fX3N1YnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgICAgIG1hcmdpbjogMi41cmVtIDAgMy41cmVtIDA7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgjZmZmLCAwLjcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmt0LWxvZ2luX19pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgIC5rdC1sb2dpbl9fbWVudSB7XG4gICAgICAgICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUga3QtbGluay1jb2xvcihyZ2JhKCNmZmYsIDAuNyksICNmZmYpO1xuXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rdC1sb2dpbl9fY29weXJpZ2h0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgjZmZmLCAwLjQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gV3JhcHBlclxuICAgIC5rdC1sb2dpbl9fd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IDNyZW0gM3JlbTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAgICAgICAvLyBIZWFkXG4gICAgICAgIC5rdC1sb2dpbl9faGVhZCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgICAgIC5rdC1sb2dpbl9fc2lnbnVwLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjoga3QtYmFzZS1jb2xvcihsYWJlbCwgMik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rdC1sb2dpbl9fc2lnbnVwLWxpbmsge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBrdC1icmFuZC1jb2xvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQm9keVxuICAgICAgICAua3QtbG9naW5fX2JvZHkge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgLy8gRm9ybSBXcmFwcGVyXG4gICAgICAgICAgICAua3QtbG9naW5fX2Zvcm0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDUwcHg7XG5cbiAgICAgICAgICAgICAgICAua3QtbG9naW5fX3RpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgICAgICAgICAgID4gaDMge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM2NzY2NmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBGb3JtXG4gICAgICAgICAgICAgICAgLmt0LWZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRyZW0gYXV0bztcblxuICAgICAgICAgICAgICAgICAgICAuZm9ybS1ncm91cCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmN2Y3ZjksIDAuNyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQWN0aW9uXG4gICAgICAgICAgICAgICAgLmt0LWxvZ2luX19hY3Rpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDNyZW0gMDtcblxuICAgICAgICAgICAgICAgICAgICAua3QtbG9naW5fX2xpbmstZm9yZ290IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBrdC1saW5rLWNvbG9yKGt0LWJhc2UtY29sb3IobGFiZWwsIDIpLCBrdC1icmFuZC1jb2xvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5rdC1sb2dpbl9fYnRuLXNlY29uZGFyeSxcbiAgICAgICAgICAgICAgICAgICAgLmt0LWxvZ2luX19idG4tcHJpbWFyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMi43NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIERpdmlkZXJcbiAgICAgICAgICAgICAgICAua3QtbG9naW5fX2RpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDFyZW0gMCAycmVtIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2I1YjJjMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9wdGlvbnNcbiAgICAgICAgICAgICAgICAua3QtbG9naW5fX29wdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgPiBhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxLjVyZW0gMCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUga3QtZGVza3RvcCB7XG4gICAgICAgIC8vIEFzaWRlXG4gICAgICAgIC5rdC1sb2dpbl9fYXNpZGUge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIGt0LXRhYmxldC1hbmQtbW9iaWxlKCkge1xuICAgICAgICAvLyBBc2lkZVxuICAgICAgICAua3QtbG9naW5fX2FzaWRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG5cbiAgICAgICAgICAgIC5rdC1sb2dpbl9fbG9nbyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua3QtbG9naW5fX2luZm8ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rdC1sb2dpbl9fc3VidGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gV3JhcHBlclxuICAgICAgICAua3QtbG9naW5fX3dyYXBwZXIge1xuICAgICAgICAgICAgcGFkZGluZzogM3JlbSAxLjVyZW07XG5cbiAgICAgICAgICAgIC5rdC1sb2dpbl9faGVhZCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAycmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua3QtbG9naW5fX2JvZHkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xuXG4gICAgICAgICAgICAgICAgLmt0LWxvZ2luX19mb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgLmt0LWxvZ2luX19vcHRpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgID4gYSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvL1xuLy8gTGluayBNaXhpbnNcbi8vIFxuXG5cblxuQG1peGluIGt0LWxpbmstY29sb3IoJGRlZmF1bHQsICRob3Zlcikge1xuICAgXHRjb2xvcjogJGRlZmF1bHQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICBcdGNvbG9yOiAkaG92ZXI7XG5cbiAgICBcdCY6YWZ0ZXIge1xuICAgIFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGhvdmVyOyBcbiAgICBcdFx0b3BhY2l0eTogMC4zO1xuICAgIFx0fSBcbiAgICB9ICAgIFxufSIsIi8vXG4vLyBHbG9iYWwgQ29uZmlnXG4vL1xuXG5cblxuLy8gSW5pdCBnbG9iYWwgZnVuY3Rpb25zIGFuZCBtaXhpbnNcbkBpbXBvcnQgXCJnbG9iYWwvaW5pdFwiO1xuXG4vLyBMYXlvdXQgQnJlYWtwb2ludHMoYm9vdHN0cmFwIHJlc3BvbnNpdmUgYnJlYWtwb2ludHMpXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSwgYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuJGt0LW1lZGlhLWJyZWFrcG9pbnRzOiAoXG4gICAgLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcbiAgICB4czogMCxcblxuICAgIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXG4gICAgc206IDU3NnB4LFxuXG4gICAgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxuICAgIG1kOiA3NjhweCxcblxuICAgIC8vIExhcmdlIHNjcmVlbiAvIGRlc2t0b3BcbiAgICBsZzogMTAyNHB4LCAvLzEwMjRweCxcblxuICAgIC8vIEV4dHJhIGxhcmdlIHNjcmVlbiAvIHdpZGUgZGVza3RvcFxuICAgIHhsOiAxMzk5cHhcbikgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCByb3VuZGVkIGJvcmRlciBtb2RlXG4ka3Qtcm91bmRlZDogdHJ1ZSAhZGVmYXVsdDtcblxuLy8gQm9yZGVyIFJhZGl1c1xuJGt0LWJvcmRlci1yYWRpdXM6IDRweCAhZGVmYXVsdDtcblxuLy8gQ29yZSBpY29uIGNvZGVzKGxpbmVhd2Vzb21lIGljb25zOiBodHRwczovL2ljb25zOC5jb20vbGluZS1hd2Vzb21lKVxuJGt0LWFjdGlvbi1pY29uczogKFxuICAgIGNsb3NlOiAnXFxmMTkxJyxcbiAgICBkb3duOiAnXFxmMTEwJyxcbiAgICB1cDogJ1xcZjExMycsXG4gICAgbGVmdDogJ1xcZjExMScsXG4gICAgcmlnaHQ6ICdcXGYxMTInLFxuICAgIHBsdXM6ICdcXGYyYzInLFxuICAgIG1pbnVzOiAnXFxmMjhlJ1xuKSAhZGVmYXVsdDtcblxuLy8gQ29yZSBib2xkIGljb24gY29kZXMobGluZWF3ZXNvbWUgaWNvbnM6IGh0dHBzOi8va2VlbnRoZW1lcy5jb20vbWV0cm9uaWMvcHJldmlldy9kZWZhdWx0L2NvbXBvbmVudHMvaWNvbnMvZmxhdGljb24uaHRtbClcbiRrdC1hY3Rpb24tYm9sZC1pY29uczogKFxuICAgIGRvd246ICdcXGYxYTMnLFxuICAgIHVwOiAnXFxmMWE1JyxcbiAgICBsZWZ0OiAnXFxmMWE0JyxcbiAgICByaWdodDogJ1xcZjE5ZCcsXG4gICAgY2xvc2U6ICdcXGYxYjInXG4pICFkZWZhdWx0O1xuXG4vLyBFbGV2YXRlIHNoYWRvd1xuJGt0LWVsZXZhdGUtc2hhZG93OiAwcHggMHB4IDEzcHggMHB4IHJnYmEoODIsNjMsMTA1LDAuMDUpICFkZWZhdWx0O1xuJGt0LWVsZXZhdGUtc2hhZG93LTI6IDBweCAwcHggMTNweCAwcHggcmdiYSg4Miw2MywxMDUsMC4xKSAhZGVmYXVsdDtcblxuLy8gRHJvcGRvd24gc2hhZG93XG4ka3QtZHJvcGRvd24tc2hhZG93OiAwcHggMHB4IDUwcHggMHB4IHJnYmEoODIsNjMsMTA1LCAwLjE1KSAhZGVmYXVsdDtcblxuLy8gQ3VzdG9tIHNjcm9sbGJhciBjb2xvclxuJGt0LXNjcm9sbC1jb2xvcjogZGFya2VuKCNlYmVkZjIsIDYlKSAhZGVmYXVsdDtcblxuLy8gVHJhbnNpdGlvblxuJGt0LXRyYW5zaXRpb246IGFsbCAwLjNzICFkZWZhdWx0O1xuXG4vLyBNb2RhbCBaLWluZGV4XG4ka3QtbW9kYWwtemluZGV4OiAxMDUwICFkZWZhdWx0O1xuXG4vLyBkcm9wZG93biBaLWluZGV4XG4ka3QtZHJvcGRvd24temluZGV4OiA5NSAhZGVmYXVsdDtcblxuLy8gU3RhdGUgQ29sb3JcbiRrdC1zdGF0ZS1jb2xvcnM6IChcbiAgICAvLyBNZXRyb25pYyBzdGF0ZXNcbiAgICBicmFuZDogKFxuICAgICAgICBiYXNlOiAjNWQ3OGZmLFxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXG4gICAgKSxcbiAgICBsaWdodDogKFxuICAgICAgICBiYXNlOiAjZmZmZmZmLFxuICAgICAgICBpbnZlcnNlOiAjMjgyYTNjXG4gICAgKSxcbiAgICBkYXJrOiAoXG4gICAgICAgIGJhc2U6ICMyODJhM2MsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApLFxuXG4gICAgLy8gQm9vdHN0cmFwIHN0YXRlc1xuICAgIHByaW1hcnk6IChcbiAgICAgICAgYmFzZTogIzU4NjdkZCxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgICksXG4gICAgc3VjY2VzczogKFxuICAgICAgICBiYXNlOiAjMGFiYjg3LCAvLzFkYzliNyxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgICksXG4gICAgaW5mbzogKFxuICAgICAgICBiYXNlOiAjNTU3OGViLFxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXG4gICAgKSxcbiAgICB3YXJuaW5nOiAoXG4gICAgICAgIGJhc2U6ICNmZmI4MjIsXG4gICAgICAgIGludmVyc2U6ICMxMTExMTFcbiAgICApLFxuICAgIGRhbmdlcjogKFxuICAgICAgICBiYXNlOiAjZmQzOTdhLFxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXG4gICAgKVxuKSAhZGVmYXVsdDtcblxuXG4vLyBCYXNlIGNvbG9yc1xuJGt0LWJhc2UtY29sb3JzOiAoXG4gICAgbGFiZWw6IChcbiAgICAgICAgMTogI2EyYTViOSxcbiAgICAgICAgMjogIzc0Nzg4ZCxcbiAgICAgICAgMzogIzU5NWQ2ZSxcbiAgICAgICAgNDogIzQ4NDY1YlxuICAgICksXG4gICAgc2hhcGU6IChcbiAgICAgICAgMTogI2YwZjNmZixcbiAgICAgICAgMjogI2U4ZWNmYSxcbiAgICAgICAgMzogIzkzYTJkZCxcbiAgICAgICAgNDogIzY0NmM5YVxuICAgICksXG4gICAgZ3JleTogKFxuICAgICAgICAxOiAjZjdmOGZhLCAvLyNmNGY1ZjhcbiAgICAgICAgMjogI2ViZWRmMixcbiAgICAgICAgMzogZGFya2VuKCNlYmVkZjIsIDMlKSxcbiAgICAgICAgNDogZGFya2VuKCNlYmVkZjIsIDYlKVxuICAgIClcbikgIWRlZmF1bHQ7XG5cbi8vIFNvY2lhbCBuZXR3b3JrIGNvbG9ycyhzZWU6IGh0dHBzOi8vYnJhbmRjb2xvcnMubmV0LylcbiRrdC1zb2NpYWwtY29sb3JzOiAoXG4gICAgZmFjZWJvb2s6IChcbiAgICAgICAgYmFzZTogIzNiNTk5OCxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgICksXG4gICAgZ29vZ2xlOiAoXG4gICAgICAgIGJhc2U6ICNkYzRlNDEsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApLFxuICAgIHR3aXR0ZXI6IChcbiAgICAgICAgYmFzZTogIzRBQjNGNCxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgICksXG4gICAgaW5zdGFncmFtOiAoXG4gICAgICAgIGJhc2U6ICM1MTdmYTQsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApLFxuICAgIHlvdXR1YmU6IChcbiAgICAgICAgYmFzZTogI2IzMTIxNyxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgICksXG4gICAgbGlua2VkaW46IChcbiAgICAgICAgYmFzZTogIzAwNzdiNSxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgICksXG4gICAgc2t5cGU6IChcbiAgICAgICAgYmFzZTogIzAwYWZmMCxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgIClcbikgIWRlZmF1bHQ7XG5cbi8vIFJvb3QgRm9udCBTZXR0aW5nc1xuJGt0LWZvbnQtZmFtaWxpZXM6IChcbiAgICByZWd1bGFyOiB1bnF1b3RlKCdQb3BwaW5zLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKSxcbiAgICBoZWFkaW5nOiB1bnF1b3RlKCdQb3BwaW5zLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnKVxuKSAhZGVmYXVsdDtcblxuLy8gUm9vdCBGb250IFNldHRpbmdzXG4ka3QtZm9udC1zaXplOiAoXG4gICAgc2l6ZTogKFxuICAgICAgICBkZXNrdG9wOiAxM3B4LFxuICAgICAgICB0YWJsZXQ6IDEycHgsXG4gICAgICAgIG1vYmlsZTogMTJweFxuICAgICksXG4gICAgd2VpZ2h0OiAzMDBcbikgIWRlZmF1bHQ7XG5cbi8vIEdlbmVyYWwgTGluayBTZXR0aW5nc1xuJGt0LWZvbnQtY29sb3I6IChcbiAgICB0ZXh0OiAjNjQ2YzlhLFxuICAgIGxpbms6IChcbiAgICAgICAgZGVmYXVsdDoga3Qtc3RhdGUtY29sb3IoYnJhbmQpLFxuICAgICAgICBob3ZlcjogZGFya2VuKGt0LXN0YXRlLWNvbG9yKGJyYW5kKSwgNiUpXG4gICAgKVxuKSAhZGVmYXVsdDtcblxuLy8gUG9ydGxldCBzZXR0aW5nc1xuJGt0LXBvcnRsZXQ6IChcbiAgICBtaW4taGVpZ2h0OiAoXG4gICAgICAgIGRlZmF1bHQ6IChcbiAgICAgICAgICAgIGRlc2t0b3A6IDYwcHgsXG4gICAgICAgICAgICBtb2JpbGU6IDUwcHhcbiAgICAgICAgKSxcbiAgICAgICAgc206IChcbiAgICAgICAgICAgIGRlc2t0b3A6IDUwcHgsXG4gICAgICAgICAgICBtb2JpbGU6IDQwcHhcbiAgICAgICAgKSxcbiAgICAgICAgbGc6IChcbiAgICAgICAgICAgIGRlc2t0b3A6IDgwcHgsXG4gICAgICAgICAgICBtb2JpbGU6IDYwcHhcbiAgICAgICAgKSxcbiAgICAgICAgeGw6IChcbiAgICAgICAgICAgIGRlc2t0b3A6IDEwMHB4LFxuICAgICAgICAgICAgbW9iaWxlOiA4MHB4XG4gICAgICAgIClcbiAgICApLFxuICAgIHNwYWNlOiAoXG4gICAgICAgIGRlc2t0b3A6IDI1cHgsXG4gICAgICAgIG1vYmlsZTogMTVweFxuICAgICksXG4gICAgYm90dG9tLXNwYWNlOiAoXG4gICAgICAgIGRlc2t0b3A6IDIwcHgsXG4gICAgICAgIG1vYmlsZTogMjBweFxuICAgICksXG4gICAgYm9yZGVyLWNvbG9yOiBrdC1iYXNlLWNvbG9yKGdyZXksIDIpLFxuICAgIGJnLWNvbG9yOiAjZmZmZmZmLFxuICAgIHNoYWRvdzogMHB4IDBweCAzMHB4IDBweCByZ2JhKDgyLDYzLDEwNSwwLjA1KVxuKSAhZGVmYXVsdDtcblxuLy8gUGFnZSBwYWRkaW5nXG4ka3QtcGFnZS1wYWRkaW5nOiAoXG5cdGRlc2t0b3A6IDI1cHgsXG5cdG1vYmlsZTogMTVweFxuKSAhZGVmYXVsdDtcblxuLy8gUGFnZSBjb250YWluZXIgd2lkdGhcbiRrdC1wYWdlLWNvbnRhaW5lci13aWR0aDogMTM4MHB4ICFkZWZhdWx0O1xuXG4vLyBDdXN0b20gU2Nyb2xsKFBlcmZlY3QgU2Nyb2xsYmFyKSBzaXplXG4ka3QtY3VzdG9tLXNjcm9sbC1zaXplOiA0cHggIWRlZmF1bHQ7XG4iLCIvL1xuLy8gR2xvYmFsIE1peGluc1xuLy9cblxuXG5cblxuQG1peGluIGt0LWNsZWFyZml4KCkge1xuXHQmOmJlZm9yZSxcblx0JjphZnRlciB7XG5cdFx0Y29udGVudDogXCIgXCI7IC8vIDFcblx0XHRkaXNwbGF5OiB0YWJsZTsgLy8gMlxuXHR9XG5cdCY6YWZ0ZXIge1xuXHRcdGNsZWFyOiBib3RoO1xuXHR9XG59XG5cbkBtaXhpbiBrdC1idXR0b24tcmVzZXQoKSB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuQG1peGluIGt0LWlucHV0LXJlc2V0KCkge1xuXHRib3JkZXI6IDA7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcblx0Ym94LXNoYWRvdzogbm9uZTtcbn1cblxuQG1peGluIGt0LWJ0bi1yZXNldCgpIHtcbiAgICBib3JkZXI6IDA7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtaXhpbiBrdC1maXgtZml4ZWQtcG9zaXRpb24tbGFncygpIHtcblx0Ly8gd2Via2l0IGhhY2sgZm9yIHNtb290aCBmb250IHZpZXcgb24gZml4ZWQgcG9zaXRpb25lZCBlbGVtZW50c1xuXHQtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6aGlkZGVuO1xuXHRiYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtcbn1cblxuQG1peGluIGt0LWZpeC1hbmltYXRpb24tbGFncygpIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuXG5AbWl4aW4ga3QtYXR0cigkYXR0ciwgJHZhbHVlLCAkaW1wb3J0YW50OiAnJykge1xuICAgIEBpZiAgJHZhbHVlICE9IG51bGwgIHtcbiAgICAgICAgI3skYXR0cn06ICN7JHZhbHVlfSAjeyRpbXBvcnRhbnR9O1xuICAgIH1cbn1cblxuQG1peGluIGt0LWhhY2staWUge1xuXHRAbWVkaWEgc2NyZWVuXFwwIHtcblx0XHRAY29udGVudDtcblx0fVxufVxuXG5AbWl4aW4ga3QtaGFjay1lZGdlLWFsbCB7XG5cdEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGt0LXJvdW5kZWQge1xuICAgIEBpZiAka3Qtcm91bmRlZCA9PSB0cnVlIHtcbiAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1ub3Qtcm91bmRlZCB7XG4gICAgQGlmICRrdC1yb3VuZGVkID09IGZhbHNlIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG4vLyBJbnB1dCBwbGFjZWhvbGRlciBjb2xvclxuQG1peGluIGt0LWlucHV0LXBsYWNlaG9sZGVyKCRjb2xvcikge1xuICAgICY6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTE1MjZcbiAgICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgfVxuICAgIC8vIEludGVybmV0IEV4cGxvcmVyIDEwK1xuICAgICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgICAvLyBTYWZhcmkgYW5kIENocm9tZVxufVxuXG5AbWl4aW4ga3QtaG92ZXItdHJhbnNpdGlvbiB7XG4gICAgdHJhbnNpdGlvbjogJGt0LXRyYW5zaXRpb247XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogJGt0LXRyYW5zaXRpb247XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtdHJhbnNpdGlvbiB7XG4gICAgdHJhbnNpdGlvbjogJGt0LXRyYW5zaXRpb247XG59XG5cbi8vIEljb24gU2l6aW5nXG4vLyBTQVNTIE1hcDogIChsaW5lYXdlc29tZTogMS4xcmVtLCBmb250YXdlc29tZTogMS4ycmVtLCBmbGF0aWNvbjogMS4xcmVtKVxuQG1peGluIGt0LWljb25zLXNpemUoJGNvbmZpZykge1xuICAgIC8vIExpbmVhd2Vzb21lXG4gICAgW2NsYXNzXj1cImxhLVwiXSxcbiAgICBbY2xhc3MqPVwiIGxhLVwiXSB7XG4gICAgICAgIGZvbnQtc2l6ZToga3QtZ2V0KCRjb25maWcsIGxpbmVhd2Vzb21lKTtcbiAgICB9XG5cbiAgICAvLyBGb250YXdlc29tZVxuICAgIFtjbGFzc149XCJmYS1cIl0sXG4gICAgW2NsYXNzKj1cIiBmYS1cIl0ge1xuICAgICAgICBmb250LXNpemU6IGt0LWdldCgkY29uZmlnLCBmb250YXdlc29tZSk7XG4gICAgfVxuXG4gICAgLy8gRmxhdGljb25cbiAgICBbY2xhc3NePVwiZmxhdGljb24tXCJdLFxuICAgIFtjbGFzcyo9XCIgZmxhdGljb24tXCJdLFxuICAgIFtjbGFzc149XCJmbGF0aWNvbjItXCJdLFxuICAgIFtjbGFzcyo9XCIgZmxhdGljb24yLVwiXSB7XG4gICAgICAgIGZvbnQtc2l6ZToga3QtZ2V0KCRjb25maWcsIGZsYXRpY29uKTtcbiAgICB9XG59XG5cbi8vIEljb24gYXR0clxuLy8gU0FTUyBNYXA6ICAobGluZWF3ZXNvbWU6IDEuMXJlbSwgZm9udGF3ZXNvbWU6IDEuMnJlbSwgZmxhdGljb246IDEuMXJlbSlcbkBtaXhpbiBrdC1pY29ucy1zdHlsZSgkYXR0ciwgJGNvbmZpZykge1xuICAgIC8vIGxpbmVhd2Vzb21lXG4gICAgW2NsYXNzXj1cImxhLVwiXSxcbiAgICBbY2xhc3MqPVwiIGxhLVwiXSB7XG4gICAgICAgICN7JGF0dHJ9OiBrdC1nZXQoJGNvbmZpZywgbGluZWF3ZXNvbWUpO1xuICAgIH1cblxuICAgIC8vIEZvbnRhd2Vzb21lXG4gICAgW2NsYXNzXj1cImZhLVwiXSxcbiAgICBbY2xhc3MqPVwiIGZhLVwiXSB7XG4gICAgICAgICN7JGF0dHJ9OiBrdC1nZXQoJGNvbmZpZywgZm9udGF3ZXNvbWUpO1xuICAgIH1cblxuICAgIC8vIEZsYXRpY29uXG4gICAgW2NsYXNzXj1cImZsYXRpY29uLVwiXSxcbiAgICBbY2xhc3MqPVwiIGZsYXRpY29uLVwiXSxcbiAgICBbY2xhc3NePVwiZmxhdGljb24yLVwiXSxcbiAgICBbY2xhc3MqPVwiIGZsYXRpY29uMi1cIl0ge1xuICAgICAgICAjeyRhdHRyfToga3QtZ2V0KCRjb25maWcsIGZsYXRpY29uKTtcbiAgICB9XG59XG5cbi8vIFNBU1MgTWFwOiAgKGxpbmVhd2Vzb21lOiAxLjFyZW0sIGZvbnRhd2Vzb21lOiAxLjJyZW0sIGZsYXRpY29uOiAxLjFyZW0pXG5AbWl4aW4ga3QtaWNvbnMge1xuICAgIFtjbGFzc149XCJsYS1cIl0sXG4gICAgW2NsYXNzKj1cIiBsYS1cIl0sXG4gICAgW2NsYXNzXj1cImZhLVwiXSxcbiAgICBbY2xhc3MqPVwiIGZhLVwiXSxcbiAgICBbY2xhc3NePVwiZmxhdGljb24tXCJdLFxuICAgIFtjbGFzcyo9XCIgZmxhdGljb24tXCJdLFxuICAgIFtjbGFzc149XCJmbGF0aWNvbjItXCJdLFxuICAgIFtjbGFzcyo9XCIgZmxhdGljb24yLVwiXSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuLy8gTGluZWF3ZXNvbWUgaWNvblxuQG1peGluIGt0LWxhLWljb24oJGljb24pIHtcbiAgICBmb250LWZhbWlseTogXCJMaW5lQXdlc29tZVwiO1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIiN7JGljb259XCI7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtbGEtaWNvbi1jaGFuZ2UoJGljb24pIHtcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiI3skaWNvbn1cIjtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1mbGF0aWNvbjItaWNvbigkaWNvbikge1xuICAgIGZvbnQtZmFtaWx5OiBGbGF0aWNvbjI7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgY29udGVudDogXCIjeyRpY29ufVwiO1xufVxuXG4vLyBMaW5lYXdlc29tZSBpY29uXG5AbWl4aW4ga3QtbGEtaWNvbi1zZWxmKCRpY29uKSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGluZUF3ZXNvbWVcIjtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBjb250ZW50OiBcIiN7JGljb259XCI7XG59XG5cbi8vIENsb3NlIGljb25cbkBtaXhpbiBrdC1jbG9zZS1pY29uKCRzZWxmOm51bGwpIHtcbiAgICBAaWYgJHNlbGYgPT0gdHJ1ZSB7XG4gICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24tc2VsZigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIGNsb3NlKSApO1xuICAgIH0gQGVsc2Uge1xuICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uKCBrdC1nZXQoJGt0LWFjdGlvbi1pY29ucywgY2xvc2UpICk7XG4gICAgfVxufVxuXG4vLyBBcnJvdyBpY29uXG5AbWl4aW4ga3QtYXJyb3ctaWNvbigkZGlyLCAkc2VsZjpudWxsKSB7XG4gICAgQGlmICRkaXIgPT0gZG93biB7XG4gICAgICAgIEBpZiAkc2VsZiA9PSB0cnVlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24tc2VsZigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIGRvd24pICk7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgQGluY2x1ZGUga3QtbGEtaWNvbigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIGRvd24pICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgJGRpciA9PSB1cCB7XG4gICAgICAgIEBpZiAkc2VsZiA9PSB0cnVlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24tc2VsZigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIHVwKSApO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24oIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCB1cCkgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkZGlyID09IGxlZnQge1xuICAgICAgICBAaWYgJHNlbGYgPT0gdHJ1ZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uLXNlbGYoIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCBsZWZ0KSApO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24oIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCBsZWZ0KSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRkaXIgPT0gcmlnaHQge1xuICAgICAgICBAaWYgJHNlbGYgPT0gdHJ1ZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uLXNlbGYoIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCByaWdodCkgKTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uKCBrdC1nZXQoJGt0LWFjdGlvbi1pY29ucywgcmlnaHQpICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIFN2ZyBpY29uIGNvbG9yXG5AbWl4aW4ga3Qtc3ZnLWljb24tY29sb3IoJGNvbG9yKSB7XG4gICAgZyB7XG4gICAgICAgIFtmaWxsXSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDAuM3MgZWFzZTtcbiAgICAgICAgICAgIGZpbGw6ICRjb2xvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBnIHtcbiAgICAgICAgICAgIFtmaWxsXSB7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEJyZWFrcG9pbnQgbWl4aW5zXG4vLyBMYXlvdXQgQnJlYWtwb2ludHNcbi8vIERlZmluZSB0aGUgbWluaW11bSBhbmQgbWF4aW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLCBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXG5cbkBtaXhpbiBrdC1tZWRpYS1iZWxvdygkd2lkdGgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KCR3aWR0aCl9KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LW1lZGlhLWFib3ZlKCR3aWR0aCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoJHdpZHRoKSArIDFweH0pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtbWVkaWEtcmFuZ2UoJGZyb20sICR0bykge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoJGZyb20pICsgMXB4fSkgYW5kIChtYXgtd2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludCgkdG8pfSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1taW5pbWFsLWRlc2t0b3Age1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQobGcpICsgMXB4fSkgYW5kIChtYXgtd2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludCh4bCl9KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LW1pbmltYWwtZGVza3RvcC1hbmQtYmVsb3cge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoeGwpfSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KGxnKSArIDFweH0pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtZGVza3RvcC14bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludCh4bCkgKyAxcHh9KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LWRlc2t0b3AteHhsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KHh4bCkgKyAxcHh9KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LWRlc2t0b3AtYW5kLXRhYmxldCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludChtZCkgKyAxcHh9KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LXRhYmxldCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludChtZCkgKyAxcHh9KSBhbmQgKG1heC13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KGxnKX0pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtdGFibGV0LWFuZC1tb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQobGcpfSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1tb2JpbGUge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQobWQpfSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1tb2JpbGUtc20ge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoc20pfSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1yZXNwb25zaXZlLWJlbG93KCR3aWR0aCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAjeyR3aWR0aH0pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LXJlc3BvbnNpdmUtYWJvdmUoJHdpZHRoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JHdpZHRofSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtcmVzcG9uc2l2ZS1yYW5nZSgkZnJvbSwgJHRvKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGZyb219KSBhbmQgKG1heC13aWR0aDogI3skdG99KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG59XG4iLCIvLyBpbXBvcnQgbG9naW4gY3NzXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Nhc3MvcGFnZXMvbG9naW4vbG9naW4tMVwiO1xuXG5cbi5rdC1sb2dpbi5rdC1sb2dpbi0tdjEge1xuXHQvLyBBc2lkZVxuXHQua3QtbG9naW5fX2FzaWRlIHtcblx0XHR3aWR0aDogNjA1cHg7XG5cdFx0cGFkZGluZzogM3JlbSAzLjVyZW07XG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG5cdH1cblxuXHQvLyBXcmFwcGVyXG5cdC5rdC1sb2dpbl9fd3JhcHBlciB7XG5cdFx0cGFkZGluZzogM3JlbSAzcmVtO1xuXHRcdGJhY2tncm91bmQ6ICNmZmY7XG5cblx0XHQvLyBCb2R5XG5cdFx0Lmt0LWxvZ2luX19ib2R5IHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cblx0XHRcdC8vIEZvcm0gV3JhcHBlclxuXHRcdFx0Lmt0LWxvZ2luX19mb3JtIHtcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdC8vbWF4LXdpZHRoOiA2NTBweDtcblx0XHRcdFx0bWF4LXdpZHRoOiA1NTBweDtcdFx0XHRcdFx0XHQvL3dpZHRoXG5cblxuXHRcdFx0XHQua3QtbG9naW5fX3RpdGxlIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXJlbTtcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cblx0XHRcdFx0XHQ+IGgzIHtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0XHRcdFx0XHRcdGNvbG9yOiAjNjc2NjZlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEZvcm1cblx0XHRcdFx0Lmt0LWZvcm0ge1xuXHRcdFx0XHRcdG1hcmdpbjogNHJlbSBhdXRvO1xuXG5cdFx0XHRcdFx0LmZvcm0tZ3JvdXAge1xuXHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdG1hcmdpbjogMCBhdXRvO1xuXG5cdFx0XHRcdFx0XHQuZm9ybS1jb250cm9sIHtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi10b3A6IDEuMjVyZW07XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2Y3ZjdmOSwgMC43KTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcblxuXHRcdFx0XHRcdFx0XHQmOmZvY3VzIHtcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcblx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y5O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWN0aW9uXG5cdFx0XHRcdC5rdC1sb2dpbl9fYWN0aW9ucyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRtYXJnaW46IDNyZW0gMDtcblxuXHRcdFx0XHRcdC5rdC1sb2dpbl9fbGluay1mb3Jnb3Qge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdEBpbmNsdWRlIGt0LWxpbmstY29sb3Ioa3QtYmFzZS1jb2xvcihsYWJlbCwgMiksIGt0LWJyYW5kLWNvbG9yKCkpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC5rdC1sb2dpbl9fYnRuLXNlY29uZGFyeSxcblx0XHRcdFx0XHQua3QtbG9naW5fX2J0bi1wcmltYXJ5IHtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDFyZW07XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDUwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDIuNzVyZW07XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAyLjc1cmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERpdmlkZXJcblx0XHRcdFx0Lmt0LWxvZ2luX19kaXZpZGVyIHtcblx0XHRcdFx0XHRtYXJnaW46IDFyZW0gMCAycmVtIDA7XG5cblx0XHRcdFx0XHQmOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdGNvbG9yOiAjYjViMmMzO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxcmVtO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE9wdGlvbnNcblx0XHRcdFx0Lmt0LWxvZ2luX19vcHRpb25zIHtcblx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwMCU7XG5cblx0XHRcdFx0XHQ+IGEge1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRcdFx0ZmxleDogMTtcblx0XHRcdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cblx0XHRcdFx0XHRcdCY6bm90KDpsYXN0LWNoaWxkKSB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMCAxLjVyZW0gMCAwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdEBpbmNsdWRlIGt0LWRlc2t0b3Age1xuXHRcdC8vIEFzaWRlXG5cdFx0Lmt0LWxvZ2luX19hc2lkZSB7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdH1cblx0fVxuXG5cdEBpbmNsdWRlIGt0LXRhYmxldC1hbmQtbW9iaWxlKCkge1xuXHRcdC8vIEFzaWRlXG5cdFx0Lmt0LWxvZ2luX19hc2lkZSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdHBhZGRpbmc6IDJyZW0gMS41cmVtO1xuXG5cdFx0XHQua3QtbG9naW5fX2xvZ28ge1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XG5cdFx0XHR9XG5cblx0XHRcdC5rdC1sb2dpbl9faW5mbyB7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDJyZW07XG5cdFx0XHR9XG5cblx0XHRcdC5rdC1sb2dpbl9fc3VidGl0bGUge1xuXHRcdFx0XHRtYXJnaW46IDJyZW0gMDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBXcmFwcGVyXG5cdFx0Lmt0LWxvZ2luX193cmFwcGVyIHtcblx0XHRcdHBhZGRpbmc6IDNyZW0gMS41cmVtO1xuXG5cdFx0XHQua3QtbG9naW5fX2hlYWQge1xuXHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDJyZW07XG5cdFx0XHRcdHJpZ2h0OiAycmVtO1xuXHRcdFx0fVxuXG5cdFx0XHQua3QtbG9naW5fX2JvZHkge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0bWFyZ2luLXRvcDogNXJlbTtcblxuXHRcdFx0XHQua3QtbG9naW5fX2Zvcm0ge1xuXHRcdFx0XHRcdC5rdC1sb2dpbl9fb3B0aW9ucyB7XG5cdFx0XHRcdFx0XHQ+IGEge1xuXHRcdFx0XHRcdFx0XHQmOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbjogMCAwLjhyZW07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuXG5cblxua3QtYXV0aCwgLmt0LWxvZ2luIHtcblx0aGVpZ2h0OiAxMDAlO1xuXG5cdC5tYXQtZm9ybS1maWVsZCB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblxuXHQvLyBhZGQgZXh0cmEgcmlnaHQgcGFkZGluZyB3aGVuIGRpc3BsYXlpbmcgc3Bpbm5lciBpbiBidXR0b25cblx0Lmt0LXNwaW5uZXIge1xuXHRcdHBhZGRpbmctcmlnaHQ6IDNyZW0gIWltcG9ydGFudDtcblx0fVxufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/author/author.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/author/author.component.ts ***!
  \**************************************************/
/*! exports provided: AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/auth */ "./src/app/core/auth/index.ts");

// Angular

// Layout

// Auth

var AuthorComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param el
     * @param render
     * @param layoutConfigService: LayoutConfigService
     * @param authNoticeService: authNoticeService
     */
    function AuthorComponent(el, render, layoutConfigService, authNoticeService) {
        this.el = el;
        this.render = render;
        this.layoutConfigService = layoutConfigService;
        this.authNoticeService = authNoticeService;
        // Public properties
        this.today = Date.now();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    AuthorComponent.prototype.ngOnInit = function () {
        // this.translationService.setLanguage(this.translationService.getSelectedLanguage());
        this.headerLogo = this.layoutConfigService.getLogo();
    };
    /**
     * Load CSS for this specific page only, and destroy when navigate away
     * @param styleUrl
     */
    AuthorComponent.prototype.loadCSS = function (styleUrl) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var styleElement = document.createElement('link');
            styleElement.href = styleUrl;
            styleElement.type = 'text/css';
            styleElement.rel = 'stylesheet';
            styleElement.onload = resolve;
            _this.render.appendChild(_this.el.nativeElement, styleElement);
        });
    };
    AuthorComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] },
        { type: _core_auth__WEBPACK_IMPORTED_MODULE_3__["AuthNoticeService"] }
    ]; };
    AuthorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-auth',
            template: __webpack_require__(/*! raw-loader!./author.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/author/author.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./author.component.scss */ "./src/app/views/author/author.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"],
            _core_auth__WEBPACK_IMPORTED_MODULE_3__["AuthNoticeService"]])
    ], AuthorComponent);
    return AuthorComponent;
}());



/***/ }),

/***/ "./src/app/views/author/author.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/author/author.module.ts ***!
  \***********************************************/
/*! exports provided: AuthorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorModule", function() { return AuthorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _author_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./author.component */ "./src/app/views/author/author.component.ts");
/* harmony import */ var _submission_form_submission_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./submission-form/submission-form.component */ "./src/app/views/author/submission-form/submission-form.component.ts");
/* harmony import */ var _auth_notice_auth_notice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-notice/auth-notice.component */ "./src/app/views/author/auth-notice/auth-notice.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _tag_selections_tags_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tag-selections/tags.component */ "./src/app/views/author/tag-selections/tags.component.ts");
/* harmony import */ var _directive_focus_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directive/focus.directive */ "./src/app/views/author/directive/focus.directive.ts");

// Angular




// Material







var routes = [
    {
        path: '',
        component: _author_component__WEBPACK_IMPORTED_MODULE_6__["AuthorComponent"],
        children: [
            {
                path: '',
                redirectTo: 'submission',
                pathMatch: 'full'
            },
            {
                path: 'submission',
                component: _submission_form_submission_form_component__WEBPACK_IMPORTED_MODULE_7__["SubmissionFormComponent"],
            },
            {
                path: 'tags',
                component: _tag_selections_tags_component__WEBPACK_IMPORTED_MODULE_10__["TagsComponent"],
                data: { returnUrl: window.location.pathname }
            },
        ]
    }
];
var AuthorModule = /** @class */ (function () {
    function AuthorModule() {
    }
    AuthorModule_1 = AuthorModule;
    AuthorModule.forRoot = function () {
        return {
            ngModule: AuthorModule_1,
            providers: []
        };
    };
    var AuthorModule_1;
    AuthorModule = AuthorModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbTabsetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]
            ],
            exports: [_author_component__WEBPACK_IMPORTED_MODULE_6__["AuthorComponent"], _auth_notice_auth_notice_component__WEBPACK_IMPORTED_MODULE_8__["AuthNoticeComponent"]],
            declarations: [
                _author_component__WEBPACK_IMPORTED_MODULE_6__["AuthorComponent"],
                _submission_form_submission_form_component__WEBPACK_IMPORTED_MODULE_7__["SubmissionFormComponent"],
                _auth_notice_auth_notice_component__WEBPACK_IMPORTED_MODULE_8__["AuthNoticeComponent"],
                _tag_selections_tags_component__WEBPACK_IMPORTED_MODULE_10__["TagsComponent"],
                _directive_focus_directive__WEBPACK_IMPORTED_MODULE_11__["FocusDirective"],
            ],
        })
    ], AuthorModule);
    return AuthorModule;
}());



/***/ }),

/***/ "./src/app/views/author/directive/focus.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/author/directive/focus.directive.ts ***!
  \***********************************************************/
/*! exports provided: FocusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusDirective", function() { return FocusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FocusDirective = /** @class */ (function () {
    function FocusDirective(el) {
        this.el = el;
        // console.log(this.el);
    }
    FocusDirective.prototype.onClick = function (event) {
        console.log(event);
        // event.o
    };
    FocusDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], FocusDirective.prototype, "onClick", null);
    FocusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[ktFocus]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FocusDirective);
    return FocusDirective;
}());



/***/ }),

/***/ "./src/app/views/author/model/work.ts":
/*!********************************************!*\
  !*** ./src/app/views/author/model/work.ts ***!
  \********************************************/
/*! exports provided: Work */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Work", function() { return Work; });
var Work = /** @class */ (function () {
    function Work() {
        this.SelectedTags = [];
        this.Tags = [];
    }
    return Work;
}());



/***/ }),

/***/ "./src/app/views/author/submission-form/submission-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/views/author/submission-form/submission-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-select-trigger, mat-selected {\n  color: #646c9a; }\n\nmat-select {\n  color: #646c9a; }\n\n.mat-select-value {\n  color: #646c9a; }\n\nmat-chip-list, mat-chip {\n  font-style: normal; }\n\n.flex-container {\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around; }\n\n.flex-container > div {\n  margin-right: 3.3px;\n  width: 180px; }\n\n#snackbar {\n  visibility: hidden;\n  margin-left: -125px;\n  background-color: #5A29A9;\n  color: #fff;\n  width: 250px;\n  height: 100px;\n  border-radius: 2px;\n  padding: 16px;\n  padding-bottom: -10px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n  font-size: 17px;\n  text-align: center;\n  font-family: Poppins, Helvetica, sans-serif; }\n\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n.mat-simple-snackbar {\n  font-size: 16px; }\n\n.snackbar1 {\n  height: 90px;\n  padding: 30px !important;\n  background-color: #5A29A9;\n  color: #ffffff;\n  font-weight: 500;\n  font-family: inherit; }\n\n.snackbar1 .mat-button-wrapper {\n    color: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL2F1dGhvci9zdWJtaXNzaW9uLWZvcm0vc3VibWlzc2lvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYyxFQUFBOztBQUdmO0VBQ0MsY0FBYyxFQUFBOztBQUlmO0VBQ0MsY0FBYyxFQUFBOztBQUlmO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsYUFBYTtFQUViLG1CQUFtQjtFQUNuQiw2QkFBNkIsRUFBQTs7QUFJOUI7RUFFQyxtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQU9iO0VBQ0Msa0JBQWtCO0VBRWxCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMkNBQTJDLEVBQUE7O0FBSzVDO0VBQ0MsbUJBQW1CO0VBQ25CLGlEQUFpRDtFQUNqRCx5Q0FBeUMsRUFBQTs7QUFHMUM7RUFDQztJQUNDLFNBQVM7SUFDVCxVQUFVLEVBQUE7RUFFWDtJQUNDLFlBQVk7SUFDWixVQUFVLEVBQUEsRUFBQTs7QUFJWjtFQUNDO0lBQ0MsU0FBUztJQUNULFVBQVUsRUFBQTtFQUVYO0lBQ0MsWUFBWTtJQUNaLFVBQVUsRUFBQSxFQUFBOztBQUlaO0VBQ0M7SUFDQyxZQUFZO0lBQ1osVUFBVSxFQUFBO0VBRVg7SUFDQyxTQUFTO0lBQ1QsVUFBVSxFQUFBLEVBQUE7O0FBSVo7RUFDQztJQUNDLFlBQVk7SUFDWixVQUFVLEVBQUE7RUFFWDtJQUNDLFNBQVM7SUFDVCxVQUFVLEVBQUEsRUFBQTs7QUFJWjtFQUNDLGVBQWUsRUFBQTs7QUFHaEI7RUFDQyxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBOztBQU5yQjtJQVFFLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvYXV0aG9yL3N1Ym1pc3Npb24tZm9ybS9zdWJtaXNzaW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2VsZWN0LXRyaWdnZXIsIG1hdC1zZWxlY3RlZCB7XG5cdGNvbG9yOiAjNjQ2YzlhO1xufVxuXG5tYXQtc2VsZWN0IHtcblx0Y29sb3I6ICM2NDZjOWE7XG5cbn1cblxuLm1hdC1zZWxlY3QtdmFsdWUge1xuXHRjb2xvcjogIzY0NmM5YTtcbn1cblxuXG5tYXQtY2hpcC1saXN0LCBtYXQtY2hpcCB7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuLmZsZXgtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0Ly9mbGV4LXdyYXA6IHdyYXA7XG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuXG59XG5cbi5mbGV4LWNvbnRhaW5lciA+IGRpdiB7XG5cdC8vYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcblx0bWFyZ2luLXJpZ2h0OiAzLjNweDtcblx0d2lkdGg6IDE4MHB4O1xuXHQvL3BhZGRpbmctcmlnaHQ6IDEycHg7XG5cdC8vY29sb3I6ICM2NDZjOWE7XG59XG5cblxuLy8gc25hY2tiYXJcbiNzbmFja2JhciB7XG5cdHZpc2liaWxpdHk6IGhpZGRlbjtcblxuXHRtYXJnaW4tbGVmdDogLTEyNXB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNUEyOUE5O1xuXHRjb2xvcjogI2ZmZjtcblx0d2lkdGg6IDI1MHB4O1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHRib3JkZXItcmFkaXVzOiAycHg7XG5cdHBhZGRpbmc6IDE2cHg7XG5cdHBhZGRpbmctYm90dG9tOiAtMTBweDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHR6LWluZGV4OiAxO1xuXHRsZWZ0OiA1MCU7XG5cdGJvdHRvbTogMzBweDtcblx0Zm9udC1zaXplOiAxN3B4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cbn1cblxuXG4jc25hY2tiYXIuc2hvdyB7XG5cdHZpc2liaWxpdHk6IHZpc2libGU7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG5cdGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcblx0ZnJvbSB7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0dG8ge1xuXHRcdGJvdHRvbTogMzBweDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmFkZWluIHtcblx0ZnJvbSB7XG5cdFx0Ym90dG9tOiAwO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cblx0dG8ge1xuXHRcdGJvdHRvbTogMzBweDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlb3V0IHtcblx0ZnJvbSB7XG5cdFx0Ym90dG9tOiAzMHB4O1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0dG8ge1xuXHRcdGJvdHRvbTogMDtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgZmFkZW91dCB7XG5cdGZyb20ge1xuXHRcdGJvdHRvbTogMzBweDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdHRvIHtcblx0XHRib3R0b206IDA7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxufVxuXG4ubWF0LXNpbXBsZS1zbmFja2JhciB7XG5cdGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNuYWNrYmFyMSB7XG5cdGhlaWdodDogOTBweDtcblx0cGFkZGluZzogMzBweCAhaW1wb3J0YW50OyAvLyBzcGFjaW5nIGJldHdlZW4gdGhlIHRleHQgYW5kIGJvdW5kYXJ5XG5cdGJhY2tncm91bmQtY29sb3I6ICM1QTI5QTk7XG5cdGNvbG9yOiAjZmZmZmZmO1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRmb250LWZhbWlseTogaW5oZXJpdDtcblx0Lm1hdC1idXR0b24td3JhcHBlciB7XG5cdFx0Y29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IC8vIGFjdGlvbiB0ZXh0IGNvbG9yXG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/author/submission-form/submission-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/author/submission-form/submission-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: SelectedTag, SubmissionFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedTag", function() { return SelectedTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmissionFormComponent", function() { return SubmissionFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _model_work__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/work */ "./src/app/views/author/model/work.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_work_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/work.service */ "./src/app/views/author/service/work.service.ts");

// Angular








var SelectedTag = /** @class */ (function () {
    function SelectedTag() {
    }
    return SelectedTag;
}());

var SubmissionFormComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param authNoticeService: AuthNoticeService
     * @param router: Router
     * @param fb: FormBuilder
     * @param tagService
     * @param snackBar
     */
    function SubmissionFormComponent(authNoticeService, router, fb, snackBar, datepipe, workService) {
        this.authNoticeService = authNoticeService;
        this.router = router;
        this.fb = fb;
        this.snackBar = snackBar;
        this.datepipe = datepipe;
        this.workService = workService;
        this.loading = false;
        this.errors = [];
        this.minDate = new Date(100, 0, 1);
        this.maxDate = new Date(Date.now());
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.selectedOptions = [];
        this.chips = [];
        this.singleSelected = [];
    }
    /**
     * On init
     */
    SubmissionFormComponent.prototype.ngOnInit = function () {
        // this.tags$ = this.tagService.getAllTags();
        this.tags$ = this.workService.getAllTags();
        this.initRegisterForm();
        // this.titleField.nativeElement.focus();
    };
    SubmissionFormComponent.prototype.ngAfterViewInit = function () {
        // setTimeout(() => {
        // 	// this.titleField.nativeElement.focus();
        // }, 3000);
    };
    /*
     * On destroy
     */
    SubmissionFormComponent.prototype.ngOnDestroy = function () {
        this.loading = false;
        if (this.sub != undefined) {
            this.sub.unsubscribe();
        }
    };
    /**
     * Form initalization
     * Default params, validators
     */
    SubmissionFormComponent.prototype.initRegisterForm = function () {
        this.registerForm = this.fb.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(200)
                ])
            ],
            date_written: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]),
            ],
            url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(400)
                ]),
            ],
            author: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)
                ])
            ],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(100)
                ])
            ],
            tag1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ])
            ],
            tag2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ])
            ],
            tag3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ])
            ],
            tag4: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ])
            ],
            tag5: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ])
            ],
            tag6: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ])
            ],
            tag7: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ])
            ],
        });
    };
    /**
     * Form Submit
     */
    SubmissionFormComponent.prototype.submit = function () {
        var _this = this;
        this.loading = true;
        var controls = this.registerForm.controls;
        // check form
        if (this.registerForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.loading = false;
            return;
        }
        var work = new _model_work__WEBPACK_IMPORTED_MODULE_6__["Work"]();
        work.Title = controls['title'].value;
        work.DateWritten = this.datepipe.transform(controls['date_written'].value, 'yyyyMMddHHmmss');
        work.DateSubmission = this.datepipe.transform(new Date(Date.now()), 'yyyyMMddHHmmss');
        work.URL = controls['url'].value;
        work.AuthorName = controls['author'].value;
        work.AuthorEmail = controls['email'].value;
        var tags = [];
        for (var i = 1; i <= 7; i++) {
            var tag = controls['tag' + i].value;
            if (tag !== undefined) {
                tags = tags.concat(tag);
            }
        }
        work.SelectedTags = work.SelectedTags.concat(tags);
        var message = 'Your Work has been submitted successfully!';
        this.sub = this.workService.submit(work).subscribe(function (res) {
            _this.loading = false;
            _this.resetForm();
            _this.displaySnackBar(message);
            _this.router.navigateByUrl('/home');
        }, function (err) {
            _this.displaySnackBar('Work is not received.');
            return;
        });
        // this.displaySnackBar(message);
    };
    SubmissionFormComponent.prototype.resetForm = function () {
        this.registerForm.reset();
        var controls = this.registerForm.controls;
        for (var key in controls) {
            this.registerForm.get(key).clearValidators();
            this.registerForm.get(key).updateValueAndValidity();
        }
    };
    SubmissionFormComponent.prototype.displaySnackBar = function (message) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarConfig"]();
        config.duration = 5000;
        config.panelClass = ['d-flex', 'justify-content-center', 'snackbar1'];
        this.snackBar.open(message, '', config);
    };
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    SubmissionFormComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.registerForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    };
    SubmissionFormComponent.prototype.remove = function (title, tag) {
        this.chips = this.chips.filter(function (c) { return c !== title; });
        for (var index in this.selectedOptions) {
            if (this.selectedOptions[index] !== undefined) {
                this.selectedOptions[index] = this.selectedOptions[index].filter(function (f) { return f !== title; });
            }
        }
    };
    SubmissionFormComponent.prototype.removeFromSingleSelected = function (chip) {
        console.log(this.singleSelected);
        for (var i = 0; i < this.singleSelected.length; ++i) {
            if (this.singleSelected[i] === chip) {
                // console.log(chip);
                this.singleSelected[i] = '';
                break;
            }
        }
        console.log(this.singleSelected);
    };
    SubmissionFormComponent.prototype.selectionChanged = function (event, tagTitle) {
        if (event.isUserInput) {
            var selectedTag_1 = event.source.value;
            if (event.source.selected) {
                this.chips.push(selectedTag_1);
                var opts = this.selectedOptions[tagTitle];
                // console.log('opts', opts);
                if (opts !== undefined) {
                    opts.push(selectedTag_1);
                }
                else {
                    opts = [selectedTag_1];
                }
                this.selectedOptions[tagTitle] = opts;
                // console.log('selectedOptions[', tagTitle, '] ', this.selectedOptions);
            }
            else {
                this.chips = this.chips.filter(function (c) { return c !== selectedTag_1; });
            }
        }
    };
    SubmissionFormComponent.prototype.singleSelectionChanged = function (event, title) {
        if (event.isUserInput) {
            var selectedTag = event.source.value;
            console.log(this.singleSelected);
            // if (event.source.selected) {
            if (this.chips.indexOf(selectedTag) == -1) {
                this.chips.push(selectedTag);
            }
            // } else {
            // 	this.chips = this.chips.filter(c => c !== selectedTag);
            // }
        }
    };
    SubmissionFormComponent.ctorParameters = function () { return [
        { type: _core_auth__WEBPACK_IMPORTED_MODULE_4__["AuthNoticeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
        { type: _service_work_service__WEBPACK_IMPORTED_MODULE_8__["WorkService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SubmissionFormComponent.prototype, "titleField", void 0);
    SubmissionFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-submission',
            template: __webpack_require__(/*! raw-loader!./submission-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/author/submission-form/submission-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./submission-form.component.scss */ "./src/app/views/author/submission-form/submission-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_auth__WEBPACK_IMPORTED_MODULE_4__["AuthNoticeService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"],
            _service_work_service__WEBPACK_IMPORTED_MODULE_8__["WorkService"]])
    ], SubmissionFormComponent);
    return SubmissionFormComponent;
}());



/***/ }),

/***/ "./src/app/views/author/tag-selections/tags.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/author/tag-selections/tags.component.ts ***!
  \***************************************************************/
/*! exports provided: Tag, TagsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsComponent", function() { return TagsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var Tag = /** @class */ (function () {
    function Tag() {
        this.tagOptions = [];
    }
    return Tag;
}());

var TagsComponent = /** @class */ (function () {
    function TagsComponent(fb) {
        this.fb = fb;
        // Option field
        this.tagList1 = ['Standard', 'Brand Measurement', 'Outcome'];
        this.tagList2 = ['Quick read', 'Medium read', 'Long read'];
        this.tagList3 = ['Basic', 'Intermediate', 'Advanced'];
        this.tagList4 = ['Volume', 'Impressions', 'Engagements', 'Share of Voice', 'Click-throughs', 'AVE', 'ROI'];
        this.tagList5 = ['Artificial Intelligence', 'Automated', 'Human', 'Influencer identification and tracking', 'Impact', 'Measurement', 'Monitoring', 'ROI'];
        this.tagList6 = ['Campaign', 'Crisis', 'CSR', 'Integration', 'Internal communications', 'Ongoing', 'Reputation'];
        this.tagList7 = ['Analytics', 'Big data', 'Focus group', 'Human coding', 'Measurement', 'Modeling', 'Survey'];
        this.selectedTagList7 = [];
        this.tagLists = [
            {
                name: 'Length',
                tagOptions: ['Quick read', 'Medium read', 'Long read'],
                formCtrName: 'lengthTag'
            },
            {
                name: 'Level',
                tagOptions: ['Basic', 'Intermediate', 'Advanced'],
                formCtrName: 'levelTag'
            },
            {
                name: 'Metrics',
                tagOptions: ['Volume', 'Impressions', 'Engagements', 'Share of Voice', 'Click-throughs', 'AVE', 'ROI'],
                formCtrName: 'metricTag'
            },
            {
                name: 'Types',
                tagOptions: ['Artificial Intelligence', 'Automated', 'Human', 'Influencer identification and tracking', 'Impact', 'Measurement', 'Monitoring', 'ROI'],
                formCtrName: 'typesTag'
            },
            {
                name: 'Purpose',
                tagOptions: ['Campaign', 'Crisis', 'CSR', 'Integration', 'Internal communications', 'Ongoing', 'Reputation'],
                formCtrName: 'purposeTag'
            },
            {
                name: 'Methodologies',
                tagOptions: ['Analytics', 'Big data', 'Focus group', 'Human coding', 'Measurement', 'Modeling', 'Survey'],
                formCtrName: 'methodologiesTag'
            },
        ];
        this.chipList = [];
        this.selecTags = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
    }
    TagsComponent.prototype.ngOnInit = function () {
    };
    TagsComponent.prototype.remove = function (tag, selectedTagList) {
        console.log('Remove', tag);
        console.log('Remove2', selectedTagList);
        // let index: number = this.selectedTagList2.indexOf(tag);
        // if (index !== -1) {
        // 	this.selectedTagList2.splice(index, 1);
        // }
        // index = this.selectedTagList3.indexOf(tag);
        // if (index !== -1) {
        // 	this.selectedTagList3.splice(index, 1);
        // }
        // index = this.selectedTagList4.indexOf(tag);
        // if (index !== -1) {
        // 	this.selectedTagList4.splice(index, 1);
        // }
        // index = this.selectedTagList5.indexOf(tag);
        // if (index !== -1) {
        // 	this.selectedTagList5.splice(index, 1);
        // }
        // index = this.selectedTagList6.indexOf(tag);
        // if (index !== -1) {
        // 	this.selectedTagList6.splice(index, 1);
        // }
        // let index = this.selectedTagList7.indexOf(tag);
        // if (index !== -1) {
        // 	this.selectedTagList7.splice(index, 1);
        // if (this.selectedTagList7.length < 1) {
        // 	this.selectedTagList7=[];
        // }
        // this.selectedTagList7 = this.selectedTagList7.filter(t => t !== tag);
        // }
        // this.chipList = this.chipList.filter(t => t !== tag.name);
    };
    TagsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    TagsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-tags',
            template: __webpack_require__(/*! raw-loader!./tags.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/author/tag-selections/tags.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], TagsComponent);
    return TagsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-author-author-module.js.map
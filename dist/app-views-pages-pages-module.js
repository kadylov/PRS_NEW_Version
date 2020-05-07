(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-pages-pages-module"],{

/***/ "./node_modules/file-saver/dist/FileSaver.min.js":
/*!*******************************************************!*\
  !*** ./node_modules/file-saver/dist/FileSaver.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(b,c,d){var e=new XMLHttpRequest;e.open("GET",b),e.responseType="blob",e.onload=function(){a(e.response,c,d)},e.onerror=function(){console.error("could not download file")},e.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,b,d,e){if(e=e||open("","_blank"),e&&(e.document.title=e.document.body.innerText="downloading..."),"string"==typeof a)return c(a,b,d);var g="application/octet-stream"===a.type,h=/constructor/i.test(f.HTMLElement)||f.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||g&&h)&&"object"==typeof FileReader){var j=new FileReader;j.onloadend=function(){var a=j.result;a=i?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),e?e.location.href=a:location=a,e=null},j.readAsDataURL(a)}else{var k=f.URL||f.webkitURL,l=k.createObjectURL(a);e?e.location=l:location.href=l,e=null,setTimeout(function(){k.revokeObjectURL(l)},4E4)}});f.saveAs=a.saveAs=a, true&&(module.exports=a)});

//# sourceMappingURL=FileSaver.min.js.map

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin/assignment/assignment.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/admin/assignment/assignment.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>assignment works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin/incoming-datatable/incomingDatatable.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/admin/incoming-datatable/incomingDatatable.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t<kt-portlet-header [title]=\"'Current Assignments'\">\n\t</kt-portlet-header>\n\t<kt-portlet-body>\n\t\t<div perfectScrollbar [ngStyle]=\"{'max-height': '43vh', 'position': 'relative'}\"\n\t\t\t class=\"mat-table__wrapper mat-table__wrapper--dashboard mb-4\">\n\t\t\t<!--\t\t\t<table mat-table [dataSource]=\"dataSource\" matSort>-->\n\t\t\t<table mat-table [dataSource]=\"dataSource \" matSort>\n\n\t\t\t\t<!-- Work Id Column -->\n\t\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> id</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.WorkID}}</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Title -->\n\t\t\t\t<ng-container matColumnDef=\"Title\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t{{row.Title}}\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tDate Assigned-->\n\t\t\t\t<ng-container matColumnDef=\"DateAssigned\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Date Assigned</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<span style=\"margin-left: 6px\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t{{row.DateAssigned}}-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</span>-->\n\t\t\t\t\t\t{{row.DateAssigned}}\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tDue Date-->\n\t\t\t\t<ng-container matColumnDef=\"DueDate\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t<!--\t\t\t\t\t\t<span style=\"margin-left: 6px\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t{{row.DueDate}}-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t</span>-->\n\t\t\t\t\t\t{{row.DueDate}}\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tActions-->\n\t\t\t\t<ng-container matColumnDef=\"Action\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Action</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"><a href=\"\">View</a></td>\n\t\t\t\t</ng-container>\n\n\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n\t\t\t\t</tr>\n\t\t\t</table>\n\n\n\t\t\t<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\t\t</div>\n\n\t</kt-portlet-body>\n</kt-portlet>\n\n\n<ng-template #loadingMessage>\n\t<p class=\"text-center\">Loading...</p>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin/incoming-work/incoming-work.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/admin/incoming-work/incoming-work.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-lg-8\">\n\t\t<div class=\"kt-portlet\">\n\t\t\t<div class=\"kt-portlet__head\">\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\t\t\tPre-Review Material\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--begin::Form-->\n\t\t\t<form class=\"kt-form\">\n\t\t\t\t<div class=\"kt-portlet__body\">\n\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\n\t\t\t\t\t\t<iframe src=\"\" width=100% height=1000>\n\t\t\t\t\t\t\t<p>Your browser does not support iframes.</p>\n\t\t\t\t\t\t</iframe>\n\t\t\t\t\t\t​\n\t\t\t\t\t\t​\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t​\n\t\t\t</form>\n\t\t\t<!--end::Form-->\n\t\t</div>\n\t\t​\n\t\t​\n\t</div>\n\t<div class=\"col-lg-4\">\n\t\t<div class=\"kt-portlet\">\n\t\t\t<div class=\"kt-portlet__head\">\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\t\t\tApprove or Deny\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"kt-portlet__body\">\n\t\t\t\t<form [formGroup]=\"workForm\" class=\"kt-form kt-form--group-seperator-dashed\">\n\t\t\t\t<div>\n\t\t\t\t<mat-radio-group>\n\t\t\t\t\t<mat-radio-button value=\"approved\">Approve</mat-radio-button>\n\t\t\t\t\t<mat-radio-button  value=\"denied\">Deny</mat-radio-button>\n\t\t\t\t</mat-radio-group>\n\t\t\t\t</div>\n\t\t\t\t<br>\n\n\t\t\t\t<div class=\"button-row\">\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"submit()\"\n\t\t\t\t\t   mat-raised-button matTooltip=\"Submit & Continue\">\n\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Submit</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t<a [routerLink]=\"['../Dashboard']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n\t\t\t\t\t   matTooltip=\"Back to the users list\">\n\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Cancel</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t\t​\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin/scorecard/scorecard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/admin/scorecard/scorecard.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>scorecard works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/all-works/all-works.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/all-works/all-works.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-12\">\n\t\t<div class=\"kt-portlet\">\n\t\t\t<div class=\"kt-portlet__head\">\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\t\t\tList Of All Works\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"kt-portlet__body\">\n\t\t\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t\t\t<!-- start::FILTERS -->\n\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n\t\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\n\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div perfectScrollbar [ngStyle]=\"{'max-height': '43vh', 'position': 'relative'}\"\n\t\t\t\t\t class=\"mat-table__wrapper mat-table__wrapper--dashboard mb-4\">\n\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\" matSort>\n\n\t\t\t\t\t\t<!-- Tag Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"WID\">\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> ID</th>\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.WID }}</td>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Title -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"Title\">\n\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Title</th>\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\n\t\t\t\t\t\t\t\t<a href=\"javascript:;\">{{row.Title}}</a>\n\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t<span class=\"d-flex flex-wrap mdc-chip-set\" >-->\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<span-->\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\t*ngFor=\"let tag of row.Tags\"-->\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\tclass=\"mdc-chip demo-chip-shaped\">-->\n\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t\t<span class=\"mdc-chip__text\">{{tag}}</span>-->\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t</span>-->\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t\t</span>-->\n\t\t\t\t\t\t\t\t<!--\t\t\t\t\t\t</td>-->\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- AuthorName Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"AuthorName\">\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Author Name(s)</th>\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.AuthorName}} </td>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Status Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"Status\">\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Status</th>\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t\t\t<span\n\t\t\t\t\t\t\t\tclass='{{getItemCssClassByStatus(row.Status)}}'\n\t\t\t\t\t\t\t\t[matTooltip]=\"showStatusToolTip(row.Status)\"\n\t\t\t\t\t\t\t\t>{{row.Status}}</span></td>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<!-- Score Column -->\n\t\t\t\t\t\t<ng-container matColumnDef=\"ViewSummary\">\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Summary</th>\n\t\t\t\t\t\t\t<td class=\"align-self-center\" mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t\t\t<button mat-raised-button color=\"accent\"\n\t\t\t\t\t\t\t\t\t\t[disabled]=\"row.Status!='scored'\n\t\t\t\t\t\t\t \t\t\t\t\t&& row.Status!='rejected'\n\t\t\t\t\t\t\t \t\t\t\t\t&& row.Status!='accepted'\n\t\t\t\t\t\t\t\t\t\t\t\t&& row.Status!='denied'\"\n\n\t\t\t\t\t\t\t\t\t\t(click)=\"onClick(row)\"\n\n\n\t\t\t\t\t\t\t\t>\n\n\t\t\t\t\t\t\t\t\t<span [matTooltip]=\"showBtnToolTip(row.Status)\">View</span>\n\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<ng-container matColumnDef=\"Publish\">\n\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Publish</th>\n\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let work\"> <span>\n\t\t\t\t\t\t<mat-slide-toggle\n\t\t\t\t\t\t\t[checked]=\"work.Publish =='1'\"\n\t\t\t\t\t\t\t[disabled]=\"(work.Status==='rejected' || work.Status==='denied' || work.Status==='assigned')\"\n\t\t\t\t\t\t\t(change)=\"slideChanged($event, work)\"\n\t\t\t\t\t\t\tmatTooltip=\"{{showSliderToolTip(work)}}\"\n\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</mat-slide-toggle>\n\n\n\n\t\t\t\t\t</span></td>\n\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\n\n\t\t\t\t</div>\n\t\t\t\t<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"25\"></mat-paginator>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/assignment/assignment1.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/assignment/assignment1.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-12\">\n\t\t<mat-accordion multi=\"true\" *ngIf=\"reviewInProgress.length>0; else loadingMessage\">\n\t\t\t<mat-expansion-panel\n\t\t\t\t*ngFor=\"let review of reviewInProgress; let i=index;\" expanded=\"{{i==0}}\"\n\t\t\t\texpanded=\"{{true}}\"\n\t\t\t>\n\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t<h5>{{i + 1}}.</h5>\n\t\t\t\t\t\t\t<span style=\"margin-left: 5px\">\n\n\t\t\t\t\t\t<h5>{{review.Title}}</h5></span>\n\t\t\t\t\t</mat-panel-title>\n\n\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t<assigned-work-table\n\t\t\t\t\t[reviewers]=\"review.Reviewers\"\n\t\t\t\t\t[workID]=\"review.WID\"\n\t\t\t\t\t[showButton]=\"true\"\n\t\t\t\t\t(updatedReviewerList)=\"updateReviewerList($event, review)\"\n\t\t\t\t></assigned-work-table>\n\n\n\t\t\t\t<div class=\"mt-4 d-flex justify-content-center\">\n\t\t\t\t\t<div class=\"\">\n\t\t\t\t\t\t<button class=\" btn btn-primary\" (click)=\"addReviewer(review)\">Add Reviewer</button>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"ml-4\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t*ngIf=\"review.Reviewers\"\n\t\t\t\t\t\t\tclass=\"btn btn-primary\"\n\t\t\t\t\t\t\tstyle=\"background-color: #6B39B6;\"\n\t\t\t\t\t\t\t(click)=\"submitChanges(review)\">Submit Changes\n\t\t\t\t\t\t</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</mat-expansion-panel>\n\n\n\t\t</mat-accordion>\n\t</div>\n</div>\n\n\n<ng-template #loadingMessage>\n\t<div class=\"bg-white d-flex justify-content-center w-100\">\n\t\t<div class=\" align-self-center my-4 \">\n\t\t\t<h4>There is no unassigned works</h4>\n\t\t</div>\n\n\t</div>\n</ng-template>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/completed-review/completed-review.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/completed-review/completed-review.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"kt-portlet\">\n\t<div class=\"kt-portlet__head\">\n\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\tCompleted Reviewers\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"kt-portlet__body\">\n\t\t<div class=\"border\" style=\"padding: 0 10px; font-weight: 500\">\n\t\t\t<div class=\"row border-bottom bg-light\">\n\t\t\t\t<div class=\"col-sm-1 py-3\">ID</div>\n\t\t\t\t<div class=\"col-sm-4 py-3\">Title</div>\n\t\t\t\t<div class=\"col-sm-3 pl-5 py-3\">Author</div>\n\t\t\t\t<div class=\"col-sm-2 d-flex justify-content-center py-3\">Cumulative Score</div>\n\t\t\t\t<div class=\"col-sm-2 py-3\">\n\t\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t\t<span class=\"justify-content-center\">\n\t\t\t\t\t\t\tAction\n\t\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\n\t\t\t<div class=\"row\" *ngIf=\"scoredWorks$ | async as scoredWorks\">\n\t\t\t\t<ng-container *ngFor=\"let w of scoredWorks\">\n\n\t\t\t\t\t<div class=\"col-sm-1 py-3 align-self-center\">{{w.WID}}</div>\n\t\t\t\t\t<div class=\"col-sm-4 py-3 align-self-center\">{{w.Title}}</div>\n\t\t\t\t\t<div class=\"col-sm-3 py-3 pl-5 align-self-center\">{{w.AuthorName}}</div>\n\t\t\t\t\t<div class=\"col-sm-2 py-3 align-self-center\">\n\t\t\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t\t\t<span class=\"justify-content-center\">\n\t\t\t\t\t\t\t\t{{getCumulativeScore(w)}}\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-2 py-3 align-self-center\">\n\t\t\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t\t\t<span class=\"justify-content-center\">\n\t\t\t\t\t\t\t\t<a\n\t\t\t\t\t\t\t\t\thref=\"javascript:;\"\n\t\t\t\t\t\t\t\t\t(click)=\"onClick(w)\"\n\t\t\t\t\t\t\t\t>View Summary</a>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/completed-review/summary-view/summary-view.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/completed-review/summary-view/summary-view.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col\" *ngIf=\"summary\">\n\t\t<div class=\"kt-portlet\">\n\t\t\t<div class=\"kt-portlet__head\">\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\t\t\tWork Title: {{summary['Title']}}\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"kt-portlet__body\">\n\n\n<!--\t\t\t\t<div *ngIf=\"summary['Status']==='scored'\">-->\n\t\t\t\t\t<work-summary [scorecards]=\"summary['Scorecards']\"></work-summary>\n<!--\t\t\t\t</div>-->\n\n\n\n\t\t\t\t<div class=\"align-self-center d-flex mt-5\" *ngIf=\"summary['Status']==='scored'; else showMainMenuBtn\">\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\"\n\t\t\t\t\t   mat-raised-button matTooltip=\"Accept Work\"\n\n\t\t\t\t\t   (click)=\"onClick('accepted')\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Accept</span>\n\t\t\t\t\t</a>\n\n\t\t\t\t\t<a href=\"javascript:;\"\n\t\t\t\t\t   class=\"btn btn-primary kt-margin-r-10\" color=\"warn\"\n\t\t\t\t\t   mat-raised-button matTooltip=\"Reject Work\"\n\n\t\t\t\t\t   (click)=\"onClick('rejected')\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Reject</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t\t<ng-template #showMainMenuBtn>\n\t\t\t\t\t<div class=\"align-self-center d-flex mt-5\">\n\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t(click)=\"onClick()\"\n\t\t\t\t\t\t\tclass=\"btn btn-primary kt-margin-r-10\" color=\"primary\"\n\t\t\t\t\t\t\tmat-raised-button matTooltip=\"Go Back to Previous Page\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Main Menu</span>\n\t\t\t\t\t\t</button>\n\n\t\t\t\t\t</div>\n\t\t\t\t</ng-template>\n\n\t\t\t\t​\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"container-fluid bg-white pb-5\" style=\"font-weight: 300; font-size: 15px; color: rgba(21, 21, 21, 0.87)\">-->\n\n<!--\t\t<div class=\"row mb-1\">-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavender;\">1</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavenderblush;\">2</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavender;\">3</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavenderblush;\">4</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavender;\">5</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavenderblush;\">6</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavender;\">7</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavenderblush;\">8</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavender;\">9</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavenderblush;\">10</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavender;\">11</div>-->\n<!--\t\t\t<div class=\"col-sm-1\" style=\"background-color:lavenderblush;\">12</div>-->\n<!--\t\t</div>-->\n\n<!--</div>-->\n\n<div class=\"kt-portlet\">\n\t<div class=\"kt-portlet__head\">\n\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\tIncoming Works\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"kt-portlet__body\">\n\t\t<div class=\"border\" style=\"padding: 0 10px; font-weight: 500\">\n\t\t\t<div class=\"row border-bottom bg-light\">\n\t\t\t\t<div class=\"col-sm-1 py-3\" >ID</div>\n\t\t\t\t<div class=\"col-sm-4 py-3\">Title</div>\n\t\t\t\t<div class=\"col-sm-3 py-3\" >Author</div>\n\t\t\t\t<div class=\"col-sm-2 py-3\">Date Submitted</div>\n\t\t\t\t<div class=\"col-sm-2 py-3\">\n\t\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t<span class=\"justify-content-center\">\n\t\t\t\t\t\tAction\n\t\t\t\t\t</span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class=\"row\" *ngIf=\"works$ | async as works; else noWorks\">\n\t\t\t\t<ng-container *ngFor=\"let w of works\">\n\t\t\t\t\t<div class=\"col-sm-1 py-3 align-self-center\">{{w.WID}}</div>\n\t\t\t\t\t<div class=\"col-sm-4 py-3 align-self-center\">{{w.Title}}\n\t\t\t\t\t\t<!--\t\t\t\t<span class=\"mdc-chip-set\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t<span *ngFor=\"let tag of w.Tags\"-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t  class=\"mdc-chip demo-chip-shaped\">-->\n\t\t\t\t\t\t<!--\t\t\t\t\t\t\t\t<span class=\"mdc-chip__text\">{{tag}}</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t\t</span>-->\n\t\t\t\t\t\t<!--\t\t\t\t</span>-->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3 py-3 align-self-center\">{{w.AuthorName}}</div>\n\t\t\t\t\t<div class=\"col-sm-2 py-3 align-self-center\">{{w.DateSubmission}}</div>\n\t\t\t\t\t<div class=\"col-sm-2 py-3 align-self-center\">\n\t\t\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<button mat-button color=\"primary\" (click)=\"onClick(w)\">Review</button>\n\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</ng-container>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<ng-template #noWorks>\n\t<h4 class=\"text-center my-5\">There is no incoming works for pre review.</h4>\n</ng-template>\n\n<!--<div class=\"kt-portlet\">-->\n<!--\t<div class=\"kt-portlet__head\">-->\n<!--\t\t<div class=\"kt-portlet__head-caption\">-->\n<!--\t\t\t<div class=\"kt-portlet__head-title\">-->\n<!--\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">-->\n<!--\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>-->\n<!--\t\t\t\t\t\t</span>-->\n<!--\t\t\t\t<h3 class=\"kt-portlet__head-text\">-->\n<!--\t\t\t\t\tSummary-->\n<!--\t\t\t\t</h3>-->\n<!--\t\t\t</div>-->\n<!--\t\t</div>-->\n<!--\t</div>-->\n\n<!--\t<div class=\"kt-portlet__body\">-->\n<!--\t\t<work-summary [wid]=\"'30'\"></work-summary>-->\n<!--\t</div>-->\n<!--</div>-->\n\n\n<!--\t\t\t\t<div class=\"row mt-3\">-->\n<!--\t\t\t\t\t<div class=\"col-sm-2\" style=\"background-color:lavender;\">1</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-2\" style=\"background-color:lavenderblush;\">2</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-2\" style=\"background-color:lavender;\">3</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-2\" style=\"background-color:lavenderblush;\">4</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-2\" style=\"background-color:lavender;\">5</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-2\" style=\"background-color:lavenderblush;\">6</div>-->\n<!--\t\t\t\t</div>-->\n\n<!--\t\t\t\t<div class=\"row mt-3\">-->\n<!--\t\t\t\t\t<div class=\"col-sm-3\" style=\"background-color:lavender;\">1</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-3\" style=\"background-color:lavenderblush;\">2</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-3\" style=\"background-color:lavender;\">3</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-3\" style=\"background-color:lavenderblush;\">4</div>-->\n<!--\t\t\t\t</div>-->\n<!--\t\t\t\t<div class=\"row mt-3\">-->\n<!--\t\t\t\t\t<div class=\"col-sm-4\" style=\"background-color:lavender;\">1</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-4\" style=\"background-color:lavenderblush;\">2</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-4\" style=\"background-color:lavender;\">3</div>-->\n<!--\t\t\t\t</div>-->\n<!--\t\t\t\t<div class=\"row mt-3\">-->\n<!--\t\t\t\t\t<div class=\"col-sm-6\" style=\"background-color:lavender;\">1</div>-->\n<!--\t\t\t\t\t<div class=\"col-sm-6\" style=\"background-color:lavenderblush;\">2</div>-->\n<!--\t\t\t\t</div>-->\n\n\n<!--\t\t\t\t<div perfectScrollbar [ngStyle]=\"{'max-height': '43vh', 'position': 'relative'}\"-->\n<!--\t\t\t\t\t class=\"mat-table__wrapper mat-table__wrapper&#45;&#45;dashboard mb-4\">-->\n\n<!--\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\" matSort>-->\n\n<!--\t\t\t\t\t\t&lt;!&ndash; WID Column &ndash;&gt;-->\n<!--\t\t\t\t\t\t<ng-container matColumnDef=\"WID\">-->\n<!--\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> ID</th>-->\n<!--\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.WID }}</td>-->\n<!--\t\t\t\t\t\t</ng-container>-->\n\n<!--\t\t\t\t\t\t&lt;!&ndash; Title &ndash;&gt;-->\n<!--\t\t\t\t\t\t<ng-container matColumnDef=\"Title\">-->\n\n<!--\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Title</th>-->\n<!--\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">-->\n<!--\t\t\t\t\t\t\t\t<a href=\"javascript:;\">{{row.Title}}</a>-->\n\n<!--\t\t\t\t\t\t\t\t<span class=\"mdc-chip-set\">-->\n<!--\t\t\t\t\t\t\t<span *ngFor=\"let tag of row.Tags | slice:1\"-->\n<!--\t\t\t\t\t\t\t\t  class=\"mdc-chip demo-chip-shaped\"-->\n<!--\t\t\t\t\t\t\t>-->\n<!--\t\t\t\t\t\t\t\t<span class=\"mdc-chip__text\">{{tag}}</span></span>-->\n<!--\t\t\t\t\t\t</span>-->\n\n<!--\t\t\t\t\t\t\t</td>-->\n\n<!--\t\t\t\t\t\t</ng-container>-->\n\n<!--\t\t\t\t\t\t&lt;!&ndash; DateSubmission &ndash;&gt;-->\n<!--\t\t\t\t\t\t<ng-container matColumnDef=\"DateSubmission\">-->\n<!--\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Date Submission</th>-->\n<!--\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.DateSubmission }}</td>-->\n<!--\t\t\t\t\t\t</ng-container>-->\n\n<!--\t\t\t\t\t\t&lt;!&ndash; DateWritten &ndash;&gt;-->\n<!--\t\t\t\t\t\t<ng-container matColumnDef=\"DateWritten\">-->\n<!--\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Date Written</th>-->\n<!--\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.DateWritten }}</td>-->\n<!--\t\t\t\t\t\t</ng-container>-->\n\n<!--\t\t\t\t\t\t&lt;!&ndash; AuthorName Column &ndash;&gt;-->\n<!--\t\t\t\t\t\t<ng-container matColumnDef=\"AuthorName\">-->\n<!--\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Author-->\n<!--\t\t\t\t\t\t\t\tName(s)-->\n<!--\t\t\t\t\t\t\t</th>-->\n<!--\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.AuthorName}} </td>-->\n<!--\t\t\t\t\t\t</ng-container>-->\n\n<!--\t\t\t\t\t\t&lt;!&ndash; AuthorEmail Column &ndash;&gt;-->\n<!--\t\t\t\t\t\t<ng-container matColumnDef=\"AuthorEmail\">-->\n<!--\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Author Email-->\n<!--\t\t\t\t\t\t\t</th>-->\n<!--\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.AuthorEmail}} </td>-->\n<!--\t\t\t\t\t\t</ng-container>-->\n\n<!--\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>-->\n<!--\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">-->\n<!--\t\t\t\t\t\t</tr>-->\n<!--\t\t\t\t\t</table>-->\n\n\n<!--\t\t\t\t\t<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>-->\n<!--\t\t\t\t</div>-->\n\n\n<!--<div class=\"row\">-->\n<!--\t<div class=\"col-xl-12\">-->\n<!--\t\t<kt-portlet [class]=\"'kt-portlet&#45;&#45;height-fluid'\">-->\n<!--\t\t\t<kt-portlet-header [title]=\"'Top 3 Reviewed Works'\">-->\n<!--\t\t\t\t<ng-container ktPortletTools>-->\n<!--\t\t\t\t\t<kt-context-menu2></kt-context-menu2>-->\n<!--\t\t\t\t</ng-container>-->\n<!--\t\t\t</kt-portlet-header>-->\n<!--\t\t\t<kt-portlet-body>-->\n<!--\t\t\t\t<kt-widget5></kt-widget5>-->\n<!--\t\t\t</kt-portlet-body>-->\n<!--\t\t</kt-portlet>-->\n<!--\t</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/export-import-db/export-import-db.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/export-import-db/export-import-db.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-10\" style=\"font-weight: 500;\">\n\t\t<ngb-alert *ngIf=\"confMsg\"\n\t\t\t\t   [dismissible]=\"false\"\n\t\t\t\t   [type]='alertType'\n\t\t\t\t   (close)=\"confMsg = ''\">\n\n\t\t\t{{confMsg}}\n\t\t</ngb-alert>\n\t</div>\n</div>\n<div class=\"row\">\n\n\n\t<div class=\"col-xl-5\">\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Download database file'\">\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\n\t\t\t\t<span><button\n\t\t\t\t\tclass=\"btn btn-primary mr-3\"\n\t\t\t\t\t(click)=\"download()\"\n\t\t\t\t\t[ngClass]=\"{'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': downloading}\">Download</button></span>\n\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n\t<div class=\"col-xl-5\">\n\n\t\t<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t\t\t<kt-portlet-header [title]=\"'Upload database file'\">\n\t\t\t</kt-portlet-header>\n\t\t\t<kt-portlet-body>\n\n\t\t\t\t<!--\t\t\t\t<div role=\"progressbar\" [style.width.%]=\"uploadResponse.message\" aria-valuemin=\"0\" aria-valuenow=\"25\" aria-valuemax=\"100\">-->\n\t\t\t\t<!--\t\t\t\t\t{{uploadResponse.message}}%-->\n\t\t\t\t<!--\t\t\t\t</div>-->\n\n\t\t\t\t<!--\t\t\t\t<mat-spinner-->\n\t\t\t\t<!--\t\t\t\t\t*ngIf=\"loading\"-->\n\t\t\t\t<!--\t\t\t\t\t[color]=\"'accent'\"-->\n\t\t\t\t<!--\t\t\t\t\tstyle=\"margin:0 auto;\"-->\n\t\t\t\t<!--\t\t\t\t\tmode=\"indeterminate\"-->\n\t\t\t\t<!--\t\t\t\t></mat-spinner>-->\n\n\t\t\t\t<div class=\"d-flex justify-content-between\">\n\t\t\t\t\t<div class=\"align-self-center\">\n\n\t\t\t\t\t\t<input type=\"file\" #fileSelected (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".sql\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<button class=\"btn btn-primary\"\n\t\t\t\t\t\t\t\t\t*ngIf=\"!disableUploadBtn\"\n\t\t\t\t\t\t\t\t\t(click)=\"upload()\"\n\t\t\t\t\t\t\t\t\t[ngClass]=\"{'kt-spinner kt-spinner--right kt-spinner--md kt-spinner--light': uploading}\">Upload</button>\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t\t<span *ngIf=\"disableUploadBtn\"><button mat-raised-button disabled>Upload</button></span>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\n\t\t\t</kt-portlet-body>\n\t\t</kt-portlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/pre-review/pre-review.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/pre-review/pre-review.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-lg-8\" id=\"myDiv\">\n\t\t<div class=\"kt-portlet\">\n\t\t\t<div class=\"kt-portlet__head\">\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\t\t\tPre-Review Material\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"kt-portlet__head-toolbar\">\n\t\t\t\t\t<button (click)=\"openInFullScreen()\" *ngIf=\"!isFullscreen\" type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-clean btn-sm btn-icon btn-icon-md\" data-toggle=\"dropdown\"\n\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t<i class=\"flaticon2-arrow-1\"></i>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button (click)=\"exitFromFullScreen()\" *ngIf=\"isFullscreen\" type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-clean btn-sm btn-icon btn-icon-md\" data-toggle=\"dropdown\"\n\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t<i class=\"flaticon2-size\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"kt-portlet__body\">\n\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\n\n\t\t\t\t\t<div class=\"d-flex justify-content-center\"\n\t\t\t\t\t\t *ngIf=\"loading\">\n\t\t\t\t\t\t<mat-spinner class=\"align-self-center\" *ngIf=\"loading\"></mat-spinner>\n\t\t\t\t\t</div>\n\t\t\t\t\t<iframe #frameElement [src]=\"safeUrl\" (loadstart)=\"loading=true\" (load)=\"loading=false\"\n\t\t\t\t\t\t\tstyle=\"width:100%; height:1000px;\"></iframe>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-lg-4\">\n\t\t<div class=\"kt-portlet\">\n\t\t\t<div class=\"kt-portlet__head\">\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\t\t\tApprove or Deny\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"kt-portlet__body\">\n\t\t\t\t<mat-error *ngIf=\"isControlHasError('decision','required')\" class=\"mb-2\">Please make a decision\n\t\t\t\t</mat-error>\n\t\t\t\t<div class=\"mb-2\">\n\t\t\t\t\t<mat-radio-group [formControl]=\"decision\">\n\t\t\t\t\t\t<mat-radio-button value=\"admitted\">Approve</mat-radio-button>\n\t\t\t\t\t\t<mat-radio-button value=\"denied\">Deny</mat-radio-button>\n\t\t\t\t\t</mat-radio-group>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mb-4\">\n\t\t\t\t\t<mat-form-field *ngIf=\"decision.value=='denied'\" class=\"w-100 mt-4\">\n\t\t\t\t\t\t<mat-label>Reject Note</mat-label>\n\t\t\t\t\t\t<textarea matInput\n\t\t\t\t\t\t\t\t  cdkTextareaAutosize\n\t\t\t\t\t\t\t\t  #autosize=\"cdkTextareaAutosize\"\n\t\t\t\t\t\t\t\t  cdkAutosizeMinRows=\"6\"\n\t\t\t\t\t\t\t\t  cdkAutosizeMaxRows=\"6\"\n\t\t\t\t\t\t\t\t  [formControl]=\"rejectNote\"\n\t\t\t\t\t\t></textarea>\n\t\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('rejectNote','required')\">\n\t\t\t\t\t\t\t<strong>Required field</strong>\n\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('rejectNote','minlength')\">\n\t\t\t\t\t\t\t<strong> Minimum field length: 3</strong>\n\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('rejectNote','maxlength')\">\n\t\t\t\t\t\t\t<strong> Maximum field length: 100</strong>\n\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"button-row\">\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"submit()\"\n\t\t\t\t\t   mat-raised-button matTooltip=\"Submit & Continue\">\n\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Submit</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a [routerLink]=\"['../Dashboard']\"\n\t\t\t\t\t   class=\"btn btn-secondary kt-margin-r-10\"\n\t\t\t\t\t   mat-raised-button\n\t\t\t\t\t   matTooltip=\"Back to the work list\"\n\t\t\t\t\t   (click)=\"clearForm()\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Cancel</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<!--\t\t\t\t</form>-->\n\t\t\t</div>\n\t\t</div>\n\t\t​\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-4\" *ngIf=\"dataSource.data.length>0; else noReviewers\">\n\t<div perfectScrollbar [ngStyle]=\"{'max-height': '43vh', 'position': 'relative'}\"\n\t\t class=\"mat-table__wrapper mat-table__wrapper--dashboard mb-4\">\n\t\t<table mat-table [dataSource]=\"dataSource\">\n\n\t\t\t<!-- ID Column -->\n\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> ID</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.ReviewerID}}</td>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Reviewer -->\n\t\t\t<ng-container matColumnDef=\"Reviewer\">\n\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> Reviewer</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let row\">{{row.ReviewerName}}</td>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Role -->\n\t\t\t<ng-container matColumnDef=\"Role\">\n\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> Role</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let row\">{{row.Role}}</td>\n\t\t\t</ng-container>\n\n\n\t\t\t<!-- Due Date Column -->\n\t\t\t<ng-container matColumnDef=\"DueDate\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> Due Date</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.DueDate}} </td>\n\t\t\t</ng-container>\n\n\t\t\t<!--\t\t\tStatus Column-->\n\t\t\t<ng-container matColumnDef=\"Status\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> Status</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t<span\n\t\t\t\t\t\tclass=\"kt-badge kt-badge--lg kt-badge--inline kt-badge--pill kt-badge--{{ getItemCssClassByStatus(row.DueDate) }} kt-badge--wide\">{{ getItemStatusString(row.DueDate) }}</span>\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\t\t\t<!--\t\t\tAction-->\n\t\t\t<ng-container matColumnDef=\"Action\" style=\"margin-left: 40px\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> Action</th>\n\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t<button mat-button\n\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t[hidden]=\"row.DueDate<currentDate==false\"\n\t\t\t\t\t\t\t(click)=\"switchUser(row)\"\n\t\t\t\t\t>Switch Reviewer\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button mat-button\n\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t[hidden]=\"showButton==false\"\n\t\t\t\t\t\t\t(click)=\"reassignReviewer(row)\"\n\t\t\t\t\t>Switch Reviewer\n\t\t\t\t\t</button>\n\t\t\t\t</td>\n\t\t\t</ng-container>\n\n\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</div>\n\n<ng-template #noReviewers >\n\t<div class=\"d-flex justify-content-center\">\n\t\t<h5 class=\"pt-4\">Please add 4 reviewers and 1 lead reviewer for the assignment</h5>\n\n\t</div>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/review-in-progress/review-in-progress.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/review-in-progress/review-in-progress.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-12\">\n\t\t<mat-accordion  multi=\"true\" *ngIf=\"reviewInProgress$ | async as reviewInProgress; else loadingMessage\">\n\t\t\t<mat-expansion-panel\n\t\t\t\t*ngFor=\"let review of reviewInProgress; let i=index;\" expanded=\"{{i==0}}\"\n\t\t\t\texpanded=\"{{true}}\"\n\t\t\t>\n\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t{{i+1}}.<span style=\"margin-left: 5px\">\n\n\t\t\t\t\t\t{{review.Title}}</span>\n\t\t\t\t\t</mat-panel-title>\n\n\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t<assigned-work-table [reviewers]=\"review.Reviewers\"\n\t\t\t\t\t\t\t\t\t [workID]=\"review.WID\"\n\t\t\t\t\t\t\t\t\t [showButton]=\"false\"\n\t\t\t\t></assigned-work-table>\n\n\t\t\t</mat-expansion-panel>\n\t\t</mat-accordion>\n\t</div>\n</div>\n\n\n<ng-template #loadingMessage>\n\t<div class=\"col-xl-12\"></div><p class=\"text-center\">Loading...</p>\n</ng-template>\n\n<div class=\"row\">\n\t<div class=\"col-xl-12\">\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xl-12\" xmlns=\"http://www.w3.org/1999/html\" xmlns=\"http://www.w3.org/1999/html\">\n\t<div class=\"col-xl-12\">\n\t\t<div class=\"kt-modal3__container\">\n\t\t\t<mat-toolbar>\n\t\t\t\t<mat-toolbar-row>\n\t\t\t\t\t<span>Select one of the reviewers from the table</span>\n\t\t\t\t</mat-toolbar-row>\n\t\t\t</mat-toolbar>\n\n\n\n\t\t\t<mat-dialog-content>\n\n\t\t\t\t<div class=\"mt-5\">\n\t\t\t\t\t<div class=\"d-flex justify-content-center\" *ngIf=\"due_date.invalid && due_date.touched\">\n\t\t\t\t\t\t<ngb-alert [type]=\"'danger'\" [dismissible]=\"false\" ><strong>Please select a reviewer from the table and set due date</strong></ngb-alert>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div perfectScrollbar [ngStyle]=\"{'max-height': '43vh', 'position': 'relative'}\"\n\t\t\t\t\t\t class=\"mat-table__wrapper mat-table__wrapper--dashboard mb-4\">\n\t\t\t\t\t\t<table mat-table [dataSource]=\"dataSource\">\n\n\t\t\t\t\t\t\t<!-- ReviewerID Column -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> ID</th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.ReviewerID}}</td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<!-- Reviewer Name -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"fullname\">\n\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Reviewer</th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">{{row.ReviewerName}}</td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<!-- Credential -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"credentialType\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Credential</th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">{{row.Credential}}</td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<!-- Role -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"roleType\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Role</th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">{{row.Role}}</td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<!-- Number of Reviews this month -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"reviewedThisMonth\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Reviews This Month</th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"row.ReviewedThisMonth != null; else zero\">\n\t\t\t\t\t\t\t\t\t{{row.ReviewedThisMonth}}\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<!-- Total Reviews -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"totalReviews\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef> Total Reviews</th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">{{row.TotalReviews}}</td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<!-- Set Due Date Action -->\n\t\t\t\t\t\t\t<ng-container matColumnDef=\"setDueDate\">\n\t\t\t\t\t\t\t\t<th mat-header-cell *matHeaderCellDef style=\"width: 120px\"> Set Due Date</th>\n\t\t\t\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\n\t\t\t\t\t\t\t\t\t<div *ngIf=\"clicked[row.ReviewerID]\">\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n\t\t\t\t\t\t\t\t\t\t<mat-datepicker #picker ></mat-datepicker>\n\t\t\t\t\t\t\t\t\t\t<mat-form-field style=\"width: 66px\">\n\t\t\t\t\t\t\t\t\t\t\t<mat-label>Due date</mat-label>\n\t\t\t\t\t\t\t\t\t\t\t<input matInput [matDatepicker]=\"picker\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [formControl]=\"due_date\"\n\t\t\t\t\t\t\t\t\t\t\t\t   readonly=\"readonly\"\n\t\t\t\t\t\t\t\t\t\t\t\t   [min]=\"minDate\"\n\t\t\t\t\t\t\t\t\t\t\t>\n\n\t\t\t\t\t\t\t\t\t\t\t<mat-error *ngIf=\"isControlHasError('required')\">\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</ng-container>\n\n\t\t\t\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n\n\t\t\t\t\t\t\t\t(click)=\"selection.toggle(row); rowClicked(row)\"\n\t\t\t\t\t\t\t\t[ngClass]=\"{hovered: row.hovered, highlighted: selection.isSelected(row)}\"\n\t\t\t\t\t\t\t\t(mouseover)=\"row.hovered = true\" (mouseout)=\"row.hovered = false\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\t\t\t</mat-dialog-content>\n\t\t\t<mat-dialog-actions class=\"d-flex justify-content-center\">\n\t\t\t\t\t<span>\n\t\t\t\t\t\t<button class=\"mat-raised-button\" style=\"margin-right: 15px\" (click)=\"close()\">Close</button>\n\t\t\t\t\t\t<button class=\"btn btn-primary \" (click)=\"switch()\">Select</button>\n\t\t\t\t\t</span>\n\n\n\t\t\t</mat-dialog-actions>\n\t\t</div>\n\t</div>\n</div>\n\n\n<ng-template #zero>\n\t<span>\n\t\t0\n\t</span>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/rubric/rubric.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/rubric/rubric.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-column bg-white w-50\">\n\t<div class=\"p-5 text-center\">\n\t\t<h3>Update Rubric For The Scorecard</h3>\n\t</div>\n\n\t<div>\n\n\t\t<div class=\"d-flex justify-content-center\" style=\"font-weight: 500;\">\n\t\t\t<ngb-alert class=\"form-group w-65\"\n\t\t\t\t\t\t*ngIf=\"confMsg\"\n\t\t\t\t\t   [dismissible]=\"false\"\n\t\t\t\t\t   [type]='alertType'\n\t\t\t\t\t   (close)=\"confMsg = ''\">\n\n\t\t\t\t{{confMsg}}\n\t\t\t</ngb-alert>\n\t\t</div>\n\n\t\t<form class=\"d-flex justify-content-center\" [formGroup]=\"rubricForm\" autocomplete=\"off\">\n\n\t\t\t<div class=\"form-group w-65\">\n\t\t\t\t<mat-form-field\tclass=\"mb-2\" *ngFor=\"let r of rubrics\">\n\t\t\t\t\t<mat-label>{{r.RubricID}}</mat-label>\n\t\t\t\t\t<input matInput type=\"text\" [(ngModel)]=\"r.Text\"\n\t\t\t\t\t\t   autocomplete=\"off\"\n\t\t\t\t\t\t   formControlName=\"{{r.RubricID}}\"\n\t\t\t\t\t/>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError(r.RubricID,'required')\">\n\t\t\t\t\t\t<strong>Required field</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError(r.RubricID,'minlength')\">\n\t\t\t\t\t\t<strong>Minimum Length: 6</strong>\n\t\t\t\t\t</mat-error>\n\t\t\t\t\t<mat-error *ngIf=\"isControlHasError(r.RubricID,'maxlength')\">\n\t\t\t\t\t\t<strong>Maximum length: 120</strong>\n\t\t\t\t\t</mat-error>\n\n\t\t\t\t</mat-form-field>\n\n\n\n\t\t\t\t<div class=\"d-flex justify-content-center mt-4\">\n\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"submit()\"\n\t\t\t\t\t   mat-raised-button matTooltip=\"Submit & Continue\">\n\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Submit</span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a [routerLink]=\"['../Dashboard']\"\n\t\t\t\t\t   class=\"btn btn-secondary kt-margin-r-10\"\n\t\t\t\t\t   mat-raised-button\n\t\t\t\t\t   matTooltip=\"Back to the work list\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Cancel</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\t\t</form>\n\t</div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/user-management/user-management.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/user-management/user-management.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div *ngIf=\"hasUserAccess$ | async\">\n    <router-outlet></router-outlet>\n</div> -->\n<div>\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/user-management/users/user-edit/user-edit.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/user-management/users/user-edit/user-edit.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n\t<kt-portlet-header [title]=\"getComponentTitle()\" [class]=\"'kt-portlet__head--lg'\" [viewLoading$]=\"loading$\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<a [routerLink]=\"['../../']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n\t\t\t   matTooltip=\"Back to the users list\">\n\t\t\t\t<i class=\"la la-arrow-left\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Back</span>\n\t\t\t</a>\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-secondary kt-margin-r-10\" (click)=\"reset()\"\n\t\t\t   [disabled]=\"selectedTab !== 0\" mat-raised-button matTooltip=\"Reset changes\">\n\t\t\t\t<i class=\"la la-cog\"></i>\n\t\t\t\t<span class=\"kt-hidden-mobile\">Reset</span>\n\t\t\t</a>\n\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSumbit(false)\"\n\t\t\t   mat-raised-button matTooltip=\"Save & Continue\">\n\t\t\t\t<span class=\"kt-hidden-mobile\">Save</span>\n\t\t\t</a>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\n\t<kt-portlet-body>\n\t\t<mat-tab-group [(selectedIndex)]=\"selectedTab\">\n\t\t\t<mat-tab>\n\t\t\t\t<ng-template mat-tab-label>\n\t\t\t\t\t<i class=\"mat-tab-label-icon fa fa-user\"></i>\n\t\t\t\t\tBasic info\n\t\t\t\t</ng-template>\n\t\t\t\t<ng-template matTabContent>\n\t\t\t\t\t<!--begin::Form-->\n\t\t\t\t\t<div *ngIf=\"user\">\n\t\t\t\t\t\t<form [formGroup]=\"userForm\" class=\"kt-form\">\n\n\t\t\t\t\t\t\t<kt-alert *ngIf=\"hasFormErrors\" type=\"warn\" [showCloseButton]=\"true\" [duration]=\"10000\"\n\t\t\t\t\t\t\t\t\t  (close)=\"onAlertClose($event)\">\n\t\t\t\t\t\t\t\tError! Invalid Input.\n\t\t\t\t\t\t\t</kt-alert>\n\t\t\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\n\t\t\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Username\" formControlName=\"username\"/>\n\t\t\t\t\t\t\t\t\t\t\t<mat-error>Username is\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Username</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Password\" formControlName=\"password\"/>\n\t\t\t\t\t\t\t\t\t\t\t<mat-error>Password is\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Password</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Enter Full Name\" formControlName=\"fullname\"/>\n\t\t\t\t\t\t\t\t\t\t\t<mat-error>Full Name is\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Full Name</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group kt-form__group row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"email\" matInput placeholder=\"Enter Email\"\n\t\t\t\t\t\t\t\t\t\t\t\t   formControlName=\"email\"/>\n\t\t\t\t\t\t\t\t\t\t\t<mat-error>Email is\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>required</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-error>\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Please enter\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Email</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t\t\t\t<!-- Credentials dropbox-->\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\n\t\t\t\t\t\t\t\t\t\t\t<mat-select\n\t\t\t\t\t\t\t\t\t\t\t\t#onCredFocus\n\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"onCredFocus.open()\"\n\t\t\t\t\t\t\t\t\t\t\t\t(selectionChange)=\"onCredFocus.close(); onCredFocus.focus()\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Credentials\" [(ngModel)]=\"credentialsIdForAdding\" formControlName=\"credential\" [(value)]=\"credentialsIdForAdding\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let c of credentials\" value=\"{{c.rcID}}\">{{c.CredentialType}}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Select\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Credentials</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4 kt-margin-bottom-20-mobile\">\n\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\n\t\t\t\t\t\t\t\t\t\t\t<mat-select\n\t\t\t\t\t\t\t\t\t\t\t\t#onFocus\n\t\t\t\t\t\t\t\t\t\t\t\t(focus)=\"onFocus.open()\"\n\t\t\t\t\t\t\t\t\t\t\t\t(selectionChange)=\"onFocus.close(); onFocus.focus()\"\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Select Role\" [(ngModel)]=\"roleIdForAdding\" formControlName=\"role\" [(value)]=\"roleIdForAdding\">\n\t\t\t\t\t\t\t\t\t\t\t\t<mat-option  *ngFor=\"let r of roles\" value=\"{{r.id}}\">{{r.RoleType}}</mat-option>\n\t\t\t\t\t\t\t\t\t\t\t</mat-select>\n\t\t\t\t\t\t\t\t\t\t\t<mat-hint align=\"start\">Select\n\t\t\t\t\t\t\t\t\t\t\t\t<strong>Role</strong>\n\t\t\t\t\t\t\t\t\t\t\t</mat-hint>\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!--end::Form-->\n\t\t\t\t</ng-template>\n\t\t\t</mat-tab>\n\n\n\n\t\t</mat-tab-group>\n\t</kt-portlet-body>\n</kt-portlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/user-management/users/users-list/users-list.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/user-management/users/users-list/users-list.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet>\n\t<kt-portlet-header [title]=\"'Users list'\" [class]=\"'kt-portlet__head--lg'\">\n\t\t<ng-container ktPortletTools>\n\t\t\t<button [routerLink]=\"['../users/add']\" mat-raised-button color=\"primary\" matTooltip=\"Create new User\">New\n\t\t\t\tuser\n\t\t\t</button>\n\t\t</ng-container>\n\t</kt-portlet-header>\n\t<!-- end::Header -->\n\n\t<!-- start::Body (attribute: ktPortletBody) -->\n\t<kt-portlet-body>\n\t\t<!-- start::FILTERS & GROUP ACTIONS -->\n\t\t<div class=\"kt-form kt-margin-b-30\">\n\t\t\t<!-- start::FILTERS -->\n\t\t\t<div class=\"kt-form__filtration\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-md-2 kt-margin-bottom-10-mobile\">\n\t\t\t\t\t\t<mat-form-field class=\"mat-form-field-fluid\">\n\t\t\t\t\t\t\t<input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\"\n\t\t\t\t\t\t\t\t   #searchInput>\n\t\t\t\t\t\t\t<mat-hint align=\"start\">\n\t\t\t\t\t\t\t\t<strong>Search</strong> in all fields\n\t\t\t\t\t\t\t</mat-hint>\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- end::FILTERS -->\n\n\t\t</div>\n\t\t<!-- end::FILTERS & GROUP ACTIONS -->\n\n\t\t<!-- MATERIAL TABLE | Binded to datasources -->\n\t\t<!-- See off.documentations 'https://material.angular.io/components/table/overview' -->\n\t\t<div perfectScrollbar [ngStyle]=\"{'max-height': '43vh', 'position': 'relative'}\"\n\t\t\t class=\"mat-table__wrapper mat-table__wrapper--dashboard mb-4\">\n\t\t\t<table mat-table [dataSource]=\"dataSource\" matSort>\n\n\t\t\t\t<!-- ID column-->\n\t\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let user\">{{user.id}}</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Username column-->\n\t\t\t\t<ng-container matColumnDef=\"username\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Username</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let user\">{{user.username}}</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Email column-->\n\t\t\t\t<ng-container matColumnDef=\"email\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header class=\"email-cell\">Email</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let user\">\n\t\t\t\t\t\t<a href=\"#\" class=\"kt-link\">{{user.email}}</a>\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Full name column-->\n\t\t\t\t<ng-container matColumnDef=\"fullname\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Full name</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let user\">{{user.fullname}}</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Role column-->\n\t\t\t\t<ng-container matColumnDef=\"_roles\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Role</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let user\">{{user.roleType}}</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Edit/Delete user column-->\n\t\t\t\t<ng-container matColumnDef=\"actions\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef>Actions</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let user\">\n\n\t\t\t\t\t\t<button mat-icon-button\n\t\t\t\t\t\t\t\tcolor=\"primary\"\n\t\t\t\t\t\t\t\tmatTooltip=\"Edit user\"\n\t\t\t\t\t\t\t\t(click)=\"editUser(user.id, user)\">\n\t\t\t\t\t\t\t<mat-icon>create</mat-icon>\n\t\t\t\t\t\t</button>&nbsp;\n\t\t\t\t\t\t<mat-slide-toggle\n\t\t\t\t\t\t\t[checked]=\"user.isActive==='1'\"\n\n\t\t\t\t\t\t\t(change)=\"slideChanged($event, user)\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t</mat-slide-toggle>\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t\t\t</table>\n\t\t</div>\n\n\t\t<!-- start: BOTTOM -->\n\t\t<div class=\"mat-table__bottom\">\n\t\t\t<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" [pageSize]=\"10\">\n\t\t\t</mat-paginator>\n\t\t</div>\n\t\t<!-- end: BOTTOM -->\n\t</kt-portlet-body>\n\t<!-- end::Body -->\n\n</kt-portlet>\n\n\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/pages/work-summary/work-summary.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/pages/work-summary/work-summary.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n\t*ngIf=\"scorecards; else admin_review\"\n\tclass=\"border\" style=\"padding: 0 10px; font-weight: 500\">\n\t<div class=\"row justify-content-start border-bottom bg-light\">\n\t\t<div class=\"col-sm py-3 align-self-center\">Reviewer Name</div>\n\t\t<div class=\"col-sm py-3 align-self-center\">Role</div>\n\t\t<div class=\"col-sm py-3 align-self-center\">Credential</div>\n\t\t<div class=\"col-sm py-3 align-self-center\">\n\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t<span>\n\t\t\t\t\tIndividual Score\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n<!--\t body-->\n\t<div class=\"row justify-content-start mb-1 ws_body\" *ngFor=\"let scorecard of scorecards\">\n\t\t<div class=\"col-sm align-self-center\">{{scorecard.ReviewerName}}</div>\n\t\t<div class=\"col-sm align-self-center\">{{scorecard.Role}}</div>\n\t\t<div class=\"col-sm align-self-center\">{{scorecard.Credential}}</div>\n\t\t<div class=\"col-sm align-self-center\">\n\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t<span>\n\t\t\t\t\t{{getTotalScore(scorecard)}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"row justify-content-start border-top ws_body\">\n\t\t<div class=\"col-sm-7 text-right\"></div>\n\n\t\t<div class=\"col-sm-2 text-right overall border\">\n\t\t\tOveral Score:\n\t\t</div>\n\n\t\t<div class=\"col-sm-3 overall border\">\n\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t<span>\n\t\t\t\t\t{{overallScore}}\n\t\t\t\t</span>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>\n\n<ng-template #admin_review>\n\t<div\n\t\tclass=\"border\" style=\"padding: 0 10px; font-weight: 500\">\n\t\t<div class=\"row justify-content-start border-bottom bg-light\">\n\t\t\t<div class=\"col-sm py-3 align-self-center\">Reviewer Name</div>\n\t\t\t<div class=\"col-sm py-3 align-self-center\">Role</div>\n\t\t\t<div class=\"col-sm py-3 align-self-center\">Date Reviewed</div>\n\t\t\t<div class=\"col-sm py-3 align-self-center\">\n\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t<span>\n\t\t\t\t\tReject Note\n\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<!--\t body-->\n\t\t<div class=\"row justify-content-start mb-1 ws_body\">\n\t\t\t<div class=\"col-sm align-self-center\">{{adminReview['AdminName']}}</div>\n\t\t\t<div class=\"col-sm align-self-center\">Admin</div>\n\t\t\t<div class=\"col-sm align-self-center\">{{adminReview['DateReviewed']}}</div>\n\t\t\t<div class=\"col-sm align-self-center\">\n\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t<span>\n\t\t\t\t\t{{adminReview['RejectNote']}}\n\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</ng-template>\n\n\n"

/***/ }),

/***/ "./src/app/core/_base/layout/models/incoming-work.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/_base/layout/models/incoming-work.model.ts ***!
  \*****************************************************************/
/*! exports provided: IncomingWorkModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingWorkModel", function() { return IncomingWorkModel; });
var IncomingWorkModel = /** @class */ (function () {
    function IncomingWorkModel() {
    }
    return IncomingWorkModel;
}());



/***/ }),

/***/ "./src/app/views/pages/admin/assignment/assignment.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/pages/admin/assignment/assignment.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FkbWluL2Fzc2lnbm1lbnQvYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/admin/assignment/assignment.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/admin/assignment/assignment.component.ts ***!
  \**********************************************************************/
/*! exports provided: AssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function() { return AssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AssignmentComponent = /** @class */ (function () {
    function AssignmentComponent() {
    }
    AssignmentComponent.prototype.ngOnInit = function () {
    };
    AssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-assignment',
            template: __webpack_require__(/*! raw-loader!./assignment.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin/assignment/assignment.component.html"),
            styles: [__webpack_require__(/*! ./assignment.component.scss */ "./src/app/views/pages/admin/assignment/assignment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AssignmentComponent);
    return AssignmentComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/admin/incoming-datatable/incomingDatatable.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/admin/incoming-datatable/incomingDatatable.component.ts ***!
  \*************************************************************************************/
/*! exports provided: IncomingDatatable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingDatatable", function() { return IncomingDatatable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/reviewer/_reducers */ "./src/app/core/reviewer/_reducers/index.ts");
/* harmony import */ var _core_reviewer_actions_assignment_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/reviewer/_actions/assignment.actions */ "./src/app/core/reviewer/_actions/assignment.actions.ts");






var IncomingDatatable = /** @class */ (function () {
    function IncomingDatatable(store) {
        this.store = store;
        this.displayedColumns = ['id', 'Title', 'DateAssigned', 'DueDate', 'Action'];
        // Subscriptions
        this.subscriptions = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    IncomingDatatable.prototype.ngOnInit = function () {
        this.store.dispatch(new _core_reviewer_actions_assignment_actions__WEBPACK_IMPORTED_MODULE_5__["AssignmentRequested"](this.getUserId()));
        this.loadAssignmentHistory();
    };
    IncomingDatatable.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    IncomingDatatable.prototype.loadAssignmentHistory = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.store.select(_core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_4__["getCurrAssignmentsLoaded"]).subscribe(function (isLoaded) {
            if (isLoaded) {
                var subc$ = _this.store.select(_core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_4__["getCurrAssignments"])
                    .subscribe(function (res) {
                    _this.dataSource.data = res;
                });
                _this.subscriptions.push(subc$);
            }
        });
    };
    IncomingDatatable.prototype.getUserId = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        return user.id;
    };
    IncomingDatatable.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], IncomingDatatable.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], IncomingDatatable.prototype, "sort", void 0);
    IncomingDatatable = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-assigned-work',
            template: __webpack_require__(/*! raw-loader!./incomingDatatable.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin/incoming-datatable/incomingDatatable.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], IncomingDatatable);
    return IncomingDatatable;
}());



/***/ }),

/***/ "./src/app/views/pages/admin/incoming-work/incoming-work.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/admin/incoming-work/incoming-work.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FkbWluL2luY29taW5nLXdvcmsvaW5jb21pbmctd29yay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/admin/incoming-work/incoming-work.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/admin/incoming-work/incoming-work.component.ts ***!
  \****************************************************************************/
/*! exports provided: IncomingWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingWorkComponent", function() { return IncomingWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_base_layout_models_incoming_work_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout/models/incoming-work.model */ "./src/app/core/_base/layout/models/incoming-work.model.ts");
/* harmony import */ var _incoming_work_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./incoming-work.service */ "./src/app/views/pages/admin/incoming-work/incoming-work.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var IncomingWorkComponent = /** @class */ (function () {
    function IncomingWorkComponent(fb, snackBar, router, incomingWorkService) {
        this.fb = fb;
        this.snackBar = snackBar;
        this.router = router;
        this.incomingWorkService = incomingWorkService;
        this.PreReviewValue = "admitted";
        this.PreReviewDate = "2019-12-11";
        this.PreReviewAdminID = "6";
        this.PreReviewWorkID = "2";
        this.PreReviewNote = "";
        this.myDate = new Date();
    }
    IncomingWorkComponent.prototype.ngOnInit = function () {
        this.initWorkForm();
    };
    /**
    * Form initalization
    * Default params, validators
    */
    IncomingWorkComponent.prototype.initWorkForm = function () {
        this.workForm = this.fb.group({
            AdminID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ])
            ],
            WorkID: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                // Validators.required,
                ])
            ],
            DateReviewed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                // Validators.required,
                ])
            ],
            Decision: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                // Validators.required,
                ])
            ],
            RejectNote: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                // Validators.required,
                ])
            ],
        });
    };
    /**
     * Form Submit
     */
    IncomingWorkComponent.prototype.submit = function () {
        var _this = this;
        var adminReview = new _core_base_layout_models_incoming_work_model__WEBPACK_IMPORTED_MODULE_3__["IncomingWorkModel"]();
        adminReview.AdminID = 0;
        adminReview.WorkID = 27;
        adminReview.DateReviewed = "2020-03-10";
        adminReview.Decision = "rejected";
        adminReview.RejectNote = "Poor grammars";
        console.log(adminReview);
        var message = 'Your Work has been submitted successfully!';
        this.incomingWorkService.submit(adminReview).subscribe(function (res) {
            _this.snackBar.open(message, '', { duration: 4000 });
            _this.router.navigateByUrl('/dashboard');
        });
    };
    IncomingWorkComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _incoming_work_service__WEBPACK_IMPORTED_MODULE_4__["IncomingWorkService"] }
    ]; };
    IncomingWorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-incoming-work',
            template: __webpack_require__(/*! raw-loader!./incoming-work.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin/incoming-work/incoming-work.component.html"),
            styles: [__webpack_require__(/*! ./incoming-work.component.scss */ "./src/app/views/pages/admin/incoming-work/incoming-work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _incoming_work_service__WEBPACK_IMPORTED_MODULE_4__["IncomingWorkService"]])
    ], IncomingWorkComponent);
    return IncomingWorkComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/admin/incoming-work/incoming-work.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/admin/incoming-work/incoming-work.service.ts ***!
  \**************************************************************************/
/*! exports provided: IncomingWorkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingWorkService", function() { return IncomingWorkService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var api = 'http://3.95.8.94/example/admin_request.php';
var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
var IncomingWorkService = /** @class */ (function () {
    function IncomingWorkService(http) {
        this.http = http;
    }
    IncomingWorkService.prototype.submit = function (adminReview) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("adminReview", 'adminReview')
            .set("AdminID", adminReview.AdminID.toString())
            .set("WorkID", adminReview.WorkID.toString())
            .set("DateReviewed", adminReview.DateReviewed)
            .set("Decision", adminReview.Decision)
            .set("RejectNote", adminReview.RejectNote);
        return this.http.post(api, body.toString(), { headers: headers, observe: 'response' });
    };
    IncomingWorkService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    IncomingWorkService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], IncomingWorkService);
    return IncomingWorkService;
}());



/***/ }),

/***/ "./src/app/views/pages/admin/scorecard/scorecard.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/admin/scorecard/scorecard.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2FkbWluL3Njb3JlY2FyZC9zY29yZWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/pages/admin/scorecard/scorecard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/admin/scorecard/scorecard.component.ts ***!
  \********************************************************************/
/*! exports provided: ScorecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScorecardComponent", function() { return ScorecardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScorecardComponent = /** @class */ (function () {
    function ScorecardComponent() {
    }
    ScorecardComponent.prototype.ngOnInit = function () {
    };
    ScorecardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-scorecard',
            template: __webpack_require__(/*! raw-loader!./scorecard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/admin/scorecard/scorecard.component.html"),
            styles: [__webpack_require__(/*! ./scorecard.component.scss */ "./src/app/views/pages/admin/scorecard/scorecard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScorecardComponent);
    return ScorecardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/all-works/all-works.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/all-works/all-works.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td.mat-cell {\n  padding: 12px 0 16px 0; }\n\ntable {\n  width: 100%; }\n\n.mat-column-ID {\n  width: 85px; }\n\n.mat-column-Title {\n  width: 530px; }\n\n.mdc-chip {\n  border-radius: 16px;\n  background-color: #f2f3f8;\n  color: rgba(21, 21, 21, 0.87);\n  font-family: Poppins, Helvetica, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  height: 25px;\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0 12px;\n  border-width: 0;\n  outline: none;\n  -webkit-appearance: none; }\n\n.mdc-chip-set {\n  padding: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  margin-left: -7px;\n  margin-bottom: -11px; }\n\n.mdc-chip {\n  margin: 4px; }\n\n.demo-chip-shaped {\n  border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL2FsbC13b3Jrcy9hbGwtd29ya3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQkFBc0IsRUFBQTs7QUFJdkI7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxZQUFZLEVBQUE7O0FBZ0JiO0VBQ0MsbUJBQW1CO0VBRW5CLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMkNBQTJDO0VBQzNDLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4Qix1QkFBdUI7RUFDdkIsWUFBWTtFQUVaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFFbEIsbUJBQW1CO0VBRW5CLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7RUFFYix3QkFBd0IsRUFBQTs7QUFFekI7RUFDQyxZQUFZO0VBRVosYUFBYTtFQUViLGVBQWU7RUFFZixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUVyQjtFQUNDLFdBQVcsRUFBQTs7QUFJWjtFQUNDLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYWxsLXdvcmtzL2FsbC13b3Jrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkLm1hdC1jZWxsIHtcblx0cGFkZGluZzogMTJweCAwIDE2cHggMDtcblx0Ly9mb250LXNpemU6IDE4cHg7XG5cbn1cbnRhYmxle1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1jb2x1bW4tSUQge1xuXHR3aWR0aDogODVweDtcbn1cblxuLm1hdC1jb2x1bW4tVGl0bGUge1xuXHR3aWR0aDogNTMwcHg7XG5cblx0Ly93b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcblx0Ly93aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcblx0Ly9mbGV4OiAwIDAgMjglICFpbXBvcnRhbnQ7XG5cdC8vd2lkdGg6IDI4JSAhaW1wb3J0YW50O1xuXHQvL292ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdC8vXG5cdC8vd29yZC1icmVhazogYnJlYWstd29yZDtcblx0Ly9cblx0Ly8tbXMtaHlwaGVuczogYXV0bztcblx0Ly8tbW96LWh5cGhlbnM6IGF1dG87XG5cdC8vLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuXHQvL2h5cGhlbnM6IGF1dG87XG59XG5cbi5tZGMtY2hpcCB7XG5cdGJvcmRlci1yYWRpdXM6IDE2cHg7XG5cdC8vYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2YyZjNmODtcblx0Y29sb3I6IHJnYmEoMjEsIDIxLCAyMSwgMC44Nyk7XG5cdGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG5cdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHRmb250LXNpemU6IDAuODc1cmVtO1xuXHRsaW5lLWhlaWdodDogMS4yNXJlbTtcblx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0bGV0dGVyLXNwYWNpbmc6IDAuMDE3ODU3MTQyOWVtO1xuXHR0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG5cdHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuXHRoZWlnaHQ6IDI1cHg7XHRcdFx0XHRcdFx0Ly8gaGVpZ2h0XG5cdC8vZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xuXHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHQvLy1tcy1mbGV4LWFsaWduOiBzdGFydDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRwYWRkaW5nOiAwIDEycHg7XG5cdGJvcmRlci13aWR0aDogMDtcblx0b3V0bGluZTogbm9uZTtcblx0Ly9jdXJzb3I6IHBvaW50ZXI7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5tZGMtY2hpcC1zZXQgeyAvLy8vXG5cdHBhZGRpbmc6IDRweDtcblx0ZGlzcGxheTogLW1zLWZsZXhib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdC1tcy1mbGV4LXdyYXA6IHdyYXA7XG5cdGZsZXgtd3JhcDogd3JhcDtcblx0LXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRtYXJnaW4tbGVmdDogLTdweDtcblx0bWFyZ2luLWJvdHRvbTogLTExcHg7XG59XG4ubWRjLWNoaXAge1xuXHRtYXJnaW46IDRweDtcblx0Ly9tYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uZGVtby1jaGlwLXNoYXBlZCB7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/all-works/all-works.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/all-works/all-works.component.ts ***!
  \**************************************************************/
/*! exports provided: AllWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllWorksComponent", function() { return AllWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _author_service_work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../author/service/work.service */ "./src/app/views/author/service/work.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/admin/_services/admin.service */ "./src/app/core/admin/_services/admin.service.ts");






var AllWorksComponent = /** @class */ (function () {
    function AllWorksComponent(router, adminService, workService) {
        this.router = router;
        this.adminService = adminService;
        this.workService = workService;
        this.displayedColumns = ['WID', 'Title', 'AuthorName', 'Status', 'ViewSummary', 'Publish'];
        this.works = [];
        this.subscription = [];
        this.tagList = [];
        this.selectable = false;
        this.removable = false;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    AllWorksComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loadWorks();
    };
    AllWorksComponent.prototype.ngOnDestroy = function () {
        if (this.subscription.length > 0) {
            this.subscription.forEach(function (r) { return r.unsubscribe(); });
        }
    };
    AllWorksComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AllWorksComponent.prototype.loadWorks = function () {
        var _this = this;
        var subsc = this.workService.getAllWorks()
            .subscribe(function (res) {
            _this.dataSource.data = res;
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
            // console.log("AAAA");
            // console.log(this.dataSource.data);
        }, function (error) {
            console.log('There was an error while retrieving Posts !!!' + error);
        });
        this.subscription.push(subsc);
    };
    AllWorksComponent.prototype.slideChanged = function (event, work) {
        var checked;
        // console.log('BEfore ', checkedUser.isActive);
        if (event.checked) {
            checked = 1;
        }
        else {
            checked = 0;
        }
        var subsc = this.workService.publishWork(work.WID, checked)
            .subscribe(function (res) {
        }, function (error) {
            console.log('Error ', error);
        });
        this.subscription.push(subsc);
    };
    AllWorksComponent.prototype.onClick = function (summary) {
        var _this = this;
        if (summary.Status == 'denied') {
            var subsc = this.adminService.getAdminReview(summary.WID).subscribe(function (res) {
                var pre_review = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, summary, { AdminID: res[0].AdminID, AdminName: res[0].AName, DateReviewed: res[0].DateReviewed, Decision: res[0].Decision, RejectNote: res[0].RejectNote });
                // store admin's pre_review(e.g. AdminID, WorkID, Title, DateReviewed, Decision, RejectNote)
                sessionStorage.setItem('summary', JSON.stringify(pre_review));
                _this.router.navigateByUrl('/admin/summary');
            });
            this.subscription.push(subsc);
        }
        else {
            var subsc = this.adminService.getReviewersScorecard(summary.WID.toString()).subscribe(function (res) {
                sessionStorage.setItem('summary', JSON.stringify(res[0]));
                _this.router.navigateByUrl('/admin/summary');
            });
        }
    };
    /**
     * Returens item CSS Class Name by status
     *
     * @param status: number
     */
    AllWorksComponent.prototype.getItemCssClassByStatus = function (status) {
        /*  The classes for text colors are: .text-muted, .text-primary,
        .text-success, .text-info, .text-warning, .text-danger,
        .text-secondary, .text-white, .text-dark,and .text-light: */
        if (status === void 0) { status = ''; }
        switch (status) {
            case 'rejected':
                return 'text-danger';
            case 'assigned':
                return 'text-primary';
            case 'accepted':
                return 'text-success';
            default:
                return '';
        }
    };
    AllWorksComponent.prototype.showBtnToolTip = function (status) {
        if (status == 'assigned') {
            return 'Work Summary has not been generated yet';
        }
        else {
            return 'View Summary';
        }
    };
    AllWorksComponent.prototype.showStatusToolTip = function (status) {
        switch (status) {
            case 'rejected':
                return 'Admin rejected work';
            case 'assigned':
                return 'Assigned reviewers are still reviewing the work';
            case 'accepted':
                return 'Admin accepted work';
            case 'scored':
                return 'Assigned reviewers reviewed and scored the work';
            case 'denied':
                return 'Work did not pass admin\'s pre-review';
            default:
                return '';
        }
    };
    AllWorksComponent.prototype.showSliderToolTip = function (work) {
        if (work.Publish == 1) {
            return 'Work is published';
        }
        else if (work.Status == 'denied' || work.Status == 'rejected') {
            return 'Rejected work cannot be published';
        }
        else if (work.Status == 'assigned') {
            return 'Work has not been scored yet';
        }
        else {
            return 'Unpublished work';
        }
    };
    AllWorksComponent.prototype.prepare_pre_review = function (work) {
    };
    AllWorksComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _author_service_work_service__WEBPACK_IMPORTED_MODULE_3__["WorkService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AllWorksComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AllWorksComponent.prototype, "sort", void 0);
    AllWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-all-works',
            template: __webpack_require__(/*! raw-loader!./all-works.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/all-works/all-works.component.html"),
            styles: [__webpack_require__(/*! ./all-works.component.scss */ "./src/app/views/pages/all-works/all-works.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _author_service_work_service__WEBPACK_IMPORTED_MODULE_3__["WorkService"]])
    ], AllWorksComponent);
    return AllWorksComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/assignment/assignment1.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/views/pages/assignment/assignment1.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-expansion-panel-header {\n  background: rgba(0, 0, 0, 0.04); }\n\n.mat-expansion-panel-header.mat-expanded,\n.mat-expansion-panel-header.mat-expanded:hover,\n.mat-expansion-panel-header.mat-expanded:focus {\n  background: rgba(0, 0, 0, 0.04); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL2Fzc2lnbm1lbnQvYXNzaWdubWVudDEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywrQkFBK0IsRUFBQTs7QUFHaEM7OztFQUdFLCtCQUErQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvYXNzaWdubWVudC9hc3NpZ25tZW50MS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIubWF0LWV4cGFuZGVkLFxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLm1hdC1leHBhbmRlZDpob3Zlcixcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci5tYXQtZXhwYW5kZWQ6Zm9jdXMge1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/assignment/assignment1.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/pages/assignment/assignment1.component.ts ***!
  \*****************************************************************/
/*! exports provided: AssignmentComponent1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentComponent1", function() { return AssignmentComponent1; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/admin/_services/admin.service */ "./src/app/core/admin/_services/admin.service.ts");
/* harmony import */ var _reviewersToAssign_reviewer_to_assign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reviewersToAssign/reviewer-to-assign.component */ "./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");







var AssignmentComponent1 = /** @class */ (function () {
    function AssignmentComponent1(datePipe, dialog, ref, layoutUtilsService, adminService) {
        var _this = this;
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.ref = ref;
        this.layoutUtilsService = layoutUtilsService;
        this.adminService = adminService;
        this.reviewInProgress = [];
        this.selectedReviewer = null;
        this.subscriptions = [];
        var subsc = this.adminService.getUnassignedWorks().subscribe(function (res) {
            if (res) {
                _this.reviewInProgress = res;
                _this.ref.markForCheck();
                // console.log(this.reviewInProgress);
            }
        });
    }
    AssignmentComponent1.prototype.ngOnInit = function () {
        this.currentDate = this.datePipe.transform(new Date(Date.now()), 'yyyy-MM-dd');
    };
    AssignmentComponent1.prototype.ngOnDestroy = function () {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
        }
    };
    AssignmentComponent1.prototype.addReviewer = function (revInProgress) {
        var _this = this;
        var reviewerID = 0;
        if (this.selectedReviewer != null) {
            reviewerID = this.selectedReviewer.ReviewerID;
        }
        var dialogRef = this.dialog.open(_reviewersToAssign_reviewer_to_assign_component__WEBPACK_IMPORTED_MODULE_3__["ReviewerToAssignComponent"], {
            width: '1131px',
            data: {
                'reviewers': revInProgress.Reviewers,
                'workID': revInProgress.WID,
            },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.data != undefined || result.data == 'close') {
                return;
            }
            else {
                var newAssignedReviewer = {
                    ReviewerID: result.assignment.reviewer.ReviewerID,
                    ReviewerName: result.assignment.reviewer.ReviewerName,
                    Role: result.assignment.reviewer.Role,
                    DueDate: result.assignment.dueDate
                };
                var assignment = {
                    adminID: _this.getAdminId(),
                    reviewerID: newAssignedReviewer.ReviewerID,
                    workID: revInProgress.WID,
                    dueDate: result.assignment.dueDate,
                    dateAssigned: _this.currentDate
                };
                _this.addReviewerToList(revInProgress, newAssignedReviewer);
                // this.subscriptions.push(this.adminService.assignReviewer(assignment).subscribe(
                // 	res => {},
                // 	error => {
                // 		console.log('Error! Reviewer has not been added.');
                // 	}
                // ));
            }
        });
    };
    AssignmentComponent1.prototype.getAdminId = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        return user.id;
    };
    AssignmentComponent1.prototype.addReviewerToList = function (work, reviewer) {
        var _this = this;
        this.reviewInProgress.map(function (rip) {
            if (rip.WID === work.WID) {
                if (rip.Reviewers == undefined) {
                    rip.Reviewers = [];
                }
                rip.Reviewers = rip.Reviewers.concat([reviewer]);
                _this.ref.markForCheck();
                _this.selectedReviewer = reviewer;
                console.log(_this.reviewInProgress);
                return;
            }
        });
    };
    AssignmentComponent1.prototype.combineArrays = function (lhs, rhs) {
        var reviewers = {};
        lhs.forEach(function (key, i) { return reviewers[key] = rhs[i]; });
        return reviewers;
    };
    AssignmentComponent1.prototype.updateReviewerList = function (reviewers, review) {
        review.Reviewers = reviewers;
        this.ref.markForCheck();
    };
    AssignmentComponent1.prototype.submitChanges = function (review) {
        var _this = this;
        var assignment = {
            AdminID: this.getAdminId(),
            Reviewers: review.Reviewers,
            WorkID: review.WID,
        };
        this.subscriptions.push(this.adminService.assignGroupReviewers(assignment).subscribe(function (res) {
            _this.displayConfirmationMessage('Reviewers have been assigned successfully.');
        }));
        this.hideAssignedWork(review);
    };
    AssignmentComponent1.prototype.hideAssignedWork = function (work) {
        this.reviewInProgress = this.reviewInProgress.filter(function (r) { return r.WID != work.WID; });
        console.log(this.reviewInProgress);
        this.ref.markForCheck();
    };
    AssignmentComponent1.prototype.displayConfirmationMessage = function (message) {
        this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create, 5000, true, false);
    };
    AssignmentComponent1.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
    ]; };
    AssignmentComponent1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-assignment1',
            template: __webpack_require__(/*! raw-loader!./assignment1.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/assignment/assignment1.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./assignment1.component.scss */ "./src/app/views/pages/assignment/assignment1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], AssignmentComponent1);
    return AssignmentComponent1;
}());



/***/ }),

/***/ "./src/app/views/pages/completed-review/completed-review.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/completed-review/completed-review.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompletedReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedReviewComponent", function() { return CompletedReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/admin/_services/admin.service */ "./src/app/core/admin/_services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CompletedReviewComponent = /** @class */ (function () {
    function CompletedReviewComponent(router, ref, adminService) {
        this.router = router;
        this.ref = ref;
        this.adminService = adminService;
    }
    CompletedReviewComponent.prototype.ngOnInit = function () {
        /*
        * fetch reviewers' scorecards for the assigned works
        * */
        this.scoredWorks$ = this.adminService.getReviewersScorecard();
        this.ref.markForCheck();
    };
    CompletedReviewComponent.prototype.onClick = function (summary) {
        sessionStorage.setItem('summary', JSON.stringify(summary));
        this.router.navigateByUrl('/admin/summary');
    };
    CompletedReviewComponent.prototype.getCumulativeScore = function (scoredWork) {
        var scorecards = scoredWork['Scorecards'];
        var totalScores = scorecards.map(function (review) {
            return review['Scores'].reduce(function (sum, rubric) {
                return sum + parseFloat(rubric.Score);
            }, 0);
        });
        var cumScore = totalScores.reduce(function (acc, score) { return acc + score; }, 0);
        return cumScore;
    };
    CompletedReviewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
    ]; };
    CompletedReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-completed-review',
            template: __webpack_require__(/*! raw-loader!./completed-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/completed-review/completed-review.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], CompletedReviewComponent);
    return CompletedReviewComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/completed-review/summary-view/summary-view.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/pages/completed-review/summary-view/summary-view.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\n  font-weight: 500;\n  font-size: 17px;\n  margin-top: 3px;\n  margin-bottom: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL2NvbXBsZXRlZC1yZXZpZXcvc3VtbWFyeS12aWV3L3N1bW1hcnktdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvY29tcGxldGVkLXJldmlldy9zdW1tYXJ5LXZpZXcvc3VtbWFyeS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbiN0aXRsZXtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1zaXplOiAxN3B4O1xuXHRtYXJnaW4tdG9wOiAzcHg7XG5cdG1hcmdpbi1ib3R0b206IDNweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/completed-review/summary-view/summary-view.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/pages/completed-review/summary-view/summary-view.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SummaryViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryViewComponent", function() { return SummaryViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _author_service_work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../author/service/work.service */ "./src/app/views/author/service/work.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var SummaryViewComponent = /** @class */ (function () {
    function SummaryViewComponent(
    // private sanitizer: DomSanitizer,
    router, location, ref, workService) {
        this.router = router;
        this.location = location;
        this.ref = ref;
        this.workService = workService;
        this.isFullscreen = false;
    }
    SummaryViewComponent.prototype.ngOnInit = function () {
        // this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.workSummary.URL);
        this.summary = JSON.parse(sessionStorage.getItem('summary'));
    };
    SummaryViewComponent.prototype.ngOnDestroy = function () {
        sessionStorage.removeItem('summary');
    };
    SummaryViewComponent.prototype.onClick = function (decision) {
        if (decision === void 0) { decision = ''; }
        var wid = this.summary['WID'];
        if (decision !== '') {
            this.subscription = this.workService.updateWorkStatusByID(wid, decision).subscribe(function () {
            }, function (error) { return console.log(error); });
            this.router.navigateByUrl('/admin/completed-review');
        }
        else {
            this.location.back();
        }
    };
    SummaryViewComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _author_service_work_service__WEBPACK_IMPORTED_MODULE_3__["WorkService"] }
    ]; };
    SummaryViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-summary',
            template: __webpack_require__(/*! raw-loader!./summary-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/completed-review/summary-view/summary-view.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./summary-view.component.scss */ "./src/app/views/pages/completed-review/summary-view/summary-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _author_service_work_service__WEBPACK_IMPORTED_MODULE_3__["WorkService"]])
    ], SummaryViewComponent);
    return SummaryViewComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .mat-table-sticky {\n  z-index: 0 !important; }\n\n:host ::ng-deep .mat-header-cell {\n  z-index: 2 !important; }\n\ntd.mat-cell {\n  padding: 12px 0 16px 0;\n  font-size: 18px; }\n\n.mdc-chip {\n  border-radius: 16px;\n  background-color: #f2f3f8;\n  color: rgba(21, 21, 21, 0.87);\n  font-family: Poppins, Helvetica, sans-serif;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: 400;\n  letter-spacing: 0.0178571429em;\n  text-decoration: inherit;\n  text-transform: inherit;\n  height: 25px;\n  display: inline-flex;\n  position: relative;\n  align-items: center;\n  box-sizing: border-box;\n  padding: 0 12px;\n  border-width: 0;\n  outline: none;\n  -webkit-appearance: none; }\n\n.mdc-chip-set {\n  padding: 4px;\n  display: flex;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  margin-left: -7px;\n  margin-bottom: -11px; }\n\n.mdc-chip {\n  margin: 4px; }\n\n.demo-chip-shaped {\n  border-radius: 4px; }\n\n.fontSize {\n  font-size: 55px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRyxxQkFBcUIsRUFBQTs7QUFIeEI7RUFNcUIscUJBQXFCLEVBQUE7O0FBSzFDO0VBQ0Msc0JBQXNCO0VBQ3RCLGVBQWUsRUFBQTs7QUFJaEI7RUFDQyxtQkFBbUI7RUFFbkIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QiwyQ0FBMkM7RUFDM0Msa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixZQUFZO0VBRVosb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUVsQixtQkFBbUI7RUFFbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixlQUFlO0VBQ2YsYUFBYTtFQUViLHdCQUF3QixFQUFBOztBQUV6QjtFQUNDLFlBQVk7RUFFWixhQUFhO0VBRWIsZUFBZTtFQUVmLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBRXJCO0VBQ0MsV0FBVyxFQUFBOztBQUlaO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0OjpuZy1kZWVwIHtcblx0XHQubWF0LXRhYmxlLXN0aWNreSB7XG5cdFx0XHR6LWluZGV4OiAwICFpbXBvcnRhbnQ7XG5cdFx0fVxuXG5cdFx0Lm1hdC1oZWFkZXItY2VsbCB7IHotaW5kZXg6IDIgIWltcG9ydGFudDt9XG5cblx0fVxufVxuXG50ZC5tYXQtY2VsbCB7XG5cdHBhZGRpbmc6IDEycHggMCAxNnB4IDA7XG5cdGZvbnQtc2l6ZTogMThweDtcblxufVxuXG4ubWRjLWNoaXAge1xuXHRib3JkZXItcmFkaXVzOiAxNnB4O1xuXHQvL2JhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmMmYzZjg7XG5cdGNvbG9yOiByZ2JhKDIxLCAyMSwgMjEsIDAuODcpO1xuXHRmb250LWZhbWlseTogUG9wcGlucywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0Zm9udC1zaXplOiAwLjg3NXJlbTtcblx0bGluZS1oZWlnaHQ6IDEuMjVyZW07XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdGxldHRlci1zcGFjaW5nOiAwLjAxNzg1NzE0MjllbTtcblx0dGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuXHR0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcblx0aGVpZ2h0OiAyNXB4O1x0XHRcdFx0XHRcdC8vIGhlaWdodFxuXHQvL2Rpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ly8tbXMtZmxleC1hbGlnbjogc3RhcnQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0cGFkZGluZzogMCAxMnB4O1xuXHRib3JkZXItd2lkdGg6IDA7XG5cdG91dGxpbmU6IG5vbmU7XG5cdC8vY3Vyc29yOiBwb2ludGVyO1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4ubWRjLWNoaXAtc2V0IHsgLy8vL1xuXHRwYWRkaW5nOiA0cHg7XG5cdGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuXHRkaXNwbGF5OiBmbGV4O1xuXHQtbXMtZmxleC13cmFwOiB3cmFwO1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0bWFyZ2luLWxlZnQ6IC03cHg7XG5cdG1hcmdpbi1ib3R0b206IC0xMXB4O1xufVxuLm1kYy1jaGlwIHtcblx0bWFyZ2luOiA0cHg7XG5cdC8vbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmRlbW8tY2hpcC1zaGFwZWQge1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5mb250U2l6ZXtcblx0Zm9udC1zaXplOiA1NXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/dashboard/dashboard.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/pages/dashboard/dashboard.component.ts ***!
  \**************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _author_service_work_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../author/service/work.service */ "./src/app/views/author/service/work.service.ts");

// Angular



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(workService, router) {
        this.workService = workService;
        this.router = router;
        this.title = 'The Highest Scored Works';
        this.tagList = [];
        this.selectable = false;
        this.removable = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.works$ = this.workService.getIncomingWorks();
    };
    DashboardComponent.prototype.ngOnDestroy = function () {
    };
    DashboardComponent.prototype.onClick = function (w) {
        sessionStorage.setItem('workForAdmReview', JSON.stringify(w));
        this.router.navigateByUrl('/admin/review');
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _author_service_work_service__WEBPACK_IMPORTED_MODULE_3__["WorkService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/views/pages/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_author_service_work_service__WEBPACK_IMPORTED_MODULE_3__["WorkService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/export-import-db/export-import-db.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/views/pages/export-import-db/export-import-db.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL2V4cG9ydC1pbXBvcnQtZGIvZXhwb3J0LWltcG9ydC1kYi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/pages/export-import-db/export-import-db.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/views/pages/export-import-db/export-import-db.component.ts ***!
  \****************************************************************************/
/*! exports provided: ExportImportDbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportImportDbComponent", function() { return ExportImportDbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_file_service_file_backup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/file-service/file-backup.service */ "./src/app/core/file-service/file-backup.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var backup_file_name = 'prs_backup.sql';
var ExportImportDbComponent = /** @class */ (function () {
    function ExportImportDbComponent(ref, fileBackupService) {
        this.ref = ref;
        this.fileBackupService = fileBackupService;
        this.file = null;
        this.disableUploadBtn = true;
        this.confMsg = '';
        this.alertType = 'success';
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.uploadResponse = { status: '', message: '' };
        this.error = '';
        this.uploading = false;
        this.downloading = false;
        this.subscribtions = [];
    }
    ExportImportDbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._success.subscribe(function (msg) { return _this.confMsg = msg; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(2000)).subscribe(function () {
            _this.confMsg = '';
            _this.ref.markForCheck();
        });
    };
    ExportImportDbComponent.prototype.ngOnDestroy = function () {
        if (this.subscribtions.length > 0) {
            this.subscribtions.forEach(function (sub) { return sub.unsubscribe(); });
        }
    };
    ExportImportDbComponent.prototype.download = function () {
        var _this = this;
        this.downloading = true;
        var sub = this.fileBackupService.download()
            .subscribe(function (res) {
            _this.downloading = false;
            _this.ref.markForCheck();
            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(res, backup_file_name);
        }, function (res) {
            // notify error
        });
        this.subscribtions.push(sub);
    };
    ExportImportDbComponent.prototype.fileChange = function (fileSelected) {
        if (fileSelected.target.files.length > 0) {
            this.file = fileSelected.target.files[0];
            this.disableUploadBtn = false;
        }
        else {
            this.disableUploadBtn = true;
        }
    };
    ExportImportDbComponent.prototype.upload = function () {
        var _this = this;
        if (this.file != null) {
            this.uploading = true;
            var formData = new FormData();
            formData.append('prs_backup', this.file);
            var sub = this.fileBackupService.upload(formData).subscribe(function (res) {
                _this.file = null;
                _this.alertType = 'success';
                _this._success.next('The database has been restored succcessfully.');
                _this.fileInput.nativeElement.value = '';
                _this.uploading = false;
                _this.disableUploadBtn = true;
                _this.ref.markForCheck();
            }, function (error) {
                _this.alertType = 'danger';
                _this._success.next('Error. The database has not been restored.');
                _this.uploading = false;
                _this.ref.markForCheck();
            });
            this.subscribtions.push(sub);
        }
    };
    ExportImportDbComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _core_file_service_file_backup_service__WEBPACK_IMPORTED_MODULE_3__["FileBackupService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileSelected', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExportImportDbComponent.prototype, "fileInput", void 0);
    ExportImportDbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-backupDb',
            template: __webpack_require__(/*! raw-loader!./export-import-db.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/export-import-db/export-import-db.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./export-import-db.component.scss */ "./src/app/views/pages/export-import-db/export-import-db.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_file_service_file_backup_service__WEBPACK_IMPORTED_MODULE_3__["FileBackupService"]])
    ], ExportImportDbComponent);
    return ExportImportDbComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/pages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/pages/pages.module.ts ***!
  \*********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-management/user-management.module */ "./src/app/views/pages/user-management/user-management.module.ts");
/* harmony import */ var _admin_incoming_work_incoming_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/incoming-work/incoming-work.component */ "./src/app/views/pages/admin/incoming-work/incoming-work.component.ts");
/* harmony import */ var _admin_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/assignment/assignment.component */ "./src/app/views/pages/admin/assignment/assignment.component.ts");
/* harmony import */ var _admin_scorecard_scorecard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/scorecard/scorecard.component */ "./src/app/views/pages/admin/scorecard/scorecard.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _theme_base_base_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../theme/base/base.component */ "./src/app/views/theme/base/base.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../theme/theme.module */ "./src/app/views/theme/theme.module.ts");
/* harmony import */ var _admin_incoming_datatable_incomingDatatable_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/incoming-datatable/incomingDatatable.component */ "./src/app/views/pages/admin/incoming-datatable/incomingDatatable.component.ts");
/* harmony import */ var _review_in_progress_review_in_progress_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./review-in-progress/review-in-progress.component */ "./src/app/views/pages/review-in-progress/review-in-progress.component.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _review_in_progress_assigned_works_assigned_work_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./review-in-progress/assigned-works/assigned-work.component */ "./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.ts");
/* harmony import */ var _reviewersToAssign_reviewer_to_assign_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./reviewersToAssign/reviewer-to-assign.component */ "./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _partials_content_crud__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../partials/content/crud */ "./src/app/views/partials/content/crud/index.ts");
/* harmony import */ var _export_import_db_export_import_db_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./export-import-db/export-import-db.component */ "./src/app/views/pages/export-import-db/export-import-db.component.ts");
/* harmony import */ var _assignment_assignment1_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./assignment/assignment1.component */ "./src/app/views/pages/assignment/assignment1.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/views/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _pre_review_pre_review_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pre-review/pre-review.component */ "./src/app/views/pages/pre-review/pre-review.component.ts");
/* harmony import */ var _all_works_all_works_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./all-works/all-works.component */ "./src/app/views/pages/all-works/all-works.component.ts");
/* harmony import */ var _rubric_rubric_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rubric/rubric.component */ "./src/app/views/pages/rubric/rubric.component.ts");
/* harmony import */ var _work_summary_work_summary_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./work-summary/work-summary.component */ "./src/app/views/pages/work-summary/work-summary.component.ts");
/* harmony import */ var _completed_review_completed_review_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./completed-review/completed-review.component */ "./src/app/views/pages/completed-review/completed-review.component.ts");
/* harmony import */ var _completed_review_summary_view_summary_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./completed-review/summary-view/summary-view.component */ "./src/app/views/pages/completed-review/summary-view/summary-view.component.ts");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../core/auth */ "./src/app/core/auth/index.ts");

// Angular




// Partials

// Pages



























var routes = [
    {
        path: '',
        component: _theme_base_base_component__WEBPACK_IMPORTED_MODULE_13__["BaseComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            // Admin page routing
            {
                path: 'incoming-work',
                component: _admin_incoming_work_incoming_work_component__WEBPACK_IMPORTED_MODULE_8__["IncomingWorkComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            {
                path: 'assignment',
                component: _assignment_assignment1_component__WEBPACK_IMPORTED_MODULE_24__["AssignmentComponent1"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            {
                path: 'review',
                component: _pre_review_pre_review_component__WEBPACK_IMPORTED_MODULE_26__["PreReviewComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            {
                path: 'scorecard',
                component: _admin_scorecard_scorecard_component__WEBPACK_IMPORTED_MODULE_10__["ScorecardComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            // {
            // 	path: 'result',
            // 	component: ResultComponent
            // },
            {
                path: 'review-in-progress',
                component: _review_in_progress_review_in_progress_component__WEBPACK_IMPORTED_MODULE_16__["ReviewInProgressComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            {
                path: 'completed-review',
                component: _completed_review_completed_review_component__WEBPACK_IMPORTED_MODULE_30__["CompletedReviewComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            {
                path: 'summary',
                component: _completed_review_summary_view_summary_view_component__WEBPACK_IMPORTED_MODULE_31__["SummaryViewComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            {
                path: 'allworks',
                component: _all_works_all_works_component__WEBPACK_IMPORTED_MODULE_27__["AllWorksComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            {
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            {
                path: 'user-management',
                loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! app/views/pages/user-management/user-management.module */ "./src/app/views/pages/user-management/user-management.module.ts")).then(function (m) { return m.UserManagementModule; }); }
            },
            {
                path: 'export-import-db',
                component: _export_import_db_export_import_db_component__WEBPACK_IMPORTED_MODULE_23__["ExportImportDbComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Reviewer, _core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            {
                path: 'rubric',
                component: _rubric_rubric_component__WEBPACK_IMPORTED_MODULE_28__["RubricComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Reviewer, _core_auth__WEBPACK_IMPORTED_MODULE_32__["Role"].Admin] }
            },
            // {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            // {path: '**', redirectTo: 'dashboard', pathMatch: 'full'}
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _admin_incoming_work_incoming_work_component__WEBPACK_IMPORTED_MODULE_8__["IncomingWorkComponent"],
                _admin_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_9__["AssignmentComponent"],
                _admin_scorecard_scorecard_component__WEBPACK_IMPORTED_MODULE_10__["ScorecardComponent"],
                _completed_review_completed_review_component__WEBPACK_IMPORTED_MODULE_30__["CompletedReviewComponent"],
                _admin_incoming_datatable_incomingDatatable_component__WEBPACK_IMPORTED_MODULE_15__["IncomingDatatable"],
                _review_in_progress_review_in_progress_component__WEBPACK_IMPORTED_MODULE_16__["ReviewInProgressComponent"],
                _review_in_progress_assigned_works_assigned_work_component__WEBPACK_IMPORTED_MODULE_19__["AssignedListComponent"],
                _reviewersToAssign_reviewer_to_assign_component__WEBPACK_IMPORTED_MODULE_20__["ReviewerToAssignComponent"],
                _export_import_db_export_import_db_component__WEBPACK_IMPORTED_MODULE_23__["ExportImportDbComponent"],
                _assignment_assignment1_component__WEBPACK_IMPORTED_MODULE_24__["AssignmentComponent1"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_25__["DashboardComponent"],
                _pre_review_pre_review_component__WEBPACK_IMPORTED_MODULE_26__["PreReviewComponent"],
                _all_works_all_works_component__WEBPACK_IMPORTED_MODULE_27__["AllWorksComponent"],
                _rubric_rubric_component__WEBPACK_IMPORTED_MODULE_28__["RubricComponent"],
                _work_summary_work_summary_component__WEBPACK_IMPORTED_MODULE_29__["WorkSummaryComponent"],
                _completed_review_summary_view_summary_view_component__WEBPACK_IMPORTED_MODULE_31__["SummaryViewComponent"]
            ],
            entryComponents: [_reviewersToAssign_reviewer_to_assign_component__WEBPACK_IMPORTED_MODULE_20__["ReviewerToAssignComponent"], _partials_content_crud__WEBPACK_IMPORTED_MODULE_22__["ActionNotificationComponent"], _work_summary_work_summary_component__WEBPACK_IMPORTED_MODULE_29__["WorkSummaryComponent"]],
            exports: [_work_summary_work_summary_component__WEBPACK_IMPORTED_MODULE_29__["WorkSummaryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forChild(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _user_management_user_management_module__WEBPACK_IMPORTED_MODULE_7__["UserManagementModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_14__["ThemeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PerfectScrollbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__["NgbModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"],
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _core_base_crud__WEBPACK_IMPORTED_MODULE_21__["LayoutUtilsService"],
                _core_auth__WEBPACK_IMPORTED_MODULE_32__["AuthGuard"],
            ],
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/views/pages/pre-review/pre-review.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/views/pages/pre-review/pre-review.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".snackbar2 {\n  height: 90px;\n  padding: 30px !important;\n  background-color: #1f1e2c;\n  color: #ffffff;\n  font-weight: 500;\n  font-family: inherit; }\n  .snackbar2 .mat-button-wrapper {\n    color: black !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3ByZS1yZXZpZXcvcHJlLXJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7RUFOckI7SUFTRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3ByZS1yZXZpZXcvcHJlLXJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbmFja2JhcjIge1xuXHRoZWlnaHQ6IDkwcHg7XG5cdHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDsgLy8gc3BhY2luZyBiZXR3ZWVuIHRoZSB0ZXh0IGFuZCBib3VuZGFyeVxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZTJjO1xuXHRjb2xvcjogI2ZmZmZmZjtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XG5cblx0Lm1hdC1idXR0b24td3JhcHBlciB7XG5cdFx0Y29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IC8vIGFjdGlvbiB0ZXh0IGNvbG9yXG5cdH1cbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/pre-review/pre-review.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/pages/pre-review/pre-review.component.ts ***!
  \****************************************************************/
/*! exports provided: PreReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreReviewComponent", function() { return PreReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/admin/_services/admin.service */ "./src/app/core/admin/_services/admin.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_email_notification_services_email_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/email-notification/_services/email.service */ "./src/app/core/email-notification/_services/email.service.ts");









var PreReviewComponent = /** @class */ (function () {
    function PreReviewComponent(sanitizer, datepipe, snackBar, router, emailService, adminService) {
        this.sanitizer = sanitizer;
        this.datepipe = datepipe;
        this.snackBar = snackBar;
        this.router = router;
        this.emailService = emailService;
        this.adminService = adminService;
        this.loading = true;
        this.isFullscreen = false;
        this.decision = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.rejectNote = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
        this.work = JSON.parse(sessionStorage.getItem('workForAdmReview'));
        this.admin = JSON.parse(sessionStorage.getItem('user'));
    }
    PreReviewComponent.prototype.ngOnInit = function () {
        this.work.URL = this.work.URL.toLowerCase();
        if (!this.work.URL.startsWith('https://') && !this.work.URL.startsWith('http://')) {
            this.work.URL = 'http://' + this.work.URL;
        }
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.work.URL);
    };
    PreReviewComponent.prototype.ngOnDestroy = function () {
        if (this.subscribtion) {
            this.subscribtion.unsubscribe();
        }
        sessionStorage.removeItem('workForAdmReview');
    };
    PreReviewComponent.prototype.submit = function () {
        var _this = this;
        if (this.decision.invalid) {
            this.decision.markAllAsTouched();
            return;
        }
        if (this.rejectNote.invalid && this.decision.value == 'denied') {
            this.rejectNote.markAllAsTouched();
            return;
        }
        var rejectNote = this.rejectNote.value;
        if (this.decision.value != 'denied') {
            rejectNote = '';
        }
        var preReview = this.generatePreReview(rejectNote);
        if (preReview) {
            this.subscribtion = this.adminService.submitPreReview(preReview).subscribe(function () {
                _this.displaySnackBar('Your review has been submitted successfully.');
                _this.emailService.sendWorkStatusEmail(_this.createWorkStatusEmail()).subscribe();
                _this.clearForm();
                _this.router.navigateByUrl('admin/assignment');
            }, function (error) {
                _this.displaySnackBar('Error, unable to submit your review');
            });
        }
    };
    PreReviewComponent.prototype.generatePreReview = function (rejectNote) {
        if (this.admin == undefined) {
            return;
        }
        var date = this.datepipe.transform(new Date(Date.now()), 'yyyy-MM-dd');
        return {
            AdminID: this.admin.id,
            WorkID: this.work.WID,
            DateReviewed: date,
            Decision: this.decision.value,
            RejectNote: rejectNote
        };
    };
    PreReviewComponent.prototype.displaySnackBar = function (message) {
        var config = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarConfig"]();
        config.duration = 5000;
        config.panelClass = ['d-flex', 'justify-content-center', 'snackbar2'];
        this.snackBar.open(message, '', config);
    };
    PreReviewComponent.prototype.clearForm = function () {
        this.decision.clearValidators();
        this.decision.updateValueAndValidity();
        if (this.rejectNote.value) {
            this.rejectNote.clearValidators();
            this.rejectNote.updateValueAndValidity();
        }
    };
    PreReviewComponent.prototype.createWorkStatusEmail = function () {
        var decicion = 'has been admitted for further review';
        if (this.decision.value == 'denied') {
            decicion = 'has not been accepted. Please try again to submit the work when it is improved. <br><br>' +
                'The reason for rejection is ' + this.rejectNote.value;
        }
        var msg = 'Hi, ' + this.work.AuthorName + ' <br><br> This message is to notify you that' +
            ' your work ' + decicion;
        return {
            senderName: 'no-reply',
            senderEmail: this.admin.email,
            recepientName: this.work.AuthorName,
            recepientEmail: this.work.AuthorEmail,
            subject: 'Work Status Notification',
            message: msg,
            canReply: 1
        };
    };
    PreReviewComponent.prototype.exitFromFullScreen = function () {
        this.isFullscreen = false;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };
    PreReviewComponent.prototype.openInFullScreen = function () {
        this.isFullscreen = true;
        var elem = document.getElementById('myDiv');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    };
    PreReviewComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = null;
        switch (controlName) {
            case 'decision':
                control = this.decision;
                break;
            case 'rejectNote':
                control = this.rejectNote;
                break;
        }
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (this.decision.dirty || this.decision.touched);
        return result;
    };
    PreReviewComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
        { type: _core_email_notification_services_email_service__WEBPACK_IMPORTED_MODULE_8__["EmailService"] },
        { type: _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
    ]; };
    PreReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pre-review',
            template: __webpack_require__(/*! raw-loader!./pre-review.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/pre-review/pre-review.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./pre-review.component.scss */ "./src/app/views/pages/pre-review/pre-review.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _core_email_notification_services_email_service__WEBPACK_IMPORTED_MODULE_8__["EmailService"],
            _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], PreReviewComponent);
    return PreReviewComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th.mat-header-cell {\n  text-align: center; }\n\ntd {\n  text-align: center; }\n\n:host ::ng-deep .mat-sort-header-container {\n  display: flex;\n  justify-content: center;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3Jldmlldy1pbi1wcm9ncmVzcy9hc3NpZ25lZC13b3Jrcy9hc3NpZ25lZC13b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCLEVBQUE7O0FBRW5CO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3Jldmlldy1pbi1wcm9ncmVzcy9hc3NpZ25lZC13b3Jrcy9hc3NpZ25lZC13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgubWF0LWhlYWRlci1jZWxsIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50ZCB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IDo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AssignedListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedListComponent", function() { return AssignedListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reviewersToAssign_reviewer_to_assign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reviewersToAssign/reviewer-to-assign.component */ "./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.ts");
/* harmony import */ var _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/admin/_services/admin.service */ "./src/app/core/admin/_services/admin.service.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");







var AssignedListComponent = /** @class */ (function () {
    function AssignedListComponent(datePipe, dialog, ref, adminService, layoutUtilsService) {
        this.datePipe = datePipe;
        this.dialog = dialog;
        this.ref = ref;
        this.adminService = adminService;
        this.layoutUtilsService = layoutUtilsService;
        this.displayedColumns = ['id', 'Reviewer', 'Role', 'DueDate', 'Status', 'Action'];
        this.showButton = false;
        this.updatedReviewerList = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.subscriptions = [];
        this.currentDate = datePipe.transform(new Date(Date.now()), 'yyyy-MM-dd');
    }
    AssignedListComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.reviewers);
    };
    AssignedListComponent.prototype.ngDoCheck = function () {
        if (this.reviewers != undefined) {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.reviewers);
        }
    };
    AssignedListComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        }
    };
    AssignedListComponent.prototype.getItemStatusString = function (reviewDue) {
        if (reviewDue === void 0) { reviewDue = ''; }
        if (reviewDue < this.currentDate) {
            return 'overdue';
        }
        else if (reviewDue >= this.currentDate) {
            return 'due';
        }
        else {
            return '';
        }
    };
    /**
     * Returens item CSS Class Name by status
     *
     * @param status: number
     */
    AssignedListComponent.prototype.getItemCssClassByStatus = function (reviewDue) {
        // console.log(this.currentDate);
        if (reviewDue === void 0) { reviewDue = ''; }
        // due date = 17 curr date =22
        if (reviewDue < this.currentDate) {
            return 'danger';
        }
        else if (reviewDue >= this.currentDate) {
            return 'success';
        }
        else {
            return '';
        }
    };
    AssignedListComponent.prototype.switchUser = function (reviewer) {
        var _this = this;
        var reviewerToSwap = reviewer;
        var dialogRef = this.dialog.open(_reviewersToAssign_reviewer_to_assign_component__WEBPACK_IMPORTED_MODULE_4__["ReviewerToAssignComponent"], {
            width: '1131px',
            data: {
                'reviewers': [reviewer],
                'workID': this.workID
            },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.data == 'close') {
                return;
            }
            else {
                // first, deactivate reviewer whose assignment is overdue
                // and then swap the deactivated reviewer with selected reviewer from the dialogbox
                _this.deactivateUserByIdFromAssignment(reviewerToSwap.ReviewerID, _this.workID);
                var newAssignedReviewer_1 = {
                    ReviewerID: result.assignment.reviewer.ReviewerID,
                    ReviewerName: result.assignment.reviewer.ReviewerName,
                    Role: result.assignment.reviewer.Role,
                    DueDate: result.assignment.dueDate
                };
                var assignment = {
                    adminID: _this.getAdminId(),
                    reviewerID: newAssignedReviewer_1.ReviewerID,
                    workID: _this.workID,
                    dueDate: result.assignment.dueDate,
                    dateAssigned: _this.currentDate
                };
                _this.subscriptions.push(_this.adminService.assignReviewer(assignment).subscribe(function (res) {
                    _this.updateRowData(reviewerToSwap, newAssignedReviewer_1);
                    _this.displayConfirmationMessage();
                }));
            }
        });
    };
    AssignedListComponent.prototype.deactivateUserByIdFromAssignment = function (reviewerId, workId) {
        this.subscriptions.push(this.adminService.deactivateUserFromAssignment(reviewerId, workId).subscribe());
    };
    AssignedListComponent.prototype.getAdminId = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        return user.id;
    };
    AssignedListComponent.prototype.updateRowData = function (reviewer, newReviewer) {
        this.reviewers = this.reviewers.filter(function (r) {
            return r.ReviewerID !== reviewer.ReviewerID;
        });
        this.reviewers.push(newReviewer);
        this.dataSource.data = this.reviewers;
        this.updatedReviewerList.emit(this.reviewers);
    };
    AssignedListComponent.prototype.displayConfirmationMessage = function () {
        var message = "The reviewer has been swapped successfully.";
        this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create, 5000, true, false);
    };
    AssignedListComponent.prototype.reassignReviewer = function (reviewer) {
        var _this = this;
        var reviewerToSwap = reviewer;
        var dialogRef = this.dialog.open(_reviewersToAssign_reviewer_to_assign_component__WEBPACK_IMPORTED_MODULE_4__["ReviewerToAssignComponent"], {
            width: '1131px',
            data: {
                'reviewers': this.reviewers,
                'workID': this.workID
            },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result.data == 'close') {
                return;
            }
            else {
                var newAssignedReviewer = {
                    ReviewerID: result.assignment.reviewer.ReviewerID,
                    ReviewerName: result.assignment.reviewer.ReviewerName,
                    Role: result.assignment.reviewer.Role,
                    DueDate: result.assignment.dueDate
                };
                _this.updateRowData(reviewerToSwap, newAssignedReviewer);
            }
        });
    };
    AssignedListComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
        { type: _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], AssignedListComponent.prototype, "reviewers", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], AssignedListComponent.prototype, "workID", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"])
    ], AssignedListComponent.prototype, "dataSource1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AssignedListComponent.prototype, "showButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssignedListComponent.prototype, "updatedReviewerList", void 0);
    AssignedListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'assigned-work-table',
            template: __webpack_require__(/*! raw-loader!./assigned-work.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.html"),
            styles: [__webpack_require__(/*! ./assigned-work.component.scss */ "./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"]])
    ], AssignedListComponent);
    return AssignedListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/review-in-progress/review-in-progress.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/review-in-progress/review-in-progress.component.ts ***!
  \********************************************************************************/
/*! exports provided: ReviewInProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewInProgressComponent", function() { return ReviewInProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/admin/_services/admin.service */ "./src/app/core/admin/_services/admin.service.ts");



var ReviewInProgressComponent = /** @class */ (function () {
    function ReviewInProgressComponent(adminService) {
        this.adminService = adminService;
    }
    ReviewInProgressComponent.prototype.ngOnInit = function () {
        this.reviewInProgress$ = this.adminService.getAllAssignedWorks();
    };
    ReviewInProgressComponent.prototype.combineArrays = function (lhs, rhs) {
        var reviewers = {};
        lhs.forEach(function (key, i) { return reviewers[key] = rhs[i]; });
        return reviewers;
    };
    ReviewInProgressComponent.ctorParameters = function () { return [
        { type: _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }
    ]; };
    ReviewInProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-review-in-progress',
            template: __webpack_require__(/*! raw-loader!./review-in-progress.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/review-in-progress/review-in-progress.component.html"),
            styles: [__webpack_require__(/*! ../assignment/assignment1.component.scss */ "./src/app/views/pages/assignment/assignment1.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], ReviewInProgressComponent);
    return ReviewInProgressComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-row.hovered {\n  background: #ebedf2; }\n\n.mat-row.highlighted {\n  background: #ebedf2; }\n\n:host::ng-deep .mat-button-focus-overlay {\n  background-color: transparent !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3Jldmlld2Vyc1RvQXNzaWduL3Jldmlld2VyLXRvLWFzc2lnbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLHdDQUF1QyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvcmV2aWV3ZXJzVG9Bc3NpZ24vcmV2aWV3ZXItdG8tYXNzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubWF0LXJvdy5ob3ZlcmVkIHtcblx0YmFja2dyb3VuZDogI2ViZWRmMjtcbn1cblxuLm1hdC1yb3cuaGlnaGxpZ2h0ZWQge1xuXHRiYWNrZ3JvdW5kOiAjZWJlZGYyO1xufVxuXG46aG9zdDo6bmctZGVlcCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ReviewerToAssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerToAssignComponent", function() { return ReviewerToAssignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/admin/_services/admin.service */ "./src/app/core/admin/_services/admin.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var ReviewerToAssignComponent = /** @class */ (function () {
    function ReviewerToAssignComponent(dialogRef, data, datepipe, adminService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.datepipe = datepipe;
        this.adminService = adminService;
        this.displayedColumns = ['id', 'fullname', 'credentialType', 'roleType', 'reviewedThisMonth', 'totalReviews', 'setDueDate'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](false, []);
        this.due_date = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]);
        this.due_date_text = '';
        this.minDate = new Date(Date.now());
        this.subscriptions = [];
        this.clicked = [];
    }
    ReviewerToAssignComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.loadReviewers();
        // console.log(this.reviewer);
    };
    ReviewerToAssignComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        }
    };
    ReviewerToAssignComponent.prototype.loadReviewers = function () {
        var _this = this;
        var subsc = this.adminService.getReviewersForAssignment(this.data.workID).subscribe(function (reviewerArray) {
            if (_this.data.reviewers != undefined) {
                console.log(_this.data.reviewers);
                // remove duplicates from the array
                reviewerArray = _this.union(reviewerArray, _this.data.reviewers);
            }
            _this.dataSource.data = reviewerArray;
        });
        this.subscriptions.push(subsc);
    };
    ReviewerToAssignComponent.prototype.union = function (arr1, arr2) {
        arr2.forEach(function (r2) {
            arr1 = arr1.filter(function (r1) { return r1.ReviewerID !== r2.ReviewerID; });
        });
        return arr1;
    };
    ReviewerToAssignComponent.prototype.close = function () {
        this.dialogRef.close({ event: 'close', data: 'close' });
    };
    ReviewerToAssignComponent.prototype.switch = function () {
        if (this.due_date.invalid) {
            this.due_date.markAllAsTouched();
            return;
        }
        this.due_date_text = this.datepipe.transform(this.due_date.value, 'yyyy-MM-dd');
        this.dialogRef.close({
            event: 'close', assignment: {
                'workID': this.data.workID,
                'reviewer': this.selectedReviewer,
                'dueDate': this.due_date_text
            }
        });
    };
    ReviewerToAssignComponent.prototype.isControlHasError = function (validationType) {
        if (!this.due_date) {
            return false;
        }
        var result = this.due_date.hasError(validationType) && (this.due_date.dirty || this.due_date.touched);
        return result;
    };
    ReviewerToAssignComponent.prototype.rowClicked = function (row) {
        this.due_date_text = '';
        this.clicked.length = 0;
        this.clicked[row.ReviewerID] = true;
        this.selectedReviewer = row;
    };
    ReviewerToAssignComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
        { type: _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ReviewerToAssignComponent.prototype, "sort", void 0);
    ReviewerToAssignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-modal3',
            template: __webpack_require__(/*! raw-loader!./reviewer-to-assign.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.html"),
            styles: [__webpack_require__(/*! ./reviewer-to-assign.component.scss */ "./src/app/views/pages/reviewersToAssign/reviewer-to-assign.component.scss"), __webpack_require__(/*! ../review-in-progress/assigned-works/assigned-work.component.scss */ "./src/app/views/pages/review-in-progress/assigned-works/assigned-work.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"],
            _core_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], ReviewerToAssignComponent);
    return ReviewerToAssignComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/rubric/rubric.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/pages/rubric/rubric.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  width: 100%; }\n\n.w-65 {\n  width: 65% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3J1YnJpYy9ydWJyaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxxQkFBcUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3J1YnJpYy9ydWJyaWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi53LTY1IHtcblx0d2lkdGg6IDY1JSAhaW1wb3J0YW50O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/rubric/rubric.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/pages/rubric/rubric.component.ts ***!
  \********************************************************/
/*! exports provided: RubricComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RubricComponent", function() { return RubricComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_rubric_service_rubric_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/rubric/_service/rubric.service */ "./src/app/core/rubric/_service/rubric.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var RubricComponent = /** @class */ (function () {
    function RubricComponent(fb, ref, rubricService) {
        var _this = this;
        this.fb = fb;
        this.ref = ref;
        this.rubricService = rubricService;
        this.rubricForm = null;
        this.confMsg = '';
        this.alertType = 'success';
        this._success = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.subscribtions = [];
        var subsc = this.rubricService.getScorecardRubric().subscribe(function (res) {
            _this.rubrics = res;
            _this.initForm();
        });
        this.subscribtions.push(subsc);
    }
    RubricComponent.prototype.ngOnInit = function () {
        var _this = this;
        // display a confirmation message for 2 seconds
        this._success.subscribe(function (msg) { return _this.confMsg = msg; });
        this._success.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(2000)).subscribe(function () {
            _this.confMsg = '';
            _this.ref.markForCheck();
        });
    };
    RubricComponent.prototype.ngOnDestroy = function () {
        if (this.subscribtions.length > 0) {
            this.subscribtions.forEach(function (sub) { return sub.unsubscribe(); });
        }
    };
    RubricComponent.prototype.submit = function () {
        var _this = this;
        var controls = this.rubricForm.controls;
        // check form
        if (this.rubricForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            return;
        }
        var subsc = this.rubricService.submitUpdatedRubric(this.rubrics).subscribe(function (res) {
            _this.alertType = 'success';
            _this._success.next('Rubric has been updated succcessfully.');
            _this.ref.markForCheck();
        }, function (error) {
            _this.alertType = 'danger';
            _this._success.next('Error. Rubric has not been updated.');
            _this.ref.markForCheck();
        });
        window.scrollTo(0, 0);
        this.subscribtions.push(subsc);
    };
    RubricComponent.prototype.initForm = function () {
        var group = {};
        this.rubrics.forEach(function (r) {
            group[r.RubricID] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(120)
            ]);
        });
        this.rubricForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](group);
        this.ref.markForCheck();
    };
    /**
     * Checking control validation
     *
     * @param controlName: string => Equals to formControlName
     * @param validationType: string => Equals to valitors name
     */
    RubricComponent.prototype.isControlHasError = function (controlName, validationType) {
        var control = this.rubricForm.controls[controlName];
        if (!control) {
            return false;
        }
        var result = control.hasError(validationType) && (control.dirty || control.touched);
        return result;
    };
    RubricComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _core_rubric_service_rubric_service__WEBPACK_IMPORTED_MODULE_3__["RubricService"] }
    ]; };
    RubricComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-rubric',
            template: __webpack_require__(/*! raw-loader!./rubric.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/rubric/rubric.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./rubric.component.scss */ "./src/app/views/pages/rubric/rubric.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _core_rubric_service_rubric_service__WEBPACK_IMPORTED_MODULE_3__["RubricService"]])
    ], RubricComponent);
    return RubricComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/user-management/service/role-credential.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/user-management/service/role-credential.service.ts ***!
  \********************************************************************************/
/*! exports provided: RoleCredentialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleCredentialService", function() { return RoleCredentialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");




// const API_URL = 'http://3.95.8.94/example/admin_request.php';
var API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'admin_request.php';
var RoleCredentialService = /** @class */ (function () {
    function RoleCredentialService(http) {
        this.http = http;
    }
    RoleCredentialService.prototype.getRolesAndCredentialsList = function () {
        return this.http.get(API_URL, { params: { getRolesCredential: 'getRolesCredential' } });
    };
    RoleCredentialService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RoleCredentialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RoleCredentialService);
    return RoleCredentialService;
}());



/***/ }),

/***/ "./src/app/views/pages/user-management/service/user-management.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/pages/user-management/service/user-management.service.ts ***!
  \********************************************************************************/
/*! exports provided: UserManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementService", function() { return UserManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");





// const API_USER_LIST_URL = 'http://3.95.8.94/example/admin_request.php';
var API_USER_LIST_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'admin_request.php';
var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
var UserManagementService = /** @class */ (function () {
    function UserManagementService(http) {
        this.http = http;
        this.usertoEdit = undefined;
    }
    UserManagementService.prototype.getUser = function () {
        var user = this.usertoEdit;
        this.usertoEdit = undefined;
        return user;
    };
    UserManagementService.prototype.setUser = function (user) {
        this.usertoEdit = user;
    };
    UserManagementService.prototype.getAllUsers = function () {
        return this.http.get(API_USER_LIST_URL, { params: { getUsers: 'getUsers' } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    };
    UserManagementService.prototype.getUserById = function (userId) {
        return this.http.get(API_USER_LIST_URL, { params: { getUserById: userId.toString() } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(3));
    };
    UserManagementService.prototype.update = function (_user, oldUsername, oldEmail) {
        // console.log('Update user');
        // console.log(_user);
        // console.log('oldUsername',oldUsername);
        // console.log('oldEmail',oldEmail);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("updateUser", 'updateUser')
            .set("Username", _user.username)
            .set("Password", _user.password)
            .set("Name", _user.fullname)
            .set("Email", _user.email)
            .set("oldUsername", oldUsername)
            .set("oldEmail", oldEmail)
            .set("CredentialID", _user.credentialID.toString())
            .set("RoleId", _user.roleId.toString())
            .set("ID", _user.id.toString());
        // const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        // const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(API_USER_LIST_URL, body, { headers: headers });
    };
    // UPDATE => PUT: update the user on the server
    // updateUser(_user: User): Observable<any> {
    // 	const httpHeaders = new HttpHeaders();
    // 	httpHeaders.set('Content-Type', 'application/json');
    // 	return this.http.put(API_USERS_URL, _user, { headers: httpHeaders });
    // }
    UserManagementService.prototype.createUser = function (_user) {
        // console.log('Create user');
        // console.log(_user);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("createUser", 'createUser')
            .set("Username", _user.username)
            .set("Password", _user.password)
            .set("Name", _user.fullname)
            .set("Email", _user.email)
            .set("CredentialID", _user.credentialID.toString())
            .set("RoleId", _user.roleId.toString());
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.http.post(API_USER_LIST_URL, body, { headers: headers });
    };
    UserManagementService.prototype.deleteUser = function (_user) {
        console.log('Delete user');
        console.log(_user);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("deleteReviewer", 'deleteReviewer')
            .set("RID", _user.id.toString());
        // const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
        return this.http.post(API_USER_LIST_URL, body, { headers: headers });
    };
    UserManagementService.prototype.deactivateUser = function (_user) {
        // console.log(_user);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("deactivateUser", 'deactivateUser')
            .set("id", _user.id.toString())
            .set("activeStatus", _user.isActive.toString())
            .set("roleId", _user.roleId.toString());
        return this.http.post(API_USER_LIST_URL, body, { headers: headers });
    };
    UserManagementService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    UserManagementService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserManagementService);
    return UserManagementService;
}());



/***/ }),

/***/ "./src/app/views/pages/user-management/user-management.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/pages/user-management/user-management.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementComponent", function() { return UserManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Angular


// NGRX

// Auth
var userManagementPermissionId = 2;
var UserManagementComponent = /** @class */ (function () {
    // Public properties
    // hasUserAccess$: Observable<boolean>;
    /**
     * Component constructor
     *
     * @param store: Store<AppState>
     * @param router: Router
     */
    function UserManagementComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    UserManagementComponent.prototype.ngOnInit = function () {
        // this.currentUserPermission$ = this.store.pipe(select(currentUserPermissions));
        // this.currentUserPermission$.subscribe(permissions => {
        // 	if (permissions && permissions.length > 0) {
        // 		this.hasUserAccess$ =
        // 			this.store.pipe(select(checkHasUserPermission(userManagementPermissionId)));
        // 		this.hasUserAccess$.subscribe(res => {
        // 			if (!res) {
        // 				this.router.navigateByUrl('/error/403');
        // 			}
        // 		});
        // 	}
        // });
    };
    UserManagementComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    UserManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-user-management',
            template: __webpack_require__(/*! raw-loader!./user-management.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/user-management/user-management.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserManagementComponent);
    return UserManagementComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/user-management/user-management.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/pages/user-management/user-management.module.ts ***!
  \***********************************************************************/
/*! exports provided: UserManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserManagementModule", function() { return UserManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _partials_content_crud__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../partials/content/crud */ "./src/app/views/partials/content/crud/index.ts");
/* harmony import */ var _user_management_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-management.component */ "./src/app/views/pages/user-management/user-management.component.ts");
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users/users-list/users-list.component */ "./src/app/views/pages/user-management/users/users-list/users-list.component.ts");
/* harmony import */ var _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./users/user-edit/user-edit.component */ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _service_user_management_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/user-management.service */ "./src/app/views/pages/user-management/service/user-management.service.ts");
/* harmony import */ var _service_role_credential_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./service/role-credential.service */ "./src/app/views/pages/user-management/service/role-credential.service.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");

// Angular





// NGRX


// Translate


// Services

// Shared

// Components



// Material





var routes = [
    {
        path: '',
        component: _user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"],
        children: [
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            },
            {
                path: 'users',
                component: _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__["UsersListComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["Role"].Admin] }
            },
            {
                path: 'users:id',
                component: _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__["UsersListComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["Role"].Admin] }
            },
            {
                path: 'users/add',
                component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__["UserEditComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["Role"].Admin] }
            },
            {
                path: 'users/add:id',
                component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__["UserEditComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["Role"].Admin] }
            },
            {
                path: 'users/edit',
                component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__["UserEditComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["Role"].Admin] }
            },
            {
                path: 'users/edit/:id',
                component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__["UserEditComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_16__["Role"].Admin] }
            },
        ]
    }
];
var UserManagementModule = /** @class */ (function () {
    function UserManagementModule() {
    }
    UserManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_9__["PartialsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('users', _core_auth__WEBPACK_IMPORTED_MODULE_16__["usersReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_core_auth__WEBPACK_IMPORTED_MODULE_16__["UserEffects"]]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_19__["PerfectScrollbarModule"]
            ],
            providers: [
                _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["InterceptService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                    useClass: _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["InterceptService"],
                    multi: true
                },
                {
                    provide: _angular_material__WEBPACK_IMPORTED_MODULE_15__["MAT_DIALOG_DEFAULT_OPTIONS"],
                    useValue: {
                        hasBackdrop: true,
                        panelClass: 'kt-mat-dialog-container__wrapper',
                        height: 'auto',
                        width: '900px'
                    }
                },
                _core_auth__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"],
                _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["HttpUtilsService"],
                _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["TypesUtilsService"],
                _core_base_crud__WEBPACK_IMPORTED_MODULE_10__["LayoutUtilsService"],
                _service_user_management_service__WEBPACK_IMPORTED_MODULE_17__["UserManagementService"],
                _service_role_credential_service__WEBPACK_IMPORTED_MODULE_18__["RoleCredentialService"],
            ],
            entryComponents: [
                _partials_content_crud__WEBPACK_IMPORTED_MODULE_11__["ActionNotificationComponent"],
            ],
            declarations: [
                _user_management_component__WEBPACK_IMPORTED_MODULE_12__["UserManagementComponent"],
                _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__["UsersListComponent"],
                _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_14__["UserEditComponent"],
            ]
        })
    ], UserManagementModule);
    return UserManagementModule;
}());



/***/ }),

/***/ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/user-edit/user-edit.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/deep/ .mat-select-value {\n  color: #646c9a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3VzZXItbWFuYWdlbWVudC91c2Vycy91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcGFnZXMvdXNlci1tYW5hZ2VtZW50L3VzZXJzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvZGVlcC8gLm1hdC1zZWxlY3QtdmFsdWV7XG5cdGNvbG9yOiAjNjQ2YzlhO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/user-edit/user-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _service_user_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user-management.service */ "./src/app/views/pages/user-management/service/user-management.service.ts");
/* harmony import */ var _core_auth_models_user1_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../core/auth/_models/user1.model */ "./src/app/core/auth/_models/user1.model.ts");

// Angular



// RxJS

// Layout




var UserEditComponent = /** @class */ (function () {
    // @Input() userToEdit;
    /**
     * Component constructor
     *
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param userFB: FormBuilder
     * @param subheaderService: SubheaderService
     * @param layoutUtilsService: LayoutUtilsService
     * @param layoutConfigService: LayoutConfigService
     * @param userService
     */
    function UserEditComponent(activatedRoute, router, userFB, subheaderService, layoutUtilsService, layoutConfigService, userService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userFB = userFB;
        this.subheaderService = subheaderService;
        this.layoutUtilsService = layoutUtilsService;
        this.layoutConfigService = layoutConfigService;
        this.userService = userService;
        this.selectedTab = 0;
        this.rolesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](0);
        this.hasFormErrors = false;
        this.roles = [];
        this.credentials = [];
        // Private properties
        this.subscriptions = [];
        this.mainUrl = '/admin/user-management/users';
    }
    /**
     * On init
     */
    UserEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var roleCredential = JSON.parse(sessionStorage.getItem('roleCredential'));
        this.credentials = roleCredential['credentials'];
        this.roles = roleCredential['roles'];
        var routeSubscription = this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id && id >= 0) {
                _this.user = _this.userService.getUser();
                if (_this.user !== undefined) {
                    _this.credentialsIdForAdding = _this.user.credentialID;
                    _this.roleIdForAdding = _this.user.roleId;
                    _this.oldUser = Object.assign({}, _this.user);
                    _this.initUser();
                }
                else {
                    _this.router.navigateByUrl('admin/user-management/users');
                }
            }
            else {
                _this.user = new _core_auth_models_user1_model__WEBPACK_IMPORTED_MODULE_8__["User1"]();
                _this.user.clear();
                // this.rolesSubject.next(this.user.role);
                _this.oldUser = Object.assign({}, _this.user);
                _this.initUser();
            }
        });
        this.subscriptions.push(routeSubscription);
    };
    UserEditComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sb) { return sb.unsubscribe(); });
        sessionStorage.removeItem('roleCredential');
    };
    /**
     * Init user
     */
    UserEditComponent.prototype.initUser = function () {
        this.createForm();
        if (!this.user.id) {
            this.subheaderService.setTitle('Create user');
            this.subheaderService.setBreadcrumbs([
                { title: 'User Management', page: "user-management" },
                { title: 'Users', page: "user-management/users" },
                { title: 'Create user', page: "user-management/users/add" }
            ]);
            return;
        }
        this.subheaderService.setTitle('Edit user');
        this.subheaderService.setBreadcrumbs([
            { title: 'User Management', page: "user-management" },
            { title: 'Users', page: "user-management/users" },
            { title: 'Edit user', page: "user-management/users/edit", queryParams: { id: this.user.id } }
        ]);
    };
    /**
     * Create form
     */
    UserEditComponent.prototype.createForm = function () {
        this.userForm = this.userFB.group({
            username: [this.user.username, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            fullname: [this.user.fullname, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [this.user.password, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: [this.user.roleType, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: [this.user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            credential: [this.user.credentialType, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    /**
     * Reset
     */
    UserEditComponent.prototype.reset = function () {
        this.user = Object.assign({}, this.oldUser);
        this.createForm();
        this.hasFormErrors = false;
        this.userForm.markAsPristine();
        this.userForm.markAsUntouched();
        this.userForm.updateValueAndValidity();
    };
    /**
     * Save data
     *
     * @param withBack: boolean
     */
    UserEditComponent.prototype.onSumbit = function (withBack) {
        if (withBack === void 0) { withBack = false; }
        this.hasFormErrors = false;
        var controls = this.userForm.controls;
        /** check form */
        if (this.userForm.invalid) {
            Object.keys(controls).forEach(function (controlName) {
                return controls[controlName].markAsTouched();
            });
            this.hasFormErrors = true;
            this.selectedTab = 0;
            return;
        }
        var editedUser = this.prepareUser();
        if (editedUser.id >= 0) {
            this.updateUser(editedUser, withBack);
            return;
        }
        this.addUser(editedUser, withBack);
    };
    /**
     * Returns prepared data for save
     */
    UserEditComponent.prototype.prepareUser = function () {
        var controls = this.userForm.controls;
        var _user = new _core_auth_models_user1_model__WEBPACK_IMPORTED_MODULE_8__["User1"]();
        _user.clear();
        _user.accessToken = this.user.accessToken;
        _user.refreshToken = this.user.refreshToken;
        _user.id = this.user.id;
        _user.username = controls['username'].value;
        _user.email = controls['email'].value;
        _user.fullname = controls['fullname'].value;
        _user.password = controls['password'].value;
        _user.roleId = controls['role'].value;
        _user.credentialID = this.credentialsIdForAdding;
        // _user.roleId = this.roleIdForAdding;
        return _user;
    };
    /**
     * Add User
     *
     * @param _user: User
     * @param withBack: boolean
     */
    UserEditComponent.prototype.addUser = function (_user, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        var subsc = this.userService.createUser(_user).subscribe(function (res) {
            var message = "New user has been created successfully.";
            _this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Create, 5000, true, false);
            _this.router.navigateByUrl(_this.mainUrl);
        }, function (error) {
            console.log(error);
        });
        this.subscriptions.push(subsc);
    };
    /**
     * Update user
     *
     * @param _user: User
     * @param withBack: boolean
     */
    UserEditComponent.prototype.updateUser = function (_user, withBack) {
        var _this = this;
        if (withBack === void 0) { withBack = false; }
        var subsc = this.userService.update(_user, this.user.username, this.user.email).subscribe(function (res) {
            var message = "User has been updated successfully.";
            _this.layoutUtilsService.showActionNotification(message, _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["MessageType"].Update, 4000, true, true);
            _this.router.navigateByUrl('admin/user-management/users');
        }, function (error) {
            console.log(error);
        });
        this.subscriptions.push(subsc);
    };
    /**
     * Returns component title
     */
    UserEditComponent.prototype.getComponentTitle = function () {
        var result = 'Create user';
        if (!this.user || !this.user.id) {
            return result;
        }
        result = "Edit user - " + this.user.fullname;
        return result;
    };
    /**
     * Close Alert
     *
     * @param $event: Event
     */
    UserEditComponent.prototype.onAlertClose = function ($event) {
        this.hasFormErrors = false;
    };
    UserEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["SubheaderService"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"] },
        { type: _service_user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"] }
    ]; };
    UserEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-user-edit',
            template: __webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/user-management/users/user-edit/user-edit.component.html"),
            styles: [__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/views/pages/user-management/users/user-edit/user-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["SubheaderService"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_6__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"],
            _service_user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/user-management/users/users-list/users-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/users-list/users-list.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: #9E9E9E; }\n\n:host /deep/ .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);\n  background-color: #fafafa; }\n\n:host /deep/ .mat-slide-toggle .mat-slide-toggle-bar {\n  background-color: rgba(253, 57, 122, 0.54); }\n\n:host /deep/ .mat-slide-toggle .mat-slide-toggle-thumb {\n  background-color: #fd397a; }\n\n.na11 {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333;\n  background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3VzZXItbWFuYWdlbWVudC91c2Vycy91c2Vycy1saXN0L3VzZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFHQyx5QkFFRCxFQUFBOztBQUVBO0VBQ0MsK0dBQTRHO0VBQzVHLHlCQUF5QixFQUFBOztBQUkxQjtFQUNDLDBDQUF5QyxFQUFBOztBQUkxQztFQUNDLHlCQUNELEVBQUE7O0FBR0E7RUFDQywyREFBMkQ7RUFDM0QsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9wYWdlcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCAvZGVlcC8gLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcblx0Ly9iYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcblx0Ly8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMzgpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjOUU5RTlFXG5cbn1cblxuOmhvc3QgL2RlZXAvIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcblx0Ym94LXNoYWRvdzogMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhXG5cdC8vIGRvbnQgdG91Y2hcbn1cblxuOmhvc3QgL2RlZXAvIC5tYXQtc2xpZGUtdG9nZ2xlIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCA1NywgMTIyLCAuNTQpXG5cbn1cblxuOmhvc3QgL2RlZXAvIC5tYXQtc2xpZGUtdG9nZ2xlIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZkMzk3YVxufVxuXG5cbi5uYTExIHtcblx0Zm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHRsaW5lLWhlaWdodDogMS40Mjg1Nztcblx0Y29sb3I6ICMzMzM7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/views/pages/user-management/users/users-list/users-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/pages/user-management/users/users-list/users-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_base_crud__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/_base/crud */ "./src/app/core/_base/crud/index.ts");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _service_user_management_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/user-management.service */ "./src/app/views/pages/user-management/service/user-management.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _core_auth_models_user1_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../core/auth/_models/user1.model */ "./src/app/core/auth/_models/user1.model.ts");
/* harmony import */ var _service_role_credential_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../service/role-credential.service */ "./src/app/views/pages/user-management/service/role-credential.service.ts");

// Angular


// Material


// NGRX
// Services






// Table with EDIT item in MODAL
// ARTICLE for table with sort/filter/paginator
// https://blog.angular-university.io/angular-material-data-table/
// https://v5.material.angular.io/components/table/overview
// https://v5.material.angular.io/components/sort/overview
// https://v5.material.angular.io/components/table/overview#sorting
// https://www.youtube.com/watch?v=NSt9CI3BXv4
var UsersListComponent = /** @class */ (function () {
    /**
     *
     * @param activatedRoute: ActivatedRoute
     * @param router: Router
     * @param layoutUtilsService: LayoutUtilsService
     * @param subheaderService: SubheaderService
     * @param cdr
     * @param userlistService
     */
    function UsersListComponent(activatedRoute, router, layoutUtilsService, subheaderService, cdr, userManagementService, roleCredentialService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.layoutUtilsService = layoutUtilsService;
        this.subheaderService = subheaderService;
        this.cdr = cdr;
        this.userManagementService = userManagementService;
        this.roleCredentialService = roleCredentialService;
        this.displayedColumns = ['id', 'username', 'email', 'fullname', '_roles', 'actions'];
        this.users = [];
        this.userStatus = [];
        this.color = 'warn';
        // Selection
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        // Subscriptions
        this.subscriptions = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"]();
    }
    /**
     * On init
     */
    UsersListComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.loadUsers();
        this.getAllRolesAndCredentials();
    };
    UsersListComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    UsersListComponent.prototype.getAllRolesAndCredentials = function () {
        var subsc = this.roleCredentialService.getRolesAndCredentialsList()
            .subscribe(function (respond) {
            // console.log('loadcredds()', respond['roles']);
            sessionStorage.setItem('roleCredential', JSON.stringify(respond));
        }, function (error) { return console.log('There was an error while retrieving roles and credentials !!!' + error); });
        this.subscriptions.push(subsc);
    };
    UsersListComponent.prototype.deleteUser = function (_item) {
        var _this = this;
        var _title = 'User Delete';
        var _description = 'Are you sure to permanently delete this user?';
        var _waitDesciption = 'User is deleting...';
        var _deleteMessage = "User has been deleted";
        // const dialogRef = this.layoutUtilsService.deleteElement(_title, _description, _waitDesciption);
        // dialogRef.afterClosed().subscribe(res => {
        // 	if (!res) {
        // 		return;
        // 	}
        //
        // 	this.userManagementService.deleteUser(_item);
        //
        // 	// this.store.dispatch(new UserDeleted({id: _item.id}));
        // 	this.layoutUtilsService.showActionNotification(_deleteMessage, MessageType.Delete);
        // });
        var subsc = this.userManagementService.deleteUser(_item)
            .subscribe(function (res) {
            _this.layoutUtilsService.showActionNotification(_deleteMessage);
            _this.dataSource.data = _this.dataSource.data.filter(function (user) { return user.id !== _item.id; });
        }, function (error) {
            console.log('Error ', error);
            _this.layoutUtilsService.showActionNotification('Unable to delete the user');
        });
        this.subscriptions.push(subsc);
    };
    /*
    * @param user: User
    */
    UsersListComponent.prototype.getUserRolesStr = function (user) {
        var titles = [];
        // each(user.roles, (roleId: number) => {
        // 	const _role = find(this.allRoles, (role: Role) => role.id === roleId);
        // 	if (_role) {
        // 		titles.push(_role.title);
        // 	}
        // });
        return titles.join(', ');
    };
    /**
     * Redirect to edit page
     *
     * @param id
     */
    UsersListComponent.prototype.editUser = function (id, user) {
        this.userManagementService.setUser(user);
        this.router.navigate(['../users/edit', id], { relativeTo: this.activatedRoute });
    };
    UsersListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    UsersListComponent.prototype.loadUsers = function () {
        var _this = this;
        var subsc = this.userManagementService.getAllUsers()
            .subscribe(function (respond) {
            // console.log('loadUsers()');
            // console.log(respond);
            _this.dataSource.data = respond;
            _this.dataSource.sort = _this.sort;
            _this.dataSource.paginator = _this.paginator;
        }, function (error) { return console.log('There was an error while retrieving users !!!' + error); });
        this.subscriptions.push(subsc);
    };
    /**
     * Returns prepared data for save
     */
    UsersListComponent.prototype.prepareUser = function (user) {
        var _user = new _core_auth_models_user1_model__WEBPACK_IMPORTED_MODULE_9__["User1"]();
        _user.clear();
        _user.id = user.id;
        _user.username = user.username;
        _user.email = user.email;
        _user.fullname = user.fullname;
        _user.password = user.password;
        _user.roleId = user.roleId;
        _user.credentialID = user.credentialID;
        _user.isActive = user.isActive;
        return _user;
    };
    UsersListComponent.prototype.slideChanged = function (event, user) {
        var _this = this;
        var checkedUser = this.prepareUser(user);
        // console.log('BEfore ', checkedUser.isActive);
        if (event.checked) {
            // console.log('Checked ', event.checked);
            checkedUser.isActive = 1;
        }
        else {
            // console.log('Unchecked ', event.checked);
            checkedUser.isActive = 0;
            // console.log(checkedUser.isActive);
        }
        var subsc = this.userManagementService.deactivateUser(checkedUser)
            .subscribe(function (res) {
            if (checkedUser.isActive) {
                _this.layoutUtilsService.showActionNotification_("User has been activated");
            }
            else {
                _this.layoutUtilsService.showActionNotification_("User has been deactivated");
            }
        }, function (error) {
            console.log('Error ', error);
            _this.layoutUtilsService.showActionNotification_('Unable to deactivate the user');
        });
        this.subscriptions.push(subsc);
    };
    UsersListComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _service_user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"] },
        { type: _service_role_credential_service__WEBPACK_IMPORTED_MODULE_10__["RoleCredentialService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], UsersListComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], UsersListComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchInput', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UsersListComponent.prototype, "searchInput", void 0);
    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-users-list',
            template: __webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/user-management/users/users-list/users-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/views/pages/user-management/users/users-list/users-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_crud__WEBPACK_IMPORTED_MODULE_5__["LayoutUtilsService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_6__["SubheaderService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _service_user_management_service__WEBPACK_IMPORTED_MODULE_7__["UserManagementService"],
            _service_role_credential_service__WEBPACK_IMPORTED_MODULE_10__["RoleCredentialService"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/views/pages/work-summary/work-summary.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/views/pages/work-summary/work-summary.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header > div {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n\n.ws_body > div {\n  padding-top: 1rem;\n  padding-bottom: 1rem; }\n\n.overall {\n  font-weight: 500;\n  background-color: #f8f9fb; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3BhZ2VzL3dvcmstc3VtbWFyeS93b3JrLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDQyxpQkFBaUI7RUFDakIsb0JBQW9CLEVBQUE7O0FBR3JCO0VBQ0MsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUdyQjtFQUNDLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3BhZ2VzL3dvcmstc3VtbWFyeS93b3JrLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5oZWFkZXIgPiBkaXYge1xuXHRwYWRkaW5nLXRvcDogMXJlbTtcblx0cGFkZGluZy1ib3R0b206IDFyZW07XG59XG5cbi53c19ib2R5ID4gZGl2IHtcblx0cGFkZGluZy10b3A6IDFyZW07XG5cdHBhZGRpbmctYm90dG9tOiAxcmVtO1xufVxuXG4ub3ZlcmFsbHtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/pages/work-summary/work-summary.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/views/pages/work-summary/work-summary.component.ts ***!
  \********************************************************************/
/*! exports provided: WorkSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSummaryComponent", function() { return WorkSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkSummaryComponent = /** @class */ (function () {
    function WorkSummaryComponent(ref) {
        this.ref = ref;
        this.overallScore = 0;
    }
    WorkSummaryComponent.prototype.ngOnInit = function () {
        if (!this.scorecards) {
            this.adminReview = JSON.parse(sessionStorage.getItem('summary'));
        }
    };
    WorkSummaryComponent.prototype.ngOnDestroy = function () {
    };
    WorkSummaryComponent.prototype.getTotalScore = function (scorecard) {
        var scoredRubrics = scorecard['Scores'];
        var totalScore = scoredRubrics.reduce(function (acc, rubric) { return acc + parseFloat(rubric.Score); }, 0);
        this.overallScore += totalScore;
        return totalScore;
    };
    WorkSummaryComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WorkSummaryComponent.prototype, "scorecards", void 0);
    WorkSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'work-summary',
            template: __webpack_require__(/*! raw-loader!./work-summary.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/pages/work-summary/work-summary.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./work-summary.component.scss */ "./src/app/views/pages/work-summary/work-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], WorkSummaryComponent);
    return WorkSummaryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-pages-pages-module.js.map
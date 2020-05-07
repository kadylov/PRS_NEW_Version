(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-views-reviewer-pages-r_pages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/assignment-history/assignment-history.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/reviewer-pages/assignment-history/assignment-history.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t<kt-portlet-header [title]=\"'Assignment History'\">\n\t</kt-portlet-header>\n\t<kt-portlet-body>\n\t\t<div *ngIf=\"dataSource.data; else loadingMessage\"\n\t\t\tperfectScrollbar [ngStyle]=\"{'max-height': '43vh', 'position': 'relative'}\"\n\t\t\t class=\"mat-table__wrapper mat-table__wrapper--dashboard mb-4\">\n\t\t\t<!--\t\t\t<table mat-table [dataSource]=\"dataSource\" matSort>-->\n\t\t\t<table mat-table [dataSource]=\"dataSource \" matSort>\n\n\t\t\t\t<!-- Work Id Column -->\n\t\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> id</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.WorkID}}</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Title -->\n\t\t\t\t<ng-container matColumnDef=\"Title\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t{{row.Title}}\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tDate Assigned-->\n\t\t\t\t<ng-container matColumnDef=\"DateAssigned\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Date Assigned</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n<!--\t\t\t\t\t\t<span style=\"margin-left: 6px\">-->\n<!--\t\t\t\t\t\t\t{{row.DateAssigned}}-->\n<!--\t\t\t\t\t\t</span>-->\n\t\t\t\t\t\t{{row.DateAssigned}}\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tDue Date-->\n\t\t\t\t<ng-container matColumnDef=\"DueDate\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n<!--\t\t\t\t\t\t<span style=\"margin-left: 6px\">-->\n<!--\t\t\t\t\t\t\t{{row.DueDate}}-->\n<!--\t\t\t\t\t\t</span>-->\n\t\t\t\t\t\t{{row.DueDate}}\n\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tActions-->\n\t\t\t\t<ng-container matColumnDef=\"Action\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Action</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"><a href=\"\">View</a></td>\n\t\t\t\t</ng-container>\n\n\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n\t\t\t\t</tr>\n\t\t\t</table>\n\n\n\t\t\t<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\t\t</div>\n\n\t</kt-portlet-body>\n</kt-portlet>\n\n<ng-template #loadingMessage>\n\t<h4 class=\"text-center my-5\">There is currently no assigments</h4>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/assignment/assignment.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/reviewer-pages/assignment/assignment.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t<kt-portlet-header [title]=\"'Current Assignments'\">\n\t</kt-portlet-header>\n\t<kt-portlet-body>\n\t\t<div *ngIf=\"dataSource.data; else loadingMessage\"\n\t\t\tperfectScrollbar [ngStyle]=\"{'max-height': '43vh', 'position': 'relative'}\"\n\t\t\t class=\"mat-table__wrapper mat-table__wrapper--dashboard mb-4\">\n\t\t\t<!--\t\t\t<table mat-table [dataSource]=\"dataSource\" matSort>-->\n\t\t\t<table mat-table [dataSource]=\"dataSource \" matSort>\n\n\t\t\t\t<!-- Work Id Column -->\n\t\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> id</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.WorkID}}</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Title -->\n\t\t\t\t<ng-container matColumnDef=\"Title\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t{{row.Title}}\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tDate Assigned-->\n\t\t\t\t<ng-container matColumnDef=\"DateAssigned\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Date Assigned</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n<!--\t\t\t\t\t\t<span style=\"margin-left: 6px\">-->\n<!--\t\t\t\t\t\t\t{{row.DateAssigned}}-->\n<!--\t\t\t\t\t\t</span>-->\n\t\t\t\t\t\t{{row.DateAssigned}}\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tDue Date-->\n\t\t\t\t<ng-container matColumnDef=\"DueDate\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n<!--\t\t\t\t\t\t<span style=\"margin-left: 6px\">-->\n<!--\t\t\t\t\t\t\t{{row.DueDate}}-->\n<!--\t\t\t\t\t\t</span>-->\n\t\t\t\t\t\t{{row.DueDate}}\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tActions-->\n\t\t\t\t<ng-container matColumnDef=\"Action\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Action</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t<span>\n\t\t\t\t\t\t\t<button\n\t\t\t\t\t\t\t\t(click)=\"viewAssignment(row)\"\n\t\t\t\t\t\t\t\tclass=\"btn btn-primary\" >View</button>\n\t\t\t\t\t\t</span>\n\n\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n\t\t\t\t</tr>\n\t\t\t</table>\n\n\n\t\t\t<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\t\t</div>\n\n\t</kt-portlet-body>\n</kt-portlet>\n\n\n<ng-template #loadingMessage>\n\t<h4 class=\"text-center my-5\">There is currently no assigments</h4>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/assignment/in-progress/in-progress.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/reviewer-pages/assignment/in-progress/in-progress.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n<!--\t<div class=\"col-lg-6\">-->\n<!--\t\t<div class=\"kt-portlet\">-->\n<!--\t\t\t<div class=\"kt-portlet__head\">-->\n<!--\t\t\t\t<div class=\"kt-portlet__head-caption\">-->\n<!--\t\t\t\t\t<div class=\"kt-portlet__head-title\">-->\n<!--\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">-->\n<!--\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>-->\n<!--\t\t\t\t\t\t</span>-->\n<!--\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">-->\n<!--\t\t\t\t\t\t\tReview Material-->\n<!--\t\t\t\t\t\t</h3>-->\n<!--\t\t\t\t\t</div>-->\n<!--\t\t\t\t</div>-->\n<!--\t\t\t</div>-->\n<!--\t\t\t&lt;!&ndash;begin::Form&ndash;&gt;-->\n<!--\t\t\t<form class=\"kt-form\">-->\n<!--\t\t\t\t<div class=\"kt-portlet__body\">-->\n<!--\t\t\t\t\t<div class=\"kt-form__section kt-form__section&#45;&#45;first\">-->\n<!--\t\t\t\t\t\t<iframe #frameElement [src]=\"safeUrl\" (loadstart)=\"loading=true\" (load)=\"loading=false\"-->\n<!--\t\t\t\t\t\t\t\tstyle=\"width:100%; height:1000px;\"></iframe>-->\n<!--\t\t\t\t\t\t​-->\n<!--\t\t\t\t\t\t​-->\n<!--\t\t\t\t\t</div>-->\n<!--\t\t\t\t</div>-->\n<!--\t\t\t\t​-->\n<!--\t\t\t</form>-->\n<!--\t\t\t&lt;!&ndash;end::Form&ndash;&gt;-->\n<!--\t\t</div>-->\n<!--\t\t​-->\n<!--\t\t​-->\n<!--\t</div>-->\n\n\t<div class=\"col-lg-6\" id=\"myDiv\">\n\t\t<div class=\"kt-portlet\">\n\t\t\t<div class=\"kt-portlet__head\">\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\t\t\tPre-Review Material\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"kt-portlet__head-toolbar\">\n\t\t\t\t\t<button (click)=\"openInFullScreen()\" *ngIf=\"!isFullscreen\" type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-clean btn-sm btn-icon btn-icon-md\" data-toggle=\"dropdown\"\n\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t<i class=\"flaticon2-arrow-1\"></i>\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<button (click)=\"exitFromFullScreen()\" *ngIf=\"isFullscreen\" type=\"button\"\n\t\t\t\t\t\t\tclass=\"btn btn-clean btn-sm btn-icon btn-icon-md\" data-toggle=\"dropdown\"\n\t\t\t\t\t\t\taria-haspopup=\"true\" aria-expanded=\"false\">\n\t\t\t\t\t\t<i class=\"flaticon2-size\"></i>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"kt-portlet__body\">\n\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\n\n\t\t\t\t\t<div class=\"d-flex justify-content-center\"\n\t\t\t\t\t\t *ngIf=\"loading\">\n\t\t\t\t\t\t<mat-spinner class=\"align-self-center\" *ngIf=\"loading\"></mat-spinner>\n\t\t\t\t\t</div>\n\t\t\t\t\t<iframe #frameElement [src]=\"safeUrl\" (loadstart)=\"loading=true\" (load)=\"loading=false\"\n\t\t\t\t\t\t\tstyle=\"width:100%; height:1000px;\"></iframe>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\n\t<div class=\"col-lg-6\">\n\t\t<div class=\"kt-portlet\">\n\t\t\t<div class=\"kt-portlet__head\">\n\t\t\t\t<div class=\"kt-portlet__head-caption\">\n\t\t\t\t\t<div class=\"kt-portlet__head-title\">\n\t\t\t\t\t\t<span class=\"kt-portlet__head-icon kt-hide\">\n\t\t\t\t\t\t\t<i class=\"la la-gear\"></i>\n\t\t\t\t\t\t</span>\n\t\t\t\t\t\t<h3 class=\"kt-portlet__head-text\">\n\t\t\t\t\t\t\tScorecard\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<form class=\"kt-form\">\n\t\t\t\t<div class=\"kt-portlet__body\">\n\t\t\t\t\t<div class=\"kt-form__section kt-form__section--first\">\n\n\n\t\t\t\t\t\t​\n\t\t\t\t\t\t<div class=\"kt-form__heading\">\n\t\t\t\t\t\t\t<h3 class=\"kt-form__heading-title\">Quality of Content: Reinforces Barcelona Princibles</h3>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"kt-form__group form-group\">\n\t\t\t\t\t\t\t<label>1. Goal Setting and Measurement are Fundemental to Communication and Public Relations</label>\n\n\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q1Value\"name=\"q1\" min=\"0\" max=\"5\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q1Value\">Score: {{ q1Value }}/5</span>\n\n\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t<label>2. Measuring Commincation Outcomes is Recommended Versus Only Measuring Outputs</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q2Value\"name=\"q2\" min=\"0\" max=\"5\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q2Value\">Score: {{ q2Value }}/5</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<label >3. The Effect on Organizational Performance Can and Should Be Measured Where Possible</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q3Value\"name=\"q3\" min=\"0\" max=\"5\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q3Value\">Score: {{ q3Value }}/5</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<label>4. Measurement and Evaluation Require Both Qualitive and Quantitive Methods</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q4Value\"name=\"q4\" min=\"0\" max=\"5\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q4Value\">Score: {{ q4Value }}/5</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<label >5. AVEs are not the Value of Communication</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q5Value\"name=\"q5\" min=\"0\" max=\"5\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q5Value\">Score: {{ q5Value }}/5</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<label>6. Social Media Can and Should be Measured Consistantly with Other Media Channels</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q6Value\"name=\"q6\" min=\"0\" max=\"5\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q6Value\">Score: {{ q6Value }}/5</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<label>7. Measurement and Evaluation Should be Transparent, Consistant and Valid</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q7Value\"name=\"q7\" min=\"0\" max=\"5\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q7Value\">Score: {{ q7Value }}/5</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<div class=\"kt-form__heading\">\n\t\t\t\t\t\t\t\t<h3 class=\"kt-form__heading-title\">Quality of Submission</h3>\n\t\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<label>8. Adds to or Advances The Body of Knowledge</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q8Value\"name=\"q8\" min=\"1\" max=\"4\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q8Value\">Score: {{ q8Value }}/4</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<label>9. Spelling/Grammar/Writing Style/Speaking Style</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q9Value\"name=\"q9\" min=\"1\" max=\"4\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q9Value\">Score: {{ q9Value }}/4</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<label>10. Focused and Complete</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q10Value\"name=\"q10\" min=\"1\" max=\"4\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q10Value\">Score: {{ q10Value }}/4</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<label>11. Demonstrates Valid Use of Data, Mathematics and Methods</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q11Value\"name=\"q11\" min=\"1\" max=\"4\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q11Value\">Score: {{ q11Value }}/4</span>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t<label>12. Visualization Elements Aid Comprehension</label>\n\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t<mat-slider (change)=\"changeSlider()\" [(ngModel)]=\"q12Value\"name=\"q12\" min=\"1\" max=\"4\" step=\"1\" thumbLabel tickInterval=\"1\"></mat-slider>\n\t\t\t\t\t\t\t\t<span *ngIf=\"q12Value\">Score: {{ q12Value }}/4</span>\n\t\t\t\t\t\t\t</p>\n\n\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t\t<div class=\"form-group kt-form__group kt-form__group--last\">\n\t\t\t\t\t\t\t<h5>Cumulative Score:&nbsp;{{ cValue }}</h5>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"kt-portlet__foot kt-portlet__no-border\">\n\t\t\t\t\t<div class=\"kt-form__actions kt-form__actions--solid\">\n\t\t\t\t\t\t<div class=\"button-row\">\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-primary kt-margin-r-10\" color=\"primary\" (click)=\"onSumbit()\"\n\t\t\t\t\t\t\t   mat-raised-button matTooltip=\"Submit & Continue\">\n\t\t\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Submit Review</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t&nbsp;&nbsp;&nbsp;&nbsp;\n\t\t\t\t\t\t\t<a [routerLink]=\"['../Dashboard']\" class=\"btn btn-secondary kt-margin-r-10\" mat-raised-button\n\t\t\t\t\t\t\t   matTooltip=\"Back to the users list\">\n\t\t\t\t\t\t\t\t<span class=\"kt-hidden-mobile\">Cancel</span>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t\t<!--end::Form-->\n\n\t\t</div>\n\t\t​\n\t</div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/dashboard/r_dashboard.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/reviewer-pages/dashboard/r_dashboard.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-12 dash-container\">\n\t\t<kt-assigned-work></kt-assigned-work>\n\t\t<div class=\"discusion\" #scrollMe2 [scrollTop]=\"scrollMe2.scrollHeight\">\n\t\t\t<kt-discussion\n\t\t\t\t*ngIf=\"modal\"\n\t\t\t\t(close)=\"modal=false\"\n\t\t\t></kt-discussion>\n\t\t</div>\n<!--\t\t<div class=\"row fab-btn\">-->\n<!--\t\t\t<button mat-fab (click)=\"modal=!modal\">-->\n<!--\t\t\t\t<mat-icon svgIcon=\"chat1\"></mat-icon>-->\n<!--\t\t\t</button>-->\n<!--\t\t</div>-->\n\n\t</div>\n\n\n<!--\t<div class=\"row\">-->\n<!--\t\t<div class=\"col-xl-12\">-->\n<!--\t\t</div>-->\n\n<!--\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"test()\">Click</button>-->\n<!--\t</div>-->\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/discussion/discussion.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/reviewer-pages/discussion/discussion.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backdrop\" (click)=\"close.emit()\"\n></div>\n\n<div class=\"modal1\">\n\t<nav  class=\"navbar1\">\n\t\t<div class=\"grid-main\">\n\t\t\t<div class=\"grid-title\">\n\t\t\t\t<h1>{{ title }}</h1>\n\t\t\t</div>\n\n\t\t\t<div class=\"grid-btn\">\n\t\t\t\t<button type=\"button\" class=\"close\" style=\"opacity: 1;\" aria-label=\"Close\" (click)=\"close.emit()\">\n\t\t\t\t\t<i class=\"fa fa-window-minimize\" aria-hidden=\"true\"></i>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n\n\t<div class=\"container-fluids messages\"\n\t\t #scrollMe [scrollTop]=\"scrollMe.scrollHeight\"\n\t\t*ngIf=\"messages$ | async | sortbyDate as messages; else loadingMessage\"\n\t>\n\t\t<div class=\"container\"\n\t\t*ngFor=\"let msg of messages\">\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">{{msg.ReviewerName}} <small><i>Posted on {{msg.DTime | date: 'longDate' }}</i></small></h4>\n\t\t\t\t\t<p>{{msg.Message}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\n\n\n\t\t<!--<div class=\"container \">\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\tlabore et dolore magna aliqua.\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta fugit impedit maxime\n\t\t\t\t\t\tnecessitatibus perspiciatis quae quod rerum sit tempore! Autem blanditiis doloribus fugit nulla\n\t\t\t\t\t\tobcaecati quae quos. Aliquid autem consequuntur fuga iste pariatur tempore ullam vel vitae.\n\t\t\t\t\t\tEveniet necessitatibus quisquam sapiente vero voluptatibus.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>-->\n\n\t\t<!--<div class=\"container\">\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\n\t\t\t\t\t<div class=\"msg-box\">\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\tlabore et dolore magna aliqua.</p>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\tlabore et dolore magna aliqua.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\tlabore et dolore magna aliqua.\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta fugit impedit maxime\n\t\t\t\t\t\tnecessitatibus perspiciatis quae quod rerum sit tempore! Autem blanditiis doloribus fugit nulla\n\t\t\t\t\t\tobcaecati quae quos. Aliquid autem consequuntur fuga iste pariatur tempore ullam vel vitae.\n\t\t\t\t\t\tEveniet necessitatibus quisquam sapiente vero voluptatibus.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\n\t\t\t\t\t<div class=\"msg-box\">\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\tlabore et dolore magna aliqua.</p>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\tlabore et dolore magna aliqua.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\tlabore et dolore magna aliqua.\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta fugit impedit maxime\n\t\t\t\t\t\tnecessitatibus perspiciatis quae quod rerum sit tempore! Autem blanditiis doloribus fugit nulla\n\t\t\t\t\t\tobcaecati quae quos. Aliquid autem consequuntur fuga iste pariatur tempore ullam vel vitae.\n\t\t\t\t\t\tEveniet necessitatibus quisquam sapiente vero voluptatibus.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\n\t\t\t\t\t<div class=\"msg-box\">\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\tlabore et dolore magna aliqua.</p>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\n\t\t<div class=\"container\">\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\tlabore et dolore magna aliqua.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\t\t<div class=\"container\">\n\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\tlabore et dolore magna aliqua.\n\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dicta fugit impedit maxime\n\t\t\t\t\t\tnecessitatibus perspiciatis quae quod rerum sit tempore! Autem blanditiis doloribus fugit nulla\n\t\t\t\t\t\tobcaecati quae quos. Aliquid autem consequuntur fuga iste pariatur tempore ullam vel vitae.\n\t\t\t\t\t\tEveniet necessitatibus quisquam sapiente vero voluptatibus.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\n\t\t<div class=\"container\">\n\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\n\t\t\t\t\t<div class=\"msg-box\">\n\t\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\t\tlabore et dolore magna aliqua.</p>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>\n\n\t\t<div class=\"container\">\n\n\n\t\t\t<div class=\"media\">\n\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t<img src=\"https://www.w3schools.com/bootstrap/img_avatar1.png\" class=\"media-object\"\n\t\t\t\t\t\t style=\"width:60px\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t<h4 class=\"media-heading\">John Doe <small><i>Posted on February 19, 2016</i></small></h4>\n\t\t\t\t\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n\t\t\t\t\t\tlabore et dolore magna aliqua.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<hr>\n\t\t</div>-->\n\t</div>\n\n\n\t<div class=\"msg-footer\">\n\n\t\t<div style=\"\n\t\tpadding: 8px;\n\t\tborder-bottom-right-radius: 4px;\n  \t\tborder-bottom-left-radius: 43px;\n    \tmargin: 15px 6px;\">\n\n\t\t\t<div class=\"inputWithIcon\">\n\t\t\t\t<input #input type=\"text\" placeholder=\"Write a message...\"\n\t\t\t\t\t   (keyup.enter)=\"submit(input)\"\n\t\t\t\t/>\n\t\t\t\t<i class=\"fa fa-paper-plane fa-lg\" aria-hidden=\"true\"></i>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n\n\n<ng-template #loadingMessage>\n\t<p class=\"text-center\">Loading...</p>\n</ng-template>\n\n<ng-template #multiple>\n\n</ng-template>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/review-history/review-history.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/reviewer-pages/review-history/review-history.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-portlet [class]=\"'kt-portlet--height-fluid'\">\n\t<kt-portlet-header [title]=\"'Review History'\">\n\t</kt-portlet-header>\n\t<kt-portlet-body>\n\t\t<div *ngIf=\"dataSource.data; else loadingMessage\"\n\t\t\tperfectScrollbar [ngStyle]=\"{'max-height': '43vh', 'position': 'relative'}\"\n\t\t\t class=\"mat-table__wrapper mat-table__wrapper--dashboard mb-4\">\n\t\t\t<!--\t\t\t<table mat-table [dataSource]=\"dataSource\" matSort>-->\n\t\t\t<table mat-table [dataSource]=\"dataSource \" matSort>\n\n\t\t\t\t<!-- Work Id Column -->\n\t\t\t\t<ng-container matColumnDef=\"id\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> id</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> {{row.WID}}</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tdisplayedColumns = ['id', 'Title', 'DateReviewed', 'Score'];-->\n\n\t\t\t\t<!-- Title -->\n\t\t\t\t<ng-container matColumnDef=\"Title\">\n\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header>Title</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t<a href=\"{{row.URL}}\" target=\"_blank\">{{row.WTitle}}</a>\n\t\t\t\t\t</td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tDate Reviewed-->\n\t\t\t\t<ng-container matColumnDef=\"DateReviewed\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Date Reviewed</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> <span style=\"margin-left: 6px\">{{row.DateReviewed}}</span></td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tDate Reviewed-->\n\t\t\t\t<ng-container matColumnDef=\"Score\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Score</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"> <span style=\"margin-left: 8px\">{{row.Score}}</span></td>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!--\t\tActions-->\n\t\t\t\t<ng-container matColumnDef=\"Action\">\n\t\t\t\t\t<th mat-header-cell *matHeaderCellDef mat-sort-header> Action</th>\n\t\t\t\t\t<td mat-cell *matCellDef=\"let row\"><a href=\"\">View</a></td>\n\t\t\t\t</ng-container>\n\n\n\t\t\t\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t\t\t\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n\t\t\t\t</tr>\n\t\t\t</table>\n\n\n\t\t\t<mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n\t\t</div>\n\n\t</kt-portlet-body>\n</kt-portlet>\n\n<ng-template #loadingMessage>\n\t<h4 class=\"text-center my-5\">There is no review history</h4>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/core/reviewer/_effects/assignment.effects.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/reviewer/_effects/assignment.effects.ts ***!
  \**************************************************************/
/*! exports provided: AssignmentEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentEffects", function() { return AssignmentEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_reviewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/reviewer.service */ "./src/app/core/reviewer/_services/reviewer.service.ts");
/* harmony import */ var _actions_assignment_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_actions/assignment.actions */ "./src/app/core/reviewer/_actions/assignment.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var AssignmentEffects = /** @class */ (function () {
    function AssignmentEffects(actions$, reviewerService) {
        var _this = this;
        this.actions$ = actions$;
        this.reviewerService = reviewerService;
        this.loadCurrentAssignments$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_assignment_actions__WEBPACK_IMPORTED_MODULE_4__["AssignmentActionTypes"].AssignmentsRequested), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (user) { return _this.reviewerService.getCurrentAssignment(user.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return new _actions_assignment_actions__WEBPACK_IMPORTED_MODULE_4__["AssignmentLoaded"](data); })); }));
        this.loadAssignmentHistory$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_assignment_actions__WEBPACK_IMPORTED_MODULE_4__["AssignmentActionTypes"].AssignmentHistoryRequested), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (user) { return _this.reviewerService.getAssignmentHistory(user.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return new _actions_assignment_actions__WEBPACK_IMPORTED_MODULE_4__["AssignmentHistoryLoaded"](data); })); }));
    }
    AssignmentEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_reviewer_service__WEBPACK_IMPORTED_MODULE_3__["ReviewerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssignmentEffects.prototype, "loadCurrentAssignments$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AssignmentEffects.prototype, "loadAssignmentHistory$", void 0);
    AssignmentEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_reviewer_service__WEBPACK_IMPORTED_MODULE_3__["ReviewerService"]])
    ], AssignmentEffects);
    return AssignmentEffects;
}());



/***/ }),

/***/ "./src/app/core/reviewer/_effects/message.effects.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/reviewer/_effects/message.effects.ts ***!
  \***********************************************************/
/*! exports provided: MessageEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageEffects", function() { return MessageEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_reviewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/reviewer.service */ "./src/app/core/reviewer/_services/reviewer.service.ts");
/* harmony import */ var _actions_message_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_actions/message.actions */ "./src/app/core/reviewer/_actions/message.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var MessageEffects = /** @class */ (function () {
    function MessageEffects(actions$, reviewerService) {
        var _this = this;
        this.actions$ = actions$;
        this.reviewerService = reviewerService;
        this.loadAllMessages$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_message_actions__WEBPACK_IMPORTED_MODULE_4__["MessageActionTypes"].MessagesRequested), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (work) { return _this.reviewerService.getMessageHistory(work.workID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) { return new _actions_message_actions__WEBPACK_IMPORTED_MODULE_4__["MessagesLoaded"](data); })); }));
        /*
        * this.test$ = Observable.of(['one', 'two', 'three'])
    .map((data) => {
        data.sort((a, b) => {
            return a < b ? -1 : 1;
         });
        return data;
     });
        * */
        this.createNewMessage$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_message_actions__WEBPACK_IMPORTED_MODULE_4__["MessageActionTypes"].NewMessageCreated), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (message) { return _this.reviewerService.postNewMessage(message.payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () {
            return new _actions_message_actions__WEBPACK_IMPORTED_MODULE_4__["NewMessageSavedOnServer"](message.payload);
        })); }));
    }
    MessageEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_reviewer_service__WEBPACK_IMPORTED_MODULE_3__["ReviewerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessageEffects.prototype, "loadAllMessages$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MessageEffects.prototype, "createNewMessage$", void 0);
    MessageEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_reviewer_service__WEBPACK_IMPORTED_MODULE_3__["ReviewerService"]])
    ], MessageEffects);
    return MessageEffects;
}());



/***/ }),

/***/ "./src/app/core/reviewer/_effects/review-history.effects.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/reviewer/_effects/review-history.effects.ts ***!
  \******************************************************************/
/*! exports provided: ReviewHistoryEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewHistoryEffects", function() { return ReviewHistoryEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_reviewer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/reviewer.service */ "./src/app/core/reviewer/_services/reviewer.service.ts");
/* harmony import */ var _actions_review_history_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_actions/review-history.actions */ "./src/app/core/reviewer/_actions/review-history.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var ReviewHistoryEffects = /** @class */ (function () {
    function ReviewHistoryEffects(actions$, reviewerService) {
        var _this = this;
        this.actions$ = actions$;
        this.reviewerService = reviewerService;
        this.loadReviewHistory$ = this.actions$
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_review_history_actions__WEBPACK_IMPORTED_MODULE_4__["ReviewHistoryActionTypes"].ReviewHistoryRequested), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function () { return _this.reviewerService.getAllReviews()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (data) {
            return new _actions_review_history_actions__WEBPACK_IMPORTED_MODULE_4__["ReviewHistoryLoaded"](data);
        })); }));
    }
    ReviewHistoryEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_reviewer_service__WEBPACK_IMPORTED_MODULE_3__["ReviewerService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ReviewHistoryEffects.prototype, "loadReviewHistory$", void 0);
    ReviewHistoryEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_reviewer_service__WEBPACK_IMPORTED_MODULE_3__["ReviewerService"]])
    ], ReviewHistoryEffects);
    return ReviewHistoryEffects;
}());



/***/ }),

/***/ "./src/app/core/reviewer/_services/reviewer.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/reviewer/_services/reviewer.service.ts ***!
  \*************************************************************/
/*! exports provided: ReviewerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerService", function() { return ReviewerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");




var API_REVIEWER_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'reviewer_request.php';
var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
var ReviewerService = /** @class */ (function () {
    function ReviewerService(http) {
        this.http = http;
    }
    ReviewerService.prototype.getAllReviews = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("reviewHistory", 'reviewHistory')
            .set("ReviewerID", user.id);
        return this.http.get(API_REVIEWER_URL, {
            params: {
                reviewHistory: 'reviewHistory',
                ReviewerID: user.id
            }
        });
    };
    ReviewerService.prototype.getCurrentAssignment = function (reviewerID) {
        return this.http.get(API_REVIEWER_URL, {
            params: {
                listAssignments: 'assignedWorks',
                ReviewerID: reviewerID.toString()
            }
        });
    };
    ReviewerService.prototype.getAssignmentHistory = function (reviewerID) {
        return this.http.get(API_REVIEWER_URL, {
            params: {
                assignmentHistory: 'assignmentHistory',
                ReviewerID: reviewerID.toString()
            }
        });
    };
    ReviewerService.prototype.getMessageHistory = function (workID) {
        return this.http.get(API_REVIEWER_URL, {
            params: {
                getDiscussions: 'getDiscussions',
                WorkID: workID.toString()
            }
        });
    };
    ReviewerService.prototype.postNewMessage = function (message) {
        //WorkID, ReviewerID, Message, DTime
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("postNewMessage", 'postNewMessage')
            .set("WorkID", message.WorkID.toString())
            .set("ReviewerID", message.ReviewerID.toString())
            .set("Message", message.Message)
            .set("DTime", message.DTime);
        // return this.http.post<Work>(api, body, {headers: headers});
        return this.http.post(API_REVIEWER_URL, body, { headers: headers });
    };
    ReviewerService.prototype.sendScores = function (WID, reviewerID, q1Value, q2Value, q3Value, q4Value, q5Value, q6Value, q7Value, q8Value, q9Value, q10Value, q11Value, q12Value, cValue) {
        console.log('CCCCCCCCC', cValue);
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set("saveScorecard", 'saveScorecard')
            .set("WID", WID)
            .set("ReviewerID", reviewerID.toString())
            .set("q1Value", q1Value)
            .set("q2Value", q2Value)
            .set("q3Value", q3Value)
            .set("q4Value", q4Value)
            .set("q5Value", q5Value)
            .set("q6Value", q6Value)
            .set("q7Value", q7Value)
            .set("q8Value", q8Value)
            .set("q9Value", q9Value)
            .set("q10Value", q10Value)
            .set("q11Value", q11Value)
            .set("q12Value", q12Value)
            .set("totalScore", cValue);
        return this.http.post(API_REVIEWER_URL, body, { headers: headers });
    };
    ReviewerService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ReviewerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReviewerService);
    return ReviewerService;
}());



/***/ }),

/***/ "./src/app/views/reviewer-pages/assignment-history/assignment-history.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/assignment-history/assignment-history.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AssignmentHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentHistoryComponent", function() { return AssignmentHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/reviewer/_reducers */ "./src/app/core/reviewer/_reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_reviewer_actions_assignment_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/reviewer/_actions/assignment.actions */ "./src/app/core/reviewer/_actions/assignment.actions.ts");






var AssignmentHistoryComponent = /** @class */ (function () {
    function AssignmentHistoryComponent(store) {
        this.store = store;
        this.displayedColumns = ['id', 'Title', 'DateAssigned', 'DueDate', 'Action'];
        // Subscriptions
        this.subscriptions = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    AssignmentHistoryComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _core_reviewer_actions_assignment_actions__WEBPACK_IMPORTED_MODULE_5__["AssignmentHistoryRequested"](this.getUserId()));
        this.loadAssignmentHistory();
    };
    AssignmentHistoryComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        }
    };
    AssignmentHistoryComponent.prototype.loadAssignmentHistory = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        var subc$ = this.store.select(_core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_3__["getAssignmentHistoryLoaded"]).subscribe(function (isLoaded) {
            if (isLoaded) {
                var loadSubc$ = _this.store.select(_core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_3__["getAssignmentHistory"])
                    .subscribe(function (res) {
                    _this.dataSource.data = res;
                });
                _this.subscriptions.push(loadSubc$);
            }
        });
    };
    AssignmentHistoryComponent.prototype.getUserId = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        return user.id;
    };
    AssignmentHistoryComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AssignmentHistoryComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AssignmentHistoryComponent.prototype, "sort", void 0);
    AssignmentHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-assignment-history-work',
            template: __webpack_require__(/*! raw-loader!./assignment-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/assignment-history/assignment-history.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], AssignmentHistoryComponent);
    return AssignmentHistoryComponent;
}());



/***/ }),

/***/ "./src/app/views/reviewer-pages/assignment/assignment.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/assignment/assignment.component.ts ***!
  \*************************************************************************/
/*! exports provided: AssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentComponent", function() { return AssignmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/reviewer/_reducers */ "./src/app/core/reviewer/_reducers/index.ts");
/* harmony import */ var _core_reviewer_actions_assignment_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/reviewer/_actions/assignment.actions */ "./src/app/core/reviewer/_actions/assignment.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var AssignmentComponent = /** @class */ (function () {
    function AssignmentComponent(router, store, ref) {
        this.router = router;
        this.store = store;
        this.ref = ref;
        this.displayedColumns = ['id', 'Title', 'DateAssigned', 'DueDate', 'Action'];
        // Subscriptions
        this.subscriptions = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    AssignmentComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _core_reviewer_actions_assignment_actions__WEBPACK_IMPORTED_MODULE_5__["AssignmentRequested"](this.getUserId()));
        this.loadAssignmentHistory();
    };
    AssignmentComponent.prototype.ngOnDestroy = function () {
        if (this.subscriptions.length > 0) {
            this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        }
    };
    AssignmentComponent.prototype.loadAssignmentHistory = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.store.select(_core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_4__["getCurrAssignmentsLoaded"]).subscribe(function (isLoaded) {
            if (isLoaded) {
                var subc$ = _this.store.select(_core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_4__["getCurrAssignments"])
                    .subscribe(function (res) {
                    _this.dataSource.data = res;
                    _this.ref.markForCheck();
                });
                _this.subscriptions.push(subc$);
            }
        });
    };
    AssignmentComponent.prototype.getUserId = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        return user.id;
    };
    AssignmentComponent.prototype.viewAssignment = function (work) {
        sessionStorage.setItem('assignment', JSON.stringify(work));
        this.router.navigateByUrl('/reviewer/in-progress');
    };
    AssignmentComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AssignmentComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], AssignmentComponent.prototype, "sort", void 0);
    AssignmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-assigned-work',
            template: __webpack_require__(/*! raw-loader!./assignment.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/assignment/assignment.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AssignmentComponent);
    return AssignmentComponent;
}());



/***/ }),

/***/ "./src/app/views/reviewer-pages/assignment/in-progress/in-progress.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/assignment/in-progress/in-progress.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.mat-slider {\n  width: 75%; }\n\n.example-full-width {\n  width: 100%; }\n\n.kt-checkbox-inline > mat-checkbox {\n  padding-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3Jldmlld2VyLXBhZ2VzL2Fzc2lnbm1lbnQvaW4tcHJvZ3Jlc3MvaW4tcHJvZ3Jlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBRXZCO0VBQ0MsVUFBVSxFQUFBOztBQUVYO0VBQ0MsV0FBVyxFQUFBOztBQUVaO0VBQ0MsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZXZpZXdlci1wYWdlcy9hc3NpZ25tZW50L2luLXByb2dyZXNzL2luLXByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5tYXQtc2xpZGVyIHtcblx0d2lkdGg6IDc1JTtcbn1cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuXHR3aWR0aDogMTAwJTtcbn1cbi5rdC1jaGVja2JveC1pbmxpbmUgPiBtYXQtY2hlY2tib3gge1xuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/reviewer-pages/assignment/in-progress/in-progress.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/assignment/in-progress/in-progress.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InProgressComponent", function() { return InProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_reviewer_services_reviewer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/reviewer/_services/reviewer.service */ "./src/app/core/reviewer/_services/reviewer.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var InProgressComponent = /** @class */ (function () {
    function InProgressComponent(sanitizer, router, reviewerService) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.reviewerService = reviewerService;
        this.q1Value = 0;
        this.q2Value = 0;
        this.q3Value = 0;
        this.q4Value = 0;
        this.q5Value = 0;
        this.q6Value = 0;
        this.q7Value = 0;
        this.q8Value = 0;
        this.q9Value = 0;
        this.q10Value = 0;
        this.q11Value = 0;
        this.q12Value = 0;
        this.cValue = 0;
        this.loading = true;
        this.isFullscreen = false;
        this.subscription = [];
        this.assignment = null;
    }
    InProgressComponent.prototype.ngOnInit = function () {
        this.assignment = JSON.parse(sessionStorage.getItem('assignment'));
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.assignment.URL);
    };
    InProgressComponent.prototype.ngOnDestroy = function () {
        sessionStorage.removeItem('assignment');
        if (this.subscription.length > 0) {
            this.subscription.forEach(function (r) { return r.unsubscribe(); });
        }
    };
    InProgressComponent.prototype.onSumbit = function () {
        var _this = this;
        var subsc = this.reviewerService.sendScores(this.assignment.WorkID, this.getCurrentUserID(), this.q1Value, this.q2Value, this.q3Value, this.q4Value, this.q5Value, this.q6Value, this.q7Value, this.q8Value, this.q9Value, this.q10Value, this.q11Value, this.q12Value, this.cValue)
            .subscribe(function (res) {
            _this.router.navigateByUrl('reviewer/dashboard');
        });
        this.subscription.push(subsc);
    };
    InProgressComponent.prototype.changeSlider = function () {
        this.cValue = this.q1Value + this.q2Value + this.q3Value + this.q4Value + this.q5Value + this.q6Value + this.q7Value + this.q8Value + this.q9Value + this.q10Value + this.q11Value + this.q12Value;
    };
    InProgressComponent.prototype.getCurrentUserID = function () {
        var user = JSON.parse(sessionStorage.getItem('user'));
        return user.id;
    };
    InProgressComponent.prototype.exitFromFullScreen = function () {
        this.isFullscreen = false;
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    };
    InProgressComponent.prototype.openInFullScreen = function () {
        this.isFullscreen = true;
        var elem = document.getElementById('myDiv');
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
    };
    InProgressComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _core_reviewer_services_reviewer_service__WEBPACK_IMPORTED_MODULE_2__["ReviewerService"] }
    ]; };
    InProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-in-progress',
            template: __webpack_require__(/*! raw-loader!./in-progress.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/assignment/in-progress/in-progress.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./in-progress.component.scss */ "./src/app/views/reviewer-pages/assignment/in-progress/in-progress.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _core_reviewer_services_reviewer_service__WEBPACK_IMPORTED_MODULE_2__["ReviewerService"]])
    ], InProgressComponent);
    return InProgressComponent;
}());



/***/ }),

/***/ "./src/app/views/reviewer-pages/dashboard/r_dashboard.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/dashboard/r_dashboard.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "kt-base {\n  opacity: 0;\n  height: 100%; }\n  kt-base .kt-grid--root {\n    height: 100%; }\n  .kt-page--loaded kt-base {\n  opacity: 1;\n  transition: opacity 1s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3Jldmlld2VyLXBhZ2VzL2Rhc2hib2FyZC9yX2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQVU7RUFDVixZQUFZLEVBQUE7RUFGYjtJQUtFLFlBQVksRUFBQTtFQUlkO0VBRUUsVUFBVTtFQUNWLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmV2aWV3ZXItcGFnZXMvZGFzaGJvYXJkL3JfZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsia3QtYmFzZSB7XG5cdG9wYWNpdHk6IDA7XG5cdGhlaWdodDogMTAwJTtcblxuXHQua3QtZ3JpZC0tcm9vdCB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG59XG5cbi5rdC1wYWdlLS1sb2FkZWQge1xuXHRrdC1iYXNlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG5cdH1cbn1cblxuXG4vLy5mbG9hdCB7XG4vL1x0cG9zaXRpb246IGZpeGVkO1xuLy9cdGJvdHRvbTogMXJlbTtcbi8vXHRyaWdodDogMXJlbTtcbi8vXHR3aWR0aDogMS41ZW07XG4vL1x0aGVpZ2h0OiAxLjVlbTtcbi8vfVxuXG5cbi8vLmRhc2gtY29udGFpbmVye1xuLy9cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vfVxuXG4vLy5kaXNjdXNpb257XG4vL1x0cG9zaXRpb246IGFic29sdXRlO1xuLy9cdHRvcDowO2xlZnQ6IDA7XG4vL1x0d2lkdGg6IDEwMCU7XG4vL1x0aGVpZ2h0OiAxMDAlO1xuLy9cdHotaW5kZXg6IDk7XG4vL31cblxuLy8uZmFiLWJ0bntcbi8vXHRwb3NpdGlvbjogYWJzb2x1dGU7XG4vL1x0cmlnaHQ6IDM4cHg7XG4vL1x0Ym90dG9tOiAtMzEycHg7XG4vL31cblxuLy9rdC1kaXNjdXNzaW9ue1xuLy9cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vXHR0b3A6IDA7XG4vL1x0Ym90dG9tOiAwO1xuLy9cdHJpZ2h0OiAwO1xuLy9cdGxlZnQ6IDA7XG4vL31cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/reviewer-pages/dashboard/r_dashboard.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/dashboard/r_dashboard.component.ts ***!
  \*************************************************************************/
/*! exports provided: R_DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R_DashboardComponent", function() { return R_DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");






var R_DashboardComponent = /** @class */ (function () {
    function R_DashboardComponent(layoutConfigService, modalService, resolver, iconRegistry, sanitizer) {
        this.layoutConfigService = layoutConfigService;
        this.modalService = modalService;
        this.resolver = resolver;
        this.modal = false;
        this.testvar = [];
        iconRegistry.addSvgIcon('chat1', sanitizer.bypassSecurityTrustResourceUrl('./assets/media/icons/svg/Communication/Chat_1.svg'));
    }
    R_DashboardComponent.prototype.ngOnInit = function () {
    };
    R_DashboardComponent.prototype.test = function () {
    };
    R_DashboardComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] }
    ]; };
    R_DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-reviewer-dashboard',
            template: __webpack_require__(/*! raw-loader!./r_dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/dashboard/r_dashboard.component.html"),
            styles: [__webpack_require__(/*! ./r_dashboard.component.scss */ "./src/app/views/reviewer-pages/dashboard/r_dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconRegistry"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], R_DashboardComponent);
    return R_DashboardComponent;
}());



/***/ }),

/***/ "./src/app/views/reviewer-pages/discussion/discussion.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/discussion/discussion.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.3); }\n\n.modal1 {\n  background: #fff;\n  margin-top: 3rem;\n  position: relative;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  width: 650px;\n  height: 740px;\n  border-radius: 10px;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 35px;\n  top: -40px; }\n\n.container-fluids {\n  overflow: auto;\n  margin-bottom: -12px; }\n\n.navbar1 {\n  background: #271c5d;\n  color: #fff;\n  margin-bottom: 20px;\n  height: 70px;\n  border-radius: 10px 10px 0 0; }\n\n.navbar1 ul {\n    display: flex; }\n\n.navbar1 ul li.active a {\n      font-weight: bold;\n      color: #333333;\n      cursor: default; }\n\n.navbar1 a {\n    color: #fff;\n    padding: 0.45rem;\n    margin: 0 0.25rem; }\n\n.navbar1 h1 {\n    margin: 0 auto;\n    font-family: inherit; }\n\n.navbar1 span {\n    color: white;\n    font-family: inherit; }\n\n.navbar1 .grid-main {\n    box-sizing: border-box;\n    margin-top: 18px; }\n\n.navbar1 .grid-title {\n    width: 92%;\n    float: left;\n    text-align: center; }\n\n.navbar1 .grid-btn {\n    float: right;\n    margin-right: 20px;\n    margin-top: 13px; }\n\n.navbar1 i {\n    color: white; }\n\n.navbar1 grid-btn {\n  color: white; }\n\n.msgs {\n  padding: 1rem; }\n\n.messages {\n  height: 550px; }\n\n.media-body {\n  flex: 1;\n  margin-left: 10px; }\n\n.msg-footer {\n  background: #F1F1F1;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  border-bottom-right-radius: 10px;\n  border-bottom-left-radius: 10px; }\n\ninput[type=\"text\"] {\n  width: 100%;\n  border: 2px solid #aaa;\n  border-radius: 4px;\n  padding: 8px; }\n\n.inputWithIcon {\n  position: relative; }\n\n.inputWithIcon i {\n  position: absolute;\n  right: 11px;\n  top: 6px;\n  padding: 9px 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3Jldmlld2VyLXBhZ2VzL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQWU7RUFDZixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsOEJBQTZCLEVBQUE7O0FBRzlCO0VBQ0MsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHFDQUE2QjtVQUE3Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUdYO0VBQ0MsY0FBYztFQUNkLG9CQUFvQixFQUFBOztBQUdyQjtFQUNDLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiw0QkFBNEIsRUFBQTs7QUFMN0I7SUFTRSxhQUFhLEVBQUE7O0FBVGY7TUFZRyxpQkFBaUI7TUFDakIsY0FBYztNQUNkLGVBQWUsRUFBQTs7QUFkbEI7SUFtQkUsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTs7QUFyQm5CO0lBeUJFLGNBQWM7SUFDZCxvQkFBb0IsRUFBQTs7QUExQnRCO0lBOEJFLFlBQVk7SUFDWixvQkFBb0IsRUFBQTs7QUEvQnRCO0lBbUNFLHNCQUFzQjtJQUN0QixnQkFBZ0IsRUFBQTs7QUFwQ2xCO0lBd0NFLFVBQVU7SUFDVixXQUFXO0lBQ1gsa0JBQWtCLEVBQUE7O0FBMUNwQjtJQTZDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBOztBQS9DbEI7SUFrREUsWUFBVyxFQUFBOztBQUtiO0VBQ0MsWUFBVyxFQUFBOztBQUtaO0VBQ0MsYUFBYSxFQUFBOztBQUdkO0VBQ0MsYUFBYSxFQUFBOztBQUdkO0VBRUMsT0FBTztFQUNQLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsK0JBQStCLEVBQUE7O0FBR2hDO0VBQ0MsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQU1iO0VBQ0Msa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0Msa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxRQUFRO0VBQ1IsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9yZXZpZXdlci1wYWdlcy9kaXNjdXNzaW9uL2Rpc2N1c3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2Ryb3Age1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRyaWdodDogMDtcblx0bGVmdDogMDtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuMyk7XG59XG5cbi5tb2RhbDEge1xuXHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRtYXJnaW4tdG9wOiAzcmVtO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdHdpZHRoOiA2NTBweDtcblx0aGVpZ2h0OiA3NDBweDtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLWJvdHRvbTogMzVweDtcblx0dG9wOiAtNDBweDtcbn1cblxuLmNvbnRhaW5lci1mbHVpZHN7XG5cdG92ZXJmbG93OiBhdXRvO1xuXHRtYXJnaW4tYm90dG9tOiAtMTJweDtcbn1cblxuLm5hdmJhcjEge1xuXHRiYWNrZ3JvdW5kOiAjMjcxYzVkO1xuXHRjb2xvcjogI2ZmZjtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0aGVpZ2h0OiA3MHB4O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xuXG5cblx0dWwge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cblx0XHRsaS5hY3RpdmUgYSB7XG5cdFx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRcdGNvbG9yOiAjMzMzMzMzO1xuXHRcdFx0Y3Vyc29yOiBkZWZhdWx0O1xuXHRcdH1cblx0fVxuXG5cdGEge1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdHBhZGRpbmc6IDAuNDVyZW07XG5cdFx0bWFyZ2luOiAwIDAuMjVyZW07XG5cdH1cblxuXHRoMXtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRmb250LWZhbWlseTogaW5oZXJpdDtcblx0fVxuXG5cdHNwYW57XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHR9XG5cblx0LmdyaWQtbWFpbntcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdG1hcmdpbi10b3A6IDE4cHg7XG5cdH1cblxuXHQuZ3JpZC10aXRsZXtcblx0XHR3aWR0aDogOTIlO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuXHQuZ3JpZC1idG57XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi1yaWdodDogMjBweDtcblx0XHRtYXJnaW4tdG9wOiAxM3B4O1xuXHR9XG5cdGl7XG5cdFx0Y29sb3I6d2hpdGU7XG5cblx0fVxufVxuXG4ubmF2YmFyMSBncmlkLWJ0bntcblx0Y29sb3I6d2hpdGU7XG59XG5cblxuXG4ubXNncyB7XG5cdHBhZGRpbmc6IDFyZW07XG59XG5cbi5tZXNzYWdlc3tcblx0aGVpZ2h0OiA1NTBweDtcbn1cblxuLm1lZGlhLWJvZHkge1xuXHQtbXMtZmxleDogMTtcblx0ZmxleDogMTtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tc2ctZm9vdGVye1xuXHRiYWNrZ3JvdW5kOiAjRjFGMUYxO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvdHRvbTogMDtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuXHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSB7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXI6IDJweCBzb2xpZCAjYWFhO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHBhZGRpbmc6IDhweDtcblxufVxuXG5cblxuLmlucHV0V2l0aEljb24ge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5pbnB1dFdpdGhJY29uIGkge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAxMXB4O1xuXHR0b3A6IDZweDtcblx0cGFkZGluZzogOXB4IDRweDtcblx0Ly9jb2xvcjogI2FhYTtcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/reviewer-pages/discussion/discussion.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/discussion/discussion.component.ts ***!
  \*************************************************************************/
/*! exports provided: DiscussionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionComponent", function() { return DiscussionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_reviewer_actions_message_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/reviewer/_actions/message.actions */ "./src/app/core/reviewer/_actions/message.actions.ts");
/* harmony import */ var _core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/reviewer/_reducers */ "./src/app/core/reviewer/_reducers/index.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var DiscussionComponent = /** @class */ (function () {
    function DiscussionComponent(store, datepipe) {
        this.store = store;
        this.datepipe = datepipe;
        this.title = 'Discussion';
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DiscussionComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _core_reviewer_actions_message_actions__WEBPACK_IMPORTED_MODULE_3__["MessagesRequested"](4));
        this.loadDiscussionHistory();
        this.reviewer = JSON.parse(sessionStorage.getItem('user'));
    };
    DiscussionComponent.prototype.loadDiscussionHistory = function () {
        this.messages$ = this.store.select(_core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_4__["getMessages"]);
    };
    DiscussionComponent.prototype.submit = function (input) {
        var msg = input.value;
        input.value = '';
        var newMessage = {
            ReviewerID: this.reviewer.id,
            ReviewerName: this.reviewer.fullname,
            Message: msg,
            DTime: this.datepipe.transform(new Date(Date.now()), 'yyyy-MM-dd HH:mm:ss'),
            WorkID: 4
        };
        this.store.dispatch(new _core_reviewer_actions_message_actions__WEBPACK_IMPORTED_MODULE_3__["NewMessageCreated"](newMessage));
    };
    DiscussionComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], DiscussionComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DiscussionComponent.prototype, "close", void 0);
    DiscussionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-discussion',
            template: __webpack_require__(/*! raw-loader!./discussion.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/discussion/discussion.component.html"),
            styles: [__webpack_require__(/*! ./discussion.component.scss */ "./src/app/views/reviewer-pages/discussion/discussion.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]])
    ], DiscussionComponent);
    return DiscussionComponent;
}());



/***/ }),

/***/ "./src/app/views/reviewer-pages/r_pages.module.ts":
/*!********************************************************!*\
  !*** ./src/app/views/reviewer-pages/r_pages.module.ts ***!
  \********************************************************/
/*! exports provided: ReviewerPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerPagesModule", function() { return ReviewerPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _assignment_history_assignment_history_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assignment-history/assignment-history.component */ "./src/app/views/reviewer-pages/assignment-history/assignment-history.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _review_history_review_history_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./review-history/review-history.component */ "./src/app/views/reviewer-pages/review-history/review-history.component.ts");
/* harmony import */ var _theme_reviewer_base_reviewer_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../theme/reviewer-base/reviewer-base.component */ "./src/app/views/theme/reviewer-base/reviewer-base.component.ts");
/* harmony import */ var _dashboard_r_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/r_dashboard.component */ "./src/app/views/reviewer-pages/dashboard/r_dashboard.component.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../theme/theme.module */ "./src/app/views/theme/theme.module.ts");
/* harmony import */ var _core_reviewer_services_reviewer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/reviewer/_services/reviewer.service */ "./src/app/core/reviewer/_services/reviewer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _core_reviewer_effects_review_history_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../core/reviewer/_effects/review-history.effects */ "./src/app/core/reviewer/_effects/review-history.effects.ts");
/* harmony import */ var _core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../core/reviewer/_reducers */ "./src/app/core/reviewer/_reducers/index.ts");
/* harmony import */ var _core_reviewer_effects_assignment_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../core/reviewer/_effects/assignment.effects */ "./src/app/core/reviewer/_effects/assignment.effects.ts");
/* harmony import */ var _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assignment/assignment.component */ "./src/app/views/reviewer-pages/assignment/assignment.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./discussion/discussion.component */ "./src/app/views/reviewer-pages/discussion/discussion.component.ts");
/* harmony import */ var _core_reviewer_effects_message_effects__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../core/reviewer/_effects/message.effects */ "./src/app/core/reviewer/_effects/message.effects.ts");
/* harmony import */ var _core_auth__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../core/auth */ "./src/app/core/auth/index.ts");
/* harmony import */ var _assignment_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./assignment/in-progress/in-progress.component */ "./src/app/views/reviewer-pages/assignment/in-progress/in-progress.component.ts");

// Angular




// Partials

// Pages





















var routes = [
    {
        path: '',
        component: _theme_reviewer_base_reviewer_base_component__WEBPACK_IMPORTED_MODULE_10__["ReviewerBaseComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].Reviewer, _core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].LeadReviewer] }
            },
            {
                path: 'dashboard',
                component: _dashboard_r_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["R_DashboardComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].Reviewer, _core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].LeadReviewer] }
            },
            {
                path: 'assignment_history',
                component: _assignment_history_assignment_history_component__WEBPACK_IMPORTED_MODULE_7__["AssignmentHistoryComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].Reviewer, _core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].LeadReviewer] }
            },
            {
                path: 'reviews',
                component: _review_history_review_history_component__WEBPACK_IMPORTED_MODULE_9__["ReviewHistoryComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].Reviewer, _core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].LeadReviewer] }
            },
            {
                path: 'assignment',
                component: _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_21__["AssignmentComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].Reviewer, _core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].LeadReviewer] }
            },
            {
                path: 'in-progress',
                component: _assignment_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_26__["InProgressComponent"],
                canActivate: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]],
                data: { roles: [_core_auth__WEBPACK_IMPORTED_MODULE_25__["Role"].Reviewer] }
            },
        ]
    }
];
var ReviewerPagesModule = /** @class */ (function () {
    function ReviewerPagesModule() {
    }
    ReviewerPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _assignment_history_assignment_history_component__WEBPACK_IMPORTED_MODULE_7__["AssignmentHistoryComponent"],
                _review_history_review_history_component__WEBPACK_IMPORTED_MODULE_9__["ReviewHistoryComponent"],
                _dashboard_r_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["R_DashboardComponent"],
                _assignment_assignment_component__WEBPACK_IMPORTED_MODULE_21__["AssignmentComponent"],
                _discussion_discussion_component__WEBPACK_IMPORTED_MODULE_23__["DiscussionComponent"],
                _assignment_in_progress_in_progress_component__WEBPACK_IMPORTED_MODULE_26__["InProgressComponent"]
            ],
            exports: [
            // DiscussionComponent
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_6__["CoreModule"],
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_5__["PartialsModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_12__["ThemeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_15__["PerfectScrollbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatPaginatorModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_16__["StoreModule"].forFeature('reviewer', _core_reviewer_reducers__WEBPACK_IMPORTED_MODULE_19__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_17__["EffectsModule"].forFeature([_core_reviewer_effects_review_history_effects__WEBPACK_IMPORTED_MODULE_18__["ReviewHistoryEffects"], _core_reviewer_effects_assignment_effects__WEBPACK_IMPORTED_MODULE_20__["AssignmentEffects"], _core_reviewer_effects_message_effects__WEBPACK_IMPORTED_MODULE_24__["MessageEffects"]]),
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatProgressSpinnerModule"],
            ],
            providers: [
                _core_reviewer_services_reviewer_service__WEBPACK_IMPORTED_MODULE_13__["ReviewerService"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModal"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"],
                _core_auth__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"]
            ]
        })
    ], ReviewerPagesModule);
    return ReviewerPagesModule;
}());



/***/ }),

/***/ "./src/app/views/reviewer-pages/review-history/review-history.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/review-history/review-history.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .mat-table-sticky {\n  z-index: 0 !important; }\n\n:host ::ng-deep .mat-header-cell {\n  z-index: 2 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3Jldmlld2VyLXBhZ2VzL3Jldmlldy1oaXN0b3J5L3Jldmlldy1oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0cscUJBQXFCLEVBQUE7O0FBSHhCO0VBTXFCLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvcmV2aWV3ZXItcGFnZXMvcmV2aWV3LWhpc3RvcnkvcmV2aWV3LWhpc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdDo6bmctZGVlcCB7XG5cdFx0Lm1hdC10YWJsZS1zdGlja3kge1xuXHRcdFx0ei1pbmRleDogMCAhaW1wb3J0YW50O1xuXHRcdH1cblxuXHRcdC5tYXQtaGVhZGVyLWNlbGwgeyB6LWluZGV4OiAyICFpbXBvcnRhbnQ7fVxuXG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/reviewer-pages/review-history/review-history.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/reviewer-pages/review-history/review-history.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ReviewHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewHistoryComponent", function() { return ReviewHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_reviewer_actions_review_history_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/reviewer/_actions/review-history.actions */ "./src/app/core/reviewer/_actions/review-history.actions.ts");
/* harmony import */ var _core_reviewer_reducers___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/reviewer/_reducers/ */ "./src/app/core/reviewer/_reducers/index.ts");






var ReviewHistoryComponent = /** @class */ (function () {
    function ReviewHistoryComponent(store ////////////////////////////////////////////////
    ) {
        this.store = store;
        this.displayedColumns = ['id', 'Title', 'DateReviewed', 'Score', 'Action'];
        // Subscriptions
        this.subscriptions = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
    }
    ReviewHistoryComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _core_reviewer_actions_review_history_actions__WEBPACK_IMPORTED_MODULE_4__["ReviewHistoryRequested"]());
        this.loadItems();
    };
    ReviewHistoryComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
    };
    /**
     * Load items
     *
     * @param firstLoad: boolean
     */
    ReviewHistoryComponent.prototype.loadItems = function (firstLoad) {
        var _this = this;
        if (firstLoad === void 0) { firstLoad = false; }
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.store.select(_core_reviewer_reducers___WEBPACK_IMPORTED_MODULE_5__["getAllHistoryLoaded"]).subscribe(function (isLoaded) {
            if (isLoaded) {
                var subc$ = _this.store.select(_core_reviewer_reducers___WEBPACK_IMPORTED_MODULE_5__["getAllHistory"])
                    .subscribe(function (res) {
                    _this.dataSource.data = res;
                    // console.log(res);
                });
                _this.subscriptions.push(subc$);
            }
        });
        // this.reviewHistory$=this.store.pipe(select('reviewHistory1'));
        // this.store.pipe(select('reviewHistory1')).subscribe(
        // 	res=>{
        // 		console.log("RES ",res);
        //
        // 	}
        // );
        // this.reviewHistory$.subscribe(res => {
        //
        // 		console.log("RES ",res);
        // 		// this.dataSource.data = res;
        // 		this.dataSource.sort = this.sort;
        // 		this.dataSource.paginator = this.paginator;
        // 	},
        // 	error => {
        // 		console.log('There was an error while retrieving review history !!!' + error);
        // 	}
        // );
        // this.dataSource.data = this.reviewHistory$.reviewHistory;
        // this.reviewerService.getAllReviews()
        // 	.subscribe(res => {
        // 			this.dataSource.data = res;
        // 			this.dataSource.sort = this.sort;
        // 			this.dataSource.paginator = this.paginator;
        // 		},
        // 		error => {
        // 			console.log('There was an error while retrieving review history !!!' + error);
        // 		}
        // 	);
    };
    ReviewHistoryComponent.prototype.applyFilter = function (value) {
    };
    ReviewHistoryComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ReviewHistoryComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ReviewHistoryComponent.prototype, "sort", void 0);
    ReviewHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-review-history',
            template: __webpack_require__(/*! raw-loader!./review-history.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/reviewer-pages/review-history/review-history.component.html"),
            styles: [__webpack_require__(/*! ./review-history.component.scss */ "./src/app/views/reviewer-pages/review-history/review-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ReviewHistoryComponent);
    return ReviewHistoryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-views-reviewer-pages-r_pages-module.js.map
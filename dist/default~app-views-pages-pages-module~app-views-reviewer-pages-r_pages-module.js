(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-views-pages-pages-module~app-views-reviewer-pages-r_pages-module"],{

/***/ "./node_modules/ngx-daterangepicker-material/fesm5/ngx-daterangepicker-material.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ngx-daterangepicker-material/fesm5/ngx-daterangepicker-material.js ***!
  \*****************************************************************************************/
/*! exports provided: DaterangepickerComponent, DaterangepickerDirective, DefaultLocaleConfig, LOCALE_CONFIG, LocaleService, NgxDaterangepickerMd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaterangepickerComponent", function() { return DaterangepickerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DaterangepickerDirective", function() { return DaterangepickerDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLocaleConfig", function() { return DefaultLocaleConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCALE_CONFIG", function() { return LOCALE_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocaleService", function() { return LocaleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDaterangepickerMd", function() { return NgxDaterangepickerMd; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);






var moment = moment__WEBPACK_IMPORTED_MODULE_4__;
var LOCALE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('daterangepicker.config');
/**
 *  DefaultLocaleConfig
 */
var DefaultLocaleConfig = {
    direction: 'ltr',
    separator: ' - ',
    weekLabel: 'W',
    applyLabel: 'Apply',
    cancelLabel: 'Cancel',
    clearLabel: 'Clear',
    customRangeLabel: 'Custom range',
    daysOfWeek: moment.weekdaysMin(),
    monthNames: moment.monthsShort(),
    firstDay: moment.localeData().firstDayOfWeek()
};

var LocaleService = /** @class */ (function () {
    function LocaleService(_config) {
        this._config = _config;
    }
    Object.defineProperty(LocaleService.prototype, "config", {
        get: function () {
            if (!this._config) {
                return DefaultLocaleConfig;
            }
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, DefaultLocaleConfig, this._config);
        },
        enumerable: true,
        configurable: true
    });
    LocaleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(LOCALE_CONFIG)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], LocaleService);
    return LocaleService;
}());

var moment$1 = moment__WEBPACK_IMPORTED_MODULE_4__;
var SideEnum;
(function (SideEnum) {
    SideEnum["left"] = "left";
    SideEnum["right"] = "right";
})(SideEnum || (SideEnum = {}));
var DaterangepickerComponent = /** @class */ (function () {
    function DaterangepickerComponent(el, _ref, _localeService) {
        this.el = el;
        this._ref = _ref;
        this._localeService = _localeService;
        this._old = { start: null, end: null };
        this.calendarVariables = { left: {}, right: {} };
        this.timepickerVariables = { left: {}, right: {} };
        this.daterangepicker = { start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](), end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]() };
        this.applyBtn = { disabled: false };
        this.startDate = moment$1().startOf('day');
        this.endDate = moment$1().endOf('day');
        this.dateLimit = null;
        // used in template for compile time support of enum values.
        this.sideEnum = SideEnum;
        this.minDate = null;
        this.maxDate = null;
        this.autoApply = false;
        this.singleDatePicker = false;
        this.showDropdowns = false;
        this.showWeekNumbers = false;
        this.showISOWeekNumbers = false;
        this.linkedCalendars = false;
        this.autoUpdateInput = true;
        this.alwaysShowCalendars = false;
        this.maxSpan = false;
        this.lockStartDate = false;
        // timepicker variables
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        // end of timepicker variables
        this.showClearButton = false;
        this.firstMonthDayClass = null;
        this.lastMonthDayClass = null;
        this.emptyWeekRowClass = null;
        this.firstDayOfNextMonthClass = null;
        this.lastDayOfPreviousMonthClass = null;
        this._locale = {};
        // custom ranges
        this._ranges = {};
        this.showCancel = false;
        this.keepCalendarOpeningWithRange = false;
        this.showRangeLabelOnInput = false;
        this.customRangeDirection = false;
        this.rangesArray = [];
        // some state information
        this.isShown = false;
        this.inline = true;
        this.leftCalendar = {};
        this.rightCalendar = {};
        this.showCalInRanges = false;
        this.options = {}; // should get some opt from user
        this.closeOnAutoApply = true;
        this.choosedDate = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.datesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.startDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.endDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    DaterangepickerComponent_1 = DaterangepickerComponent;
    Object.defineProperty(DaterangepickerComponent.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (value) {
            this._locale = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._localeService.config, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerComponent.prototype, "ranges", {
        get: function () {
            return this._ranges;
        },
        set: function (value) {
            this._ranges = value;
            this.renderRanges();
        },
        enumerable: true,
        configurable: true
    });
    DaterangepickerComponent.prototype.ngOnInit = function () {
        this._buildLocale();
        var daysOfWeek = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(this.locale.daysOfWeek);
        if (this.locale.firstDay !== 0) {
            var iterator = this.locale.firstDay;
            while (iterator > 0) {
                daysOfWeek.push(daysOfWeek.shift());
                iterator--;
            }
        }
        this.locale.daysOfWeek = daysOfWeek;
        if (this.inline) {
            this._old.start = this.startDate.clone();
            this._old.end = this.endDate.clone();
        }
        if (this.startDate && this.timePicker) {
            this.setStartDate(this.startDate);
            this.renderTimePicker(SideEnum.left);
        }
        if (this.endDate && this.timePicker) {
            this.setEndDate(this.endDate);
            this.renderTimePicker(SideEnum.right);
        }
        this.updateMonthsInView();
        this.renderCalendar(SideEnum.left);
        this.renderCalendar(SideEnum.right);
        this.renderRanges();
    };
    DaterangepickerComponent.prototype.renderRanges = function () {
        this.rangesArray = [];
        var start, end;
        if (typeof this.ranges === 'object') {
            for (var range in this.ranges) {
                if (this.ranges[range]) {
                    if (typeof this.ranges[range][0] === 'string') {
                        start = moment$1(this.ranges[range][0], this.locale.format);
                    }
                    else {
                        start = moment$1(this.ranges[range][0]);
                    }
                    if (typeof this.ranges[range][1] === 'string') {
                        end = moment$1(this.ranges[range][1], this.locale.format);
                    }
                    else {
                        end = moment$1(this.ranges[range][1]);
                    }
                    // If the start or end date exceed those allowed by the minDate or maxSpan
                    // options, shorten the range to the allowable period.
                    if (this.minDate && start.isBefore(this.minDate)) {
                        start = this.minDate.clone();
                    }
                    var maxDate = this.maxDate;
                    if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) {
                        maxDate = start.clone().add(this.maxSpan);
                    }
                    if (maxDate && end.isAfter(maxDate)) {
                        end = maxDate.clone();
                    }
                    // If the end of the range is before the minimum or the start of the range is
                    // after the maximum, don't display this range option at all.
                    if ((this.minDate && end.isBefore(this.minDate, this.timePicker ? 'minute' : 'day'))
                        || (maxDate && start.isAfter(maxDate, this.timePicker ? 'minute' : 'day'))) {
                        continue;
                    }
                    // Support unicode chars in the range names.
                    var elem = document.createElement('textarea');
                    elem.innerHTML = range;
                    var rangeHtml = elem.value;
                    this.ranges[rangeHtml] = [start, end];
                }
            }
            for (var range in this.ranges) {
                if (this.ranges[range]) {
                    this.rangesArray.push(range);
                }
            }
            if (this.showCustomRangeLabel) {
                this.rangesArray.push(this.locale.customRangeLabel);
            }
            this.showCalInRanges = (!this.rangesArray.length) || this.alwaysShowCalendars;
            if (!this.timePicker) {
                this.startDate = this.startDate.startOf('day');
                this.endDate = this.endDate.endOf('day');
            }
        }
    };
    DaterangepickerComponent.prototype.renderTimePicker = function (side) {
        if (side === SideEnum.right && !this.endDate) {
            return;
        }
        var selected, minDate;
        var maxDate = this.maxDate;
        if (side === SideEnum.left) {
            selected = this.startDate.clone(),
                minDate = this.minDate;
        }
        else if (side === SideEnum.right) {
            selected = this.endDate.clone(),
                minDate = this.startDate;
        }
        var start = this.timePicker24Hour ? 0 : 1;
        var end = this.timePicker24Hour ? 23 : 12;
        this.timepickerVariables[side] = {
            hours: [],
            minutes: [],
            minutesLabel: [],
            seconds: [],
            secondsLabel: [],
            disabledHours: [],
            disabledMinutes: [],
            disabledSeconds: [],
            selectedHour: 0,
            selectedMinute: 0,
            selectedSecond: 0,
        };
        // generate hours
        for (var i = start; i <= end; i++) {
            var i_in_24 = i;
            if (!this.timePicker24Hour) {
                i_in_24 = selected.hour() >= 12 ? (i === 12 ? 12 : i + 12) : (i === 12 ? 0 : i);
            }
            var time = selected.clone().hour(i_in_24);
            var disabled = false;
            if (minDate && time.minute(59).isBefore(minDate)) {
                disabled = true;
            }
            if (maxDate && time.minute(0).isAfter(maxDate)) {
                disabled = true;
            }
            this.timepickerVariables[side].hours.push(i);
            if (i_in_24 === selected.hour() && !disabled) {
                this.timepickerVariables[side].selectedHour = i;
            }
            else if (disabled) {
                this.timepickerVariables[side].disabledHours.push(i);
            }
        }
        // generate minutes
        for (var i = 0; i < 60; i += this.timePickerIncrement) {
            var padded = i < 10 ? '0' + i : i;
            var time = selected.clone().minute(i);
            var disabled = false;
            if (minDate && time.second(59).isBefore(minDate)) {
                disabled = true;
            }
            if (maxDate && time.second(0).isAfter(maxDate)) {
                disabled = true;
            }
            this.timepickerVariables[side].minutes.push(i);
            this.timepickerVariables[side].minutesLabel.push(padded);
            if (selected.minute() === i && !disabled) {
                this.timepickerVariables[side].selectedMinute = i;
            }
            else if (disabled) {
                this.timepickerVariables[side].disabledMinutes.push(i);
            }
        }
        // generate seconds
        if (this.timePickerSeconds) {
            for (var i = 0; i < 60; i++) {
                var padded = i < 10 ? '0' + i : i;
                var time = selected.clone().second(i);
                var disabled = false;
                if (minDate && time.isBefore(minDate)) {
                    disabled = true;
                }
                if (maxDate && time.isAfter(maxDate)) {
                    disabled = true;
                }
                this.timepickerVariables[side].seconds.push(i);
                this.timepickerVariables[side].secondsLabel.push(padded);
                if (selected.second() === i && !disabled) {
                    this.timepickerVariables[side].selectedSecond = i;
                }
                else if (disabled) {
                    this.timepickerVariables[side].disabledSeconds.push(i);
                }
            }
        }
        // generate AM/PM
        if (!this.timePicker24Hour) {
            if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) {
                this.timepickerVariables[side].amDisabled = true;
            }
            if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) {
                this.timepickerVariables[side].pmDisabled = true;
            }
            if (selected.hour() >= 12) {
                this.timepickerVariables[side].ampmModel = 'PM';
            }
            else {
                this.timepickerVariables[side].ampmModel = 'AM';
            }
        }
        this.timepickerVariables[side].selected = selected;
    };
    DaterangepickerComponent.prototype.renderCalendar = function (side) {
        var mainCalendar = (side === SideEnum.left) ? this.leftCalendar : this.rightCalendar;
        var month = mainCalendar.month.month();
        var year = mainCalendar.month.year();
        var hour = mainCalendar.month.hour();
        var minute = mainCalendar.month.minute();
        var second = mainCalendar.month.second();
        var daysInMonth = moment$1([year, month]).daysInMonth();
        var firstDay = moment$1([year, month, 1]);
        var lastDay = moment$1([year, month, daysInMonth]);
        var lastMonth = moment$1(firstDay).subtract(1, 'month').month();
        var lastYear = moment$1(firstDay).subtract(1, 'month').year();
        var daysInLastMonth = moment$1([lastYear, lastMonth]).daysInMonth();
        var dayOfWeek = firstDay.day();
        // initialize a 6 rows x 7 columns array for the calendar
        var calendar = [];
        calendar.firstDay = firstDay;
        calendar.lastDay = lastDay;
        for (var i = 0; i < 6; i++) {
            calendar[i] = [];
        }
        // populate the calendar with date objects
        var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
        if (startDay > daysInLastMonth) {
            startDay -= 7;
        }
        if (dayOfWeek === this.locale.firstDay) {
            startDay = daysInLastMonth - 6;
        }
        var curDate = moment$1([lastYear, lastMonth, startDay, 12, minute, second]);
        for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment$1(curDate).add(24, 'hour')) {
            if (i > 0 && col % 7 === 0) {
                col = 0;
                row++;
            }
            calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
            curDate.hour(12);
            if (this.minDate && calendar[row][col].format('YYYY-MM-DD') === this.minDate.format('YYYY-MM-DD') &&
                calendar[row][col].isBefore(this.minDate) && side === 'left') {
                calendar[row][col] = this.minDate.clone();
            }
            if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') === this.maxDate.format('YYYY-MM-DD') &&
                calendar[row][col].isAfter(this.maxDate) && side === 'right') {
                calendar[row][col] = this.maxDate.clone();
            }
        }
        // make the calendar object available to hoverDate/clickDate
        if (side === SideEnum.left) {
            this.leftCalendar.calendar = calendar;
        }
        else {
            this.rightCalendar.calendar = calendar;
        }
        //
        // Display the calendar
        //
        var minDate = side === 'left' ? this.minDate : this.startDate;
        var maxDate = this.maxDate;
        // adjust maxDate to reflect the dateLimit setting in order to
        // grey out end dates beyond the dateLimit
        if (this.endDate === null && this.dateLimit) {
            var maxLimit = this.startDate.clone().add(this.dateLimit, 'day').endOf('day');
            if (!maxDate || maxLimit.isBefore(maxDate)) {
                maxDate = maxLimit;
            }
        }
        this.calendarVariables[side] = {
            month: month,
            year: year,
            hour: hour,
            minute: minute,
            second: second,
            daysInMonth: daysInMonth,
            firstDay: firstDay,
            lastDay: lastDay,
            lastMonth: lastMonth,
            lastYear: lastYear,
            daysInLastMonth: daysInLastMonth,
            dayOfWeek: dayOfWeek,
            // other vars
            calRows: Array.from(Array(6).keys()),
            calCols: Array.from(Array(7).keys()),
            classes: {},
            minDate: minDate,
            maxDate: maxDate,
            calendar: calendar
        };
        if (this.showDropdowns) {
            var currentMonth = calendar[1][1].month();
            var currentYear = calendar[1][1].year();
            var realCurrentYear = moment$1().year();
            var maxYear = (maxDate && maxDate.year()) || (realCurrentYear + 5);
            var minYear = (minDate && minDate.year()) || (realCurrentYear - 50);
            var inMinYear = currentYear === minYear;
            var inMaxYear = currentYear === maxYear;
            var years = [];
            for (var y = minYear; y <= maxYear; y++) {
                years.push(y);
            }
            this.calendarVariables[side].dropdowns = {
                currentMonth: currentMonth,
                currentYear: currentYear,
                maxYear: maxYear,
                minYear: minYear,
                inMinYear: inMinYear,
                inMaxYear: inMaxYear,
                monthArrays: Array.from(Array(12).keys()),
                yearArrays: years
            };
        }
        this._buildCells(calendar, side);
    };
    DaterangepickerComponent.prototype.setStartDate = function (startDate) {
        if (typeof startDate === 'string') {
            this.startDate = moment$1(startDate, this.locale.format);
        }
        if (typeof startDate === 'object') {
            this.startDate = moment$1(startDate);
        }
        if (!this.timePicker) {
            this.startDate = this.startDate.startOf('day');
        }
        if (this.timePicker && this.timePickerIncrement) {
            this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }
        if (this.minDate && this.startDate.isBefore(this.minDate)) {
            this.startDate = this.minDate.clone();
            if (this.timePicker && this.timePickerIncrement) {
                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
        }
        if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
            this.startDate = this.maxDate.clone();
            if (this.timePicker && this.timePickerIncrement) {
                this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
            }
        }
        if (!this.isShown) {
            this.updateElement();
        }
        this.startDateChanged.emit({ startDate: this.startDate });
        this.updateMonthsInView();
    };
    DaterangepickerComponent.prototype.setEndDate = function (endDate) {
        if (typeof endDate === 'string') {
            this.endDate = moment$1(endDate, this.locale.format);
        }
        if (typeof endDate === 'object') {
            this.endDate = moment$1(endDate);
        }
        if (!this.timePicker) {
            this.endDate = this.endDate.add(1, 'd').startOf('day').subtract(1, 'second');
        }
        if (this.timePicker && this.timePickerIncrement) {
            this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
        }
        if (this.endDate.isBefore(this.startDate)) {
            this.endDate = this.startDate.clone();
        }
        if (this.maxDate && this.endDate.isAfter(this.maxDate)) {
            this.endDate = this.maxDate.clone();
        }
        if (this.dateLimit && this.startDate.clone().add(this.dateLimit, 'day').isBefore(this.endDate)) {
            this.endDate = this.startDate.clone().add(this.dateLimit, 'day');
        }
        if (!this.isShown) ;
        this.endDateChanged.emit({ endDate: this.endDate });
        this.updateMonthsInView();
    };
    DaterangepickerComponent.prototype.isInvalidDate = function (date) {
        return false;
    };
    DaterangepickerComponent.prototype.isCustomDate = function (date) {
        return false;
    };
    DaterangepickerComponent.prototype.updateView = function () {
        if (this.timePicker) {
            this.renderTimePicker(SideEnum.left);
            this.renderTimePicker(SideEnum.right);
        }
        this.updateMonthsInView();
        this.updateCalendars();
    };
    DaterangepickerComponent.prototype.updateMonthsInView = function () {
        if (this.endDate) {
            // if both dates are visible already, do nothing
            if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
                ((this.startDate && this.leftCalendar && this.startDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM')) ||
                    (this.startDate && this.rightCalendar && this.startDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM')))
                &&
                    (this.endDate.format('YYYY-MM') === this.leftCalendar.month.format('YYYY-MM') ||
                        this.endDate.format('YYYY-MM') === this.rightCalendar.month.format('YYYY-MM'))) {
                return;
            }
            if (this.startDate) {
                this.leftCalendar.month = this.startDate.clone().date(2);
                if (!this.linkedCalendars && (this.endDate.month() !== this.startDate.month() ||
                    this.endDate.year() !== this.startDate.year())) {
                    this.rightCalendar.month = this.endDate.clone().date(2);
                }
                else {
                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
                }
            }
        }
        else {
            if (this.leftCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM') &&
                this.rightCalendar.month.format('YYYY-MM') !== this.startDate.format('YYYY-MM')) {
                this.leftCalendar.month = this.startDate.clone().date(2);
                this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
            }
        }
        if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
            this.rightCalendar.month = this.maxDate.clone().date(2);
            this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
        }
    };
    /**
     *  This is responsible for updating the calendars
     */
    DaterangepickerComponent.prototype.updateCalendars = function () {
        this.renderCalendar(SideEnum.left);
        this.renderCalendar(SideEnum.right);
        if (this.endDate === null) {
            return;
        }
        this.calculateChosenLabel();
    };
    DaterangepickerComponent.prototype.updateElement = function () {
        if (!this.singleDatePicker && this.autoUpdateInput) {
            if (this.startDate && this.endDate) {
                // if we use ranges and should show range label on input
                if (this.rangesArray.length && this.showRangeLabelOnInput === true && this.chosenRange &&
                    this.locale.customRangeLabel !== this.chosenRange) {
                    this.chosenLabel = this.chosenRange;
                }
                else {
                    this.chosenLabel = this.startDate.format(this.locale.format) +
                        this.locale.separator + this.endDate.format(this.locale.format);
                }
            }
        }
        else if (this.autoUpdateInput) {
            this.chosenLabel = this.startDate.format(this.locale.format);
        }
    };
    DaterangepickerComponent.prototype.remove = function () {
        this.isShown = false;
    };
    /**
     * this should calculate the label
     */
    DaterangepickerComponent.prototype.calculateChosenLabel = function () {
        if (!this.locale || !this.locale.separator) {
            this._buildLocale();
        }
        var customRange = true;
        var i = 0;
        if (this.rangesArray.length > 0) {
            for (var range in this.ranges) {
                if (this.ranges[range]) {
                    if (this.timePicker) {
                        var format = this.timePickerSeconds ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD HH:mm';
                        // ignore times when comparing dates if time picker seconds is not enabled
                        if (this.startDate.format(format) === this.ranges[range][0].format(format)
                            && this.endDate.format(format) === this.ranges[range][1].format(format)) {
                            customRange = false;
                            this.chosenRange = this.rangesArray[i];
                            break;
                        }
                    }
                    else {
                        // ignore times when comparing dates if time picker is not enabled
                        if (this.startDate.format('YYYY-MM-DD') === this.ranges[range][0].format('YYYY-MM-DD')
                            && this.endDate.format('YYYY-MM-DD') === this.ranges[range][1].format('YYYY-MM-DD')) {
                            customRange = false;
                            this.chosenRange = this.rangesArray[i];
                            break;
                        }
                    }
                    i++;
                }
            }
            if (customRange) {
                if (this.showCustomRangeLabel) {
                    this.chosenRange = this.locale.customRangeLabel;
                }
                else {
                    this.chosenRange = null;
                }
                // if custom label: show calendar
                this.showCalInRanges = true;
            }
        }
        this.updateElement();
    };
    DaterangepickerComponent.prototype.clickApply = function (e) {
        if (!this.singleDatePicker && this.startDate && !this.endDate) {
            this.endDate = this.startDate.clone();
            this.calculateChosenLabel();
        }
        if (this.isInvalidDate && this.startDate && this.endDate) {
            // get if there are invalid date between range
            var d = this.startDate.clone();
            while (d.isBefore(this.endDate)) {
                if (this.isInvalidDate(d)) {
                    this.endDate = d.subtract(1, 'days');
                    this.calculateChosenLabel();
                    break;
                }
                d.add(1, 'days');
            }
        }
        if (this.chosenLabel) {
            this.choosedDate.emit({ chosenLabel: this.chosenLabel, startDate: this.startDate, endDate: this.endDate });
        }
        this.datesUpdated.emit({ startDate: this.startDate, endDate: this.endDate });
        if (e || (this.closeOnAutoApply && !e)) {
            this.hide();
        }
    };
    DaterangepickerComponent.prototype.clickCancel = function (e) {
        this.startDate = this._old.start;
        this.endDate = this._old.end;
        if (this.inline) {
            this.updateView();
        }
        this.hide();
    };
    /**
     * called when month is changed
     * @param monthEvent get value in event.target.value
     * @param side left or right
     */
    DaterangepickerComponent.prototype.monthChanged = function (monthEvent, side) {
        var year = this.calendarVariables[side].dropdowns.currentYear;
        var month = parseInt(monthEvent.target.value, 10);
        this.monthOrYearChanged(month, year, side);
    };
    /**
     * called when year is changed
     * @param yearEvent get value in event.target.value
     * @param side left or right
     */
    DaterangepickerComponent.prototype.yearChanged = function (yearEvent, side) {
        var month = this.calendarVariables[side].dropdowns.currentMonth;
        var year = parseInt(yearEvent.target.value, 10);
        this.monthOrYearChanged(month, year, side);
    };
    /**
     * called when time is changed
     * @param timeEvent  an event
     * @param side left or right
     */
    DaterangepickerComponent.prototype.timeChanged = function (timeEvent, side) {
        var hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
        var minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
        var second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;
        if (!this.timePicker24Hour) {
            var ampm = this.timepickerVariables[side].ampmModel;
            if (ampm === 'PM' && hour < 12) {
                hour += 12;
            }
            if (ampm === 'AM' && hour === 12) {
                hour = 0;
            }
        }
        if (side === SideEnum.left) {
            var start = this.startDate.clone();
            start.hour(hour);
            start.minute(minute);
            start.second(second);
            this.setStartDate(start);
            if (this.singleDatePicker) {
                this.endDate = this.startDate.clone();
            }
            else if (this.endDate && this.endDate.format('YYYY-MM-DD') === start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
                this.setEndDate(start.clone());
            }
        }
        else if (this.endDate) {
            var end = this.endDate.clone();
            end.hour(hour);
            end.minute(minute);
            end.second(second);
            this.setEndDate(end);
        }
        // update the calendars so all clickable dates reflect the new time component
        this.updateCalendars();
        // re-render the time pickers because changing one selection can affect what's enabled in another
        this.renderTimePicker(SideEnum.left);
        this.renderTimePicker(SideEnum.right);
        if (this.autoApply) {
            this.clickApply();
        }
    };
    /**
     *  call when month or year changed
     * @param month month number 0 -11
     * @param year year eg: 1995
     * @param side left or right
     */
    DaterangepickerComponent.prototype.monthOrYearChanged = function (month, year, side) {
        var isLeft = side === SideEnum.left;
        if (!isLeft) {
            if (year < this.startDate.year() || (year === this.startDate.year() && month < this.startDate.month())) {
                month = this.startDate.month();
                year = this.startDate.year();
            }
        }
        if (this.minDate) {
            if (year < this.minDate.year() || (year === this.minDate.year() && month < this.minDate.month())) {
                month = this.minDate.month();
                year = this.minDate.year();
            }
        }
        if (this.maxDate) {
            if (year > this.maxDate.year() || (year === this.maxDate.year() && month > this.maxDate.month())) {
                month = this.maxDate.month();
                year = this.maxDate.year();
            }
        }
        this.calendarVariables[side].dropdowns.currentYear = year;
        this.calendarVariables[side].dropdowns.currentMonth = month;
        if (isLeft) {
            this.leftCalendar.month.month(month).year(year);
            if (this.linkedCalendars) {
                this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
            }
        }
        else {
            this.rightCalendar.month.month(month).year(year);
            if (this.linkedCalendars) {
                this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
            }
        }
        this.updateCalendars();
    };
    /**
     * Click on previous month
     * @param side left or right calendar
     */
    DaterangepickerComponent.prototype.clickPrev = function (side) {
        if (side === SideEnum.left) {
            this.leftCalendar.month.subtract(1, 'month');
            if (this.linkedCalendars) {
                this.rightCalendar.month.subtract(1, 'month');
            }
        }
        else {
            this.rightCalendar.month.subtract(1, 'month');
        }
        this.updateCalendars();
    };
    /**
     * Click on next month
     * @param side left or right calendar
     */
    DaterangepickerComponent.prototype.clickNext = function (side) {
        if (side === SideEnum.left) {
            this.leftCalendar.month.add(1, 'month');
        }
        else {
            this.rightCalendar.month.add(1, 'month');
            if (this.linkedCalendars) {
                this.leftCalendar.month.add(1, 'month');
            }
        }
        this.updateCalendars();
    };
    /**
     * When selecting a date
     * @param e event: get value by e.target.value
     * @param side left or right
     * @param row row position of the current date clicked
     * @param col col position of the current date clicked
     */
    DaterangepickerComponent.prototype.clickDate = function (e, side, row, col) {
        if (e.target.tagName === 'TD') {
            if (!e.target.classList.contains('available')) {
                return;
            }
        }
        else if (e.target.tagName === 'SPAN') {
            if (!e.target.parentElement.classList.contains('available')) {
                return;
            }
        }
        if (this.rangesArray.length) {
            this.chosenRange = this.locale.customRangeLabel;
        }
        var date = side === SideEnum.left ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];
        if ((this.endDate || (date.isBefore(this.startDate, 'day')
            && this.customRangeDirection === false)) && this.lockStartDate === false) { // picking start
            if (this.timePicker) {
                date = this._getDateWithTime(date, SideEnum.left);
            }
            this.endDate = null;
            this.setStartDate(date.clone());
        }
        else if (!this.endDate && date.isBefore(this.startDate) && this.customRangeDirection === false) {
            // special case: clicking the same date for start/end,
            // but the time of the end date is before the start date
            this.setEndDate(this.startDate.clone());
        }
        else { // picking end
            if (this.timePicker) {
                date = this._getDateWithTime(date, SideEnum.right);
            }
            if (date.isBefore(this.startDate, 'day') === true && this.customRangeDirection === true) {
                this.setEndDate(this.startDate);
                this.setStartDate(date.clone());
            }
            else {
                this.setEndDate(date.clone());
            }
            if (this.autoApply) {
                this.calculateChosenLabel();
                this.clickApply();
            }
        }
        if (this.singleDatePicker) {
            this.setEndDate(this.startDate);
            this.updateElement();
            if (this.autoApply) {
                this.clickApply();
            }
        }
        this.updateView();
        if (this.autoApply && this.startDate && this.endDate) {
            this.clickApply();
        }
        // This is to cancel the blur event handler if the mouse was in one of the inputs
        e.stopPropagation();
    };
    /**
     *  Click on the custom range
     * @param e: Event
     * @param label
     */
    DaterangepickerComponent.prototype.clickRange = function (e, label) {
        this.chosenRange = label;
        if (label === this.locale.customRangeLabel) {
            this.isShown = true; // show calendars
            this.showCalInRanges = true;
        }
        else {
            var dates = this.ranges[label];
            this.startDate = dates[0].clone();
            this.endDate = dates[1].clone();
            if (this.showRangeLabelOnInput && label !== this.locale.customRangeLabel) {
                this.chosenLabel = label;
            }
            else {
                this.calculateChosenLabel();
            }
            this.showCalInRanges = (!this.rangesArray.length) || this.alwaysShowCalendars;
            if (!this.timePicker) {
                this.startDate.startOf('day');
                this.endDate.endOf('day');
            }
            if (!this.alwaysShowCalendars) {
                this.isShown = false; // hide calendars
            }
            this.rangeClicked.emit({ label: label, dates: dates });
            if (!this.keepCalendarOpeningWithRange) {
                this.clickApply();
            }
            else {
                if (!this.alwaysShowCalendars) {
                    return this.clickApply();
                }
                if (this.maxDate && this.maxDate.isSame(dates[0], 'month')) {
                    this.rightCalendar.month.month(dates[0].month());
                    this.rightCalendar.month.year(dates[0].year());
                    this.leftCalendar.month.month(dates[0].month() - 1);
                    this.leftCalendar.month.year(dates[1].year());
                }
                else {
                    this.leftCalendar.month.month(dates[0].month());
                    this.leftCalendar.month.year(dates[0].year());
                    // get the next year
                    var nextMonth = dates[0].clone().add(1, 'month');
                    this.rightCalendar.month.month(nextMonth.month());
                    this.rightCalendar.month.year(nextMonth.year());
                }
                this.updateCalendars();
                if (this.timePicker) {
                    this.renderTimePicker(SideEnum.left);
                    this.renderTimePicker(SideEnum.right);
                }
            }
        }
    };
    DaterangepickerComponent.prototype.show = function (e) {
        if (this.isShown) {
            return;
        }
        this._old.start = this.startDate.clone();
        this._old.end = this.endDate.clone();
        this.isShown = true;
        this.updateView();
    };
    DaterangepickerComponent.prototype.hide = function (e) {
        if (!this.isShown) {
            return;
        }
        // incomplete date selection, revert to last values
        if (!this.endDate) {
            if (this._old.start) {
                this.startDate = this._old.start.clone();
            }
            if (this._old.end) {
                this.endDate = this._old.end.clone();
            }
        }
        // if a new date range was selected, invoke the user callback function
        if (!this.startDate.isSame(this._old.start) || !this.endDate.isSame(this._old.end)) ;
        // if picker is attached to a text input, update it
        this.updateElement();
        this.isShown = false;
        this._ref.detectChanges();
    };
    /**
     * handle click on all element in the component, useful for outside of click
     * @param e event
     */
    DaterangepickerComponent.prototype.handleInternalClick = function (e) {
        e.stopPropagation();
    };
    /**
     * update the locale options
     * @param locale
     */
    DaterangepickerComponent.prototype.updateLocale = function (locale) {
        for (var key in locale) {
            if (locale.hasOwnProperty(key)) {
                this.locale[key] = locale[key];
                if (key === 'customRangeLabel') {
                    this.renderRanges();
                }
            }
        }
    };
    /**
     *  clear the daterange picker
     */
    DaterangepickerComponent.prototype.clear = function () {
        this.startDate = moment$1().startOf('day');
        this.endDate = moment$1().endOf('day');
        this.choosedDate.emit({ chosenLabel: '', startDate: null, endDate: null });
        this.datesUpdated.emit({ startDate: null, endDate: null });
        this.hide();
    };
    /**
     * Find out if the selected range should be disabled if it doesn't
     * fit into minDate and maxDate limitations.
     */
    DaterangepickerComponent.prototype.disableRange = function (range) {
        var _this = this;
        if (range === this.locale.customRangeLabel) {
            return false;
        }
        var rangeMarkers = this.ranges[range];
        var areBothBefore = rangeMarkers.every(function (date) {
            if (!_this.minDate) {
                return false;
            }
            return date.isBefore(_this.minDate);
        });
        var areBothAfter = rangeMarkers.every(function (date) {
            if (!_this.maxDate) {
                return false;
            }
            return date.isAfter(_this.maxDate);
        });
        return (areBothBefore || areBothAfter);
    };
    /**
     *
     * @param date the date to add time
     * @param side left or right
     */
    DaterangepickerComponent.prototype._getDateWithTime = function (date, side) {
        var hour = parseInt(this.timepickerVariables[side].selectedHour, 10);
        if (!this.timePicker24Hour) {
            var ampm = this.timepickerVariables[side].ampmModel;
            if (ampm === 'PM' && hour < 12) {
                hour += 12;
            }
            if (ampm === 'AM' && hour === 12) {
                hour = 0;
            }
        }
        var minute = parseInt(this.timepickerVariables[side].selectedMinute, 10);
        var second = this.timePickerSeconds ? parseInt(this.timepickerVariables[side].selectedSecond, 10) : 0;
        return date.clone().hour(hour).minute(minute).second(second);
    };
    /**
     *  build the locale config
     */
    DaterangepickerComponent.prototype._buildLocale = function () {
        this.locale = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._localeService.config, this.locale);
        if (!this.locale.format) {
            if (this.timePicker) {
                this.locale.format = moment$1.localeData().longDateFormat('lll');
            }
            else {
                this.locale.format = moment$1.localeData().longDateFormat('L');
            }
        }
    };
    DaterangepickerComponent.prototype._buildCells = function (calendar, side) {
        for (var row = 0; row < 6; row++) {
            this.calendarVariables[side].classes[row] = {};
            var rowClasses = [];
            if (this.emptyWeekRowClass && !this.hasCurrentMonthDays(this.calendarVariables[side].month, calendar[row])) {
                rowClasses.push(this.emptyWeekRowClass);
            }
            for (var col = 0; col < 7; col++) {
                var classes = [];
                // highlight today's date
                if (calendar[row][col].isSame(new Date(), 'day')) {
                    classes.push('today');
                }
                // highlight weekends
                if (calendar[row][col].isoWeekday() > 5) {
                    classes.push('weekend');
                }
                // grey out the dates in other months displayed at beginning and end of this calendar
                if (calendar[row][col].month() !== calendar[1][1].month()) {
                    classes.push('off');
                    // mark the last day of the previous month in this calendar
                    if (this.lastDayOfPreviousMonthClass && (calendar[row][col].month() < calendar[1][1].month() ||
                        calendar[1][1].month() === 0) && calendar[row][col].date() === this.calendarVariables[side].daysInLastMonth) {
                        classes.push(this.lastDayOfPreviousMonthClass);
                    }
                    // mark the first day of the next month in this calendar
                    if (this.firstDayOfNextMonthClass && (calendar[row][col].month() > calendar[1][1].month() ||
                        calendar[row][col].month() === 0) && calendar[row][col].date() === 1) {
                        classes.push(this.firstDayOfNextMonthClass);
                    }
                }
                // mark the first day of the current month with a custom class
                if (this.firstMonthDayClass && calendar[row][col].month() === calendar[1][1].month() &&
                    calendar[row][col].date() === calendar.firstDay.date()) {
                    classes.push(this.firstMonthDayClass);
                }
                // mark the last day of the current month with a custom class
                if (this.lastMonthDayClass && calendar[row][col].month() === calendar[1][1].month() &&
                    calendar[row][col].date() === calendar.lastDay.date()) {
                    classes.push(this.lastMonthDayClass);
                }
                // don't allow selection of dates before the minimum date
                if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day')) {
                    classes.push('off', 'disabled');
                }
                // don't allow selection of dates after the maximum date
                if (this.calendarVariables[side].maxDate && calendar[row][col].isAfter(this.calendarVariables[side].maxDate, 'day')) {
                    classes.push('off', 'disabled');
                }
                // don't allow selection of date if a custom function decides it's invalid
                if (this.isInvalidDate(calendar[row][col])) {
                    classes.push('off', 'disabled', 'invalid');
                }
                // highlight the currently selected start date
                if (this.startDate && calendar[row][col].format('YYYY-MM-DD') === this.startDate.format('YYYY-MM-DD')) {
                    classes.push('active', 'start-date');
                }
                // highlight the currently selected end date
                if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') === this.endDate.format('YYYY-MM-DD')) {
                    classes.push('active', 'end-date');
                }
                // highlight dates in-between the selected dates
                if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate) {
                    classes.push('in-range');
                }
                // apply custom classes for this date
                var isCustom = this.isCustomDate(calendar[row][col]);
                if (isCustom !== false) {
                    if (typeof isCustom === 'string') {
                        classes.push(isCustom);
                    }
                    else {
                        Array.prototype.push.apply(classes, isCustom);
                    }
                }
                // store classes var
                var cname = '', disabled = false;
                for (var i = 0; i < classes.length; i++) {
                    cname += classes[i] + ' ';
                    if (classes[i] === 'disabled') {
                        disabled = true;
                    }
                }
                if (!disabled) {
                    cname += 'available';
                }
                this.calendarVariables[side].classes[row][col] = cname.replace(/^\s+|\s+$/g, '');
            }
            this.calendarVariables[side].classes[row].classList = rowClasses.join(' ');
        }
    };
    /**
     * Find out if the current calendar row has current month days
     * (as opposed to consisting of only previous/next month days)
     */
    DaterangepickerComponent.prototype.hasCurrentMonthDays = function (currentMonth, row) {
        for (var day = 0; day < 7; day++) {
            if (row[day].month() === currentMonth) {
                return true;
            }
        }
        return false;
    };
    var DaterangepickerComponent_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "startDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "endDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], DaterangepickerComponent.prototype, "dateLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "minDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "maxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "autoApply", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "singleDatePicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "showDropdowns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "showWeekNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "showISOWeekNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "linkedCalendars", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "autoUpdateInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "alwaysShowCalendars", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "maxSpan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "lockStartDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "timePicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "timePicker24Hour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "timePickerIncrement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "timePickerSeconds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "showClearButton", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerComponent.prototype, "firstMonthDayClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerComponent.prototype, "lastMonthDayClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerComponent.prototype, "emptyWeekRowClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerComponent.prototype, "firstDayOfNextMonthClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerComponent.prototype, "lastDayOfPreviousMonthClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], DaterangepickerComponent.prototype, "locale", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], DaterangepickerComponent.prototype, "ranges", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerComponent.prototype, "showCustomRangeLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "showCancel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "keepCalendarOpeningWithRange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "showRangeLabelOnInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "customRangeDirection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerComponent.prototype, "drops", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerComponent.prototype, "opens", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerComponent.prototype, "closeOnAutoApply", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerComponent.prototype, "choosedDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerComponent.prototype, "rangeClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerComponent.prototype, "datesUpdated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerComponent.prototype, "startDateChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerComponent.prototype, "endDateChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('pickerContainer'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], DaterangepickerComponent.prototype, "pickerContainer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], DaterangepickerComponent.prototype, "isInvalidDate", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], DaterangepickerComponent.prototype, "isCustomDate", null);
    DaterangepickerComponent = DaterangepickerComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'ngx-daterangepicker-material',
            template: "<div class=\"md-drppicker\" #pickerContainer\n[ngClass]=\"{\n    ltr: locale.direction === 'ltr',\n    rtl: this.locale.direction === 'rtl',\n    'shown': isShown || inline,\n    'hidden': !isShown && !inline,\n    'inline': inline,\n    'double': !singleDatePicker && showCalInRanges,\n    'show-ranges': rangesArray.length\n}\" [class]=\"'drops-' + drops + '-' + opens\">\n    <div class=\"ranges\">\n        <ul>\n          <li *ngFor=\"let range of rangesArray\">\n            <button type=\"button\"\n                    (click)=\"clickRange($event, range)\"\n                    [disabled]=\"disableRange(range)\"\n                    [ngClass]=\"{'active': range === chosenRange}\">{{range}}</button>\n          </li>\n        </ul>\n    </div>\n    <div class=\"calendar\" [ngClass]=\"{right: singleDatePicker, left: !singleDatePicker}\"\n        *ngIf=\"showCalInRanges\">\n        <div class=\"calendar-table\">\n            <table class=\"table-condensed\" *ngIf=\"calendarVariables\">\n                <thead>\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\"></th>\n                        <ng-container *ngIf=\"!calendarVariables.left.minDate || calendarVariables.left.minDate.isBefore(calendarVariables.left.calendar.firstDay) && (!this.linkedCalendars || true)\">\n                            <th (click)=\"clickPrev(sideEnum.left)\" class=\"prev available\" >\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!(!calendarVariables.left.minDate || calendarVariables.left.minDate.isBefore(calendarVariables.left.calendar.firstDay) && (!this.linkedCalendars || true))\">\n                            <th></th>\n                        </ng-container>\n                        <th colspan=\"5\" class=\"month drp-animate\">\n                            <ng-container *ngIf=\"showDropdowns && calendarVariables.left.dropdowns\">\n                                <div class=\"dropdowns\">\n                                        {{this.locale.monthNames[calendarVariables?.left?.calendar[1][1].month()]}}\n                                        <select class=\"monthselect\" (change)=\"monthChanged($event, sideEnum.left)\">\n                                                <option\n                                                [disabled]=\"(calendarVariables.left.dropdowns.inMinYear && m < calendarVariables.left.minDate.month()) || (calendarVariables.left.dropdowns.inMaxYear && m > calendarVariables.left.maxDate.month())\"\n                                                *ngFor=\"let m of calendarVariables.left.dropdowns.monthArrays\" [value]=\"m\" [selected]=\"calendarVariables.left.dropdowns.currentMonth == m\">\n                                                    {{locale.monthNames[m]}}\n                                                </option>\n                                        </select>\n                                </div>\n                                <div class=\"dropdowns\">\n                                    {{ calendarVariables?.left?.calendar[1][1].format(\" YYYY\")}}\n                                    <select class=\"yearselect\"  (change)=\"yearChanged($event, sideEnum.left)\">\n                                        <option *ngFor=\"let y of calendarVariables.left.dropdowns.yearArrays\" [selected]=\"y === calendarVariables.left.dropdowns.currentYear\">\n                                            {{y}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!showDropdowns || !calendarVariables.left.dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.left?.calendar[1][1].month()]}}  {{ calendarVariables?.left?.calendar[1][1].format(\" YYYY\")}}\n                            </ng-container>\n                        </th>\n                        <ng-container *ngIf=\"(!calendarVariables.left.maxDate || calendarVariables.left.maxDate.isAfter(calendarVariables.left.calendar.lastDay)) && (!linkedCalendars || singleDatePicker )\">\n                            <th class=\"next available\" (click)=\"clickNext(sideEnum.left)\">\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!((!calendarVariables.left.maxDate || calendarVariables.left.maxDate.isAfter(calendarVariables.left.calendar.lastDay)) && (!linkedCalendars || singleDatePicker ))\">\n                            <th></th>\n                        </ng-container>\n                    </tr>\n                    <tr class='week-days'>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\" class=\"week\"><span>{{this.locale.weekLabel}}</span></th>\n                        <th *ngFor=\"let dayofweek of locale.daysOfWeek\"><span>{{dayofweek}}</span></th>\n                    </tr>\n                </thead>\n                <tbody class=\"drp-animate\">\n                    <tr *ngFor=\"let row of calendarVariables.left.calRows\" [class]=\"calendarVariables.left.classes[row].classList\">\n                        <!-- add week number -->\n                        <td  class=\"week\" *ngIf=\"showWeekNumbers\">\n                            <span>{{calendarVariables.left.calendar[row][0].week()}}</span>\n                        </td>\n                        <td class=\"week\" *ngIf=\"showISOWeekNumbers\">\n                            <span>{{calendarVariables.left.calendar[row][0].isoWeek()}}</span>\n                        </td>\n                        <!-- cal -->\n                        <td *ngFor=\"let col of calendarVariables.left.calCols\" [class]=\"calendarVariables.left.classes[row][col]\" (click)=\"clickDate($event, sideEnum.left, row, col)\">\n                            <span>{{calendarVariables.left.calendar[row][col].date()}}</span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"calendar-time\" *ngIf=\"timePicker\">\n            <div class=\"select\">\n                <select class=\"hourselect select-item\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.left.selectedHour\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option *ngFor=\"let i of timepickerVariables.left.hours\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.left.disabledHours.indexOf(i) > -1\">{{i}}</option>\n                </select>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item minuteselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.left.selectedMinute\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option *ngFor=\"let i of timepickerVariables.left.minutes; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.left.disabledMinutes.indexOf(i) > -1\">{{timepickerVariables.left.minutesLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item secondselect\" *ngIf=\"timePickerSeconds\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.left.selectedSecond\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option *ngFor=\"let i of timepickerVariables.left.seconds; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.left.disabledSeconds.indexOf(i) > -1\">{{timepickerVariables.left.secondsLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item ampmselect\" *ngIf=\"!timePicker24Hour\" [(ngModel)]=\"timepickerVariables.left.ampmModel\" (ngModelChange)=\"timeChanged($event, sideEnum.left)\">\n                    <option value=\"AM\" [disabled]=\"timepickerVariables.left.amDisabled\">AM</option>\n                    <option value=\"PM\"  [disabled]=\"timepickerVariables.left.pmDisabled\">PM</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"calendar right\"\n        *ngIf=\"showCalInRanges && !singleDatePicker\"\n        >\n        <div class=\"calendar-table\">\n            <table class=\"table-condensed\" *ngIf=\"calendarVariables\">\n                <thead>\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\"></th>\n                        <ng-container *ngIf=\"(!calendarVariables.right.minDate || calendarVariables.right.minDate.isBefore(calendarVariables.right.calendar.firstDay)) && (!this.linkedCalendars)\">\n                            <th (click)=\"clickPrev(sideEnum.right)\" class=\"prev available\" >\n                            </th>\n                        </ng-container>\n                        <ng-container *ngIf=\"!((!calendarVariables.right.minDate || calendarVariables.right.minDate.isBefore(calendarVariables.right.calendar.firstDay)) && (!this.linkedCalendars))\">\n                            <th></th>\n                        </ng-container>\n                        <th colspan=\"5\" class=\"month\">\n                            <ng-container *ngIf=\"showDropdowns && calendarVariables.right.dropdowns\">\n                                <div class=\"dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.right?.calendar[1][1].month()]}}\n                                    <select class=\"monthselect\" (change)=\"monthChanged($event, sideEnum.right)\">\n                                            <option\n                                            [disabled]=\"(calendarVariables.right.dropdowns.inMinYear && m < calendarVariables.right.minDate.month()) || (calendarVariables.right.dropdowns.inMaxYear && m > calendarVariables.right.maxDate.month())\"\n                                            *ngFor=\"let m of calendarVariables.right.dropdowns.monthArrays\" [value]=\"m\" [selected]=\"calendarVariables.right.dropdowns.currentMonth == m\">\n                                                {{locale.monthNames[m]}}\n                                            </option>\n                                    </select>\n                                </div>\n                                <div class=\"dropdowns\">\n                                        {{ calendarVariables?.right?.calendar[1][1].format(\" YYYY\")}}\n                                        <select class=\"yearselect\" (change)=\"yearChanged($event, sideEnum.right)\">\n                                        <option *ngFor=\"let y of calendarVariables.right.dropdowns.yearArrays\" [selected]=\"y === calendarVariables.right.dropdowns.currentYear\">\n                                            {{y}}\n                                        </option>\n                                    </select>\n                                </div>\n                            </ng-container>\n                            <ng-container *ngIf=\"!showDropdowns || !calendarVariables.right.dropdowns\">\n                                    {{this.locale.monthNames[calendarVariables?.right?.calendar[1][1].month()]}}  {{ calendarVariables?.right?.calendar[1][1].format(\" YYYY\")}}\n                            </ng-container>\n                        </th>\n                            <ng-container *ngIf=\"!calendarVariables.right.maxDate || calendarVariables.right.maxDate.isAfter(calendarVariables.right.calendar.lastDay) && (!linkedCalendars || singleDatePicker || true)\">\n                                <th class=\"next available\" (click)=\"clickNext(sideEnum.right)\">\n                                </th>\n                            </ng-container>\n                            <ng-container *ngIf=\"!(!calendarVariables.right.maxDate || calendarVariables.right.maxDate.isAfter(calendarVariables.right.calendar.lastDay) && (!linkedCalendars || singleDatePicker || true))\">\n                                <th></th>\n                            </ng-container>\n                    </tr>\n\n                    <tr>\n                        <th *ngIf=\"showWeekNumbers || showISOWeekNumbers\" class=\"week\"><span>{{this.locale.weekLabel}}</span></th>\n                        <th *ngFor=\"let dayofweek of locale.daysOfWeek\"><span>{{dayofweek}}</span></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let row of calendarVariables.right.calRows\" [class]=\"calendarVariables.right.classes[row].classList\">\n                        <td class=\"week\" *ngIf=\"showWeekNumbers\">\n                            <span>{{calendarVariables.right.calendar[row][0].week()}}</span>\n                        </td>\n                        <td class=\"week\" *ngIf=\"showISOWeekNumbers\">\n                            <span>{{calendarVariables.right.calendar[row][0].isoWeek()}}</span>\n                        </td>\n                        <td *ngFor=\"let col of calendarVariables.right.calCols\" [class]=\"calendarVariables.right.classes[row][col]\" (click)=\"clickDate($event, sideEnum.right, row, col)\">\n                            <span>{{calendarVariables.right.calendar[row][col].date()}}</span>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"calendar-time\" *ngIf=\"timePicker\">\n            <div class=\"select\">\n                <select class=\"select-item hourselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.right.selectedHour\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option *ngFor=\"let i of timepickerVariables.right.hours\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.right.disabledHours.indexOf(i) > -1\">{{i}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select class=\"select-item minuteselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.right.selectedMinute\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option *ngFor=\"let i of timepickerVariables.right.minutes; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.right.disabledMinutes.indexOf(i) > -1\">{{timepickerVariables.right.minutesLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select *ngIf=\"timePickerSeconds\" class=\"select-item secondselect\" [disabled]=\"!endDate\" [(ngModel)]=\"timepickerVariables.right.selectedSecond\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option *ngFor=\"let i of timepickerVariables.right.seconds; let index = index;\"\n                    [value]=\"i\"\n                    [disabled]=\"timepickerVariables.right.disabledSeconds.indexOf(i) > -1\">{{timepickerVariables.right.secondsLabel[index]}}</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n            <div class=\"select\">\n                <select *ngIf=\"!timePicker24Hour\" class=\"select-item ampmselect\" [(ngModel)]=\"timepickerVariables.right.ampmModel\" (ngModelChange)=\"timeChanged($event, sideEnum.right)\">\n                    <option value=\"AM\" [disabled]=\"timepickerVariables.right.amDisabled\">AM</option>\n                    <option value=\"PM\"  [disabled]=\"timepickerVariables.right.pmDisabled\">PM</option>\n                </select>\n                <span class=\"select-highlight\"></span>\n                <span class=\"select-bar\"></span>\n            </div>\n        </div>\n    </div>\n    <div class=\"buttons\" *ngIf=\"!autoApply && ( !rangesArray.length || (showCalInRanges && !singleDatePicker))\">\n        <div class=\"buttons_input\">\n            <button  *ngIf=\"showClearButton\" class=\"btn btn-default clear\" type=\"button\" (click)=\"clear()\" [title]=\"locale.clearLabel\">\n                {{locale.clearLabel}}\n                <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 -5 24 24\"><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"/></svg>\n            </button>\n            <button class=\"btn btn-default\" *ngIf=\"showCancel\" type=\"button\" (click)=\"clickCancel($event)\">{{locale.cancelLabel}}</button>\n            <button class=\"btn\"  [disabled]=\"applyBtn.disabled\" type=\"button\" (click)=\"clickApply($event)\">{{locale.applyLabel}}</button>\n        </div>\n    </div>\n</div>\n",
            host: {
                '(click)': 'handleInternalClick($event)',
            },
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
            providers: [{
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return DaterangepickerComponent_1; }),
                    multi: true
                }],
            styles: [".md-drppicker{position:absolute;font-family:Roboto,sans-serif;color:inherit;border-radius:4px;width:278px;padding:4px;margin-top:-10px;overflow:hidden;z-index:1000;font-size:14px;background-color:#fff;box-shadow:0 2px 4px 0 rgba(0,0,0,.16),0 2px 8px 0 rgba(0,0,0,.12)}.md-drppicker.double{width:auto}.md-drppicker.inline{position:relative;display:inline-block}.md-drppicker:after,.md-drppicker:before{position:absolute;display:inline-block;border-bottom-color:rgba(0,0,0,.2);content:''}.md-drppicker.openscenter:after,.md-drppicker.openscenter:before{left:0;right:0;width:0;margin-left:auto;margin-right:auto}.md-drppicker.single .calendar,.md-drppicker.single .ranges{float:none}.md-drppicker.shown{transform:scale(1);transition:.1s ease-in-out;transform-origin:0 0;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.shown.drops-up-left{transform-origin:100% 100%}.md-drppicker.shown.drops-up-right{transform-origin:0 100%}.md-drppicker.shown.drops-down-left{transform-origin:100% 0}.md-drppicker.shown.drops-down-right{transform-origin:0 0}.md-drppicker.shown.drops-down-center{transform-origin:NaN}.md-drppicker.shown.drops-up-center{transform-origin:50%}.md-drppicker.shown .calendar{display:block}.md-drppicker.hidden{transition:.1s;transform:scale(0);transform-origin:0 0;cursor:default;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.md-drppicker.hidden.drops-up-left{transform-origin:100% 100%}.md-drppicker.hidden.drops-up-right{transform-origin:0 100%}.md-drppicker.hidden.drops-down-left{transform-origin:100% 0}.md-drppicker.hidden.drops-down-right{transform-origin:0 0}.md-drppicker.hidden.drops-down-center{transform-origin:NaN}.md-drppicker.hidden.drops-up-center{transform-origin:50%}.md-drppicker.hidden .calendar{display:none}.md-drppicker .calendar{max-width:270px;margin:4px}.md-drppicker .calendar.single .calendar-table{border:none}.md-drppicker .calendar td,.md-drppicker .calendar th{padding:0;white-space:nowrap;text-align:center;min-width:32px}.md-drppicker .calendar td span,.md-drppicker .calendar th span{pointer-events:none}.md-drppicker .calendar-table{border:1px solid #fff;padding:4px;border-radius:4px;background-color:#fff}.md-drppicker table{width:100%;margin:0}.md-drppicker th{color:#988c8c}.md-drppicker td,.md-drppicker th{text-align:center;border-radius:4px;border:1px solid transparent;white-space:nowrap;cursor:pointer;height:2em;width:2em}.md-drppicker td.available.prev,.md-drppicker th.available.prev{display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.prev:hover,.md-drppicker th.available.prev:hover{margin:0}.md-drppicker td.available.next,.md-drppicker th.available.next{transform:rotate(180deg);display:block;background-image:url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMy43IDYiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMuNyA2IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zLjcsMC43TDEuNCwzbDIuMywyLjNMMyw2TDAsM2wzLTNMMy43LDAuN3oiLz4NCjwvZz4NCjwvc3ZnPg0K);background-repeat:no-repeat;background-size:.5em;background-position:center;opacity:.8;transition:background-color .2s;border-radius:2em}.md-drppicker td.available.next:hover,.md-drppicker th.available.next:hover{margin:0;transform:rotate(180deg)}.md-drppicker td.available:hover,.md-drppicker th.available:hover{background-color:#eee;border-color:transparent;color:inherit;background-repeat:no-repeat;background-size:.5em;background-position:center;margin:.25em 0;opacity:.8;border-radius:2em;transform:scale(1);transition:450ms cubic-bezier(.23,1,.32,1)}.md-drppicker td.week,.md-drppicker th.week{font-size:80%;color:#ccc}.md-drppicker td{margin:.25em 0;opacity:.8;transition:450ms cubic-bezier(.23,1,.32,1);border-radius:2em;transform:scale(1)}.md-drppicker td.off,.md-drppicker td.off.end-date,.md-drppicker td.off.in-range,.md-drppicker td.off.start-date{background-color:#fff;border-color:transparent;color:#999}.md-drppicker td.in-range{background-color:#dde2e4;border-color:transparent;color:#000;border-radius:0}.md-drppicker td.start-date{border-radius:2em 0 0 2em}.md-drppicker td.end-date{border-radius:0 2em 2em 0}.md-drppicker td.start-date.end-date{border-radius:4px}.md-drppicker td.active{transition:background .3s ease-out;background:rgba(0,0,0,.1)}.md-drppicker td.active,.md-drppicker td.active:hover{background-color:#3f51b5;border-color:transparent;color:#fff}.md-drppicker th.month{width:auto}.md-drppicker option.disabled,.md-drppicker td.disabled{color:#999;cursor:not-allowed;text-decoration:line-through}.md-drppicker .dropdowns{background-repeat:no-repeat;background-size:10px;background-position-y:center;background-position-x:right;width:50px;background-image:url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI1NSAyNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI1NSAyNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0iYXJyb3ctZHJvcC1kb3duIj4KCQk8cG9seWdvbiBwb2ludHM9IjAsNjMuNzUgMTI3LjUsMTkxLjI1IDI1NSw2My43NSAgICIgZmlsbD0iIzk4OGM4YyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=)}.md-drppicker .dropdowns select{display:inline-block;background-color:rgba(255,255,255,.9);width:100%;padding:5px;border:1px solid #f2f2f2;border-radius:2px;height:3rem}.md-drppicker .dropdowns select.ampmselect,.md-drppicker .dropdowns select.hourselect,.md-drppicker .dropdowns select.minuteselect,.md-drppicker .dropdowns select.secondselect{width:50px;margin:0 auto;background:#eee;border:1px solid #eee;padding:2px;outline:0;font-size:12px}.md-drppicker .dropdowns select.monthselect,.md-drppicker .dropdowns select.yearselect{font-size:12px;height:auto;cursor:pointer;opacity:0;position:absolute;top:0;left:0;margin:0;padding:0}.md-drppicker th.month>div{position:relative;display:inline-block}.md-drppicker .calendar-time{text-align:center;margin:4px auto 0;line-height:30px;position:relative}.md-drppicker .calendar-time .select{display:inline}.md-drppicker .calendar-time .select .select-item{display:inline-block;width:auto;position:relative;font-family:inherit;background-color:transparent;padding:10px 10px 10px 0;font-size:18px;border-radius:0;border:none;border-bottom:1px solid rgba(0,0,0,.12)}.md-drppicker .calendar-time .select .select-item:after{position:absolute;top:18px;right:10px;width:0;height:0;padding:0;content:'';border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid rgba(0,0,0,.12);pointer-events:none}.md-drppicker .calendar-time .select .select-item:focus{outline:0}.md-drppicker .calendar-time .select .select-item .select-label{color:rgba(0,0,0,.26);font-size:16px;font-weight:400;position:absolute;pointer-events:none;left:0;top:10px;transition:.2s}.md-drppicker .calendar-time select.disabled{color:#ccc;cursor:not-allowed}.md-drppicker .label-input{border:1px solid #ccc;border-radius:4px;color:#555;height:30px;line-height:30px;display:block;vertical-align:middle;margin:0 auto 5px;padding:0 0 0 28px;width:100%}.md-drppicker .label-input.active{border:1px solid #08c;border-radius:4px}.md-drppicker .md-drppicker_input{position:relative;padding:0 30px 0 0}.md-drppicker .md-drppicker_input i,.md-drppicker .md-drppicker_input svg{position:absolute;left:8px;top:8px}.md-drppicker.rtl .label-input{padding-right:28px;padding-left:6px}.md-drppicker.rtl .md-drppicker_input i,.md-drppicker.rtl .md-drppicker_input svg{left:auto;right:8px}.md-drppicker .show-ranges .drp-calendar.left{border-left:1px solid #ddd}.md-drppicker .ranges{float:none;text-align:left;margin:0}.md-drppicker .ranges ul{list-style:none;margin:0 auto;padding:0;width:100%}.md-drppicker .ranges ul li{font-size:12px}.md-drppicker .ranges ul li button{padding:8px 12px;width:100%;background:0 0;border:none;text-align:left;cursor:pointer}.md-drppicker .ranges ul li button.active{background-color:#3f51b5;color:#fff}.md-drppicker .ranges ul li button[disabled]{opacity:.3}.md-drppicker .ranges ul li button:active{background:0 0}.md-drppicker .ranges ul li:hover{background-color:#eee}.md-drppicker .show-calendar .ranges{margin-top:8px}.md-drppicker [hidden]{display:none}.md-drppicker .buttons{text-align:right;margin:0 5px 5px 0}.md-drppicker .btn{position:relative;overflow:hidden;border-width:0;outline:0;padding:0 6px;cursor:pointer;border-radius:2px;box-shadow:0 1px 4px rgba(0,0,0,.6);background-color:#3f51b5;color:#ecf0f1;transition:background-color .4s;height:auto;text-transform:uppercase;line-height:36px;border:none}.md-drppicker .btn:focus,.md-drppicker .btn:hover{background-color:#3f51b5}.md-drppicker .btn>*{position:relative}.md-drppicker .btn span{display:block;padding:12px 24px}.md-drppicker .btn:before{content:\"\";position:absolute;top:50%;left:50%;display:block;width:0;padding-top:0;border-radius:100%;background-color:rgba(236,240,241,.3);transform:translate(-50%,-50%)}.md-drppicker .btn:active:before{width:120%;padding-top:120%;transition:width .2s ease-out,padding-top .2s ease-out}.md-drppicker .btn:disabled{opacity:.5}.md-drppicker .btn.btn-default{color:#000;background-color:#dcdcdc}.md-drppicker .clear{box-shadow:none;background-color:#fff!important}.md-drppicker .clear svg{color:#eb3232;fill:currentColor}@media (min-width:564px){.md-drppicker{width:auto}.md-drppicker.single .calendar.left{clear:none}.md-drppicker.ltr{direction:ltr;text-align:left}.md-drppicker.ltr .calendar.left{clear:left}.md-drppicker.ltr .calendar.left .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0;padding-right:12px}.md-drppicker.ltr .calendar.right{margin-left:0}.md-drppicker.ltr .calendar.right .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.ltr .left .md-drppicker_input,.md-drppicker.ltr .right .md-drppicker_input{padding-right:35px}.md-drppicker.ltr .calendar,.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl{direction:rtl;text-align:right}.md-drppicker.rtl .calendar.left{clear:right;margin-left:0}.md-drppicker.rtl .calendar.left .calendar-table{border-left:none;border-top-left-radius:0;border-bottom-left-radius:0}.md-drppicker.rtl .calendar.right{margin-right:0}.md-drppicker.rtl .calendar.right .calendar-table{border-right:none;border-top-right-radius:0;border-bottom-right-radius:0}.md-drppicker.rtl .calendar.left .calendar-table,.md-drppicker.rtl .left .md-drppicker_input{padding-left:12px}.md-drppicker.rtl .calendar,.md-drppicker.rtl .ranges{text-align:right;float:right}.drp-animate{transform:translate(0);transition:transform .2s,opacity .2s}.drp-animate.drp-picker-site-this{transition-timing-function:linear}.drp-animate.drp-animate-right{transform:translateX(10%);opacity:0}.drp-animate.drp-animate-left{transform:translateX(-10%);opacity:0}}@media (min-width:730px){.md-drppicker .ranges{width:auto}.md-drppicker.ltr .ranges{float:left}.md-drppicker.rtl .ranges{float:right}.md-drppicker .calendar.left{clear:none!important}}"]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            LocaleService])
    ], DaterangepickerComponent);
    return DaterangepickerComponent;
}());

var moment$2 = moment__WEBPACK_IMPORTED_MODULE_4__;
var DaterangepickerDirective = /** @class */ (function () {
    function DaterangepickerDirective(viewContainerRef, _changeDetectorRef, _componentFactoryResolver, _el, _renderer, differs, _localeService, elementRef) {
        this.viewContainerRef = viewContainerRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._el = _el;
        this._renderer = _renderer;
        this.differs = differs;
        this._localeService = _localeService;
        this.elementRef = elementRef;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        this.dateLimit = null;
        this.showCancel = false;
        this.lockStartDate = false;
        // timepicker variables
        this.timePicker = false;
        this.timePicker24Hour = false;
        this.timePickerIncrement = 1;
        this.timePickerSeconds = false;
        this.closeOnAutoApply = true;
        this._locale = {};
        this._endKey = 'endDate';
        this._startKey = 'startDate';
        this.notForChangesProperty = [
            'locale',
            'endKey',
            'startKey'
        ];
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.rangeClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.datesUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.startDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.endDateChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.drops = 'down';
        this.opens = 'auto';
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(DaterangepickerComponent);
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        this.picker = componentRef.instance;
        this.picker.inline = false; // set inline to false for all directive usage
    }
    DaterangepickerDirective_1 = DaterangepickerDirective;
    Object.defineProperty(DaterangepickerDirective.prototype, "locale", {
        get: function () {
            return this._locale;
        },
        set: function (value) {
            this._locale = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this._localeService.config, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerDirective.prototype, "startKey", {
        set: function (value) {
            if (value !== null) {
                this._startKey = value;
            }
            else {
                this._startKey = 'startDate';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerDirective.prototype, "endKey", {
        set: function (value) {
            if (value !== null) {
                this._endKey = value;
            }
            else {
                this._endKey = 'endDate';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DaterangepickerDirective.prototype, "value", {
        get: function () {
            return this._value || null;
        },
        set: function (val) {
            this._value = val;
            this._onChange(val);
            this._changeDetectorRef.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    DaterangepickerDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.picker.startDateChanged.asObservable().subscribe(function (itemChanged) {
            _this.startDateChanged.emit(itemChanged);
        });
        this.picker.endDateChanged.asObservable().subscribe(function (itemChanged) {
            _this.endDateChanged.emit(itemChanged);
        });
        this.picker.rangeClicked.asObservable().subscribe(function (range) {
            _this.rangeClicked.emit(range);
        });
        this.picker.datesUpdated.asObservable().subscribe(function (range) {
            _this.datesUpdated.emit(range);
        });
        this.picker.choosedDate.asObservable().subscribe(function (change) {
            if (change) {
                var value = {};
                value[_this._startKey] = change.startDate;
                value[_this._endKey] = change.endDate;
                _this.value = value;
                _this.onChange.emit(value);
                if (typeof change.chosenLabel === 'string') {
                    _this._el.nativeElement.value = change.chosenLabel;
                }
            }
        });
        this.picker.firstMonthDayClass = this.firstMonthDayClass;
        this.picker.lastMonthDayClass = this.lastMonthDayClass;
        this.picker.emptyWeekRowClass = this.emptyWeekRowClass;
        this.picker.firstDayOfNextMonthClass = this.firstDayOfNextMonthClass;
        this.picker.lastDayOfPreviousMonthClass = this.lastDayOfPreviousMonthClass;
        this.picker.drops = this.drops;
        this.picker.opens = this.opens;
        this.localeDiffer = this.differs.find(this.locale).create();
        this.picker.closeOnAutoApply = this.closeOnAutoApply;
    };
    DaterangepickerDirective.prototype.ngOnChanges = function (changes) {
        for (var change in changes) {
            if (changes.hasOwnProperty(change)) {
                if (this.notForChangesProperty.indexOf(change) === -1) {
                    this.picker[change] = changes[change].currentValue;
                }
            }
        }
    };
    DaterangepickerDirective.prototype.ngDoCheck = function () {
        if (this.localeDiffer) {
            var changes = this.localeDiffer.diff(this.locale);
            if (changes) {
                this.picker.updateLocale(this.locale);
            }
        }
    };
    DaterangepickerDirective.prototype.onBlur = function () {
        this._onTouched();
    };
    DaterangepickerDirective.prototype.open = function (event) {
        var _this = this;
        this.picker.show(event);
        setTimeout(function () {
            _this.setPosition();
        });
    };
    DaterangepickerDirective.prototype.hide = function (e) {
        this.picker.hide(e);
    };
    DaterangepickerDirective.prototype.toggle = function (e) {
        if (this.picker.isShown) {
            this.hide(e);
        }
        else {
            this.open(e);
        }
    };
    DaterangepickerDirective.prototype.clear = function () {
        this.picker.clear();
    };
    DaterangepickerDirective.prototype.writeValue = function (value) {
        this.setValue(value);
    };
    DaterangepickerDirective.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    DaterangepickerDirective.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    DaterangepickerDirective.prototype.setValue = function (val) {
        if (val) {
            this.value = val;
            if (val[this._startKey]) {
                this.picker.setStartDate(val[this._startKey]);
            }
            if (val[this._endKey]) {
                this.picker.setEndDate(val[this._endKey]);
            }
            this.picker.calculateChosenLabel();
            if (this.picker.chosenLabel) {
                this._el.nativeElement.value = this.picker.chosenLabel;
            }
        }
        else {
            this.picker.clear();
        }
    };
    /**
     * Set position of the calendar
     */
    DaterangepickerDirective.prototype.setPosition = function () {
        var style;
        var containerTop;
        var container = this.picker.pickerContainer.nativeElement;
        var element = this._el.nativeElement;
        if (this.drops && this.drops === 'up') {
            containerTop = (element.offsetTop - container.clientHeight) + 'px';
        }
        else {
            containerTop = 'auto';
        }
        if (this.opens === 'left') {
            style = {
                top: containerTop,
                left: (element.offsetLeft - container.clientWidth + element.clientWidth) + 'px',
                right: 'auto'
            };
        }
        else if (this.opens === 'center') {
            style = {
                top: containerTop,
                left: (element.offsetLeft + element.clientWidth / 2
                    - container.clientWidth / 2) + 'px',
                right: 'auto'
            };
        }
        else if (this.opens === 'right') {
            style = {
                top: containerTop,
                left: element.offsetLeft + 'px',
                right: 'auto'
            };
        }
        else {
            var position = element.offsetLeft + element.clientWidth / 2 - container.clientWidth / 2;
            if (position < 0) {
                style = {
                    top: containerTop,
                    left: element.offsetLeft + 'px',
                    right: 'auto'
                };
            }
            else {
                style = {
                    top: containerTop,
                    left: position + 'px',
                    right: 'auto'
                };
            }
        }
        if (style) {
            this._renderer.setStyle(container, 'top', style.top);
            this._renderer.setStyle(container, 'left', style.left);
            this._renderer.setStyle(container, 'right', style.right);
        }
    };
    DaterangepickerDirective.prototype.inputChanged = function (e) {
        if (e.target.tagName.toLowerCase() !== 'input') {
            return;
        }
        if (!e.target.value.length) {
            return;
        }
        var dateString = e.target.value.split(this.picker.locale.separator);
        var start = null, end = null;
        if (dateString.length === 2) {
            start = moment$2(dateString[0], this.picker.locale.format);
            end = moment$2(dateString[1], this.picker.locale.format);
        }
        if (this.singleDatePicker || start === null || end === null) {
            start = moment$2(e.target.value, this.picker.locale.format);
            end = start;
        }
        if (!start.isValid() || !end.isValid()) {
            return;
        }
        this.picker.setStartDate(start);
        this.picker.setEndDate(end);
        this.picker.updateView();
    };
    /**
     * For click outside of the calendar's container
     * @param event event object
     */
    DaterangepickerDirective.prototype.outsideClick = function (event) {
        if (!event.target) {
            return;
        }
        if (event.target.classList.contains('ngx-daterangepicker-action')) {
            return;
        }
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.hide();
        }
    };
    var DaterangepickerDirective_1;
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerDirective.prototype, "minDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerDirective.prototype, "maxDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "autoApply", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "alwaysShowCalendars", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "showCustomRangeLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "linkedCalendars", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], DaterangepickerDirective.prototype, "dateLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "singleDatePicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "showWeekNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "showISOWeekNumbers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "showDropdowns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], DaterangepickerDirective.prototype, "isInvalidDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
    ], DaterangepickerDirective.prototype, "isCustomDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "showClearButton", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "customRangeDirection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerDirective.prototype, "ranges", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerDirective.prototype, "opens", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerDirective.prototype, "drops", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerDirective.prototype, "lastMonthDayClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerDirective.prototype, "emptyWeekRowClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerDirective.prototype, "firstDayOfNextMonthClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerDirective.prototype, "lastDayOfPreviousMonthClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "keepCalendarOpeningWithRange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "showRangeLabelOnInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "showCancel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "lockStartDate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "timePicker", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "timePicker24Hour", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
    ], DaterangepickerDirective.prototype, "timePickerIncrement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], DaterangepickerDirective.prototype, "timePickerSeconds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DaterangepickerDirective.prototype, "closeOnAutoApply", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], DaterangepickerDirective.prototype, "locale", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
    ], DaterangepickerDirective.prototype, "_endKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], DaterangepickerDirective.prototype, "startKey", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])
    ], DaterangepickerDirective.prototype, "endKey", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('change'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerDirective.prototype, "onChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('rangeClicked'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerDirective.prototype, "rangeClicked", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])('datesUpdated'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerDirective.prototype, "datesUpdated", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerDirective.prototype, "startDateChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"])
    ], DaterangepickerDirective.prototype, "endDateChanged", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"])('document:click', ['$event']),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
    ], DaterangepickerDirective.prototype, "outsideClick", null);
    DaterangepickerDirective = DaterangepickerDirective_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
            selector: 'input[ngxDaterangepickerMd]',
            host: {
                '(keyup.esc)': 'hide()',
                '(blur)': 'onBlur()',
                '(click)': 'open()',
                '(keyup)': 'inputChanged($event)'
            },
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () { return DaterangepickerDirective_1; }), multi: true
                }
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["KeyValueDiffers"],
            LocaleService,
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], DaterangepickerDirective);
    return DaterangepickerDirective;
}());

var NgxDaterangepickerMd = /** @class */ (function () {
    function NgxDaterangepickerMd() {
    }
    NgxDaterangepickerMd_1 = NgxDaterangepickerMd;
    NgxDaterangepickerMd.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: NgxDaterangepickerMd_1,
            providers: [
                { provide: LOCALE_CONFIG, useValue: config },
                { provide: LocaleService, useClass: LocaleService, deps: [LOCALE_CONFIG] }
            ]
        };
    };
    var NgxDaterangepickerMd_1;
    NgxDaterangepickerMd = NgxDaterangepickerMd_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                DaterangepickerComponent,
                DaterangepickerDirective
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [],
            exports: [
                DaterangepickerComponent,
                DaterangepickerDirective
            ],
            entryComponents: [
                DaterangepickerComponent
            ]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NgxDaterangepickerMd);
    return NgxDaterangepickerMd;
}());


//# sourceMappingURL=ngx-daterangepicker-material.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/aside/aside-left.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/aside/aside-left.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Left Aside -->\n<div ktOffcanvas [options]=\"menuCanvasOptions\" class=\"kt-aside kt-aside--fixed kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop\" id=\"kt_aside\">\n\t<!-- begin:: Brand -->\n\t<kt-brand></kt-brand>\n\t<!-- end:: Brand -->\n\n\t<!-- BEGIN: Aside Menu -->\n\t<div class=\"kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid\" id=\"kt_aside_menu_wrapper\">\n\t\t<div #asideMenu ktMenu [options]=\"menuOptions\" [perfectScrollbar]=\"{wheelPropagation: false}\" [disabled]=\"disableScroll()\" [ngStyle]=\"{'max-height': '100vh', 'position': 'relative'}\" id=\"kt_aside_menu\" class=\"kt-aside-menu\"\n\t\t\t(mouseenter)=\"mouseEnter($event)\" (mouseleave)=\"mouseLeave($event)\"\n\t\t\t[ngClass]=\"htmlClassService.getClasses('aside_menu', true)\">\n\t\t\t<ul class=\"kt-menu__nav\" [ngClass]=\"htmlClassService.getClasses('aside_menu_nav', true)\">\n\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuListTemplate\"></ng-container>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n\t<!-- END: Aside Menu -->\n</div>\n<!-- END: Left Aside -->\n\n<ng-template #menuListTemplate>\n\t<ng-container *ngFor=\"let child of menuAsideService.menuList$ | async\">\n\t\t<ng-container *ngIf=\"child.section\" [ngTemplateOutlet]=\"menuItemSectionTemplate\"\n\t\t\t[ngTemplateOutletContext]=\"{ item: child }\"></ng-container>\n\t\t<ng-container *ngIf=\"child.separator\" [ngTemplateOutlet]=\"menuItemSeparatorTemplate\"\n\t\t\t[ngTemplateOutletContext]=\"{ item: child }\"></ng-container>\n\t\t<ng-container *ngIf=\"child.title\" [ngTemplateOutlet]=\"menuItemTemplate\"\n\t\t\t[ngTemplateOutletContext]=\"{ item: child }\"></ng-container>\n\t</ng-container>\n</ng-template>\n\n<ng-template #menuItemTemplate let-item=\"item\" let-parentItem=\"parentItem\">\n\t<ng-container *ngIf=\"!item.permission\" [ngTemplateOutlet]=\"menuItemInnerTemplate\" [ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem  }\"></ng-container>\n\t<ng-template *ngIf=\"item.permission\" ngxPermissionsOnly=\"{{ item.permission }}\">\n\t\t<ng-container [ngTemplateOutlet]=\"menuItemInnerTemplate\" [ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem  }\"></ng-container>\n\t</ng-template>\n</ng-template>\n\n<ng-template #menuItemInnerTemplate let-item=\"item\" let-parentItem=\"parentItem\">\n\t<li [attr.aria-haspopup]=\"true\"\n\t\t[attr.data-ktmenu-submenu-toggle]=\"getItemAttrSubmenuToggle(item)\"\n\t\t[attr.data-ktmenu-submenu-mode]=\"item.mode\"\n\t\t[attr.data-ktmenu-dropdown-toggle-class]=\"item['dropdown-toggle-class']\" [ngClass]=\"getItemCssClasses(item)\"\n\t\t[ngbTooltip]=\"item.tooltip\" data-placement=\"right\">\n\n\t\t<!-- if menu item hasn't submenu -->\n\t\t<a *ngIf=\"!item.submenu\" [routerLink]=\"item.page\" class=\"kt-menu__link kt-menu__toggle\">\n\t\t\t<ng-container [ngTemplateOutlet]=\"menuItemTextTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\n\t\t</a>\n\t\t<!-- if menu item has sumnenu child  -->\n\t\t<a *ngIf=\"item.submenu\" class=\"kt-menu__link kt-menu__toggle\">\n\t\t\t<ng-container [ngTemplateOutlet]=\"menuItemTextTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\n\t\t</a>\n\n\t\t<!-- if menu item has submenu child then recursively call new menu item component -->\n\t\t<div *ngIf=\"item.submenu\" class=\"kt-menu__submenu\">\n\t\t\t<span class=\"kt-menu__arrow\"></span>\n\t\t\t<div *ngIf=\"item['custom-class'] === 'kt-menu__item--submenu-fullheight'\" class=\"kt-menu__wrapper\">\n\t\t\t\t<!-- wrap submenu to full height -->\n\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuSubmenuTemplate\" [ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\n\t\t\t</div>\n\t\t\t<!-- normal submenu -->\n\t\t\t<ng-container *ngIf=\"item['custom-class'] !== 'kt-menu__item--submenu-fullheight'\"\n\t\t\t\t[ngTemplateOutlet]=\"menuSubmenuTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\">\n\t\t\t</ng-container>\n\t\t</div>\n\t</li>\n\n</ng-template>\n\n<ng-template #menuSubmenuTemplate let-item=\"item\" let-parentItem=\"parentItem\">\n\t<ul class=\"kt-menu__subnav\">\n\t\t<ng-container *ngFor=\"let child of item.submenu\">\n\t\t\t<ng-container *ngIf=\"child.section\" [ngTemplateOutlet]=\"menuItemSectionTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: child, parentItem: item }\"></ng-container>\n\t\t\t<ng-container *ngIf=\"child.separator\" [ngTemplateOutlet]=\"menuItemSeparatorTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: child, parentItem: item }\"></ng-container>\n\t\t\t<ng-container *ngIf=\"child.title\" [ngTemplateOutlet]=\"menuItemTemplate\"\n\t\t\t\t[ngTemplateOutletContext]=\"{ item: child, parentItem: item }\"></ng-container>\n\t\t</ng-container>\n\t</ul>\n</ng-template>\n\n<ng-template #menuItemTextTemplate let-item=\"item\" let-parentItem=\"parentItem\">\n\t<!-- if menu item has icon -->\n\t<i *ngIf=\"item.icon\" class=\"kt-menu__link-icon\" [ngClass]=\"item.icon\"></i>\n\n\t<!-- if menu item using bullet -->\n\t<i *ngIf=\"parentItem && parentItem.bullet === 'dot'\" class=\"kt-menu__link-bullet kt-menu__link-bullet--dot\">\n\t\t<span></span>\n\t</i>\n\t<i *ngIf=\"parentItem && parentItem.bullet === 'line'\" class=\"kt-menu__link-bullet kt-menu__link-bullet--line\">\n\t\t<span></span>\n\t</i>\n\n\t<!-- menu item title text -->\n\t<span class=\"kt-menu__link-text\" [translate]=\"item.translate\">{{item.title}}</span>\n\t<!-- menu item with badge -->\n\t<span *ngIf=\"item.badge\" class=\"kt-menu__link-badge\">\n\t\t<span class=\"kt-badge\" [ngClass]=\"item.badge.type\">{{item.badge.value}}</span>\n\t</span>\n\n\t<!-- if menu item has submenu child then put arrow icon -->\n\t<i *ngIf=\"item.submenu\" class=\"kt-menu__ver-arrow la la-angle-right\"></i>\n</ng-template>\n\n<ng-template #menuItemSeparatorTemplate let-item=\"item\" let-parentItem=\"parentItem\">\n\t<li class=\"kt-menu__separator\"><span></span></li>\n</ng-template>\n\n<ng-template #menuItemSectionTemplate let-item=\"item\" let-parentItem=\"parentItem\">\n\t<li class=\"kt-menu__section\">\n\t\t<h4 class=\"kt-menu__section-text\">{{item.section}}</h4>\n\t\t<i class=\"kt-menu__section-icon flaticon-more-v2\"></i>\n\t</li>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/base/base.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/base/base.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Page -->\n<ng-container *ngIf=\"selfLayout !== 'blank'; else blankLayout\">\n\t<!-- begin:: Header Mobile -->\n\t<kt-header-mobile></kt-header-mobile>\n\t<!-- end:: Header Mobile -->\n\n\t<div class=\"kt-grid kt-grid--hor kt-grid--root\">\n\t\t<!-- begin::Body -->\n\t\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page\">\n\t\t\t<!-- begin:: Aside Left -->\n\t\t\t<ng-container *ngIf=\"asideDisplay\">\n\t\t\t\t<button class=\"kt-aside-close\" id=\"kt_aside_close_btn\"><i class=\"la la-close\"></i></button>\n\t\t\t\t<kt-aside-left></kt-aside-left>\n\t\t\t</ng-container>\n\t\t\t<!-- end:: Aside Left -->\n\n\t\t\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper\" id=\"kt_wrapper\">\n\t\t\t\t<!-- begin:: Header -->\n\t\t\t\t<kt-header *ngIf=\"desktopHeaderDisplay\"></kt-header>\n\t\t\t\t<!-- end:: Header -->\n\n\t\t\t\t<!-- begin:: Content -->\n\t\t\t\t<div class=\"kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor\" id=\"kt_content\" [ngClass]=\"{'kt-content--fit-top': fitTop}\">\n\t\t\t\t\t<!-- begin:: Content Head -->\n\t\t\t\t\t<kt-subheader *ngIf=\"subheaderDisplay\"></kt-subheader>\n\t\t\t\t\t<!-- end:: Content Head -->\n\n\t\t\t\t\t<!-- begin:: Content Body -->\n\t\t\t\t\t<div ktContentAnimate class=\"kt-container kt-grid__item kt-grid__item--fluid\" [ngClass]=\"{'kt-container--fluid': fluid}\">\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t</div>\n\t\t\t\t\t<!-- end:: Content Body -->\n\t\t\t\t</div>\n\t\t\t\t<!-- end:: Content -->\n\n\t\t\t\t<kt-footer></kt-footer>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- end:: Body -->\n\n<!--\t\t<kt-quick-panel></kt-quick-panel>-->\n\t\t<kt-scroll-top></kt-scroll-top>\n<!--\t\t<kt-sticky-toolbar></kt-sticky-toolbar>-->\n\t</div>\n</ng-container>\n<!-- end:: Page -->\n\n<ng-template #blankLayout>\n\t<router-outlet></router-outlet>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/brand/brand.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/brand/brand.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Brand -->\n<div class=\"kt-aside__brand kt-grid__item\" [ngClass]=\"htmlClassService.getClasses('brand', true)\" id=\"kt_aside_brand\">\n\t<div class=\"kt-aside__brand-logo\">\n\t\t<a href=\"javascript:;\" routerLink=\"/\">\n\t\t\t<img alt=\"logo\" [attr.src]=\"headerLogo\"/>\n\t\t</a>\n\t</div>\n\t<div class=\"kt-aside__brand-tools\">\n\t\t<button ktToggle [options]=\"toggleOptions\" class=\"kt-aside__brand-aside-toggler kt-aside__brand-aside-toggler--left\" id=\"kt_aside_toggler\">\n\t\t\t<span [inlineSVG]=\"'./assets/media/icons/svg/Navigation/Angle-double-left.svg'\"></span>\n\t\t\t<span [inlineSVG]=\"'./assets/media/icons/svg/Navigation/Angle-double-right.svg'\"></span>\n\t\t</button>\n\t</div>\n</div>\n<!-- end:: Brand -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/content/error-page/error-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/content/error-page/error-page.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-error\n\t[type]=\"type\"\n\t[image]=\"image\"\n\t[code]=\"code\"\n\t[title]=\"title\"\n\t[subtitle]=\"subtitle\"\n\t[desc]=\"desc\"\n\t[return]=\"return\"></kt-error>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/footer/footer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Footer -->\n<div class=\"kt-footer kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop\" id=\"kt_footer\">\n\t<div class=\"kt-container\" [ngClass]=\"{'kt-container--fluid': fluid}\">\n\t\t<div class=\"kt-footer__copyright\">\n\t\t\t{{today | date:'yyyy'}}&nbsp;&copy;&nbsp;<a href=\"http://keenthemes.com/metronic\" target=\"_blank\" class=\"kt-link\">Blue Marble Enterprises, Inc.</a>\n\t\t</div>\n\t\t<div class=\"kt-footer__menu\">\n\t\t\t<a href=\"#\" target=\"_blank\" class=\"kt-footer__menu-link kt-link\">About</a>\n\t\t\t<a href=\"#\" target=\"_blank\" class=\"kt-footer__menu-link kt-link\">Contact</a>\n\t\t</div>\n\t</div>\n</div>\n<!-- end:: Footer -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/header/header-mobile/header-mobile.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/header/header-mobile/header-mobile.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Header Mobile -->\n<div id=\"kt_header_mobile\" class=\"kt-header-mobile kt-header-mobile--fixed\">\n\t<div class=\"kt-header-mobile__logo\">\n\t\t<a routerLink=\"/\">\n\t\t\t<img alt=\"logo\" [attr.src]=\"headerLogo\"/>\n\t\t</a>\n\t</div>\n\t<div class=\"kt-header-mobile__toolbar\">\n\t\t<button [hidden]=\"!asideDisplay\" class=\"kt-header-mobile__toggler kt-header-mobile__toggler--left\" id=\"kt_aside_mobile_toggler\"><span></span></button>\n\t\t<button class=\"kt-header-mobile__toggler\" id=\"kt_header_mobile_toggler\"><span></span></button>\n\t\t<button ktToggle [options]=\"toggleOptions\" class=\"kt-header-mobile__topbar-toggler\" id=\"kt_header_mobile_topbar_toggler\"><i class=\"flaticon-more\"></i></button>\n\t</div>\n</div>\n<!-- end:: Header Mobile -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/header/header.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin: Header -->\n<div ktHeader #ktHeader class=\"kt-header kt-grid__item\" [ngClass]=\"htmlClassService.getClasses('header', true)\" id=\"kt_header\">\n\t<ngb-progressbar class=\"kt-loading-bar\" *ngIf=\"(loader.progress$|async) > 0\" [value]=\"loader.progress$|async\" height=\"3px\"></ngb-progressbar>\n\n\t<!-- begin: Header Menu -->\n\t<kt-menu-horizontal *ngIf=\"menuHeaderDisplay\"></kt-menu-horizontal>\n\t<!-- end: Header Menu -->\n\n\t<!-- begin:: Header Topbar -->\n\t<!-- empty div to fix topbar to stay on the right when menu-horizontal is hidden -->\n\t<div *ngIf=\"!menuHeaderDisplay\"></div>\n\t<kt-topbar></kt-topbar>\n\t<!-- end:: Header Topbar -->\n</div>\n<!-- end: Header -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/header/menu-horizontal/menu-horizontal.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/header/menu-horizontal/menu-horizontal.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN: Horizontal Menu -->\n<div ktOffcanvas [options]=\"offcanvasOptions\" class=\"kt-header-menu-wrapper\" id=\"kt_header_menu_wrapper\">\n\t<div ktMenu [options]=\"menuOptions\" id=\"kt_header_menu\" class=\"kt-header-menu kt-header-menu-mobile\" [ngClass]=\"htmlClassService.getClasses('header_menu', true)\">\n\t\t<ul class=\"kt-menu__nav\" [ngClass]=\"htmlClassService.getClasses('header_menu_nav', true)\">\n\t\t\t<ng-container *ngFor=\"let item of menuHorService.menuList$ | async\">\n\t\t\t\t<ng-container *ngIf=\"item.title\" [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ item: item }\"></ng-container>\n\t\t\t</ng-container>\n\t\t</ul>\n\t</div>\n</div>\n<!-- END: Horizontal Menu -->\n\n\n<ng-template #menuTemplate let-item=\"item\" let-parentItem=\"parentItem\">\n\t<li [attr.aria-haspopup]=\"true\"\n\t\t[attr.data-ktmenu-submenu-toggle]=\"getItemAttrSubmenuToggle(item)\"\n\t\t(mouseleave)=\"mouseLeave($event)\"\n\t\t(mouseenter)=\"mouseEnter($event)\"\n\t\t[ngClass]=\"getItemCssClasses(item)\">\n\n\t\t<!-- if item has submenu -->\n\t\t<ng-container *ngIf=\"item.submenu\">\n\t\t\t<a href=\"javascript:;\" class=\"kt-menu__link kt-menu__toggle\">\n\n\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuItemInnerTemplate\" [ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\n\n\t\t\t\t<ng-container *ngIf=\"rootArrowEnabled\">\n\t\t\t\t\t<!-- arrow icons -->\n\t\t\t\t\t<i *ngIf=\"item.submenu && item.root\" class=\"kt-menu__hor-arrow la la-angle-down\"></i>\n\t\t\t\t\t<i *ngIf=\"item.submenu && item.root\" class=\"kt-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t\t</ng-container>\n\t\t\t\t<!-- else arrow icons -->\n\t\t\t\t<i *ngIf=\"item.submenu && !item.root\" class=\"kt-menu__hor-arrow la la-angle-right\"></i>\n\t\t\t\t<i *ngIf=\"item.submenu && !item.root\" class=\"kt-menu__ver-arrow la la-angle-right\"></i>\n\t\t\t</a>\n\t\t</ng-container>\n\n\t\t<!-- if item hasn't sumbenu -->\n\t\t<ng-container *ngIf=\"!item.submenu\">\n\t\t\t<a [routerLink]=\"item.page\" class=\"kt-menu__link kt-menu__toggle\">\n\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuItemInnerTemplate\" [ngTemplateOutletContext]=\"{ item: item, parentItem: parentItem }\"></ng-container>\n\t\t\t</a>\n\t\t</ng-container>\n\n\t\t<!-- if menu item has submenu child then recursively call new menu item component -->\n\t\t<ng-container *ngIf=\"item.submenu\">\n\t\t\t<div class=\"kt-menu__submenu\" [ngClass]=\"getItemMenuSubmenuClass(item)\" [ngStyle]=\"{ 'width': item.submenu.width }\">\n\t\t\t\t<span class=\"kt-menu__arrow\" [ngClass]=\"{ 'kt-menu__arrow--adjust': item.root }\"></span>\n\n\t\t\t\t<ul *ngIf=\"item.submenu?.length\" class=\"kt-menu__subnav\">\n\t\t\t\t\t<ng-container *ngFor=\"let child of item.submenu\">\n\t\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ item: child, parentItem: item }\">\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ul>\n\n\t\t\t\t<ul *ngIf=\"item.submenu.items?.length\" class=\"kt-menu__subnav\">\n\t\t\t\t\t<ng-container *ngFor=\"let child of item.submenu.items\">\n\t\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ item: child, parentItem: item }\">\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ul>\n\n\t\t\t\t<div *ngIf=\"item.submenu.type === 'mega' && item.submenu.columns?.length\" class=\"kt-menu__subnav\">\n\t\t\t\t\t<ul class=\"kt-menu__content\">\n\t\t\t\t\t\t<ng-container *ngFor=\"let child of item.submenu.columns\">\n\t\t\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuColumnTemplate\" [ngTemplateOutletContext]=\"{ item: child }\"></ng-container>\n\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</ng-container>\n\t</li>\n</ng-template>\n\n<!-- item inner -->\n<ng-template #menuItemInnerTemplate let-item=\"item\" let-parentItem=\"parentItem\">\n\t<!-- if menu item has icon -->\n\t<i *ngIf=\"item.icon\" class=\"kt-menu__link-icon\" [ngClass]=\"item.icon\"></i>\n\n\t<ng-container *ngIf=\"!item.icon\">\n\t\t<!-- if menu item using bullet -->\n\t\t<i *ngIf=\"parentItem && parentItem.bullet === 'dot' || item.bullet === 'dot'\" class=\"kt-menu__link-bullet kt-menu__link-bullet--dot\">\n\t\t\t<span></span>\n\t\t</i>\n\t\t<i *ngIf=\"parentItem && parentItem.bullet === 'line' || item.bullet === 'line'\" class=\"kt-menu__link-bullet kt-menu__link-bullet--line\">\n\t\t\t<span></span>\n\t\t</i>\n\t</ng-container>\n\n\t<ng-container *ngIf=\"!item.badge; else menuLinkBadge\">\n\t\t<span class=\"kt-menu__item-here\"></span>\n\t\t<!-- menu item title text -->\n\t\t<span class=\"kt-menu__link-text\" [translate]=\"item.translate\">\n\t\t\t{{item.title}}\n\t\t</span>\n\t</ng-container>\n\n\t<ng-template #menuLinkBadge>\n\t\t<!-- menu item with badge -->\n\t\t<span class=\"kt-menu__link-text\" [translate]=\"item.translate\">{{item.title}}</span>\n\t\t<span class=\"kt-menu__link-badge\">\n\t\t\t<span class=\"kt-badge kt-badge--brand kt-badge--inline kt-badge--pill\" [ngClass]=\"item.badge.type\" [translate]=\"item.badge.translate\">{{item.badge.value}}</span>\n\t\t</span>\n\t</ng-template>\n</ng-template>\n\n<!-- item column -->\n<ng-template #menuColumnTemplate let-item=\"item\">\n\t<li class=\"kt-menu__item\">\n\t\t<h3 class=\"kt-menu__heading kt-menu__toggle\">\n\t\t\t<span class=\"kt-menu__link-text\" [translate]=\"item.heading.translate\">\n\t\t\t\t{{item.heading.title}}\n\t\t\t</span>\n\t\t\t<i class=\"kt-menu__ver-arrow la la-angle-right\"></i>\n\t\t</h3>\n\t\t<ng-container *ngIf=\"item.items?.length\">\n\t\t\t<ul class=\"kt-menu__inner\">\n\t\t\t\t<ng-container *ngFor=\"let child of item.items\">\n\t\t\t\t\t<ng-container [ngTemplateOutlet]=\"menuTemplate\" [ngTemplateOutletContext]=\"{ item: child, parentItem: item }\">\n\t\t\t\t\t</ng-container>\n\t\t\t\t</ng-container>\n\t\t\t</ul>\n\t\t</ng-container>\n\t</li>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/header/topbar/topbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/header/topbar/topbar.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Header Topbar -->\n<div class=\"kt-header__topbar\">\n\t<!--begin: Search -->\n<!--\t<kt-search-dropdown [icon]=\"'./assets/media/icons/svg/General/Search.svg'\" [useSVG]=\"true\"></kt-search-dropdown>-->\n\t<!--end: Search -->\n\t<!--begin: Notifications -->\n<!--\t<kt-notification [bgImage]=\"'./assets/media/misc/bg-1.jpg'\" [pulse]=\"true\" [skin]=\"'dark'\" [icon]=\"'./assets/media/icons/svg/Code/Compiling.svg'\" [useSVG]=\"true\"></kt-notification>-->\n\t<!--end: Notifications -->\n\t<!--begin: Quick actions -->\n<!--\t<kt-quick-action [bgImage]=\"'./assets/media/misc/bg-2.jpg'\" [skin]=\"'dark'\" [icon]=\"'./assets/media/icons/svg/Media/Equalizer.svg'\" [useSVG]=\"true\"></kt-quick-action>-->\n\t<!--end: Quick actions -->\n\t<!--begin: My Cart -->\n<!--\t<kt-cart [bgImage]=\"'./assets/media/misc/bg-1.jpg'\" [icon]=\"'./assets/media/icons/svg/Shopping/Cart%233.svg'\" [useSVG]=\"true\"></kt-cart>-->\n\t<!--end: My Cart -->\n\t<!--begin: Quick panel toggler -->\n<!--\t<div class=\"kt-header__topbar-item kt-header__topbar-item&#45;&#45;quick-panel\" data-placement=\"bottom\" ngbTooltip=\"Quick panel\">-->\n<!--\t\t<span class=\"kt-header__topbar-icon\" id=\"kt_quick_panel_toggler_btn\">-->\n<!--\t\t\t<span class=\"kt-svg-icon\" [inlineSVG]=\"'./assets/media/icons/svg/Layout/Layout-4-blocks.svg'\"></span>-->\n<!--\t\t</span>-->\n<!--\t</div>-->\n\t<!--end: Quick panel toggler -->\n\t<!--begin: Language bar -->\n<!--\t<kt-language-selector></kt-language-selector>-->\n\t<!--end: Language bar -->\n\t<!--begin: User bar -->\n\t<kt-user-profile></kt-user-profile>\n\t<!--end: User bar -->\n</div>\n<!-- end:: Header Topbar -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/reviewer-base/reviewer-base.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/reviewer-base/reviewer-base.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- begin:: Page -->\n<ng-container *ngIf=\"selfLayout !== 'blank'; else blankLayout\">\n\t<!-- begin:: Header Mobile -->\n\t<kt-header-mobile></kt-header-mobile>\n\t<!-- end:: Header Mobile -->\n\n\t<div class=\"kt-grid kt-grid--hor kt-grid--root\">\n\t\t<!-- begin::Body -->\n\t\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page\">\n\t\t\t<!-- begin:: Aside Left -->\n\t\t\t<ng-container *ngIf=\"asideDisplay\">\n\t\t\t\t<button class=\"kt-aside-close\" id=\"kt_aside_close_btn\"><i class=\"la la-close\"></i></button>\n\t\t\t\t<kt-aside-left></kt-aside-left>\n\t\t\t</ng-container>\n\t\t\t<!-- end:: Aside Left -->\n\n\t\t\t<div class=\"kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper\" id=\"kt_wrapper\">\n\t\t\t\t<!-- begin:: Header -->\n\t\t\t\t<kt-header *ngIf=\"desktopHeaderDisplay\"></kt-header>\n\t\t\t\t<!-- end:: Header -->\n\n\t\t\t\t<!-- begin:: Content -->\n\t\t\t\t<div class=\"kt-content kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor\" id=\"kt_content\"\n\t\t\t\t\t [ngClass]=\"{'kt-content--fit-top': fitTop}\">\n\t\t\t\t\t<!-- begin:: Content Head -->\n\t\t\t\t\t<kt-subheader *ngIf=\"subheaderDisplay\"></kt-subheader>\n\t\t\t\t\t<!-- end:: Content Head -->\n\n\n\n\t\t\t\t\t<!-- begin:: Content Body -->\n\t\t\t\t\t<div ktContentAnimate class=\"kt-container kt-grid__item kt-grid__item--fluid\"\n\t\t\t\t\t\t [ngClass]=\"{'kt-container--fluid': fluid}\">\n\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!-- end:: Content Body -->\n\t\t\t\t</div>\n\t\t\t\t<!-- end:: Content -->\n\n\t\t\t\t<!--\t\t\t\t<kt-footer></kt-footer>-->\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- end:: Body -->\n\n\t\t<!--\t\t<kt-quick-panel></kt-quick-panel>-->\n\t\t<kt-scroll-top></kt-scroll-top>\n<!--\t\t<kt-sticky-toolbar></kt-sticky-toolbar>-->\n\n\t</div>\n</ng-container>\n<!-- end:: Page -->\n\n\n\n\n<ng-template #blankLayout>\n\t<router-outlet></router-outlet>\n</ng-template>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/theme/subheader/subheader.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/theme/subheader/subheader.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<kt-subheader1 *ngIf=\"!layout || layout === 'subheader-v1'\" [fluid]=\"fluid\" [clear]=\"clear\"></kt-subheader1>\n<!--<kt-subheader2 *ngIf=\"layout === 'subheader-v2'\" [fluid]=\"fluid\" [clear]=\"clear\"></kt-subheader2>-->\n<!--<kt-subheader3 *ngIf=\"layout === 'subheader-v3'\" [fluid]=\"fluid\" [clear]=\"clear\"></kt-subheader3>-->\n"

/***/ }),

/***/ "./src/app/core/_config/menu.config.ts":
/*!*********************************************!*\
  !*** ./src/app/core/_config/menu.config.ts ***!
  \*********************************************/
/*! exports provided: MenuConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfig", function() { return MenuConfig; });
var MenuConfig = /** @class */ (function () {
    function MenuConfig() {
        this.defaults = {
            header: {
                self: {},
                items: [
                    {
                        title: 'Dashboard',
                        root: true,
                        alignment: 'left',
                        page: '/admin/dashboard',
                        translate: 'MENU.DASHBOARD',
                    },
                    {
                        title: 'Assignments',
                        root: true,
                        alignment: 'left',
                        page: '/admin/assignment',
                    },
                    {
                        title: 'Works',
                        root: true,
                        alignment: 'left',
                        page: '/admin/allworks',
                    },
                    {
                        title: 'Members',
                        root: true,
                        alignment: 'left',
                        page: '/admin/user-management',
                    },
                ]
            },
            aside: {
                self: {},
                items: [
                    {
                        title: 'Dashboard',
                        root: true,
                        icon: 'flaticon2-architecture-and-city',
                        page: '/admin/dashboard',
                        bullet: 'dot',
                    },
                    // {
                    // 	title: 'Incoming Works', // <= Title of the page
                    // 	root: true,
                    // 	page: '/admin/incoming-work', // <= URL
                    // 	icon: 'flaticon-line-graph' // <= Choose the icon class
                    // },
                    // {
                    // 	title: 'Assignments', // <= Title of the page
                    // 	root: true,
                    // 	page: '/admin/assignment', // <= URL
                    // 	icon: 'flaticon-line-graph' // <= Choose the icon class
                    // },
                    {
                        title: 'Assignments',
                        root: true,
                        page: '/admin/assignment',
                        icon: 'flaticon-line-graph' // <= Choose the icon class
                    },
                    // {
                    // 	title: 'In-Progress', // <= Title of the page
                    // 	root: true,
                    // 	page: '/admin/in-progress', // <= URL
                    // 	icon: 'flaticon-line-graph' // <= Choose the icon class
                    // },
                    {
                        title: 'Reviews In Progress',
                        root: true,
                        page: '/admin/review-in-progress',
                        icon: 'flaticon-line-graph' // <= Choose the icon class
                    },
                    {
                        title: 'Completed Reviews',
                        root: true,
                        page: '/admin/completed-review',
                        icon: 'flaticon-line-graph' // <= Choose the icon class
                    },
                    {
                        title: 'Works',
                        root: true,
                        page: '/admin/allworks',
                        icon: 'flaticon-line-graph' // <= Choose the icon class
                    },
                    { section: 'Members' },
                    // {
                    // 	title: 'Members',
                    // 	bullet: 'dot',
                    // 	icon: 'flaticon2-list-2',
                    // 	root: true,
                    // 	permission: 'accessToECommerceModule',
                    // },
                    {
                        title: 'User Management',
                        root: true,
                        bullet: 'dot',
                        icon: 'flaticon2-user-outline-symbol',
                        submenu: [
                            {
                                title: 'Users',
                                page: '/admin/user-management/users'
                            },
                        ]
                    },
                    { section: 'Database' },
                    // {
                    // 	title: 'Members',
                    // 	bullet: 'dot',
                    // 	icon: 'flaticon2-list-2',
                    // 	root: true,
                    // 	permission: 'accessToECommerceModule',
                    // },
                    {
                        title: 'Export/Import Database',
                        root: true,
                        page: '/admin/export-import-db',
                        icon: 'flaticon-open-box',
                    },
                    { section: 'Project' },
                    // {
                    // 	title: 'Members',
                    // 	bullet: 'dot',
                    // 	icon: 'flaticon2-list-2',
                    // 	root: true,
                    // 	permission: 'accessToECommerceModule',
                    // },
                    {
                        title: 'Scorecard Rubric',
                        root: true,
                        page: '/admin/rubric',
                        icon: 'flaticon-open-box',
                    },
                ]
            },
        };
    }
    Object.defineProperty(MenuConfig.prototype, "configs", {
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return MenuConfig;
}());



/***/ }),

/***/ "./src/app/core/_config/page.config.ts":
/*!*********************************************!*\
  !*** ./src/app/core/_config/page.config.ts ***!
  \*********************************************/
/*! exports provided: PageConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageConfig", function() { return PageConfig; });
var PageConfig = /** @class */ (function () {
    function PageConfig() {
        this.defaults = {
            dashboard: {
                page: {
                    'title': 'Dashboard',
                    'desc': 'Latest updates and statistic charts'
                },
            },
            'incoming-work': {
                page: {
                    'title': 'Incoming Works'
                },
            },
            'assignment': {
                page: {
                    'title': 'Assignments'
                },
            },
            'user-management': {
                users: {
                    page: { title: 'Users', desc: '' }
                },
                roles: {
                    page: { title: 'Roles', desc: '' }
                }
            },
            // builder: {
            // 	page: {title: 'Layout Builder', desc: ''}
            // },
            header: {
                actions: {
                    page: { title: 'Actions', desc: 'Actions example page' }
                }
            },
            profile: {
                page: { title: 'User Profile', desc: '' }
            },
            error: {
                404: {
                    page: { title: '404 Not Found', desc: '', subheader: false }
                },
                403: {
                    page: { title: '403 Access Forbidden', desc: '', subheader: false }
                }
            },
        };
    }
    Object.defineProperty(PageConfig.prototype, "configs", {
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return PageConfig;
}());



/***/ }),

/***/ "./src/app/core/_config/reviewer-layout.config.ts":
/*!********************************************************!*\
  !*** ./src/app/core/_config/reviewer-layout.config.ts ***!
  \********************************************************/
/*! exports provided: ReviewerLayoutConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerLayoutConfig", function() { return ReviewerLayoutConfig; });
var ReviewerLayoutConfig = /** @class */ (function () {
    function ReviewerLayoutConfig() {
        this.defaults = {
            "demo": "demo1",
            "self": {
                "layout": "fluid",
                "body": {
                    "background-image": "./assets/media/misc/bg-1.jpg"
                },
                "logo": {
                    "dark": "./assets/media/logos/logo-light.png",
                    "light": "./assets/media/logos/logo-dark.png",
                    "brand": "./assets/media/logos/logo-light.png",
                    "green": "./assets/media/logos/logo-light.png"
                }
            },
            "loader": {
                "enabled": true,
                "type": "",
                "logo": "./assets/media/logos/logo-mini-md.png",
                "message": "Please wait..."
            },
            "colors": {
                "state": {
                    "brand": "#5d78ff",
                    "dark": "#282a3c",
                    "light": "#ffffff",
                    "primary": "#5867dd",
                    "success": "#34bfa3",
                    "info": "#36a3f7",
                    "warning": "#ffb822",
                    "danger": "#fd3995"
                },
                "base": {
                    "label": [
                        "#c5cbe3",
                        "#a1a8c3",
                        "#3d4465",
                        "#3e4466"
                    ],
                    "shape": [
                        "#f0f3ff",
                        "#d9dffa",
                        "#afb4d4",
                        "#646c9a"
                    ]
                }
            },
            "header": {
                "self": {
                    "skin": "light",
                    "fixed": {
                        "desktop": true,
                        "mobile": true
                    }
                },
                "menu": {
                    "self": {
                        "display": true,
                        "layout": "default",
                        "root-arrow": false
                    },
                    "desktop": {
                        "arrow": true,
                        "toggle": "click",
                        "submenu": {
                            "skin": "light",
                            "arrow": true
                        }
                    },
                    "mobile": {
                        "submenu": {
                            "skin": "dark",
                            "accordion": true
                        }
                    }
                }
            },
            "subheader": {
                "display": true,
                "layout": "subheader-v1",
                "fixed": true,
                "width": "fluid",
                "style": "solid"
            },
            "content": {
                "width": "fluid"
            },
            "brand": {
                "self": {
                    "skin": "dark"
                }
            },
            "aside": {
                "self": {
                    "skin": "dark",
                    "display": true,
                    "fixed": true,
                    "minimize": {
                        "toggle": true,
                        "default": false
                    }
                },
                "footer": {
                    "self": {
                        "display": true
                    }
                },
                "menu": {
                    "dropdown": false,
                    "scroll": false,
                    "submenu": {
                        "accordion": true,
                        "dropdown": {
                            "arrow": true,
                            "hover-timeout": 500
                        }
                    }
                }
            },
            "footer": {
                "self": {
                    "width": "fluid"
                }
            }
        };
    }
    Object.defineProperty(ReviewerLayoutConfig.prototype, "configs", {
        /**
         * Good place for getting the remote config
         */
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return ReviewerLayoutConfig;
}());



/***/ }),

/***/ "./src/app/core/_config/reviewer-page.config.ts":
/*!******************************************************!*\
  !*** ./src/app/core/_config/reviewer-page.config.ts ***!
  \******************************************************/
/*! exports provided: ReviewerPageConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerPageConfig", function() { return ReviewerPageConfig; });
var ReviewerPageConfig = /** @class */ (function () {
    function ReviewerPageConfig() {
        this.defaults = {
            dashboard: {
                page: {
                    'title': 'Dashboard',
                    'desc': 'Latest updates and statistic charts'
                },
            },
            header: {
                actions: {
                    page: { title: 'Actions', desc: 'Actions example page' }
                }
            },
            profile: {
                page: { title: 'User Profile', desc: '' }
            },
            error: {
                404: {
                    page: { title: '404 Not Found', desc: '', subheader: false }
                },
                403: {
                    page: { title: '403 Access Forbidden', desc: '', subheader: false }
                }
            },
        };
    }
    Object.defineProperty(ReviewerPageConfig.prototype, "configs", {
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return ReviewerPageConfig;
}());



/***/ }),

/***/ "./src/app/core/_config/reviewer_menu.config.ts":
/*!******************************************************!*\
  !*** ./src/app/core/_config/reviewer_menu.config.ts ***!
  \******************************************************/
/*! exports provided: ReviewerMenuConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerMenuConfig", function() { return ReviewerMenuConfig; });
var ReviewerMenuConfig = /** @class */ (function () {
    function ReviewerMenuConfig() {
        this.defaults = {
            header: {
                self: {},
                items: [
                    {
                        title: 'Current Assignments',
                        root: true,
                        alignment: 'left',
                        page: '/reviewer/dashboard',
                    },
                    {
                        title: 'Assignment History',
                        root: true,
                        alignment: 'left',
                        page: '/reviewer/assignment_history',
                    },
                    {
                        title: 'Reviews',
                        root: true,
                        alignment: 'left',
                        page: '/reviewer/reviews',
                    },
                ]
            },
            aside: {
                self: {},
                items: [
                    {
                        title: 'Dashboard',
                        root: true,
                        icon: 'flaticon2-architecture-and-city',
                        page: '/reviewer/dashboard',
                        // translate: 'MENU.DASHBOARD',
                        bullet: 'dot',
                    },
                    {
                        title: 'Assignment History',
                        root: true,
                        page: '/reviewer/assignment_history',
                        icon: 'flaticon-line-graph' // <= Choose the icon class
                    },
                    {
                        title: 'Reviews',
                        root: true,
                        page: '/reviewer/reviews',
                        icon: 'flaticon-line-graph' // <= Choose the icon class
                    },
                ]
            },
        };
    }
    Object.defineProperty(ReviewerMenuConfig.prototype, "configs", {
        get: function () {
            return this.defaults;
        },
        enumerable: true,
        configurable: true
    });
    return ReviewerMenuConfig;
}());



/***/ }),

/***/ "./src/app/core/reviewer/_actions/assignment.actions.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/reviewer/_actions/assignment.actions.ts ***!
  \**************************************************************/
/*! exports provided: AssignmentActionTypes, AssignmentRequested, AssignmentLoaded, AssignmentCompleted, AssignmentHistoryRequested, AssignmentHistoryLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentActionTypes", function() { return AssignmentActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentRequested", function() { return AssignmentRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentLoaded", function() { return AssignmentLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentCompleted", function() { return AssignmentCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentHistoryRequested", function() { return AssignmentHistoryRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentHistoryLoaded", function() { return AssignmentHistoryLoaded; });
var AssignmentActionTypes;
(function (AssignmentActionTypes) {
    AssignmentActionTypes["AssignmentsRequested"] = "[Reviewer] Assignments Requested";
    AssignmentActionTypes["AssignmentsLoaded"] = "[Reviewer] Assignments Loaded";
    AssignmentActionTypes["AssignmentCompleted"] = "[Reviewer] Assignment Completed";
    AssignmentActionTypes["AssignmentHistoryRequested"] = "[Reviewer] Assignment History Requested";
    AssignmentActionTypes["AssignmentHistoryLoaded"] = "[Reviewer] Assignment History Loaded";
})(AssignmentActionTypes || (AssignmentActionTypes = {}));
var AssignmentRequested = /** @class */ (function () {
    function AssignmentRequested(id) {
        this.id = id;
        this.type = AssignmentActionTypes.AssignmentsRequested;
    }
    AssignmentRequested.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return AssignmentRequested;
}());

var AssignmentLoaded = /** @class */ (function () {
    function AssignmentLoaded(payload) {
        this.payload = payload;
        this.type = AssignmentActionTypes.AssignmentsLoaded;
    }
    AssignmentLoaded.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return AssignmentLoaded;
}());

var AssignmentCompleted = /** @class */ (function () {
    function AssignmentCompleted(payload) {
        this.payload = payload;
        this.type = AssignmentActionTypes.AssignmentCompleted;
    }
    AssignmentCompleted.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return AssignmentCompleted;
}());

var AssignmentHistoryRequested = /** @class */ (function () {
    function AssignmentHistoryRequested(id) {
        this.id = id;
        this.type = AssignmentActionTypes.AssignmentHistoryRequested;
    }
    AssignmentHistoryRequested.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return AssignmentHistoryRequested;
}());

var AssignmentHistoryLoaded = /** @class */ (function () {
    function AssignmentHistoryLoaded(payload) {
        this.payload = payload;
        this.type = AssignmentActionTypes.AssignmentHistoryLoaded;
    }
    AssignmentHistoryLoaded.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return AssignmentHistoryLoaded;
}());



/***/ }),

/***/ "./src/app/core/reviewer/_actions/message.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/reviewer/_actions/message.actions.ts ***!
  \***********************************************************/
/*! exports provided: MessageActionTypes, MessagesRequested, MessagesLoaded, NewMessageCreated, NewMessageSavedOnServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageActionTypes", function() { return MessageActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesRequested", function() { return MessagesRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesLoaded", function() { return MessagesLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageCreated", function() { return NewMessageCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMessageSavedOnServer", function() { return NewMessageSavedOnServer; });
/* harmony import */ var _models_message_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_models/message.model */ "./src/app/core/reviewer/_models/message.model.ts");

var MessageActionTypes;
(function (MessageActionTypes) {
    MessageActionTypes["MessagesRequested"] = "[Reviewer] Messages Requested";
    MessageActionTypes["MessagesLoaded"] = "[Reviewer] Messages Loaded";
    MessageActionTypes["NewMessageCreated"] = "[Reviewer] New Message Created";
    MessageActionTypes["NewMessageSavedOnServer"] = "[Reviewer] New Message Saved On Server";
})(MessageActionTypes || (MessageActionTypes = {}));
var MessagesRequested = /** @class */ (function () {
    function MessagesRequested(workID) {
        this.workID = workID;
        this.type = MessageActionTypes.MessagesRequested;
    }
    MessagesRequested.ctorParameters = function () { return [
        { type: Number }
    ]; };
    return MessagesRequested;
}());

var MessagesLoaded = /** @class */ (function () {
    function MessagesLoaded(payload) {
        this.payload = payload;
        this.type = MessageActionTypes.MessagesLoaded;
    }
    MessagesLoaded.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return MessagesLoaded;
}());

var NewMessageCreated = /** @class */ (function () {
    function NewMessageCreated(payload) {
        this.payload = payload;
        this.type = MessageActionTypes.NewMessageCreated;
    }
    NewMessageCreated.ctorParameters = function () { return [
        { type: _models_message_model__WEBPACK_IMPORTED_MODULE_0__["Message"] }
    ]; };
    return NewMessageCreated;
}());

var NewMessageSavedOnServer = /** @class */ (function () {
    function NewMessageSavedOnServer(payload) {
        this.payload = payload;
        this.type = MessageActionTypes.NewMessageSavedOnServer;
    }
    NewMessageSavedOnServer.ctorParameters = function () { return [
        { type: _models_message_model__WEBPACK_IMPORTED_MODULE_0__["Message"] }
    ]; };
    return NewMessageSavedOnServer;
}());



/***/ }),

/***/ "./src/app/core/reviewer/_actions/review-history.actions.ts":
/*!******************************************************************!*\
  !*** ./src/app/core/reviewer/_actions/review-history.actions.ts ***!
  \******************************************************************/
/*! exports provided: ReviewHistoryActionTypes, ReviewHistoryRequested, ReviewHistoryLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewHistoryActionTypes", function() { return ReviewHistoryActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewHistoryRequested", function() { return ReviewHistoryRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewHistoryLoaded", function() { return ReviewHistoryLoaded; });
var ReviewHistoryActionTypes;
(function (ReviewHistoryActionTypes) {
    ReviewHistoryActionTypes["ReviewHistoryRequested"] = "[Reviewer] Review History Requested";
    ReviewHistoryActionTypes["ReviewHistoryLoaded"] = "[Reviewer] Review History Loaded";
})(ReviewHistoryActionTypes || (ReviewHistoryActionTypes = {}));
var ReviewHistoryRequested = /** @class */ (function () {
    function ReviewHistoryRequested() {
        this.type = ReviewHistoryActionTypes.ReviewHistoryRequested;
    }
    return ReviewHistoryRequested;
}());

var ReviewHistoryLoaded = /** @class */ (function () {
    function ReviewHistoryLoaded(payload) {
        this.payload = payload;
        this.type = ReviewHistoryActionTypes.ReviewHistoryLoaded;
    }
    ReviewHistoryLoaded.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return ReviewHistoryLoaded;
}());



/***/ }),

/***/ "./src/app/core/reviewer/_models/message.model.ts":
/*!********************************************************!*\
  !*** ./src/app/core/reviewer/_models/message.model.ts ***!
  \********************************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
// dID, WorkID, ReviewerID, Message, DTime
// WorkID, ReviewerID, ReviewerName, Message, DTime
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());



/***/ }),

/***/ "./src/app/core/reviewer/_reducers/assignment.reducers.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/reviewer/_reducers/assignment.reducers.ts ***!
  \****************************************************************/
/*! exports provided: initialState, assignmentReducer, getAssignmentData, getAssignmentLoaded, getAssignmentLoading, getAssignmentHistoryData, getAssignmentHistoryLoaded, getAssignmentHistoryLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignmentReducer", function() { return assignmentReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentData", function() { return getAssignmentData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentLoaded", function() { return getAssignmentLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentLoading", function() { return getAssignmentLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentHistoryData", function() { return getAssignmentHistoryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentHistoryLoaded", function() { return getAssignmentHistoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentHistoryLoading", function() { return getAssignmentHistoryLoading; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_assignment_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_actions/assignment.actions */ "./src/app/core/reviewer/_actions/assignment.actions.ts");


var initialState = {
    data: [],
    loaded: false,
    loading: false
};
function assignmentReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_assignment_actions__WEBPACK_IMPORTED_MODULE_1__["AssignmentActionTypes"].AssignmentsRequested:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loaded: false, loading: true });
        case _actions_assignment_actions__WEBPACK_IMPORTED_MODULE_1__["AssignmentActionTypes"].AssignmentsLoaded:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: action.payload, loaded: true, loading: false });
        case _actions_assignment_actions__WEBPACK_IMPORTED_MODULE_1__["AssignmentActionTypes"].AssignmentHistoryRequested:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loaded: false, loading: true });
        case _actions_assignment_actions__WEBPACK_IMPORTED_MODULE_1__["AssignmentActionTypes"].AssignmentHistoryLoaded:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: action.payload, loaded: true, loading: false });
        default:
            return state;
    }
}
var getAssignmentData = function (state) { return state.data; };
var getAssignmentLoaded = function (state) { return state.loaded; };
var getAssignmentLoading = function (state) { return state.loading; };
var getAssignmentHistoryData = function (state) { return state.data; };
var getAssignmentHistoryLoaded = function (state) { return state.loaded; };
var getAssignmentHistoryLoading = function (state) { return state.loading; };


/***/ }),

/***/ "./src/app/core/reviewer/_reducers/index.ts":
/*!**************************************************!*\
  !*** ./src/app/core/reviewer/_reducers/index.ts ***!
  \**************************************************/
/*! exports provided: reducers, getReviewerState, getHistoryState, getAssignmentState, getMessageState, getAllHistory, getAllHistoryLoaded, getAllHistoryLoading, getCurrAssignments, getCurrAssignmentsLoaded, getCurrAssignmentsLoading, getAssignmentHistory, getAssignmentHistoryLoaded, getAssignmentHistoryLoading, getMessages, getMessagesLoaded, getMessagesLoading, getNewMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReviewerState", function() { return getReviewerState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHistoryState", function() { return getHistoryState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentState", function() { return getAssignmentState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessageState", function() { return getMessageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllHistory", function() { return getAllHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllHistoryLoaded", function() { return getAllHistoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllHistoryLoading", function() { return getAllHistoryLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrAssignments", function() { return getCurrAssignments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrAssignmentsLoaded", function() { return getCurrAssignmentsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrAssignmentsLoading", function() { return getCurrAssignmentsLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentHistory", function() { return getAssignmentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentHistoryLoaded", function() { return getAssignmentHistoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAssignmentHistoryLoading", function() { return getAssignmentHistoryLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessages", function() { return getMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessagesLoaded", function() { return getMessagesLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessagesLoading", function() { return getMessagesLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewMessage", function() { return getNewMessage; });
/* harmony import */ var _reducers_review_history_reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_reducers/review-history.reducers */ "./src/app/core/reviewer/_reducers/review-history.reducers.ts");
/* harmony import */ var _reducers_assignment_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_reducers/assignment.reducers */ "./src/app/core/reviewer/_reducers/assignment.reducers.ts");
/* harmony import */ var _reducers_message_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_reducers/message.reducers */ "./src/app/core/reviewer/_reducers/message.reducers.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");




var reducers = {
    reviewHistory: _reducers_review_history_reducers__WEBPACK_IMPORTED_MODULE_0__["reviewHistoryReducer"],
    assignments: _reducers_assignment_reducers__WEBPACK_IMPORTED_MODULE_1__["assignmentReducer"],
    messages: _reducers_message_reducers__WEBPACK_IMPORTED_MODULE_2__["messageReducer"],
};
var getReviewerState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createFeatureSelector"])('reviewer');
var getHistoryState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getReviewerState, function (state) { return state.reviewHistory; });
var getAssignmentState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getReviewerState, function (state) { return state.assignments; });
var getMessageState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getReviewerState, function (state) { return state.messages; });
// Review History
var getAllHistory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getHistoryState, _reducers_review_history_reducers__WEBPACK_IMPORTED_MODULE_0__["getReviewHistoryData"]);
var getAllHistoryLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getHistoryState, _reducers_review_history_reducers__WEBPACK_IMPORTED_MODULE_0__["getReviewHistoryLoaded"]);
var getAllHistoryLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getHistoryState, _reducers_review_history_reducers__WEBPACK_IMPORTED_MODULE_0__["getReviewHistoryLoading"]);
// Current Assignments
var getCurrAssignments = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAssignmentState, _reducers_assignment_reducers__WEBPACK_IMPORTED_MODULE_1__["getAssignmentData"]);
var getCurrAssignmentsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAssignmentState, _reducers_assignment_reducers__WEBPACK_IMPORTED_MODULE_1__["getAssignmentLoaded"]);
var getCurrAssignmentsLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAssignmentState, _reducers_assignment_reducers__WEBPACK_IMPORTED_MODULE_1__["getAssignmentLoading"]);
// Assignment  History
var getAssignmentHistory = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAssignmentState, _reducers_assignment_reducers__WEBPACK_IMPORTED_MODULE_1__["getAssignmentHistoryData"]);
var getAssignmentHistoryLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAssignmentState, _reducers_assignment_reducers__WEBPACK_IMPORTED_MODULE_1__["getAssignmentHistoryLoaded"]);
var getAssignmentHistoryLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getAssignmentState, _reducers_assignment_reducers__WEBPACK_IMPORTED_MODULE_1__["getAssignmentHistoryLoading"]);
// Messages (Discussion history)
var getMessages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getMessageState, _reducers_message_reducers__WEBPACK_IMPORTED_MODULE_2__["getMessageData"]);
var getMessagesLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getMessageState, _reducers_message_reducers__WEBPACK_IMPORTED_MODULE_2__["getMessageLoaded"]);
var getMessagesLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getMessageState, _reducers_message_reducers__WEBPACK_IMPORTED_MODULE_2__["getMessageLoading"]);
var getNewMessage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["createSelector"])(getMessageState, _reducers_message_reducers__WEBPACK_IMPORTED_MODULE_2__["getNewMessageCreated"]);


/***/ }),

/***/ "./src/app/core/reviewer/_reducers/message.reducers.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/reviewer/_reducers/message.reducers.ts ***!
  \*************************************************************/
/*! exports provided: initialState, messageReducer, getMessageData, getMessageLoaded, getMessageLoading, getNewMessageCreated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "messageReducer", function() { return messageReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessageData", function() { return getMessageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessageLoaded", function() { return getMessageLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMessageLoading", function() { return getMessageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewMessageCreated", function() { return getNewMessageCreated; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_message_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_actions/message.actions */ "./src/app/core/reviewer/_actions/message.actions.ts");


var initialState = {
    data: [],
    msgs_loaded: false,
    msgs_loading: false,
    msg_created: false,
    msg_saved_onserver: false,
};
function messageReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_message_actions__WEBPACK_IMPORTED_MODULE_1__["MessageActionTypes"].MessagesRequested:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { msgs_loaded: false, msgs_loading: true, msg_created: false, msg_saved_onserver: false });
        case _actions_message_actions__WEBPACK_IMPORTED_MODULE_1__["MessageActionTypes"].MessagesLoaded:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: action.payload, msgs_loaded: true, msgs_loading: false, msg_created: false, msg_saved_onserver: false });
        case _actions_message_actions__WEBPACK_IMPORTED_MODULE_1__["MessageActionTypes"].NewMessageCreated:
            // let msg: Message[] = Object.assign([], state.data);
            // msg.push(action.payload);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { 
                // data: msg,
                msgs_loaded: false, msgs_loading: false, msg_created: true, msg_saved_onserver: false });
        case _actions_message_actions__WEBPACK_IMPORTED_MODULE_1__["MessageActionTypes"].NewMessageSavedOnServer:
            var msg = Object.assign([], state.data);
            msg.push(action.payload);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: msg, msgs_loaded: false, msgs_loading: false, msg_created: false, msg_saved_onserver: true });
        default:
            return state;
    }
}
var getMessageData = function (state) { return state.data; };
var getMessageLoaded = function (state) { return state.msgs_loaded; };
var getMessageLoading = function (state) { return state.msgs_loading; };
var getNewMessageCreated = function (state) { return state.msg_created; };


/***/ }),

/***/ "./src/app/core/reviewer/_reducers/review-history.reducers.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/reviewer/_reducers/review-history.reducers.ts ***!
  \********************************************************************/
/*! exports provided: initialState, reviewHistoryReducer, getReviewHistoryData, getReviewHistoryLoaded, getReviewHistoryLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewHistoryReducer", function() { return reviewHistoryReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReviewHistoryData", function() { return getReviewHistoryData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReviewHistoryLoaded", function() { return getReviewHistoryLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReviewHistoryLoading", function() { return getReviewHistoryLoading; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_review_history_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_actions/review-history.actions */ "./src/app/core/reviewer/_actions/review-history.actions.ts");


var initialState = {
    data: [],
    loaded: false,
    loading: false
};
function reviewHistoryReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_review_history_actions__WEBPACK_IMPORTED_MODULE_1__["ReviewHistoryActionTypes"].ReviewHistoryRequested:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { loaded: false, loading: true });
        case _actions_review_history_actions__WEBPACK_IMPORTED_MODULE_1__["ReviewHistoryActionTypes"].ReviewHistoryLoaded:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { data: action.payload, loaded: true, loading: false });
        default:
            return state;
    }
}
var getReviewHistoryData = function (state) { return state.data; };
var getReviewHistoryLoaded = function (state) { return state.loaded; };
var getReviewHistoryLoading = function (state) { return state.loading; };


/***/ }),

/***/ "./src/app/views/theme/aside/aside-left.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/theme/aside/aside-left.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .kt-aside {\n  height: 100%; }\n  :host .kt-aside .kt-aside-menu {\n    margin: 0; }\n  :host .kt-menu__link-text {\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3RoZW1lL2FzaWRlL2FzaWRlLWxlZnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFZLEVBQUE7RUFGZDtJQUtHLFNBQVMsRUFBQTtFQUxaO0VBV0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90aGVtZS9hc2lkZS9hc2lkZS1sZWZ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuXHQua3QtYXNpZGUge1xuXHRcdGhlaWdodDogMTAwJTtcblxuXHRcdC5rdC1hc2lkZS1tZW51IHtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cdH1cblxuXHQvLyBmaXhlZCB0ZXh0IGxpbmUgYnJlYWsgaXNzdWUgb24gbWluaW1pemVkIGFzaWRlIGhvdmVyXG5cdC5rdC1tZW51X19saW5rLXRleHQge1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/theme/aside/aside-left.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/theme/aside/aside-left.component.ts ***!
  \***********************************************************/
/*! exports provided: AsideLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideLeftComponent", function() { return AsideLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _html_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html-class.service */ "./src/app/views/theme/html-class.service.ts");





// Layout


var AsideLeftComponent = /** @class */ (function () {
    /**
     * Component Conctructor
     *
     * @param htmlClassService: HtmlClassService
     * @param menuAsideService
     * @param layoutConfigService: LayouConfigService
     * @param router: Router
     * @param render: Renderer2
     * @param cdr: ChangeDetectorRef
     */
    function AsideLeftComponent(htmlClassService, menuAsideService, layoutConfigService, router, render, cdr) {
        this.htmlClassService = htmlClassService;
        this.menuAsideService = menuAsideService;
        this.layoutConfigService = layoutConfigService;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        this.currentRouteUrl = '';
        this.menuCanvasOptions = {
            baseClass: 'kt-aside',
            overlay: true,
            closeBy: 'kt_aside_close_btn',
            toggleBy: {
                target: 'kt_aside_mobile_toggler',
                state: 'kt-header-mobile__toolbar-toggler--active'
            }
        };
        this.menuOptions = {
            // vertical scroll
            scroll: null,
            // submenu setup
            submenu: {
                desktop: {
                    // by default the menu mode set to accordion in desktop mode
                    default: 'dropdown',
                },
                tablet: 'accordion',
                mobile: 'accordion' // menu set to accordion in mobile mode
            },
            // accordion setup
            accordion: {
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        };
    }
    AsideLeftComponent.prototype.ngAfterViewInit = function () {
    };
    AsideLeftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentRouteUrl = this.router.url.split(/[?#]/)[0];
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
            .subscribe(function (event) {
            _this.currentRouteUrl = _this.router.url.split(/[?#]/)[0];
            _this.cdr.markForCheck();
        });
        var config = this.layoutConfigService.getConfig();
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](config, 'aside.menu.dropdown')) {
            this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-dropdown', '1');
            // tslint:disable-next-line:max-line-length
            this.render.setAttribute(this.asideMenu.nativeElement, 'data-ktmenu-dropdown-timeout', object_path__WEBPACK_IMPORTED_MODULE_4__["get"](config, 'aside.menu.submenu.dropdown.hover-timeout'));
        }
    };
    /**
     * Check Menu is active
     * @param item: any
     */
    AsideLeftComponent.prototype.isMenuItemIsActive = function (item) {
        if (item.submenu) {
            return this.isMenuRootItemIsActive(item);
        }
        if (!item.page) {
            return false;
        }
        return this.currentRouteUrl.indexOf(item.page) !== -1;
    };
    /**
     * Check Menu Root Item is active
     * @param item: any
     */
    AsideLeftComponent.prototype.isMenuRootItemIsActive = function (item) {
        var result = false;
        for (var _i = 0, _a = item.submenu; _i < _a.length; _i++) {
            var subItem = _a[_i];
            result = this.isMenuItemIsActive(subItem);
            if (result) {
                return true;
            }
        }
        return false;
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    AsideLeftComponent.prototype.mouseEnter = function (e) {
        var _this = this;
        // check if the left aside menu is fixed
        if (document.body.classList.contains('kt-aside--fixed')) {
            if (this.outsideTm) {
                clearTimeout(this.outsideTm);
                this.outsideTm = null;
            }
            this.insideTm = setTimeout(function () {
                // if the left aside menu is minimized
                if (document.body.classList.contains('kt-aside--minimize') && KTUtil.isInResponsiveRange('desktop')) {
                    // show the left aside menu
                    _this.render.removeClass(document.body, 'kt-aside--minimize');
                    _this.render.addClass(document.body, 'kt-aside--minimize-hover');
                }
            }, 50);
        }
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    AsideLeftComponent.prototype.mouseLeave = function (e) {
        var _this = this;
        if (document.body.classList.contains('kt-aside--fixed')) {
            if (this.insideTm) {
                clearTimeout(this.insideTm);
                this.insideTm = null;
            }
            this.outsideTm = setTimeout(function () {
                // if the left aside menu is expand
                if (document.body.classList.contains('kt-aside--minimize-hover') && KTUtil.isInResponsiveRange('desktop')) {
                    // hide back the left aside menu
                    _this.render.removeClass(document.body, 'kt-aside--minimize-hover');
                    _this.render.addClass(document.body, 'kt-aside--minimize');
                }
            }, 100);
        }
    };
    /**
     * Returns Submenu CSS Class Name
     * @param item: any
     */
    AsideLeftComponent.prototype.getItemCssClasses = function (item) {
        var classes = 'kt-menu__item';
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'submenu')) {
            classes += ' kt-menu__item--submenu';
        }
        if (!item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' kt-menu__item--active kt-menu__item--here';
        }
        if (item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' kt-menu__item--open kt-menu__item--here';
        }
        // custom class for menu item
        var customClass = object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'custom-class');
        if (customClass) {
            classes += ' ' + customClass;
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'icon-only')) {
            classes += ' kt-menu__item--icon-only';
        }
        return classes;
    };
    AsideLeftComponent.prototype.getItemAttrSubmenuToggle = function (item) {
        var toggle = 'hover';
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'toggle') === 'click') {
            toggle = 'click';
        }
        else if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'submenu.type') === 'tabs') {
            toggle = 'tabs';
        }
        else {
            // submenu toggle default to 'hover'
        }
        return toggle;
    };
    AsideLeftComponent.prototype.disableScroll = function () {
        return this.layoutConfigService.getConfig('aside.menu.dropdown') || false;
    };
    AsideLeftComponent.ctorParameters = function () { return [
        { type: _html_class_service__WEBPACK_IMPORTED_MODULE_6__["HtmlClassService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["MenuAsideService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('asideMenu', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AsideLeftComponent.prototype, "asideMenu", void 0);
    AsideLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-aside-left',
            template: __webpack_require__(/*! raw-loader!./aside-left.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/aside/aside-left.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./aside-left.component.scss */ "./src/app/views/theme/aside/aside-left.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_html_class_service__WEBPACK_IMPORTED_MODULE_6__["HtmlClassService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["MenuAsideService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], AsideLeftComponent);
    return AsideLeftComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/base/base.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/theme/base/base.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "kt-base {\n  opacity: 0;\n  height: 100%; }\n  kt-base .kt-grid--root {\n    height: 100%; }\n  .kt-page--loaded kt-base {\n  opacity: 1;\n  transition: opacity 1s ease-in-out; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3RoZW1lL2Jhc2UvYmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFVBQVU7RUFDVixZQUFZLEVBQUE7RUFGYjtJQUtFLFlBQVksRUFBQTtFQUlkO0VBRUUsVUFBVTtFQUNWLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdGhlbWUvYmFzZS9iYXNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsia3QtYmFzZSB7XG5cdG9wYWNpdHk6IDA7XG5cdGhlaWdodDogMTAwJTtcblxuXHQua3QtZ3JpZC0tcm9vdCB7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXHR9XG59XG5cbi5rdC1wYWdlLS1sb2FkZWQge1xuXHRrdC1iYXNlIHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/theme/base/base.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/theme/base/base.component.ts ***!
  \****************************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _html_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html-class.service */ "./src/app/views/theme/html-class.service.ts");
/* harmony import */ var _core_config_layout_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/_config/layout.config */ "./src/app/core/_config/layout.config.ts");
/* harmony import */ var _core_config_menu_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/_config/menu.config */ "./src/app/core/_config/menu.config.ts");
/* harmony import */ var _core_config_page_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/_config/page.config */ "./src/app/core/_config/page.config.ts");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm5/ngx-permissions.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

// Angular

// Object-Path

// Layout





// User permissions


var BaseComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param menuConfigService: MenuConfifService
     * @param pageConfigService: PageConfigService
     * @param htmlClassService: HtmlClassService
     * @param store
     * @param permissionsService
     */
    function BaseComponent(layoutConfigService, menuConfigService, pageConfigService, htmlClassService, store, permissionsService, cdr) {
        // this.loadRolesWithPermissions();
        var _this = this;
        this.layoutConfigService = layoutConfigService;
        this.menuConfigService = menuConfigService;
        this.pageConfigService = pageConfigService;
        this.htmlClassService = htmlClassService;
        this.store = store;
        this.permissionsService = permissionsService;
        this.cdr = cdr;
        // Private properties
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        /*let config = localStorage.getItem('menuConfig');
        this.menuConfigService.loadConfigs(JSON.parse(config));

        config = localStorage.getItem('pConfig');
        this.pageConfigService.loadConfigs(JSON.parse(config));*/
        this.menuConfigService.loadConfigs(new _core_config_menu_config__WEBPACK_IMPORTED_MODULE_6__["MenuConfig"]().configs);
        this.pageConfigService.loadConfigs(new _core_config_page_config__WEBPACK_IMPORTED_MODULE_7__["PageConfig"]().configs);
        // register configs by demos
        this.layoutConfigService.loadConfigs(new _core_config_layout_config__WEBPACK_IMPORTED_MODULE_5__["LayoutConfig"]().configs);
        // setup element classes
        this.htmlClassService.setConfig(this.layoutConfigService.getConfig());
        var subscr = this.layoutConfigService.onConfigUpdated$.subscribe(function (layoutConfig) {
            // reset body class based on global and page level layout config, refer to html-class.service.ts
            document.body.className = '';
            _this.htmlClassService.setConfig(layoutConfig);
        });
        this.unsubscribe.push(subscr);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.layoutConfigService.getConfig();
        this.selfLayout = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'self.layout');
        this.asideDisplay = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'aside.self.display');
        this.subheaderDisplay = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'subheader.display');
        this.desktopHeaderDisplay = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'header.self.fixed.desktop');
        this.fitTop = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'content.fit-top');
        this.fluid = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'content.width') === 'fluid';
        // let the layout type change
        var subscr = this.layoutConfigService.onConfigUpdated$.subscribe(function (cfg) {
            setTimeout(function () {
                _this.selfLayout = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](cfg, 'self.layout');
            });
        });
        this.unsubscribe.push(subscr);
    };
    /**
     * On destroy
     */
    BaseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.forEach(function (sb) { return sb.unsubscribe(); });
    };
    BaseComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["MenuConfigService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["PageConfigService"] },
        { type: _html_class_service__WEBPACK_IMPORTED_MODULE_4__["HtmlClassService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"] },
        { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    BaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-base',
            template: __webpack_require__(/*! raw-loader!./base.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/base/base.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./base.component.scss */ "./src/app/views/theme/base/base.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["MenuConfigService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["PageConfigService"],
            _html_class_service__WEBPACK_IMPORTED_MODULE_4__["HtmlClassService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_9__["Store"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], BaseComponent);
    return BaseComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/brand/brand.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/theme/brand/brand.component.ts ***!
  \******************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _html_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../html-class.service */ "./src/app/views/theme/html-class.service.ts");

// Angular

// Layout


var BrandComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param htmlClassService: HtmlClassService
     */
    function BrandComponent(layoutConfigService, htmlClassService) {
        this.layoutConfigService = layoutConfigService;
        this.htmlClassService = htmlClassService;
        this.toggleOptions = {
            target: 'body',
            targetState: 'kt-aside--minimize',
            togglerState: 'kt-aside__brand-aside-toggler--active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    BrandComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.layoutConfigService.getLogo();
        this.headerStickyLogo = this.layoutConfigService.getStickyLogo();
    };
    /**
     * On after view init
     */
    BrandComponent.prototype.ngAfterViewInit = function () {
    };
    BrandComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] },
        { type: _html_class_service__WEBPACK_IMPORTED_MODULE_3__["HtmlClassService"] }
    ]; };
    BrandComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-brand',
            template: __webpack_require__(/*! raw-loader!./brand.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/brand/brand.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"], _html_class_service__WEBPACK_IMPORTED_MODULE_3__["HtmlClassService"]])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/content/error-page/error-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/theme/content/error-page/error-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".kt-error-v1 {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover; }\n  .kt-error-v1 .kt-error-v1__container .kt-error-v1__number {\n    font-size: 150px;\n    margin-left: 80px;\n    margin-top: 9rem;\n    font-weight: 700;\n    color: #595d6e; }\n  .kt-error-v1 .kt-error-v1__container .kt-error-v1__desc {\n    font-size: 1.5rem;\n    margin-left: 80px;\n    color: #74788d; }\n  @media (max-width: 768px) {\n  .kt-error-v1 .kt-error-v1__container .kt-error-v1__number {\n    margin: 120px 0 0 3rem;\n    font-size: 8rem; }\n  .kt-error-v1 .kt-error-v1__container .kt-error-v1__desc {\n    margin-left: 3rem;\n    padding-right: 0.5rem; } }\n  .kt-error-v2 {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover; }\n  .kt-error-v2 .kt-error_container .kt-error_title2 > h1 {\n    font-size: 6rem;\n    text-align: center;\n    margin-top: 45rem;\n    font-weight: 500; }\n  .kt-error-v2 .kt-error_container .kt-error_desc {\n    font-size: 2.5rem;\n    text-align: center;\n    display: block;\n    font-weight: 700; }\n  @media (max-width: 768px) {\n  .kt-error-v2 .kt-error_container .kt-error_desc {\n    padding-left: 0.6rem;\n    padding-right: 0.6rem; } }\n  .kt-error-v3 {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover; }\n  .kt-error-v3 .kt-error_container .kt-error_number > h1 {\n    font-size: 15.7rem;\n    margin-left: 7.85rem;\n    margin-top: 11.4rem;\n    font-weight: 500;\n    -webkit-text-stroke-width: 0.35rem;\n    -moz-text-stroke-width: 0.35rem;\n    text-stroke-width: 0.35rem;\n    color: #A3DCF0;\n    -webkit-text-stroke-color: white;\n    -moz-text-stroke-color: white;\n    text-stroke-color: white; }\n  @media screen\\0 {\n      .kt-error-v3 .kt-error_container .kt-error_number > h1 {\n        color: white; } }\n  .kt-error-v3 .kt-error_container .kt-error_title {\n    margin-left: 7.85rem;\n    font-size: 2.5rem;\n    font-weight: 700;\n    color: #48465b; }\n  .kt-error-v3 .kt-error_container .kt-error_subtitle {\n    margin-left: 7.85rem;\n    margin-top: 3.57rem;\n    font-size: 1.8rem;\n    font-weight: 700;\n    color: #595d6e; }\n  .kt-error-v3 .kt-error_container .kt-error_description {\n    margin-left: 7.85rem;\n    font-size: 1.4rem;\n    font-weight: 500;\n    color: #74788d; }\n  @media (max-width: 768px) {\n  .kt-error-v3 .kt-error_container .kt-error_number > h1 {\n    font-size: 8rem;\n    margin-left: 4rem;\n    margin-top: 3.5rem; }\n  .kt-error-v3 .kt-error_container .kt-error_title {\n    margin-left: 4rem; }\n  .kt-error-v3 .kt-error_container .kt-error_subtitle {\n    margin-left: 4rem;\n    padding-right: 0.5rem; }\n  .kt-error-v3 .kt-error_container .kt-error_description {\n    margin-left: 4rem;\n    padding-right: 0.5rem; } }\n  .kt-error-v4 {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover; }\n  .kt-error-v4 .kt-error_container .kt-error_number {\n    font-size: 15.7rem;\n    margin-left: 14.3rem;\n    margin-top: 11.4rem;\n    font-weight: 700;\n    color: #84D49E; }\n  .kt-error-v4 .kt-error_container .kt-error_title {\n    margin: -70px 0 2% 14.3rem;\n    font-size: 10rem;\n    font-weight: 700;\n    color: #84D49E; }\n  .kt-error-v4 .kt-error_container .kt-error_description {\n    margin-left: 15rem;\n    font-size: 2.5rem;\n    margin: -70px 0 2% 14.8rem;\n    font-weight: 700;\n    color: #CC6622; }\n  @media (min-width: 769px) and (max-width: 1024px) {\n  .kt-error-v4 .kt-error_container .kt-error_number {\n    font-size: 12rem;\n    margin-left: 7rem;\n    margin-top: 8rem;\n    font-weight: 700; }\n  .kt-error-v4 .kt-error_container .kt-error_title {\n    margin: -40px 0 2% 7rem;\n    font-size: 7rem;\n    font-weight: 700; }\n  .kt-error-v4 .kt-error_container .kt-error_description {\n    margin-left: 15rem;\n    font-size: 2rem;\n    margin: -40px 0 2% 7.3rem;\n    font-weight: 700; } }\n  @media (max-width: 768px) {\n  .kt-error-v4 .kt-error_container {\n    text-align: center; }\n    .kt-error-v4 .kt-error_container .kt-error_number {\n      font-size: 9rem;\n      margin: 4rem auto 0 auto; }\n    .kt-error-v4 .kt-error_container .kt-error_title {\n      margin: 0.3rem auto;\n      text-align: center;\n      font-size: 5rem; }\n    .kt-error-v4 .kt-error_container .kt-error_description {\n      text-align: center;\n      font-size: 2rem;\n      margin: 0.3rem auto;\n      padding: 0  0.5rem 0 0.5rem; } }\n  .kt-error-v5 {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover; }\n  .kt-error-v5 .kt-error_container .kt-error_title > h1 {\n    font-size: 14rem;\n    margin-left: 25rem;\n    margin-top: 18rem;\n    font-weight: 700;\n    color: #314DA7;\n    -webkit-text-stroke-color: white; }\n  .kt-error-v5 .kt-error_container .kt-error_subtitle {\n    margin-left: 26rem;\n    margin-top: 3.57rem;\n    font-size: 2.3rem;\n    font-weight: 700;\n    color: #595d6e; }\n  .kt-error-v5 .kt-error_container .kt-error_description {\n    margin-left: 26rem;\n    font-size: 1.8rem;\n    font-weight: 500;\n    line-height: 130%;\n    color: #74788d; }\n  @media (min-width: 1025px) and (max-width: 1399px) {\n  .kt-error-v5 {\n    background-position: bottom -80px left 1300px; }\n    .kt-error-v5 .kt-error_container .kt-error_title > h1 {\n      font-weight: 700;\n      font-size: 12rem;\n      margin-left: 7rem; }\n    .kt-error-v5 .kt-error_container .kt-error_subtitle {\n      margin-left: 7rem;\n      font-size: 2.3rem;\n      font-weight: 700; }\n    .kt-error-v5 .kt-error_container .kt-error_description {\n      margin-left: 7rem;\n      font-size: 1.8rem;\n      font-weight: 500;\n      line-height: 130%; } }\n  @media (min-width: 769px) and (max-width: 1024px) {\n  .kt-error-v5 .kt-error_container .kt-error_title > h1 {\n    font-weight: 700;\n    font-size: 12rem;\n    margin-left: 7rem; }\n  .kt-error-v5 .kt-error_container .kt-error_subtitle {\n    margin-left: 7rem;\n    font-size: 2.3rem;\n    font-weight: 700; }\n  .kt-error-v5 .kt-error_container .kt-error_description {\n    margin-left: 7rem;\n    font-size: 1.8rem;\n    font-weight: 500;\n    line-height: 130%; } }\n  @media (max-width: 768px) {\n  .kt-error-v5 .kt-error_container .kt-error_title > h1 {\n    font-size: 6rem;\n    margin-top: 5rem;\n    margin-left: 4rem; }\n  .kt-error-v5 .kt-error_container .kt-error_subtitle {\n    margin-top: 2rem;\n    margin-left: 4rem;\n    font-size: 2rem;\n    line-height: 2rem; }\n  .kt-error-v5 .kt-error_container .kt-error_description {\n    font-size: 1.4rem;\n    margin-left: 4rem; } }\n  .kt-error-v6 {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  background-size: cover; }\n  .kt-error-v6 .kt-error_container {\n    text-align: center; }\n  .kt-error-v6 .kt-error_container .kt-error_subtitle > h1 {\n      font-size: 10rem;\n      margin-top: 12rem;\n      font-weight: 700; }\n  .kt-error-v6 .kt-error_container .kt-error_description {\n      margin-top: 3rem;\n      font-size: 2.3rem;\n      font-weight: 500;\n      line-height: 3rem; }\n  @media (max-width: 768px) {\n  .kt-error-v6 .kt-error_container .kt-error_subtitle > h1 {\n    font-size: 5rem; }\n  .kt-error-v6 .kt-error_container .kt-error_description {\n    font-size: 1.7rem;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXNzZXRzL3Nhc3MvcGFnZXMvZXJyb3IvZXJyb3ItMS5zY3NzIiwiL2hvbWUva2FtaWwvUFJTX05FV19WZXJzaW9uL3NyYy9hc3NldHMvc2Fzcy9fY29uZmlnLnNjc3MiLCIvaG9tZS9rYW1pbC9QUlNfTkVXX1ZlcnNpb24vc3JjL2Fzc2V0cy9zYXNzL2dsb2JhbC9fbWl4aW5zLnNjc3MiLCIvaG9tZS9rYW1pbC9QUlNfTkVXX1ZlcnNpb24vc3JjL2Fzc2V0cy9zYXNzL3BhZ2VzL2Vycm9yL2Vycm9yLTIuc2NzcyIsIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXNzZXRzL3Nhc3MvcGFnZXMvZXJyb3IvZXJyb3ItMy5zY3NzIiwiL2hvbWUva2FtaWwvUFJTX05FV19WZXJzaW9uL3NyYy9hc3NldHMvc2Fzcy9wYWdlcy9lcnJvci9lcnJvci00LnNjc3MiLCIvaG9tZS9rYW1pbC9QUlNfTkVXX1ZlcnNpb24vc3JjL2Fzc2V0cy9zYXNzL3BhZ2VzL2Vycm9yL2Vycm9yLTUuc2NzcyIsIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXNzZXRzL3Nhc3MvcGFnZXMvZXJyb3IvZXJyb3ItNi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFBO0VBQ0ksMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7RUFKMUI7SUFRWSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsY0M2Rk0sRUFBQTtFRHpHbEI7SUFnQlksaUJBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQ3NGTSxFQUFBO0VDaVBkO0VGalVBO0lBR1ksc0JBQXNCO0lBQ3RCLGVBQWUsRUFBQTtFQUozQjtJQVFZLGlCQUFpQjtJQUNqQixxQkFBcUIsRUFBQSxFQUN4QjtFR2xDYjtFQUNJLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBO0VBSjFCO0lBVWdCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBYmhDO0lBa0JZLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQixFQUFBO0VEb1V4QjtFQzlUQTtJQUdZLG9CQUFvQjtJQUNwQixxQkFBcUIsRUFBQSxFQUN4QjtFQ2hDYjtFQUNJLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBO0VBSjFCO0lBU2dCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUUxQixjQUFhO0lBQ2IsZ0NBQWdDO0lBQ2hDLDZCQUE2QjtJQUM3Qix3QkFBd0IsRUFBQTtFRjhCdkM7TUVsREQ7UUF1Qm9CLFlBQVksRUFBQSxFQUVuQjtFQXpCYjtJQTZCWSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjSDBFTSxFQUFBO0VHMUdsQjtJQW9DWSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0hpRU0sRUFBQTtFR3pHbEI7SUE0Q1ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0h5RE0sRUFBQTtFQ2lQZDtFRXBTQTtJQUlnQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQixFQUFBO0VBTmxDO0lBV1ksaUJBQWlCLEVBQUE7RUFYN0I7SUFlWSxpQkFBaUI7SUFDakIscUJBQXFCLEVBQUE7RUFoQmpDO0lBb0JZLGlCQUFpQjtJQUNqQixxQkFBcUIsRUFBQSxFQUN4QjtFQzNFYjtFQUNJLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBO0VBSjFCO0lBU1ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtFQWIxQjtJQWlCWSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7RUFwQjFCO0lBd0JZLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7RUhpVHRCO0VHM1NBO0lBR1ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7RUFONUI7SUFVWSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBWjVCO0lBZ0JZLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFBLEVBQ25CO0VIbVNUO0VHN1JBO0lBRVEsa0JBQWtCLEVBQUE7SUFGMUI7TUFLWSxlQUFlO01BQ2Ysd0JBQXdCLEVBQUE7SUFOcEM7TUFVWSxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTtJQVozQjtNQWdCWSxrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLG1CQUFtQjtNQUNuQiwyQkFBMkIsRUFBQSxFQUM5QjtFQ2hGYjtFQUNJLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBO0VBSjFCO0lBU2dCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0NBQWdDLEVBQUE7RUFkaEQ7SUFtQlksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNMa0ZNLEVBQUE7RUt6R2xCO0lBMkJZLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixjTHlFTSxFQUFBO0VDaU1kO0VJcFFBO0lBQ0ksNkNBQTZDLEVBQUE7SUFEakQ7TUFPZ0IsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixpQkFBaUIsRUFBQTtJQVRqQztNQWNZLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZ0JBQWdCLEVBQUE7SUFoQjVCO01Bb0JZLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGlCQUFpQixFQUFBLEVBQ3BCO0VKZ1JUO0VJMVFBO0lBS2dCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFQakM7SUFZWSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0VBZDVCO0lBa0JZLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBLEVBQ3BCO0VKZ1FUO0VJMVBBO0lBT2dCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFUakM7SUFjWSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUIsRUFBQTtFQWpCN0I7SUFzQlksaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBLEVBRXBCO0VDeEhiO0VBQ0ksMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsc0JBQXNCLEVBQUE7RUFKMUI7SUFPTyxrQkFBa0IsRUFBQTtFQVB6QjtNQVdZLGdCQUFnQjtNQUNoQixpQkFBaUI7TUFDakIsZ0JBQWdCLEVBQUE7RUFiNUI7TUFrQlEsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7RUxvVXJCO0VLOVRBO0lBSWdCLGVBQWUsRUFBQTtFQUovQjtJQVNZLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIscUJBQXFCLEVBQUEsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90aGVtZS9jb250ZW50L2Vycm9yLXBhZ2UvZXJyb3ItcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vXG4vLyBQYWdlIC0gRXJyb3IgMVxuLy8gUGFnZXMgU0FTUyBmaWxlcyBhcmUgY29tcGlsZWQgaW50byBzZXBhcmF0ZSBjc3MgZmlsZXNcbi8vXG5cblxuXG4vLyBHbG9iYWwgY29uZmlnXG5AaW1wb3J0IFwiLi4vLi4vY29uZmlnXCI7XG5cbi8vIExheW91dCBjb25maWdcbkBpbXBvcnQgXCIuLi8uLi9nbG9iYWwvbGF5b3V0L2NvbmZpZy5zY3NzXCI7XG5cbi5rdC1lcnJvci12MSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG4gICAgLmt0LWVycm9yLXYxX19jb250YWluZXIge1xuICAgICAgICAua3QtZXJyb3ItdjFfX251bWJlciB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA5cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGNvbG9yOiBrdC1iYXNlLWNvbG9yKGxhYmVsLCAzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5rdC1lcnJvci12MV9fZGVzYyB7XG4gICAgICAgICAgICBmb250LXNpemU6ICAxLjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICAgICAgICAgIGNvbG9yOiBrdC1iYXNlLWNvbG9yKGxhYmVsLCAyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGluY2x1ZGUga3QtbW9iaWxlKCkge1xuICAgIC5rdC1lcnJvci12MSB7XG4gICAgICAgIC5rdC1lcnJvci12MV9fY29udGFpbmVyIHtcbiAgICAgICAgICAgIC5rdC1lcnJvci12MV9fbnVtYmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEyMHB4IDAgMCAzcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmt0LWVycm9yLXYxX19kZXNjIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogM3JlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvL1xuLy8gR2xvYmFsIENvbmZpZ1xuLy9cblxuXG5cbi8vIEluaXQgZ2xvYmFsIGZ1bmN0aW9ucyBhbmQgbWl4aW5zXG5AaW1wb3J0IFwiZ2xvYmFsL2luaXRcIjtcblxuLy8gTGF5b3V0IEJyZWFrcG9pbnRzKGJvb3RzdHJhcCByZXNwb25zaXZlIGJyZWFrcG9pbnRzKVxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGFuZCBtYXhpbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cbiRrdC1tZWRpYS1icmVha3BvaW50czogKFxuICAgIC8vIEV4dHJhIHNtYWxsIHNjcmVlbiAvIHBob25lXG4gICAgeHM6IDAsXG5cbiAgICAvLyBTbWFsbCBzY3JlZW4gLyBwaG9uZVxuICAgIHNtOiA1NzZweCxcblxuICAgIC8vIE1lZGl1bSBzY3JlZW4gLyB0YWJsZXRcbiAgICBtZDogNzY4cHgsXG5cbiAgICAvLyBMYXJnZSBzY3JlZW4gLyBkZXNrdG9wXG4gICAgbGc6IDEwMjRweCwgLy8xMDI0cHgsXG5cbiAgICAvLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcbiAgICB4bDogMTM5OXB4XG4pICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgcm91bmRlZCBib3JkZXIgbW9kZVxuJGt0LXJvdW5kZWQ6IHRydWUgIWRlZmF1bHQ7XG5cbi8vIEJvcmRlciBSYWRpdXNcbiRrdC1ib3JkZXItcmFkaXVzOiA0cHggIWRlZmF1bHQ7XG5cbi8vIENvcmUgaWNvbiBjb2RlcyhsaW5lYXdlc29tZSBpY29uczogaHR0cHM6Ly9pY29uczguY29tL2xpbmUtYXdlc29tZSlcbiRrdC1hY3Rpb24taWNvbnM6IChcbiAgICBjbG9zZTogJ1xcZjE5MScsXG4gICAgZG93bjogJ1xcZjExMCcsXG4gICAgdXA6ICdcXGYxMTMnLFxuICAgIGxlZnQ6ICdcXGYxMTEnLFxuICAgIHJpZ2h0OiAnXFxmMTEyJyxcbiAgICBwbHVzOiAnXFxmMmMyJyxcbiAgICBtaW51czogJ1xcZjI4ZSdcbikgIWRlZmF1bHQ7XG5cbi8vIENvcmUgYm9sZCBpY29uIGNvZGVzKGxpbmVhd2Vzb21lIGljb25zOiBodHRwczovL2tlZW50aGVtZXMuY29tL21ldHJvbmljL3ByZXZpZXcvZGVmYXVsdC9jb21wb25lbnRzL2ljb25zL2ZsYXRpY29uLmh0bWwpXG4ka3QtYWN0aW9uLWJvbGQtaWNvbnM6IChcbiAgICBkb3duOiAnXFxmMWEzJyxcbiAgICB1cDogJ1xcZjFhNScsXG4gICAgbGVmdDogJ1xcZjFhNCcsXG4gICAgcmlnaHQ6ICdcXGYxOWQnLFxuICAgIGNsb3NlOiAnXFxmMWIyJ1xuKSAhZGVmYXVsdDtcblxuLy8gRWxldmF0ZSBzaGFkb3dcbiRrdC1lbGV2YXRlLXNoYWRvdzogMHB4IDBweCAxM3B4IDBweCByZ2JhKDgyLDYzLDEwNSwwLjA1KSAhZGVmYXVsdDtcbiRrdC1lbGV2YXRlLXNoYWRvdy0yOiAwcHggMHB4IDEzcHggMHB4IHJnYmEoODIsNjMsMTA1LDAuMSkgIWRlZmF1bHQ7XG5cbi8vIERyb3Bkb3duIHNoYWRvd1xuJGt0LWRyb3Bkb3duLXNoYWRvdzogMHB4IDBweCA1MHB4IDBweCByZ2JhKDgyLDYzLDEwNSwgMC4xNSkgIWRlZmF1bHQ7XG5cbi8vIEN1c3RvbSBzY3JvbGxiYXIgY29sb3JcbiRrdC1zY3JvbGwtY29sb3I6IGRhcmtlbigjZWJlZGYyLCA2JSkgIWRlZmF1bHQ7XG5cbi8vIFRyYW5zaXRpb25cbiRrdC10cmFuc2l0aW9uOiBhbGwgMC4zcyAhZGVmYXVsdDtcblxuLy8gTW9kYWwgWi1pbmRleFxuJGt0LW1vZGFsLXppbmRleDogMTA1MCAhZGVmYXVsdDtcblxuLy8gZHJvcGRvd24gWi1pbmRleFxuJGt0LWRyb3Bkb3duLXppbmRleDogOTUgIWRlZmF1bHQ7XG5cbi8vIFN0YXRlIENvbG9yXG4ka3Qtc3RhdGUtY29sb3JzOiAoXG4gICAgLy8gTWV0cm9uaWMgc3RhdGVzXG4gICAgYnJhbmQ6IChcbiAgICAgICAgYmFzZTogIzVkNzhmZixcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgICksXG4gICAgbGlnaHQ6IChcbiAgICAgICAgYmFzZTogI2ZmZmZmZixcbiAgICAgICAgaW52ZXJzZTogIzI4MmEzY1xuICAgICksXG4gICAgZGFyazogKFxuICAgICAgICBiYXNlOiAjMjgyYTNjLFxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXG4gICAgKSxcblxuICAgIC8vIEJvb3RzdHJhcCBzdGF0ZXNcbiAgICBwcmltYXJ5OiAoXG4gICAgICAgIGJhc2U6ICM1ODY3ZGQsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApLFxuICAgIHN1Y2Nlc3M6IChcbiAgICAgICAgYmFzZTogIzBhYmI4NywgLy8xZGM5YjcsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApLFxuICAgIGluZm86IChcbiAgICAgICAgYmFzZTogIzU1NzhlYixcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgICksXG4gICAgd2FybmluZzogKFxuICAgICAgICBiYXNlOiAjZmZiODIyLFxuICAgICAgICBpbnZlcnNlOiAjMTExMTExXG4gICAgKSxcbiAgICBkYW5nZXI6IChcbiAgICAgICAgYmFzZTogI2ZkMzk3YSxcbiAgICAgICAgaW52ZXJzZTogI2ZmZmZmZlxuICAgIClcbikgIWRlZmF1bHQ7XG5cblxuLy8gQmFzZSBjb2xvcnNcbiRrdC1iYXNlLWNvbG9yczogKFxuICAgIGxhYmVsOiAoXG4gICAgICAgIDE6ICNhMmE1YjksXG4gICAgICAgIDI6ICM3NDc4OGQsXG4gICAgICAgIDM6ICM1OTVkNmUsXG4gICAgICAgIDQ6ICM0ODQ2NWJcbiAgICApLFxuICAgIHNoYXBlOiAoXG4gICAgICAgIDE6ICNmMGYzZmYsXG4gICAgICAgIDI6ICNlOGVjZmEsXG4gICAgICAgIDM6ICM5M2EyZGQsXG4gICAgICAgIDQ6ICM2NDZjOWFcbiAgICApLFxuICAgIGdyZXk6IChcbiAgICAgICAgMTogI2Y3ZjhmYSwgLy8jZjRmNWY4XG4gICAgICAgIDI6ICNlYmVkZjIsXG4gICAgICAgIDM6IGRhcmtlbigjZWJlZGYyLCAzJSksXG4gICAgICAgIDQ6IGRhcmtlbigjZWJlZGYyLCA2JSlcbiAgICApXG4pICFkZWZhdWx0O1xuXG4vLyBTb2NpYWwgbmV0d29yayBjb2xvcnMoc2VlOiBodHRwczovL2JyYW5kY29sb3JzLm5ldC8pXG4ka3Qtc29jaWFsLWNvbG9yczogKFxuICAgIGZhY2Vib29rOiAoXG4gICAgICAgIGJhc2U6ICMzYjU5OTgsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApLFxuICAgIGdvb2dsZTogKFxuICAgICAgICBiYXNlOiAjZGM0ZTQxLFxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXG4gICAgKSxcbiAgICB0d2l0dGVyOiAoXG4gICAgICAgIGJhc2U6ICM0QUIzRjQsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApLFxuICAgIGluc3RhZ3JhbTogKFxuICAgICAgICBiYXNlOiAjNTE3ZmE0LFxuICAgICAgICBpbnZlcnNlOiAjZmZmZmZmXG4gICAgKSxcbiAgICB5b3V0dWJlOiAoXG4gICAgICAgIGJhc2U6ICNiMzEyMTcsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApLFxuICAgIGxpbmtlZGluOiAoXG4gICAgICAgIGJhc2U6ICMwMDc3YjUsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApLFxuICAgIHNreXBlOiAoXG4gICAgICAgIGJhc2U6ICMwMGFmZjAsXG4gICAgICAgIGludmVyc2U6ICNmZmZmZmZcbiAgICApXG4pICFkZWZhdWx0O1xuXG4vLyBSb290IEZvbnQgU2V0dGluZ3NcbiRrdC1mb250LWZhbWlsaWVzOiAoXG4gICAgcmVndWxhcjogdW5xdW90ZSgnUG9wcGlucywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJyksXG4gICAgaGVhZGluZzogdW5xdW90ZSgnUG9wcGlucywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJylcbikgIWRlZmF1bHQ7XG5cbi8vIFJvb3QgRm9udCBTZXR0aW5nc1xuJGt0LWZvbnQtc2l6ZTogKFxuICAgIHNpemU6IChcbiAgICAgICAgZGVza3RvcDogMTNweCxcbiAgICAgICAgdGFibGV0OiAxMnB4LFxuICAgICAgICBtb2JpbGU6IDEycHhcbiAgICApLFxuICAgIHdlaWdodDogMzAwXG4pICFkZWZhdWx0O1xuXG4vLyBHZW5lcmFsIExpbmsgU2V0dGluZ3NcbiRrdC1mb250LWNvbG9yOiAoXG4gICAgdGV4dDogIzY0NmM5YSxcbiAgICBsaW5rOiAoXG4gICAgICAgIGRlZmF1bHQ6IGt0LXN0YXRlLWNvbG9yKGJyYW5kKSxcbiAgICAgICAgaG92ZXI6IGRhcmtlbihrdC1zdGF0ZS1jb2xvcihicmFuZCksIDYlKVxuICAgIClcbikgIWRlZmF1bHQ7XG5cbi8vIFBvcnRsZXQgc2V0dGluZ3NcbiRrdC1wb3J0bGV0OiAoXG4gICAgbWluLWhlaWdodDogKFxuICAgICAgICBkZWZhdWx0OiAoXG4gICAgICAgICAgICBkZXNrdG9wOiA2MHB4LFxuICAgICAgICAgICAgbW9iaWxlOiA1MHB4XG4gICAgICAgICksXG4gICAgICAgIHNtOiAoXG4gICAgICAgICAgICBkZXNrdG9wOiA1MHB4LFxuICAgICAgICAgICAgbW9iaWxlOiA0MHB4XG4gICAgICAgICksXG4gICAgICAgIGxnOiAoXG4gICAgICAgICAgICBkZXNrdG9wOiA4MHB4LFxuICAgICAgICAgICAgbW9iaWxlOiA2MHB4XG4gICAgICAgICksXG4gICAgICAgIHhsOiAoXG4gICAgICAgICAgICBkZXNrdG9wOiAxMDBweCxcbiAgICAgICAgICAgIG1vYmlsZTogODBweFxuICAgICAgICApXG4gICAgKSxcbiAgICBzcGFjZTogKFxuICAgICAgICBkZXNrdG9wOiAyNXB4LFxuICAgICAgICBtb2JpbGU6IDE1cHhcbiAgICApLFxuICAgIGJvdHRvbS1zcGFjZTogKFxuICAgICAgICBkZXNrdG9wOiAyMHB4LFxuICAgICAgICBtb2JpbGU6IDIwcHhcbiAgICApLFxuICAgIGJvcmRlci1jb2xvcjoga3QtYmFzZS1jb2xvcihncmV5LCAyKSxcbiAgICBiZy1jb2xvcjogI2ZmZmZmZixcbiAgICBzaGFkb3c6IDBweCAwcHggMzBweCAwcHggcmdiYSg4Miw2MywxMDUsMC4wNSlcbikgIWRlZmF1bHQ7XG5cbi8vIFBhZ2UgcGFkZGluZ1xuJGt0LXBhZ2UtcGFkZGluZzogKFxuXHRkZXNrdG9wOiAyNXB4LFxuXHRtb2JpbGU6IDE1cHhcbikgIWRlZmF1bHQ7XG5cbi8vIFBhZ2UgY29udGFpbmVyIHdpZHRoXG4ka3QtcGFnZS1jb250YWluZXItd2lkdGg6IDEzODBweCAhZGVmYXVsdDtcblxuLy8gQ3VzdG9tIFNjcm9sbChQZXJmZWN0IFNjcm9sbGJhcikgc2l6ZVxuJGt0LWN1c3RvbS1zY3JvbGwtc2l6ZTogNHB4ICFkZWZhdWx0O1xuIiwiLy9cbi8vIEdsb2JhbCBNaXhpbnNcbi8vXG5cblxuXG5cbkBtaXhpbiBrdC1jbGVhcmZpeCgpIHtcblx0JjpiZWZvcmUsXG5cdCY6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6IFwiIFwiOyAvLyAxXG5cdFx0ZGlzcGxheTogdGFibGU7IC8vIDJcblx0fVxuXHQmOmFmdGVyIHtcblx0XHRjbGVhcjogYm90aDtcblx0fVxufVxuXG5AbWl4aW4ga3QtYnV0dG9uLXJlc2V0KCkge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbkBtaXhpbiBrdC1pbnB1dC1yZXNldCgpIHtcblx0Ym9yZGVyOiAwO1xuXHRiYWNrZ3JvdW5kOiBub25lO1xuXHRvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG5cdGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbkBtaXhpbiBrdC1idG4tcmVzZXQoKSB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWl4aW4ga3QtZml4LWZpeGVkLXBvc2l0aW9uLWxhZ3MoKSB7XG5cdC8vIHdlYmtpdCBoYWNrIGZvciBzbW9vdGggZm9udCB2aWV3IG9uIGZpeGVkIHBvc2l0aW9uZWQgZWxlbWVudHNcblx0LXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OmhpZGRlbjtcblx0YmFja2ZhY2UtdmlzaWJpbGl0eTpoaWRkZW47XG59XG5cbkBtaXhpbiBrdC1maXgtYW5pbWF0aW9uLWxhZ3MoKSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuQG1peGluIGt0LWF0dHIoJGF0dHIsICR2YWx1ZSwgJGltcG9ydGFudDogJycpIHtcbiAgICBAaWYgICR2YWx1ZSAhPSBudWxsICB7XG4gICAgICAgICN7JGF0dHJ9OiAjeyR2YWx1ZX0gI3skaW1wb3J0YW50fTtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1oYWNrLWllIHtcblx0QG1lZGlhIHNjcmVlblxcMCB7XG5cdFx0QGNvbnRlbnQ7XG5cdH1cbn1cblxuQG1peGluIGt0LWhhY2stZWRnZS1hbGwge1xuXHRAc3VwcG9ydHMgKC1tcy1pbWUtYWxpZ246YXV0bykge1xuXHRcdEBjb250ZW50O1xuXHR9XG59XG5cbkBtaXhpbiBrdC1yb3VuZGVkIHtcbiAgICBAaWYgJGt0LXJvdW5kZWQgPT0gdHJ1ZSB7XG4gICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3Qtbm90LXJvdW5kZWQge1xuICAgIEBpZiAka3Qtcm91bmRlZCA9PSBmYWxzZSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuLy8gSW5wdXQgcGxhY2Vob2xkZXIgY29sb3JcbkBtaXhpbiBrdC1pbnB1dC1wbGFjZWhvbGRlcigkY29sb3IpIHtcbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzExNTI2XG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJGNvbG9yO1xuICAgIH1cbiAgICAvLyBJbnRlcm5ldCBFeHBsb3JlciAxMCtcbiAgICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICB9XG4gICAgLy8gU2FmYXJpIGFuZCBDaHJvbWVcbn1cblxuQG1peGluIGt0LWhvdmVyLXRyYW5zaXRpb24ge1xuICAgIHRyYW5zaXRpb246ICRrdC10cmFuc2l0aW9uO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zaXRpb246ICRrdC10cmFuc2l0aW9uO1xuICAgIH1cbn1cblxuQG1peGluIGt0LXRyYW5zaXRpb24ge1xuICAgIHRyYW5zaXRpb246ICRrdC10cmFuc2l0aW9uO1xufVxuXG4vLyBJY29uIFNpemluZ1xuLy8gU0FTUyBNYXA6ICAobGluZWF3ZXNvbWU6IDEuMXJlbSwgZm9udGF3ZXNvbWU6IDEuMnJlbSwgZmxhdGljb246IDEuMXJlbSlcbkBtaXhpbiBrdC1pY29ucy1zaXplKCRjb25maWcpIHtcbiAgICAvLyBMaW5lYXdlc29tZVxuICAgIFtjbGFzc149XCJsYS1cIl0sXG4gICAgW2NsYXNzKj1cIiBsYS1cIl0ge1xuICAgICAgICBmb250LXNpemU6IGt0LWdldCgkY29uZmlnLCBsaW5lYXdlc29tZSk7XG4gICAgfVxuXG4gICAgLy8gRm9udGF3ZXNvbWVcbiAgICBbY2xhc3NePVwiZmEtXCJdLFxuICAgIFtjbGFzcyo9XCIgZmEtXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiBrdC1nZXQoJGNvbmZpZywgZm9udGF3ZXNvbWUpO1xuICAgIH1cblxuICAgIC8vIEZsYXRpY29uXG4gICAgW2NsYXNzXj1cImZsYXRpY29uLVwiXSxcbiAgICBbY2xhc3MqPVwiIGZsYXRpY29uLVwiXSxcbiAgICBbY2xhc3NePVwiZmxhdGljb24yLVwiXSxcbiAgICBbY2xhc3MqPVwiIGZsYXRpY29uMi1cIl0ge1xuICAgICAgICBmb250LXNpemU6IGt0LWdldCgkY29uZmlnLCBmbGF0aWNvbik7XG4gICAgfVxufVxuXG4vLyBJY29uIGF0dHJcbi8vIFNBU1MgTWFwOiAgKGxpbmVhd2Vzb21lOiAxLjFyZW0sIGZvbnRhd2Vzb21lOiAxLjJyZW0sIGZsYXRpY29uOiAxLjFyZW0pXG5AbWl4aW4ga3QtaWNvbnMtc3R5bGUoJGF0dHIsICRjb25maWcpIHtcbiAgICAvLyBsaW5lYXdlc29tZVxuICAgIFtjbGFzc149XCJsYS1cIl0sXG4gICAgW2NsYXNzKj1cIiBsYS1cIl0ge1xuICAgICAgICAjeyRhdHRyfToga3QtZ2V0KCRjb25maWcsIGxpbmVhd2Vzb21lKTtcbiAgICB9XG5cbiAgICAvLyBGb250YXdlc29tZVxuICAgIFtjbGFzc149XCJmYS1cIl0sXG4gICAgW2NsYXNzKj1cIiBmYS1cIl0ge1xuICAgICAgICAjeyRhdHRyfToga3QtZ2V0KCRjb25maWcsIGZvbnRhd2Vzb21lKTtcbiAgICB9XG5cbiAgICAvLyBGbGF0aWNvblxuICAgIFtjbGFzc149XCJmbGF0aWNvbi1cIl0sXG4gICAgW2NsYXNzKj1cIiBmbGF0aWNvbi1cIl0sXG4gICAgW2NsYXNzXj1cImZsYXRpY29uMi1cIl0sXG4gICAgW2NsYXNzKj1cIiBmbGF0aWNvbjItXCJdIHtcbiAgICAgICAgI3skYXR0cn06IGt0LWdldCgkY29uZmlnLCBmbGF0aWNvbik7XG4gICAgfVxufVxuXG4vLyBTQVNTIE1hcDogIChsaW5lYXdlc29tZTogMS4xcmVtLCBmb250YXdlc29tZTogMS4ycmVtLCBmbGF0aWNvbjogMS4xcmVtKVxuQG1peGluIGt0LWljb25zIHtcbiAgICBbY2xhc3NePVwibGEtXCJdLFxuICAgIFtjbGFzcyo9XCIgbGEtXCJdLFxuICAgIFtjbGFzc149XCJmYS1cIl0sXG4gICAgW2NsYXNzKj1cIiBmYS1cIl0sXG4gICAgW2NsYXNzXj1cImZsYXRpY29uLVwiXSxcbiAgICBbY2xhc3MqPVwiIGZsYXRpY29uLVwiXSxcbiAgICBbY2xhc3NePVwiZmxhdGljb24yLVwiXSxcbiAgICBbY2xhc3MqPVwiIGZsYXRpY29uMi1cIl0ge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbi8vIExpbmVhd2Vzb21lIGljb25cbkBtaXhpbiBrdC1sYS1pY29uKCRpY29uKSB7XG4gICAgZm9udC1mYW1pbHk6IFwiTGluZUF3ZXNvbWVcIjtcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIjeyRpY29ufVwiO1xuICAgIH1cbn1cblxuQG1peGluIGt0LWxhLWljb24tY2hhbmdlKCRpY29uKSB7XG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIiN7JGljb259XCI7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtZmxhdGljb24yLWljb24oJGljb24pIHtcbiAgICBmb250LWZhbWlseTogRmxhdGljb24yO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgIGNvbnRlbnQ6IFwiI3skaWNvbn1cIjtcbn1cblxuLy8gTGluZWF3ZXNvbWUgaWNvblxuQG1peGluIGt0LWxhLWljb24tc2VsZigkaWNvbikge1xuICAgIGZvbnQtZmFtaWx5OiBcIkxpbmVBd2Vzb21lXCI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICBmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgY29udGVudDogXCIjeyRpY29ufVwiO1xufVxuXG4vLyBDbG9zZSBpY29uXG5AbWl4aW4ga3QtY2xvc2UtaWNvbigkc2VsZjpudWxsKSB7XG4gICAgQGlmICRzZWxmID09IHRydWUge1xuICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uLXNlbGYoIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCBjbG9zZSkgKTtcbiAgICB9IEBlbHNlIHtcbiAgICAgICAgQGluY2x1ZGUga3QtbGEtaWNvbigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIGNsb3NlKSApO1xuICAgIH1cbn1cblxuLy8gQXJyb3cgaWNvblxuQG1peGluIGt0LWFycm93LWljb24oJGRpciwgJHNlbGY6bnVsbCkge1xuICAgIEBpZiAkZGlyID09IGRvd24ge1xuICAgICAgICBAaWYgJHNlbGYgPT0gdHJ1ZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uLXNlbGYoIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCBkb3duKSApO1xuICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIGt0LWxhLWljb24oIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCBkb3duKSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGlmICRkaXIgPT0gdXAge1xuICAgICAgICBAaWYgJHNlbGYgPT0gdHJ1ZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uLXNlbGYoIGt0LWdldCgka3QtYWN0aW9uLWljb25zLCB1cCkgKTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uKCBrdC1nZXQoJGt0LWFjdGlvbi1pY29ucywgdXApICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgJGRpciA9PSBsZWZ0IHtcbiAgICAgICAgQGlmICRzZWxmID09IHRydWUge1xuICAgICAgICAgICAgQGluY2x1ZGUga3QtbGEtaWNvbi1zZWxmKCBrdC1nZXQoJGt0LWFjdGlvbi1pY29ucywgbGVmdCkgKTtcbiAgICAgICAgfSBAZWxzZSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBrdC1sYS1pY29uKCBrdC1nZXQoJGt0LWFjdGlvbi1pY29ucywgbGVmdCkgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAkZGlyID09IHJpZ2h0IHtcbiAgICAgICAgQGlmICRzZWxmID09IHRydWUge1xuICAgICAgICAgICAgQGluY2x1ZGUga3QtbGEtaWNvbi1zZWxmKCBrdC1nZXQoJGt0LWFjdGlvbi1pY29ucywgcmlnaHQpICk7XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgQGluY2x1ZGUga3QtbGEtaWNvbigga3QtZ2V0KCRrdC1hY3Rpb24taWNvbnMsIHJpZ2h0KSApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBTdmcgaWNvbiBjb2xvclxuQG1peGluIGt0LXN2Zy1pY29uLWNvbG9yKCRjb2xvcikge1xuICAgIGcge1xuICAgICAgICBbZmlsbF0ge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAwLjNzIGVhc2U7XG4gICAgICAgICAgICBmaWxsOiAkY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgZyB7XG4gICAgICAgICAgICBbZmlsbF0ge1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMC4zcyBlYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBCcmVha3BvaW50IG1peGluc1xuLy8gTGF5b3V0IEJyZWFrcG9pbnRzXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSwgYWRhcHRpbmcgdG8gZGlmZmVyZW50IHNjcmVlbiBzaXplcywgZm9yIHVzZSBpbiBtZWRpYSBxdWVyaWVzLlxuXG5AbWl4aW4ga3QtbWVkaWEtYmVsb3coJHdpZHRoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludCgkd2lkdGgpfSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1tZWRpYS1hYm92ZSgkd2lkdGgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KCR3aWR0aCkgKyAxcHh9KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LW1lZGlhLXJhbmdlKCRmcm9tLCAkdG8pIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KCRmcm9tKSArIDFweH0pIGFuZCAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoJHRvKX0pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtbWluaW1hbC1kZXNrdG9wIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KGxnKSArIDFweH0pIGFuZCAobWF4LXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoeGwpfSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1taW5pbWFsLWRlc2t0b3AtYW5kLWJlbG93IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KHhsKX0pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtZGVza3RvcCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludChsZykgKyAxcHh9KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LWRlc2t0b3AteGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQoeGwpICsgMXB4fSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1kZXNrdG9wLXh4bCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludCh4eGwpICsgMXB4fSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1kZXNrdG9wLWFuZC10YWJsZXQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQobWQpICsgMXB4fSkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC10YWJsZXQge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAje2t0LW1lZGlhLWJyZWFrcG9pbnQobWQpICsgMXB4fSkgYW5kIChtYXgtd2lkdGg6ICN7a3QtbWVkaWEtYnJlYWtwb2ludChsZyl9KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LXRhYmxldC1hbmQtbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KGxnKX0pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtbW9iaWxlIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KG1kKX0pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtbW9iaWxlLXNtIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3trdC1tZWRpYS1icmVha3BvaW50KHNtKX0pIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4ga3QtcmVzcG9uc2l2ZS1iZWxvdygkd2lkdGgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogI3skd2lkdGh9KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBrdC1yZXNwb25zaXZlLWFib3ZlKCR3aWR0aCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyR3aWR0aH0pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGt0LXJlc3BvbnNpdmUtcmFuZ2UoJGZyb20sICR0bykge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAjeyRmcm9tfSkgYW5kIChtYXgtd2lkdGg6ICN7JHRvfSkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIiwiLy9cbi8vIFBhZ2UgLSBFcnJvciAyXG4vLyBQYWdlcyBTQVNTIGZpbGVzIGFyZSBjb21waWxlZCBpbnRvIHNlcGFyYXRlIGNzcyBmaWxlc1xuLy9cblxuXG5cbi8vIEdsb2JhbCBjb25maWdcbkBpbXBvcnQgXCIuLi8uLi9jb25maWdcIjtcblxuLy8gTGF5b3V0IGNvbmZpZ1xuQGltcG9ydCBcIi4uLy4uL2dsb2JhbC9sYXlvdXQvY29uZmlnLnNjc3NcIjtcblxuLmt0LWVycm9yLXYyIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAua3QtZXJyb3JfY29udGFpbmVyIHtcbiAgICAgICAgLmt0LWVycm9yX3RpdGxlMiB7XG5cbiAgICAgICAgICAgID4gaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNDVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5rdC1lcnJvcl9kZXNjIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBrdC1tb2JpbGUoKSB7XG4gICAgLmt0LWVycm9yLXYyIHtcbiAgICAgICAgLmt0LWVycm9yX2NvbnRhaW5lciB7XG4gICAgICAgICAgICAua3QtZXJyb3JfZGVzYyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC42cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy9cbi8vIFBhZ2UgLSBFcnJvciAzXG4vLyBQYWdlcyBTQVNTIGZpbGVzIGFyZSBjb21waWxlZCBpbnRvIHNlcGFyYXRlIGNzcyBmaWxlc1xuLy9cblxuXG5cbi8vIEdsb2JhbCBjb25maWdcbkBpbXBvcnQgXCIuLi8uLi9jb25maWdcIjtcblxuLy8gTGF5b3V0IGNvbmZpZ1xuQGltcG9ydCBcIi4uLy4uL2dsb2JhbC9sYXlvdXQvY29uZmlnLnNjc3NcIjtcblxuLmt0LWVycm9yLXYzIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAua3QtZXJyb3JfY29udGFpbmVyIHtcbiAgICAgICAgLmt0LWVycm9yX251bWJlciB7XG4gICAgICAgICAgICA+IGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1LjdyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDcuODVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTEuNHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2Utd2lkdGg6IDAuMzVyZW07XG4gICAgICAgICAgICAgICAgLW1vei10ZXh0LXN0cm9rZS13aWR0aDogMC4zNXJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LXN0cm9rZS13aWR0aDogMC4zNXJlbTtcblxuICAgICAgICAgICAgICAgIGNvbG9yOiNBM0RDRjA7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgLW1vei10ZXh0LXN0cm9rZS1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgdGV4dC1zdHJva2UtY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUga3QtaGFjay1pZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAua3QtZXJyb3JfdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDcuODVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjoga3QtYmFzZS1jb2xvcihsYWJlbCwgNCk7XG4gICAgICAgIH1cblxuICAgICAgICAua3QtZXJyb3Jfc3VidGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDcuODVyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjU3cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6IGt0LWJhc2UtY29sb3IobGFiZWwsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmt0LWVycm9yX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3Ljg1cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgY29sb3I6IGt0LWJhc2UtY29sb3IobGFiZWwsIDIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBrdC1tb2JpbGUoKSB7XG4gICAgLmt0LWVycm9yLXYzIHtcbiAgICAgICAgLmt0LWVycm9yX2NvbnRhaW5lciB7XG4gICAgICAgICAgICAua3QtZXJyb3JfbnVtYmVyIHtcbiAgICAgICAgICAgICAgICA+IGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMy41cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmt0LWVycm9yX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmt0LWVycm9yX3N1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHJlbTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rdC1lcnJvcl9kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy9cbi8vIFBhZ2UgLSBFcnJvciA0XG4vLyBQYWdlcyBTQVNTIGZpbGVzIGFyZSBjb21waWxlZCBpbnRvIHNlcGFyYXRlIGNzcyBmaWxlc1xuLy9cblxuXG5cbi8vIEdsb2JhbCBjb25maWdcbkBpbXBvcnQgXCIuLi8uLi9jb25maWdcIjtcblxuLy8gTGF5b3V0IGNvbmZpZ1xuQGltcG9ydCBcIi4uLy4uL2dsb2JhbC9sYXlvdXQvY29uZmlnLnNjc3NcIjtcblxuLmt0LWVycm9yLXY0IHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbiAgICAua3QtZXJyb3JfY29udGFpbmVyIHtcblxuICAgICAgICAua3QtZXJyb3JfbnVtYmVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTUuN3JlbTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNC4zcmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTEuNHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogIzg0RDQ5RTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5rdC1lcnJvcl90aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IC03MHB4IDAgMiUgMTQuM3JlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTByZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6ICM4NEQ0OUU7XG4gICAgICAgIH1cblxuICAgICAgICAua3QtZXJyb3JfZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgICAgICBtYXJnaW46IC03MHB4IDAgMiUgMTQuOHJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBjb2xvcjogI0NDNjYyMjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQGluY2x1ZGUga3QtdGFibGV0IHtcbiAgICAua3QtZXJyb3ItdjQge1xuICAgICAgICAua3QtZXJyb3JfY29udGFpbmVyIHtcbiAgICAgICAgICAgIC5rdC1lcnJvcl9udW1iZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua3QtZXJyb3JfdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLTQwcHggMCAyJSA3cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogN3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua3QtZXJyb3JfZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAtNDBweCAwIDIlIDcuM3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBrdC1tb2JpbGUoKSB7XG4gICAgLmt0LWVycm9yLXY0IHtcbiAgICAgICAgLmt0LWVycm9yX2NvbnRhaW5lciB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5rdC1lcnJvcl9udW1iZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDRyZW0gYXV0byAwIGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rdC1lcnJvcl90aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjNyZW0gYXV0bztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua3QtZXJyb3JfZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLjNyZW0gYXV0bztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICAwLjVyZW0gMCAwLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvL1xuLy8gUGFnZSAtIEVycm9yIDVcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXG4vL1xuXG5cblxuLy8gR2xvYmFsIGNvbmZpZ1xuQGltcG9ydCBcIi4uLy4uL2NvbmZpZ1wiO1xuXG4vLyBMYXlvdXQgY29uZmlnXG5AaW1wb3J0IFwiLi4vLi4vZ2xvYmFsL2xheW91dC9jb25maWcuc2Nzc1wiO1xuXG4ua3QtZXJyb3ItdjUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIC5rdC1lcnJvcl9jb250YWluZXIge1xuICAgICAgICAua3QtZXJyb3JfdGl0bGUge1xuICAgICAgICAgICAgPiBoMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMThyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzMxNERBNztcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5rdC1lcnJvcl9zdWJ0aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjZyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjU3cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgY29sb3I6IGt0LWJhc2UtY29sb3IobGFiZWwsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmt0LWVycm9yX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNnJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgICAgY29sb3I6IGt0LWJhc2UtY29sb3IobGFiZWwsIDIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBrdC1taW5pbWFsLWRlc2t0b3AoKSB7XG4gICAgLmt0LWVycm9yLXY1IHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIC04MHB4IGxlZnQgMTMwMHB4O1xuXG4gICAgICAgIC5rdC1lcnJvcl9jb250YWluZXIge1xuICAgICAgICAgICAgLmt0LWVycm9yX3RpdGxlIHtcblxuICAgICAgICAgICAgICAgID4gaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rdC1lcnJvcl9zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmt0LWVycm9yX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBrdC10YWJsZXQge1xuICAgIC5rdC1lcnJvci12NSB7XG4gICAgICAgIC5rdC1lcnJvcl9jb250YWluZXIge1xuICAgICAgICAgICAgLmt0LWVycm9yX3RpdGxlIHtcblxuICAgICAgICAgICAgICAgID4gaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rdC1lcnJvcl9zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdyZW07XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjNyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmt0LWVycm9yX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBrdC1tb2JpbGUoKSB7XG4gICAgLmt0LWVycm9yLXY1IHtcbiAgICAgICAgLmt0LWVycm9yX2NvbnRhaW5lciB7XG5cbiAgICAgICAgICAgIC5rdC1lcnJvcl90aXRsZSB7XG5cblxuICAgICAgICAgICAgICAgID4gaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDZyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmt0LWVycm9yX3N1YnRpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAua3QtZXJyb3JfZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cmVtO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvL1xuLy8gUGFnZSAtIEVycm9yIDZcbi8vIFBhZ2VzIFNBU1MgZmlsZXMgYXJlIGNvbXBpbGVkIGludG8gc2VwYXJhdGUgY3NzIGZpbGVzXG4vL1xuXG5cblxuLy8gR2xvYmFsIGNvbmZpZ1xuQGltcG9ydCBcIi4uLy4uL2NvbmZpZ1wiO1xuXG4vLyBMYXlvdXQgY29uZmlnXG5AaW1wb3J0IFwiLi4vLi4vZ2xvYmFsL2xheW91dC9jb25maWcuc2Nzc1wiO1xuXG4ua3QtZXJyb3ItdjYge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcblxuICAgIC5rdC1lcnJvcl9jb250YWluZXIge1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgIC5rdC1lcnJvcl9zdWJ0aXRsZSB7XG4gICAgICAgID4gaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5rdC1lcnJvcl9kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMi4zcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogM3JlbTtcbiAgICB9XG59XG59XG5cbkBpbmNsdWRlIGt0LW1vYmlsZSgpIHtcbiAgICAua3QtZXJyb3ItdjYge1xuICAgICAgICAua3QtZXJyb3JfY29udGFpbmVyIHtcbiAgICAgICAgICAgIC5rdC1lcnJvcl9zdWJ0aXRsZSB7XG4gICAgICAgICAgICAgICAgPiBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5rdC1lcnJvcl9kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/theme/content/error-page/error-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/theme/content/error-page/error-page.component.ts ***!
  \************************************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");

// Angular


// Layout

var ErrorPageComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param route: ActivatedRoute
     * @param layoutConfigService: LayoutConfigService
     */
    function ErrorPageComponent(route, layoutConfigService) {
        this.route = route;
        this.layoutConfigService = layoutConfigService;
        // Public properties
        // type of error template to be used, accepted values; error-v1 | error-v2 | error-v3 | error-v4 | error-v5 | error-v6
        this.type = 'error-v1';
        // error code, some error types template has it
        this.code = '404';
        // error descriptions
        this.desc = 'Oops! Something went wrong!';
        // return back button title
        this.return = 'Return back';
        // set temporary values to the layout config on this page
        this.layoutConfigService.setConfig({ self: { layout: 'blank' } });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ErrorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.type = this.route.snapshot.paramMap.get('type');
        this.sub = this.route.data.subscribe(function (param) {
            if (param.type) {
                _this.type = param.type;
            }
            if (param.image) {
                _this.image = param.image;
            }
            if (param.code) {
                _this.code = param.code;
            }
            if (param.title) {
                _this.title = param.title;
            }
            if (param.subtitle) {
                _this.subtitle = param.subtitle;
            }
            if (param.desc) {
                _this.desc = param.desc;
            }
            if (param.return) {
                _this.return = param.return;
            }
        });
        switch (this.type) {
            case 'error-v1':
                if (!this.image) {
                    this.image = './assets/media/error/bg1.jpg';
                }
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.desc) {
                    this.desc = 'OOPS! Something went wrong here';
                }
                break;
            case 'error-v2':
                if (!this.image) {
                    this.image = './assets/media/error/bg2.jpg';
                }
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.title) {
                    this.title = 'OOPS!';
                }
                if (!this.desc) {
                    this.desc = 'Something went wrong here';
                }
                break;
            case 'error-v3':
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.title) {
                    this.title = 'How did you get here';
                }
                if (!this.subtitle) {
                    this.subtitle = 'Sorry we can\'t seem to find the page you\'re looking for.';
                }
                if (!this.desc) {
                    this.desc = 'There may be amisspelling in the URL entered,<br>' + 'or the page you are looking for may no longer exist.';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg3.jpg';
                }
                break;
            case 'error-v4':
                if (!this.code) {
                    this.code = '404';
                }
                if (!this.title) {
                    this.title = 'ERROR';
                }
                if (!this.desc) {
                    this.desc = 'Nothing left to do here';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg4.jpg';
                }
                break;
            case 'error-v5':
                if (!this.title) {
                    this.title = 'Oops!';
                }
                if (!this.subtitle) {
                    this.subtitle = 'Something went wrong here';
                }
                if (!this.desc) {
                    this.desc = 'We\'re working on it and we\'ll get it fixed<br>' + 'as soon possible.<br>' + 'You can back or use our Help Center.';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg5.jpg';
                }
                break;
            case 'error-v6':
                if (!this.title) {
                    this.title = 'Oops...';
                }
                if (!this.desc) {
                    this.desc = 'Looks like something went wrong.<br>' + 'We\'re working on it';
                }
                if (!this.image) {
                    this.image = './assets/media/error/bg6.jpg';
                }
                break;
            default:
                if (!this.image) {
                    this.image = './assets/media/error/bg1.jpg';
                }
        }
    };
    /**
     * On destroy
     */
    ErrorPageComponent.prototype.ngOnDestroy = function () {
        // reset config from any temporary values
        this.layoutConfigService.reloadConfigs();
        this.sub.unsubscribe();
    };
    ErrorPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorPageComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorPageComponent.prototype, "image", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorPageComponent.prototype, "code", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorPageComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ErrorPageComponent.prototype, "subtitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorPageComponent.prototype, "desc", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ErrorPageComponent.prototype, "return", void 0);
    ErrorPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-error-page',
            template: __webpack_require__(/*! raw-loader!./error-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/content/error-page/error-page.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/views/theme/content/error-page/error-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/theme/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_3__);

// Angular

// Layout

// Object-Path

var FooterComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayouConfigService
     */
    function FooterComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        // Public properties
        this.today = Date.now();
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    FooterComponent.prototype.ngOnInit = function () {
        var config = this.layoutConfigService.getConfig();
        // footer width fluid
        this.fluid = object_path__WEBPACK_IMPORTED_MODULE_3__["get"](config, 'footer.self.width') === 'fluid';
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/footer/footer.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/header/header-mobile/header-mobile.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/theme/header/header-mobile/header-mobile.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL2hlYWRlci9oZWFkZXItbW9iaWxlL2hlYWRlci1tb2JpbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/theme/header/header-mobile/header-mobile.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/theme/header/header-mobile/header-mobile.component.ts ***!
  \*****************************************************************************/
/*! exports provided: HeaderMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderMobileComponent", function() { return HeaderMobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");

// Angular

// Layout

var HeaderMobileComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function HeaderMobileComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
        this.toggleOptions = {
            target: 'body',
            targetState: 'kt-header__topbar--mobile-on',
            togglerState: 'kt-header-mobile__toolbar-topbar-toggler--active'
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    HeaderMobileComponent.prototype.ngOnInit = function () {
        this.headerLogo = this.layoutConfigService.getStickyLogo();
        this.asideDisplay = this.layoutConfigService.getConfig('aside.self.display');
    };
    HeaderMobileComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] }
    ]; };
    HeaderMobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-header-mobile',
            template: __webpack_require__(/*! raw-loader!./header-mobile.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/header/header-mobile/header-mobile.component.html"),
            styles: [__webpack_require__(/*! ./header-mobile.component.scss */ "./src/app/views/theme/header/header-mobile/header-mobile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"]])
    ], HeaderMobileComponent);
    return HeaderMobileComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/header/header.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/theme/header/header.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .kt-loading-bar {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%; }\n  :host ::ng-deep .kt-loading-bar .progress-bar {\n    background-color: #5d78ff; }\n  :host ::ng-deep .kt-header__topbar-item {\n  height: 100%; }\n  @media (min-width: 1025px) {\n  :host ::ng-deep .kt-header__topbar, :host ::ng-deep .kt-header__topbar-item-wrapper {\n    height: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3RoZW1lL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHRyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVyxFQUFBO0VBUGQ7SUFXSSx5QkFBeUIsRUFBQTtFQVg3QjtFQWdCRyxZQUFZLEVBQUE7RUFHYjtFQW5CRjtJQXFCSSxZQUFZLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG5cdDo6bmctZGVlcCB7XG5cdFx0Lmt0LWxvYWRpbmctYmFyIHtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRvcDogMDtcblx0XHRcdGxlZnQ6IDA7XG5cdFx0XHRyaWdodDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXG5cdFx0XHQucHJvZ3Jlc3MtYmFyIHtcblx0XHRcdFx0Ly8gYnJhbmQgY29sb3Jcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzVkNzhmZjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQua3QtaGVhZGVyX190b3BiYXItaXRlbSB7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0fVxuXG5cdFx0QG1lZGlhIChtaW4td2lkdGg6IDEwMjVweCkge1xuXHRcdFx0Lmt0LWhlYWRlcl9fdG9wYmFyLCAua3QtaGVhZGVyX190b3BiYXItaXRlbS13cmFwcGVyIHtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/theme/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/theme/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _html_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../html-class.service */ "./src/app/views/theme/html-class.service.ts");

// Angular


// Object-Path

// Loading bar

// Layout

// HTML Class Service

var HeaderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param router: Router
     * @param layoutRefService: LayoutRefService
     * @param layoutConfigService: LayoutConfigService
     * @param loader: LoadingBarService
     * @param htmlClassService: HtmlClassService
     */
    function HeaderComponent(router, layoutRefService, layoutConfigService, loader, htmlClassService) {
        var _this = this;
        this.router = router;
        this.layoutRefService = layoutRefService;
        this.layoutConfigService = layoutConfigService;
        this.loader = loader;
        this.htmlClassService = htmlClassService;
        // page progress bar percentage
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                // set page progress bar loading to start on NavigationStart event router
                _this.loader.start();
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadStart"]) {
                _this.loader.increment(35);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadEnd"]) {
                _this.loader.increment(75);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]) {
                // set page progress bar loading to end on NavigationEnd event router
                _this.loader.complete();
            }
        });
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    HeaderComponent.prototype.ngOnInit = function () {
        var config = this.layoutConfigService.getConfig();
        // get menu header display option
        this.menuHeaderDisplay = object_path__WEBPACK_IMPORTED_MODULE_3__["get"](config, 'header.menu.self.display');
        // header width fluid
        this.fluid = object_path__WEBPACK_IMPORTED_MODULE_3__["get"](config, 'header.self.width') === 'fluid';
        // animate the header minimize the height on scroll down. to be removed, not applicable for default demo
        /*if (objectPath.get(config, 'header.self.fixed.desktop.enabled') || objectPath.get(config, 'header.self.fixed.desktop')) {
            // header minimize on scroll down
            this.ktHeader.nativeElement.setAttribute('data-ktheader-minimize', '1');
        }*/
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        // keep header element in the service
        this.layoutRefService.addElement('header', this.ktHeader.nativeElement);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutRefService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"] },
        { type: _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarService"] },
        { type: _html_class_service__WEBPACK_IMPORTED_MODULE_6__["HtmlClassService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ktHeader', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "ktHeader", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/views/theme/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutRefService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"],
            _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_4__["LoadingBarService"],
            _html_class_service__WEBPACK_IMPORTED_MODULE_6__["HtmlClassService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/header/menu-horizontal/menu-horizontal.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/views/theme/header/menu-horizontal/menu-horizontal.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%; }\n  :host .kt-header-menu-wrapper {\n    height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3RoZW1lL2hlYWRlci9tZW51LWhvcml6b250YWwvbWVudS1ob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsV0FBVyxFQUFBO0VBRFo7SUFJRSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90aGVtZS9oZWFkZXIvbWVudS1ob3Jpem9udGFsL21lbnUtaG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0d2lkdGg6IDEwMCU7XG5cblx0Lmt0LWhlYWRlci1tZW51LXdyYXBwZXIge1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/views/theme/header/menu-horizontal/menu-horizontal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/views/theme/header/menu-horizontal/menu-horizontal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MenuHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuHorizontalComponent", function() { return MenuHorizontalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _html_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../html-class.service */ "./src/app/views/theme/html-class.service.ts");

// Angular


// RxJS

// Object-Path

// Layout

// HTML Class

var MenuHorizontalComponent = /** @class */ (function () {
    /**
     * Component Conctructor
     *
     * @param el: ElementRef
     * @param htmlClassService: HtmlClassService
     * @param menuHorService: MenuHorService
     * @param menuConfigService: MenuConfigService
     * @param layoutConfigService: LayouConfigService
     * @param router: Router
     * @param render: Renderer2
     * @param cdr: ChangeDetectorRef
     */
    function MenuHorizontalComponent(el, htmlClassService, menuHorService, menuConfigService, layoutConfigService, router, render, cdr) {
        this.el = el;
        this.htmlClassService = htmlClassService;
        this.menuHorService = menuHorService;
        this.menuConfigService = menuConfigService;
        this.layoutConfigService = layoutConfigService;
        this.router = router;
        this.render = render;
        this.cdr = cdr;
        // Public properties
        this.currentRouteUrl = '';
        this.menuOptions = {
            submenu: {
                desktop: 'dropdown',
                tablet: 'accordion',
                mobile: 'accordion'
            },
            accordion: {
                slideSpeed: 200,
                expandAll: false // allow having multiple expanded accordions in the menu
            }
        };
        this.offcanvasOptions = {
            overlay: true,
            baseClass: 'kt-header-menu-wrapper',
            closeBy: 'kt_header_menu_mobile_close_btn',
            toggleBy: {
                target: 'kt_header_mobile_toggler',
                state: 'kt-header-mobile__toolbar-toggler--active'
            }
        };
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * After view init
     */
    MenuHorizontalComponent.prototype.ngAfterViewInit = function () {
    };
    /**
     * On init
     */
    MenuHorizontalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rootArrowEnabled = this.layoutConfigService.getConfig('header.menu.self.root-arrow');
        this.currentRouteUrl = this.router.url;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }))
            .subscribe(function (event) {
            _this.currentRouteUrl = _this.router.url;
            _this.cdr.markForCheck();
        });
    };
    /**
     * Use for fixed left aside menu, to show menu on mouseenter event.
     * @param e Event
     */
    MenuHorizontalComponent.prototype.mouseEnter = function (e) {
        // check if the left aside menu is fixed
        if (!document.body.classList.contains('kt-menu__item--hover')) {
            this.render.addClass(document.body, 'kt-menu__item--hover');
        }
    };
    /**
     * Mouse Leave event
     * @param event: MouseEvent
     */
    MenuHorizontalComponent.prototype.mouseLeave = function (event) {
        this.render.removeClass(event.target, 'kt-menu__item--hover');
    };
    /**
     * Return Css Class Name
     * @param item: any
     */
    MenuHorizontalComponent.prototype.getItemCssClasses = function (item) {
        var classes = 'kt-menu__item';
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'submenu')) {
            classes += ' kt-menu__item--submenu';
        }
        if (!item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' kt-menu__item--active kt-menu__item--here';
        }
        if (item.submenu && this.isMenuItemIsActive(item)) {
            classes += ' kt-menu__item--open kt-menu__item--here';
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'resizer')) {
            classes += ' kt-menu__item--resize';
        }
        var menuType = object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'submenu.type') || 'classic';
        if ((object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'root') && menuType === 'classic')
            || parseInt(object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'submenu.width'), 10) > 0) {
            classes += ' kt-menu__item--rel';
        }
        var customClass = object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'custom-class');
        if (customClass) {
            classes += ' ' + customClass;
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'icon-only')) {
            classes += ' kt-menu__item--icon-only';
        }
        return classes;
    };
    /**
     * Returns Attribute SubMenu Toggle
     * @param item: any
     */
    MenuHorizontalComponent.prototype.getItemAttrSubmenuToggle = function (item) {
        var toggle = 'hover';
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'toggle') === 'click') {
            toggle = 'click';
        }
        else if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'submenu.type') === 'tabs') {
            toggle = 'tabs';
        }
        else {
            // submenu toggle default to 'hover'
        }
        return toggle;
    };
    /**
     * Returns Submenu CSS Class Name
     * @param item: any
     */
    MenuHorizontalComponent.prototype.getItemMenuSubmenuClass = function (item) {
        var classes = '';
        var alignment = object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'alignment') || 'right';
        if (alignment) {
            classes += ' kt-menu__submenu--' + alignment;
        }
        var type = object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'type') || 'classic';
        if (type === 'classic') {
            classes += ' kt-menu__submenu--classic';
        }
        if (type === 'tabs') {
            classes += ' kt-menu__submenu--tabs';
        }
        if (type === 'mega') {
            if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'width')) {
                classes += ' kt-menu__submenu--fixed';
            }
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_4__["get"](item, 'pull')) {
            classes += ' kt-menu__submenu--pull';
        }
        return classes;
    };
    /**
     * Check Menu is active
     * @param item: any
     */
    MenuHorizontalComponent.prototype.isMenuItemIsActive = function (item) {
        if (item.submenu) {
            return this.isMenuRootItemIsActive(item);
        }
        if (!item.page) {
            return false;
        }
        return this.currentRouteUrl.indexOf(item.page) !== -1;
    };
    /**
     * Check Menu Root Item is active
     * @param item: any
     */
    MenuHorizontalComponent.prototype.isMenuRootItemIsActive = function (item) {
        if (item.submenu.items) {
            for (var _i = 0, _a = item.submenu.items; _i < _a.length; _i++) {
                var subItem = _a[_i];
                if (this.isMenuItemIsActive(subItem)) {
                    return true;
                }
            }
        }
        if (item.submenu.columns) {
            for (var _b = 0, _c = item.submenu.columns; _b < _c.length; _b++) {
                var subItem = _c[_b];
                if (this.isMenuItemIsActive(subItem)) {
                    return true;
                }
            }
        }
        if (typeof item.submenu[Symbol.iterator] === 'function') {
            for (var _d = 0, _e = item.submenu; _d < _e.length; _d++) {
                var subItem = _e[_d];
                var active = this.isMenuItemIsActive(subItem);
                if (active) {
                    return true;
                }
            }
        }
        return false;
    };
    MenuHorizontalComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _html_class_service__WEBPACK_IMPORTED_MODULE_6__["HtmlClassService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["MenuHorizontalService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["MenuConfigService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    MenuHorizontalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-menu-horizontal',
            template: __webpack_require__(/*! raw-loader!./menu-horizontal.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/header/menu-horizontal/menu-horizontal.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./menu-horizontal.component.scss */ "./src/app/views/theme/header/menu-horizontal/menu-horizontal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _html_class_service__WEBPACK_IMPORTED_MODULE_6__["HtmlClassService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["MenuHorizontalService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["MenuConfigService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_5__["LayoutConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], MenuHorizontalComponent);
    return MenuHorizontalComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/header/topbar/topbar.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/views/theme/header/topbar/topbar.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .kt-header__topbar > :last-child:not([role=\"tooltip\"]) .kt-header__topbar-item {\n  margin-right: 0 !important; }\n\n:host ::ng-deep .kt-header__topbar .kt-header__topbar-item {\n  margin-right: 0.36rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3RoZW1lL2hlYWRlci90b3BiYXIvdG9wYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBTUssMEJBQTBCLEVBQUE7O0FBTi9CO0VBVUksZ0NBQWdDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90aGVtZS9oZWFkZXIvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblx0OjpuZy1kZWVwIHtcblx0XHQvLyBvdmVycmlkZSBkZWZhdWx0IHZlcnNpb24gc3R5bGVcblx0XHQua3QtaGVhZGVyX190b3BiYXIge1xuXHRcdFx0PiA6bGFzdC1jaGlsZDpub3QoW3JvbGU9XCJ0b29sdGlwXCJdKSB7XG5cdFx0XHRcdC5rdC1oZWFkZXJfX3RvcGJhci1pdGVtIHtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Lmt0LWhlYWRlcl9fdG9wYmFyLWl0ZW0ge1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDAuMzZyZW0gIWltcG9ydGFudDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/theme/header/topbar/topbar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/theme/header/topbar/topbar.component.ts ***!
  \***************************************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

// Angular

var TopbarComponent = /** @class */ (function () {
    function TopbarComponent() {
    }
    TopbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-topbar',
            template: __webpack_require__(/*! raw-loader!./topbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/header/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.scss */ "./src/app/views/theme/header/topbar/topbar.component.scss")]
        })
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/html-class.service.ts":
/*!***************************************************!*\
  !*** ./src/app/views/theme/html-class.service.ts ***!
  \***************************************************/
/*! exports provided: HtmlClassService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlClassService", function() { return HtmlClassService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

// Angular

// Object-Path

// RxJS

var HtmlClassService = /** @class */ (function () {
    /**
     * Component constructor
     */
    function HtmlClassService() {
        // Private properties
        this.loaded = [];
        this.onClassesUpdated$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.classes);
    }
    /**
     * Build html element classes from layout config
     * @param layoutConfig
     */
    HtmlClassService.prototype.setConfig = function (layoutConfig) {
        this.config = layoutConfig;
        // scope list of classes
        this.classes = {
            header: [],
            header_mobile: [],
            header_menu: [],
            aside_menu: [],
        };
        // init base layout
        this.initLayout();
        this.initLoader();
        // init header and subheader menu
        this.initHeader();
        this.initSubheader();
        // init aside and aside menu
        this.initAside();
        // init footer
        this.initFooter();
        this.initSkins();
        this.onClassesUpdated$.next(this.classes);
    };
    /**
     * Returns Classes
     *
     * @param path: string
     * @param toString boolean
     */
    HtmlClassService.prototype.getClasses = function (path, toString) {
        if (path) {
            var classes = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.classes, path) || '';
            if (toString && Array.isArray(classes)) {
                return classes.join(' ');
            }
            return classes.toString();
        }
        return this.classes;
    };
    /**
     * Init Layout
     */
    HtmlClassService.prototype.initLayout = function () {
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["has"](this.config, 'self.body.class')) {
            var selfBodyClass = (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'self.body.class')).toString();
            if (selfBodyClass) {
                var bodyClasses = selfBodyClass.split(' ');
                bodyClasses.forEach(function (cssClass) { return document.body.classList.add(cssClass); });
            }
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'self.layout') === 'boxed' && object_path__WEBPACK_IMPORTED_MODULE_2__["has"](this.config, 'self.body.background-image')) {
            document.body.style.backgroundImage = 'url("' + object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'self.body.background-image') + '")';
        }
        // Offcanvas directions
        document.body.classList.add('kt-quick-panel--right');
        document.body.classList.add('kt-demo-panel--right');
        document.body.classList.add('kt-offcanvas-panel--right');
    };
    /**
     * Init Loader
     */
    HtmlClassService.prototype.initLoader = function () {
    };
    /**
     * Init Header
     */
    HtmlClassService.prototype.initHeader = function () {
        // Fixed header
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'header.self.fixed.desktop')) {
            document.body.classList.add('kt-header--fixed');
            object_path__WEBPACK_IMPORTED_MODULE_2__["push"](this.classes, 'header', 'kt-header--fixed');
        }
        else {
            document.body.classList.add('kt-header--static');
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'header.self.fixed.mobile')) {
            document.body.classList.add('kt-header-mobile--fixed');
            object_path__WEBPACK_IMPORTED_MODULE_2__["push"](this.classes, 'header_mobile', 'kt-header-mobile--fixed');
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'header.menu.self.layout')) {
            object_path__WEBPACK_IMPORTED_MODULE_2__["push"](this.classes, 'header_menu', 'kt-header-menu--layout-' + object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'header.menu.self.layout'));
        }
    };
    /**
     * Inin Subheader
     */
    HtmlClassService.prototype.initSubheader = function () {
        // Fixed content head
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'subheader.fixed')) {
            document.body.classList.add('kt-subheader--fixed');
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'subheader.display')) {
            document.body.classList.add('kt-subheader--enabled');
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["has"](this.config, 'subheader.style')) {
            document.body.classList.add('kt-subheader--' + object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'subheader.style'));
        }
    };
    /**
     * Init Aside
     */
    HtmlClassService.prototype.initAside = function () {
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'aside.self.display') !== true) {
            return;
        }
        document.body.classList.add('kt-aside--enabled');
        // Fixed Aside
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'aside.self.fixed')) {
            document.body.classList.add('kt-aside--fixed');
            object_path__WEBPACK_IMPORTED_MODULE_2__["push"](this.classes, 'aside', 'kt-aside--fixed');
        }
        else {
            document.body.classList.add('kt-aside--static');
        }
        // Default fixed
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'aside.self.minimize.default')) {
            document.body.classList.add('kt-aside--minimize');
        }
        // Menu
        // Dropdown Submenu
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'aside.menu.dropdown')) {
            object_path__WEBPACK_IMPORTED_MODULE_2__["push"](this.classes, 'aside_menu', 'kt-aside-menu--dropdown');
            // enable menu dropdown
        }
    };
    /**
     * Init Footer
     */
    HtmlClassService.prototype.initFooter = function () {
        // Fixed header
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'footer.self.fixed')) {
            document.body.classList.add('kt-footer--fixed');
        }
    };
    /**
     * Set the body class name based on page skin options
     */
    HtmlClassService.prototype.initSkins = function () {
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'header.self.skin')) {
            document.body.classList.add('kt-header-base-' + object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'header.self.skin'));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'header.menu.desktop.submenu.skin')) {
            document.body.classList.add('kt-header-menu-' + object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'header.menu.desktop.submenu.skin'));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'brand.self.skin')) {
            document.body.classList.add('kt-brand-' + object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'brand.self.skin'));
        }
        if (object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'aside.self.skin')) {
            document.body.classList.add('kt-aside-' + object_path__WEBPACK_IMPORTED_MODULE_2__["get"](this.config, 'aside.self.skin'));
        }
    };
    HtmlClassService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HtmlClassService);
    return HtmlClassService;
}());



/***/ }),

/***/ "./src/app/views/theme/reviewer-base/reviewer-base.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/views/theme/reviewer-base/reviewer-base.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab_btn {\n  z-index: 5;\n  position: fixed;\n  align-self: flex-end;\n  bottom: 10%;\n  margin-bottom: 68px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thbWlsL1BSU19ORVdfVmVyc2lvbi9zcmMvYXBwL3ZpZXdzL3RoZW1lL3Jldmlld2VyLWJhc2UvcmV2aWV3ZXItYmFzZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVDLFVBQVU7RUFDVixlQUFlO0VBRWYsb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RoZW1lL3Jldmlld2VyLWJhc2UvcmV2aWV3ZXItYmFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZhYl9idG4ge1xuXG5cdHotaW5kZXg6IDU7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0Ly9kaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1zZWxmOiBmbGV4LWVuZDtcblx0Ym90dG9tOiAxMCU7XG5cdG1hcmdpbi1ib3R0b206IDY4cHg7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/theme/reviewer-base/reviewer-base.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/theme/reviewer-base/reviewer-base.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReviewerBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewerBaseComponent", function() { return ReviewerBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var _html_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../html-class.service */ "./src/app/views/theme/html-class.service.ts");
/* harmony import */ var _core_config_reviewer_layout_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/_config/reviewer-layout.config */ "./src/app/core/_config/reviewer-layout.config.ts");
/* harmony import */ var _core_config_reviewer_menu_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/_config/reviewer_menu.config */ "./src/app/core/_config/reviewer_menu.config.ts");
/* harmony import */ var _core_config_reviewer_page_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/_config/reviewer-page.config */ "./src/app/core/_config/reviewer-page.config.ts");

// Angular

// Object-Path

// Layout





var ReviewerBaseComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     * @param menuConfigService: MenuConfifService
     * @param pageConfigService: PageConfigService
     * @param htmlClassService: HtmlClassService
     */
    function ReviewerBaseComponent(layoutConfigService, menuConfigService, pageConfigService, htmlClassService) {
        var _this = this;
        this.layoutConfigService = layoutConfigService;
        this.menuConfigService = menuConfigService;
        this.pageConfigService = pageConfigService;
        this.htmlClassService = htmlClassService;
        this.modal = true;
        // Private properties
        this.unsubscribe = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
        // register configs by demos
        this.menuConfigService.loadConfigs(new _core_config_reviewer_menu_config__WEBPACK_IMPORTED_MODULE_6__["ReviewerMenuConfig"]().configs);
        this.pageConfigService.loadConfigs(new _core_config_reviewer_page_config__WEBPACK_IMPORTED_MODULE_7__["ReviewerPageConfig"]().configs);
        this.layoutConfigService.loadConfigs(new _core_config_reviewer_layout_config__WEBPACK_IMPORTED_MODULE_5__["ReviewerLayoutConfig"]().configs);
        // setup element classes
        this.htmlClassService.setConfig(this.layoutConfigService.getConfig());
        var subscr = this.layoutConfigService.onConfigUpdated$.subscribe(function (layoutConfig) {
            // reset body class based on global and page level layout config, refer to html-class.service.ts
            document.body.className = '';
            _this.htmlClassService.setConfig(layoutConfig);
        });
        this.unsubscribe.push(subscr);
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ReviewerBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        var config = this.layoutConfigService.getConfig();
        this.selfLayout = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'self.layout');
        this.asideDisplay = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'aside.self.display');
        this.subheaderDisplay = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'subheader.display');
        this.desktopHeaderDisplay = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'header.self.fixed.desktop');
        this.fitTop = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'content.fit-top');
        this.fluid = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](config, 'content.width') === 'fluid';
        // let the layout type change
        var subscr = this.layoutConfigService.onConfigUpdated$.subscribe(function (cfg) {
            setTimeout(function () {
                _this.selfLayout = object_path__WEBPACK_IMPORTED_MODULE_2__["get"](cfg, 'self.layout');
            });
        });
        this.unsubscribe.push(subscr);
    };
    /**
     * On destroy
     */
    ReviewerBaseComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.forEach(function (sb) { return sb.unsubscribe(); });
    };
    ReviewerBaseComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["MenuConfigService"] },
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["PageConfigService"] },
        { type: _html_class_service__WEBPACK_IMPORTED_MODULE_4__["HtmlClassService"] }
    ]; };
    ReviewerBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-rbase',
            template: __webpack_require__(/*! raw-loader!./reviewer-base.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/reviewer-base/reviewer-base.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./reviewer-base.component.scss */ "./src/app/views/theme/reviewer-base/reviewer-base.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutConfigService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["MenuConfigService"],
            _core_base_layout__WEBPACK_IMPORTED_MODULE_3__["PageConfigService"],
            _html_class_service__WEBPACK_IMPORTED_MODULE_4__["HtmlClassService"]])
    ], ReviewerBaseComponent);
    return ReviewerBaseComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/subheader/subheader.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/theme/subheader/subheader.component.ts ***!
  \**************************************************************/
/*! exports provided: SubheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubheaderComponent", function() { return SubheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
/* harmony import */ var object_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(object_path__WEBPACK_IMPORTED_MODULE_3__);

// Angular

// Layout

// Object-Path

var SubheaderComponent = /** @class */ (function () {
    /**
     * Component constructor
     *
     * @param layoutConfigService: LayoutConfigService
     */
    function SubheaderComponent(layoutConfigService) {
        this.layoutConfigService = layoutConfigService;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    SubheaderComponent.prototype.ngOnInit = function () {
        var config = this.layoutConfigService.getConfig();
        this.layout = object_path__WEBPACK_IMPORTED_MODULE_3__["get"](config, 'subheader.layout');
        this.fluid = object_path__WEBPACK_IMPORTED_MODULE_3__["get"](config, 'footer.self.width') === 'fluid';
        this.clear = object_path__WEBPACK_IMPORTED_MODULE_3__["get"](config, 'subheader.clear');
    };
    SubheaderComponent.ctorParameters = function () { return [
        { type: _core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"] }
    ]; };
    SubheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'kt-subheader',
            template: __webpack_require__(/*! raw-loader!./subheader.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/theme/subheader/subheader.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_base_layout__WEBPACK_IMPORTED_MODULE_2__["LayoutConfigService"]])
    ], SubheaderComponent);
    return SubheaderComponent;
}());



/***/ }),

/***/ "./src/app/views/theme/theme.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/theme/theme.module.ts ***!
  \*********************************************/
/*! exports provided: ThemeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeModule", function() { return ThemeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm5/ngx-permissions.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-loading-bar/core */ "./node_modules/@ngx-loading-bar/core/fesm5/ngx-loading-bar-core.js");
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-daterangepicker-material */ "./node_modules/ngx-daterangepicker-material/fesm5/ngx-daterangepicker-material.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng_inline_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-inline-svg */ "./node_modules/ng-inline-svg/lib_esmodule/index.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/views/theme/header/header.component.ts");
/* harmony import */ var _aside_aside_left_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./aside/aside-left.component */ "./src/app/views/theme/aside/aside-left.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/views/theme/footer/footer.component.ts");
/* harmony import */ var _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./subheader/subheader.component */ "./src/app/views/theme/subheader/subheader.component.ts");
/* harmony import */ var _brand_brand_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./brand/brand.component */ "./src/app/views/theme/brand/brand.component.ts");
/* harmony import */ var _header_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./header/topbar/topbar.component */ "./src/app/views/theme/header/topbar/topbar.component.ts");
/* harmony import */ var _header_menu_horizontal_menu_horizontal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/menu-horizontal/menu-horizontal.component */ "./src/app/views/theme/header/menu-horizontal/menu-horizontal.component.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../partials/partials.module */ "./src/app/views/partials/partials.module.ts");
/* harmony import */ var _base_base_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./base/base.component */ "./src/app/views/theme/base/base.component.ts");
/* harmony import */ var _html_class_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./html-class.service */ "./src/app/views/theme/html-class.service.ts");
/* harmony import */ var _header_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./header/header-mobile/header-mobile.component */ "./src/app/views/theme/header/header-mobile/header-mobile.component.ts");
/* harmony import */ var _content_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./content/error-page/error-page.component */ "./src/app/views/theme/content/error-page/error-page.component.ts");
/* harmony import */ var _reviewer_base_reviewer_base_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./reviewer-base/reviewer-base.component */ "./src/app/views/theme/reviewer-base/reviewer-base.component.ts");
/* harmony import */ var _core_base_layout__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../core/_base/layout */ "./src/app/core/_base/layout/index.ts");


// Angular




// Angular Material

// NgBootstrap

// Translation

// Loading bar

// Ngx DatePicker

// Perfect Scrollbar

// SVG inline

// Core Module















var ThemeModule = /** @class */ (function () {
    function ThemeModule() {
    }
    ThemeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _base_base_component__WEBPACK_IMPORTED_MODULE_22__["BaseComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                // headers
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _brand_brand_component__WEBPACK_IMPORTED_MODULE_18__["BrandComponent"],
                _header_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_24__["HeaderMobileComponent"],
                // subheader
                _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_17__["SubheaderComponent"],
                // topbar components
                _header_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_19__["TopbarComponent"],
                // aside left menu components
                _aside_aside_left_component__WEBPACK_IMPORTED_MODULE_15__["AsideLeftComponent"],
                // horizontal menu components
                _header_menu_horizontal_menu_horizontal_component__WEBPACK_IMPORTED_MODULE_20__["MenuHorizontalComponent"],
                _content_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_25__["ErrorPageComponent"],
                _reviewer_base_reviewer_base_component__WEBPACK_IMPORTED_MODULE_26__["ReviewerBaseComponent"],
            ],
            exports: [
                _base_base_component__WEBPACK_IMPORTED_MODULE_22__["BaseComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                // headers
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _brand_brand_component__WEBPACK_IMPORTED_MODULE_18__["BrandComponent"],
                _header_header_mobile_header_mobile_component__WEBPACK_IMPORTED_MODULE_24__["HeaderMobileComponent"],
                // subheader
                _subheader_subheader_component__WEBPACK_IMPORTED_MODULE_17__["SubheaderComponent"],
                // topbar components
                _header_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_19__["TopbarComponent"],
                // aside left menu components
                _aside_aside_left_component__WEBPACK_IMPORTED_MODULE_15__["AsideLeftComponent"],
                // horizontal menu components
                _header_menu_horizontal_menu_horizontal_component__WEBPACK_IMPORTED_MODULE_20__["MenuHorizontalComponent"],
                _content_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_25__["ErrorPageComponent"],
            ],
            providers: [
                _html_class_service__WEBPACK_IMPORTED_MODULE_23__["HtmlClassService"],
                _core_base_layout__WEBPACK_IMPORTED_MODULE_27__["SubheaderService"],
                _core_base_layout__WEBPACK_IMPORTED_MODULE_27__["MenuHorizontalService"],
                _core_base_layout__WEBPACK_IMPORTED_MODULE_27__["MenuAsideService"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                ngx_permissions__WEBPACK_IMPORTED_MODULE_1__["NgxPermissionsModule"].forChild(),
                // StoreModule.forFeature('roles', rolesReducer),
                // StoreModule.forFeature('permissions', permissionsReducer),
                // EffectsModule.forFeature([PermissionEffects, RoleEffects]),
                // PagesModule,
                // ReviewerPagesModule,
                _partials_partials_module__WEBPACK_IMPORTED_MODULE_21__["PartialsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
                _ngx_loading_bar_core__WEBPACK_IMPORTED_MODULE_9__["LoadingBarModule"],
                ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__["NgxDaterangepickerMd"],
                ng_inline_svg__WEBPACK_IMPORTED_MODULE_12__["InlineSVGModule"],
                // ng-bootstrap modules
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ]
        })
    ], ThemeModule);
    return ThemeModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~app-views-pages-pages-module~app-views-reviewer-pages-r_pages-module.js.map
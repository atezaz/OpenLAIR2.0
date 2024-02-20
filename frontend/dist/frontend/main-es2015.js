(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>  \r\n\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n  \r\n  \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chart-manager/chart-manager.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chart-manager/chart-manager.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"buttons\" id=\"btn-menu\" [ngClass]=\"{ 'mat-elevation-z5': true, sticky: isSticky }\">\r\n  <button class=\"backBtn buttonLaTool\" routerLink=\"\">\r\n    Back\r\n  </button>\r\n\r\n  <button class=\"downloadCharts buttonLaTool\" (click)=\"downloadPage()\">\r\n    Download\r\n  </button>\r\n\r\n  <mat-form-field appearance=\"fill\">\r\n    <mat-select [formControl]=\"indicators\" multiple placeholder=\"Indicators\" [ngModel]=\"dropdownItems\">\r\n      <mat-select-trigger>\r\n        {{ indicators.value ? indicators.value[0] : \"\" }}\r\n        <span *ngIf=\"indicators.value?.length > 1\" class=\"selection\">\r\n          (+{{ indicators.value.length - 1 }}\r\n          {{ indicators.value?.length === 2 ? \"other\" : \"others\" }})\r\n        </span>\r\n      </mat-select-trigger>\r\n      <!-- These are the indicators that are not linked -->\r\n      <mat-option *ngFor=\"let indicator of dropdownItems\" [value]=\"indicator\" [ngStyle]=\"{\r\n          color:\r\n            indicator.includes([73]) ||\r\n            indicator.includes([57]) ||\r\n            indicator.includes([75]) ||\r\n            indicator.includes([135])\r\n              ? 'red'\r\n              : ''\r\n        }\" (onSelectionChange)=\"selectCharts($event, indicator)\">{{ indicator }}</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <!-- componenents on top get rendered first -->\r\n\r\n  <!-- Student interaction patterns -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[127]') || referenceNumbers.includes('[121]')\r\n    \">\r\n    <app-student-interaction-patterns></app-student-interaction-patterns>\r\n  </div>\r\n\r\n  <!-- Reading Analytics -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[134]') ||\r\n      referenceNumbers.includes('[114]') ||\r\n      referenceNumbers.includes('[128]')\r\n    \">\r\n    <app-reading-analytics></app-reading-analytics>\r\n  </div>\r\n\r\n  <!-- Competency -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[31]') ||\r\n      referenceNumbers.includes('[46]') ||\r\n      referenceNumbers.includes('[98]')\r\n    \">\r\n    <app-competency></app-competency>\r\n  </div>\r\n\r\n  <!-- Learning progress -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[62]') ||\r\n      referenceNumbers.includes('[110]') ||\r\n      referenceNumbers.includes('[51]')\r\n    \">\r\n    <app-learning-progress></app-learning-progress>\r\n  </div>\r\n\r\n  <!-- Writing Analytics -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[61]') ||\r\n      referenceNumbers.includes('[48]') ||\r\n      referenceNumbers.includes('[89]') ||\r\n      referenceNumbers.includes('[85]')\r\n    \">\r\n    <app-writing-analytics></app-writing-analytics>\r\n  </div>\r\n\r\n  <!-- Discourse Analytics -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[24]') ||\r\n      referenceNumbers.includes('[27]') ||\r\n      referenceNumbers.includes('[49]') ||\r\n      referenceNumbers.includes('[142]') ||\r\n      referenceNumbers.includes('[80]') ||\r\n      referenceNumbers.includes('[88]')\r\n    \">\r\n    <app-discussion-quality></app-discussion-quality>\r\n  </div>\r\n\r\n  <!-- Clickstream analysis -->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[103]')\">\r\n    <app-clickstream-analysis></app-clickstream-analysis>\r\n  </div>\r\n\r\n  <!-- Video Analytics -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[138]') ||\r\n      referenceNumbers.includes('[72]') ||\r\n      referenceNumbers.includes('[116]')\r\n    \">\r\n    <app-video-engagements></app-video-engagements>\r\n  </div>\r\n\r\n  <!-- Initiative -->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[124]')\">\r\n    <app-initiative></app-initiative>\r\n  </div>\r\n\r\n  <!-- Social analysis -->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[63]')\">\r\n    <app-social-analysis></app-social-analysis>\r\n  </div>\r\n\r\n  <!--  Predictive analytics (Dropping out )-->\r\n\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[59]') ||\r\n      referenceNumbers.includes('[79]') ||\r\n      referenceNumbers.includes('[99]') ||\r\n      referenceNumbers.includes('[101]') ||\r\n      referenceNumbers.includes('[64]') ||\r\n      referenceNumbers.includes('[71]') ||\r\n      referenceNumbers.includes('[131]')\r\n    \">\r\n    <app-droppingout></app-droppingout>\r\n  </div>\r\n  <!-- Time distribution -->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[39]')\">\r\n    <app-time-distribution></app-time-distribution>\r\n  </div>\r\n\r\n  <!-- Time Planning -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[47]') ||\r\n      referenceNumbers.includes('[68]') ||\r\n      referenceNumbers.includes('[125]')\r\n    \">\r\n    <app-time-planning></app-time-planning>\r\n  </div>\r\n\r\n  <!-- Student comparison -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[130]') ||\r\n      referenceNumbers.includes('[126]') ||\r\n      referenceNumbers.includes('[129]') ||\r\n      referenceNumbers.includes('[25]') ||\r\n      referenceNumbers.includes('[50]')\r\n    \">\r\n    <app-student-comparison></app-student-comparison>\r\n  </div>\r\n\r\n  <!-- Engagement and Performance -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[69]') || referenceNumbers.includes('[86]')\r\n    \">\r\n    <app-engagement-performance></app-engagement-performance>\r\n  </div>\r\n\r\n  <!-- Online change detection-->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[137]')\">\r\n    <app-online-change-detection></app-online-change-detection>\r\n  </div>\r\n\r\n  <!-- Game analytics -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[45]') ||\r\n      referenceNumbers.includes('[43]') ||\r\n      referenceNumbers.includes('[104]')\r\n    \">\r\n    <app-gamification></app-gamification>\r\n  </div>\r\n\r\n  <!-- Predict course completion -->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[70]')\">\r\n    <app-predict-coursecompletion></app-predict-coursecompletion>\r\n  </div>\r\n\r\n  <!--  Procrastination  -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[102]') || referenceNumbers.includes('[107]')\r\n    \">\r\n    <app-procrastination></app-procrastination>\r\n  </div>\r\n\r\n  <!-- Group participation -->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[30]')\">\r\n    <app-group-participation></app-group-participation>\r\n  </div>\r\n\r\n  <!-- Clustering -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[66]') ||\r\n      referenceNumbers.includes('[120]') ||\r\n      referenceNumbers.includes('[113]') ||\r\n      referenceNumbers.includes('[29]')\r\n    \">\r\n    <app-clustering></app-clustering>\r\n  </div>\r\n\r\n  <!-- Final grade prediction -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[28]') ||\r\n      referenceNumbers.includes('[83]') ||\r\n      referenceNumbers.includes('[78]') ||\r\n      referenceNumbers.includes('[115]') ||\r\n      referenceNumbers.includes('[60]') ||\r\n      referenceNumbers.includes('[37]') ||\r\n      referenceNumbers.includes('[105]') ||\r\n      referenceNumbers.includes('[81]') ||\r\n      referenceNumbers.includes('[119]')\r\n    \">\r\n    <app-final-grade-prediction></app-final-grade-prediction>\r\n  </div>\r\n\r\n  <!-- Learning behaviour -->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[76]')\">\r\n    <app-learning-behaviour></app-learning-behaviour>\r\n  </div>\r\n\r\n  <!-- Social network analysis -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[90]') || referenceNumbers.includes('[52]')\r\n    \">\r\n    <app-social-network-analysis></app-social-network-analysis>\r\n  </div>\r\n\r\n  <!-- Self motivation -->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[139]')\">\r\n    <app-self-motivation></app-self-motivation>\r\n  </div>\r\n\r\n  <!-- Learning behaviour patterns -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[111]') ||\r\n      referenceNumbers.includes('[132]') ||\r\n      referenceNumbers.includes('[118]')\r\n    \">\r\n    <app-learning-behavior-patterns></app-learning-behavior-patterns>\r\n  </div>\r\n\r\n  <!-- Passing rate prediction -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[26]') ||\r\n      referenceNumbers.includes('[56]') ||\r\n      referenceNumbers.includes('[96]') ||\r\n      referenceNumbers.includes('[100]') ||\r\n      referenceNumbers.includes('[117]') ||\r\n      referenceNumbers.includes('[143]') ||\r\n      referenceNumbers.includes('[144]')\r\n    \">\r\n    <app-passing-rate-prediction></app-passing-rate-prediction>\r\n  </div>\r\n\r\n  <!--  Feedback (Self-regulation)-->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[41]') || referenceNumbers.includes('[91]')\r\n    \">\r\n    <app-feedback></app-feedback>\r\n  </div>\r\n\r\n  <!-- Course assessment -->\r\n  <div class=\"main-content\" *ngIf=\"referenceNumbers.includes('[55]')\">\r\n    <app-course-assessment></app-course-assessment>\r\n  </div>\r\n\r\n  <!-- Affective-State -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[32]') ||\r\n      referenceNumbers.includes('[84]') ||\r\n      referenceNumbers.includes('[36]') ||\r\n      referenceNumbers.includes('[87]')\r\n    \">\r\n    <app-affective-state></app-affective-state>\r\n  </div>\r\n\r\n  <!-- Course difficulty -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[77]') || referenceNumbers.includes('[133]')\r\n    \">\r\n    <app-course-difficulty></app-course-difficulty>\r\n  </div>\r\n\r\n  <!-- Teacher curriculum usage -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[65]') || referenceNumbers.includes('[58]')\r\n    \">\r\n    <app-curriculum-usage></app-curriculum-usage>\r\n  </div>\r\n\r\n  <!-- Presentation skills -->\r\n  <div class=\"main-content\" *ngIf=\"\r\n      referenceNumbers.includes('[35]') || referenceNumbers.includes('[40]')\r\n    \">\r\n    <app-presentation-skills></app-presentation-skills>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/affective-state/affective-state.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/affective-state/affective-state.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clickstream-analysis/clickstream-analysis.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clickstream-analysis/clickstream-analysis.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clustering/clustering.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clustering/clustering.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/competency/competency.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/competency/competency.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-assessment/course-assessment.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-assessment/course-assessment.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 50%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions2\"\r\n    style=\"width: 50%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-difficulty/course-difficulty.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-difficulty/course-difficulty.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/curriculum-usage/curriculum-usage.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/curriculum-usage/curriculum-usage.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/discussion-quality/discussion-quality.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/discussion-quality/discussion-quality.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<highcharts-chart\r\n  [Highcharts]=\"Highcharts\"\r\n  [options]=\"chartOptions\"\r\n  style=\"width: 100%; height: 400px; display: block; float: left\"\r\n></highcharts-chart>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/droppingout/droppingout.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/droppingout/droppingout.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/engagement-performance/engagement-performance.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/engagement-performance/engagement-performance.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/feedback/feedback.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/feedback/feedback.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<SELECT id=\"list\" (change)=\"updateChart($event)\">\r\n  <option VALUE=\"A\">Video interactions</option>\r\n  <option VALUE=\"B\">Reading activities</option>\r\n  <option VALUE=\"C\">Assignment activities</option>\r\n  <option VALUE=\"D\">Dashboard access</option>\r\n</SELECT>\r\n<div class=\"example\">\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 50%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n\r\n<div class=\"example\">\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions2\"\r\n    style=\"width: 50%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n\r\n<!-- \r\n<figure class=\"highcharts-figure\">\r\n  <div id=\"container-speed\" class=\"chart-container\"></div>\r\n  <div id=\"container-rpm\" class=\"chart-container\"></div>\r\n</figure>\r\n-->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/final-grade-prediction/final-grade-prediction.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/final-grade-prediction/final-grade-prediction.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/gamification/gamification.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/gamification/gamification.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/group-participation/group-participation.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/group-participation/group-participation.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/initiative/initiative.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/initiative/initiative.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behaviour/learning-behaviour.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behaviour/learning-behaviour.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-progress/learning-progress.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-progress/learning-progress.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/online-change-detection/online-change-detection.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/online-change-detection/online-change-detection.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 500px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-exam-success/predict-exam-success.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-exam-success/predict-exam-success.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/presentation-skills/presentation-skills.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/presentation-skills/presentation-skills.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"container\"></div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/procrastination/procrastination.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/procrastination/procrastination.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/reading-analytics/reading-analytics.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/reading-analytics/reading-analytics.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/self-motivation/self-motivation.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/self-motivation/self-motivation.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-analysis/social-analysis.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-analysis/social-analysis.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-network-analysis/social-network-analysis.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-network-analysis/social-network-analysis.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-comparison/student-comparison.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-comparison/student-comparison.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<SELECT id=\"list\" (change)=\"updateChart($event)\">\r\n  <option VALUE=\"A\">Clicks</option>\r\n  <option VALUE=\"B\">\"Lectures\" clicks</option>\r\n  <option VALUE=\"C\">\"Coursework\" clicks</option>\r\n  <option VALUE=\"D\">\"Practials\" clicks</option>\r\n  <option value=\"E\">Seen content</option>\r\n</SELECT>\r\n<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-distribution/time-distribution.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-distribution/time-distribution.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-planning/time-planning.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-planning/time-planning.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-analytics/video-analytics.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-analytics/video-analytics.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-engagements/video-engagements.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-engagements/video-engagements.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/writing-analytics/writing-analytics.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/charts/writing-analytics/writing-analytics.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <highcharts-chart\r\n    [Highcharts]=\"Highcharts\"\r\n    [options]=\"chartOptions\"\r\n    style=\"width: 100%; height: 400px; display: block; float: left\"\r\n  ></highcharts-chart>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Data Entry form -->\r\n\r\n<div style=\"margin: auto;\" *ngIf=\"referenceOptions\r\n  && learningActivitiesOptions && (indicatorOptions$ | async)\">\r\n\r\n    <div class=\"title\">\r\n        Add NEW Indicators and their Metrics\r\n    </div>\r\n\r\n    <div class=\"content-wrapper\">\r\n        <div class=\"form-wrapper\">\r\n            <fieldset>\r\n                <legend>Indicator</legend>\r\n                <form [formGroup]=\"indicatorForm\" class=\"form-section\">\r\n                    <div class=\"form-element form-element-100\">\r\n                        <label>Learning Activities *</label>\r\n                        <ng-multiselect-dropdown [(ngModel)]=\"selectedLearningActivities\"\r\n                                                 [ngModelOptions]=\"{standalone: true}\"\r\n                                                 placeholder=\"Learning Activities\"\r\n                                                 [settings]=\"dropdownSettings\"\r\n                                                 [data]=\"learningActivitiesOptions\"\r\n                                                 (onSelect)=\"learningActivityiesSelected()\" (onDeSelect)=\"learningActivityiesSelected()\"\r\n                                                 (onSelectAll)=\"learningActivityiesSelected()\" (onDeSelectAll)=\"learningActivityiesSelected()\"\r\n                                                 [disabled]=\"readonly('reference')\"\r\n                        >\r\n                        </ng-multiselect-dropdown>\r\n                        <div\r\n                            *ngIf=\"indicatorForm.controls['learningActivities'].invalid && (indicatorForm.controls['learningActivities'].dirty || indicatorForm.controls['learningActivities'].touched)\"\r\n                            class=\"alert\">\r\n                                Learning Activity is required.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-element form-element-100\" *ngIf=\"showActivityMessages\">\r\n                        <div style=\"color: rgb(4, 117, 14); cursor: pointer\" (click)=\"showActivityDialoge()\"\r\n                             [innerHTML]=\"'Indicators will be added to the corresponding Events, depending on the chosen Activities. For more informations click here'\"></div>\r\n                    </div>\r\n                    <div class=\"form-element form-element-85\">\r\n                        <label>Name *</label>\r\n                        <input type=\"text\" formControlName=\"indicatorName\" placeholder=\"Indicator Name\" required/>\r\n                        <div\r\n                            *ngIf=\"indicatorForm.controls['indicatorName'].invalid && (indicatorForm.controls['indicatorName'].dirty || indicatorForm.controls['indicatorName'].touched)\"\r\n                            class=\"alert\">\r\n                            Name is required.\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-element form-element-15\">\r\n                        <label>Number *</label>\r\n                        <input type=\"text\" formControlName=\"referenceNumber\"/>\r\n                    </div>\r\n                    <div class=\"form-element form-element-100\">\r\n                        <label>Summary</label>\r\n                        <textarea class=\"text\" rows=\"7\" type=\"text\" formControlName=\"summary\"\r\n                                  placeholder=\"Short optional explanation of the indicator\" required></textarea>\r\n                    </div>\r\n                    <div class=\"form-element form-element-100\">\r\n                        <label>Metrics *</label>\r\n                        <textarea class=\"text\" rows=\"7\" type=\"text\" formControlName=\"metrics\"\r\n                                  placeholder=\"Metrics must be comma seperated\" required></textarea>\r\n                        <div\r\n                            *ngIf=\"indicatorForm.controls['metrics'].invalid && (indicatorForm.controls['metrics'].dirty || indicatorForm.controls['metrics'].touched)\"\r\n                            class=\"alert\">\r\n                            Metrics are required.\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </fieldset>\r\n            <fieldset>\r\n                <legend>Reference</legend>\r\n                <form [formGroup]=\"referenceForm\" class=\"form-section last\" style=\"height: 100%\">\r\n                    <div class=\"form-section\">\r\n                        <div class=\"form-element form-element-100\">\r\n                            <label>Text *</label>\r\n                            <ng-container *ngIf=\"!useExistingReference\">\r\n                                <input type=\"text\" formControlName=\"referenceText\" placeholder=\"Reference Text\"\r\n                                       required/>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"useExistingReference\">\r\n                                <ng-select placeholder=\"Reference\" [readonly]=\"this.readonly('indicator') && !useExistingReference\"\r\n                                           (change)=\"onReferenceChange($event)\">\r\n                                    <ng-option *ngFor=\"let reference of referenceOptions\" [value]=\"reference\">\r\n                                        {{reference.referenceNumber}} {{reference.referenceText}}\r\n                                    </ng-option>\r\n                                </ng-select>\r\n                            </ng-container>\r\n                            <div\r\n                                *ngIf=\"referenceForm.controls['referenceText'].invalid && (referenceForm.controls['referenceText'].dirty || referenceForm.controls['referenceText'].touched)\"\r\n                                class=\"alert\">\r\n                                Text is required.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-element form-element-85\">\r\n                            <label>Link *</label>\r\n                            <input type=\"text\" formControlName=\"referenceLink\" placeholder=\"Reference Link\"/>\r\n                            <div\r\n                                *ngIf=\"referenceForm.controls['referenceLink'].invalid && (referenceForm.controls['referenceLink'].dirty || referenceForm.controls['referenceLink'].touched)\"\r\n                                class=\"alert\">\r\n                                Link is required.\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-element form-element-15\">\r\n                            <label>Number *</label>\r\n                            <input type=\"text\" formControlName=\"referenceNumber\"/>\r\n                        </div>\r\n                        <div class=\"form-element form-element-50\">\r\n                            <label>Verified</label>\r\n                            <ng-select formControlName=\"verified\" placeholder=\"Verification\">\r\n                                <ng-option *ngFor=\"let verifiedOption of verifiedOptions\" [value]=\"verifiedOption\">\r\n                                    {{verifiedOption}}\r\n                                </ng-option>\r\n                            </ng-select>\r\n                        </div>\r\n                        <div class=\"form-element form-element-50\">\r\n                            <label>Development</label>\r\n                            <ng-select formControlName=\"development\" placeholder=\"Development\">\r\n                                <ng-option *ngFor=\"let developmentOption of developmentOptions\" [value]=\"developmentOption\">\r\n                                    {{developmentOption}}\r\n                                </ng-option>\r\n                            </ng-select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-section\">\r\n                        <input type=\"checkbox\" (change)=\"checkboxReferenceClicked()\" [disabled]=\"target && !referenceZero\"/>\r\n                        <label>Use existing Reference</label>\r\n                    </div>\r\n                </form>\r\n            </fieldset>\r\n\r\n            <button type=\"submit\" class=\"buttonLaTool save-button\"\r\n                    (click)='addData()'>Save\r\n            </button>\r\n        </div>\r\n        <div style=\"min-width: 260px\">\r\n            <button\r\n                style=\"padding: 6px 8px 6px 8px; float: right; margin-right: 8px; background-image: linear-gradient(45deg, #8e1e22 10%, #edcfcf 51%, #8e1e22 100%) !important; box-shadow: 2px 4px 5px 0 #ead8d8;\"\r\n                class=\"buttonLaTool\" (click)='logout()'>Logout\r\n            </button>\r\n            <span style=\"float: right; margin-right: 16px; margin-top: 17px;\" *ngIf=\"CUserName\">\r\n       Welcome, {{CUserName}}\r\n      </span>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<ng-template #activityDialog let-messages>\r\n    <h2 matDialogTitle>Events affected by Activity Choise</h2>\r\n    <mat-dialog-content>\r\n        <ul *ngFor=\"let message of activityMessages\">\r\n            <li>{{ message }}</li>\r\n        </ul>\r\n        <div>Therefore, the Indicator and Metrics you want to add will\r\n        be added automatically under these events:\r\n        </div>\r\n        <div style=\"padding-bottom: 1em\">{{showEvents()}}</div>\r\n    </mat-dialog-content>\r\n    <button mat-button mat-dialog-close>Close</button>\r\n</ng-template>\r\n\r\n<ng-template #normalUserSaveDialog>\r\n    <h2 matDialogTitle>Indicator has been saved</h2>\r\n    <mat-dialog-content>\r\n        <div style=\"padding-bottom: 1em\">The Indicator has been saved but has to be approved by an admin before being listed in the table.</div>\r\n    </mat-dialog-content>\r\n    <button mat-button mat-dialog-close (click)=\"navigateToMainPage()\">Close</button>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/admin.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/admin.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <form [formGroup]=\"loginForm\" novalidate>\r\n    <div id=\"title\">\r\n        {{buttonText()}} Form\r\n    </div>\r\n    <div id=\"username\">\r\n      <label>Username</label>\r\n        <div>\r\n      <input type=\"text\" formControlName=\"username\" required>\r\n        <div\r\n            *ngIf=\"loginForm.controls['username'].invalid && (loginForm.controls['username'].dirty || loginForm.controls['username'].touched)\"\r\n            class=\"alert\">\r\n            <div *ngIf=\"loginForm.controls['username'].errors.required\">\r\n                User Name is required.\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div id=\"password\">\r\n      <label class=\"learningActivities\">Password</label>\r\n        <div>\r\n      <input type=\"password\" formControlName=\"password\" required>\r\n        <div\r\n            *ngIf=\"loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\"\r\n            class=\"alert\">\r\n            <div *ngIf=\"loginForm.controls['password'].errors.required\">\r\n                Password is required.\r\n            </div>\r\n        </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"submit\">\r\n\r\n      <button class=\"submitbtn\" mat-raised-button color=\"primary\" type=\"submit\" (click)=\"submit()\"\r\n        [disabled]=\"loginForm.pristine || loginForm.invalid\">{{buttonText()}}</button>\r\n    </div>\r\n      <div *ngIf=\"!register\" id=\"register\">\r\n          Not yet registered? Sign up\r\n          <a (click)=\"onRegister()\">here</a>.\r\n      </div>\r\n      <div *ngIf=\"register\" id=\"login\">\r\n          Already registered?\r\n          <a (click)=\"onRegister()\">Back to Login</a>.\r\n      </div>\r\n\r\n\r\n\r\n  </form>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-chart-manager> </app-chart-manager>\r\n\r\n<div class=\"footer\">\r\n  <p>Dashboard is rendered with OpenLAIR.</p>\r\n</div>\r\n\r\n<a id=\"back-to-top\" class=\"btn back-to-top\" role=\"button\" (click)=\"backToTop()\">\r\n  <i class=\"material-icons buttonLaTool\">arrow_upward</i>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tool_Home\">\r\n  <!--   Not run the demo if it is not home page-->\r\n  <div class=\"content-left\" [ngClass]=\"{extendedMetrics: searchMat}\">\r\n    <div class=\"h-flex\" style=\"max-width: 1100px\">\r\n      <div class=\"w-20\">\r\n    <span style=\"padding-bottom: 2px\">\r\n      <strong>Learning Events</strong><br/>\r\n      <span class=\"stepDefine\" style=\"font-size: 14px; cursor: pointer;\" id=\"tooltipEvents\"\r\n            data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}'\r\n            title=\"\">\r\n        <img width=\"16px\" src=\"assets/images/question.png\"/> Click here for more details\r\n        <span class=\"\" id=\"contentEvents\">\r\n          <p style=\"text-align: left\">\r\n            <strong>Learning Events</strong><br/>\r\n            A learning objective is the desired outcome of a single or multiple\r\n            learning event and is used to establish learning <br/>\r\n            activities to achieve the overall learning outcome\r\n            <a target=\"_blank\"\r\n               href=\"https://research.tue.nl/en/publications/teacher-learning-in-the-context-of-educational-innovation-learnin\">[13]</a>.\r\n            Learning design literature identified eight learning events:\r\n            <br/>create, explore, practice, imitate, receive, debate,\r\n            meta-learn/Elf-reflect, and experiment\r\n            <a target=\"_blank\" href=\"http://www.labset.net/media/prod/8LEM.pdf\">[1]</a>,\r\n            <a target=\"_blank\" href=\"https://www.tandfonline.com/doi/abs/10.1080/10494820701343694\">[2]</a>.\r\n            <br/><br/>\r\n            <img width=\"800px\" src=\"assets/images/events.png\"/>\r\n          </p>\r\n        </span>\r\n      </span>\r\n    </span>\r\n        <mat-form-field style=\"width: 100%\">\r\n          <mat-select class=\"step1\" placeholder=\"Learning Events\" name=\"Select\" [(ngModel)]=\"selectedLearningEvents\"\r\n                      multiple #selectionModel=\"ngModel\" (opened)=\"onOpen()\" (closed)=\"onEventValueChange(selectedLearningEvents, false)\">\r\n            <app-select-check-all [model]=\"selectionModel\" [values]=\"(learningEventsOptions$ | async)\">\r\n            </app-select-check-all>\r\n            <mat-option *ngFor=\"let option of (learningEventsOptions$ | async)\" [value]=\"option\">\r\n              {{ option }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"w-40\">\r\n        <strong>Learning Activities</strong><br/>\r\n        <span style=\"font-size: 14px; cursor: pointer;\" id=\"tooltipActivities\"\r\n              data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}'\r\n              title=\"\">\r\n      <img width=\"16px\" src=\"assets/images/question.png\"/> Click here for more\r\n      details\r\n      <span class=\"\" id=\"contentActivities\">\r\n        <p style=\"text-align: left\">\r\n          <strong>Learning Activities</strong><br/>\r\n          A study by Gruber et al.\r\n          <a target=\"_blank\"\r\n             href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">[3]</a>\r\n          took the model of learning events and added learning activities<br/>\r\n          to identify its outcomes in LD. Learning activities are split into\r\n          in-class methods and tools,<br/>\r\n          and online methods and tools [<a target=\"_blank\"\r\n                                           href=\"https://www.researchgate.net/publication/334170760_Design_Thinking_for_Technology_Enhanced_Learning\">3</a>,\r\n          <a target=\"_blank\"\r\n             href=\"https://www.researchgate.net/publication/222945649_Factors_affecting_teachers'_participation_in_professional_learning_activities\">9</a>].\r\n          Examples of in-class methods and tools are exercise, <br/>exam,\r\n          presentation, discussion, demonstration, etc. On the other hand,\r\n          online methods and <br/>tools are blogs, wikis, forums, photo and\r\n          audio notes, online tests and quizzes, e-portfolios, <br/>etc.\r\n        </p>\r\n      </span>\r\n    </span>\r\n        <div class=\"pt-1\">\r\n          <ng-multiselect-dropdown class=\"step2\" [placeholder]=\"'Learning Activities'\"\r\n                                   [settings]=\"dropdownSettings\"\r\n                                   [data]=\"(learningActivitiesOptions$ | async)\"\r\n                                   [(ngModel)]=\"selectedLearningActivities\"\r\n                                   (onSelect)=\"onActivitySelectChange()\" (onDeSelectAll)=\"onActivitySelectChange()\"\r\n                                   (onSelectAll)=\"onActivitySelectChange()\" (onDeSelect)=\"onActivitySelectChange()\">\r\n          </ng-multiselect-dropdown>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-20\">\r\n        <strong>Indicators</strong><br/>\r\n        <span style=\"font-size: 14px; cursor: pointer;\" id=\"tooltipIndicators\"\r\n              data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}'\r\n              title=\"\">\r\n      <span><img width=\"16px\" src=\"assets/images/question.png\"/> Click here for\r\n        more details</span>\r\n      <span class=\"toolBoxCss\" id=\"contentIndicators\">\r\n        <p style=\"height: 572px\">\r\n          <strong>Indicators</strong><br/>\r\n          Metrics (measurements) are used to create indicators; an indicator is\r\n          the result of the analysis of one<br/>\r\n          or multiple metrics (e.g. number of views, login/logout frequency &\r\n          time, number of posts, etc.) and gives\r\n          <br/>\r\n          a more comprehensive picture on a particular (abstract) learner\r\n          status, e.g. reading comprehension, <br/>\r\n          self-reflection, etc. An indicator covers a particular aspect of an\r\n          abstract variable (e.g., student engagement)<br/>\r\n          by using relevant (measurable) items.<br/><br/>\r\n          Here is an example of Student Engagement in Moodle. <br/>\r\n          <img src=\"assets/images/engagement.jpg\"/>\r\n        </p>\r\n      </span>\r\n    </span>\r\n        <div class=\"mat-input-element-fix pt-1\">\r\n          <input class=\"step3\" matInput [(ngModel)]=\"searchInd\" (change)=\"determineFilteredTableDataByIndicatorAndMetricText()\"  placeholder=\"Search Indicator\"/>\r\n        </div>\r\n      </div>\r\n      <div class=\"w-20\">\r\n        <strong>Metrics</strong><br/>\r\n        <span style=\"font-size: 14px; cursor: pointer;\" id=\"tooltipMetrics\"\r\n              data-tooltipster='{\"side\":\"bottom\",\"animation\":\"fall\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}'\r\n              title=\"\">\r\n      <img width=\"16px\" src=\"assets/images/question.png\"/> Click here for more\r\n      details\r\n      <span class=\"toolBoxCss\" id=\"contentMetrics\">\r\n        <p style=\"text-align: left\">\r\n          <strong>Metrics</strong><br/>\r\n          Learning analytics applications collect data from the interaction\r\n          between learners and LMSs.<br/>\r\n          To make sense of these captured data, they need to be categorized in a\r\n          corresponding unit of<br/>\r\n          measurement (e.g. number of views, login/logout frequency & time,\r\n          number of posts, etc.). In<br/>\r\n          this paper, we refer to the units of measurements as metrics.\r\n        </p>\r\n      </span>\r\n    </span>\r\n        <div class=\"mat-input-element-fix pt-1\">\r\n          <input class=\"stepMetrics\" matInput [(ngModel)]=\"searchMat\" (change)=\"determineFilteredTableDataByIndicatorAndMetricText()\" placeholder=\"Search Metrics\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <app-table *ngIf=\"!searchMat\" [data]=\"(tableData$ | async)\" [searchInd]=\"searchInd\" [searchMat]=\"searchMat\"\r\n               [checkedMap]=\"checkedMap\" [loggedIn]=\"loggedIn\" [notVerifiedIndicator]=\"notVerifiedIndicatorExists\"\r\n               (checkboxEmitter)=\"onCheckboxChange($event)\"\r\n               (getMetericsEmitter)=\"getMeterics($event)\"\r\n               (onReviewEmitter)=\"onReview($event)\"\r\n               (onVerdictEmitter)=\"onVerdict($event)\"\r\n               (onDeleteEmitter)=\"onDelete($event)\"\r\n               (onVerifyEmitter)=\"onVerify($event)\"\r\n    ></app-table>\r\n  </div>\r\n\r\n  <div class=\"content-right\" [ngClass]=\"{extendedMetrics: searchMat}\">\r\n    <div class=\"h-flex\">\r\n      <button class=\"stepVisualize buttonLaTool\" (click)=\"visualizeClicked()\">\r\n        <i class=\"fa-solid fa-display\"></i> &nbsp; Visualize\r\n      </button>\r\n      <button class=\"stepDownload buttonLaTool\" (click)=\"jsonClicked()\"><i class=\"fa-solid fa-download\"></i>\r\n        &nbsp; JSON\r\n      </button>\r\n\r\n      <button class=\"stepDownloadText buttonLaTool\" (click)=\"textClicked()\">\r\n        <i class=\"fa-solid fa-download\"></i> &nbsp; TEXT\r\n      </button>\r\n\r\n      <button class=\"stepReset buttonRed\" (click)=\"reset()\"><i class=\"fa-solid fa-arrow-rotate-right\"></i> &nbsp;\r\n        Reset\r\n      </button>\r\n\r\n      <button *ngIf=\"!loggedIn\" (click)=\"logIn()\" class=\"buttonLaTool login-button\">Login\r\n      </button>\r\n\r\n      <button *ngIf=\"loggedIn\"\r\n              style=\"background-image: linear-gradient(45deg, #8e1e22 10%, #edcfcf 51%, #8e1e22 100%) !important; box-shadow: 2px 4px 5px 0 #ead8d8;\"\r\n              class=\"buttonLaTool logout-button\" (click)='logout()'>Logout\r\n      </button>\r\n    </div>\r\n\r\n      <button *ngIf=\"loggedIn && loggedIn.superAdmin\" (click)=\"generateTreeStructure()\" class=\"buttonLaTool generateButton\">\r\n          Generate Data for TreeStructure\r\n      </button>\r\n\r\n    <label *ngIf=\"atLeastOneChecked()\" class=\"selected-indicators-label\"> Selected Indicator(s)</label>\r\n    <div class=\"selected-indicators-wrapper\">\r\n      <ul id=\"reset\" style=\"line-height: 17px; font-size: 15px\" *ngFor=\"let selectInd of ind_list\">\r\n        <li>\r\n          {{ selectInd }}\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <a id=\"back-to-top\" class=\"btn back-to-top\" role=\"button\" (click)=\"backToTop()\">\r\n      <i class=\"material-icons buttonLaTool\">arrow_upward</i>\r\n    </a>\r\n    <!-- <button class=\"stepReset buttonLaTool\"  (click)=\"reset()\"><img width=\"70px\" src=\"assets/images/reset.png\"/></button>  -->\r\n  </div>\r\n</div>\r\n<div *ngIf=\"searchMat\" class=\"extendedMetricsTable\">\r\n  <app-table [data]=\"(tableData$ | async)\" [searchInd]=\"searchInd\" [searchMat]=\"searchMat\"\r\n             [checkedMap]=\"checkedMap\" [loggedIn]=\"loggedIn\" [notVerifiedIndicator]=\"notVerifiedIndicatorExists\"\r\n             (checkboxEmitter)=\"onCheckboxChange($event)\"\r\n             (getMetericsEmitter)=\"getMeterics($event)\"\r\n             (onReviewEmitter)=\"onReview($event)\"\r\n             (onVerdictEmitter)=\"onVerdict($event)\"\r\n             (onDeleteEmitter)=\"onDelete($event)\"\r\n             (onVerifyEmitter)=\"onVerify($event)\"\r\n  ></app-table>\r\n</div>\r\n\r\n<ng-template #secondDialog let-indicator>\r\n  <h2 matDialogTitle>Metrics for the Indicator \"{{indicator.Title}}\"</h2>\r\n  <mat-dialog-content>\r\n      <div *ngIf=\"indicator.summary\" class=\"indicator-summary\">{{indicator.summary}}</div>\r\n      <div>Metrics:\r\n    <ul *ngFor=\"let metric of metrics_list\">\r\n      <li>{{ metric }}</li>\r\n    </ul>\r\n      </div>\r\n  </mat-dialog-content>\r\n  <button mat-button mat-dialog-close>Close</button>\r\n</ng-template>\r\n\r\n<ng-template #reviewDialog let-indicator>\r\n  <app-review-display [indicator]=\"indicator\"></app-review-display>\r\n</ng-template>\r\n\r\n<ng-template #verdictDialog let-reference>\r\n    <h2 matDialogTitle>Verdict for the Indicator \"{{metricsIndicatorTitle}}\"</h2>\r\n    <mat-dialog-content>\r\n        <div class=\"verdictContent\">\r\n            <div class=\"verdictRow\">\r\n                <div class=\"verdictLabel\">Verified:</div>\r\n                <div *ngIf=\"reference.status\">{{reference.status}}</div>\r\n                <div *ngIf=\"!reference.status\">No information</div>\r\n            </div>\r\n            <div class=\"verdictRow\">\r\n                <div class=\"verdictLabel\">Development:</div>\r\n                <div *ngIf=\"reference.development\">{{reference.development}}</div>\r\n                <div *ngIf=\"!reference.development\">No information</div>\r\n            </div>\r\n        </div>\r\n    </mat-dialog-content>\r\n    <button *ngIf=\"loggedIn && loggedIn.superAdmin\" mat-button mat-dialog-close (click)=\"editReference(reference._id)\" class=\"buttonLaTool\"\r\n            style=\"margin-right: 10px\">Edit\r\n    </button>\r\n    <button mat-button mat-dialog-close>Close</button>\r\n</ng-template>\r\n\r\n<ng-template #deleteDialog let-data>\r\n    <h2 matDialogTitle>Which delete process do you want to execute?</h2>\r\n    <button mat-button mat-dialog-close (click)=\"deleteIndicator(data.indicator)\" class=\"buttonLaTool\"\r\n            style=\"margin-right: 10px\">Delete Indicator\r\n    </button>\r\n    <button mat-button mat-dialog-close (click)=\"removeIndicatorFromActivity(data)\" class=\"buttonLaTool\"\r\n            style=\"margin-right: 10px\">Remove from Activity\r\n    </button>\r\n    <button mat-button mat-dialog-close>Cancel</button>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/table/table.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/table/table.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table>\r\n  <tr>\r\n    <th style=\"width: 120px\">Learning Events</th>\r\n    <th>\r\n      <div>\r\n        <span class=\"learningactivities\">Learning<br>Activities</span>\r\n        <span style=\"margin-left: 6.5em\">Indicators</span>\r\n        <span *ngIf=\"notVerifiedIndicator && loggedIn?.superAdmin\" class=\"not-verified-indicators\">(There are Indicators present which have not yet been verified)</span>\r\n      </div>\r\n    </th>\r\n  </tr>\r\n\r\n  <!-- for loop for learning events -->\r\n  <tr *ngFor=\"let learningEvents of data\">\r\n    <td class=\"leraningevents\">\r\n      {{ learningEvents.name }}\r\n    </td>\r\n    <td>\r\n      <table class=\"w-100\">\r\n        <tr class=\"activities\" *ngFor=\"let LearningActivities of learningEvents.activities\">\r\n          <td class=\"learningactivities\">\r\n            {{ LearningActivities.name }}\r\n          </td>\r\n          <td>\r\n            <table class=\"w-100\">\r\n              <tr *ngFor=\"let indic of LearningActivities.indicators\" class=\"indicator\" [ngClass]=\"{'not-yet-verified': !indic.verified}\">\r\n                <td *ngIf=\"indic.verified || loggedIn?.superAdmin\" [ngClass]=\"{'w-50': searchMat}\" style=\"min-width: 730px\">\r\n                  <div class=\"indicator-content\">\r\n                    <input *ngIf=\"indic\" class=\"step4\" #indicatorCheckbox type=\"checkbox\"\r\n                           [checked]=\"checkedMap.get(indic._id)\"\r\n                           (click)=\"onCheckboxChange(indic)\"\r\n                           [disabled]=\"!indic.verified\"/>\r\n                    <div class=\"indicator-text\">\r\n                      <a class=\"sortable stepViewMetrics\" (click)=\"getMetericsEmitter.emit(indic)\">\r\n                        <span [innerHTML]=\"getFullIndicatorName(indic) | sanitizeHtml: searchInd\">\r\n                        </span>\r\n                      </a>\r\n                      <div>\r\n                          <a class=\"sortable reference-icon stepReference\" (click)=\"navigateToReferenceLink(indic)\"\r\n                             [matTooltip]=\"'Reference'\">\r\n                              <i class=\"fa fa-quote-right\"></i>\r\n                          </a>\r\n                          <a class=\"sortable reference-icon stepReference\" (click)=\"onVerdictEmitter.emit(indic)\"\r\n                             [matTooltip]=\"'Verdict'\">\r\n                              <img style=\"height: 14px\" src=\"assets/images/verdictHammer.png\"/>\r\n                          </a>\r\n                      <a class=\"sortable review-icon stepReview\" (click)=\"onReviewEmitter.emit(indic)\"\r\n                         [matTooltip]=\"'Reviews'\">\r\n                        <i class=\"fa fa-star-o\"></i>\r\n                      </a>\r\n\r\n                      <a *ngIf=\"loggedIn?.superAdmin\" class=\"superAdmin-icon edit\" (click)=\"editAsSuperAdmin(indic)\"\r\n                         [matTooltip]=\"'Edit Indicator'\">\r\n                        <i class=\"fa fa-pencil\"></i>\r\n                      </a>\r\n                      <a *ngIf=\"loggedIn?.superAdmin\" class=\"superAdmin-icon delete\"\r\n                         (click)=\"onDeleteEmitter.emit({indicator: indic, activity: LearningActivities})\"\r\n                         [matTooltip]=\"'Delete Indicator'\">\r\n                        <i class=\"fa fa-trash\"></i>\r\n                      </a>\r\n                      <a *ngIf=\"loggedIn?.superAdmin && !indic.verified\" class=\"superAdmin-icon verify\"\r\n                         (click)=\"onVerifyEmitter.emit(indic)\" [matTooltip]=\"'Verify Indicator'\">\r\n                          <i class=\"fa fa-check\"></i>\r\n                      </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n                <td *ngIf=\"(indic.verified || loggedIn?.superAdmin) && searchMat\" class=\"w-50\" [ngClass]=\"{'not-yet-verified': !indic.verified}\">\r\n                  <a class=\"sortable\">\r\n                        <span [innerHTML]=\"indic.metrics | sanitizeHtml: searchMat\">\r\n                          {{ indic.metrics }}\r\n                        </span>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </td>\r\n  </tr>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n  <mat-label>Learning Events</mat-label>\r\n  <mat-select\r\n    name=\"Select\"\r\n    class=\"design\"\r\n    [formControl]=\"learningevents\"\r\n    [(value)]=\"selected\"\r\n    [(ngModel)]=\"selected\"\r\n    (selectionChange)=\"changeLearningEvents($event.value, selected)\"\r\n    multiple\r\n  >\r\n    <mat-select-trigger> {{ selected }}</mat-select-trigger>\r\n\r\n    <mat-option\r\n      (click)=\"$event.stopPropagation()\"\r\n      (change)=\"toggleSelection($event)\"\r\n    >\r\n      {{ text }}\r\n    </mat-option>\r\n\r\n    <mat-option\r\n      *ngFor=\"let learningevents of learningEvents\"\r\n      [value]=\"learningevents\"\r\n      >{{ learningevents }}</mat-option\r\n    >\r\n  </mat-select>\r\n</mat-form-field>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\" id=\"header\">\r\n  <mat-toolbar style=\"height: 72px;\" color=\"primary\">\r\n    <span class=\"step0\">\r\n      <span id=\"tooltipHeaderLogo\"\r\n            data-tooltipster='{\"side\":\"right\",\"animation\":\"grow\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}'>\r\n        <a><img routerLink=\"/\" class=\"HeaderLogo\" style=\"height: 66px; padding-top: 9px\" src=\"assets/images/logo.png\"/>\r\n          <span id=\"contentHeaderLogo\">\r\n            <!-- <p>\r\n              <strong>OpenLAIR</strong><br /><br />\r\n              Acronym [Blinded]<br />\r\n            </p> -->\r\n            <p>\r\n              <strong>OpenLAIR <a target=\"_blank\"\r\n                                  href=\"https://www.researchgate.net/publication/360034339_What_Indicators_Can_I_Serve_You_with_An_Evaluation_of_a_Research-Driven_Learning_Analytics_Indicator_Repository\">(Ahmad et al., 2022)</a> and <a\r\n                target=\"_blank\"\r\n                href=\"https://www.researchgate.net/publication/362256819_Connecting_the_dots_-_A_literature_review_on_learning_analytics_indicators_from_a_learning_design_perspective\">(Ahmad et al., 2022)</a> </strong><br/><br/>\r\n              Open Learning Analytics Indicator Repository<br/>\r\n            </p>\r\n          </span>\r\n      </a>\r\n    </span>\r\n    </span>\r\n\r\n    <div class=\"template-container-display\">\r\n      <div>\r\n      <span *ngIf=\"currentPage === 'display'\" id=\"tooltipHeaderLogo2\"\r\n            data-tooltipster='{\"side\":\"right\",\"animation\":\"grow\", \"delay\":\"200\", \"theme\":\"tooltipster-shadow\"}'>\r\n      <button class=\"buttonHead\" (click)=\"reset()\"><i class=\"fa-solid fa-arrow-rotate-right\"></i> Click here if the below TABLE is empty\r\n        <span id=\"contentHeaderLogo2\">\r\n          <p>\r\n            Please wait for 10 seconds\r\n          </p>\r\n        </span>\r\n      </button>\r\n    </span>\r\n      </div>\r\n      <div class=\"right-buttons\">\r\n        <button *ngIf=\"currentPage !== 'add-indicator'\" class=\"buttonHead\" (click)='addIndicators()'><img style=\"width: 17px;\"\r\n                                                                  src=\"assets/images/add.png\"/>&nbsp; Add Indicators\r\n        </button>\r\n\r\n        <!-- <a href=\"#\" onclick=\"myTour()\">Start Tour</a> -->\r\n        <button *ngIf=\"currentPage !== 'references'\" class=\"stepReferences buttonHead\" (click)='references()'><img style=\"width: 14px;\"\r\n                                                                              src=\"assets/images/ref.png\"/>&nbsp;\r\n          References\r\n        </button>\r\n\r\n        <!-- <a mat-button class=\"stepReferences\" href=\"https://atezaz.github.io/references.html\" target=\"_blank\">References</a> -->\r\n        <button *ngIf=\"currentPage === 'display'\" (click)=\"tourService.myTour()\" class=\"stepStartTour buttonHead\" id=\"myTourBtn\">\r\n          <i class=\"fa-solid fa-flag\"></i>&nbsp; Start Tour\r\n        </button>\r\n\r\n        <button *ngIf=\"currentPage !== 'display'\" class=\"buttonHead\" (click)=\"navigateHome()\">\r\n          <i class=\"fa-solid fa-house\"></i>&nbsp; Home\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reference/referance.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/reference/referance.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul *ngIf=\"references$ | async as references\">\r\n  <li *ngFor=\"let reference of references\" class=\"referenceItem\">\r\n    {{reference.referenceNumber}} {{reference.referenceText}}<br>\r\n    <div style=\"display: flex\">\r\n      <a *ngIf=\"reference.link\" href=\"{{reference.link}}\">{{shortenLink(reference.link)}}</a>\r\n      <a *ngIf=\"loggedIn?.superAdmin\" class=\"superAdmin-icon edit\" (click)=\"editAsSuperAdmin(reference._id)\">\r\n        <i class=\"fa fa-pencil\"></i>\r\n      </a>\r\n      <a *ngIf=\"loggedIn?.superAdmin\" class=\"superAdmin-icon delete\" (click)=\"deleteAsSuperAdmin(reference)\">\r\n        <i class=\"fa fa-trash\"></i>\r\n      </a>\r\n    </div>\r\n  </li>\r\n</ul>\r\n\r\n<a id=\"back-to-top\" class=\"btn back-to-top\" role=\"button\" (click)=\"backToTop()\">\r\n  <i class=\"material-icons buttonLaTool\">arrow_upward</i>\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/review-display/review-display.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/review-display/review-display.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"rating-header\">\r\n  <h2 matDialogTitle style=\"margin-bottom: 10px; padding-right: 2em\">Review(s) for {{indicator.Title}}</h2>\r\n  <div *ngIf=\"totalAverage\" [matTooltip]=\"totalAverage.toString()\" [matTooltipPosition]=\"'right'\"\r\n       style=\"margin-bottom: 10px; width: 18em\">\r\n    Overall average score:\r\n    <mat-star-rating [disabled]=\"true\" [rating]=\"totalAverage\"></mat-star-rating>\r\n  </div>\r\n</div>\r\n<mat-dialog-content class=\"reviewDialogContent\" *ngIf=\"reviews\">\r\n  <div *ngIf=\"reviews.length === 0\" class=\"reviewPlaceholder\">No Reviews have been submitted yet.</div>\r\n  <div *ngFor=\"let review of reviews\" class=\"rating-wrapper\">\r\n    <fieldset style=\"border-radius: 8px;\">\r\n      <legend>\r\n        <div class=\"d-flex\">\r\n          <span style=\"font-weight: bold; padding-right: 0.5em\">Name: </span>{{review.name}}\r\n          <div *ngIf=\"loggedIn?.superAdmin\">\r\n            <a class=\"mx-2\" mat-dialog-close (click)=\"editAsSuperAdmin(review._id)\">\r\n              <i class=\"fa fa-pencil\"></i>\r\n            </a>\r\n            <a (click)=\"deleteAsSuperAdmin(review._id)\">\r\n              <i class=\"fa fa-trash\"></i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </legend>\r\n        <div class=\"single-rating-wrapper\" [matTooltip]=\"calculateAverage(review).toString()\" [matTooltipPosition]=\"'right'\">\r\n            <span></span>\r\n            <div>\r\n                Average score:\r\n            <mat-star-rating [disabled]=\"true\" [rating]=\"calculateAverage(review)\"></mat-star-rating>\r\n            </div>\r\n        </div>\r\n      <div class=\"single-rating-wrapper\">\r\n        <span style=\"font-weight: bold\">Indicator quality:</span>\r\n        <mat-star-rating [disabled]=\"true\" [(rating)]=\"review.indicatorQuality\"></mat-star-rating>\r\n      </div>\r\n      <div>{{review.indicatorQualityNote}}</div>\r\n      <div class=\"single-rating-wrapper\">\r\n        <span style=\"font-weight: bold\">Article Clarity:</span>\r\n        <mat-star-rating [disabled]=\"true\" [(rating)]=\"review.articleClarity\"></mat-star-rating>\r\n      </div>\r\n      <div>{{review.articleClarityNote}}</div>\r\n      <div class=\"single-rating-wrapper\">\r\n        <span style=\"font-weight: bold\">Article Data:</span>\r\n        <mat-star-rating [disabled]=\"true\" [(rating)]=\"review.articleData\"></mat-star-rating>\r\n      </div>\r\n      <div>{{review.articleDataNote}}</div>\r\n      <div class=\"single-rating-wrapper\">\r\n        <span style=\"font-weight: bold\">Article Analysis:</span>\r\n        <mat-star-rating [disabled]=\"true\" [(rating)]=\"review.articleAnalysis\"></mat-star-rating>\r\n      </div>\r\n      <div>{{review.articleAnalysisNote}}</div>\r\n      <div class=\"single-rating-wrapper\">\r\n        <span style=\"font-weight: bold\">Article Conclusion:</span>\r\n        <mat-star-rating [disabled]=\"true\" [(rating)]=\"review.articleConclusion\"></mat-star-rating>\r\n      </div>\r\n      <div>{{review.articleConclusionNote}}</div>\r\n      <div class=\"single-rating-wrapper\">\r\n        <span style=\"font-weight: bold\">Article Contribution:</span>\r\n        <mat-star-rating [disabled]=\"true\" [(rating)]=\"review.articleContribution\"></mat-star-rating>\r\n      </div>\r\n      <div>{{review.articleContributionNote}}</div>\r\n    </fieldset>\r\n  </div>\r\n</mat-dialog-content>\r\n<button *ngIf=\"loggedIn\" mat-button mat-dialog-close (click)=\"addReview()\" class=\"buttonLaTool\"\r\n        style=\"margin-right: 10px\">{{buttonLabel}}\r\n</button>\r\n<button *ngIf=\"!loggedIn\" mat-button mat-dialog-close (click)=\"logIn()\" class=\"buttonLaTool\"\r\n        style=\"margin-right: 10px\">Login\r\n</button>\r\n<button mat-button mat-dialog-close style=\"border: 1px solid grey\">Close</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/review-edit/review-edit.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/review-edit/review-edit.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"indicator\" class=\"outer-div\">\r\n    <h2> Create Review for \"{{indicator.Title}}\"</h2>\r\n\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit()\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"column-100\">\r\n                <div class=\"row-no-wrap\" *ngIf=\"reference\">\r\n                    <div style=\"width: 80px\">Reference:</div>\r\n                    <span>{{reference.referenceText}} {{reference.referenceNumber}}</span>\r\n                </div>\r\n                <div class=\"row-no-wrap\" *ngIf=\"reference && reference.link\">\r\n                    <div style=\"width: 80px\">Link:</div>\r\n                    <a href=\"{{reference.link}}\">{{shortenLink(reference.link)}}</a>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div style=\"width: 80px\">Name:</div>\r\n                    <span>{{formGroup.controls['name'].value}}</span>\r\n                </div>\r\n            </div>\r\n            <div class=\"column-25\">\r\n                <div>Indicator quality:\r\n                    <mat-star-rating [(rating)]=\"indicatorQuality\"\r\n                                     (ratingChange)=\"ratingChanged('indicatorQuality', $event.valueOf())\"></mat-star-rating>\r\n                </div>\r\n                <div\r\n                    *ngIf=\"formGroup.controls['indicatorQuality'].invalid && (formGroup.controls['indicatorQuality'].dirty || formGroup.controls['indicatorQuality'].touched)\"\r\n                    class=\"alert\">\r\n                    <div *ngIf=\"formGroup.controls['indicatorQuality'].errors.required\">\r\n                        Rating is required.\r\n                    </div>\r\n                </div>\r\n                <span style=\"margin-top: 10px;\">Indicator quality Note:</span>\r\n                <textarea class=\"note-textarea\" formControlName=\"indicatorQualityNote\"></textarea>\r\n            </div>\r\n            <div class=\"column-25\">\r\n                <div>Article Clarity:\r\n                    <mat-star-rating [(rating)]=\"articleClarity\"\r\n                                     (ratingChange)=\"ratingChanged('articleClarity', $event.valueOf())\"></mat-star-rating>\r\n                </div>\r\n                <div\r\n                    *ngIf=\"formGroup.controls['articleClarity'].invalid && (formGroup.controls['articleClarity'].dirty || formGroup.controls['articleClarity'].touched)\"\r\n                    class=\"alert\">\r\n                    <div *ngIf=\"formGroup.controls['articleClarity'].errors.required\">\r\n                        Rating is required.\r\n                    </div>\r\n                </div>\r\n                <span style=\"margin-top: 10px;\">Article Clarity Note:</span>\r\n                <textarea class=\"note-textarea\" formControlName=\"articleClarityNote\"></textarea>\r\n            </div>\r\n            <div class=\"column-25\">\r\n                <div>Article Data:\r\n                    <mat-star-rating [(rating)]=\"articleData\"\r\n                                     (ratingChange)=\"ratingChanged('articleData', $event.valueOf())\"></mat-star-rating>\r\n                </div>\r\n                <div\r\n                    *ngIf=\"formGroup.controls['articleData'].invalid && (formGroup.controls['articleData'].dirty || formGroup.controls['articleData'].touched)\"\r\n                    class=\"alert\">\r\n                    <div *ngIf=\"formGroup.controls['articleData'].errors.required\">\r\n                        Rating is required.\r\n                    </div>\r\n                </div>\r\n                <span style=\"margin-top: 10px;\">Article Data Note:</span>\r\n                <textarea class=\"note-textarea\" formControlName=\"articleDataNote\"></textarea>\r\n            </div>\r\n            <div class=\"column-25\">\r\n                <div>Article Analysis:\r\n                    <mat-star-rating [(rating)]=\"articleAnalysis\"\r\n                                     (ratingChange)=\"ratingChanged('articleAnalysis', $event.valueOf())\"></mat-star-rating>\r\n                </div>\r\n                <div\r\n                    *ngIf=\"formGroup.controls['articleAnalysis'].invalid && (formGroup.controls['articleAnalysis'].dirty || formGroup.controls['articleAnalysis'].touched)\"\r\n                    class=\"alert\">\r\n                    <div *ngIf=\"formGroup.controls['articleAnalysis'].errors.required\">\r\n                        Rating is required.\r\n                    </div>\r\n                </div>\r\n                <span style=\"margin-top: 10px;\">Article Analysis Note:</span>\r\n                <textarea class=\"note-textarea\" formControlName=\"articleAnalysisNote\"></textarea>\r\n            </div>\r\n            <div class=\"column-25\">\r\n                <div>Article Conclusion:\r\n                    <mat-star-rating [(rating)]=\"articleConclusion\"\r\n                                     (ratingChange)=\"ratingChanged('articleConclusion', $event.valueOf())\"></mat-star-rating>\r\n                </div>\r\n                <div\r\n                    *ngIf=\"formGroup.controls['articleConclusion'].invalid && (formGroup.controls['articleConclusion'].dirty || formGroup.controls['articleConclusion'].touched)\"\r\n                    class=\"alert\">\r\n                    <div *ngIf=\"formGroup.controls['articleConclusion'].errors.required\">\r\n                        Rating is required.\r\n                    </div>\r\n                </div>\r\n                <span style=\"margin-top: 10px;\">Article Conclusion Note:</span>\r\n                <textarea class=\"note-textarea\" formControlName=\"articleConclusionNote\"></textarea>\r\n            </div>\r\n            <div class=\"column-25\">\r\n                <div>Article Contribution:\r\n                    <mat-star-rating [(rating)]=\"articleContribution\"\r\n                                     (ratingChange)=\"ratingChanged('articleContribution', $event.valueOf())\"></mat-star-rating>\r\n                </div>\r\n                <div\r\n                    *ngIf=\"formGroup.controls['articleContribution'].invalid && (formGroup.controls['articleContribution'].dirty || formGroup.controls['articleContribution'].touched)\"\r\n                    class=\"alert\">\r\n                    <div *ngIf=\"formGroup.controls['articleContribution'].errors.required\">\r\n                        Rating is required.\r\n                    </div>\r\n                </div>\r\n                <span style=\"margin-top: 10px;\">Article Contribution Note:</span>\r\n                <textarea class=\"note-textarea\" formControlName=\"articleContributionNote\"></textarea>\r\n            </div>\r\n        </div>\r\n        <button type=\"submit\" class=\"buttonLaTool\">Submit Review</button>\r\n        <button *ngIf=\"reviewId\"\r\n                style=\"background-image: linear-gradient(45deg, #8e1e22 10%, #edcfcf 51%, #8e1e22 100%) !important; box-shadow: 2px 4px 5px 0px #ead8d8;\"\r\n                class=\"buttonLaTool\" (click)=\"deleteReview()\">Delete Review\r\n        </button>\r\n    </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/star-rating/star-rating.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/star-rating/star-rating.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button mat-icon-button [disabled]=\"disabled\" [color]=\"color\" *ngFor=\"let ratingId of ratingArr;index as i\" [id]=\"'star_'+i\" (click)=\"onClick(i+1)\">\r\n  <mat-icon>\r\n    {{showIcon(i)}}\r\n  </mat-icon>\r\n</button>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component_display_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/display/display.component */ "./src/app/component/display/display.component.ts");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/component/admin/admin.component.ts");
/* harmony import */ var _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/add-data/add-data.component */ "./src/app/component/add-data/add-data.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/reference/referance.component */ "./src/app/component/reference/referance.component.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var _component_review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/review-edit/review-edit.component */ "./src/app/component/review-edit/review-edit.component.ts");
/* harmony import */ var _superAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./superAdmin/super-admin.service */ "./src/app/superAdmin/super-admin.service.ts");
/* harmony import */ var _component_add_data_data_resolver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/add-data/data.resolver */ "./src/app/component/add-data/data.resolver.ts");












const routes = [
    //{ path: '/display/data/s', redirectTo: '/', pathMatch: 'full' },
    //{ path: 'display/data', component: DisplayComponent },
    //{ path: '', component: DisplayComponent },
    //{ path: 'admin', component: AdminComponent },
    // { path: 'add/data', component: AddDataComponent, canActivate: [AuthGuardService] },
    { path: "add", component: _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_5__["AddDataComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]], resolve: { data: _component_add_data_data_resolver__WEBPACK_IMPORTED_MODULE_11__["DataResolver"] } },
    { path: "indicator/:id/edit", component: _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_5__["AddDataComponent"], canActivate: [_superAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_10__["SuperAdminService"]], data: { target: 'indicator' }, resolve: { data: _component_add_data_data_resolver__WEBPACK_IMPORTED_MODULE_11__["DataResolver"] } },
    { path: "reference/:id/edit", component: _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_5__["AddDataComponent"], canActivate: [_superAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_10__["SuperAdminService"]], data: { target: 'reference' }, resolve: { data: _component_add_data_data_resolver__WEBPACK_IMPORTED_MODULE_11__["DataResolver"] } },
    { path: "reference", component: _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_7__["ReferanceComponent"] },
    { path: "login", component: _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"] },
    { path: "dashboard", component: _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"] },
    { path: "review/add/:indicatorId", component: _component_review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_9__["ReviewEditComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: "review/:id/edit", component: _component_review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_9__["ReviewEditComponent"], canActivate: [_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: "", component: _component_display_display_component__WEBPACK_IMPORTED_MODULE_3__["DisplayComponent"] },
    { path: "", redirectTo: "display/data", pathMatch: "full" },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".multiselect-dropdown .dropdown-btn {\r\n    display: inline-block;\r\n\r\n    width: 100%;\r\n    padding: 6px 12px;\r\n    margin-bottom: 0;\r\n    font-size: 12px;\r\n    font-weight: 400;\r\n    line-height: 1.1;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border-radius: 0px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7O0lBRXJCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aXNlbGVjdC1kcm9wZG93biAuZHJvcGRvd24tYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm2015/ng-multiselect-dropdown.js");
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts-angular */ "./node_modules/highcharts-angular/fesm2015/highcharts-angular.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm2015/angular2-multiselect-dropdown.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/add-data/add-data.component */ "./src/app/component/add-data/add-data.component.ts");
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/header/header.component */ "./src/app/component/header/header.component.ts");
/* harmony import */ var _component_display_filter_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/display/filter.pipe */ "./src/app/component/display/filter.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _component_display_display_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/display/display.component */ "./src/app/component/display/display.component.ts");
/* harmony import */ var _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/dropdown/dropdown.component */ "./src/app/component/dropdown/dropdown.component.ts");
/* harmony import */ var _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/reference/referance.component */ "./src/app/component/reference/referance.component.ts");
/* harmony import */ var _component_display_select_check_all_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/display/select-check-all.component */ "./src/app/component/display/select-check-all.component.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/auth-guard.service.ts");
/* harmony import */ var _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/dashboard/dashboard.component */ "./src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var _chart_manager_chart_manager_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./chart-manager/chart-manager.component */ "./src/app/chart-manager/chart-manager.component.ts");
/* harmony import */ var _charts_student_interaction_patterns_student_interaction_patterns_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./charts/student-interaction-patterns/student-interaction-patterns.component */ "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.ts");
/* harmony import */ var _charts_competency_competency_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./charts/competency/competency.component */ "./src/app/charts/competency/competency.component.ts");
/* harmony import */ var _chart_helper_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./chart-helper.service */ "./src/app/chart-helper.service.ts");
/* harmony import */ var _charts_reading_analytics_reading_analytics_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./charts/reading-analytics/reading-analytics.component */ "./src/app/charts/reading-analytics/reading-analytics.component.ts");
/* harmony import */ var _charts_video_analytics_video_analytics_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./charts/video-analytics/video-analytics.component */ "./src/app/charts/video-analytics/video-analytics.component.ts");
/* harmony import */ var _charts_learning_progress_learning_progress_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./charts/learning-progress/learning-progress.component */ "./src/app/charts/learning-progress/learning-progress.component.ts");
/* harmony import */ var _charts_writing_analytics_writing_analytics_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./charts/writing-analytics/writing-analytics.component */ "./src/app/charts/writing-analytics/writing-analytics.component.ts");
/* harmony import */ var _charts_discussion_quality_discussion_quality_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./charts/discussion-quality/discussion-quality.component */ "./src/app/charts/discussion-quality/discussion-quality.component.ts");
/* harmony import */ var _charts_clickstream_analysis_clickstream_analysis_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./charts/clickstream-analysis/clickstream-analysis.component */ "./src/app/charts/clickstream-analysis/clickstream-analysis.component.ts");
/* harmony import */ var _charts_video_engagements_video_engagements_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./charts/video-engagements/video-engagements.component */ "./src/app/charts/video-engagements/video-engagements.component.ts");
/* harmony import */ var _charts_initiative_initiative_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./charts/initiative/initiative.component */ "./src/app/charts/initiative/initiative.component.ts");
/* harmony import */ var _charts_social_analysis_social_analysis_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./charts/social-analysis/social-analysis.component */ "./src/app/charts/social-analysis/social-analysis.component.ts");
/* harmony import */ var _charts_droppingout_droppingout_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./charts/droppingout/droppingout.component */ "./src/app/charts/droppingout/droppingout.component.ts");
/* harmony import */ var _charts_time_distribution_time_distribution_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./charts/time-distribution/time-distribution.component */ "./src/app/charts/time-distribution/time-distribution.component.ts");
/* harmony import */ var _charts_time_planning_time_planning_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./charts/time-planning/time-planning.component */ "./src/app/charts/time-planning/time-planning.component.ts");
/* harmony import */ var _charts_student_comparison_student_comparison_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./charts/student-comparison/student-comparison.component */ "./src/app/charts/student-comparison/student-comparison.component.ts");
/* harmony import */ var _charts_engagement_performance_engagement_performance_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./charts/engagement-performance/engagement-performance.component */ "./src/app/charts/engagement-performance/engagement-performance.component.ts");
/* harmony import */ var _charts_online_change_detection_online_change_detection_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./charts/online-change-detection/online-change-detection.component */ "./src/app/charts/online-change-detection/online-change-detection.component.ts");
/* harmony import */ var _charts_gamification_gamification_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./charts/gamification/gamification.component */ "./src/app/charts/gamification/gamification.component.ts");
/* harmony import */ var _charts_predict_coursecompletion_predict_coursecompletion_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./charts/predict-coursecompletion/predict-coursecompletion.component */ "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.ts");
/* harmony import */ var _charts_procrastination_procrastination_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./charts/procrastination/procrastination.component */ "./src/app/charts/procrastination/procrastination.component.ts");
/* harmony import */ var _charts_group_participation_group_participation_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./charts/group-participation/group-participation.component */ "./src/app/charts/group-participation/group-participation.component.ts");
/* harmony import */ var _charts_clustering_clustering_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./charts/clustering/clustering.component */ "./src/app/charts/clustering/clustering.component.ts");
/* harmony import */ var _charts_predict_exam_success_predict_exam_success_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./charts/predict-exam-success/predict-exam-success.component */ "./src/app/charts/predict-exam-success/predict-exam-success.component.ts");
/* harmony import */ var _charts_final_grade_prediction_final_grade_prediction_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./charts/final-grade-prediction/final-grade-prediction.component */ "./src/app/charts/final-grade-prediction/final-grade-prediction.component.ts");
/* harmony import */ var _charts_learning_behaviour_learning_behaviour_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./charts/learning-behaviour/learning-behaviour.component */ "./src/app/charts/learning-behaviour/learning-behaviour.component.ts");
/* harmony import */ var _charts_social_network_analysis_social_network_analysis_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./charts/social-network-analysis/social-network-analysis.component */ "./src/app/charts/social-network-analysis/social-network-analysis.component.ts");
/* harmony import */ var _charts_self_motivation_self_motivation_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./charts/self-motivation/self-motivation.component */ "./src/app/charts/self-motivation/self-motivation.component.ts");
/* harmony import */ var _charts_learning_behavior_patterns_learning_behavior_patterns_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./charts/learning-behavior-patterns/learning-behavior-patterns.component */ "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.ts");
/* harmony import */ var _charts_passing_rate_prediction_passing_rate_prediction_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./charts/passing-rate-prediction/passing-rate-prediction.component */ "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.ts");
/* harmony import */ var _charts_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./charts/feedback/feedback.component */ "./src/app/charts/feedback/feedback.component.ts");
/* harmony import */ var _charts_course_assessment_course_assessment_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./charts/course-assessment/course-assessment.component */ "./src/app/charts/course-assessment/course-assessment.component.ts");
/* harmony import */ var _charts_affective_state_affective_state_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./charts/affective-state/affective-state.component */ "./src/app/charts/affective-state/affective-state.component.ts");
/* harmony import */ var _charts_course_difficulty_course_difficulty_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./charts/course-difficulty/course-difficulty.component */ "./src/app/charts/course-difficulty/course-difficulty.component.ts");
/* harmony import */ var _charts_curriculum_usage_curriculum_usage_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./charts/curriculum-usage/curriculum-usage.component */ "./src/app/charts/curriculum-usage/curriculum-usage.component.ts");
/* harmony import */ var _charts_presentation_skills_presentation_skills_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./charts/presentation-skills/presentation-skills.component */ "./src/app/charts/presentation-skills/presentation-skills.component.ts");
/* harmony import */ var _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./component/admin/admin.component */ "./src/app/component/admin/admin.component.ts");
/* harmony import */ var _component_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./component/star-rating/star-rating.component */ "./src/app/component/star-rating/star-rating.component.ts");
/* harmony import */ var _component_review_display_review_display_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./component/review-display/review-display.component */ "./src/app/component/review-display/review-display.component.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _component_review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./component/review-edit/review-edit.component */ "./src/app/component/review-edit/review-edit.component.ts");
/* harmony import */ var _component_display_table_table_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./component/display/table/table.component */ "./src/app/component/display/table/table.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _component_header_header_service__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./component/header/header.service */ "./src/app/component/header/header.service.ts");
/* harmony import */ var _assets_js_tour_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../assets/js/tour.service */ "./src/assets/js/tour.service.ts");
/* harmony import */ var _superAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./superAdmin/super-admin.service */ "./src/app/superAdmin/super-admin.service.ts");






































































// const routes: Routes = [
//   { path: "add", component: AddDataComponent, canActivate: [AuthGuardService]},
//   { path: "reference", component: ReferanceComponent },
//   { path: "login", component: AdminComponent },
//   { path: "dashboard", component: DashboardComponent },
//   { path: "display/data", component: DisplayComponent },
//   { path: "", redirectTo: "display/data", pathMatch: "full" },
//   //{ path: "add/data", redirectTo: "add/data", pathMatch: "full" },
// ];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _component_add_data_add_data_component__WEBPACK_IMPORTED_MODULE_12__["AddDataComponent"],
            _component_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _component_display_display_component__WEBPACK_IMPORTED_MODULE_17__["DisplayComponent"],
            _component_display_filter_pipe__WEBPACK_IMPORTED_MODULE_14__["SanitizeHtmlPipe"],
            _component_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_18__["DropdownComponent"],
            _component_display_select_check_all_component__WEBPACK_IMPORTED_MODULE_20__["SelectCheckAllComponent"],
            _component_reference_referance_component__WEBPACK_IMPORTED_MODULE_19__["ReferanceComponent"],
            _component_admin_admin_component__WEBPACK_IMPORTED_MODULE_60__["AdminComponent"],
            _component_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_22__["DashboardComponent"],
            _chart_manager_chart_manager_component__WEBPACK_IMPORTED_MODULE_23__["ChartManagerComponent"],
            _charts_student_interaction_patterns_student_interaction_patterns_component__WEBPACK_IMPORTED_MODULE_24__["StudentInteractionPatternsComponent"],
            _charts_competency_competency_component__WEBPACK_IMPORTED_MODULE_25__["CompetencyComponent"],
            _charts_reading_analytics_reading_analytics_component__WEBPACK_IMPORTED_MODULE_27__["ReadingAnalyticsComponent"],
            _charts_video_analytics_video_analytics_component__WEBPACK_IMPORTED_MODULE_28__["VideoAnalyticsComponent"],
            _charts_learning_progress_learning_progress_component__WEBPACK_IMPORTED_MODULE_29__["LearningProgressComponent"],
            _charts_writing_analytics_writing_analytics_component__WEBPACK_IMPORTED_MODULE_30__["WritingAnalyticsComponent"],
            _charts_discussion_quality_discussion_quality_component__WEBPACK_IMPORTED_MODULE_31__["DiscussionQualityComponent"],
            _charts_clickstream_analysis_clickstream_analysis_component__WEBPACK_IMPORTED_MODULE_32__["ClickstreamAnalysisComponent"],
            _charts_video_engagements_video_engagements_component__WEBPACK_IMPORTED_MODULE_33__["VideoEngagementsComponent"],
            _charts_initiative_initiative_component__WEBPACK_IMPORTED_MODULE_34__["InitiativeComponent"],
            _charts_social_analysis_social_analysis_component__WEBPACK_IMPORTED_MODULE_35__["SocialAnalysisComponent"],
            _charts_droppingout_droppingout_component__WEBPACK_IMPORTED_MODULE_36__["DroppingoutComponent"],
            _charts_time_distribution_time_distribution_component__WEBPACK_IMPORTED_MODULE_37__["TimeDistributionComponent"],
            _charts_time_planning_time_planning_component__WEBPACK_IMPORTED_MODULE_38__["TimePlanningComponent"],
            _charts_student_comparison_student_comparison_component__WEBPACK_IMPORTED_MODULE_39__["StudentComparisonComponent"],
            _charts_engagement_performance_engagement_performance_component__WEBPACK_IMPORTED_MODULE_40__["EngagementPerformanceComponent"],
            _charts_online_change_detection_online_change_detection_component__WEBPACK_IMPORTED_MODULE_41__["OnlineChangeDetectionComponent"],
            _charts_gamification_gamification_component__WEBPACK_IMPORTED_MODULE_42__["GamificationComponent"],
            _charts_predict_coursecompletion_predict_coursecompletion_component__WEBPACK_IMPORTED_MODULE_43__["PredictCoursecompletionComponent"],
            _charts_procrastination_procrastination_component__WEBPACK_IMPORTED_MODULE_44__["ProcrastinationComponent"],
            _charts_group_participation_group_participation_component__WEBPACK_IMPORTED_MODULE_45__["GroupParticipationComponent"],
            _charts_clustering_clustering_component__WEBPACK_IMPORTED_MODULE_46__["ClusteringComponent"],
            _charts_predict_exam_success_predict_exam_success_component__WEBPACK_IMPORTED_MODULE_47__["PredictExamSuccessComponent"],
            _charts_final_grade_prediction_final_grade_prediction_component__WEBPACK_IMPORTED_MODULE_48__["FinalGradePredictionComponent"],
            _charts_learning_behaviour_learning_behaviour_component__WEBPACK_IMPORTED_MODULE_49__["LearningBehaviourComponent"],
            _charts_social_network_analysis_social_network_analysis_component__WEBPACK_IMPORTED_MODULE_50__["SocialNetworkAnalysisComponent"],
            _charts_self_motivation_self_motivation_component__WEBPACK_IMPORTED_MODULE_51__["SelfMotivationComponent"],
            _charts_learning_behavior_patterns_learning_behavior_patterns_component__WEBPACK_IMPORTED_MODULE_52__["LearningBehaviorPatternsComponent"],
            _charts_passing_rate_prediction_passing_rate_prediction_component__WEBPACK_IMPORTED_MODULE_53__["PassingRatePredictionComponent"],
            _charts_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_54__["FeedbackComponent"],
            _charts_course_assessment_course_assessment_component__WEBPACK_IMPORTED_MODULE_55__["CourseAssessmentComponent"],
            _charts_affective_state_affective_state_component__WEBPACK_IMPORTED_MODULE_56__["AffectiveStateComponent"],
            _charts_course_difficulty_course_difficulty_component__WEBPACK_IMPORTED_MODULE_57__["CourseDifficultyComponent"],
            _charts_curriculum_usage_curriculum_usage_component__WEBPACK_IMPORTED_MODULE_58__["CurriculumUsageComponent"],
            _charts_presentation_skills_presentation_skills_component__WEBPACK_IMPORTED_MODULE_59__["PresentationSkillsComponent"],
            _component_star_rating_star_rating_component__WEBPACK_IMPORTED_MODULE_61__["StarRatingComponent"],
            _component_review_display_review_display_component__WEBPACK_IMPORTED_MODULE_62__["ReviewDisplayComponent"],
            _component_review_edit_review_edit_component__WEBPACK_IMPORTED_MODULE_64__["ReviewEditComponent"],
            _component_display_table_table_component__WEBPACK_IMPORTED_MODULE_65__["TableComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_66__["NgSelectModule"],
            //RouterModule.forRoot(routes),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["AngularMultiSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_5__["AngularFontAwesomeModule"],
            highcharts_angular__WEBPACK_IMPORTED_MODULE_8__["HighchartsChartModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_63__["MatTooltipModule"]
        ],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"], _auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"], _superAdmin_super_admin_service__WEBPACK_IMPORTED_MODULE_69__["SuperAdminService"], _chart_helper_service__WEBPACK_IMPORTED_MODULE_26__["ChartHelperService"], _component_header_header_service__WEBPACK_IMPORTED_MODULE_67__["HeaderService"], _assets_js_tour_service__WEBPACK_IMPORTED_MODULE_68__["TourService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/*!***************************************!*\
  !*** ./src/app/auth-guard.service.ts ***!
  \***************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AuthGuardService = class AuthGuardService {
    constructor(router) {
        this.router = router;
    }
    canActivate(route, state) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')); //this.dataService.currentUserValue;
        if (currentUser) {
            return true;
        }
        else {
            //this.router.navigate(['/login']);
            this.router.navigate(['/login'], { state: { url: state.url } });
            return false;
        }
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuardService);



/***/ }),

/***/ "./src/app/chart-helper.service.ts":
/*!*****************************************!*\
  !*** ./src/app/chart-helper.service.ts ***!
  \*****************************************/
/*! exports provided: ChartHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartHelperService", function() { return ChartHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChartHelperService = class ChartHelperService {
    constructor() { }
    //Sets the indicators in the localstorage as a string
    setSettings(storageName, data) {
        localStorage.setItem(storageName, JSON.stringify(data));
    }
};
ChartHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ChartHelperService);



/***/ }),

/***/ "./src/app/chart-manager/chart-manager.component.css":
/*!***********************************************************!*\
  !*** ./src/app/chart-manager/chart-manager.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  display: grid;\r\n  grid-template-columns: repeat(12, 1fr);\r\n}\r\n\r\n.main-content {\r\n  grid-column: span 6;\r\n}\r\n\r\n::ng-deep .mat-form-field-infix {\r\n  width: 250px !important;\r\n}\r\n\r\n::ng-deep .mat-form-field {\r\n  position: -webkit-sticky !important;\r\n  position: sticky !important;\r\n  z-index: 100;\r\n  top: 0;\r\n}\r\n\r\n.mat-elevation-z5 {\r\n  position: relative;\r\n}\r\n\r\n.sticky {\r\n  top: 0px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .main-content {\r\n    grid-column: span 12;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 480px) {\r\n  .main-content {\r\n    grid-column: span 12;\r\n  }\r\n}\r\n\r\n.downloadCharts {\r\n  margin: 1rem;\r\n  float: right;\r\n  z-index: 100;\r\n  position: fixed;\r\n  right: 1%;\r\n}\r\n\r\n.backBtn {\r\n  float: right;\r\n  margin: 1rem;\r\n  z-index: 100;\r\n  position: fixed;\r\n  right: 8%;\r\n}\r\n\r\n.mat-elevation-z5 {\r\n  position: relative;\r\n}\r\n\r\n.sticky {\r\n  position: fixed;\r\n  top: 0px;\r\n}\r\n\r\n.buttons {\r\n  height: 70px;\r\n  background-color: #fff;\r\n  border: 2px solid #f5f5f5;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\r\n  position: fixed;\r\n  right: 0;\r\n  float: right;\r\n  z-index: 99;\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnQtbWFuYWdlci9jaGFydC1tYW5hZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUNBQTJCO0VBQTNCLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osTUFBTTtBQUNSOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixtREFBbUQ7RUFDbkQsZUFBZTtFQUNmLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0LW1hbmFnZXIvY2hhcnQtbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMiwgMWZyKTtcclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgd2lkdGg6IDI1MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQge1xyXG4gIHBvc2l0aW9uOiBzdGlja3kgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16NSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICB0b3A6IDBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIGdyaWQtY29sdW1uOiBzcGFuIDEyO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgZ3JpZC1jb2x1bW46IHNwYW4gMTI7XHJcbiAgfVxyXG59XHJcblxyXG4uZG93bmxvYWRDaGFydHMge1xyXG4gIG1hcmdpbjogMXJlbTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMSU7XHJcbn1cclxuXHJcbi5iYWNrQnRuIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDglO1xyXG59XHJcblxyXG4ubWF0LWVsZXZhdGlvbi16NSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc3RpY2t5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZjVmNWY1O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMS45NXB4IDEuOTVweCAyLjZweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHotaW5kZXg6IDk5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/chart-manager/chart-manager.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/chart-manager/chart-manager.component.ts ***!
  \**********************************************************/
/*! exports provided: ChartManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartManagerComponent", function() { return ChartManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ChartManagerComponent = class ChartManagerComponent {
    constructor() {
        this.indicators = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.components = [];
        this.isSticky = false;
        this.unselectedIndicator = [];
        this.regex = /\[[0-9]+\]/; // We will check if the array contains a string in the format [XX] where X = 0-9
    }
    checkScroll() {
        this.isSticky = window.pageYOffset >= 50;
    }
    /*
      This component renders all the charts.
      Parse all the indicators from local Storage into the dropdownItems variable, referenceNumbers contains only the numbers in brackets.
      The HTML template checks if referenceNumbers includes an indicator number in brackets and renders it.
  
      
    */
    ngOnInit() {
        this.dropdownItems = JSON.parse(localStorage.getItem("selectedIndicators")); //For the dropdown menu
        this.referenceNumbers = JSON.parse(localStorage.getItem("referenceNumbers")); //To render the charts
    }
    //Selecting and unselecting charts in the drop down menu
    selectCharts(event, state) {
        if (event.isUserInput) {
            if (!event.source.selected) {
                let num = state.match(this.regex)[0]; //E.G. state = Course difficulty [77] => num = [77]
                let index = this.referenceNumbers.indexOf(num);
                this.referenceNumbers.splice(index, 1)[0];
            }
            else {
                let num = state.match(this.regex)[0];
                if (state.match(this.regex)[0]) {
                    this.referenceNumbers.push(num); //push the reference into the referenceNumbers array after selecting it
                }
            }
        }
    }
    /*
      When the user presses the download button this function
      writes all the HTML content of the current page into a html file
      The excludeStyle variable sets css properties which should not be seen in the local file to none
    */
    downloadPage() {
        var htmlContent = [document.querySelector("html").innerHTML];
        var excludeStyle = `
      <style>
      .downloadCharts{
        display: none;
      }
  
      .header {
        display: none;
      }
  
      .mat-form-field {
        display: none;
      }
  
      .footer {
        display: block !important;
      }
      
      .backBtn {
        display:none;
      }

      .buttons {
        display:none;
      }
  
      .highcharts-subtitle {
        display:none;
      }
     
      </style>`;
        //add style sheet to the html
        htmlContent = [htmlContent[0].concat(excludeStyle)];
        var bl = new Blob(htmlContent, { type: "text/html" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(bl);
        a.download = "Indicator Visualizations.html";
        a.hidden = true;
        document.body.appendChild(a);
        a.click();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", ["$event"])
], ChartManagerComponent.prototype, "checkScroll", null);
ChartManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-chart-manager",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chart-manager/chart-manager.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chart-manager.component.css */ "./src/app/chart-manager/chart-manager.component.css")).default]
    })
], ChartManagerComponent);



/***/ }),

/***/ "./src/app/charts/affective-state/affective-state.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/affective-state/affective-state.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9hZmZlY3RpdmUtc3RhdGUvYWZmZWN0aXZlLXN0YXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/affective-state/affective-state.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/affective-state/affective-state.component.ts ***!
  \*********************************************************************/
/*! exports provided: AffectiveStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AffectiveStateComponent", function() { return AffectiveStateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let AffectiveStateComponent = class AffectiveStateComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                polar: true,
            },
            title: {
                text: "Affective state",
            },
            subtitle: {
                text: "Self-Reported Affective State [32] Emotion [32], Affective State [84], Self-Regulation [36] Emotional state [36], Student progress (LMS activities) [87] Measure fixed mindset / Belonging uncertainty / Stereotype threat (Questionnaires) [87] Alerting [87] Self-reflection [87]",
            },
            xAxis: {
                categories: [
                    "Activity 1",
                    "Activity 2",
                    "Activity 3",
                    "Activity 4",
                    "Activity 5",
                    "Activity 6",
                ],
            },
            yAxis: {
                min: 0,
            },
            series: [
                {
                    type: "column",
                    name: "Frustrated",
                    data: [1, 4, 2, 1, 5, 6],
                },
                {
                    type: "column",
                    name: "Confused",
                    data: [3, 7, 1, 3, 3, 4],
                },
                {
                    type: "column",
                    name: "Bored",
                    data: [2, 3, 4, 5, 8, 7],
                },
                {
                    type: "column",
                    name: "Happy",
                    data: [1, 8, 2, 7, 3, 6],
                },
                {
                    type: "line",
                    name: "Class Average",
                    data: [4, 3, 6, 2, 5, 3],
                },
                {
                    type: "column",
                    name: "Motivated",
                    data: [5, 6, 8, 9, 4, 2],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
AffectiveStateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-affective-state",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./affective-state.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/affective-state/affective-state.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./affective-state.component.css */ "./src/app/charts/affective-state/affective-state.component.css")).default]
    })
], AffectiveStateComponent);



/***/ }),

/***/ "./src/app/charts/clickstream-analysis/clickstream-analysis.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/charts/clickstream-analysis/clickstream-analysis.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jbGlja3N0cmVhbS1hbmFseXNpcy9jbGlja3N0cmVhbS1hbmFseXNpcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/clickstream-analysis/clickstream-analysis.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/charts/clickstream-analysis/clickstream-analysis.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ClickstreamAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickstreamAnalysisComponent", function() { return ClickstreamAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let ClickstreamAnalysisComponent = class ClickstreamAnalysisComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.chartOptions = {
            title: {
                text: "Clickstream Analysis",
            },
            subtitle: {
                text: "Clickstream Analysis [103] Student behavior [103]",
            },
            xAxis: {
                tickInterval: 1,
                type: "linear",
                accessibility: {
                    rangeDescription: "Range: 1 to 30",
                },
            },
            yAxis: {
                type: "linear",
                minorTickInterval: 0.1,
                accessibility: {
                    rangeDescription: "Range: 1 to 1000",
                },
                title: {
                    text: "Average Number of Clicks",
                },
            },
            tooltip: {
                headerFormat: "<b>{series.name}</b><br />",
                pointFormat: "Day = {point.x}, Clicks = {point.y}",
            },
            series: [
                {
                    name: "Average Number of Clicks per Day",
                    data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 500)),
                    pointStart: 1,
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
ClickstreamAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-clickstream-analysis",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clickstream-analysis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clickstream-analysis/clickstream-analysis.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clickstream-analysis.component.css */ "./src/app/charts/clickstream-analysis/clickstream-analysis.component.css")).default]
    })
], ClickstreamAnalysisComponent);



/***/ }),

/***/ "./src/app/charts/clustering/clustering.component.css":
/*!************************************************************!*\
  !*** ./src/app/charts/clustering/clustering.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jbHVzdGVyaW5nL2NsdXN0ZXJpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/clustering/clustering.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/charts/clustering/clustering.component.ts ***!
  \***********************************************************/
/*! exports provided: ClusteringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusteringComponent", function() { return ClusteringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




const drilldown = __webpack_require__(/*! highcharts/modules/drilldown.js */ "./node_modules/highcharts/modules/drilldown.js");
drilldown(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let ClusteringComponent = class ClusteringComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "packedbubble",
                height: "50%",
            },
            title: {
                text: "Clustering",
            },
            subtitle: {
                text: "Clustering (educational data mining) [66], Pass-Fail Classification [120] Keystroke analytics [120], Student Classification [113] Video analytics [113], Classifying Student behavior [29]",
            },
            tooltip: {
                useHTML: true,
                pointFormat: "<b>{point.name}:</b><br>",
            },
            xAxis: {
                type: "category",
            },
            plotOptions: {
                packedbubble: {
                    minSize: "20%",
                    maxSize: "100%",
                    zMin: 0,
                    zMax: 1000,
                    layoutAlgorithm: {
                        gravitationalConstant: 0.05,
                        splitSeries: true,
                        seriesInteraction: false,
                        dragBetweenSeries: true,
                        parentNodeLimit: true,
                    },
                    dataLabels: {
                        enabled: true,
                        format: "{point.name}",
                        filter: {
                            property: "y",
                            operator: ">",
                            value: 15,
                        },
                        style: {
                            color: "black",
                            textOutline: "none",
                            fontWeight: "normal",
                        },
                    },
                },
            },
            series: [
                {
                    name: "Cluster 1 (High performers)",
                    data: [
                        {
                            name: "User 1",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "high",
                        },
                        {
                            name: "User 2",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "high",
                        },
                        {
                            name: "User 3",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "high",
                        },
                        {
                            name: "User 4",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "high",
                        },
                        {
                            name: "User 5",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "high",
                        },
                        {
                            name: "User 6",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "high",
                        },
                        {
                            name: "User 7",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "high",
                        },
                    ],
                },
                {
                    name: "Cluster 2 (Average performers)",
                    data: [
                        {
                            name: "User 13",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "avg",
                        },
                        {
                            name: "User 14",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "avg",
                        },
                        {
                            name: "User 15",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "avg",
                        },
                        {
                            name: "User 16",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "avg",
                        },
                        {
                            name: "User 17",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "avg",
                        },
                        {
                            name: "User 18",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "avg",
                        },
                    ],
                },
                {
                    name: "Cluster 3 (Low performers)",
                    data: [
                        {
                            name: "User 23",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "low",
                        },
                        {
                            name: "User 24",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "low",
                        },
                        {
                            name: "User 25",
                            value: Math.floor(Math.random() * 30),
                            drilldown: "low",
                        },
                    ],
                },
            ],
            drilldown: {
                series: [
                    {
                        name: "High performers",
                        id: "high",
                        type: "column",
                        data: [
                            { name: "Time spent on theoretical contents", y: 22 },
                            { name: "Time spent on forum", y: 35 },
                            { name: "Time spent on practical tasks", y: 32 },
                            { name: "Time until task is submitted", y: 25 },
                            { name: "# words in forum", y: 21 },
                        ],
                    },
                    {
                        name: "Average performers",
                        id: "avg",
                        type: "column",
                        data: [
                            { name: "Time spent on theoretical contents", y: 14 },
                            { name: "Time spent on forum", y: 25 },
                            { name: "Time spent on practical tasks", y: 22 },
                            { name: "Time until task is submitted", y: 35 },
                            { name: "# words in forum", y: 15 },
                        ],
                    },
                    {
                        name: "Low performers",
                        id: "low",
                        type: "column",
                        data: [
                            { name: "Time spent on theoretical contents", y: 7 },
                            { name: "Time spent on forum", y: 12 },
                            { name: "Time spent on practical tasks", y: 10 },
                            { name: "Time until task is submitted", y: 50 },
                            { name: "# words in forum", y: 8 },
                        ],
                    },
                ],
            },
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
ClusteringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-clustering",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clustering.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/clustering/clustering.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./clustering.component.css */ "./src/app/charts/clustering/clustering.component.css")).default]
    })
], ClusteringComponent);



/***/ }),

/***/ "./src/app/charts/competency/competency.component.css":
/*!************************************************************!*\
  !*** ./src/app/charts/competency/competency.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb21wZXRlbmN5L2NvbXBldGVuY3kuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/competency/competency.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/charts/competency/competency.component.ts ***!
  \***********************************************************/
/*! exports provided: CompetencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetencyComponent", function() { return CompetencyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let CompetencyComponent = class CompetencyComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    // time watching videos
    // time on platform
    // # videos accessed
    // # forum visits
    // # sessions per week
    // # questions attempted
    // % of time spent on videos
    // % of time spent on quizzes
    // avg. time on platform per week
    // # visited video lectures
    // # forum contributions
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
                polar: true,
            },
            title: {
                text: "Competency",
            },
            subtitle: {
                text: "Metacognitive Awareness [31] Competency [31], Self regulation [46] Learning strategies [46] predict performance [46] procrastination [46], Predict performance (by self-regulation metrics) [98] Self-Regulated Learning [98] ",
            },
            xAxis: {
                categories: [
                    "# forum contributions",
                    "# visited video lectures",
                    "# questions attempted",
                    "% of time spent on quizzes",
                    "avg. time on platform per week",
                ],
                tickmarkPlacement: "on",
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: "polygon",
                lineWidth: 0,
                min: 0,
            },
            exporting: {
                enabled: true,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            series: [
                {
                    name: "You",
                    data: [30, 52, 44, 40, 22],
                    pointPlacement: "on",
                },
                {
                    name: "Average graduate last week",
                    data: [23, 41, 50, 44, 29],
                    pointPlacement: "on",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
CompetencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-competency",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./competency.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/competency/competency.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./competency.component.css */ "./src/app/charts/competency/competency.component.css")).default]
    })
], CompetencyComponent);



/***/ }),

/***/ "./src/app/charts/course-assessment/course-assessment.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/course-assessment/course-assessment.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb3Vyc2UtYXNzZXNzbWVudC9jb3Vyc2UtYXNzZXNzbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/course-assessment/course-assessment.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/course-assessment/course-assessment.component.ts ***!
  \*************************************************************************/
/*! exports provided: CourseAssessmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseAssessmentComponent", function() { return CourseAssessmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/networkgraph */ "./node_modules/highcharts/modules/networkgraph.js");
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__);





highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let CourseAssessmentComponent = class CourseAssessmentComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.chartOptions = {
            chart: {},
            title: {
                text: "Course Assessment (Student X on Assignment 1)",
            },
            subtitle: {
                text: "Course Assessments [55]",
            },
            plotOptions: {
                networkgraph: {
                    layoutAlgorithm: {
                        enableSimulation: true,
                    },
                },
            },
            series: [
                {
                    type: "networkgraph",
                    link: {
                        width: 3,
                    },
                    marker: {
                        radius: 20,
                    },
                    dataLabels: {
                        enabled: true,
                        linkFormat: "",
                    },
                    data: [
                        {
                            from: "Conditionals",
                            to: "Functions",
                        },
                        {
                            from: "Conditionals",
                            to: "Loops",
                            color: "red",
                            width: 4,
                        },
                        {
                            from: "Conditionals",
                            to: "Fundamentals",
                            color: "green",
                            width: 4,
                        },
                        {
                            from: "Functions",
                            to: "File I/O",
                        },
                        {
                            from: "Functions",
                            to: "Arrays",
                        },
                        {
                            from: "Loops",
                            to: "File I/O",
                        },
                        {
                            from: "Loops",
                            to: "Arrays",
                        },
                    ],
                    nodes: [
                        {
                            id: "Loops",
                            color: "red",
                        },
                        {
                            id: "Conditionals",
                            color: "orange",
                        },
                    ],
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        this.chartOptions2 = {
            chart: {
                type: "networkgraph",
            },
            title: {
                text: "Course Assessment (Cohort on Assignment 1)",
            },
            plotOptions: {
                networkgraph: {
                    layoutAlgorithm: {
                        enableSimulation: true,
                    },
                },
            },
            series: [
                {
                    type: "networkgraph",
                    link: {
                        width: 3,
                    },
                    marker: {
                        radius: 20,
                    },
                    dataLabels: {
                        enabled: true,
                        linkFormat: "",
                    },
                    data: [
                        {
                            from: "Conditionals",
                            to: "Functions",
                        },
                        {
                            from: "Conditionals",
                            to: "Loops",
                            color: "orange",
                            width: 4,
                        },
                        {
                            from: "Conditionals",
                            to: "Fundamentals",
                            color: "green",
                            width: 4,
                        },
                        {
                            from: "Functions",
                            to: "File I/O",
                        },
                        {
                            from: "Functions",
                            to: "Arrays",
                        },
                        {
                            from: "Loops",
                            to: "File I/O",
                        },
                        {
                            from: "Loops",
                            to: "Arrays",
                        },
                    ],
                    nodes: [
                        {
                            id: "Loops",
                            color: "lightgreen",
                        },
                        {
                            id: "Conditionals",
                            color: "green",
                        },
                    ],
                },
            ],
        };
    }
};
CourseAssessmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-course-assessment",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course-assessment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-assessment/course-assessment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course-assessment.component.css */ "./src/app/charts/course-assessment/course-assessment.component.css")).default]
    })
], CourseAssessmentComponent);



/***/ }),

/***/ "./src/app/charts/course-difficulty/course-difficulty.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/course-difficulty/course-difficulty.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jb3Vyc2UtZGlmZmljdWx0eS9jb3Vyc2UtZGlmZmljdWx0eS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/course-difficulty/course-difficulty.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/course-difficulty/course-difficulty.component.ts ***!
  \*************************************************************************/
/*! exports provided: CourseDifficultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDifficultyComponent", function() { return CourseDifficultyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let CourseDifficultyComponent = class CourseDifficultyComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Course difficulty",
            },
            subtitle: {
                text: "Course difficulty [77], Perceived difficulty [133] Self-efficacy [133] Cognitive load [133]",
            },
            xAxis: {
                categories: [
                    "Object Oriented Programming",
                    "Linear Algebra",
                    "Physics",
                    "Database Systems",
                    "Data Structure",
                    "Statistics",
                    "Operating Systems",
                    "Algorithm Analysis",
                    "Programming Fundamentals",
                ],
                crosshair: true,
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            yAxis: {
                labels: {
                    format: "{value}%",
                },
                min: 0,
                title: {
                    text: null,
                },
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Perceived Negative Impact over GPA",
                    data: [17, 25, 0, 4, 5, 27, 31, 10, 32],
                },
                {
                    name: "Perceived difficulty",
                    data: [0, 28, 4, 4, 8, 32, 33, 17, 12],
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
CourseDifficultyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-course-difficulty",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./course-difficulty.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/course-difficulty/course-difficulty.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./course-difficulty.component.css */ "./src/app/charts/course-difficulty/course-difficulty.component.css")).default]
    })
], CourseDifficultyComponent);



/***/ }),

/***/ "./src/app/charts/curriculum-usage/curriculum-usage.component.css":
/*!************************************************************************!*\
  !*** ./src/app/charts/curriculum-usage/curriculum-usage.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9jdXJyaWN1bHVtLXVzYWdlL2N1cnJpY3VsdW0tdXNhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/curriculum-usage/curriculum-usage.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/charts/curriculum-usage/curriculum-usage.component.ts ***!
  \***********************************************************************/
/*! exports provided: CurriculumUsageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurriculumUsageComponent", function() { return CurriculumUsageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let CurriculumUsageComponent = class CurriculumUsageComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "scatter",
                zoomType: "xy",
            },
            title: {
                text: "Teacher curriculum usage",
            },
            subtitle: {
                text: "Teacher curriculum usage [65] Curriculum Planning / designing [65], Content quality [58]",
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: "Proportion of days visited",
                },
                startOnTick: true,
                endOnTick: true,
                min: 0,
                max: 1,
                showLastLabel: true,
            },
            yAxis: {
                title: {
                    text: "Total visits (log_10)",
                },
                max: 1000,
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: false,
                                lineColor: "rgb(100,100,100)",
                            },
                        },
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false,
                            },
                        },
                    },
                    tooltip: {
                        enabled: false,
                    },
                },
            },
            series: [
                {
                    name: "Teacher",
                    color: "rgba(119, 152, 191, .8)",
                    data: [
                        [0, 7],
                        [0, 9],
                        [0.05, 100],
                        [0.05, 130],
                        [0.05, 170],
                        [0.05, 320],
                        [0.05, 440],
                        [0.05, 620],
                        [0.06, 940],
                        [0.07, 150],
                        [0.07, 600],
                        [0.07, 660],
                        [0.07, 630],
                        [0.07, 720],
                        [0.07, 800],
                        [0.07, 870],
                        [0.08, 820],
                        [0.08, 680],
                        [0.08, 780],
                        [0.08, 920],
                        [0.08, 880],
                        [0.08, 980],
                        [0.09, 1000],
                        [0.09, 900],
                        [0.09, 940],
                        [0.09, 960],
                        [0.09, 880],
                        [0.09, 830],
                        [0.06, 200],
                        [0, 500],
                        [0.02, 700],
                        [0.03, 800],
                        [0.04, 1000],
                        [0.1, 100],
                        [0.1, 700],
                        [0.1, 660],
                        [0.1, 803],
                        [0.1, 740],
                        [0.1, 890],
                        [0.1, 900],
                        [0.1, 950],
                        [0.12, 250],
                        [0.12, 750],
                        [0.12, 800],
                        [0.12, 910],
                        [0.12, 690],
                        [0.15, 903],
                        [0.15, 850],
                        [0.15, 820],
                        [0.15, 720],
                        [0.15, 680],
                        [0.15, 880],
                        [0, 100],
                        [0.25, 140],
                        [0.5, 700],
                        [0.5, 300],
                        [0.5, 500],
                        [0.6, 620],
                        [0.6, 820],
                        [0.75, 200],
                        [1, 150],
                        [1, 220],
                        [1, 300],
                        [1, 420],
                        [1, 550],
                        [1, 800],
                    ],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
CurriculumUsageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-curriculum-usage",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./curriculum-usage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/curriculum-usage/curriculum-usage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./curriculum-usage.component.css */ "./src/app/charts/curriculum-usage/curriculum-usage.component.css")).default]
    })
], CurriculumUsageComponent);



/***/ }),

/***/ "./src/app/charts/discussion-quality/discussion-quality.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/charts/discussion-quality/discussion-quality.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9kaXNjdXNzaW9uLXF1YWxpdHkvZGlzY3Vzc2lvbi1xdWFsaXR5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/discussion-quality/discussion-quality.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/charts/discussion-quality/discussion-quality.component.ts ***!
  \***************************************************************************/
/*! exports provided: DiscussionQualityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionQualityComponent", function() { return DiscussionQualityComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let DiscussionQualityComponent = class DiscussionQualityComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
                polar: true,
            },
            title: {
                text: "Discussion forum quality",
            },
            subtitle: {
                text: "Discussion Contribution Quantity & Quality [24] Reading analytics [24], Discussion forum quality [27], Discussion Engagements [49], Exploratory dialogue [142], Discourse Analysis [80], Social Network Analysis (Discussion Forum) [88] Discourse Analysis [88]",
            },
            xAxis: {
                categories: ["# comments", "# likes", "# replies"],
                tickmarkPlacement: "on",
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: "polygon",
                lineWidth: 0,
                min: 0,
            },
            exporting: {
                enabled: true,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            series: [
                {
                    name: "You",
                    data: [30, 52, 44],
                    pointPlacement: "on",
                },
                {
                    name: "Class Average",
                    data: [56, 49, 33],
                    pointPlacement: "on",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
DiscussionQualityComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-discussion-quality",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./discussion-quality.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/discussion-quality/discussion-quality.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./discussion-quality.component.css */ "./src/app/charts/discussion-quality/discussion-quality.component.css")).default]
    })
], DiscussionQualityComponent);



/***/ }),

/***/ "./src/app/charts/droppingout/droppingout.component.css":
/*!**************************************************************!*\
  !*** ./src/app/charts/droppingout/droppingout.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9kcm9wcGluZ291dC9kcm9wcGluZ291dC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/droppingout/droppingout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/charts/droppingout/droppingout.component.ts ***!
  \*************************************************************/
/*! exports provided: DroppingoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DroppingoutComponent", function() { return DroppingoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let DroppingoutComponent = class DroppingoutComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        //Set the chart data after we get the indicator and metrics
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "scatter",
                zoomType: "xy",
            },
            title: {
                text: "Dropping out",
            },
            subtitle: {
                text: "Dropping out [59], Early Warning [79] Dropout Prediction [79], Course Planning [99] Early Warning [99], At-Risk Students [101] Early warning [101], At-Risk Students [64] Retention Prediction [64], At-Risk students [71] Exam success prediction [71], At-risk students [131] performance [131]",
            },
            tooltip: { enabled: false },
            xAxis: {
                min: -100,
                max: 100,
                tickInterval: 100,
                minorTickInterval: 10,
                tickLength: 0,
                minorTickLength: 0,
                labels: {
                    enabled: false,
                },
                title: {
                    enabled: true,
                    text: "Academic Performance",
                },
                /*
                plotLines:[{
                    value:0,
                    color:'#666',
                    width:1
                }],
                */
                gridLineWidth: 2,
                showLastLabel: true,
            },
            yAxis: {
                title: {
                    enabled: true,
                    text: "Academic Engagement",
                },
                min: -100,
                max: 100,
                labels: {
                    enabled: false,
                },
                tickInterval: 100,
                minorTickInterval: 10,
                tickLength: 0,
                minorTickLength: 0,
                gridLineWidth: 2,
                plotLinesplotLines: [
                    {
                        value: 0,
                        color: "#666",
                        width: 1,
                    },
                ],
            },
            plotOptions: {},
            series: [
                {
                    name: "Second Semester Drop-out",
                    color: "rgba(223, 83, 83, .8)",
                    data: [
                        { x: -90, y: -10 },
                        { x: -91, y: -31 },
                        { x: -85, y: -67 },
                        { x: -80, y: -85 },
                        { x: -37, y: -48 },
                        { x: -20, y: -35 },
                        { x: -45, y: -35 },
                        { x: -75, y: -50 },
                        { x: -50, y: -30 },
                        { x: -30, y: -30 },
                        { x: -50, y: -90 },
                        { x: -20, y: -95 },
                        { x: 10, y: -73 },
                        { x: 15, y: -93 },
                        { x: 30, y: -85 },
                        { x: 40, y: -63 },
                        { x: -95, y: 10 },
                        { x: -91, y: 60 },
                        { x: -85, y: 83 },
                        { x: -80, y: 10 },
                        { x: -65, y: 10 },
                        { x: -45, y: 10 },
                        { x: -35, y: 30 },
                        { x: -55, y: 50 },
                        { x: 10, y: 20 },
                    ],
                },
                {
                    name: "Second Semester Stayer",
                    color: "rgba(64, 205, 23,  .8)",
                    data: [
                        { x: -30, y: -10 },
                        { x: -15, y: -12 },
                        { x: -17, y: -20 },
                        { x: -30, y: -70 },
                        { x: -10, y: -80 },
                        { x: 10, y: -10 },
                        { x: 13, y: -30 },
                        { x: 20, y: -15 },
                        { x: 22, y: -23 },
                        { x: 18, y: -34 },
                        { x: 30, y: -50 },
                        { x: 45, y: -15 },
                        { x: 55, y: -9 },
                        { x: 86, y: -7 },
                        { x: 85, y: -50 },
                        { x: 80, y: -90 },
                        { x: 77, y: -55 },
                        { x: -50, y: 95 },
                        { x: -40, y: 85 },
                        { x: -30, y: 82 },
                        { x: -15, y: 77 },
                        { x: -20, y: 70 },
                        { x: 20, y: 25 },
                        { x: 15, y: 30 },
                        { x: 17, y: 34 },
                        { x: 25, y: 77 },
                        { x: 30, y: 92 },
                        { x: 43, y: 67 },
                        { x: 45, y: 55 },
                        { x: 40, y: 20 },
                        { x: 60, y: 16 },
                        { x: 75, y: 18 },
                        { x: 80, y: 40 },
                        { x: 76, y: 49 },
                        { x: 65, y: 85 },
                        { x: 53, y: 67 },
                        { x: 58, y: 73 },
                    ],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
DroppingoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-droppingout",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./droppingout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/droppingout/droppingout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./droppingout.component.css */ "./src/app/charts/droppingout/droppingout.component.css")).default]
    })
], DroppingoutComponent);



/***/ }),

/***/ "./src/app/charts/engagement-performance/engagement-performance.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/charts/engagement-performance/engagement-performance.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9lbmdhZ2VtZW50LXBlcmZvcm1hbmNlL2VuZ2FnZW1lbnQtcGVyZm9ybWFuY2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/engagement-performance/engagement-performance.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/charts/engagement-performance/engagement-performance.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EngagementPerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngagementPerformanceComponent", function() { return EngagementPerformanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let EngagementPerformanceComponent = class EngagementPerformanceComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Engagement and Performance",
            },
            subtitle: {
                text: "Engagement and Performance [69], Engagement [86]",
            },
            xAxis: {
                categories: ["WK 1", "WK 2", "WK 3", "WK 4", "WK 5"],
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Student Participation",
                },
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
                shared: true,
            },
            plotOptions: {
                column: {
                    stacking: "percent",
                    dataLabels: {
                        enabled: true,
                        format: "{y} %",
                    },
                },
            },
            series: [
                {
                    name: '"Auditors" (Watched video but did not participate)',
                    data: [79, 69, 64, 55, 57],
                },
                {
                    name: '"Active" (Participated in an assessment this week)',
                    data: [11, 13, 10, 17, 12],
                },
                {
                    name: '"Qualified" (Grades in 60th percentile in first two weeks)',
                    data: [10, 18, 26, 28, 31],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
EngagementPerformanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-engagement-performance",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./engagement-performance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/engagement-performance/engagement-performance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./engagement-performance.component.css */ "./src/app/charts/engagement-performance/engagement-performance.component.css")).default]
    })
], EngagementPerformanceComponent);



/***/ }),

/***/ "./src/app/charts/feedback/feedback.component.css":
/*!********************************************************!*\
  !*** ./src/app/charts/feedback/feedback.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/feedback/feedback.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/charts/feedback/feedback.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more.src */ "./node_modules/highcharts/highcharts-more.src.js");
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/modules/solid-gauge */ "./node_modules/highcharts/modules/solid-gauge.js");
/* harmony import */ var highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5__);






highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
highcharts_modules_solid_gauge__WEBPACK_IMPORTED_MODULE_5___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let FeedbackComponent = class FeedbackComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: "solidgauge",
            },
            title: {
                text: "You",
            },
            subtitle: {
                text: "Feedback [41], Feedback [91]",
            },
            pane: {
                center: ["50%", "85%"],
                size: "140%",
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || "#EEE",
                    innerRadius: "60%",
                    outerRadius: "100%",
                    shape: "arc",
                },
            },
            exporting: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            // the value axis
            yAxis: {
                stops: [
                    [0.1, "#DF5353"],
                    [0.5, "#DDDF0D"],
                    [0.9, "#55BF3B"],
                ],
                lineWidth: 0,
                tickWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70,
                },
                labels: {
                    y: 16,
                },
                min: 0,
                max: 100,
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true,
                    },
                },
            },
            credits: {
                enabled: false,
            },
            series: [
                {
                    name: "You",
                    data: [70],
                    dataLabels: {
                        format: '<div style="text-align:center">' +
                            '<span style="font-size:25px">{y}%</span><br/></div>',
                    },
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
        this.chartOptions2 = {
            chart: {
                type: "solidgauge",
            },
            title: {
                text: "Class",
            },
            pane: {
                center: ["50%", "85%"],
                size: "140%",
                startAngle: -90,
                endAngle: 90,
                background: {
                    backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || "#EEE",
                    innerRadius: "60%",
                    outerRadius: "100%",
                    shape: "arc",
                },
            },
            exporting: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            // the value axis
            yAxis: {
                stops: [
                    [0.1, "#DF5353"],
                    [0.5, "#DDDF0D"],
                    [0.9, "#55BF3B"],
                ],
                lineWidth: 0,
                tickWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: {
                    y: -70,
                },
                labels: {
                    y: 16,
                },
                min: 0,
                max: 100,
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true,
                    },
                },
            },
            credits: {
                enabled: false,
            },
            series: [
                {
                    name: "Class",
                    data: [83],
                    dataLabels: {
                        format: '<div style="text-align:center">' +
                            '<span style="font-size:25px">{y}%</span><br/></div>',
                    },
                },
            ],
        };
    }
    updateChart(event) {
        var selVal = event.target.value;
        if (selVal == "A" || selVal == "") {
            this.chartOptions["series"] = { name: "You", data: [70] };
            this.chartOptions2["series"] = { name: "Class", data: [83] };
        }
        else if (selVal == "B") {
            this.chartOptions["series"] = { name: "You", data: [11] };
            this.chartOptions2["series"] = { name: "Class", data: [50] };
        }
        else if (selVal == "C") {
            this.chartOptions["series"] = { name: "You", data: [92] };
            this.chartOptions2["series"] = { name: "Class", data: [76] };
        }
        else if (selVal == "D") {
            this.chartOptions["series"] = { name: "You", data: [67] };
            this.chartOptions2["series"] = { name: "Class", data: [63] };
        }
        //Make a copy of the new object so the changes are visible
        this.chartOptions = Object.assign({}, this.chartOptions);
        this.chartOptions2 = Object.assign({}, this.chartOptions2);
    }
};
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-feedback",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/feedback/feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.css */ "./src/app/charts/feedback/feedback.component.css")).default]
    })
], FeedbackComponent);



/***/ }),

/***/ "./src/app/charts/final-grade-prediction/final-grade-prediction.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/charts/final-grade-prediction/final-grade-prediction.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9maW5hbC1ncmFkZS1wcmVkaWN0aW9uL2ZpbmFsLWdyYWRlLXByZWRpY3Rpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/final-grade-prediction/final-grade-prediction.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/charts/final-grade-prediction/final-grade-prediction.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FinalGradePredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalGradePredictionComponent", function() { return FinalGradePredictionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let FinalGradePredictionComponent = class FinalGradePredictionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Final grade prediction",
            },
            subtitle: {
                text: "Final Grade Prediction [28], Grade prediction (by performance / Course difficulty level) [83], Performance [83], Course difficulty level [83], Predict exam grades [78], Predict Student Grades [115], Predict exam success [60], Performance Prediction [37] Success Prediction [37], Success Prediction [105], Predict academic achievement [81], Predict Final Grade [119]",
            },
            xAxis: {
                categories: [
                    "WK 1",
                    "WK 2",
                    "WK 3",
                    "WK 4",
                    "WK 5",
                    "WK 6",
                    "WK 7",
                    "WK 8",
                ],
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Final grade",
                },
                max: 100,
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Number of New blog posts in group blog",
                    data: [40, 90, 70, 18, 40],
                },
                {
                    name: "Number of Topics that each user has uploaded on group discussion",
                    data: [30, 60, 30, 80, 100],
                },
                {
                    name: "Number of Comments on blog posts in group blog",
                    data: [30, 20, 10, 20, 10],
                },
                {
                    type: "scatter",
                    data: [25, 40, 25, 30, 40, 50],
                    dashStyle: "shortdot",
                    name: "Final grade prediction",
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
FinalGradePredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-final-grade-prediction",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./final-grade-prediction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/final-grade-prediction/final-grade-prediction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./final-grade-prediction.component.css */ "./src/app/charts/final-grade-prediction/final-grade-prediction.component.css")).default]
    })
], FinalGradePredictionComponent);



/***/ }),

/***/ "./src/app/charts/gamification/gamification.component.css":
/*!****************************************************************!*\
  !*** ./src/app/charts/gamification/gamification.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9nYW1pZmljYXRpb24vZ2FtaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/gamification/gamification.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/charts/gamification/gamification.component.ts ***!
  \***************************************************************/
/*! exports provided: GamificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamificationComponent", function() { return GamificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let GamificationComponent = class GamificationComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            title: {
                text: "Gamification",
            },
            subtitle: {
                text: "Gamification [45], Badges earned [43], Game Based Learning [104] Learning Strategy (Game) [104] Predict Performance (Game) [104]",
            },
            xAxis: {
                categories: [
                    "Quiz 1",
                    "Quiz 2",
                    "Quiz 3",
                    "Quiz 4",
                    "Quiz 5",
                    "Quiz 6",
                    "Quiz 7",
                ],
            },
            yAxis: {
                title: {
                    text: "Points",
                },
            },
            series: [
                {
                    type: "area",
                    name: "Achieved points",
                    data: [93, 72, 100, 64, 78, 90],
                },
                {
                    name: "Maximum possible points",
                    type: "spline",
                    data: [100, 100, 100, 100, 100, 100],
                    marker: {
                        enabled: false,
                    },
                    dashStyle: "shortdot",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
GamificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-gamification",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gamification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/gamification/gamification.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gamification.component.css */ "./src/app/charts/gamification/gamification.component.css")).default]
    })
], GamificationComponent);



/***/ }),

/***/ "./src/app/charts/group-participation/group-participation.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/charts/group-participation/group-participation.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9ncm91cC1wYXJ0aWNpcGF0aW9uL2dyb3VwLXBhcnRpY2lwYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/group-participation/group-participation.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/charts/group-participation/group-participation.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GroupParticipationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupParticipationComponent", function() { return GroupParticipationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/sankey */ "./node_modules/highcharts/modules/sankey.js");
/* harmony import */ var highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/dependency-wheel */ "./node_modules/highcharts/modules/dependency-wheel.js");
/* harmony import */ var highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4__);





highcharts_modules_sankey__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
highcharts_modules_dependency_wheel__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let GroupParticipationComponent = class GroupParticipationComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.chartOptions = {
            title: {
                text: "Group Participation",
            },
            subtitle: {
                text: "Group Participation [30]",
            },
            tooltip: {
                pointFormatter: function () {
                    return `<span>${this.weight} content read, ${this.weight * 2} comments made</span> `;
                },
            },
            series: [
                {
                    keys: ["from", "to", "weight"],
                    data: [
                        ["Group 1", "Group 2", 5],
                        ["Group 1", "Group 3", 1],
                        ["Group 1", "Group 6", 1],
                        ["Group 1", "Group 4", 1],
                        ["Group 5", "Group 2", 1],
                        ["Group 5", "Group 3", 3],
                        ["Group 5", "Group 4", 1],
                        ["Group 3", "Group 2", 1],
                        ["Group 4", "Group 3", 1],
                        ["Group 4", "Group 8", 5],
                        ["Group 6", "Group 4", 2],
                        ["Group 2", "Group 4", 1],
                        ["Group 2", "Group 3", 1],
                    ],
                    type: "dependencywheel",
                    name: "Interaction between Groups",
                    dataLabels: {
                        color: "#333",
                        textPath: {
                            enabled: true,
                            attributes: {
                                dy: 5,
                            },
                        },
                        distance: 10,
                    },
                    size: "95%",
                },
            ],
        };
    }
};
GroupParticipationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-group-participation",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-participation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/group-participation/group-participation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-participation.component.css */ "./src/app/charts/group-participation/group-participation.component.css")).default]
    })
], GroupParticipationComponent);



/***/ }),

/***/ "./src/app/charts/initiative/initiative.component.css":
/*!************************************************************!*\
  !*** ./src/app/charts/initiative/initiative.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9pbml0aWF0aXZlL2luaXRpYXRpdmUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/initiative/initiative.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/charts/initiative/initiative.component.ts ***!
  \***********************************************************/
/*! exports provided: InitiativeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiativeComponent", function() { return InitiativeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let InitiativeComponent = class InitiativeComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
                polar: true,
            },
            title: {
                text: "Initiative",
            },
            subtitle: {
                text: "Productivity = (Initiative + Responsiveness) / Presence [124] Collaboration [124]",
            },
            xAxis: {
                categories: [
                    "Initiative",
                    "Responsiveness",
                    "Presence",
                    "Connectedness",
                ],
                tickmarkPlacement: "on",
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: "polygon",
                lineWidth: 0,
                min: 0,
            },
            exporting: {
                enabled: true,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            series: [
                {
                    data: [30, 52, 44, 40],
                    pointPlacement: "on",
                    name: "# posts (discussion, blog, files, pages)",
                },
                {
                    data: [10, 22, 24, 30],
                    pointPlacement: "on",
                    name: "# comments (discussion, blog, files, pages)",
                },
                {
                    data: [25, 32, 41, 20],
                    pointPlacement: "on",
                    name: "# views",
                },
                {
                    data: [33, 24, 42, 11],
                    pointPlacement: "on",
                    name: "# contacts made",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
InitiativeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-initiative",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./initiative.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/initiative/initiative.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./initiative.component.css */ "./src/app/charts/initiative/initiative.component.css")).default]
    })
], InitiativeComponent);



/***/ }),

/***/ "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWFybmluZy1iZWhhdmlvci1wYXR0ZXJucy9sZWFybmluZy1iZWhhdmlvci1wYXR0ZXJucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LearningBehaviorPatternsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningBehaviorPatternsComponent", function() { return LearningBehaviorPatternsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let LearningBehaviorPatternsComponent = class LearningBehaviorPatternsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "area",
            },
            title: {
                text: "Learning behavior patterns",
            },
            subtitle: {
                text: "Learning Behavior Patterns [111], Learning Patterns [132], Learning Strategies [118]",
            },
            xAxis: {
                tickmarkPlacement: "on",
                labels: {
                    enabled: false,
                },
                title: {
                    text: "Learning Sequence",
                },
            },
            yAxis: {
                labels: {
                    format: "{value}%",
                },
                title: {
                    enabled: false,
                },
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
                split: true,
            },
            plotOptions: {
                area: {
                    stacking: "percent",
                    lineColor: "#ffffff",
                    lineWidth: 1,
                    marker: {
                        lineWidth: 1,
                        lineColor: "#ffffff",
                    },
                },
            },
            series: [
                {
                    name: "Video views",
                    data: [50, 63, 89, 94, 14, 36, 52],
                },
                {
                    name: "Incorrectly solved assessment item",
                    data: [10, 10, 11, 13, 21, 76, 17],
                },
                {
                    name: "Correctly solved MCQ",
                    data: [16, 20, 27, 48, 54, 79, 62],
                },
                {
                    name: "Incorrectly solved MCQ",
                    data: [18, 31, 54, 15, 33, 81, 11],
                },
                {
                    name: "Reading material page views",
                    data: [63, 32, 22, 16, 13, 30, 46],
                },
                {
                    name: "Correctly solved assessment item",
                    data: [22, 18, 12, 16, 13, 30, 46],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
LearningBehaviorPatternsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-learning-behavior-patterns",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-behavior-patterns.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-behavior-patterns.component.css */ "./src/app/charts/learning-behavior-patterns/learning-behavior-patterns.component.css")).default]
    })
], LearningBehaviorPatternsComponent);



/***/ }),

/***/ "./src/app/charts/learning-behaviour/learning-behaviour.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/charts/learning-behaviour/learning-behaviour.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWFybmluZy1iZWhhdmlvdXIvbGVhcm5pbmctYmVoYXZpb3VyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/learning-behaviour/learning-behaviour.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/charts/learning-behaviour/learning-behaviour.component.ts ***!
  \***************************************************************************/
/*! exports provided: LearningBehaviourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningBehaviourComponent", function() { return LearningBehaviourComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let LearningBehaviourComponent = class LearningBehaviourComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: "packedbubble",
                height: "50%",
            },
            title: {
                text: "Learning behavior",
            },
            subtitle: {
                text: "Learning behavior [76]",
            },
            tooltip: {
                useHTML: true,
                pointFormat: "<b>{point.name}</b>",
            },
            plotOptions: {
                packedbubble: {
                    minSize: "20%",
                    maxSize: "100%",
                    zMin: 0,
                    zMax: 1000,
                    layoutAlgorithm: {
                        gravitationalConstant: 0.05,
                        splitSeries: true,
                        seriesInteraction: false,
                        dragBetweenSeries: true,
                        parentNodeLimit: true,
                    },
                    dataLabels: {
                        enabled: true,
                        format: "{point.name}",
                        filter: {
                            property: "y",
                            operator: ">",
                            value: 15,
                        },
                        style: {
                            color: "black",
                            textOutline: "none",
                            fontWeight: "normal",
                        },
                    },
                },
            },
            series: [
                {
                    name: "Completing",
                    data: [
                        {
                            name: "User 1",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 2",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 3",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 4",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 5",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 6",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 7",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 8",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 9",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 10",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 11",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 12",
                            value: Math.floor(Math.random() * 30),
                        },
                    ],
                },
                {
                    name: "Auditing",
                    data: [
                        {
                            name: "User 13",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 14",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 15",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 16",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 17",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 18",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 19",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 20",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 21",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 22",
                            value: Math.floor(Math.random() * 30),
                        },
                    ],
                },
                {
                    name: "Disengaging",
                    data: [
                        {
                            name: "User 23",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 24",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 25",
                            value: Math.floor(Math.random() * 30),
                        },
                    ],
                },
                {
                    name: "Sampling",
                    data: [
                        {
                            name: "User 26",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 27",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 28",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 29",
                            value: Math.floor(Math.random() * 30),
                        },
                        {
                            name: "User 30",
                            value: Math.floor(Math.random() * 30),
                        },
                    ],
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
LearningBehaviourComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-learning-behaviour",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-behaviour.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-behaviour/learning-behaviour.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-behaviour.component.css */ "./src/app/charts/learning-behaviour/learning-behaviour.component.css")).default]
    })
], LearningBehaviourComponent);



/***/ }),

/***/ "./src/app/charts/learning-progress/learning-progress.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/learning-progress/learning-progress.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9sZWFybmluZy1wcm9ncmVzcy9sZWFybmluZy1wcm9ncmVzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/learning-progress/learning-progress.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/learning-progress/learning-progress.component.ts ***!
  \*************************************************************************/
/*! exports provided: LearningProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearningProgressComponent", function() { return LearningProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let LearningProgressComponent = class LearningProgressComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
                zoomType: "xy",
                panning: true,
                panKey: "shift",
            },
            title: {
                text: "Learning Progress",
            },
            xAxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Amount",
                },
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "# completed videos",
                    data: [12, 14, 9, 14, 18, 22, 14, 18, 13, 8, 9, 12],
                },
                {
                    name: "# attempted exercises",
                    data: [5, 9, 6, 4, 8, 10, 13, 8, 14, 9, 8, 5],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
LearningProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-learning-progress",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./learning-progress.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/learning-progress/learning-progress.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./learning-progress.component.css */ "./src/app/charts/learning-progress/learning-progress.component.css")).default]
    })
], LearningProgressComponent);



/***/ }),

/***/ "./src/app/charts/online-change-detection/online-change-detection.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/online-change-detection/online-change-detection.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9vbmxpbmUtY2hhbmdlLWRldGVjdGlvbi9vbmxpbmUtY2hhbmdlLWRldGVjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/online-change-detection/online-change-detection.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/online-change-detection/online-change-detection.component.ts ***!
  \*************************************************************************************/
/*! exports provided: OnlineChangeDetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineChangeDetectionComponent", function() { return OnlineChangeDetectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let OnlineChangeDetectionComponent = class OnlineChangeDetectionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "spline",
                animation: highcharts__WEBPACK_IMPORTED_MODULE_2__["SVGElement"],
                marginRight: 10,
                events: {
                    load: function () {
                        // set up the updating of the chart every 3 seconds
                        var series = this.series[0];
                        setInterval(function () {
                            var x = new Date().getTime(), // current time
                            y = Math.random();
                            series.addPoint([x, y], true, true);
                        }, 3000);
                    },
                },
            },
            time: {
                useUTC: false,
            },
            title: {
                text: "Online Change Detection",
            },
            subtitle: {
                text: "Online change detection [137]",
            },
            accessibility: {
                announceNewData: {
                    enabled: true,
                    minAnnounceInterval: 15000,
                    announcementFormatter: function (allSeries, newSeries, newPoint) {
                        if (newPoint) {
                            return "New point added. Value: " + newPoint.y;
                        }
                        return false;
                    },
                },
            },
            xAxis: {
                type: "datetime",
                tickPixelInterval: 150,
            },
            yAxis: {
                title: {
                    text: "Click Behaviour",
                },
                plotLines: [
                    {
                        value: 0,
                        width: 1,
                        color: "#808080",
                    },
                ],
            },
            tooltip: {
                headerFormat: "<b>{series.name}</b><br/>",
                pointFormat: "{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}",
            },
            legend: {
                enabled: false,
            },
            exporting: {
                enabled: false,
            },
            series: [
                {
                    name: "Click events",
                    data: (function () {
                        // generate an array of random data
                        var data = [], time = new Date().getTime(), i;
                        for (i = -19; i <= 0; i += 1) {
                            data.push({
                                x: time + i * 3000,
                                y: Math.random() * 10,
                            });
                        }
                        return data;
                    })(),
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
OnlineChangeDetectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-online-change-detection",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./online-change-detection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/online-change-detection/online-change-detection.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./online-change-detection.component.css */ "./src/app/charts/online-change-detection/online-change-detection.component.css")).default]
    })
], OnlineChangeDetectionComponent);



/***/ }),

/***/ "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wYXNzaW5nLXJhdGUtcHJlZGljdGlvbi9wYXNzaW5nLXJhdGUtcHJlZGljdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PassingRatePredictionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassingRatePredictionComponent", function() { return PassingRatePredictionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



let PassingRatePredictionComponent = class PassingRatePredictionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.selectedOption = "Clicks";
        this.series_a = [
            {
                name: "series1",
                data: [22, 20, 18, 3, 4],
            },
            {
                name: "series2",
                data: [10, 30, 10, 13, 14],
            },
            {
                name: "series3",
                data: [12, 10, 10, 9, 2],
            },
        ];
        this.setData();
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: "column",
            },
            title: { text: "Final Grade Prediction" },
            subtitle: {
                text: "Passing rate Prediction [26] Final Grade Prediction [26] Performance prediction [26] Awareness [26], Success Prediction [56, 96], Performance Prediction [100, 117], predictive analytics (proposal) [143], Prediction (A pilot study) [144]",
            },
            tooltip: {
                shared: true,
            },
            xAxis: [
                {
                    title: {
                        text: "Average grade so far",
                    },
                    categories: [
                        "5",
                        "15",
                        "25",
                        "35",
                        "45",
                        "55",
                        "65",
                        "75",
                        "85",
                        "95",
                    ],
                    height: 100,
                    max: 9,
                    lineWidth: 2,
                },
                {
                    title: {
                        text: "final grade",
                    },
                    categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
                    top: 300,
                    max: 9,
                    height: 100,
                    offset: 0,
                    lineWidth: 2,
                },
            ],
            yAxis: [
                {
                    title: {
                        text: "# students",
                    },
                    labels: {
                        format: "{value}%",
                    },
                    height: 100,
                    max: 25,
                    lineWidth: 2,
                },
                {
                    title: {
                        text: "probability",
                    },
                    labels: {
                        format: "{value}%",
                    },
                    top: 300,
                    max: 100,
                    height: 100,
                    offset: 0,
                    lineWidth: 2,
                },
            ],
            series: [
                {
                    data: [10, 0, 5, 0, 5, 5, 10, { y: 25, color: "red" }, 20, 15],
                    yAxis: 0,
                    xAxis: 0,
                    name: "Avg. grade assessments",
                },
                {
                    type: "spline",
                    data: [0, 0, 0, 0, 0, 0, 0, 50, 100, 70],
                    yAxis: 1,
                    xAxis: 1,
                    name: "Grade prediction",
                },
            ],
        };
    }
};
PassingRatePredictionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-passing-rate-prediction",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./passing-rate-prediction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./passing-rate-prediction.component.css */ "./src/app/charts/passing-rate-prediction/passing-rate-prediction.component.css")).default]
    })
], PassingRatePredictionComponent);



/***/ }),

/***/ "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcmVkaWN0LWNvdXJzZWNvbXBsZXRpb24vcHJlZGljdC1jb3Vyc2Vjb21wbGV0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PredictCoursecompletionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictCoursecompletionComponent", function() { return PredictCoursecompletionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let PredictCoursecompletionComponent = class PredictCoursecompletionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "area",
            },
            title: {
                text: "Predict course succesful completion",
            },
            subtitle: {
                text: "Predict course successful completion [70]",
            },
            xAxis: {
                allowDecimals: false,
                title: {
                    text: "Activities and Units",
                },
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    },
                },
                accessibility: {
                    rangeDescription: "Range: 0 to 43.",
                },
            },
            yAxis: {
                title: {
                    text: "Passing Rate",
                },
            },
            tooltip: { enabled: false },
            plotOptions: {
                area: {
                    pointStart: 0,
                    marker: {
                        enabled: false,
                        symbol: "circle",
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true,
                            },
                        },
                    },
                },
            },
            series: [
                {
                    name: "Forum activities",
                    data: [null, 1, 2, 7, 13, 18, 45, 48, 34, 43],
                },
                {
                    name: "Passing Rate",
                    data: [3, 4, 10, 19, 22, 33, 65, 63, 50, 50],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
PredictCoursecompletionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-predict-coursecompletion",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./predict-coursecompletion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./predict-coursecompletion.component.css */ "./src/app/charts/predict-coursecompletion/predict-coursecompletion.component.css")).default]
    })
], PredictCoursecompletionComponent);



/***/ }),

/***/ "./src/app/charts/predict-exam-success/predict-exam-success.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/charts/predict-exam-success/predict-exam-success.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcmVkaWN0LWV4YW0tc3VjY2Vzcy9wcmVkaWN0LWV4YW0tc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/predict-exam-success/predict-exam-success.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/charts/predict-exam-success/predict-exam-success.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PredictExamSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictExamSuccessComponent", function() { return PredictExamSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



let PredictExamSuccessComponent = class PredictExamSuccessComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Predict exam success",
            },
            xAxis: {
                categories: [
                    "# days of access",
                    "# of logins",
                    "# hours",
                    "# posts viewed",
                    "# posts created",
                ],
                crosshair: true,
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Frequency",
                },
                plotLines: [
                    {
                        value: 3,
                        width: 1,
                        color: "red",
                        zIndex: 10,
                    },
                    {
                        value: 6,
                        width: 1,
                        color: "green",
                        zIndex: 10,
                    },
                ],
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
                footerFormat: "</table>",
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0,
                },
            },
            series: [
                {
                    name: "Student 1",
                    data: [4, 9, 7, 18, 4],
                },
                {
                    name: "Student 2",
                    data: [3, 6, 3, 8, 1],
                },
                {
                    name: "Student 3",
                    data: [3, 2, 1, 2, 1],
                },
            ],
        };
    }
};
PredictExamSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-predict-exam-success",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./predict-exam-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/predict-exam-success/predict-exam-success.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./predict-exam-success.component.css */ "./src/app/charts/predict-exam-success/predict-exam-success.component.css")).default]
    })
], PredictExamSuccessComponent);



/***/ }),

/***/ "./src/app/charts/presentation-skills/presentation-skills.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/charts/presentation-skills/presentation-skills.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcmVzZW50YXRpb24tc2tpbGxzL3ByZXNlbnRhdGlvbi1za2lsbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/presentation-skills/presentation-skills.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/charts/presentation-skills/presentation-skills.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PresentationSkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationSkillsComponent", function() { return PresentationSkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



const More = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
More(highcharts__WEBPACK_IMPORTED_MODULE_2__);
const Exporting = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
Exporting(highcharts__WEBPACK_IMPORTED_MODULE_2__);
const ExportData = __webpack_require__(/*! highcharts/modules/export-data */ "./node_modules/highcharts/modules/export-data.js");
ExportData(highcharts__WEBPACK_IMPORTED_MODULE_2__);
const Accessibility = __webpack_require__(/*! highcharts/modules/accessibility */ "./node_modules/highcharts/modules/accessibility.js");
Accessibility(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let PresentationSkillsComponent = class PresentationSkillsComponent {
    constructor() {
        this.TimeChartData = {
            xData: [
                0.001567, 0.011765, 0.022194, 0.032316, 0.04266, 0.063668, 0.074477,
                0.085323, 0.09576, 0.106078, 0.116096, 0.137524, 0.148342, 0.159059,
                0.170005, 0.180716, 0.191407, 0.212538, 0.222819, 0.233929, 0.244239,
                0.255301, 0.266081, 0.287527, 0.298115, 0.309392, 0.320217, 0.330928,
                0.341401, 0.361717, 0.372173, 0.382337, 0.39294, 0.403072, 0.413454,
                0.434618, 0.444845, 0.455745, 0.465785, 0.475987, 0.486064, 0.507086,
                0.517517, 0.527961, 0.538242, 0.548414, 0.558444, 0.578941, 0.589212,
                0.599472, 0.60977, 0.620178, 0.630189, 0.650782, 0.661001, 0.671137,
                0.681175, 0.691235, 0.702012, 0.722644, 0.733166, 0.743824, 0.754059,
                0.764109, 0.774519, 0.795597, 0.805721, 0.81592, 0.826139, 0.836369,
                0.846826, 0.86771, 0.87803, 0.888342, 0.898695, 0.908723, 0.91922,
                0.939802, 0.950378, 0.960776, 0.971377, 0.981843, 0.992312, 1.013125,
                1.023302, 1.033488, 1.043822, 1.054203, 1.065019, 1.086078, 1.09635,
                1.106421, 1.117028, 1.127541, 1.138599, 1.159588, 1.170167, 1.180741,
                1.190794, 1.201112, 1.211355, 1.233278, 1.243477, 1.254957, 1.265227,
                1.276378, 1.285656, 1.297311, 1.308367, 1.318715, 1.329589, 1.340834,
                1.352388, 1.375063, 1.385369, 1.396291, 1.408156, 1.418989, 1.429535,
                1.451141, 1.462205, 1.473011, 1.483844, 1.494311, 1.514761, 1.525336,
                1.535858, 1.546476, 1.557325, 1.567512, 1.590091, 1.600925, 1.612303,
                1.622558, 1.633071, 1.643555, 1.66484, 1.675722, 1.685986, 1.696733,
                1.706895, 1.719102, 1.741295, 1.752144, 1.762688, 1.773713, 1.784052,
                1.795705, 1.817305, 1.827465, 1.838408, 1.849369, 1.860023, 1.871438,
                1.89257, 1.90323, 1.914398, 1.924634, 1.934642, 1.945212, 1.966275,
                1.976294, 1.986422, 1.996652, 2.008005, 2.018309, 2.041139, 2.051221,
                2.0613, 2.072507, 2.08342, 2.094075, 2.114574, 2.125286, 2.135765,
                2.146845, 2.157966, 2.169391, 2.190921, 2.200899, 2.212709, 2.222671,
                2.232908, 2.244001, 2.264898, 2.275703, 2.286885, 2.298115, 2.310186,
                2.32059, 2.344695, 2.354843, 2.366387, 2.379001, 2.390328, 2.402215,
                2.423134, 2.433156, 2.444912, 2.457061, 2.468253, 2.478978, 2.499832,
                2.513223, 2.52561, 2.538429, 2.548659, 2.560809, 2.581308, 2.592816,
                2.603963, 2.615992, 2.626242, 2.638223, 2.660346, 2.671583, 2.681938,
                2.69265, 2.70588, 2.716296, 2.740081, 2.75085, 2.761319, 2.772027,
                2.782659, 2.793531, 2.816194, 2.828031, 2.839243, 2.851443, 2.863884,
                2.874359, 2.895246, 2.906506, 2.91761, 2.92786, 2.938937, 2.950218,
                2.973357, 2.98366, 2.994639, 3.005213, 3.01666, 3.02761, 3.050025,
                3.061713, 3.071828, 3.082787, 3.093422, 3.105289, 3.127231, 3.138982,
                3.149755, 3.160217, 3.171299, 3.191571, 3.202226, 3.213225, 3.223987,
                3.234092, 3.244644, 3.265939, 3.276411, 3.286489, 3.297156, 3.307909,
                3.319018, 3.34064, 3.351107, 3.361683, 3.373136, 3.384768, 3.395457,
                3.417722, 3.429096, 3.439122, 3.449679, 3.459868, 3.469997, 3.492679,
                3.503647, 3.514941, 3.525858, 3.538746, 3.550422, 3.572255, 3.58452,
                3.595367, 3.605736, 3.617401, 3.628324, 3.652523, 3.663679, 3.67378,
                3.684605, 3.695595, 3.705843, 3.728706, 3.739169, 3.750205, 3.761258,
                3.771771, 3.781911, 3.804724, 3.81631, 3.826313, 3.837847, 3.85049,
                3.860999, 3.88262, 3.892937, 3.903053, 3.913656, 3.924698, 3.935126,
                3.956362, 3.966543, 3.976899, 3.98752, 3.997644, 4.008721, 4.029852,
                4.040633, 4.051006, 4.06126, 4.071761, 4.083526, 4.10749, 4.117855,
                4.128661, 4.13934, 4.151117, 4.1624, 4.184736, 4.194826, 4.205098,
                4.215261, 4.225325, 4.236367, 4.262012, 4.273794, 4.285743, 4.297226,
                4.308086, 4.318245, 4.340246, 4.351486, 4.363196, 4.374465, 4.387109,
                4.398635, 4.421101, 4.432135, 4.444666, 4.456226, 4.467413, 4.477804,
                4.498505, 4.510413, 4.522595, 4.534044, 4.545944, 4.558048, 4.580379,
                4.59312, 4.605616, 4.618065, 4.631266, 4.644086, 4.667943, 4.67948,
                4.691266, 4.703019, 4.715923, 4.725932, 4.752312, 4.765224, 4.777128,
                4.787361, 4.800435, 4.823353, 4.836044, 4.848602, 4.860302, 4.871112,
                4.882779, 4.904695, 4.914823, 4.927074, 4.938111, 4.949586, 4.960761,
                4.982911, 4.9942, 5.004246, 5.016296, 5.027215, 5.038043, 5.058885,
                5.070303, 5.080649, 5.093865, 5.104424, 5.114903, 5.134965, 5.146346,
                5.15634, 5.168547, 5.179066, 5.191167, 5.214242, 5.224914, 5.237573,
                5.249537, 5.261586, 5.272517, 5.296154, 5.306348, 5.316773, 5.327153,
                5.339961, 5.350638, 5.376502, 5.389277, 5.402142, 5.412197, 5.42399,
                5.434873, 5.458466, 5.470907, 5.482679, 5.493339, 5.50574, 5.516349,
                5.538897, 5.549552, 5.56083, 5.571879, 5.583764, 5.59509, 5.619028,
                5.629925, 5.640716, 5.650957, 5.661787, 5.671957, 5.693974, 5.704919,
                5.717491, 5.731152, 5.744728, 5.755687, 5.778668, 5.791951, 5.80409,
                5.815697, 5.828482, 5.840501, 5.864145, 5.875704, 5.887893, 5.900147,
                5.912517, 5.924894, 5.948897, 5.959155, 5.970262, 5.981632, 5.992996,
                6.00356, 6.027256, 6.038776, 6.050959, 6.061351, 6.071864, 6.082436,
                6.104054, 6.115602, 6.127623, 6.139058, 6.150639, 6.161323, 6.183013,
                6.194359, 6.206269, 6.218033, 6.2281, 6.240494, 6.262584, 6.275326,
                6.287166, 6.298953, 6.310644, 6.321583, 6.345676, 6.356738, 6.366782,
                6.377931, 6.388519, 6.397159,
            ],
            datasets: [
                {
                    name: "Voice level",
                    data: [
                        13.833, 12.524, 11.441, 10.651, 9.961, 4.566, 4.617, 4.728, 4.823,
                        4.844, 4.856, 4.87, 4.702, 4.679, 4.674, 4.641, 4.47, 4.688, 4.798,
                        4.756, 4.903, 4.919, 5.017, 4.938, 4.879, 4.831, 4.623, 3.887, 3.502,
                        3.083, 3.123, 3.073, 2.922, 2.827, 2.805, 2.605, 2.743, 2.698, 2.513,
                        2.41, 2.17, 2.288, 2.308, 2.222, 2.183, 2.224, 2.163, 2.223, 2.142,
                        2.257, 2.015, 1.971, 1.894, 1.848, 1.835, 1.85, 2.036, 1.827, 1.904,
                        1.803, 1.852, 1.866, 1.906, 1.956, 1.954, 1.734, 1.904, 1.899, 2.001,
                        1.966, 1.844, 1.879, 1.856, 1.837, 1.827, 1.907, 1.729, 1.74, 1.68,
                        1.797, 1.811, 1.941, 2.026, 2.217, 2.281, 2.517, 2.673, 2.702, 2.893,
                        3.016, 3.073, 3.126, 3.283, 3.361, 3.33, 3.465, 3.916, 4.49, 5.074,
                        5.717, 6.523, 7.012, 6.726, 7.095, 7.471, 7.824, 7.802, 4.441, 4.625,
                        4.696, 4.861, 4.768, 4.889, 5.281, 5.36, 5.419, 5.137, 5.278, 5.151,
                        4.934, 4.952, 4.742, 4.666, 4.525, 4.126, 4.228, 4.334, 4.383, 5.287,
                        5.088, 5.28, 5.274, 5.251, 5.413, 5.365, 5.372, 5.512, 4.839, 5.099,
                        5.196, 5.219, 5.094, 5.582, 5.91, 5.952, 6.012, 5.854, 5.789, 5.465,
                        5.525, 5.659, 5.67, 5.173, 5.033, 5.318, 5.289, 5.226, 5.15, 5.106,
                        4.989, 5.103, 5.288, 5.428, 5.363, 5.026, 5, 4.941, 4.872, 4.751,
                        4.408, 4.425, 4.301, 4.134, 4.171, 4.272, 4.34, 4.543, 4.826, 5.381,
                        5.374, 5.433, 5.483, 5.539, 5.869, 6.956, 7.443, 7.654, 8.005, 8.181,
                        8.386, 9.202, 9.51, 9.66, 9.141, 8.79, 8.747, 8.949, 9.188, 9.625,
                        10.154, 10.173, 10.361, 11.186, 11.226, 11.091, 10.899, 10.945,
                        10.892, 9.618, 9.092, 8.465, 7.864, 7.396, 7.076, 7.053, 6.772, 6.958,
                        7.202, 6.93, 6.857, 7.007, 7.059, 7.099, 7.025, 6.95, 7.116, 6.331,
                        6.39, 6.571, 6.571, 6.604, 6.407, 6.371, 6.348, 6.348, 5.995, 6.162,
                        6.287, 6.241, 6.033, 6.083, 6.313, 6.118, 5.78, 5.698, 5.804, 5.743,
                        5.655, 5.976, 6.005, 6.06, 5.988, 6.021, 6.049, 5.882, 5.296, 5.142,
                        4.701, 4.701, 4.647, 4.491, 4.48, 4.384, 4.263, 4.515, 4.721, 5.084,
                        6.225, 6.302, 6.409, 6.52, 6.462, 6.525, 6.816, 6.656, 6.566, 6.34,
                        6.177, 6.143, 7.462, 7.783, 7.885, 7.998, 8.182, 8.352, 8.32, 8.5,
                        8.967, 8.474, 8.178, 7.89, 7.436, 7.634, 7.777, 7.628, 7.189, 6.787,
                        6.048, 6.003, 6.189, 6.216, 6.389, 6.353, 7.341, 7.899, 7.849, 7.757,
                        7.314, 7.134, 6.858, 6.689, 6.526, 5.909, 5.138, 4.617, 4.339, 4.558,
                        4.493, 4.545, 4.419, 4.245, 4.468, 5.093, 5.737, 6.215, 6.613, 6.876,
                        7.566, 7.586, 7.901, 7.736, 7.23, 6.703, 5.896, 5.73, 6.032, 6.263,
                        6.458, 7.107, 7.766, 7.911, 7.794, 7.776, 7.876, 7.866, 7.462, 7.298,
                        6.898, 6.62, 6.747, 7.285, 8.139, 8.411, 8.776, 8.946, 9.155, 9.296,
                        10.15, 9.96, 9.885, 9.99, 10.203, 10.401, 10.935, 11.071, 11.274,
                        11.566, 11.851, 12.187, 12.363, 12.426, 12.478, 12.486, 12.117,
                        12.132, 11.791, 11.332, 11.441, 11.38, 11.309, 10.985, 10.627, 10.355,
                        9.899, 9.833, 9.747, 9.693, 9.514, 9.502, 9.888, 9.98, 10.255, 10.667,
                        10.531, 10.452, 10.267, 10.2, 10.437, 10.553, 10.577, 10.661, 11.022,
                        11.213, 11.311, 11.572, 11.708, 11.176, 10.857, 10.754, 10.629,
                        10.185, 10.052, 10.083, 10.31, 10.478, 10.626, 11.121, 11.141, 11.221,
                        11.299, 11.435, 11.599, 11.353, 11.299, 11.288, 11.279, 11.208,
                        11.307, 11.685, 11.58, 11.379, 11.096, 11.144, 10.947, 10.699, 10.881,
                        10.746, 10.276, 9.994, 9.629, 9.76, 9.749, 10.012, 10.184, 10.336,
                        10.473, 10.848, 11.349, 11.978, 12.167, 12.327, 12.339, 12.064, 12.09,
                        12.12, 11.94, 11.562, 11.208, 10.974, 10.948, 10.983, 10.76, 10.694,
                        10.534, 10.273, 10.364, 10.421, 10.357, 10.316, 10.472, 10.94, 11.314,
                        11.485, 11.488, 11.606, 11.479, 11.091, 11.288, 11.354, 11.501,
                        11.302, 10.968, 11.026, 10.944, 11.08, 11.388, 11.504, 11.279, 10.683,
                        10.533, 10.505, 10.305, 10.146, 10.148, 9.501, 9.366, 9.23, 9.067,
                        8.956, 8.935,
                    ],
                    unit: "db",
                    type: "line",
                    valueDecimals: 1,
                },
                {
                    name: "Number of gestures",
                    data: [
                        26.857, 27, 27.111, 27.2, 27.272, 30.545, 32.181, 33.818, 35.272,
                        36.545, 37.818, 41.818, 44.545, 47.272, 48.545, 49.818, 53.545, 61,
                        64.909, 68.818, 72.727, 75.09, 77.454, 82.181, 84.545, 84.454, 86.181,
                        87.909, 89.636, 93.09, 96.727, 100.363, 104, 107.636, 111.272,
                        116.727, 121.09, 125.454, 129.818, 134.181, 136.727, 151.636, 159.09,
                        166.545, 174, 181.454, 186.363, 201.636, 209.272, 216.909, 222.818,
                        228.727, 234.636, 249.363, 258.181, 267, 273.09, 279.181, 288.181,
                        303, 308.818, 314.636, 326.909, 336.272, 345.636, 364.363, 373.727,
                        380.181, 389.818, 399.454, 409.09, 425.727, 432.727, 439.727, 446.727,
                        453.727, 460.727, 473.272, 478.818, 484.363, 489.909, 491.636,
                        493.363, 498.272, 500.727, 503.181, 506.454, 508, 509.545, 512.636,
                        514.363, 516.09, 517.909, 519.727, 521.545, 525.636, 527.272, 528.909,
                        529.636, 530.363, 530.909, 531.181, 531.3, 531.444, 530.75, 529.857,
                        528.666, 521, 521, 521.777, 522.4, 522.909, 522.818, 522.636, 522.545,
                        522.454, 522.363, 522.272, 522.181, 520.727, 520.545, 521.09, 521.636,
                        522.181, 523.272, 523.818, 524.363, 524.909, 525.454, 528.09, 532.272,
                        534.363, 536.454, 537.909, 539.363, 540.818, 543.727, 545.909,
                        544.818, 543.727, 542.636, 541.545, 540, 539.545, 539.09, 538.636,
                        537.272, 535.181, 533.363, 532.454, 531.545, 530.636, 529.727,
                        528.818, 526.272, 525.909, 525.545, 525.181, 524.818, 524.454,
                        523.727, 522.363, 521, 520, 519, 516.545, 511.636, 510.636, 509.636,
                        506.909, 504.181, 502.454, 499, 497.272, 497, 496.727, 497.454,
                        496.727, 493.818, 491.636, 489.454, 487.272, 487.09, 486.909, 486.545,
                        485.363, 484.181, 484.09, 481.545, 479, 478.181, 477.909, 477.636,
                        477.363, 477.09, 476.818, 476.363, 481.818, 487.272, 492.727, 493.909,
                        493.181, 491.727, 491, 490.272, 489.545, 487.636, 485.727, 482.363,
                        474.454, 468.454, 462.454, 456.454, 450.454, 439.727, 435, 430.272,
                        425.545, 418.727, 418.363, 418.545, 419.09, 419.636, 420.181, 419.454,
                        418.727, 413.818, 413, 412.181, 411.363, 409.636, 407.909, 405,
                        403.818, 397.454, 392.818, 388.181, 383.545, 374.272, 369.636, 365,
                        358.363, 351.181, 344, 340, 338, 336, 334, 332, 328.636, 323.909,
                        322.545, 321.181, 319.818, 318.272, 315.181, 313.636, 312.09, 311.909,
                        311.727, 310.545, 308.181, 307, 306, 305, 302.818, 300.636, 297.545,
                        296.636, 296.727, 296.181, 295.636, 295.09, 294, 294.636, 293.09,
                        291.545, 291.545, 291.545, 292.181, 292.818, 293.454, 294.09, 292.545,
                        291, 292.272, 292.363, 292.454, 292.545, 289.818, 287.09, 281.636,
                        281.09, 280.545, 277, 273.454, 271.454, 267.454, 265.181, 262.909,
                        260.636, 258.363, 256.09, 248.909, 246.818, 240.909, 235, 229.09,
                        226.272, 220.636, 217.818, 215, 215, 211.545, 208.09, 201.181,
                        197.727, 194.272, 190.818, 187.363, 183.909, 170.818, 173, 175.181,
                        177.363, 179.545, 181.727, 186.09, 182.727, 179.363, 179.09, 178.818,
                        173.272, 160.272, 152.818, 145.363, 137.909, 130.454, 126.818,
                        116.272, 111, 107.363, 101.909, 98.363, 94.818, 87, 82.818, 80.363,
                        79.545, 78.272, 77, 73, 71.454, 69.636, 67.909, 66.727, 65.454,
                        62.909, 62.09, 61.272, 60.363, 59.454, 59, 58.545, 58.272, 58.09,
                        57.909, 57.727, 57.545, 57.272, 57.181, 56.909, 56.636, 56.454,
                        56.272, 55.909, 55.727, 55.818, 55.545, 55.272, 54.909, 54.818,
                        54.727, 54.636, 54.545, 54.454, 54, 54, 54, 54, 54, 53.636, 52.909,
                        52.545, 52.636, 52.727, 52.818, 52.909, 52.636, 52.272, 52.272,
                        52.272, 52.272, 52.818, 53, 53.09, 53.181, 53.272, 53.818, 54.363,
                        55.09, 55.454, 55.272, 55.09, 54.909, 54.727, 54.363, 53.727, 53.09,
                        52.636, 52.181, 51.727, 50.818, 50.363, 50.363, 50.363, 50.363,
                        50.818, 51.727, 51.272, 50.818, 50.363, 50.636, 50.909, 50.545,
                        50.363, 50.181, 50, 49.818, 50.818, 52.818, 53.09, 53.363, 53.636,
                        53.909, 54.181, 53.272, 52.818, 52.09, 51.363, 50.636, 49.909, 47.818,
                        46.09, 44.363, 43.363, 42.363, 41.363, 39.363, 37.636, 35.909, 35.181,
                        35.09, 35.363, 35.909, 36.181, 36.545, 36.909, 37.272, 38.363, 39.545,
                        39.636, 39.727, 39.818, 38.636, 37.454, 34.909, 33.636, 32.363, 31.09,
                        29.818, 27.181, 21.909, 20.545, 19.181, 17.818, 16.454, 15.09, 10.727,
                        8.545, 8.636, 8.727, 8.818, 8.909, 9.09, 8.9, 8.666, 9.5, 10.571, 12,
                    ],
                    unit: "",
                    type: "area",
                    valueDecimals: 0,
                },
                {
                    name: "Heart rate",
                    data: [
                        101, 98, 103, 115, 124, 128, 133, 138, 138, 141, 143, 149, 149, 148,
                        146, 147, 152, 149, 155, 152, 153, 153, 156, 152, 151, 151, 149, 148,
                        150, 157, 161, 156, 160, 158, 156, 159, 164, 162, 160, 165, 165, 167,
                        167, 163, 166, 165, 161, 164, 163, 164, 162, 163, 164, 166, 166, 166,
                        166, 166, 164, 167, 166, 162, 164, 163, 161, 166, 168, 168, 169, 169,
                        165, 166, 167, 163, 167, 167, 169, 171, 167, 169, 171, 175, 174, 167,
                        168, 171, 167, 169, 169, 167, 166, 165, 163, 161, 163, 166, 162, 164,
                        166, 162, 162, 164, 163, 162, 162, 163, 161, 121, 121, 121, 121, 121,
                        121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121,
                        121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 121, 113, 117, 121,
                        119, 117, 120, 121, 124, 125, 127, 125, 129, 130, 131, 135, 135, 135,
                        135, 134, 136, 139, 142, 142, 145, 145, 150, 153, 155, 156, 157, 157,
                        154, 153, 152, 148, 130, 123, 123, 120, 123, 119, 115, 114, 114, 115,
                        115, 113, 112, 111, 113, 113, 113, 113, 110, 110, 109, 110, 110, 109,
                        108, 108, 109, 107, 107, 107, 109, 109, 111, 111, 111, 111, 111, 112,
                        112, 112, 112, 112, 114, 113, 113, 113, 113, 113, 113, 112, 111, 114,
                        118, 124, 127, 128, 128, 129, 131, 133, 131, 130, 133, 130, 136, 135,
                        135, 136, 136, 135, 136, 135, 134, 135, 137, 138, 139, 138, 134, 130,
                        130, 129, 129, 132, 132, 131, 130, 133, 132, 132, 128, 128, 132, 132,
                        128, 128, 129, 130, 130, 130, 130, 131, 133, 134, 132, 132, 130, 131,
                        129, 133, 133, 130, 130, 133, 133, 131, 130, 130, 130, 129, 129, 129,
                        126, 128, 126, 129, 129, 124, 125, 120, 120, 123, 125, 125, 124, 124,
                        125, 125, 126, 126, 126, 127, 126, 130, 134, 135, 126, 123, 124, 123,
                        127, 130, 130, 132, 133, 133, 133, 133, 130, 130, 129, 128, 124, 123,
                        124, 124, 127, 135, 139, 139, 134, 134, 133, 130, 130, 127, 129, 126,
                        126, 126, 129, 129, 123, 123, 128, 128, 125, 125, 125, 123, 123, 122,
                        122, 122, 125, 125, 125, 126, 126, 128, 128, 129, 129, 124, 125, 125,
                        125, 129, 131, 131, 131, 131, 131, 131, 131, 129, 129, 126, 126, 126,
                        126, 126, 125, 125, 126, 126, 126, 125, 126, 127, 130, 130, 130, 130,
                        132, 132, 132, 132, 132, 132, 129, 130, 132, 133, 132, 132, 129, 128,
                        128, 132, 133, 135, 137, 138, 139, 139, 142, 142, 141, 143, 144, 144,
                        143, 145, 145, 147, 150, 153, 158, 159, 160, 159, 160, 160, 160, 162,
                        162, 163, 162, 161, 161, 162, 161, 164, 166, 166, 165, 162, 162, 159,
                        157, 160, 159, 160, 160, 161, 161, 162, 162, 163, 163, 165, 166, 166,
                        164, 164, 166, 165, 166, 163, 162, 162, 161, 159, 159, 159, 159, 159,
                        156, 154, 153, 152, 152, 151, 154, 153, 151, 151,
                    ],
                    unit: "bpm",
                    type: "area",
                    valueDecimals: 0,
                },
            ],
        };
        this.activity = this.TimeChartData;
    }
    ngOnInit() {
        ["mousemove", "touchmove", "touchstart"].forEach(function (eventType) {
            document
                .getElementById("container")
                .addEventListener(eventType, function (e) {
                var chart, point, i, event;
                for (i = 0; i < highcharts__WEBPACK_IMPORTED_MODULE_2__["charts"].length; i = i + 1) {
                    chart = highcharts__WEBPACK_IMPORTED_MODULE_2__["charts"][i];
                    // Find coordinates within the chart
                    event = chart.pointer.normalize(e);
                    // Get the hovered point
                    point = chart.series[0].searchPoint(event, true);
                    if (point) {
                        point.highlight(e);
                    }
                }
            });
        });
        function syncExtremes(e) {
            var thisChart = this.chart;
            if (e.trigger !== "syncExtremes") {
                // Prevent feedback loop
                highcharts__WEBPACK_IMPORTED_MODULE_2__["each"](highcharts__WEBPACK_IMPORTED_MODULE_2__["charts"], function (chart) {
                    if (chart !== thisChart) {
                        if (chart.xAxis[0].setExtremes) {
                            // It is null while updating
                            chart.xAxis[0].setExtremes(e.min, e.max, undefined, false, {
                                trigger: "syncExtremes",
                            });
                        }
                    }
                });
            }
        }
        highcharts__WEBPACK_IMPORTED_MODULE_2__["Pointer"].prototype.reset = function () {
            return undefined;
        };
        highcharts__WEBPACK_IMPORTED_MODULE_2__["Point"].prototype.select = function (event) {
            event = this.series.chart.pointer.normalize(event);
            this.onMouseOver(); // Show the hover marker
            this.series.chart.tooltip.refresh(this); // Show the tooltip
            this.series.chart.xAxis[0].drawCrosshair(event, this); // Show the crosshair
        };
        this.xData = this.activity.xData;
        let that = this;
        if (this.activity) {
            this.activity.datasets.forEach(function (dataset, i) {
                dataset.data = highcharts__WEBPACK_IMPORTED_MODULE_2__["map"](dataset.data, function (val, j) {
                    return [that.xData[j], val];
                });
                var chartDiv = document.createElement("div");
                chartDiv.className = "chart";
                document.getElementById("container").appendChild(chartDiv);
                highcharts__WEBPACK_IMPORTED_MODULE_2__["chart"](chartDiv, {
                    chart: {
                        marginLeft: 40,
                        spacingTop: 20,
                        spacingBottom: 20,
                        height: 230,
                    },
                    title: {
                        text: dataset.name,
                        align: "left",
                        margin: 0,
                        x: 30,
                    },
                    subtitle: {
                        text: "Presentation skills [35], Presentation skills [40]",
                    },
                    credits: {
                        enabled: false,
                    },
                    legend: {
                        enabled: false,
                    },
                    xAxis: {
                        crosshair: true,
                        events: {
                            setExtremes: syncExtremes,
                        },
                        labels: {
                            format: "{value} min",
                        },
                    },
                    yAxis: {
                        title: {
                            text: null,
                        },
                    },
                    tooltip: {
                        positioner: function () {
                            return {
                                // right aligned
                                x: this.chart.chartWidth - 200,
                                y: 10,
                            };
                        },
                        borderWidth: 0,
                        backgroundColor: "none",
                        pointFormat: "{point.y}",
                        headerFormat: "",
                        shadow: false,
                        style: {
                            fontSize: "18px",
                        },
                        valueDecimals: dataset.valueDecimals,
                    },
                    series: [
                        {
                            data: dataset.data,
                            name: dataset.name,
                            type: dataset.type,
                            color: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[i],
                            fillOpacity: 0.3,
                            tooltip: {
                                valueSuffix: " " + dataset.unit,
                            },
                        },
                    ],
                });
            });
        }
    }
};
PresentationSkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-presentation-skills",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./presentation-skills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/presentation-skills/presentation-skills.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./presentation-skills.component.css */ "./src/app/charts/presentation-skills/presentation-skills.component.css")).default]
    })
], PresentationSkillsComponent);



/***/ }),

/***/ "./src/app/charts/procrastination/procrastination.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/procrastination/procrastination.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9wcm9jcmFzdGluYXRpb24vcHJvY3Jhc3RpbmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/procrastination/procrastination.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/procrastination/procrastination.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProcrastinationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcrastinationComponent", function() { return ProcrastinationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let ProcrastinationComponent = class ProcrastinationComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "scatter",
                zoomType: "xy",
            },
            title: {
                text: "Procrastination",
            },
            subtitle: {
                text: "Procrastination [102] Performance [102], Procrastination [107]",
            },
            xAxis: {
                title: {
                    enabled: true,
                    text: "Days until course material access after semester start",
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true,
            },
            yAxis: {
                title: {
                    text: "Score",
                },
                max: 100,
            },
            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "top",
                x: 10,
                y: 90,
                floating: true,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].chart.backgroundColor,
                borderWidth: 1,
            },
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: "rgb(100,100,100)",
                            },
                        },
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false,
                            },
                        },
                    },
                    tooltip: {
                        headerFormat: "<b>{series.name}</b><br>",
                        pointFormat: "{point.x} days: {point.y} points",
                    },
                },
            },
            series: [
                {
                    name: "Student",
                    color: "rgba(223, 83, 83, .5)",
                    data: [
                        [1, 100],
                        [1, 89],
                        [1, 93],
                        [1, 87],
                        [1, 70],
                        [2, 84],
                        [2, 72],
                        [2, 55],
                        [3, 31],
                        [3, 45],
                        [3, 72],
                        [3, 88],
                        [4, 55],
                        [4, 11],
                        [4, 85],
                        [4, 52],
                        [5, 50],
                        [5, 42],
                        [5, 33],
                        [6, 33],
                        [6, 52],
                        [7, 33],
                        [8, 20],
                        [9, 15],
                        [9, 23],
                        [10, 14],
                        [11, 3],
                        [12, 0],
                    ],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
ProcrastinationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-procrastination",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./procrastination.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/procrastination/procrastination.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./procrastination.component.css */ "./src/app/charts/procrastination/procrastination.component.css")).default]
    })
], ProcrastinationComponent);



/***/ }),

/***/ "./src/app/charts/reading-analytics/reading-analytics.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/reading-analytics/reading-analytics.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9yZWFkaW5nLWFuYWx5dGljcy9yZWFkaW5nLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/reading-analytics/reading-analytics.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/reading-analytics/reading-analytics.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReadingAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingAnalyticsComponent", function() { return ReadingAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




const Draggable = __webpack_require__(/*! highcharts/modules/draggable-points.js */ "./node_modules/highcharts/modules/draggable-points.js");
Draggable(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let ReadingAnalyticsComponent = class ReadingAnalyticsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.chartOptions = {
            title: {
                text: "Reading analytics",
            },
            subtitle: {
                text: "Reading analytics [134], Performance rating [128] Engagement rating [128] Active reading rating [128] Attendance rating [128], Reading Analytics [114] Ideal reading material [114]",
            },
            xAxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            plotOptions: {
                series: {
                    stickyTracking: false,
                    dragDrop: {
                        draggableY: true,
                    },
                },
                spline: {
                    cursor: "ns-resize",
                },
            },
            series: [
                {
                    name: "# reading sessions",
                    data: [55, 21, 41, 68, 48, 87, 40, 52, 72, 60, 50, 15],
                    type: "column",
                },
                {
                    name: "rereading the same material",
                    data: [22, 15, 30, 50, 52, 65, 51, 40, 53, 48, 31, 9],
                    type: "column",
                },
                {
                    name: "duration of reading sessions",
                    data: [60, 19, 39, 72, 45, 90, 45, 44, 60, 52, 38, 14],
                    type: "spline",
                },
            ],
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
ReadingAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-reading-analytics",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reading-analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/reading-analytics/reading-analytics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reading-analytics.component.css */ "./src/app/charts/reading-analytics/reading-analytics.component.css")).default]
    })
], ReadingAnalyticsComponent);



/***/ }),

/***/ "./src/app/charts/self-motivation/self-motivation.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/self-motivation/self-motivation.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zZWxmLW1vdGl2YXRpb24vc2VsZi1tb3RpdmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/self-motivation/self-motivation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/self-motivation/self-motivation.component.ts ***!
  \*********************************************************************/
/*! exports provided: SelfMotivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfMotivationComponent", function() { return SelfMotivationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4__);





highcharts_highcharts_more__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let SelfMotivationComponent = class SelfMotivationComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "line",
                polar: true,
            },
            title: {
                text: "Self-motivation, Self-regulated learning",
            },
            subtitle: {
                text: "Self-motivation [139] Self-regulated Learning [139]",
            },
            xAxis: {
                categories: [
                    "#  videos watched",
                    "# quizzes",
                    "# assignments",
                    "# forum activities",
                ],
                tickmarkPlacement: "on",
                lineWidth: 0,
            },
            yAxis: {
                gridLineInterpolation: "polygon",
                lineWidth: 0,
                min: 0,
            },
            exporting: {
                enabled: true,
            },
            credits: {
                enabled: false,
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>',
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            series: [
                {
                    name: "This month",
                    data: [30, 52, 44, 40],
                    pointPlacement: "on",
                },
                {
                    name: "Last month",
                    data: [20, 22, 34, 10],
                    pointPlacement: "on",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
SelfMotivationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-self-motivation",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./self-motivation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/self-motivation/self-motivation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./self-motivation.component.css */ "./src/app/charts/self-motivation/self-motivation.component.css")).default]
    })
], SelfMotivationComponent);



/***/ }),

/***/ "./src/app/charts/social-analysis/social-analysis.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/social-analysis/social-analysis.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zb2NpYWwtYW5hbHlzaXMvc29jaWFsLWFuYWx5c2lzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/social-analysis/social-analysis.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/social-analysis/social-analysis.component.ts ***!
  \*********************************************************************/
/*! exports provided: SocialAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialAnalysisComponent", function() { return SocialAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let SocialAnalysisComponent = class SocialAnalysisComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "bar",
            },
            title: {
                text: "Social network analysis",
            },
            subtitle: {
                text: "Social Network analysis [63]",
            },
            xAxis: {
                categories: [
                    "Student 1",
                    "Student 2",
                    "Student 3",
                    "Student 4",
                    "Student 5",
                ],
                title: {
                    text: null,
                },
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Number of interactions",
                    align: "high",
                },
                labels: {
                    overflow: "justify",
                },
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                    },
                },
            },
            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "top",
                x: -40,
                y: 80,
                floating: true,
                borderWidth: 1,
                backgroundColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["defaultOptions"].legend.backgroundColor || "#FFFFFF",
                shadow: true,
            },
            credits: {
                enabled: false,
            },
            series: [
                {
                    name: "# emails received on social media",
                    data: [10, 12, 3, 20, 2],
                },
                {
                    name: "# emails sent on social media",
                    data: [13, 15, 7, 4, 6],
                },
                {
                    name: "# wall posts received",
                    data: [4, 8, 3, 7, 3],
                },
                {
                    name: "# status messages posted",
                    data: [16, 11, 23, 7, 10],
                },
                {
                    name: "# posts written",
                    data: [12, 11, 15, 8, 4],
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
SocialAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-social-analysis",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-analysis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-analysis/social-analysis.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-analysis.component.css */ "./src/app/charts/social-analysis/social-analysis.component.css")).default]
    })
], SocialAnalysisComponent);



/***/ }),

/***/ "./src/app/charts/social-network-analysis/social-network-analysis.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/charts/social-network-analysis/social-network-analysis.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zb2NpYWwtbmV0d29yay1hbmFseXNpcy9zb2NpYWwtbmV0d29yay1hbmFseXNpcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/social-network-analysis/social-network-analysis.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/charts/social-network-analysis/social-network-analysis.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SocialNetworkAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialNetworkAnalysisComponent", function() { return SocialNetworkAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highcharts/modules/networkgraph */ "./node_modules/highcharts/modules/networkgraph.js");
/* harmony import */ var highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4__);





//import nodeFormatter from "./nodeformatter";
highcharts_modules_networkgraph__WEBPACK_IMPORTED_MODULE_4___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
nodeFormatter(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let SocialNetworkAnalysisComponent = class SocialNetworkAnalysisComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "networkgraph",
            },
            title: {
                text: "Social Network Analysis",
            },
            subtitle: {
                text: "Long Term Engagement [90] Social Network Analysis [90], Online Discussion (forum) Behavior [52]",
            },
            plotOptions: {
                networkgraph: {
                    keys: ["from", "to"],
                    layoutAlgorithm: {
                        enableSimulation: true,
                        friction: -0.9,
                    },
                },
            },
            series: [
                {
                    type: "networkgraph",
                    dataLabels: {
                        enabled: true,
                        linkFormat: "",
                    },
                    id: "lang-tree",
                    data: [
                        ["User 1", "User 2"],
                        ["User 1", "User 3"],
                        ["User 1", "User 4"],
                        ["User 1", "User 5"],
                        ["User 1", "User 6"],
                        ["User 1", "User 7"],
                        ["User 1", "User 9"],
                        ["User 5", "User 16"],
                        ["User 3", "User 17"],
                        ["User 3", "User 18"],
                    ],
                },
            ],
            tooltip: {
                enabled: true,
                useHTML: true,
                formatter: function () {
                    let linkTo_li = "";
                    let tooltipHTML = "";
                    for (let i = 0; i < this.point.linksFrom.length; i++) {
                        linkTo_li = linkTo_li + `<li>${this.point.linksFrom[i].to}</li>`;
                    }
                    tooltipHTML =
                        tooltipHTML +
                            `<b>Replies to [${this.point.name}]</b>:<ul>${linkTo_li}</ul>`;
                    return tooltipHTML;
                },
            },
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
SocialNetworkAnalysisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-social-network-analysis",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social-network-analysis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/social-network-analysis/social-network-analysis.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social-network-analysis.component.css */ "./src/app/charts/social-network-analysis/social-network-analysis.component.css")).default]
    })
], SocialNetworkAnalysisComponent);

function nodeFormatter(Highcharts) {
    // Add the nodes option through an event call. We want to start with the parent
    // item and apply separate colors to each child element, then the same color to
    // grandchildren.
    Highcharts.addEvent(Highcharts.Series, 'afterSetOptions', function (e) {
        var colors = Highcharts.getOptions().colors, i = 0, nodes = {};
        if (this instanceof Highcharts.seriesTypes.networkgraph &&
            e.options.id === 'lang-tree') {
            e.options.data.forEach(function (link) {
                if (link[0] === 'User 1') {
                    nodes['User 1'] = {
                        id: 'User 1',
                        marker: {
                            radius: 20
                        }
                    };
                    nodes[link[1]] = {
                        id: link[1],
                        marker: {
                            radius: 10
                        },
                        color: colors[i++]
                    };
                }
                else if (nodes[link[0]] && nodes[link[0]].color) {
                    nodes[link[1]] = {
                        id: link[1],
                        color: nodes[link[0]].color,
                    };
                }
            });
            e.options.nodes = Object.keys(nodes).map(function (id) {
                return nodes[id];
            });
        }
    });
}


/***/ }),

/***/ "./src/app/charts/student-comparison/student-comparison.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/charts/student-comparison/student-comparison.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdHVkZW50LWNvbXBhcmlzb24vc3R1ZGVudC1jb21wYXJpc29uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/student-comparison/student-comparison.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/charts/student-comparison/student-comparison.component.ts ***!
  \***************************************************************************/
/*! exports provided: StudentComparisonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComparisonComponent", function() { return StudentComparisonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let StudentComparisonComponent = class StudentComparisonComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.selectedOption = "Clicks";
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                renderTo: "container",
                defaultSeriesType: "spline",
            },
            title: {
                text: "Student comparison",
            },
            subtitle: {
                text: "Student comparison [130] Grade prediction [130] Self-motivation [130], Student performance [126] Student comparison [126], Academic performance [129] Learning strategies [129], Performance [25], Performance [50]",
            },
            xAxis: {
                categories: [
                    "WK 1",
                    "WK 2",
                    "WK 3",
                    "WK 4",
                    "WK 5",
                    "WK 6",
                    "WK 7",
                    "WK 8",
                    "WK 9",
                    "WK 10",
                    "WK 11",
                    "WK 12",
                ],
            },
            yAxis: {
                title: {
                    text: this.selectedOption,
                },
            },
            series: [
                { name: "You", data: [10, 20, 30, 20, 10] },
                { name: "Avg. class data", data: [12, 21, 33, 12, 1] },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
    updateChart(event) {
        var selVal = event.target.value;
        if (selVal == "A" || selVal == "") {
            this.chartOptions["series"] = [
                { name: "You", data: [10, 20, 30, 20, 10] },
                { name: "Avg. class data", data: [12, 21, 33, 12, 1] },
            ];
        }
        else if (selVal == "B") {
            this.chartOptions["series"] = [
                { name: "You", data: [11, 21, 32, 12, 1] },
                { name: "Avg. class data", data: [22, 11, 13, 32, 21] },
            ];
        }
        else if (selVal == "C") {
            this.chartOptions["series"] = [
                { name: "You", data: [31, 22, 33, 32, 11] },
                { name: "Avg. class data", data: [32, 31, 11, 2, 15] },
            ];
        }
        else if (selVal == "D") {
            this.chartOptions["series"] = [
                { name: "You", data: [54, 33, 44, 12, 32] },
                { name: "Avg. class data", data: [22, 43, 13, 12, 133] },
            ];
        }
        else {
            this.chartOptions["series"] = [
                { name: "You", data: [24, 13, 14, 32, 22] },
                { name: "Avg. class data", data: [32, 43, 33, 52, 33] },
            ];
        }
        this.selectedOption =
            event.target.options[event.target.options.selectedIndex].text;
        this.chartOptions["yAxis"]["title"]["text"] = this.selectedOption;
        this.chartOptions = Object.assign({}, this.chartOptions);
    }
};
StudentComparisonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-student-comparison",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-comparison.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-comparison/student-comparison.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-comparison.component.css */ "./src/app/charts/student-comparison/student-comparison.component.css")).default]
    })
], StudentComparisonComponent);



/***/ }),

/***/ "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy9zdHVkZW50LWludGVyYWN0aW9uLXBhdHRlcm5zL3N0dWRlbnQtaW50ZXJhY3Rpb24tcGF0dGVybnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StudentInteractionPatternsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentInteractionPatternsComponent", function() { return StudentInteractionPatternsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let StudentInteractionPatternsComponent = class StudentInteractionPatternsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
        //Option to allow export of chart
    }
    setData() {
        this.chartOptions = {
            chart: {
                //  polar: true,
                type: "area",
            },
            title: {
                text: "Student interaction patterns",
            },
            subtitle: {
                text: "Student interaction patterns (Relation to performance) [127], Student Interaction Patterns [121]",
            },
            credits: {
                enabled: false,
            },
            yAxis: {
                title: {
                    text: "Number of Interactions",
                },
            },
            xAxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec",
                ],
            },
            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle",
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false,
                    },
                },
            },
            series: [
                {
                    name: "# student visits",
                    data: [66, 72, 80, 55, 43, 52, 39, 26, 22, 48, 70, 80],
                },
                {
                    name: "# discussion forum views",
                    data: [62, 60, 72, 51, 30, 59, 42, 20, 14, 30, 54, 60],
                },
                {
                    name: "# content views",
                    data: [88, 68, 60, 40, 15, 33, 68, 50, 13, 22, 44, 58],
                },
            ],
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                layout: "horizontal",
                                align: "center",
                                verticalAlign: "bottom",
                            },
                        },
                    },
                ],
            },
        };
        highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
StudentInteractionPatternsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-student-interaction-patterns",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./student-interaction-patterns.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./student-interaction-patterns.component.css */ "./src/app/charts/student-interaction-patterns/student-interaction-patterns.component.css")).default]
    })
], StudentInteractionPatternsComponent);



/***/ }),

/***/ "./src/app/charts/time-distribution/time-distribution.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/time-distribution/time-distribution.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy90aW1lLWRpc3RyaWJ1dGlvbi90aW1lLWRpc3RyaWJ1dGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/time-distribution/time-distribution.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/time-distribution/time-distribution.component.ts ***!
  \*************************************************************************/
/*! exports provided: TimeDistributionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeDistributionComponent", function() { return TimeDistributionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let TimeDistributionComponent = class TimeDistributionComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Time distribution",
            },
            subtitle: {
                text: "Time Distribution [39] Resource Usage Awareness [39] Self-reflection [39]",
            },
            xAxis: {
                categories: [
                    "WK 1",
                    "WK 2",
                    "WK 3",
                    "WK 4",
                    "WK 5",
                    "WK 6",
                    "WK 7",
                    "WK 8",
                    "WK 9",
                    "WK 10",
                    "WK 11",
                    "WK 12",
                ],
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Weekly activity",
                },
            },
            tooltip: {
                pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b><br/>',
                shared: true,
            },
            plotOptions: {
                column: {
                    stacking: "percent",
                },
            },
            series: [
                {
                    name: "# posts",
                    data: [38, 42, 37, 62, 30, 25, 21, 60, 15, 30, 46, 30],
                },
                {
                    name: "# visits",
                    data: [30, 20, 25, 68, 42, 20, 15, 55, 23, 34, 40, 50],
                },
                {
                    name: "# comments",
                    data: [10, 15, 14, 22, 8, 5, 7, 23, 15, 13, 20, 24],
                },
                {
                    name: "time spent in application",
                    data: [50, 44, 38, 30, 42, 48, 52, 20, 15, 60, 72, 53],
                    type: "spline",
                },
            ],
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
TimeDistributionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-time-distribution",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./time-distribution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-distribution/time-distribution.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./time-distribution.component.css */ "./src/app/charts/time-distribution/time-distribution.component.css")).default]
    })
], TimeDistributionComponent);



/***/ }),

/***/ "./src/app/charts/time-planning/time-planning.component.css":
/*!******************************************************************!*\
  !*** ./src/app/charts/time-planning/time-planning.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy90aW1lLXBsYW5uaW5nL3RpbWUtcGxhbm5pbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/charts/time-planning/time-planning.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/charts/time-planning/time-planning.component.ts ***!
  \*****************************************************************/
/*! exports provided: TimePlanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimePlanningComponent", function() { return TimePlanningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




const drilldown = __webpack_require__(/*! highcharts/modules/drilldown.js */ "./node_modules/highcharts/modules/drilldown.js");
drilldown(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let TimePlanningComponent = class TimePlanningComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        //Set the chart data after we get the indicator and metrics
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie",
            },
            title: {
                text: "Time planning",
            },
            subtitle: {
                text: "Collaborative Learning [47] Time Planning [47], Temporal Analysis [68], Recommendations for successful course completion [125] Self-regulation [125] Timeline (status and goal) [125]",
            },
            tooltip: {
                pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
            },
            accessibility: {
                point: {
                    valueSuffix: "%",
                },
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: "pointer",
                    dataLabels: {
                        enabled: true,
                        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
                    },
                },
            },
            series: [
                {
                    colorByPoint: true,
                    data: [
                        {
                            name: "Time spent on reading",
                            y: 61.41,
                            sliced: true,
                            selected: true,
                            drilldown: "reading",
                        },
                        {
                            name: "Time spent on planning",
                            y: 11.84,
                            drilldown: "planning",
                        },
                        {
                            name: "Time spent on discussion forum",
                            y: 10.85,
                            drilldown: "forum",
                        },
                    ],
                },
            ],
            drilldown: {
                series: [
                    {
                        name: "Time spent on reading per day",
                        id: "reading",
                        data: [
                            ["Monday", 22],
                            ["Tuesday", 15],
                            ["Wednesday", 10],
                            ["Thursday", 33],
                            ["Friday", 20],
                        ],
                    },
                    {
                        name: "Time spent on planning per day",
                        id: "planning",
                        data: [
                            ["Monday", 38],
                            ["Tuesday", 22],
                            ["Wednesday", 8],
                            ["Thursday", 20],
                            ["Friday", 12],
                        ],
                    },
                    {
                        name: "Time spent on forum per day",
                        id: "forum",
                        data: [
                            ["Monday", 29],
                            ["Tuesday", 30],
                            ["Wednesday", 15],
                            ["Thursday", 20],
                            ["Friday", 6],
                        ],
                    },
                ],
            },
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
TimePlanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-time-planning",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./time-planning.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/time-planning/time-planning.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./time-planning.component.css */ "./src/app/charts/time-planning/time-planning.component.css")).default]
    })
], TimePlanningComponent);



/***/ }),

/***/ "./src/app/charts/video-analytics/video-analytics.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/charts/video-analytics/video-analytics.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy92aWRlby1hbmFseXRpY3MvdmlkZW8tYW5hbHl0aWNzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/charts/video-analytics/video-analytics.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/charts/video-analytics/video-analytics.component.ts ***!
  \*********************************************************************/
/*! exports provided: VideoAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAnalyticsComponent", function() { return VideoAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let VideoAnalyticsComponent = class VideoAnalyticsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            chart: {
                type: "column",
            },
            title: {
                text: "Video analytics",
            },
            legend: {
                align: "right",
                verticalAlign: "middle",
                layout: "vertical",
            },
            xAxis: {
                categories: [
                    "User 1",
                    "User 2",
                    "User 3",
                    "User 4",
                    "User 5",
                    "User 6",
                    "User 7",
                    "User 8",
                    "User 9",
                    "User 10",
                    "User 11",
                    "User 12",
                ],
                labels: {
                    x: -10,
                },
            },
            yAxis: {
                allowDecimals: false,
                title: {
                    text: "Amount",
                },
            },
            series: [
                {
                    name: "# forward seeks",
                    data: [],
                },
                {
                    name: "# backward seeks",
                    data: [],
                },
                {
                    name: "# videos watched",
                    data: [],
                },
                {
                    name: "# pauses",
                    data: [],
                },
            ],
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                align: "center",
                                verticalAlign: "bottom",
                                layout: "horizontal",
                            },
                            yAxis: {
                                labels: {
                                    align: "left",
                                    x: 0,
                                    y: -5,
                                },
                                title: {
                                    text: null,
                                },
                            },
                            subtitle: {
                                text: null,
                            },
                            credits: {
                                enabled: false,
                            },
                        },
                    },
                ],
            },
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
VideoAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-video-analytics",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-analytics/video-analytics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-analytics.component.css */ "./src/app/charts/video-analytics/video-analytics.component.css")).default]
    })
], VideoAnalyticsComponent);



/***/ }),

/***/ "./src/app/charts/video-engagements/video-engagements.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/video-engagements/video-engagements.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy92aWRlby1lbmdhZ2VtZW50cy92aWRlby1lbmdhZ2VtZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/video-engagements/video-engagements.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/video-engagements/video-engagements.component.ts ***!
  \*************************************************************************/
/*! exports provided: VideoEngagementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoEngagementsComponent", function() { return VideoEngagementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3__);




let VideoEngagementsComponent = class VideoEngagementsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        (this.chartOptions = {
            title: {
                text: "Video engagements",
            },
            subtitle: {
                text: "Video engagements / analytics [138], Video analytics (Self-reflection) [72], Comment Analytics (Youtube Videos) [116]",
            },
            yAxis: {
                title: {
                    text: "Number of Students",
                },
            },
            xAxis: {
                categories: [
                    "Video 1",
                    "Video 2",
                    "Video 3",
                    "Video 4",
                    "Video 5",
                    "Video 6",
                    "Video 7",
                ],
            },
            legend: {
                layout: "vertical",
                align: "right",
                verticalAlign: "middle",
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false,
                    },
                },
            },
            series: [
                {
                    name: "Read a summary",
                    data: [625, 444, 488, 422, 380, 322, 205],
                },
                {
                    name: "Wrote a summary",
                    data: [696, 525, 499, 431, 398, 280, 170],
                },
            ],
            responsive: {
                rules: [
                    {
                        condition: {
                            maxWidth: 500,
                        },
                        chartOptions: {
                            legend: {
                                layout: "horizontal",
                                align: "center",
                                verticalAlign: "bottom",
                            },
                        },
                    },
                ],
            },
        }),
            highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_3___default()(highcharts__WEBPACK_IMPORTED_MODULE_2__);
    }
};
VideoEngagementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-video-engagements",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./video-engagements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/video-engagements/video-engagements.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./video-engagements.component.css */ "./src/app/charts/video-engagements/video-engagements.component.css")).default]
    })
], VideoEngagementsComponent);



/***/ }),

/***/ "./src/app/charts/writing-analytics/writing-analytics.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/charts/writing-analytics/writing-analytics.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0cy93cml0aW5nLWFuYWx5dGljcy93cml0aW5nLWFuYWx5dGljcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/charts/writing-analytics/writing-analytics.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/charts/writing-analytics/writing-analytics.component.ts ***!
  \*************************************************************************/
/*! exports provided: WritingAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WritingAnalyticsComponent", function() { return WritingAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_2__);



const drilldown = __webpack_require__(/*! highcharts/modules/drilldown.js */ "./node_modules/highcharts/modules/drilldown.js");
drilldown(highcharts__WEBPACK_IMPORTED_MODULE_2__);
const heatmap = __webpack_require__(/*! highcharts/modules/heatmap.js */ "./node_modules/highcharts/modules/heatmap.js");
heatmap(highcharts__WEBPACK_IMPORTED_MODULE_2__);
const treemap = __webpack_require__(/*! highcharts/modules/treemap.js */ "./node_modules/highcharts/modules/treemap.js");
treemap(highcharts__WEBPACK_IMPORTED_MODULE_2__);
let WritingAnalyticsComponent = class WritingAnalyticsComponent {
    constructor() {
        this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_2__;
    }
    ngOnInit() {
        this.setData();
    }
    setData() {
        this.chartOptions = {
            chart: {
                plotBorderWidth: 1,
                events: {
                    drilldown: function (e) {
                        let chart = this;
                        chart.tooltip.options.enabled = false;
                        chart.yAxis[0].update({
                            type: "linear",
                            categories: false,
                        });
                    },
                    drillup: function (e) {
                        let chart = this;
                        chart.tooltip.options.enabled = true;
                        chart.yAxis[0].update({
                            this: "category",
                            categories: [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday",
                            ],
                        });
                    },
                },
            },
            title: {
                text: "Writing analytics (Group edits per day)",
            },
            subtitle: {
                text: "Writing analytics [61] Collaboration network [61], Writing Engagement [48], Writing Analysis [89] Reflective Writing [89], Affective State [85] Text Analysis [85]",
            },
            xAxis: {
                type: "category",
            },
            yAxis: {
                type: "category",
                categories: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                title: null,
            },
            colorAxis: {
                min: 0,
                minColor: "#FFFFFF",
                maxColor: highcharts__WEBPACK_IMPORTED_MODULE_2__["getOptions"]().colors[0],
            },
            legend: {
                align: "right",
                layout: "vertical",
                margin: 0,
                verticalAlign: "top",
                y: 25,
                symbolHeight: 280,
            },
            tooltip: {
                formatter: function () {
                    return ("The group had " +
                        "<b>" +
                        this.point.value +
                        "</b> edits on <br><b>" +
                        this.series.yAxis.categories[this.point.y] +
                        "</b>");
                },
            },
            series: [
                {
                    type: "heatmap",
                    name: "Group Edits",
                    borderWidth: 1,
                    data: [
                        {
                            x: 0,
                            y: 0,
                            name: "Group 1",
                            value: 10,
                            drilldown: "group1Monday",
                        },
                        {
                            x: 0,
                            y: 1,
                            name: "Group 1",
                            value: 19,
                            drilldown: "group1Tuesday",
                        },
                        {
                            x: 0,
                            y: 2,
                            name: "Group 1",
                            value: 8,
                            drilldown: "group1Wednesday",
                        },
                        {
                            x: 0,
                            y: 3,
                            name: "Group 1",
                            value: 24,
                            drilldown: "group1Thursday",
                        },
                        {
                            x: 0,
                            y: 4,
                            name: "Group 1",
                            value: 67,
                            drilldown: "group1Friday",
                        },
                        {
                            x: 1,
                            y: 0,
                            name: "Group 2",
                            value: 92,
                            drilldown: "group2Monday",
                        },
                        {
                            x: 1,
                            y: 1,
                            name: "Group 2",
                            value: 58,
                            drilldown: "group2Tuesday",
                        },
                        {
                            x: 1,
                            y: 2,
                            name: "Group 2",
                            value: 78,
                            drilldown: "group2Wednesday",
                        },
                        {
                            x: 1,
                            y: 3,
                            name: "Group 2",
                            value: 117,
                            drilldown: "group2Thursday",
                        },
                        {
                            x: 1,
                            y: 4,
                            name: "Group 2",
                            value: 48,
                            drilldown: "group2Friday",
                        },
                        {
                            x: 2,
                            y: 0,
                            name: "Group 3",
                            value: 35,
                            drilldown: "group3Monday",
                        },
                        {
                            x: 2,
                            y: 1,
                            name: "Group 3",
                            value: 15,
                            drilldown: "group3Tuesday",
                        },
                        {
                            x: 2,
                            y: 2,
                            name: "Group 3",
                            value: 123,
                            drilldown: "group3Wednesday",
                        },
                        {
                            x: 2,
                            y: 3,
                            name: "Group 3",
                            value: 64,
                            drilldown: "group3Thursday",
                        },
                        {
                            x: 2,
                            y: 4,
                            name: "Group 3",
                            value: 52,
                            drilldown: "group3Friday",
                        },
                        {
                            x: 3,
                            y: 0,
                            name: "Group 4",
                            value: 72,
                            drilldown: "group4Monday",
                        },
                        {
                            x: 3,
                            y: 1,
                            name: "Group 4",
                            value: 132,
                            drilldown: "group4Tuesday",
                        },
                        {
                            x: 3,
                            y: 2,
                            name: "Group 4",
                            value: 116,
                            drilldown: "group4Wednesday",
                        },
                        {
                            x: 3,
                            y: 3,
                            name: "Group 4",
                            value: 42,
                            drilldown: "group4Thursday",
                        },
                        {
                            x: 3,
                            y: 4,
                            name: "Group 4",
                            value: 88,
                            drilldown: "group4Friday",
                        },
                        {
                            x: 4,
                            y: 0,
                            name: "Group 5",
                            value: 38,
                            drilldown: "group5Monday",
                        },
                        {
                            x: 4,
                            y: 1,
                            name: "Group 5",
                            value: 35,
                            drilldown: "group5Tuesday",
                        },
                        {
                            x: 4,
                            y: 2,
                            name: "Group 5",
                            value: 58,
                            drilldown: "group5Wednesday",
                        },
                        {
                            x: 4,
                            y: 3,
                            name: "Group 5",
                            value: 117,
                            drilldown: "group5Thursday",
                        },
                        {
                            x: 4,
                            y: 4,
                            name: "Group 5",
                            value: 115,
                            drilldown: "group5Friday",
                        },
                    ],
                    dataLabels: {
                        enabled: true,
                        color: "#000000",
                    },
                },
            ],
            drilldown: {
                series: [
                    {
                        id: "group1Monday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 2,
                            },
                            {
                                name: "Student 2",
                                y: 3,
                            },
                            {
                                name: "Student 3",
                                y: 5,
                            },
                        ],
                    },
                    {
                        id: "group1Tuesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 10,
                            },
                            {
                                name: "Student 2",
                                y: 15,
                            },
                            {
                                name: "Student 3",
                                y: 23,
                            },
                        ],
                    },
                    {
                        id: "group1Wednesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 2,
                            },
                            {
                                name: "Student 2",
                                y: 3,
                            },
                            {
                                name: "Student 3",
                                y: 3,
                            },
                        ],
                    },
                    {
                        id: "group1Thursday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 12,
                            },
                            {
                                name: "Student 2",
                                y: 6,
                            },
                            {
                                name: "Student 3",
                                y: 6,
                            },
                        ],
                    },
                    {
                        id: "group1Friday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 32,
                            },
                            {
                                name: "Student 2",
                                y: 15,
                            },
                            {
                                name: "Student 3",
                                y: 20,
                            },
                        ],
                    },
                    {
                        id: "group2Monday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 55,
                            },
                            {
                                name: "Student 2",
                                y: 20,
                            },
                            {
                                name: "Student 3",
                                y: 17,
                            },
                        ],
                    },
                    {
                        id: "group2Tuesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 12,
                            },
                            {
                                name: "Student 2",
                                y: 23,
                            },
                            {
                                name: "Student 3",
                                y: 22,
                            },
                        ],
                    },
                    {
                        id: "group2Wednesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 23,
                            },
                            {
                                name: "Student 2",
                                y: 25,
                            },
                            {
                                name: "Student 3",
                                y: 29,
                            },
                        ],
                    },
                    {
                        id: "group2Thursday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 68,
                            },
                            {
                                name: "Student 2",
                                y: 32,
                            },
                            {
                                name: "Student 3",
                                y: 23,
                            },
                        ],
                    },
                    {
                        id: "group2Friday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 12,
                            },
                            {
                                name: "Student 2",
                                y: 20,
                            },
                            {
                                name: "Student 3",
                                y: 20,
                            },
                        ],
                    },
                    {
                        id: "group3Monday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 8,
                            },
                            {
                                name: "Student 2",
                                y: 17,
                            },
                            {
                                name: "Student 3",
                                y: 10,
                            },
                        ],
                    },
                    {
                        id: "group3Tuesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 1,
                            },
                            {
                                name: "Student 2",
                                y: 4,
                            },
                            {
                                name: "Student 3",
                                y: 10,
                            },
                        ],
                    },
                    {
                        id: "group3Wednesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 55,
                            },
                            {
                                name: "Student 2",
                                y: 45,
                            },
                            {
                                name: "Student 3",
                                y: 23,
                            },
                        ],
                    },
                    {
                        id: "group3Thursday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 15,
                            },
                            {
                                name: "Student 2",
                                y: 25,
                            },
                            {
                                name: "Student 3",
                                y: 14,
                            },
                        ],
                    },
                    {
                        id: "group3Friday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 30,
                            },
                            {
                                name: "Student 2",
                                y: 17,
                            },
                            {
                                name: "Student 3",
                                y: 5,
                            },
                        ],
                    },
                    {
                        id: "group4Monday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 24,
                            },
                            {
                                name: "Student 2",
                                y: 24,
                            },
                            {
                                name: "Student 3",
                                y: 24,
                            },
                        ],
                    },
                    {
                        id: "group4Tuesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 30,
                            },
                            {
                                name: "Student 2",
                                y: 60,
                            },
                            {
                                name: "Student 3",
                                y: 42,
                            },
                        ],
                    },
                    {
                        id: "group4Wednesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 42,
                            },
                            {
                                name: "Student 2",
                                y: 38,
                            },
                            {
                                name: "Student 3",
                                y: 34,
                            },
                        ],
                    },
                    {
                        id: "group4Thursday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 14,
                            },
                            {
                                name: "Student 2",
                                y: 14,
                            },
                            {
                                name: "Student 3",
                                y: 14,
                            },
                        ],
                    },
                    {
                        id: "group4Friday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 40,
                            },
                            {
                                name: "Student 2",
                                y: 20,
                            },
                            {
                                name: "Student 3",
                                y: 28,
                            },
                        ],
                    },
                    {
                        id: "group5Monday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 15,
                            },
                            {
                                name: "Student 2",
                                y: 20,
                            },
                            {
                                name: "Student 3",
                                y: 3,
                            },
                        ],
                    },
                    {
                        id: "group5Tuesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 15,
                            },
                            {
                                name: "Student 2",
                                y: 7,
                            },
                            {
                                name: "Student 3",
                                y: 13,
                            },
                        ],
                    },
                    {
                        id: "group5Wednesday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 23,
                            },
                            {
                                name: "Student 2",
                                y: 20,
                            },
                            {
                                name: "Student 3",
                                y: 15,
                            },
                        ],
                    },
                    {
                        id: "group5Thursday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 55,
                            },
                            {
                                name: "Student 2",
                                y: 45,
                            },
                            {
                                name: "Student 3",
                                y: 17,
                            },
                        ],
                    },
                    {
                        id: "group5Friday",
                        type: "bar",
                        data: [
                            {
                                name: "Student 1",
                                y: 30,
                            },
                            {
                                name: "Student 2",
                                y: 40,
                            },
                            {
                                name: "Student 3",
                                y: 45,
                            },
                        ],
                    },
                ],
            },
        };
    }
};
WritingAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-writing-analytics",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./writing-analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/charts/writing-analytics/writing-analytics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./writing-analytics.component.css */ "./src/app/charts/writing-analytics/writing-analytics.component.css")).default]
    })
], WritingAnalyticsComponent);



/***/ }),

/***/ "./src/app/component/add-data/add-data.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/add-data/add-data.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=\"checkbox\"] {\r\n    height: 20px;\r\n    width: 20px;\r\n    margin: 0 0.5em 0 0;\r\n}\r\n\r\n.form-element {\r\n    display: flex;\r\n    padding-bottom: 1em;\r\n    flex-direction: column;\r\n    max-width: calc(590px - 1em);\r\n}\r\n\r\n.form-element-15 {\r\n    width: 15%;\r\n}\r\n\r\n.form-element-25 {\r\n    width: 25%;\r\n}\r\n\r\n.form-element-50 {\r\n    width: 50%;\r\n}\r\n\r\n.form-element-75 {\r\n    width: 75%;\r\n}\r\n\r\n.form-element-85 {\r\n    width: 85%;\r\n}\r\n\r\n.form-element-100 {\r\n    width: 100%\r\n}\r\n\r\n.content-wrapper {\r\n    padding: 1.5em;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.form-wrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n\r\n    & ng-select {\r\n        width: calc(100% - 1em);\r\n        margin-right: 1em;\r\n        font-size: 16px;\r\n    }\r\n\r\n    & ng-multiselect-dropdown {\r\n        width: calc(100% - 1em);\r\n        margin-right: 1em;\r\n        font-size: 16px;\r\n\r\n        .dropdown-btn {\r\n            width: 100% !important;\r\n            padding-right: 0 !important;\r\n            height: 26px;\r\n        }\r\n    }\r\n\r\n    & label {\r\n        font-weight: bold;\r\n        font-size: 16px;\r\n        width: 200px;\r\n        padding-bottom: 0.5em;\r\n    }\r\n\r\n    & input:not([type=\"checkbox\"]) {\r\n        font-size: 16px;\r\n        width: calc(100% - 1.5em);\r\n        height: 30px;\r\n    }\r\n\r\n    & textarea {\r\n        font-size: 16px;\r\n        width: calc(100% - 1.4em);\r\n    }\r\n}\r\n\r\n.select-input {\r\n    width: calc(100% - 8px);\r\n    height: 30px;\r\n}\r\n\r\n.title {\r\n    text-align: center;\r\n    font-weight: normal;\r\n    margin: 1em;\r\n    padding: 24px;\r\n    background-color: #3F51B5;\r\n    color: white;\r\n}\r\n\r\n.save-button {\r\n    margin: 0.5em 0 0 0.15em\r\n}\r\n\r\nfieldset {\r\n    width: calc(50% - 3em);\r\n    border-radius: 4px;\r\n\r\n    &:not(.last) {\r\n        margin-right: 1em;\r\n    }\r\n}\r\n\r\n.form-section {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n\r\n    &.last {\r\n        justify-content: space-between;\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n.alert {\r\n    color: red;\r\n    font-size: small;\r\n    margin: 0;\r\n}\r\n\r\n:host ::ng-deep{\r\n    .dropdown-list {\r\n        .item1 {\r\n            overflow: hidden !important;\r\n        }\r\n\r\n        .item2 {\r\n            position: relative;\r\n        }\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkZC1kYXRhL2FkZC1kYXRhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTs7SUFFZjtRQUNJLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZUFBZTs7UUFFZjtZQUNJLHNCQUFzQjtZQUN0QiwyQkFBMkI7WUFDM0IsWUFBWTtRQUNoQjtJQUNKOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixZQUFZO1FBQ1oscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHlCQUF5QjtRQUN6QixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLHlCQUF5QjtJQUM3QjtBQUNKOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjs7SUFFbEI7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlOztJQUVmO1FBQ0ksOEJBQThCO1FBQzlCLHNCQUFzQjtJQUMxQjtBQUNKOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0FBQ2I7O0FBRUE7SUFDSTtRQUNJO1lBQ0ksMkJBQTJCO1FBQy9COztRQUVBO1lBQ0ksa0JBQWtCO1FBQ3RCO0lBQ0o7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9hZGQtZGF0YS9hZGQtZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAuNWVtIDAgMDtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXgtd2lkdGg6IGNhbGMoNTkwcHggLSAxZW0pO1xyXG59XHJcblxyXG4uZm9ybS1lbGVtZW50LTE1IHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQtMjUge1xyXG4gICAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudC01MCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uZm9ybS1lbGVtZW50LTc1IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5mb3JtLWVsZW1lbnQtODUge1xyXG4gICAgd2lkdGg6IDg1JTtcclxufVxyXG5cclxuLmZvcm0tZWxlbWVudC0xMDAge1xyXG4gICAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAxLjVlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICYgbmctc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMWVtKTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiBuZy1tdWx0aXNlbGVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDFlbSk7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG5cclxuICAgICAgICAuZHJvcGRvd24tYnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYgbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgfVxyXG5cclxuICAgICYgaW5wdXQ6bm90KFt0eXBlPVwiY2hlY2tib3hcIl0pIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNWVtKTtcclxuICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiB0ZXh0YXJlYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxLjRlbSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWxlY3QtaW5wdXQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDhweCk7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNhdmUtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMC41ZW0gMCAwIDAuMTVlbVxyXG59XHJcblxyXG5maWVsZHNldCB7XHJcbiAgICB3aWR0aDogY2FsYyg1MCUgLSAzZW0pO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG5cclxuICAgICY6bm90KC5sYXN0KSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLXNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAmLmxhc3Qge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcHtcclxuICAgIC5kcm9wZG93bi1saXN0IHtcclxuICAgICAgICAuaXRlbTEge1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbTIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/component/add-data/add-data.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/add-data/add-data.component.ts ***!
  \**********************************************************/
/*! exports provided: AddDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDataComponent", function() { return AddDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.service */ "./src/app/component/header/header.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");








let AddDataComponent = class AddDataComponent {
    /*
    * initializes the add-data page depending on if it is a completely new object,
    * an indicator is being edited, or a reference is being edited.
    * */
    constructor(dataService, router, route, fb, headerService, dialog) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.dialog = dialog;
        //NEW Stuff
        this.showActivityMessages = false;
        this.activityMessages = [];
        this.affectedEvents = new Set();
        this.useExistingReference = false;
        this.verifiedOptions = ['verified', 'not verified', 'not mentioned'];
        this.developmentOptions = ['developed', 'proposed', 'not mentioned'];
        this.referenceZero = false;
        this.dropdownSettings = {
            singleSelection: false,
            idField: "_id",
            textField: "name",
            selectAllText: "Select All",
            unSelectAllText: "Deselect All",
            itemsShowLimit: 3,
            allowSearchFilter: true,
        };
        this.selectedLearningActivities = [];
        headerService.setHeader('add-indicator');
        if (localStorage.getItem('currentUser')) {
            this.CUserName = JSON.parse(localStorage.getItem('currentUser')).username;
            this.superAdmin = JSON.parse(localStorage.getItem('currentUser')).superAdmin;
        }
        //target determines which mode we're currently in(new indicator/edit indicator/edit reference)
        this.target = this.route.snapshot.data.target;
        this.data = this.route.snapshot.data.data;
        if (this.data.reference) {
            this.existingReferenceNumber = this.data.reference.referenceNumber;
        }
        if (this.data.indicator) {
            this.indicatorId = this.data.indicator._id;
            this.existingReferenceNumber = this.data.indicator.referenceNumber;
        }
        //boolean set to true if resource on indicator has been deleted.
        this.referenceZero = this.existingReferenceNumber === '[0]';
        //// form entries///////
        this.indicatorForm = this.fb.group({
            learningActivities: [{ value: [], disabled: this.target }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            indicatorName: [{ value: null, disabled: this.readonly('reference') }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            metrics: [{ value: null, disabled: this.readonly('reference') }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            referenceNumber: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            summary: [{ value: null, disabled: this.readonly('reference') }]
        });
        this.referenceForm = this.fb.group({
            referenceText: [{ value: null, disabled: this.readonly('indicator') }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            referenceLink: [{ value: null, disabled: this.readonly('indicator') }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            referenceNumber: [{ value: null, disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            verified: [{ value: null, disabled: this.readonly('indicator') }],
            development: [{ value: null, disabled: this.readonly('indicator') }],
        });
        //subscription to update the referenceNumber in the indicator-form if changed in the reference-form
        this.referenceForm.controls['referenceNumber'].valueChanges.subscribe(value => this.indicatorForm.controls['referenceNumber'].setValue(value));
        //gathering all activities of indicator, in case of indicator edit mode
        if (this.target === 'indicator') {
            this.dataService.getActivitiesByIndicatorId(this.indicatorId).subscribe(learningActivities => {
                this.originallySelectedLearningActivities = learningActivities;
                this.selectedLearningActivities = learningActivities;
                this.learningActivityiesSelected();
            });
        }
    }
    // on initialisation the data from the Database is fetched and after a timeout used.
    ngOnInit() {
        this.fetchData();
        setTimeout(() => {
            this.initializeData();
        }, 200);
    }
    // fetches Activities, Indicators and References from Database
    fetchData() {
        this.dataService.getActivities().subscribe(activities => {
            this.learningActivitiesOptions = activities;
        });
        this.indicatorOptions$ = this.dataService.getIndicators().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["shareReplay"])());
        this.dataService.getReferences().subscribe(references => {
            this.referenceOptions = references;
            const referenceIds = references.map(reference => reference.referenceNumber);
            for (let i = 1; i <= referenceIds.length + 1; i++) {
                if (!referenceIds.includes(`[${i}]`)) {
                    this.newReferenceNumber = `[${i}]`;
                    if (!this.existingReferenceNumber) {
                        this.referenceForm.patchValue({ 'referenceNumber': this.newReferenceNumber });
                    }
                    break;
                }
            }
        });
    }
    // initializes Form values in case either an indicator or a reference is edited.
    // If no corresponding data is found, the form is initialized accordingly
    initializeData() {
        if (this.target) {
            if (this.data.indicator) {
                this.indicatorForm.patchValue({
                    indicatorName: this.data.indicator.Title,
                    metrics: this.data.indicator.metrics,
                    summary: this.data.indicator.summary
                });
                this.referenceForm.patchValue({
                    referenceNumber: this.data.indicator.referenceNumber,
                });
            }
            else {
                this.indicatorForm.patchValue({
                    indicatorName: 'No indicator found',
                    metrics: 'No indicator found',
                    summary: 'No indicator found'
                });
            }
            if (this.data.reference) {
                this.referenceForm.patchValue({
                    referenceText: this.data.reference.referenceText,
                    referenceLink: this.data.reference.link,
                    referenceNumber: this.data.reference.referenceNumber,
                    verified: this.data.reference.status,
                    development: this.data.reference.development
                });
            }
            else {
                this.referenceForm.patchValue({
                    referenceText: 'Reference has been deleted',
                    referenceLink: 'Reference has been deleted'
                });
            }
        }
    }
    // method called on save button clicked.
    // depending on which Mode(Create/Edit Indicator/Edit Reference) is currently active, the matching Model is built
    // and matching Service call is executed
    addData() {
        const indicatorFormValue = this.indicatorForm.getRawValue();
        const referenceFormValue = this.referenceForm.getRawValue();
        const indicator = {
            referenceNumber: indicatorFormValue.referenceNumber,
            Title: indicatorFormValue.indicatorName,
            metrics: indicatorFormValue.metrics,
            summary: indicatorFormValue.summary,
            verified: this.superAdmin
        };
        let referenceLink = referenceFormValue.referenceLink;
        if (referenceLink === '') {
            referenceLink = null;
        }
        const reference = {
            referenceNumber: referenceFormValue.referenceNumber,
            referenceText: referenceFormValue.referenceText,
            link: referenceLink,
            status: referenceFormValue.verified,
            development: referenceFormValue.development
        };
        this.indicatorForm.markAllAsTouched();
        this.referenceForm.markAllAsTouched();
        switch (this.target) {
            case 'indicator':
                if (!this.indicatorForm.valid) {
                    console.log('not valid');
                    return;
                }
                const removedActivities = this.originallySelectedLearningActivities
                    .map(item => item._id)
                    .filter(id => this.selectedLearningActivities
                    .map(item => item._id).indexOf(id) < 0);
                const addedActivities = this.selectedLearningActivities
                    .map(item => item._id)
                    .filter(id => this.originallySelectedLearningActivities
                    .map(item => item._id).indexOf(id) < 0);
                const editObject = {
                    activitiesDeleted: removedActivities,
                    activitiesAdded: addedActivities,
                    indicator
                };
                this.dataService.editIndicator(this.indicatorId, editObject).subscribe(() => {
                    this.router.navigate(['/']);
                });
                break;
            case 'reference':
                if (!this.referenceForm.valid) {
                    return;
                }
                this.dataService.updateReference(this.data.reference._id, reference).subscribe(() => {
                    this.router.navigate(['/reference']);
                });
                break;
            default:
                if (!this.referenceForm.valid || !this.indicatorForm.valid) {
                    return;
                }
                const dataObject = {
                    activities: this.selectedLearningActivities,
                    indicator,
                    reference: this.useExistingReference ? null : reference,
                    superAdmin: this.superAdmin
                };
                this.dataService.addIndicatorAndReference(dataObject).subscribe(() => {
                    if (this.superAdmin) {
                        this.navigateToMainPage();
                    }
                    else {
                        this.dialog.open(this.normalUserSaveDialog);
                    }
                });
        }
    }
    navigateToMainPage() {
        this.router.navigate(['/']);
    }
    learningActivityiesSelected() {
        setTimeout(() => {
            this.indicatorForm.patchValue({ learningActivities: this.selectedLearningActivities });
            this.setActivityMessages(this.selectedLearningActivities);
        }, 10);
    }
    // method to compute the strings which are needed to show the corresponding Events depending on the chosen Activities
    setActivityMessages(activities) {
        this.affectedEvents.clear();
        if (activities.length === 0) {
            this.showActivityMessages = false;
        }
        else {
            const messages = [];
            activities.forEach(activity => {
                this.dataService.getEventsByActivityId(activity._id).subscribe(events => {
                    const eventNames = events.map(event => event.name);
                    eventNames.forEach(name => this.affectedEvents.add(name));
                    let message;
                    if (eventNames.length === 1) {
                        message = `The selected learning activity "${activity.name}"
                    lies under the learning event "${eventNames[0]}".`;
                    }
                    if (eventNames.length > 1) {
                        const namesWithComma = eventNames.join(', ');
                        message = `The selected learning activity "${activity.name}" lies under
                     the learning events "${namesWithComma}".`;
                    }
                    messages.push(message);
                });
            });
            setTimeout(() => {
                this.activityMessages = messages;
                this.showActivityMessages = true;
            }, 100);
        }
    }
    showEvents() {
        return [...this.affectedEvents.values()].join(", ");
    }
    // logs out user => clear currentUser data from LocalStorage
    logout() {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/']);
    }
    // method to switch between using an existing Reference and creating a new one on save.
    // useExitsingReference switches the Reference Input to a Dropdown and disables the other Reference Form fields.
    // Previously entered values are saved to reset them in case the checkbox is clicked again.
    checkboxReferenceClicked() {
        this.useExistingReference = !this.useExistingReference;
        if (!this.useExistingReference) {
            this.referenceForm.get('referenceLink').enable();
            this.referenceForm.get('verified').enable();
            this.referenceForm.get('development').enable();
            this.referenceForm.patchValue({
                referenceText: this.previousReferenceName,
                referenceLink: this.previousReferenceLink,
                referenceNumber: this.newReferenceNumber,
                verified: null,
                development: null
            });
        }
        else {
            this.setPreviousValues();
            this.referenceForm.get('referenceLink').disable();
            this.referenceForm.get('verified').disable();
            this.referenceForm.get('development').disable();
            this.referenceForm.patchValue({
                referenceText: null,
                referenceLink: null,
                referenceNumber: null,
                verified: null,
                development: null
            });
        }
    }
    // method used to compare and differentiate Items in the Activity Dropdown
    compareMethod(item, selected) {
        return item._id === selected._id;
    }
    // method for filling the referenceForm model when choosing an existing Reference from the Dropdown.
    onReferenceChange(reference) {
        if (reference) {
            this.referenceForm.patchValue({
                referenceText: reference.referenceText,
                referenceLink: reference.link,
                referenceNumber: reference.referenceNumber,
                verified: reference.status,
                development: reference.development
            });
        }
        else {
            this.referenceForm.patchValue({
                referenceText: null,
                referenceLink: null,
                referenceNumber: null,
                verified: null,
                development: null
            });
        }
    }
    // method to temporarily save previously entered reference values
    setPreviousValues() {
        this.previousReferenceName = this.referenceForm.value['referenceText'];
        this.previousReferenceLink = this.referenceForm.value['referenceLink'];
    }
    // returns true if the omitted target is equal to the target of the current Mode.
    readonly(target) {
        if (!target)
            return false;
        return this.target === target;
    }
    showActivityDialoge() {
        this.dialog.open(this.activityDialog);
    }
};
AddDataComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _header_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("activityDialog", { static: true })
], AddDataComponent.prototype, "activityDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("normalUserSaveDialog", { static: true })
], AddDataComponent.prototype, "normalUserSaveDialog", void 0);
AddDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/add-data/add-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-data.component.css */ "./src/app/component/add-data/add-data.component.css")).default]
    })
], AddDataComponent);



/***/ }),

/***/ "./src/app/component/add-data/data.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/component/add-data/data.resolver.ts ***!
  \*****************************************************/
/*! exports provided: DataResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataResolver", function() { return DataResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let DataResolver = class DataResolver {
    constructor(service) {
        this.service = service;
    }
    resolve(route, state) {
        const target = route.data.target;
        if (!target) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ activity: null, indicator: null, reference: null });
        }
        const id = route.params.id;
        if (target === 'indicator') {
            return this.service.getPathByIndicatorId(id);
        }
        if (target === 'reference') {
            return this.service.getPathByReferenceId(id);
        }
    }
};
DataResolver.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
DataResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], DataResolver);



/***/ }),

/***/ "./src/app/component/admin/admin.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/admin/admin.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n\r\n    background: white;\r\n\r\n    height: auto;\r\n    width: auto;\r\n\r\n    box-shadow: 1px 1px 2px 2px #888888;\r\n    padding-bottom: 24px;\r\n    position: absolute;\r\n    transform: translate(50%, 50%);\r\n    bottom: 50%;\r\n    right: 50%;\r\n\r\n\r\n}\r\n\r\n#title {\r\n    text-align: center;\r\n    font-weight: normal;\r\n    padding: 24px;\r\n    background-color: #3F51B5;\r\n    color: white;\r\n}\r\n\r\n#username {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n    margin: 25px 45px 0;\r\n    padding-left: 10px;\r\n    font-size: 16px;\r\n}\r\n\r\n#password {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: baseline;\r\n    margin: 25px 45px 0;\r\n    padding-left: 10px;\r\n    font-size: 16px;\r\n}\r\n\r\nlabel {\r\n    padding-right: 20px;\r\n    padding-left: 16px;\r\n    font-weight: bold;\r\n}\r\n\r\ninput {\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    background-color: #3F51B5;\r\n    border: none;\r\n    border-radius: 4px;\r\n    width: 180px;\r\n    height: 28px;\r\n    color: white;\r\n\r\n}\r\n\r\n#submit {\r\n    text-align: center;\r\n    margin: 20px;\r\n\r\n}\r\n\r\n#register, #login {\r\n    text-align: center;\r\n}\r\n\r\na {\r\n    cursor: pointer;\r\n    font-weight: bold;\r\n}\r\n\r\n#submit > button {\r\n    background-color: #3F51B5;\r\n    color: white;\r\n}\r\n\r\n.alert {\r\n    color: red;\r\n    font-size: small;\r\n    margin: 0;\r\n}\r\n\r\n.submitbtn:disabled {\r\n    cursor: not-allowed;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCOztJQUVqQixZQUFZO0lBQ1osV0FBVzs7SUFFWCxtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFVBQVU7OztBQUdkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogYXV0bztcclxuXHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggIzg4ODg4ODtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpO1xyXG4gICAgYm90dG9tOiA1MCU7XHJcbiAgICByaWdodDogNTAlO1xyXG5cclxuXHJcbn1cclxuXHJcbiN0aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjUxQjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiN1c2VybmFtZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgbWFyZ2luOiAyNXB4IDQ1cHggMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuI3Bhc3N3b3JkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBtYXJnaW46IDI1cHggNDVweCAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y1MUI1O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxufVxyXG5cclxuI3N1Ym1pdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcblxyXG59XHJcblxyXG4jcmVnaXN0ZXIsICNsb2dpbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNzdWJtaXQgPiBidXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNTFCNTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc3VibWl0YnRuOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/component/admin/admin.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/admin/admin.component.ts ***!
  \****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AdminComponent = class AdminComponent {
    constructor(dataService, router, fb) {
        this.dataService = dataService;
        this.router = router;
        this.fb = fb;
        this.currentUrl = 'add';
        this.register = false;
        this.loginForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        if (this.router.getCurrentNavigation().extras.state) {
            this.currentUrl = this.router.getCurrentNavigation().extras.state.url;
            this.additionalInfo = this.router.getCurrentNavigation().extras.state.additionalInfo;
        }
    }
    ngOnInit() {
    }
    // depending on submitting or signing in, calls the corresponding service method and logs-in/creates the user
    submit() {
        if (!this.register) {
            this.dataService.login(this.loginForm.value.username, this.loginForm.value.password)
                .subscribe(res => {
                this.loginForm.reset();
                this.dataService.loggedIn = true;
                this.router.navigate([this.currentUrl], { state: { additionalInfo: this.additionalInfo } });
            }, err => alert('User NOT found!'));
        }
        else {
            this.dataService.register(this.loginForm.value).subscribe(added => {
                if (added) {
                    window.alert('User had been registered. You will now be directed to the login page');
                    this.register = false;
                    this.loginForm.reset();
                }
                else {
                    window.alert(`User could not be registered. User with username ${this.loginForm.value.username} already exists`);
                    this.loginForm.reset();
                }
            });
        }
    }
    // switches the local register variable
    onRegister() {
        this.register = !this.register;
    }
    // computes which Text to show in the Button
    buttonText() {
        return this.register ? 'Sign up' : 'Login';
    }
};
AdminComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/component/admin/admin.component.css")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: #f5f5f5;\r\n  color: #b9bdc0;\r\n  text-align: center;\r\n  display: none;\r\n}\r\n\r\n.buttonLaTool {\r\n  margin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgY29sb3I6ICNiOWJkYzA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5idXR0b25MYVRvb2wge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/component/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.service */ "./src/app/component/header/header.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(headerService) {
        this.isSticky = false;
        this.element = document.getElementById("header");
        headerService.setHeader('visualize');
    }
    ngOnInit() { }
    backToTop() {
        this.element.scrollIntoView({ behavior: "smooth" });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _header_header_service__WEBPACK_IMPORTED_MODULE_2__["HeaderService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/component/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/component/display/display.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/display/display.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.mat-select {\r\n  /*display: inline-block;*/\r\n  border: 1px solid #adadad;\r\n  width: 100%;\r\n  padding: 6px 2px;\r\n  margin-bottom: 0;\r\n  font-size: 12px;\r\n  font-weight: 100;\r\n  line-height: 1.1;\r\n  text-align: left;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n  background-image: none;\r\n  border-radius: 4px;\r\n\r\n\r\n}\r\n::ng-deep .mat-form-field-underline {\r\n  display: none;\r\n}\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  padding: 6px 2px;\r\n  text-align: center;\r\n  line-height: 2;\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n  color: grey;\r\n}\r\n.center {\r\n  margin-left: 10%;\r\n  margin-right: 10%;\r\n}\r\n.highlightText {\r\n  background: yellow;\r\n}\r\n/*************************************/\r\n.tool_Home {\r\n  display: flex;\r\n}\r\n.content-left {\r\n  width: calc(65% - 30px);\r\n  min-width: 980px;\r\n  padding: 20px 0 20px 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.content-right {\r\n  width: calc(35% - 30px);\r\n  min-width: 630px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n.h-flex{\r\n  display: flex;\r\n  gap: 2em\r\n}\r\n.mat-input-element-fix {\r\n  margin-left: -18px;\r\n  margin-right: 18px;\r\n}\r\n.pt-1 {\r\n  margin-top: 23px;\r\n}\r\n.w-20 {\r\n  width: 20%;\r\n}\r\n.w-40 {\r\n  width: 40%;\r\n  max-width: 350px;\r\n}\r\n.stepReset, .stepVisualize, .stepDownload, .stepDownloadText {\r\n  height: 41px;\r\n}\r\n.buttonLaTool {\r\n  margin: 0;\r\n}\r\n.extendedMetrics {\r\n  max-height: 250px;\r\n  padding-bottom: 0;\r\n}\r\n.extendedMetricsTable {\r\n  width: calc(100% - 40px);\r\n  padding: 0 20px 20px 20px\r\n}\r\n.logout-button {\r\n  padding-left: 12px;\r\n  padding-right: 12px;\r\n  width: 74px\r\n}\r\n.login-button {\r\n  padding-left: 18px;\r\n  padding-right: 18px;\r\n  width: 74px\r\n}\r\n.selected-indicators-wrapper {\r\n  overflow: auto;\r\n}\r\n.selected-indicators-label {\r\n  margin-top: 20px;\r\n  color: rgb(128, 128, 128);\r\n  font-size: 15px;\r\n  font-weight: 500;\r\n}\r\nul {\r\n  display: block;\r\n  list-style-type: disc;\r\n  -webkit-margin-before: 0.5em;\r\n          margin-block-start: 0.5em;\r\n  -webkit-margin-after: 0.5em;\r\n          margin-block-end: 0.5em;\r\n  -webkit-margin-start: 0;\r\n          margin-inline-start: 0;\r\n  -webkit-margin-end: 0;\r\n          margin-inline-end: 0;\r\n  -webkit-padding-start: 20px;\r\n          padding-inline-start: 20px;\r\n}\r\n.verdictContent {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-bottom: 1em;\r\n}\r\n.verdictRow {\r\n    display: flex;\r\n}\r\n.verdictLabel {\r\n    font-weight: bold;\r\n    padding-bottom: 0.5em;\r\n    width: 6.7em;\r\n}\r\n.generateButton {\r\n    width: 15em;\r\n    margin-top: 1em;\r\n}\r\n.indicator-summary {\r\n    color: green;\r\n    width: 500px;\r\n    padding-bottom: 1em;\r\n}\r\n.mat-dialog-content {\r\n    overflow-x: hidden;\r\n    padding-bottom: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjs7O0FBR3BCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpREFBaUQ7RUFDakQsV0FBVztBQUNiO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQSxzQ0FBc0M7QUFFdEM7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGFBQWE7RUFDYjtBQUNGO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QjtBQUNGO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDRCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsMkJBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix1QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIsMkJBQTBCO1VBQTFCLDBCQUEwQjtBQUM1QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2Rpc3BsYXkvZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXQtc2VsZWN0IHtcclxuICAvKmRpc3BsYXk6IGlubGluZS1ibG9jazsqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNnB4IDJweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcblxyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDZweCAycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG4uY2VudGVyIHtcclxuICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gIG1hcmdpbi1yaWdodDogMTAlO1xyXG59XHJcblxyXG4uaGlnaGxpZ2h0VGV4dCB7XHJcbiAgYmFja2dyb3VuZDogeWVsbG93O1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi50b29sX0hvbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5jb250ZW50LWxlZnQge1xyXG4gIHdpZHRoOiBjYWxjKDY1JSAtIDMwcHgpO1xyXG4gIG1pbi13aWR0aDogOTgwcHg7XHJcbiAgcGFkZGluZzogMjBweCAwIDIwcHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5jb250ZW50LXJpZ2h0IHtcclxuICB3aWR0aDogY2FsYygzNSUgLSAzMHB4KTtcclxuICBtaW4td2lkdGg6IDYzMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaC1mbGV4e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyZW1cclxufVxyXG5cclxuLm1hdC1pbnB1dC1lbGVtZW50LWZpeCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xOHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMThweDtcclxufVxyXG5cclxuLnB0LTEge1xyXG4gIG1hcmdpbi10b3A6IDIzcHg7XHJcbn1cclxuXHJcbi53LTIwIHtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4udy00MCB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBtYXgtd2lkdGg6IDM1MHB4O1xyXG59XHJcblxyXG4uc3RlcFJlc2V0LCAuc3RlcFZpc3VhbGl6ZSwgLnN0ZXBEb3dubG9hZCwgLnN0ZXBEb3dubG9hZFRleHQge1xyXG4gIGhlaWdodDogNDFweDtcclxufVxyXG5cclxuLmJ1dHRvbkxhVG9vbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZXh0ZW5kZWRNZXRyaWNzIHtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmV4dGVuZGVkTWV0cmljc1RhYmxlIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XHJcbiAgcGFkZGluZzogMCAyMHB4IDIwcHggMjBweFxyXG59XHJcblxyXG4ubG9nb3V0LWJ1dHRvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgd2lkdGg6IDc0cHhcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDc0cHhcclxufVxyXG5cclxuLnNlbGVjdGVkLWluZGljYXRvcnMtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zZWxlY3RlZC1pbmRpY2F0b3JzLWxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiByZ2IoMTI4LCAxMjgsIDEyOCk7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbnVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwLjVlbTtcclxuICBtYXJnaW4tYmxvY2stZW5kOiAwLjVlbTtcclxuICBtYXJnaW4taW5saW5lLXN0YXJ0OiAwO1xyXG4gIG1hcmdpbi1pbmxpbmUtZW5kOiAwO1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAyMHB4O1xyXG59XHJcblxyXG4udmVyZGljdENvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4udmVyZGljdFJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udmVyZGljdExhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG4gICAgd2lkdGg6IDYuN2VtO1xyXG59XHJcblxyXG4uZ2VuZXJhdGVCdXR0b24ge1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5pbmRpY2F0b3Itc3VtbWFyeSB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/component/display/display.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/display/display.component.ts ***!
  \********************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_chart_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/chart-helper.service */ "./src/app/chart-helper.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../header/header.service */ "./src/app/component/header/header.service.ts");










let DisplayComponent = class DisplayComponent {
    constructor(dataService, chartHelperService, router, snackbar, dialog, sanitizer, headerTemplateService) {
        this.dataService = dataService;
        this.chartHelperService = chartHelperService;
        this.router = router;
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.sanitizer = sanitizer;
        this.headerTemplateService = headerTemplateService;
        this.name = [];
        this.options = []; // learning events options
        this.element = document.getElementById("header");
        this.ind_list = [];
        this.checkedMap = new Map();
        this.indicatorMap = new Map();
        this.selectedLearningEvents = [];
        this.previousSelectedEvents = [];
        this.selectedLearningActivities = [];
        this.headerTemplateService.setHeader('display');
        this.loggedIn = JSON.parse(localStorage.getItem('currentUser'));
        this.treeData$ = this.dataService.getdata();
    }
    ngOnInit() {
        this.fetchdata();
        this.loadScript();
        this.checkForNotVerifiedIndicators();
        this.dropdownSettings = {
            singleSelection: false,
            idField: "item_id",
            textField: "item_text",
            selectAllText: "Select All",
            unSelectAllText: "Deselect All",
            itemsShowLimit: 3,
            allowSearchFilter: true,
        };
    }
    // fetches Data from Database and retrieves previous selected Entities from LocalStorage to initialize with
    fetchdata() {
        const previousSelectedEvents = JSON.parse(localStorage.getItem('selectedEventsInit'));
        const previousSelectedActivities = JSON.parse(localStorage.getItem('selectedActivitiesInit'));
        const previousSelectedIndicators = JSON.parse(localStorage.getItem('selectedIndicatorsInit'));
        this.learningEventsOptions$ = this.dataService.getEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(learningEvents => {
            return learningEvents.map(learningEvent => {
                return learningEvent.name;
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["tap"])(options => {
            this.allEventOptions = options;
            this.initFromLocalStorage(previousSelectedEvents, previousSelectedActivities, previousSelectedIndicators);
        }));
    }
    //Initializes Dropdowns and selected Indicators with given attributes
    initFromLocalStorage(events, activities, indicators) {
        if (events) {
            this.onEventValueChange(events, true);
            this.selectedLearningEvents = events;
        }
        else {
            this.onEventValueChange(this.allEventOptions, true);
        }
        if (activities) {
            this.selectedLearningActivities = activities;
            this.onActivitySelectChange();
        }
        if (indicators) {
            indicators.forEach(indicator => {
                this.checkedMap.set(indicator._id, true);
                this.indicatorMap.set(indicator._id, indicator);
            });
            localStorage.setItem("selectedIndicatorsInit", JSON.stringify(indicators));
            this.ind_list = indicators.map(indicator => indicator.Title);
        }
    }
    // Handles changes in the Event Dropdown. Filters TableData and options for activity dropdown corresponding
    // to selected Events. Saves selected Events in LocalStorage
    onEventValueChange(eventValue, init) {
        if (this.eventsChanged(eventValue) || init) {
            if (eventValue.length === 0) {
                eventValue = this.allEventOptions;
            }
            this.resetTable(true);
            this.selectedLearningEvents$ = this.treeData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(learningEvents => {
                return learningEvents.filter(learningEvent => eventValue.includes(learningEvent.name));
            }));
            this.tableData$ = this.selectedLearningEvents$;
            this.learningActivitiesOptions$ = this.tableData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(learningEvents => {
                return [].concat(...learningEvents.map(learningEvent => learningEvent.activities));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((learningActivities) => {
                return [...new Set(learningActivities.map(learningActivity => learningActivity.name))];
            }));
            setTimeout(() => {
                localStorage.setItem("selectedEventsInit", JSON.stringify(this.selectedLearningEvents));
            });
        }
    }
    eventsChanged(currentEvents) {
        const eventSet = new Set([...this.previousSelectedEvents, ...currentEvents]);
        return [...eventSet.values()].length !== this.previousSelectedEvents.length || [...eventSet.values()].length !== currentEvents.length;
    }
    onOpen() {
        this.previousSelectedEvents = this.selectedLearningEvents;
    }
    // resets the Table and clears table data stored in LocalStorage
    resetTable(withActivities) {
        if (withActivities) {
            this.selectedLearningActivities = []; //empty the seleted list of Activities after event change
            localStorage.removeItem("selectedActivitiesInit");
        }
        this.ind_list = []; //empty the seleted list of indicators after event an Event change
        this.indicatorMap.clear();
        this.checkedMap.clear();
        localStorage.removeItem("selectedIndicatorsInit");
        this.searchInd = ""; //empty
        this.searchMat = ""; //empty
    }
    // Filters TableData corresponding to selected Activities and save those in LocalStorage
    onActivitySelectChange() {
        this.resetTable();
        this.determineTableDataBySelectedEventsAndActivities();
        setTimeout(() => {
            localStorage.setItem("selectedActivitiesInit", JSON.stringify(this.selectedLearningActivities));
        });
    }
    // Filters Table Data depending on Events and Activities selected
    determineTableDataBySelectedEventsAndActivities() {
        if (this.selectedLearningActivities.length === 0) {
            this.tableData$ = this.selectedLearningEvents$;
        }
        else {
            this.tableData$ = this.selectedLearningEvents$.pipe(
            // remove Activities from Events which are not selected
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(learningEvents => {
                return learningEvents.map(learningEvent => {
                    learningEvent.activities = learningEvent.activities.filter(activity => {
                        return this.selectedLearningActivities.includes(activity.name);
                    });
                    return learningEvent;
                });
            }), 
            // remove Events which have no Activity left
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(learningEvents => {
                return learningEvents.filter(learningEvent => learningEvent.activities.length > 0);
            }));
        }
    }
    // Filters Table Data depending on Search Strings entered in Indicator and Metric Search
    determineFilteredTableDataByIndicatorAndMetricText() {
        const indicatorFiltered = (this.searchInd && this.searchInd !== "");
        const metricFiltered = (this.searchMat && this.searchMat !== "");
        if (!indicatorFiltered && !metricFiltered) {
            this.determineTableDataBySelectedEventsAndActivities();
        }
        else {
            if (indicatorFiltered) {
                this.filterTableDataByIndicatorSearch();
            }
            if (metricFiltered) {
                this.filterTableDataByMetricSearch();
            }
        }
    }
    filterTableDataByIndicatorSearch() {
        this.tableData$ = this.tableData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(learningEvents => {
            return learningEvents.map(event => {
                event.activities.map(activity => {
                    activity.indicators = activity.indicators.filter(indicator => {
                        return `${indicator.Title} ${indicator.referenceNumber}`.toLowerCase().includes(this.searchInd.toLowerCase());
                    });
                    return activity;
                });
                event.activities = event.activities.filter(activity => activity.indicators.length > 0);
                return event;
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(learningEvents => {
            return learningEvents.filter(learningEvent => learningEvent.activities.length > 0);
        }));
    }
    filterTableDataByMetricSearch() {
        this.tableData$ = this.tableData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(learningEvents => {
            return learningEvents.map(event => {
                event.activities.map(activity => {
                    activity.indicators = activity.indicators.filter(indicator => {
                        return indicator.metrics.toLowerCase().includes(this.searchMat.toLowerCase());
                    });
                    return activity;
                });
                event.activities = event.activities.filter(activity => activity.indicators.length > 0);
                return event;
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(learningEvents => {
            return learningEvents.filter(learningEvent => learningEvent.activities.length > 0);
        }));
    }
    // pop up by click Indicator to show meterics
    getMeterics(indicator) {
        this.metrics_list = indicator.metrics.split(",");
        this.dialog.open(this.secondDialog, { data: indicator });
    }
    //function for checkbox to select indicator and save selection in LocalStorage
    onCheckboxChange(indic) {
        const checked = !this.checkedMap.get(indic._id);
        this.checkedMap.set(indic._id, checked);
        if (checked) {
            this.ind_list.push(indic.Title);
            this.indicatorMap.set(indic._id, indic);
        }
        else {
            console.log(this.ind_list);
            console.log(indic.Title);
            console.log(this.ind_list.indexOf(indic.Title));
            const index = this.ind_list.indexOf(indic.Title);
            if (index !== -1) {
                this.ind_list.splice(index, 1);
                this.indicatorMap.set(indic._id, null);
            }
        }
        setTimeout(() => {
            localStorage.setItem("selectedIndicatorsInit", JSON.stringify([...this.indicatorMap.values()].filter(i => i)));
        });
    }
    // method to check if at least one indicator is selected
    atLeastOneChecked() {
        return [...this.checkedMap.values()].includes(true);
    }
    // Transforms selected indicators into a downloadable .txt file
    textClicked() {
        const selectedIndicatorList = [...this.indicatorMap.values()].filter(indicator => indicator);
        const mimeType = 'text/plain';
        const filename = 'Indicators TEXT.txt';
        if (selectedIndicatorList.length > 0) {
            const content = selectedIndicatorList.map((indicator, index) => {
                return `${index + 1} Indicator Name: ${indicator.Title}${indicator.referenceNumber}\n\tMetrics: ${indicator.metrics}\n\n`;
            }).join('');
            var a = document.createElement('a');
            var blob = new Blob([content], { type: mimeType });
            var url = URL.createObjectURL(blob);
            a.setAttribute('href', url);
            a.setAttribute('download', filename);
            a.click();
        }
        else {
            window.alert("No indicator is selected");
        }
    }
    // Transforms selected indicators into a downloadable .json file
    jsonClicked() {
        const selectedIndicatorList = [...this.indicatorMap.values()].filter(indicator => indicator);
        if (selectedIndicatorList.length > 0) {
            const indicatorObjects = selectedIndicatorList.map(indicator => {
                return { [`${indicator.Title}${indicator.referenceNumber}`]: indicator.metrics.split(",") };
            });
            // Convert the text to BLOB.
            let textToBLOB = new Blob([
                JSON.stringify({
                    indicator: indicatorObjects,
                }),
            ], { type: "application/json" });
            let sFileName = "indicators JSON.json"; // The file to save the data.
            let newLink = document.createElement("a");
            newLink.download = sFileName;
            if (window.webkitURL != null) {
                newLink.href = window.webkitURL.createObjectURL(textToBLOB);
            }
            else {
                newLink.href = window.URL.createObjectURL(textToBLOB);
                newLink.style.display = "none";
                // document.body.appendChild(newLink);
            }
            newLink.click();
        }
        else {
            window.alert("No indicator is selected");
        }
    }
    ;
    // removes all saved Table states from LocalStorage and clears all selected Events/Activities/Indicators
    reset() {
        localStorage.removeItem("selectedEventsInit");
        localStorage.removeItem("selectedActivitiesInit");
        localStorage.removeItem("selectedIndicatorsInit");
        this.ind_list = [];
        this.checkedMap.clear();
        this.indicatorMap.clear();
        this.selectedLearningEvents = [];
        this.onEventValueChange(this.allEventOptions, true);
        localStorage.removeItem("check");
    }
    /*
      This function pushes all selected indicators in an array
      and stores them in localStorage, so the drop down menu in the dashboard page can display the selected indicators even after refreshing the page
      We also store the "check" property in localStorage so the check marks stay checked when the user returns to the display component
      */
    visualizeClicked() {
        const indicatorNames = [];
        const indicatorReferences = [];
        //our Map of selected indicators is transformed to an Array of [indicatorReference, indicator]
        [...this.indicatorMap.entries()].forEach(array => {
            if (array[1]) {
                indicatorReferences.push(array[1].referenceNumber);
                indicatorNames.push(array[1].Title);
            }
        });
        //this.chartHelperService.setSettings("selectedLearningEvents", selectedLearningEvents);
        this.chartHelperService.setSettings("selectedIndicators", indicatorNames);
        this.chartHelperService.setSettings("referenceNumbers", indicatorReferences);
        if (indicatorNames.length > 0) {
            localStorage.setItem("selectedEventsInit", JSON.stringify(this.selectedLearningEvents));
            localStorage.setItem("selectedActivitiesInit", JSON.stringify(this.selectedLearningActivities));
            localStorage.setItem("selectedIndicatorsInit", JSON.stringify([...this.indicatorMap.values()].filter(i => i)));
            this.router.navigate(["/dashboard"]);
        }
        else {
            window.alert("No indicator is selected");
        }
    }
    ;
    // Scrolls back to the top of the page
    backToTop() {
        this.element.scrollIntoView({ behavior: "smooth" });
    }
    //will solve the issue of comming back from another page
    loadScript() {
        let node = document.createElement("script"); // create script tag
        node.src = "assets/js/tooltipJS.js"; // set source
        node.type = "text/javascript";
        node.async = true; // makes script run asynchronously
        node.charset = "utf-8";
        // append to head of document
        document.getElementsByTagName("head")[0].appendChild(node);
    }
    // method to open the review Dialog
    onReview(indicator) {
        this.dialog.open(this.reviewDialog, { data: indicator });
    }
    // method to open the verdict Dialog
    onVerdict(indicator) {
        this.metricsIndicatorTitle = indicator.Title.trim();
        this.dataService.getReferenceByReferenceNumber(indicator.referenceNumber).subscribe(reference => {
            if (reference) {
                this.dialog.open(this.verdictDialog, { data: reference });
            }
            else {
                window.alert('Reference has been deleted.');
            }
        });
    }
    onDelete(data) {
        this.dialog.open(this.deleteDialog, { data: { indicator: data.indicator, activity: data.activity } });
    }
    onVerify(indicator) {
        this.dataService.verifyIndicator(indicator._id).subscribe(() => {
            indicator.verified = true;
            this.checkForNotVerifiedIndicators();
        });
    }
    // navigates to logIn
    logIn() {
        this.router.navigate(['/login'], { state: { url: '/', additionalInfo: null } });
    }
    // logs out user => clear currentUser data from LocalStorage
    logout() {
        localStorage.removeItem('currentUser');
        this.loggedIn = undefined;
    }
    // clears indicator from selected indicators if indicator gets deleted
    indicatorDeleted(indicator) {
        if (this.checkedMap.get(indicator._id)) {
            this.onCheckboxChange(indicator);
        }
    }
    // method to generate the old/previous Tree Structure DataBase and export it as .json file
    generateTreeStructure() {
        this.dataService.getdata().subscribe(treeDataNew => {
            const oldTreeStructure = treeDataNew.map(event => {
                return {
                    LearningEvents: event.name,
                    LearningActivities: event.activities.map(activity => {
                        return {
                            Name: activity.name,
                            indicator: activity.indicators.map(indicator => {
                                return {
                                    indicatorName: indicator.Title.trim() + " " + indicator.referenceNumber,
                                    metrics: indicator.metrics
                                };
                            })
                        };
                    })
                };
            });
            this.dataService.generateOldTreeStructure(oldTreeStructure).subscribe(success => {
                if (success) {
                    window.alert("Successfully generated TreeStructure");
                }
                else {
                    window.alert("Could not generate TreeStructure. Further information can be found in the logs");
                }
            });
            this.exportToJSON(oldTreeStructure);
        });
    }
    // method to export the given treeStructure as Json
    exportToJSON(oldTreeStructure) {
        // Convert the text to BLOB.
        let textToBLOB = new Blob([
            JSON.stringify(oldTreeStructure),
        ], { type: "application/json" });
        let sFileName = "treeStructure.json"; // The file to save the data.
        let newLink = document.createElement("a");
        newLink.download = sFileName;
        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            // document.body.appendChild(newLink);
        }
        newLink.click();
    }
    // method to navigate to the Reference edit of the Reference which belongs to the omitted id
    editReference(id) {
        this.router.navigate([`reference/${id}/edit`]);
    }
    deleteIndicator(indicator) {
        if (confirm("Do you really want to delete this Indicator?")) {
            this.indicatorDeleted(indicator);
            this.dataService.deleteIndicator(indicator._id).subscribe(() => {
                this.fetchdata();
            });
        }
    }
    removeIndicatorFromActivity(data) {
        this.dataService.removeIndicatorFromActivity(data.activity._id, data.indicator._id).subscribe(success => {
            if (success) {
                this.fetchdata();
            }
            else {
                if (confirm('This activity is the only one assigned to the indicator. Do you wish to delete the entire indicator?')) {
                    this.indicatorDeleted(data.indicator);
                    this.dataService.deleteIndicator(data.indicator._id).subscribe(() => {
                        this.fetchdata();
                    });
                }
            }
        });
    }
    checkForNotVerifiedIndicators() {
        this.dataService.getIndicators().subscribe(indicators => {
            const notVerifiedIndicator = indicators.find(indicator => !indicator.verified);
            this.notVerifiedIndicatorExists = !!notVerifiedIndicator;
        });
    }
};
DisplayComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: src_app_chart_helper_service__WEBPACK_IMPORTED_MODULE_7__["ChartHelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
    { type: _header_header_service__WEBPACK_IMPORTED_MODULE_9__["HeaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("secondDialog", { static: true })
], DisplayComponent.prototype, "secondDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("reviewDialog", { static: true })
], DisplayComponent.prototype, "reviewDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("verdictDialog", { static: true })
], DisplayComponent.prototype, "verdictDialog", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("deleteDialog", { static: true })
], DisplayComponent.prototype, "deleteDialog", void 0);
DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-display",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./display.component.css */ "./src/app/component/display/display.component.css")).default]
    })
], DisplayComponent);



/***/ }),

/***/ "./src/app/component/display/filter.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/component/display/filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let SanitizeHtmlPipe = class SanitizeHtmlPipe {
    constructor(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    transform(text, search) {
        if (search && text) {
            let pattern = search.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter((t) => {
                return t.length > 0;
            }).join(' ');
            const regex = new RegExp(pattern, 'gi');
            return this._sanitizer.bypassSecurityTrustHtml(text.replace(regex, (match) => `<span style="background-color: yellow;">${match}</span>`));
        }
        else {
            return text;
        }
    }
};
SanitizeHtmlPipe.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
SanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'sanitizeHtml'
    })
], SanitizeHtmlPipe);



/***/ }),

/***/ "./src/app/component/display/select-check-all.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/component/display/select-check-all.component.ts ***!
  \*****************************************************************/
/*! exports provided: SelectCheckAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectCheckAllComponent", function() { return SelectCheckAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SelectCheckAllComponent = class SelectCheckAllComponent {
    constructor() {
        this.values = [];
        this.text = 'Select All';
        this.sendCount = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        // this.model.update.emit(this.values);
    }
    isChecked() {
        if (!this.model || !this.values) {
            return false;
        }
        else {
            return this.model.value.length === this.values.length;
        }
    }
    isIndeterminate() {
        if (!this.model || !this.values) {
            return false;
        }
        return this.model.value.length
            && this.model.value.length < this.values.length;
    }
    toggleSelection(change) {
        if (change.checked) {
            this.model.update.emit(this.values);
            this.sendCount.emit(this.values);
        }
        else {
            this.model.update.emit([]);
            this.sendCount.emit(this.values);
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectCheckAllComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectCheckAllComponent.prototype, "values", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectCheckAllComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SelectCheckAllComponent.prototype, "sendCount", void 0);
SelectCheckAllComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-check-all',
        template: `
    <mat-checkbox class="mat-option"
                [disableRipple]="true"
                [indeterminate]="isIndeterminate()"
                [checked]="isChecked()"
                (click)="$event.stopPropagation()"
                (change)="toggleSelection($event)"
                >
      {{text}}
    </mat-checkbox>
  `,
        styles: [""]
    })
], SelectCheckAllComponent);



/***/ }),

/***/ "./src/app/component/display/table/table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/display/table/table.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".w-100 {\r\n  width: 100%;\r\n}\r\n\r\n.w-50 {\r\n  width: 50%;\r\n}\r\n\r\nth {\r\n  color: grey;\r\n  font-size: .85em;\r\n  letter-spacing: .1em;\r\n  text-transform: uppercase;\r\n  text-align: left;\r\n  padding-left: 1em;\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.learningactivities {\r\n  width: 170px;\r\n}\r\n\r\n.activities:nth-child(odd) {\r\n  .learningactivities {\r\n    background-color: #f1f1f1;\r\n  }\r\n\r\n  .indicator {\r\n    background-color: #f1f1f1;\r\n  }\r\n}\r\n\r\n.activities:nth-child(even) {\r\n  .learningactivities {\r\n    background-color: #e5e5e5;\r\n  }\r\n\r\n  .indicator {\r\n    background-color: #e5e5e5;\r\n  }\r\n}\r\n\r\n.leraningevents:nth-child(odd) {\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.leraningevents {\r\n  width: 120px;\r\n}\r\n\r\n.sortable {\r\n  cursor: pointer;\r\n}\r\n\r\n.review-icon, .reference-icon {\r\n  margin-left: 0.3em;\r\n}\r\n\r\n.indicator-content {\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n\r\n.indicator-text {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.not-yet-verified {\r\n    background-color: #8e1e2254 !important;\r\n}\r\n\r\n.not-verified-indicators {\r\n    color: rgba(63, 81, 181, 0.82);\r\n    margin-left: 1em;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2Rpc3BsYXkvdGFibGUvdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZGlzcGxheS90YWJsZS90YWJsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnctMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnctNTAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbnRoIHtcclxuICBjb2xvcjogZ3JleTtcclxuICBmb250LXNpemU6IC44NWVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XHJcbn1cclxuXHJcbi5sZWFybmluZ2FjdGl2aXRpZXMge1xyXG4gIHdpZHRoOiAxNzBweDtcclxufVxyXG5cclxuLmFjdGl2aXRpZXM6bnRoLWNoaWxkKG9kZCkge1xyXG4gIC5sZWFybmluZ2FjdGl2aXRpZXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIC5pbmRpY2F0b3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcbn1cclxuXHJcbi5hY3Rpdml0aWVzOm50aC1jaGlsZChldmVuKSB7XHJcbiAgLmxlYXJuaW5nYWN0aXZpdGllcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gIH1cclxuXHJcbiAgLmluZGljYXRvciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gIH1cclxufVxyXG5cclxuLmxlcmFuaW5nZXZlbnRzOm50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4ubGVyYW5pbmdldmVudHMge1xyXG4gIHdpZHRoOiAxMjBweDtcclxufVxyXG5cclxuLnNvcnRhYmxlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZXZpZXctaWNvbiwgLnJlZmVyZW5jZS1pY29uIHtcclxuICBtYXJnaW4tbGVmdDogMC4zZW07XHJcbn1cclxuXHJcbi5pbmRpY2F0b3ItY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmluZGljYXRvci10ZXh0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLm5vdC15ZXQtdmVyaWZpZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhlMWUyMjU0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3QtdmVyaWZpZWQtaW5kaWNhdG9ycyB7XHJcbiAgICBjb2xvcjogcmdiYSg2MywgODEsIDE4MSwgMC44Mik7XHJcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/component/display/table/table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/display/table/table.component.ts ***!
  \************************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TableComponent = class TableComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.checkboxEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.getMetericsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onReviewEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onVerdictEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDeleteEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onVerifyEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    // emits the indicator when the checkbox is clicked
    onCheckboxChange(indic) {
        this.checkboxEmitter.emit(indic);
    }
    // navigates to edit of indicator
    editAsSuperAdmin(indic) {
        this.router.navigate([`indicator/${indic._id}/edit`]);
    }
    // computes the original indicator name with referenceNumber
    getFullIndicatorName(indic) {
        return `${indic.Title} ${indic.referenceNumber}`;
    }
    // navigates to the link corresponding to the reference of the chosen indicator
    navigateToReferenceLink(indic) {
        this.dataService.getReferenceByReferenceNumber(indic.referenceNumber).subscribe(reference => {
            window.open(reference.link);
        });
    }
};
TableComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "data", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "searchInd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "searchMat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "checkedMap", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "notVerifiedIndicator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "checkboxEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "getMetericsEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "onReviewEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "onVerdictEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "onDeleteEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "onVerifyEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "loggedIn", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/display/table/table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.css */ "./src/app/component/display/table/table.component.css")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/component/dropdown/dropdown.component.css":
/*!***********************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/component/dropdown/dropdown.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/dropdown/dropdown.component.ts ***!
  \**********************************************************/
/*! exports provided: DropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownComponent", function() { return DropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let DropdownComponent = class DropdownComponent {
    constructor(fb) {
        this.fb = fb;
        this.learningevents = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.learningEvents = [];
        this.values = [];
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.text = 'Select All';
    }
    ngOnInit() {
        this.setLearningEvent();
    }
    setLearningEvent() {
    }
    changeLearningEvents(event, state) {
        this.valueChange.emit(state);
    }
};
DropdownComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "values", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], DropdownComponent.prototype, "valueChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DropdownComponent.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('allSelected', { static: false })
], DropdownComponent.prototype, "allSelected", void 0);
DropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dropdown",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dropdown.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/dropdown/dropdown.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dropdown.component.css */ "./src/app/component/dropdown/dropdown.component.css")).default]
    })
], DropdownComponent);



/***/ }),

/***/ "./src/app/component/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/header/header.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-spacer {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  .HeaderLogo {\r\n    cursor: pointer;\r\n  }\r\n\r\n  .buttonHead {\r\n  padding: 13px 26px;\r\n  text-align: center;\r\n  transition: 1s;\r\n  background-size: 1051% auto;\r\n  color: white;\r\n  border-radius: 4px;\r\n  display: inline-block;\r\n  border: 0;\r\n  background-image: linear-gradient(45deg, #3f51b5 10%, #a1bcde 51%, #3f51b5 100%);\r\n  cursor: pointer;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  -webkit-user-select: none;\r\n  touch-action: manipulation;\r\n  font-size: 15px;\r\n  height: 100%\r\n}\r\n\r\n  .buttonHead:hover {\r\n  background-position: right center;\r\n  /* change the direction of the change here */\r\n  color: #fff;\r\n  text-decoration: none;\r\n}\r\n\r\n  .buttonHead:active {\r\n  transform: scale(0.80);\r\n}\r\n\r\n  /*RUBEN STUFF*/\r\n\r\n  .template-container-display {\r\n  width: 100%;\r\n  padding-left: 3em;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n  .right-buttons {\r\n  display: flex;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUdGO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxnRkFBZ0Y7RUFDaEYsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsZUFBZTtFQUNmO0FBQ0Y7O0VBRUE7RUFDRSxpQ0FBaUM7RUFDakMsNENBQTRDO0VBQzVDLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0VBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0VBR0EsY0FBYzs7RUFFZDtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7RUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuICAuSGVhZGVyTG9nbyB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbi5idXR0b25IZWFkIHtcclxuICBwYWRkaW5nOiAxM3B4IDI2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IDFzO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTA1MSUgYXV0bztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjM2Y1MWI1IDEwJSwgI2ExYmNkZSA1MSUsICMzZjUxYjUgMTAwJSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGhlaWdodDogMTAwJVxyXG59XHJcblxyXG4uYnV0dG9uSGVhZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyO1xyXG4gIC8qIGNoYW5nZSB0aGUgZGlyZWN0aW9uIG9mIHRoZSBjaGFuZ2UgaGVyZSAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmJ1dHRvbkhlYWQ6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuODApO1xyXG59XHJcblxyXG5cclxuLypSVUJFTiBTVFVGRiovXHJcblxyXG4udGVtcGxhdGUtY29udGFpbmVyLWRpc3BsYXkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogM2VtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucmlnaHQtYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/component/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.service */ "./src/app/component/header/header.service.ts");
/* harmony import */ var _assets_js_tour_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/js/tour.service */ "./src/assets/js/tour.service.ts");






let HeaderComponent = class HeaderComponent {
    constructor(dataService, router, headerTemplateService, tourService) {
        this.dataService = dataService;
        this.router = router;
        this.headerTemplateService = headerTemplateService;
        this.tourService = tourService;
    }
    ngOnInit() {
        this.headerTemplateService.headerSubject.subscribe(headerString => {
            this.currentPage = headerString;
        });
    }
    addIndicators() {
        this.router.navigate(['/add']);
        //this.router.navigate([]).then(result => {  window.open( `/referance`, '_blank'); });
    }
    references() {
        this.router.navigate(['/reference']);
        //this.router.navigate([]).then(result => {  window.open( `/referance`, '_blank'); });
    }
    admin() {
        this.router.navigate(['/login']);
    }
    metrics() {
        this.router.navigate([]).then(result => {
            window.open(`/metrics`, '_blank');
        });
    }
    reset() {
        location.href = "/";
    }
    navigateHome() {
        this.router.navigate(['/']);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"] },
    { type: _assets_js_tour_service__WEBPACK_IMPORTED_MODULE_5__["TourService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("headerDisplay", { static: true })
], HeaderComponent.prototype, "headerDisplay", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/component/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/component/header/header.service.ts":
/*!****************************************************!*\
  !*** ./src/app/component/header/header.service.ts ***!
  \****************************************************/
/*! exports provided: HeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderService", function() { return HeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let HeaderService = class HeaderService {
    constructor() {
        this.headerSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    setHeader(header) {
        this.headerSubject.next(header);
    }
};
HeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], HeaderService);



/***/ }),

/***/ "./src/app/component/reference/referance.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/reference/referance.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".referenceItem {\r\n  padding-bottom: 1em;\r\n}\r\n\r\n.buttonLaTool {\r\n  margin: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3JlZmVyZW5jZS9yZWZlcmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7QUFDWCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWZlcmVuY2UvcmVmZXJhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVmZXJlbmNlSXRlbSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmJ1dHRvbkxhVG9vbCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/component/reference/referance.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/reference/referance.component.ts ***!
  \************************************************************/
/*! exports provided: ReferanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferanceComponent", function() { return ReferanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _display_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/display.component */ "./src/app/component/display/display.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.service */ "./src/app/component/header/header.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let ReferanceComponent = class ReferanceComponent {
    constructor(dataService, router, headerService) {
        this.dataService = dataService;
        this.router = router;
        this.element = document.getElementById("header");
        this.references$ = this.dataService.getReferences()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(references => this.sortByRefNumber(references)));
        this.DisplayComponent = _display_display_component__WEBPACK_IMPORTED_MODULE_2__["DisplayComponent"];
        headerService.setHeader('references');
        this.loggedIn = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
    }
    backToTop() {
        this.element.scrollIntoView({ behavior: "smooth" });
    }
    // reduces the link to its value after the https:// or www.
    shortenLink(link) {
        const splittedLink = link.split('//');
        let index = 0;
        if (splittedLink.length > 1) {
            index = 1;
        }
        if (splittedLink[index].includes('www.')) {
            return splittedLink[index].slice(4);
        }
        else {
            return splittedLink[index];
        }
    }
    // navigates to the edit page
    editAsSuperAdmin(id) {
        this.router.navigate([`reference/${id}/edit`]);
    }
    // deletes reference from database
    deleteAsSuperAdmin(reference) {
        if (confirm("Do you really want to delete this Reference?")) {
            this.dataService.deleteReference(reference).subscribe(() => {
                this.references$ = this.dataService.getReferences()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(references => this.sortByRefNumber(references)));
            });
        }
    }
    // Sort method to sort references by referenceNumber
    sortByRefNumber(references) {
        return references.sort((a, b) => {
            const numberA = this.extractNumberFromRefNumber(a.referenceNumber);
            const numberB = this.extractNumberFromRefNumber(b.referenceNumber);
            if (numberA > numberB) {
                return 1;
            }
            else {
                return -1;
            }
        });
    }
    // method to retrieve the number in brackets from a referenceNumber
    extractNumberFromRefNumber(refNumber) {
        return Number(refNumber.substring(1, refNumber.length - 1));
    }
};
ReferanceComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _header_header_service__WEBPACK_IMPORTED_MODULE_4__["HeaderService"] }
];
ReferanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-referance",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./referance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/reference/referance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./referance.component.css */ "./src/app/component/reference/referance.component.css")).default]
    })
], ReferanceComponent);



/***/ }),

/***/ "./src/app/component/review-display/review-display.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/review-display/review-display.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mx-1 {\r\n  margin-left: 0.25em;\r\n  margin-right: 0.25em;\r\n}\r\n\r\n.mx-2 {\r\n  margin-left: 0.5em;\r\n  margin-right: 0.5em;\r\n}\r\n\r\n.rating-header {\r\n  min-width: 500px;\r\n    display: flex;\r\n\r\n    justify-content: space-between;\r\n}\r\n\r\n.rating-wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin-bottom: 20px;\r\n  min-width: 500px;\r\n}\r\n\r\n.single-rating-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin: 0;\r\n}\r\n\r\n.reviewDialogContent {\r\n  margin-bottom: 0.5em;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.d-flex {\r\n  display: flex;\r\n}\r\n\r\n.fa-trash {\r\n  color: #e14b1b;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-pencil {\r\n  color: #575353;\r\n  cursor: pointer;\r\n}\r\n\r\n.reviewPlaceholder {\r\n  padding: 50px 110px 50px 110px;\r\n;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Jldmlldy1kaXNwbGF5L3Jldmlldy1kaXNwbGF5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtJQUNkLGFBQWE7O0lBRWIsOEJBQThCO0FBQ2xDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7O0FBRWhDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3Jldmlldy1kaXNwbGF5L3Jldmlldy1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXgtMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcclxufVxyXG5cclxuLm14LTIge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xyXG59XHJcblxyXG4ucmF0aW5nLWhlYWRlciB7XHJcbiAgbWluLXdpZHRoOiA1MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ucmF0aW5nLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbi5zaW5nbGUtcmF0aW5nLXdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucmV2aWV3RGlhbG9nQ29udGVudCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG4uZC1mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZmEtdHJhc2gge1xyXG4gIGNvbG9yOiAjZTE0YjFiO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZhLXBlbmNpbCB7XHJcbiAgY29sb3I6ICM1NzUzNTM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucmV2aWV3UGxhY2Vob2xkZXIge1xyXG4gIHBhZGRpbmc6IDUwcHggMTEwcHggNTBweCAxMTBweDtcclxuO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/component/review-display/review-display.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/review-display/review-display.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReviewDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewDisplayComponent", function() { return ReviewDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ReviewDisplayComponent = class ReviewDisplayComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.reviewExistsForUser = false;
        this.buttonLabel = 'Create Review';
        this.loggedIn = JSON.parse(localStorage.getItem('currentUser'));
    }
    ngOnInit() {
        this.getReviews();
    }
    // retrieves Reviews from the database and calculates the averages
    getReviews() {
        this.dataService.getReviews(this.indicator._id).subscribe((reviews) => {
            this.reviews = !this.loggedIn ? reviews : reviews.sort((e1, e2) => {
                if (e1.name === this.loggedIn.username) {
                    return -1;
                }
                else if (e2.name === this.loggedIn.username) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            if (this.loggedIn && this.reviews.length > 0 && this.reviews[0].name === this.loggedIn.username) {
                this.reviewExistsForUser = true;
                this.buttonLabel = 'Edit Review';
            }
            else {
                this.reviewExistsForUser = false;
                this.buttonLabel = 'Create Review';
            }
            this.calculateOverallAverage(reviews);
        });
    }
    // uses reviews from input to calculated the overall average over all categories
    calculateOverallAverage(reviews) {
        this.reviewAverage = {
            name: 'average',
            articleAnalysis: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleAnalysis, 0) / reviews.length,
            articleContribution: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleContribution, 0) / reviews.length,
            articleClarity: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleClarity, 0) / reviews.length,
            articleConclusion: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleConclusion, 0) / reviews.length,
            articleData: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.articleData, 0) / reviews.length,
            indicatorQuality: reviews.reduce((previousValue, currentValue) => previousValue + currentValue.indicatorQuality, 0) / reviews.length
        };
        this.totalAverage = (this.reviewAverage.articleAnalysis + this.reviewAverage.articleConclusion + this.reviewAverage.articleContribution +
            this.reviewAverage.articleClarity + this.reviewAverage.articleData + this.reviewAverage.indicatorQuality) / 6;
    }
    // uses review from input to calculated the avarage
    calculateAverage(review) {
        return (review.articleAnalysis + review.articleConclusion + review.articleContribution +
            review.articleClarity + review.articleData + review.indicatorQuality) / 6;
    }
    // navigates to add review page
    createReview() {
        this.router.navigate([`/review/add/${this.indicator._id}`]);
    }
    // navigates to edit review page
    editReview(reviewId) {
        this.router.navigate([`review/${reviewId}/edit`], { state: { additionalInfo: { indicator: this.indicator } } });
    }
    // depending on if a review already exists for the user, the method calls the edit or create method
    addReview() {
        if (this.reviewExistsForUser) {
            this.editReview(this.reviews[0]._id);
        }
        else {
            this.createReview();
        }
    }
    // navigates to login-page
    logIn() {
        this.router.navigate([`/review/add/${this.indicator._id}`], { state: { additionalInfo: { indicator: this.indicator } } });
    }
    // opens Edit dialog for the superadmin
    editAsSuperAdmin(reviewId) {
        this.editReview(reviewId);
    }
    // deletes review from database after confirmation in the browser
    deleteAsSuperAdmin(reviewId) {
        if (confirm("Do you really want to delete this Review?")) {
            this.dataService.deleteReview(reviewId).subscribe(() => {
                this.getReviews();
            });
        }
    }
};
ReviewDisplayComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ReviewDisplayComponent.prototype, "indicator", void 0);
ReviewDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./review-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/review-display/review-display.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./review-display.component.css */ "./src/app/component/review-display/review-display.component.css")).default]
    })
], ReviewDisplayComponent);



/***/ }),

/***/ "./src/app/component/review-edit/review-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/review-edit/review-edit.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-div {\r\n  margin: 50px;\r\n}\r\n\r\n.row {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.row-no-wrap {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    margin-bottom: .5em;\r\n}\r\n\r\n.column-100 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.column-25 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 25%;\r\n  min-width: 280px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.note-textarea {\r\n  max-width: 95%;\r\n  min-height: 100px;\r\n  font-size: initial;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.alert {\r\n  color: red;\r\n  font-size: small;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Jldmlldy1lZGl0L3Jldmlldy1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZXZpZXctZWRpdC9yZXZpZXctZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyLWRpdiB7XHJcbiAgbWFyZ2luOiA1MHB4O1xyXG59XHJcblxyXG4ucm93IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnJvdy1uby13cmFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcclxufVxyXG5cclxuLmNvbHVtbi0xMDAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uY29sdW1uLTI1IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtaW4td2lkdGg6IDI4MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5ub3RlLXRleHRhcmVhIHtcclxuICBtYXgtd2lkdGg6IDk1JTtcclxuICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/component/review-edit/review-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/review-edit/review-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ReviewEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewEditComponent", function() { return ReviewEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _header_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.service */ "./src/app/component/header/header.service.ts");






let ReviewEditComponent = class ReviewEditComponent {
    // initializes Edit page depending on the way the page was opened. Edit or New Review
    constructor(dataService, router, route, headerService) {
        this.dataService = dataService;
        this.router = router;
        this.route = route;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            indicatorId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            indicatorQuality: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            indicatorQualityNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            articleClarity: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            articleClarityNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            articleData: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            articleDataNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            articleAnalysis: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            articleAnalysisNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            articleConclusion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            articleConclusionNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            articleContribution: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            articleContributionNote: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        headerService.setHeader('add-review');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.reviewId = this.route.snapshot.params.id;
        if (this.reviewId) {
            this.dataService.getReviewById(this.reviewId).subscribe(review => {
                this.review = review;
                this.dataService.getIndicatorById(review.indicatorId).subscribe(indicator => {
                    this.indicator = indicator;
                    this.dataService.getReferenceByReferenceNumber(indicator.referenceNumber).subscribe(reference => {
                        this.reference = reference;
                    });
                });
            });
        }
        this.indicatorId = this.route.snapshot.params.indicatorId;
        if (this.indicatorId) {
            this.dataService.getIndicatorById(this.indicatorId).subscribe(indicator => {
                this.indicator = indicator;
                this.dataService.getReferenceByReferenceNumber(indicator.referenceNumber).subscribe(reference => {
                    this.reference = reference;
                });
            });
            this.dataService.getReviewByIndicatorIdAndUsername(this.indicatorId, this.currentUser.username).subscribe(review => {
                if (review) {
                    this.router.navigate([`review/${review._id}/edit`]);
                }
            });
        }
    }
    // initializes the form after a timeout for getting data from the backend
    ngOnInit() {
        setTimeout(() => {
            this.formGroup.controls['name'].setValue(this.currentUser.username);
            if (this.review) {
                this.initializeForm(this.review);
            }
        }, 100);
    }
    // if the form is valid saves a new or overwrites an exisiting review
    onSubmit() {
        this.formGroup.markAllAsTouched();
        if (!this.formGroup.valid) {
            return;
        }
        const data = this.formGroup.value;
        data.indicatorId = this.indicator._id;
        const saveReview$ = this.reviewId ?
            this.dataService.editReview(data) :
            this.dataService.addReview(data);
        saveReview$.subscribe(savedRating => {
            this.router.navigate(['/']);
        });
    }
    // sets formcontrol Value for given formcontrolName rating
    ratingChanged(formControlName, rating) {
        this.formGroup.controls[formControlName].setValue(rating);
    }
    // initializes Form
    initializeForm(review) {
        this.formGroup.setValue(review);
        this.indicatorQuality = review.indicatorQuality;
        this.articleClarity = review.articleClarity;
        this.articleData = review.articleData;
        this.articleAnalysis = review.articleAnalysis;
        this.articleConclusion = review.articleConclusion;
        this.articleContribution = review.articleContribution;
    }
    // deletes an existing Review
    deleteReview() {
        this.dataService.deleteReview(this.formGroup.controls['_id'].value).subscribe(savedRating => {
            this.router.navigate(['/']);
        });
    }
    // reduces the link string to only show the part after https:// or www.
    shortenLink(link) {
        const splittedLink = link.split('//');
        let index = 0;
        if (splittedLink.length > 1) {
            index = 1;
        }
        if (splittedLink[index].includes('www.')) {
            return splittedLink[index].slice(4);
        }
        else {
            return splittedLink[index];
        }
    }
};
ReviewEditComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _header_header_service__WEBPACK_IMPORTED_MODULE_5__["HeaderService"] }
];
ReviewEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./review-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/review-edit/review-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./review-edit.component.css */ "./src/app/component/review-edit/review-edit.component.css")).default]
    })
], ReviewEditComponent);



/***/ }),

/***/ "./src/app/component/star-rating/star-rating.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/star-rating/star-rating.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-icon-button[disabled] {\r\n  color: #f5d900;\r\n}\r\n\r\n.mat-icon-button {\r\n  height: 24px;\r\n  width: 24px;\r\n  color: #f5d900 !important;\r\n\r\n  .mat-icon {\r\n    line-height: 19px !important\r\n  }\r\n}\r\n\r\n:host ::ng-deep {\r\n  .mat-button-focus-overlay {\r\n    opacity: 0 !important;\r\n  }\r\n\r\n  /*.mat-button-wrapper {*/\r\n  /*  line-height: 19px !important*/\r\n  /*}*/\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3N0YXItcmF0aW5nL3N0YXItcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7O0VBRXpCO0lBQ0U7RUFDRjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUEsd0JBQXdCO0VBQ3hCLGlDQUFpQztFQUNqQyxJQUFJO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc3Rhci1yYXRpbmcvc3Rhci1yYXRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcclxuICBjb2xvcjogI2Y1ZDkwMDtcclxufVxyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGNvbG9yOiAjZjVkOTAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5tYXQtaWNvbiB7XHJcbiAgICBsaW5lLWhlaWdodDogMTlweCAhaW1wb3J0YW50XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAge1xyXG4gIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLyoubWF0LWJ1dHRvbi13cmFwcGVyIHsqL1xyXG4gIC8qICBsaW5lLWhlaWdodDogMTlweCAhaW1wb3J0YW50Ki9cclxuICAvKn0qL1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/component/star-rating/star-rating.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/star-rating/star-rating.component.ts ***!
  \****************************************************************/
/*! exports provided: StarRatingComponent, StarRatingColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingColor", function() { return StarRatingColor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StarRatingComponent = class StarRatingComponent {
    constructor() {
        this.rating = 3;
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.starCount = 5;
        this.color = 'primary';
        this.disabled = false;
        this.ratingArr = [];
    }
    // initializes the rating array
    ngOnInit() {
        for (let index = 0; index < this.starCount; index++) {
            this.ratingArr.push(index);
        }
        this.rating = Math.round(this.rating);
    }
    // emits rating changed to parent component
    onClick(rating) {
        if (!this.disabled) {
            this.ratingChange.emit(rating);
        }
        return false;
    }
    // decides which icon to show, depending on the rating
    showIcon(index) {
        if (this.rating >= index + 1) {
            return 'star';
        }
        else {
            return 'star_border';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rating')
], StarRatingComponent.prototype, "rating", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], StarRatingComponent.prototype, "ratingChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('starCount')
], StarRatingComponent.prototype, "starCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('color')
], StarRatingComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StarRatingComponent.prototype, "disabled", void 0);
StarRatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'mat-star-rating',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./star-rating.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/star-rating/star-rating.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./star-rating.component.css */ "./src/app/component/star-rating/star-rating.component.css")).default]
    })
], StarRatingComponent);

var StarRatingColor;
(function (StarRatingColor) {
    StarRatingColor["primary"] = "primary";
    StarRatingColor["accent"] = "accent";
    StarRatingColor["warn"] = "warn";
})(StarRatingColor || (StarRatingColor = {}));


/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DataService = class DataService {
    //68.65.123.130    OLD
    //198.187.29.73
    constructor(http) {
        this.http = http;
        //uri = 'https://programmingzen.org/openlair';
        //uri = 'https://backend.openlair.edutec.science/openlair'; //live
        //uri = 'http://localhost:49160/openlair';
        this.uri = 'http://localhost:3001/openlair'; //local
        //this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        //this.currentUser = this.currentUserSubject.asObservable();
    }
    getdata() {
        return this.http.get(`${this.uri}/display/data`);
    }
    getEvents() {
        return this.http.get(`${this.uri}/events`);
    }
    getActivities() {
        return this.http.get(`${this.uri}/activities`);
    }
    getActivitiesByIndicatorId(indicatorId) {
        return this.http.get(`${this.uri}/activities/indicator/${indicatorId}`);
    }
    getIndicators() {
        return this.http.get(`${this.uri}/indicators`);
    }
    getIndicatorById(id) {
        return this.http.get(`${this.uri}/indicator/${id}`);
    }
    verifyIndicator(id) {
        return this.http.put(`${this.uri}/indicator/verify`, { id });
    }
    getPathByIndicatorId(id) {
        return this.http.get(`${this.uri}/path/${id}`);
    }
    getPathByReferenceId(id) {
        return this.http.get(`${this.uri}/path/reference/${id}`);
    }
    getReviews(indicatorId) {
        return this.http.get(`${this.uri}/display/review/${indicatorId}`);
    }
    getReviewById(reviewId) {
        return this.http.get(`${this.uri}/display/review/${reviewId}/edit`);
    }
    getReviewByIndicatorIdAndUsername(indicatorId, username) {
        return this.http.get(`${this.uri}/display/review/${indicatorId}/${username}`);
    }
    addReview(review) {
        return this.http.post(`${this.uri}/review/add`, review);
    }
    editReview(review) {
        return this.http.put(`${this.uri}/review/edit`, review);
    }
    deleteReview(reviewId) {
        return this.http.delete(`${this.uri}/review/${reviewId}/delete`);
    }
    getReferences() {
        return this.http.get(`${this.uri}/reference`);
    }
    getReferenceById(referenceId) {
        return this.http.get(`${this.uri}/reference/${referenceId}`);
    }
    getReferenceByReferenceNumber(referenceNumber) {
        return this.http.get(`${this.uri}/reference/number/${referenceNumber}`);
    }
    updateReference(id, reference) {
        return this.http.put(`${this.uri}/reference/${id}/edit`, reference);
    }
    deleteReference(reference) {
        return this.http.delete(`${this.uri}/reference/${reference._id}/${reference.referenceNumber}/delete`);
    }
    getsearchresult(search) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/plain',
            })
        };
        return this.http.post(`${this.uri}/getsearchmetrics`, { search, httpOptions });
    }
    getsearchind(search) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/plain',
            })
        };
        return this.http.post(`${this.uri}/getsearchindicator`, { search, httpOptions });
    }
    addIndicatorAndReference(data) {
        return this.http.post(`${this.uri}/indicator/add`, data);
    }
    editIndicator(id, data) {
        return this.http.put(`${this.uri}/indicator/${id}/edit`, data);
    }
    deleteIndicator(indicatorId) {
        return this.http.delete(`${this.uri}/indicator/${indicatorId}/delete`);
    }
    removeIndicatorFromActivity(activityId, indicatorId) {
        return this.http.put(`${this.uri}/activity/${activityId}/remove`, { indicatorId });
    }
    login(username, password) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'text/plain',
            })
        };
        return this.http.post(`${this.uri}/login`, { username, password, httpOptions }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => {
            // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
            //user.authdata = window.btoa(username + ':' + password);
            //this.currentUserSubject.next(user);
            localStorage.setItem('currentUser', JSON.stringify(user));
            //return user;
        }));
    }
    register(user) {
        return this.http.post(`${this.uri}/register`, user);
    }
    isLoggedIn() {
        return this.loggedIn;
    }
    upload(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        return this.http.post(`${this.uri}/upload`, formData);
    }
    generateOldTreeStructure(oldTreeStructure) {
        return this.http.post(`${this.uri}/generate/treeStructure`, oldTreeStructure);
    }
    getEventsByActivityId(id) {
        return this.http.get(`${this.uri}/eventsByActivityId/${id}`);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/superAdmin/super-admin.service.ts":
/*!***************************************************!*\
  !*** ./src/app/superAdmin/super-admin.service.ts ***!
  \***************************************************/
/*! exports provided: SuperAdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminService", function() { return SuperAdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SuperAdminService = class SuperAdminService {
    constructor(router) {
        this.router = router;
    }
    // method to only allow logged in users with super-Admin rights to continue
    canActivate(route, state) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')); //this.dataService.currentUserValue;
        if (currentUser && currentUser.superAdmin) {
            return true;
        }
        else {
            this.router.navigate(['/reference']);
            return false;
        }
    }
};
SuperAdminService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SuperAdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SuperAdminService);



/***/ }),

/***/ "./src/assets/js/tour.service.ts":
/*!***************************************!*\
  !*** ./src/assets/js/tour.service.ts ***!
  \***************************************/
/*! exports provided: TourService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourService", function() { return TourService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var intro_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intro.js */ "./node_modules/intro.js/intro.module.js");



let TourService = class TourService {
    myTour() {
        var introguide = intro_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        // var startbtn   = $('#startdemotour');
        introguide.setOptions({
            steps: [
                {
                    element: '.step0',
                    intro: 'This guided tour will explain how Learning Analytics indicators archive OpenLAIR can be used. <br> You can Exit the tour anytime you want.',
                    position: 'bottom'
                },
                {
                    element: '.stepDefine',
                    intro: 'You can CLICK here anytime for the definition of each filter item. i.e. <br> - Learning Events <br> - Learning Activities <br> - Indicators <br> - Metrics <br>',
                    position: 'bottom'
                },
                {
                    element: '.step1',
                    intro: 'Step 1: Here you can select your Learning Events or Objectives.',
                    position: 'right'
                },
                {
                    element: '.step2',
                    intro: 'Step 2: Here you can select your Learning Activities.',
                    position: 'right'
                },
                {
                    element: '.step3',
                    intro: 'Step 3 (Optional): If you are looking for any specific Indicator, here you can search by indicator.',
                    position: 'right'
                },
                {
                    element: document.querySelector('.step4'),
                    intro: 'Step 4: Here you can select (x) the Indicator(s) you want.',
                    position: 'bottom'
                },
                {
                    element: document.querySelector('.stepViewMetrics'),
                    intro: 'If you want to see the Metrics CLICK on the Indicator. <br> Each indicator is followed by its reference "[No.]"',
                    position: 'right'
                },
                {
                    element: document.querySelector('.stepReview'),
                    intro: 'If you want to see the ratings for a specific indicator, or create a review yourself, just click the star icon.',
                    position: 'right'
                },
                {
                    element: '.stepMetrics',
                    intro: 'Step 5 (Optional): If you are looking for any specific Metric, here you can search by metrics.',
                    position: 'right'
                },
                {
                    element: '.stepVisualize',
                    intro: "Step 6: After selecting the indicator(s), CLICK here to VISUALIZE the chosen indicator(s). This will give you an idea of what type of visualization type one can use. <br> You can also download the Dashboard and use it as a mockup (e.g., for meetings/presentations). <br> <br> NOTE: The selected indicators that are similar will be plotted in a single visualization type. <br> <br> For example the selected indicators 'Predict Student Grades [115]' and 'Predict Final Grade [119]' will be plotted in a single visualization type.",
                    position: 'bottom'
                },
                {
                    element: '.stepDownload',
                    intro: "In case you want the selected indicator(s) in a JSON (.json) format/file. CLICK here to DOWNLOAD the Indicator(s) as JSON along with their Metrics.",
                    position: 'bottom'
                },
                {
                    element: '.stepDownloadText',
                    intro: "In case you want the selected indicator(s) in a TEXT (.txt) format/file. CLICK here to DOWNLOAD the Indicator(s) as TEXT along with their Metrics.",
                    position: 'bottom'
                },
                {
                    element: '.stepReset',
                    intro: "In case you want to Deselect the selected indicator(s) and RESET the filters. CLICK here to RESET.",
                    position: 'left'
                },
                {
                    element: '.stepReferences',
                    intro: "Here you can see the References for your selected Indicators.",
                    position: 'left'
                },
                {
                    element: '.stepStartTour',
                    intro: "If you want to have this TOUR again you can start here anytime.  <br> <br> &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;HAVE FUN!",
                    position: 'left'
                }
            ]
        });
        introguide.start();
    }
};
TourService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TourService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Atezaz Ahmad\Documents\GitHub\OpenLairRubenA\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
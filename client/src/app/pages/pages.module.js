"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const category_component_1 = require("./category/category.component");
const dashboard_component_1 = require("./dashboard/dashboard.component");
const product_component_1 = require("./product/product.component");
let PagesModule = class PagesModule {
};
PagesModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [category_component_1.CategoryComponent, dashboard_component_1.DashboardComponent, product_component_1.ProductComponent],
        imports: [common_1.CommonModule],
        exports: [category_component_1.CategoryComponent, dashboard_component_1.DashboardComponent, product_component_1.ProductComponent],
    })
], PagesModule);
exports.PagesModule = PagesModule;

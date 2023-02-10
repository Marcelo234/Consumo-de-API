"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagesRoutingModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const dashboard_component_1 = require("./dashboard/dashboard.component");
const category_component_1 = require("./category/category.component");
const product_component_1 = require("./product/product.component");
const router_1 = require("@angular/router");
const pages_component_1 = require("./pages.component");
const auth_module_1 = require("../auth/auth.module");
const routes = [
    //rutas protegidad
    {
        path: 'dashboard', component: pages_component_1.PagesComponent,
        children: [
            { path: '', component: dashboard_component_1.DashboardComponent },
            { path: 'category', component: category_component_1.CategoryComponent },
            { path: 'product', component: product_component_1.ProductComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ]
    }
    //{path:'**',component:NoFoundComponent},
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [],
        imports: [
            common_1.CommonModule,
            router_1.RouterModule.forChild(routes),
            auth_module_1.AuthModule,
        ]
    })
], PagesRoutingModule);
exports.PagesRoutingModule = PagesRoutingModule;

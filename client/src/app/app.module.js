"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const pages_component_1 = require("./pages/pages.component");
const no_found_component_1 = require("./no-found/no-found.component");
const app_routing_module_1 = require("./app-routing.module");
const shared_module_1 = require("./shared/shared.module");
const pages_module_1 = require("./pages/pages.module");
const auth_module_1 = require("./auth/auth.module");
const http_1 = require("@angular/common/http");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            pages_component_1.PagesComponent,
            no_found_component_1.NoFoundComponent
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpClientModule,
            app_routing_module_1.AppRoutingModule,
            pages_module_1.PagesModule,
            shared_module_1.SharedModule,
            auth_module_1.AuthModule
        ]
    })
], AppModule);
exports.AppModule = AppModule;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const breadcrumbs_component_1 = require("./breadcrumbs/breadcrumbs.component");
const footer_component_1 = require("./footer/footer.component");
const header_component_1 = require("./header/header.component");
const sidebar_component_1 = require("./sidebar/sidebar.component");
const shared_component_1 = require("./shared.component");
let SharedModule = class SharedModule {
};
SharedModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            breadcrumbs_component_1.BreadcrumbsComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            sidebar_component_1.SidebarComponent,
            shared_component_1.SharedComponent,
        ],
        imports: [common_1.CommonModule],
        exports: [
            breadcrumbs_component_1.BreadcrumbsComponent,
            footer_component_1.FooterComponent,
            header_component_1.HeaderComponent,
            sidebar_component_1.SidebarComponent,
            shared_component_1.SharedComponent
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;

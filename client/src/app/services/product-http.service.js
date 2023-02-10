"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductHttpService = void 0;
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
let ProductHttpService = class ProductHttpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'https://api.escuelajs.co/api/v1/products';
    }
    getAll() {
        const url = `${this.API_URL}`;
        return this.httpClient.get(url);
    }
    getOne(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.get(url);
    }
    store(product) {
        const url = `${this.API_URL}`;
        return this.httpClient.post(url, product);
    }
    update(id, product) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.put(url, product);
    }
    destroy(id) {
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.delete(url).pipe((0, rxjs_1.map)((response) => {
            return response.rta;
        }));
    }
};
ProductHttpService = __decorate([
    (0, core_1.Injectable)({
        providedIn: 'root',
    })
], ProductHttpService);
exports.ProductHttpService = ProductHttpService;

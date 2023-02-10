"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const product_htpp_service_1 = require("./product-htpp.service");
describe('ProductHtppService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(product_htpp_service_1.ProductHtppService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

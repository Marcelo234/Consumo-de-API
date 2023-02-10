"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductComponent = void 0;
const core_1 = require("@angular/core");
let ProductComponent = class ProductComponent {
    constructor(productHttpService) {
        this.productHttpService = productHttpService;
        this.products = [];
    }
    ngOnInit() {
        this.getProducts();
        this.getProduct();
        this.createProduct();
        this.updateProduct();
        this.deleteProduct(id);
    }
    getProducts() {
        this.productHttpService.getAll().subscribe(response => {
            this.products = response;
            console.log(response);
        });
    }
    getProduct() {
        this.productHttpService.getOne(2).subscribe(response => {
            console.log(response);
        });
    }
    createProduct() {
        const data = {
            title: 'Computadora Itel core i7',
            price: 650,
            description: 'Electrodomesticos / Erick Guevara',
            images: [
                'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
            ],
            categoryId: 1,
        };
        this.productHttpService.store(data).subscribe(response => {
            console.log(response);
        });
    }
    updateProduct() {
        const data = {
            title: 'Computadora Itel core i10',
            price: 1150,
            description: 'Electrodomesticos / Erick Guevara',
        };
        this.productHttpService.update(2, data).subscribe(response => {
            console.log(response);
        });
    }
    deleteProduct(id) {
        this.productHttpService.destroy(id).subscribe(response => {
            this.products = this.products.filter(product => product.id != id);
            console.log(response);
        });
    }
};
ProductComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.css'],
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;

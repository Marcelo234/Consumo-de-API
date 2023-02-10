import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { ProductModel, UpdateProductDto } from 'src/app/entities/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [];
  selectedProduct: UpdateProductDto ={};
  
  constructor(private productHttpService: ProductHttpService) {}

  ngOnInit(): void {
    this.getProducts();
    this.getProduct();
    this.createProduct();
    this.updateProduct();
    this.deleteProduct();
  }

  getProducts() {
    this.productHttpService.getAll().subscribe(
      response => { 
        this.products = response;
        console.log(response);
      });
  }

  getProduct() {
    this.productHttpService.getOne(2).subscribe(
      response => {
      console.log(response);
    });
  }

  createProduct() {
    const data = {
      title: 'Grabadora',
      price: 50,
      description: 'Marcelo Ontaneda',
      images: [
        'https://m.media-amazon.com/images/I/51A+xXT0yiL._AC_SY580_.jpg',
      ],
      categoryId: 1,
    };
    this.productHttpService.store(data).subscribe(
      response => {
      console.log(response);
    });
  }

  
editProduct(product: ProductModel){
this.selectedProduct = product;
}

  updateProduct() {
    const data = {
      title: 'Grabadora',
      price: 10,
      description: 'Marcelo Ontaneda',
    };
    this.productHttpService.update(2, data).subscribe(
      response => {
      console.log(response);
    });
  }

  deleteProduct() {
    this.productHttpService.destroy(1).subscribe(
      response => {
        // this.products = this.products.filter(product => product.id != id);
      console.log(response);
    });
  }
}

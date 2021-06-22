import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from '../../shared/Services/Product/product.service';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent implements OnInit {
  products: any;
  page = 1;
  count = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsPage();
  }

  getProductsPage(){
    this.productService.getAllProductsPage(this.page-1).then(prods => {
      this.products = prods;
      this.count = this.products.totalElements;
      this.products = this.products.content;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.getProductsPage();
  }  
}

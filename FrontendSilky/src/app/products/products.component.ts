import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { AuthService } from '../shared/Services/auth/auth.service';
import { ProductService } from '../shared/Services/Product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  page = 1;
  count = 0;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductsPage();
  }

  getProducts(){
    this.productService.getAllProducts().then(prods => {
      this.products = prods;
    });
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

  public addProduct(){
    this.router.navigateByUrl('/admin/product/add');
  }

  public deleteProduct(id: number){

    if(confirm('¿Esta seguro de eliminar el producto?')){
      this.productService.deleteProduct(id).then(prod=>{
        this.getProductsPage();
      });
    }
  }

  public editProduct(id: number){
    this.router.navigate(['/admin/product/edit', id]);
  }

}

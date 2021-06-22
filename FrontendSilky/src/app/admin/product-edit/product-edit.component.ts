import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { ProductComponent } from 'src/app/products/product/product.component';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from '../../shared/Services/Product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProductForm: FormGroup;
  private id: any;
  product: any = {
    id: 0,
    name: '',
    addInfo: '',
    url: '',
    price: 0,
    collection: '',
    bought: false
  };

  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.productService.getProductById(this.id).then(prod => {
      this.product = prod;
    });
  }

  public onSubmit(){
    this.productService.updateProduct(this.product).then(prod => {
      this.product = new Product();
      this.router.navigateByUrl('/admin/product');
    });
  }

}

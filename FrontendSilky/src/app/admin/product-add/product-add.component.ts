import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../shared/Services/Product/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addProductForm: FormGroup;
  product: any = {
    id: 0,
    name: '',
    addInfo: '',
    url: '',
    price: 0,
    collection: '',
    bought: false
  };

  constructor(private router: Router, private formBuilder: FormBuilder, private productService: ProductService) { }

  ngOnInit(): void {
    /*this.addProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      addInfo: ['', Validators.required],
      url: ['', Validators.required],
      price: [1, Validators.required],
      collection: ['', Validators.required]
    });*/
  }

  public onSubmit(){
    this.productService.saveProduct(this.product).then(prod=>{
    this.product = new Product();
    this.router.navigateByUrl('/admin/product');
    });
    //this.addProductForm.reset();
  }

}

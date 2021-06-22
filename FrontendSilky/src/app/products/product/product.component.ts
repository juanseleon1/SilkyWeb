import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/Services/Account/account.service';
import { AuthService } from 'src/app/shared/Services/auth/auth.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  cant:number;
  constructor(private router: Router, private accService: AccountService, public authService:AuthService) {this.cant = 1}

  ngOnInit(): void {
  }

  public addToCart(product: Product){
    this.accService.addToCart(product, this.cant);
    this.cant=1;
    window.alert('¡Tu producto ha sido añadido al carrito!');
  }

   getNumItems(): number {
    return this.cant;
  }

  minusQ(): void {
    if (this.cant !== 0) {
    this.cant--;
    }
  }

  plusQ(): void {
    this.cant++;
  }


  get isLogged(): boolean{
    return this.authService.isLogged();
  }
}

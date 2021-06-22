import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/shared/models/cart';
import { AccountService } from 'src/app/shared/Services/Account/account.service';
import { PurchaseService } from 'src/app/shared/Services/Purchase/purchase.service';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public car: Cart;

  constructor(
    public purchaseService: PurchaseService,
    public accService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.car = this.accService.getCart;
  }

  createPurchase(): void {
   let purchase = this.accService.cartToPurchase();
    let us = this.accService.getCurrUser;
    let comPurch;
    purchase._user=us;
    this.purchaseService.createUserPurchase(purchase).then(purch =>{
      comPurch=purch;
      this.router.navigateByUrl('/purchase/purchase/'+ comPurch.id);
    })
  }

  getNumItems(item: Product): number {
    const indProd = this.car.products.indexOf(item);
    return this.car.quantity[indProd];
  }

  minusQ(item: Product): void {
    const indProd = this.car.products.indexOf(item);
    let cant = this.car.quantity[indProd];
    cant--;
    if (cant === 0) {
      this.car.products.splice(indProd, 1);
      this.car.quantity.splice(indProd, 1);
    } else{
      this.car.quantity[indProd] = cant;
    }
  }

  remQ(item: Product): void {
    const indProd = this.car.products.indexOf(item);
    this.car.products.splice(indProd, 1);
    this.car.quantity.splice(indProd, 1);
  }

  plusQ(item: Product): void {
    const indProd = this.car.products.indexOf(item);
    let cant = this.car.quantity[indProd];
    cant++;
    this.car.quantity[indProd] = cant;
  }

}

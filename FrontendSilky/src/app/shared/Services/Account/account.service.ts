import { Injectable } from '@angular/core';
import { Purchase } from '../../models/purchase';
import { User } from '../../models/user';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RestUtil } from '../../utils/rest-util';
import { Cart } from '../../models/cart';
import { PurchaseItem } from '../../models/purchaseitem';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private currUser:User;
  private serviceUrl: string;
  
    constructor(private http: HttpClient) {
    this.serviceUrl = environment.IP+'/user'
  }

    get getCurrUser():User{
      return this.currUser;
    }
  async allUsers(){
    return await this.http.get(this.serviceUrl).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async addUser(user:User){
    return await this.http.post(this.serviceUrl+"/register", user).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async getUser(email:string, password:string){
    return await this.http.get(this.serviceUrl+'/login/log?email='+email+'&password='+password).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();

  }
  set updtCurrUser(user:User){
    this.currUser = user;
    this.curCart(this.currUser.shopCart);
  }

  async logOut(){
    return await this.http.put(this.serviceUrl+'/logout/'+this.currUser.id,this.currUser).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async updateCart(){
    return await this.http.put(this.serviceUrl+'/updtCart/'+this.currUser.id,this.currUser).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  addToCart(product: Product, cant: number): void {
    let found=false;
    for(let prod of this.currUser.shopCart.products){
      if(prod.id === product.id){
        let idx = this.currUser.shopCart.products.indexOf(prod);
        this.currUser.shopCart.quantity[idx]+= cant;
        found = true;
        break;
      }
    }
    if (found!==true) {
      this.currUser.shopCart.products.push(product);
      this.currUser.shopCart.quantity.push(cant);
    }
  }

  get getCart(): Cart {
    if(this.currUser.shopCart.products==null)
    {
      this.currUser.shopCart.products= [];
    }
    if(this.currUser.shopCart.quantity==null)
    {
      this.currUser.shopCart.quantity= [];
    }
    return this.currUser.shopCart;
  }

  set setCart(cart:any) {
    this.currUser.shopCart=cart;
  }

  clearCart() {
    this.currUser.shopCart.products = [];
    this.currUser.shopCart.quantity = [];
  }

  curCart(cart: Cart): void {
    if(cart){

    if(cart.products==null)
    {
      cart.products= [];
    }
    if(cart.quantity==null)
    {
      cart.quantity= [];
    }
    this.currUser.shopCart = cart;
  }

  }

  cartToPurchase():Purchase {
    let purchase = new Purchase();
    let cantidad = this.currUser.shopCart.quantity;
    let products = this.currUser.shopCart.products;
    let cant=0;
    for (let p of products){
      let purchit= new PurchaseItem();
      purchit._product=p;
      purchit._price=p.price;
      purchit._quantity = cantidad[cant];
      purchase._purchaseItems.push(purchit);
      cant++;
    }
    purchase._total = cantidad.map((mult, i) => mult * purchase._purchaseItems[i]._price).reduce((a1, a2) => a1 + a2, 0);
    purchase._date = new Date(Date.now());
    this.clearCart();
    this.updateCart().then(cart=>{
      this.setCart=cart;
    })
    this.clearCart();
    return purchase;
  }

}

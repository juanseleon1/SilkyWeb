import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../../models/product';
import { RestUtil } from '../../utils/rest-util';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public listProducts: Product[];
  serviceUrl: string;

  constructor(private http: HttpClient) {
    this.listProducts = new Array<Product>();
    this.serviceUrl = environment.IP+'/product'
  }

  async getAllProducts(){
    return await this.http.get(this.serviceUrl).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async getAllProductsPage(page:number){
    return await this.http.get(this.serviceUrl+"/page/"+page).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async getProductById(id: any){
    return await this.http.get(this.serviceUrl+"/"+id).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async deleteProduct(id: number){
    return await this.http.delete(this.serviceUrl+"/"+id).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async saveProduct(product: Product){
    return await this.http.post(this.serviceUrl, product).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async updateProduct(product: Product){
    return await this.http.post(this.serviceUrl, product).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Purchase } from '../../models/purchase';
import { User } from '../../models/user';
import { RestUtil } from '../../utils/rest-util';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  serviceUrl: string;
  constructor(private http: HttpClient) {
    this.serviceUrl = environment.IP+'/purchases'
  }

  async createUserPurchase(purchase: Purchase){
    return await this.http.post(this.serviceUrl+"/",purchase).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async getAllPurchasesFromUser(user:User,pag:number){
    return await this.http.get(this.serviceUrl+'/byUser/'+user.id+"/"+pag).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async getPurchase(id:any){
    return await this.http.get(this.serviceUrl+'/get/'+id).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async AllPurchases(page:number){
    return await this.http.get(this.serviceUrl+"/"+page).pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }

  async getAllPurchases() {
    return await this.http.get(this.serviceUrl+"/").pipe(map(RestUtil.extractData),catchError(RestUtil.handleError)).toPromise();
  }
}

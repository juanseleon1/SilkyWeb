import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseService } from 'src/app/shared/Services/Purchase/purchase.service';

@Component({
  selector: 'app-detailed-purchase-admin',
  templateUrl: './detailed-purchase-admin.component.html',
  styleUrls: ['./detailed-purchase-admin.component.css']
})
export class DetailedPurchaseAdminComponent implements OnInit {

  constructor(private route: ActivatedRoute, private purchaseService: PurchaseService) { }
  name = '';
  purch: any;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
      this.purchaseService.getPurchase(id).then(purchase=>{
      this.purch=purchase;
    });
 }

 getSubT(name: String) {
  let aux = this.purch.purchaseItems.find(p => p.product.name === name);

  let price = aux.price;
  let num = aux.quantity;
  return num * price;
}

getCant(name: String) {
  let aux = this.purch.purchaseItems.find(p => p.product.name === name);
  let num = aux.quantity;
  return num;
}
getUrl(name: String): string {
  let aux = this.purch.purchaseItems.find(p => p.product.name === name);
  return aux.product.url;
}

getUser():string{
  const userInf=this.purch.user;
  return userInf.name+ " "+userInf.lastName +" ["+userInf.email+"]";
}

}

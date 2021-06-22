import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Purchase } from 'src/app/shared/models/purchase';
import { PurchaseService } from 'src/app/shared/Services/Purchase/purchase.service';

@Component({
  selector: 'app-detailed-purchase',
  templateUrl: './detailed-purchase.component.html',
  styleUrls: ['./detailed-purchase.component.css']
})
export class DetailedPurchaseComponent implements OnInit {

  name = '';
  purch: Purchase;

  constructor(private route: ActivatedRoute, private purchServ: PurchaseService) {
      this.purch=null;
  }


 ngOnInit() {
  let id = this.route.snapshot.paramMap.get('id');
  let p;

  this.purchServ.getPurchase(id).then(purchase => {
    p = purchase;
    this.purch = p;
  })
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

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/Services/Account/account.service';
import { PurchaseService } from 'src/app/shared/Services/Purchase/purchase.service';

@Component({
  selector: 'app-user-purchases',
  templateUrl: './user-purchases.component.html',
  styleUrls: ['./user-purchases.component.css']
})
export class UserPurchasesComponent implements OnInit {
  public purchases: any;
  page = 1;
  count = 0;

  constructor(private purchaseServ: PurchaseService, private accServ: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.getPurchasesPage();
  }

  getPurchasesPage(){
    let user = this.accServ.getCurrUser;
    this.purchaseServ.getAllPurchasesFromUser(user,this.page-1).then(purchArr => {
      this.purchases = purchArr;
      this.count = this.purchases.totalElements;
      this.purchases = this.purchases.content;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.getPurchasesPage();
  }  

  public seeDetail(id: number):void{
    this.router.navigate(['/purchase/purchase/', id]);
  }

}

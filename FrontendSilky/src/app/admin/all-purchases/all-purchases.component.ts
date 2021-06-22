import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseService } from 'src/app/shared/Services/Purchase/purchase.service';
import { Purchase } from '../../shared/models/purchase';
import { AccountService } from '../../shared/Services/Account/account.service';

@Component({
  selector: 'app-all-purchases',
  templateUrl: './all-purchases.component.html',
  styleUrls: ['./all-purchases.component.css']
})
export class AllPurchasesComponent implements OnInit {
  public purchases: any;
  page = 1;
  count = 0;

  constructor(private purchaseService: PurchaseService,private router: Router) {}

  ngOnInit(): void {
    this.getPurchasesPage();
  }

  getPurchasesPage(){
    this.purchaseService.AllPurchases(this.page-1).then(purchArr => {
      this.purchases = purchArr;
      this.count = this.purchases.totalElements;
      this.purchases = this.purchases.content;
    });
  }

  onTableDataChange(event){
    this.page = event;
    this.getPurchasesPage();
  }  

  public seeDetail(id: number): void{
    this.router.navigate(['/admin/sale/', id]);
  }

}

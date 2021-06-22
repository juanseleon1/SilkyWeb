import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchaseComponent } from './purchase/purchase.component';
import { CartComponent } from './cart/cart.component';
import { AllPurchasesComponent } from '../admin/all-purchases/all-purchases.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { UserPurchasesComponent } from './user-purchases/user-purchases.component';
import { DetailedPurchaseComponent } from './detailed-purchase/detailed-purchase.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [PurchaseComponent, CartComponent, UserPurchasesComponent, DetailedPurchaseComponent],
  imports: [
    CommonModule,
    PurchasesRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [PurchaseComponent, CartComponent, ]
})
export class PurchasesModule { }

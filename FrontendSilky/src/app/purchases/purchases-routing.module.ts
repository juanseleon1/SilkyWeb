import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/Services/auth/auth.guard';
import { AllPurchasesComponent } from '../admin/all-purchases/all-purchases.component';
import { CartComponent } from './cart/cart.component';
import { DetailedPurchaseComponent } from './detailed-purchase/detailed-purchase.component';
import { UserPurchasesComponent } from './user-purchases/user-purchases.component';
import { Role } from '../shared/models/role.enum';

const routes: Routes = [
  {
    path: 'purchases',
    component: UserPurchasesComponent,
    data: { role: [Role.BASIC] },
    canActivate: [AuthGuard],
  },
  {
    path: 'purchase/:id',
    component: DetailedPurchaseComponent,
    data: { role: [Role.BASIC] },
    canActivate: [AuthGuard],
  },
  {
    path: 'cart',
    component: CartComponent,
    data: { role: [Role.BASIC] },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasesRoutingModule {}

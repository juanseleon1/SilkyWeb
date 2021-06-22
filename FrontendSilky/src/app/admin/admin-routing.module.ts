import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/Services/auth/auth.guard';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductsComponent } from '../products/products.component';
import { DetailedPurchaseAdminComponent } from './detailed-purchase-admin/detailed-purchase-admin.component';
import { Role } from '../shared/models/role.enum';
import { AllPurchasesComponent } from './all-purchases/all-purchases.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductsComponent,
    data: { role: [Role.ADMIN] },
    canActivate: [AuthGuard],
  },
  {
    path: 'sale',
    component: AllPurchasesComponent,
    data: { role: [Role.ADMIN] },
    canActivate: [AuthGuard],
  },
  {
    path: 'sale/:id',
    component: DetailedPurchaseAdminComponent,
    data: { role: [Role.ADMIN] },
    canActivate: [AuthGuard],
  },
  {
    path: 'product/add',
    component: ProductAddComponent,
    data: { role: [Role.ADMIN] },
    canActivate: [AuthGuard],
  },
  {
    path: 'product/edit/:id',
    component: ProductEditComponent,
    data: { role: [Role.ADMIN] },
    canActivate: [AuthGuard],
  },
  {
    path: 'chart',
    component: BarChartComponent,
    data: { role: [Role.ADMIN] },
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

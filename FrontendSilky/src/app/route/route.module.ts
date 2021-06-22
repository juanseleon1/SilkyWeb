import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthGuard } from '../shared/Services/auth/auth.guard';
import { NosotrosComponent } from '../shared/nosotros/nosotros.component';
import { Role } from '../shared/models/role.enum';
import { ProductContainerComponent } from '../products/product-container/product-container.component';
import { AccountComponent } from '../user/account/account.component';
import { BarChartComponent } from '../admin/bar-chart/bar-chart.component';
import { HomeComponent } from '../shared/home/home.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'user',
    loadChildren: () =>
      import('../user/user.module').then((module) => module.UserModule),
  },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'products', component: ProductContainerComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('../admin/admin.module').then((module) => module.AdminModule),
    data: { role: [Role.ADMIN] },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'purchase',
    loadChildren: () =>
      import('../purchases/purchases.module').then(
        (module) => module.PurchasesModule
      ),
    data: { role: [Role.BASIC] },
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouteModule {}

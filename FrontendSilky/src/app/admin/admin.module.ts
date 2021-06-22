import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products/products.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SharedModule } from '../shared/shared.module';
import { AllPurchasesComponent } from './all-purchases/all-purchases.component';
import { DetailedPurchaseAdminComponent } from './detailed-purchase-admin/detailed-purchase-admin.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [ProductsComponent, ProductAddComponent, ProductEditComponent, AllPurchasesComponent, DetailedPurchaseAdminComponent, BarChartComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ChartsModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }

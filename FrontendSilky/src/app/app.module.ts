import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouteModule } from './route/route.module';
import { ProductComponent } from './products/product/product.component';
import { ReportComponent } from './admin/report/report.component';
import { ProductContainerComponent } from './products/product-container/product-container.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BasicAuthHtppInterceptorService } from './shared/Services/BasicAuthHtppInterceptor/basic-auth-htpp-interceptor-service.service';
import { ErrorInterceptorService } from './shared/Services/ErrorInterceptor/error-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ReportComponent,
    ProductContainerComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS, useClass:BasicAuthHtppInterceptorService, multi:true
    
  },{
    provide:HTTP_INTERCEPTORS, useClass:ErrorInterceptorService, multi:true
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

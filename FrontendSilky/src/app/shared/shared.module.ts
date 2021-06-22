import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AlertComponent } from './alert/alert.component';
import { SharedRoutingModule } from './shared-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [FooterComponent,
    NavBarComponent, AlertComponent,
    NosotrosComponent,HomeComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [NavBarComponent, FooterComponent,HomeComponent]
})
export class SharedModule { }

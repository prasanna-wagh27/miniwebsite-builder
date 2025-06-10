import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessInfoRoutingModule } from './business-info-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BusinessInfoRoutingModule,
    BrowserModule,
    FormsModule 
  ]
})
export class BusinessInfoModule { 
  
}

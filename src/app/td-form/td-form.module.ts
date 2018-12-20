import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdFormRoutingModule } from './td-form-routing.module';
import { FormTdComponent } from './form-td/form-td.component';

@NgModule({
  imports: [
    CommonModule,
    TdFormRoutingModule
  ],
  declarations: [FormTdComponent]
})
export class TdFormModule { }

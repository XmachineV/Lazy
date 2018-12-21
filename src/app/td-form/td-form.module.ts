import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TdFormRoutingModule } from './td-form-routing.module';
import { FormTdComponent } from './form-td/form-td.component';
import { SharedModule } from '../sharedModules.module';
import { CompareValidatorDirective } from '../shared/compare-validator.directive';

@NgModule({
  
  imports: [
    CommonModule,
    TdFormRoutingModule,
    SharedModule
   
  ],
  declarations: [FormTdComponent,CompareValidatorDirective],
})
export class TdFormModule { }

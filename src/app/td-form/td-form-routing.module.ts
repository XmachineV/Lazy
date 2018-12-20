import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormTdComponent } from './form-td/form-td.component';

const routes: Routes = [
  {
    path: '',
    component: FormTdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TdFormRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { TesteComponent } from './teste/teste.component';

const routes: Routes = [
  {
    path: '',
    component: OrderListComponent
  },
  {
    path:"teste",
    component:TesteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }

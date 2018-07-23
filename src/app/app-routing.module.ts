import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category-list/category-list.component";
import {TransactionListComponent} from "./transaction-list/transaction-list.component";

const routes : Routes =[
  { path: 'categories', component: CategoryListComponent },
  { path: 'transactions', component: TransactionListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

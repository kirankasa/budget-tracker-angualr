import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CategoryListComponent} from "./category/category-list/category-list.component";
import {TransactionListComponent} from "./transaction/transaction-list/transaction-list.component";
import {CategoryComponent} from './category/category.component';
import {AddTransactionComponent} from "./transaction/add-transaction/add-transaction.component";

const routes : Routes =[
  { path: '', redirectTo: '/transaction-list', pathMatch: 'full' },
  { path: 'categories', component: CategoryComponent },
  { path: 'transaction-add', component: AddTransactionComponent },
  { path: 'transaction-edit/:id', component: AddTransactionComponent },
  { path: 'transaction-list', component: TransactionListComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

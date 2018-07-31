import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TransactionListComponent} from "./transaction/transaction-list/transaction-list.component";
import {AddTransactionComponent} from "./transaction/add-transaction/add-transaction.component";
import {RegisterUserComponent} from "./user/register-user/register-user.component";
import {CategoryListComponent} from './category/category-list/category-list.component';
import {AddCategoryComponent} from './category/add-category/add-category.component';

const routes : Routes =[
  { path: '', redirectTo: '/transaction-list', pathMatch: 'full' },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-add', component: AddCategoryComponent },
  { path: 'category-edit/:id', component: AddCategoryComponent },
  { path: 'transaction-add', component: AddTransactionComponent },
  { path: 'transaction-edit/:id', component: AddTransactionComponent },
  { path: 'transaction-list', component: TransactionListComponent },
  { path: 'register-user', component: RegisterUserComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

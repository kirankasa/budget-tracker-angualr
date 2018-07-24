import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatTableModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatFormFieldModule, MatInputModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import {HttpClientModule} from "@angular/common/http";
import { AddCategoryComponent } from './category/add-category/add-category.component';
import {FormsModule} from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { AddTransactionComponent } from './transaction/add-transaction/add-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    CategoryListComponent,
    TransactionListComponent,
    AddCategoryComponent,
    CategoryComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatMomentDateModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

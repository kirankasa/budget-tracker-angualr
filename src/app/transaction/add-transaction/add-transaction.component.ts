import {Component, OnInit} from '@angular/core';
import {Transaction} from "../transaction";
import {TransactionService} from "../transaction.service";
import {Router} from "@angular/router";
import {CategoryService} from "../../category/category.service";
import {Category} from "../../category/category";

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {

  private transaction: Transaction = new Transaction();
  private categories: Category[] = [];
  private transactionTypes = [{"code": "C", "description": "Credit"}, {"code": "D", "description": "Debit"}];

  constructor(private transactionService: TransactionService,
              private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories = data;
    });
  }

  addTransaction(transaction: Transaction) {
    transaction.date = transaction.date.format("YYYY-MM-DD");
    this.transactionService.addTransaction(transaction).subscribe(data => {
      this.router.navigate(["/transactions"])
    });
  }

}

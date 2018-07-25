import {Component, OnInit} from '@angular/core';
import {Transaction} from "../transaction";
import {TransactionService} from "../transaction.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../category/category.service";
import {Category} from "../../category/category";
import * as moment from 'moment'

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
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });

    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.transactionService.getTransaction(id).subscribe((transaction: Transaction) => {
          if (transaction) {
            transaction.date = moment(transaction.date, "YYYY-MM-DD");
            this.transaction = transaction;
          }
        })
      }

    })
  }

  addTransaction(transaction: Transaction) {
    transaction.date = transaction.date.format("YYYY-MM-DD");
    this.transactionService.saveTransaction(transaction).subscribe(data => {
      this.goToTransactionList();
    });
  }

  cancel() {
    this.goToTransactionList();
  }

  goToTransactionList() {
    this.router.navigate(["/transaction-list"])
  }

}

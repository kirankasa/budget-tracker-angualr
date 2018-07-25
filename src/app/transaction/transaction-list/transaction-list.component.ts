import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../transaction.service";
import {Transaction} from "../transaction";
import {Router} from "@angular/router";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  private displayedColumns: string[] = ['category', 'type', 'amount', 'date', 'note', 'edit', 'delete'];

  constructor(private transactionService: TransactionService,
              private router: Router) {
  }

  private transactions: Transaction [] = [];

  ngOnInit() {
    this.getTransactions();
  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  addNewTransaction() {
    this.router.navigate(['/transaction-add']);
  }

  editTransaction(id: string) {
    this.router.navigate(['/transaction-edit', id]);
  }

  deleteTransaction(id: string) {
    this.transactionService.deleteTransaction(id).subscribe(() => {
      this.getTransactions();
    });
  }

}

import {Component, OnInit} from '@angular/core';
import {TransactionService} from "../transaction.service";
import {Transaction} from "../transaction";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  displayedColumns: string[] = ['category', 'type', 'amount', 'date', 'note' ];

  constructor(private transactionService: TransactionService) {
  }

  public transactions: Transaction [] = [];

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

}

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

  private displayedColumns: string[] = ['category', 'type', 'amount', 'date', 'note' ];

  constructor(private transactionService: TransactionService,
              private router: Router) {
  }

  private transactions: Transaction [] = [];

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  addNewTransaction(){
    this.router.navigate(['/addTransaction']);
  }

}

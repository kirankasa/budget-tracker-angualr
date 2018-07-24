import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {Transaction} from "./transaction";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  RETRIEVE_TRANSACTIONS_URL = environment.apiUrl + "transactions";
  ADD_TRANSACTION_URL = environment.apiUrl + "transactions";

  constructor(private http: HttpClient) {
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.RETRIEVE_TRANSACTIONS_URL);
  }

  addTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.ADD_TRANSACTION_URL, transaction);
  }
}

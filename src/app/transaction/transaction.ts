export class Transaction {
  constructor(private  id: String,
              private type: String,
              private amount: string,
              private date: String,
              private note: String,
              private category: String) {
  }
}

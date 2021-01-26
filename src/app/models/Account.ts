export class Account {
  username: string;
  balance: number;
  currency: string;
  constructor(username: string, balance: number, currency: string) {
    this.username = username;
    this.balance = balance;
    this.currency = currency;
  }
}

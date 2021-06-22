import { PurchaseItem } from './purchaseitem';
import { User } from './user';

export class Purchase {
  public static numPur: number = 0 ;
  public purchaseItems: PurchaseItem[];
  public total: number;
  public date: Date;
  public id: number;
  public user: User;


  public get _id(): number {
    return this.id;
  }
  public set _id(value: number) {
    this.id = value;
  }


  constructor(){
    this.id = Purchase.numPur;
    Purchase.numPur++;
    this.date = new Date(Date.now());
    this.purchaseItems= [];

  }
  public get _purchaseItems(): PurchaseItem[] {
    return this.purchaseItems;
  }
  public set _purchaseItems(value: PurchaseItem[]) {
    this.purchaseItems = value;
  }
  public get _total(): number {
    return this.total;
  }
  public set _total(value: number) {
    this.total = value;
  }
  public get _date(): Date {
    return this.date;
  }
  public set _date(value: Date) {
    this.date = value;
  }
  public get _user(): User {
    return this.user;
  }
  public set _user(value: User) {
    this.user = value;
  }


}

import { Product } from "./product";

export class PurchaseItem {

  public id: number;
  public price: number;
  public product: Product;
  public quantity: number;


  public get _id(): number {
    return this.id;
  }
  public set _id(value: number) {
    this.id = value;
  }


  public get _price(): number {
    return this.price;
  }
  public set _price(value: number) {
    this.price = value;
  }


  public get _product(): Product {
    return this.product;
  }
  public set _product(value: Product) {
    this.product = value;
  }

  public get _quantity(): number {
    return this.quantity;
  }
  public set _quantity(value: number) {
    this.quantity = value;
  }
}

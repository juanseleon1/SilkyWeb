import { Product } from './product';

export class Cart {
  private _id: number;
  private _products: Product[] = [];
  private _quantity: number[] = [];

  constructor(){
    this._products = new Array<Product>();
    this._quantity = new Array<number>();
  }
  public get quantity(): number[] {
    return this._quantity;
  }
  public set quantity(value: number[]) {
    this._quantity = value;
  }
  public get products(): Product[] {
    return this._products;
  }
  public set products(value: Product[]) {
    this._products = value;
  }

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}

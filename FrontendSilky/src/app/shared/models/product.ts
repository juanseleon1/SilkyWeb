export class Product {
  private _id: number;
  private _name: string;
  private _price: number;
  private _addInfo: string;
  private _collection: string;
  private _url: string;

  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get addInfo(): string {
    return this._addInfo;
  }
  public set addInfo(value: string) {
    this._addInfo = value;
  }
  public get collection(): string {
    return this._collection;
  }
  public set collection(value: string) {
    this._collection = value;
  }

  public get url(): string {
    return this._url;
  }
  public set url(value: string) {
    this._url = value;
  }

}

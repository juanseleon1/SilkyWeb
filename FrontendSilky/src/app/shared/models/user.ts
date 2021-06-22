import { Cart } from './cart';
import { Purchase } from './purchase';
import { Role } from './role.enum';

export class User {
  private static adminUser: User = null;
  private _id: number;
  private _password: string;
  private _name: string;
  private _email: string;
  private _lastName: string;
  private _shopCart: Cart;
  private _role: Role;
  private _compras: Purchase[];

  public get compras(): Purchase[] {
    return this._compras;
  }

  public set compras(value: Purchase[]) {
    this._compras = value;
  }

  constructor() {
    this._shopCart = new Cart();
    this._compras = new Array<Purchase>();
  }

  public get id(): number {
    return this.id;
  }
  public set id(value: number) {
    this.id = value;
  }

  public get role(): Role {
    return this._role;
  }
  public set role(value: Role) {
    this._role = value;
  }

  public get password(): string {
    return this._password;
  }
  public set password(value: string) {
    this._password = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }

  public get shopCart(): Cart {
    if (this._shopCart === null) {
      this._shopCart = new Cart();
    }
    return this._shopCart;
  }
  public set shopCart(value: Cart) {
    this._shopCart = value;
  }

  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }

  public static get getAdminUser(): User {
    if (this.adminUser === null) {
      this.adminUser = new User();
      this.adminUser._email = 'admin@admin.com';
      this.adminUser._name = 'Admin';
      this.adminUser._lastName = 'Istrador';
      this.adminUser._password = 'adminadmin';
      this.adminUser._role = Role.ADMIN;
      this.adminUser.shopCart = new Cart();
    }

    return this.adminUser;
  }
}

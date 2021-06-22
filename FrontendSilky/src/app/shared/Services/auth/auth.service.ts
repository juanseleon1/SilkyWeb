import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AccountService } from '../Account/account.service';
import { AlertService } from '../Alert/alert.service';
import { Role } from '../../models/role.enum';
import { User } from '../../models/user';
import { AuthStatus } from './auth-status.enum';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { RestUtil } from '../../utils/rest-util';

const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserStatus: boolean;
  private currentUserRole: Role;
  private adminUser: User;
  private serviceUrl: string;

  constructor(
    public alertS: AlertService,
    public accServ: AccountService,
    private router: Router,
    private http: HttpClient
  ) {
    this.currentUserStatus = false;
    this.adminUser = User.getAdminUser;
    this.serviceUrl = environment.IP;
  }

  public get isAdminAuth(): boolean {
    return this.currentUserRole === Role.ADMIN;
  }

  public isLogged(): boolean {
    return this.currentUserStatus;
  }

  public isLoggedAuth(route: ActivatedRouteSnapshot): AuthStatus {
    let status = AuthStatus.Authorized;

    if (this.currentUserStatus !== false) {
      if (route && route.data) {
        const mapa = route.data.roles;
        if (mapa) {
          if (mapa.indexOf(this.currentUserRole) === -1) {
            status = AuthStatus.Unauthorized;
          }
        }
      }
    } else {
      status = AuthStatus.notLogged;
    }

    return status;
  }

  public login(email: string, password: string) {
    let ret = false;
    let userLogged = null;
    this.authenticate(email, password).then((user) => {
      this.accServ.getUser(email, password).then((user) => {
        userLogged = user;
        if (userLogged) {
          this.currentUserRole = userLogged.role;
          ret = true;
          this.alertS.showAlert('Login Exitoso');
          this.currentUserStatus = true;
          this.accServ.updtCurrUser = userLogged;
          if (this.currentUserRole === Role.ADMIN) {
            this.router.navigateByUrl('admin/product');
          } else {
            this.router.navigateByUrl('');
          }
        } else {
          this.alertS.showAlert(
            'No existen usuarios registrados con esas credenciales'
          );
        }
      });
    }).catch((error)=>{
      
    });
  }

  public logout(): void {
    this.accServ.logOut().then((x) => {
      this.currentUserRole = null;
      this.currentUserStatus = false;
      sessionStorage.removeItem('token');
      this.router.navigateByUrl('');
    });
  }

  register(user: User): boolean {
    let ret = true;
    let userLogged;
    user.role = Role.BASIC;
    this.accServ
      .addUser(user)
      .then((userToLog) => {
        userLogged = userToLog;
        this.login(user.email,user.password);
      })
      .catch((error) => {
        console.log(error.code);
      });
    return true;
  }

  authenticate(email, password) {
    const user = { email, password };
    return fetch(this.serviceUrl + '/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then(
      (response) => {
        sessionStorage.setItem('token', response.headers.get('Authorization'));
      },
      (error) => {
        console.log(error);
      }
    ) /*
      .catch((error) => {
        console.log(error);
      })*/;
  }
}

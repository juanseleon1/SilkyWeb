import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  public showAlert(msg: string): void{
    alert(msg);
  }
}

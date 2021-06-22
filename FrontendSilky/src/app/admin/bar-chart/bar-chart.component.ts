import { Component, DebugElement, OnInit } from '@angular/core';
import { Purchase } from 'src/app/shared/models/purchase';
import { AccountService } from 'src/app/shared/Services/Account/account.service';
import { PurchaseService } from 'src/app/shared/Services/Purchase/purchase.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  purchases: any;
  date: Date;
  private purchase: Purchase;
  constructor(private purchaseService: PurchaseService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'Cantidad'},
  ];

  ngOnInit() {
    this.purchaseService.getAllPurchases().then(purchArray=>{
      console.log(purchArray);
      this.purchases=purchArray;
      this.updateChart(this.purchases);
    });
  }

  updateChart(purchases){
    let cant = 0;
    let cantidades = [];
    let dates = [];
    let datesnames = [];
    let d = new Date(Date.now());
    
    dates.push(d.getDate()-2);
    dates.push(d.getDate()-1);
    dates.push(d.getDate());
    
    this.barChartLabels = dates;

      for(let n of dates) {
        cant = 0;
        for(let p of purchases) {
          this.purchase = p;
          this.date = new Date(this.purchase.date);
          console.log("Iteracion");
          console.log(n);
          console.log(this.date.getDate());
          console.log(this.date.getDate() === n);
          console.log("Fin");
          if(this.date.getDate() === n){
            cant=cant+1;
          }
        }
      cantidades.push(cant);
    }
    console.log(JSON.stringify(cantidades))
    this.barChartData = [{data: cantidades, label: 'Cantidad de ventas al dia'}];
  }
}
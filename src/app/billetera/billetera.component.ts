import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BilleteraService } from '../services/billetera.service';
import { Router } from '@angular/router';
import * as ApexCharts from 'apexcharts';

interface Serie {
  name: string,
  data: number[]
}

class Xaxi {
  public mes;
  constructor(mes: []){
    this.mes = mes;

  }
}

class Chart {
  public series;
  public xaxis;
  constructor(series: Serie[], xaxis: Xaxi){
    this.series = series;
    this.xaxis = xaxis;
  }

}

@Component({
  selector: 'app-billetera',
  templateUrl: './billetera.component.html',
  styleUrls: ['./billetera.component.scss'],
  providers: [MessageService]
})
export class BilleteraComponent implements OnInit {

  public form!: FormGroup;
  private series: Serie[] = [];
  private xaxis: Xaxi = new Xaxi([]);
  public options: any;
  private categories: any;

  constructor(
    private walletServ : BilleteraService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private router : Router,
  ){}

  ngOnInit() {
    this.form = this.fb.group({
      comisiones: [null, Validators.required],
    });
    this.walletServ.getPayments().subscribe(
      (res: any) => {
        if (res) {
          this.categories = [];
          const comisiones = res.data.filter((serie:any) => {
            return serie.name === "Comisiones a Liquidar";
          });
          const ganbrutas = res.data.filter((serie:any) => {
            return serie.name === "Ganancia Bruta";
          });
          const gannetas = res.data.filter((serie:any) => {
            return serie.name === "Ingresos Netos";
          });
          let comisionesData: any = [];
          let ganBrutasData: any = [];
          let ganNetasData: any = [];
          comisiones.forEach((com:any) => comisionesData.push(com.data));
          ganbrutas.forEach((com:any) => ganBrutasData.push(com.data));
          gannetas.forEach((com:any) => ganNetasData.push(com.data));
          this.series.push({
            'name':  "Comisiones a Liquidar",
            'data': comisionesData,           
          });
          this.series.push({
            'name':  "Ganancia Bruta",
            'data': ganBrutasData,           
          });
          this.series.push({
            'name':  "Ingresos Netos",
            'data': ganNetasData,           
          });
             
          this.options = {
            chart: {
              type: 'bar'
            }, series: this.series,
            charts: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis:{categories: ['En','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic']},
            yaxis: {
              title: {
                text: '$ (Expresado en Cientos)'
              }
            },
            fill: {
              opacity: 1
            },
            tooltip: {
              y: {
                formatter: function (val: any) {
                  return "$ " + val + " Cientos"
                }
              }
            }
          };
         
      
          var chart = new ApexCharts(document.querySelector("#chart"), this.options);
        chart.render();
        } else {
          this.showCancel
        }
      });

   
  }









  showCancel() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Se ha producido un error' });
  }

  showCambio() {
    this.messageService.add({ severity: 'succes', summary: 'Billetera', detail: 'Felicitaciones por tu progreso!' });
  }

  

}

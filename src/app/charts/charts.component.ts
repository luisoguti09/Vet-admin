import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  options: any;

  constructor() { }

  ngOnInit() {

    this.options = {
      chart: {
        type: 'bar'
      }, series: [{
        name: 'Ganancias Brutas',
        data: [120, 240, 360, 480, 600, 720, 840, 960, 1080]
      }, {
        name: 'Comisiones a Liquidar',
        data: [20, 40, 60, 80, 100, 120, 140, 160, 180]
      }, {
        name: 'Ingresos',
        data: [100, 200, 300, 400, 500, 600, 700, 800, 1]
      }],
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
      xaxis: {
        categories: ['En','Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Agos', 'Sep', 'Oct', 'Nov', 'Dic'],
      },
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

  }

  


  
  
}

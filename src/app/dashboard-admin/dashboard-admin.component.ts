import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardAdminComponent implements OnInit {

  sidebarVisible!: boolean;

  options: any;

  constructor(){ }

  ngOnInit() { }
   
   


}

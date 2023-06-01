import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DetailSettingsComponent } from './detail-settings/detail-settings.component';
import { SettingsComponent } from './settings/settings.component';
import { AbmVeterinariosComponent } from './abm-veterinarios/abm-veterinarios.component';
import { ChartsComponent } from './charts/charts.component';
import { BilleteraComponent } from './billetera/billetera.component';

const routes: Routes = [
  {
  path: "", component: LoginComponent
}, 
{
  path: "dashboard-admin", component: DashboardAdminComponent
},
{
  path: "settings", component: SettingsComponent
},
{
  path: "detail-settings", component: DetailSettingsComponent
},
{
  path: "abm-settings", component: AbmVeterinariosComponent
},
{
  path: "charts", component: ChartsComponent
},
{
  path: "billetera", component: BilleteraComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { LoginService } from "./services/login.service";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from 'primeng/password';
import { TabViewModule } from 'primeng/tabview';
import { SidebarModule } from 'primeng/sidebar';
import { ToastModule } from 'primeng/toast';
import { SettingsComponent } from './settings/settings.component';
import { AbmVeterinariosComponent } from './abm-veterinarios/abm-veterinarios.component';
import { DetailSettingsComponent } from './detail-settings/detail-settings.component';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CalendarModule } from 'primeng/calendar';
import { AnimateModule } from 'primeng/animate';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { AccordionModule } from 'primeng/accordion';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ChartsComponent } from './charts/charts.component';
import { BilleteraComponent } from './billetera/billetera.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardAdminComponent,
    SettingsComponent,
    AbmVeterinariosComponent,
    DetailSettingsComponent,
    NotificacionesComponent,
    SideBarComponent,
    ChartsComponent,
    BilleteraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    ReactiveFormsModule,
    TabViewModule,
    SidebarModule,
    BrowserAnimationsModule,
    ToastModule,
    ToolbarModule,
    SplitButtonModule,
    CalendarModule,
    AnimateModule,
    TableModule,
    TagModule,
    RatingModule,
    AccordionModule,
    AutoCompleteModule,
    AvatarModule,
    CheckboxModule,
    RadioButtonModule,
  ],
  providers: [
    LoginService
  ],
  exports:[
    SettingsComponent,
    DetailSettingsComponent,
    AbmVeterinariosComponent,
    ChartsComponent,
    BilleteraComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

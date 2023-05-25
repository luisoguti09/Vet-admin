import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { SettingsService } from '../services/settings.service';
import { Router } from '@angular/router';
import { Veterinarios } from '../abm-veterinarios/veterinarios';
import { AbmVeterinariosComponent } from '../abm-veterinarios/abm-veterinarios.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [MessageService]
})
export class SettingsComponent implements OnInit {

  public form!: any;
  public  items!: MenuItem[];
  public url = 'http://localhost';
  public data!: Veterinarios;

  public settings: any;

  ngOnInit() {
    this.items = [
      {
          label: 'Actualizar',
          icon: 'pi pi-refresh'
      },
      {
          label: 'Borrar',
          icon: 'pi pi-trash'
      },
      {
          label: 'Editar',
          icon: 'pi pi-external-link',
          url: 'http://localhost'
      }
  ];
    this.settingsServ.getSettings().subscribe((data) => {
      this.settings = data.data
      console.log(this.settings);
    });
  }
  constructor(
    private settingsServ: SettingsService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
  ){}

  modifSettings() {
    this.settingsServ.crearSetting(
      this.form?.get('codigo')?.value,
      this.form?.get('valor')?.value)
      .subscribe((res: any) => {
        if (res.success) {
          this.router.navigate(['settings-component']);
        } else {
          this.showError();
        }
      },
    );
  }

  editarSettings(){
    this.settingsServ.getSettings().subscribe((data)=>{
      this.router.navigate(['abm-veterinarios']);
      alert('Modificaciones Guardadas');
    })
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Complete todos los campos' });
  }

}

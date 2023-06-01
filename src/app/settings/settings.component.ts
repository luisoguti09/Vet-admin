import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MenuItem, MessageService } from 'primeng/api';
import { SettingsService } from '../services/settings.service';
import { Router } from '@angular/router';
import { Veterinarios } from '../abm-veterinarios/veterinarios';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  providers: [MessageService]
})
export class SettingsComponent implements OnInit {

  public form!: any;
  public  items!: MenuItem[];
  public url = 'https://vetonline.cu.ma/vet-admin/';
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
          url: 'https://vetonline.cu.ma/vet-admin/'
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

  updateSettings(id: any, codigo: any, valor : any){
    this.settingsServ.updateSettings(id, codigo, valor).subscribe(res=>{
      if (!!res) {
        this.showCambio();
        setTimeout(()=>{
          this.router.navigate(['detail-settings']);
        }, 2000)
        console.log(res);
      } else {
        this.showError();
      }
    })
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

  showCambio() {
    this.messageService.add({ severity: 'succes', summary: 'Exito', detail: 'Se guardaron los cambios correctamente' });
  }

}

import { Component } from '@angular/core';
import { Veterinarios } from '../abm-veterinarios/veterinarios';
import { SettingsService } from '../services/settings.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AbmVeterinariosService } from '../services/abm-veterinarios.service';

@Component({
  selector: 'app-detail-settings',
  templateUrl: './detail-settings.component.html',
  styleUrls: ['./detail-settings.component.scss'],
  providers: [MessageService]
})
export class DetailSettingsComponent {

  public form!: FormGroup;
  public sett: any[] = [];
  public values: any;

  constructor(
    private settingServ: SettingsService,
    private detaServ: AbmVeterinariosService,
    private fb: FormBuilder,
    private messageService: MessageService,
    private router : Router,
    ) {}

  ngOnInit() {
    this.form = this.fb.group({
      codigo: [null, Validators.required],
      valor: [null, Validators.required]
    });
  }

  
  guardarCambios(){
    
   this.settingServ.crearSetting(
   this.form.get('codigo')?.value, 
   this.form.get('valor')?.value).subscribe(res => {
    if (!!res) {
      this.router.navigate(['settings']);
      this.showCambio;
      console.log(res);
    } else {
      this.showCancel;
    }},
    );
  }

  showCancel() {
    this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'No se ha hecho ningun Cambio' });
  }

  showCambio() {
    this.messageService.add({ severity: 'succes', summary: 'Exito', detail: 'Se guardaron los cambios correctamente' });
  }

  getValues() {
    const comisiones = 10;
    const ganbrutas = 20;
    const gannetas = 30;
    
    this.detaServ.getValues(comisiones, ganbrutas, gannetas).subscribe(
      res => {
        if (res.success) {
          this.values = res.data;
        } else {
          console.log('No se encuentran los datos.');
        }
      },
      error => {
        console.log('Ocurrio un error:', error);
      }
    );
  }

}

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
  
  crearRegistros(){  
   this.settingServ.crearSetting(
   this.form.get('codigo')?.value, 
   this.form.get('valor')?.value).subscribe(res => {
    if (!!res) { 
      this.showCreado();
      setTimeout(()=>{
        this.router.navigate(['settings']);
      }, 2000)
      console.log(res);
    } else {
      this.showCancel;
    }},
    );
  }

  showCancel() {
    this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'No se ha hecho ningun Cambio' });
  }

  showCreado() {
    this.messageService.add({ severity: 'succes', summary: 'Exito', detail: 'Se creo una nueva setting correctamente' });
  }

  showCambio() {
    this.messageService.add({ severity: 'succes', summary: 'Exito', detail: 'Se guardaron los cambios correctamente' });
  }
}

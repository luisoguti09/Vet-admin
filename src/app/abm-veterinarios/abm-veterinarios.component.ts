import { Component, OnInit } from '@angular/core';
import { AbmVeterinariosService } from '../services/abm-veterinarios.service';
import { Veterinarios } from './veterinarios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-abm-veterinarios',
  templateUrl: './abm-veterinarios.component.html',
  styleUrls: ['./abm-veterinarios.component.scss']
})
export class AbmVeterinariosComponent implements OnInit{

  url = 'https://vetonline.cu.ma/vet-admin/';

  httpOptions: any;

  vets!: Veterinarios[];

  cols!: any[];

  constructor(
    private ambVetServ: AbmVeterinariosService,

    private httpClient: HttpClient
  ){}
  ngOnInit() {
    this.ambVetServ.getVetsMini().then((data => {
      this.vets = data;
    }));
    this.cols = [
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'category', header: 'Category' },
      { field: 'contactos', header: 'Contactos' },
      { field: 'status', header: 'Estado' },
      { field: 'rating', header: 'Rating' }
  ];
  }

  /*getSeverity(status: string) {
    switch (status) {
        case 'Video-Llamada':
            return 'success';
        case 'Chat':
            return 'warning';
        case 'Desconectado':
            return 'danger';
    }
}*/
  modifSettings(){

  }

}

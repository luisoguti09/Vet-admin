import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbmVeterinariosService {

  httpOptions: any;
  apiUrl = 'https://vetonline.cu.ma/vet-admin/';

  constructor(
    private httpClient: HttpClient   
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
   }

  getVetsData() {
    return [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Raul Caram',
            description: 'Veterinario Clinico',
            horaConect: 6,
            horaDesconect: 14,
            category: 'Clinicos',
            acepataciones: 24,
            status: 'Video Llamada',
            rating: 5
        },
        {
            id: '1001',
            code: 'nvklal433',
            name: 'Patricia Gallo',
            description: 'Veterinaria Nutricionista',
            horaConect: 6,
            horaDesconect: 14,
            category: 'Nutricionistas',
            acepataciones: 61,
            status: 'Fuera de Linea',
            rating: 4
        },
        {
            id: '1002',
            code: 'zz21cz3c1',
            name: 'Antonio Farias',
            description: 'Veterinario Clinico',
            horaConect: 6,
            horaDesconect: 14,
            category: 'Clinico',
            acepataciones: 2,
            status: 'Chat',
            rating: 3
        },
        {
            id: '1003',
            code: '244wgerg2',
            name: 'Luis Gutierrez',
            description: 'Veterinario Endocrinologo',
            horaConect: 6,
            horaDesconect: 14,
            category: 'Endocrinologo',
            acepataciones: 25,
            status: 'Video Llamada',
            rating: 5
        },
        {
            id: '1004',
            code: 'h456wer53',
            name: 'Natalia Velez',
            description: 'Veterinaria Cirujana',
            horaConect: 6,
            horaDesconect: 14,
            category: 'Cirujia',
            acepataciones: 73,
            status: 'Video Llamada',
            rating: 4
        },
    ];
  }

getVetsMini() {
    return Promise.resolve(this.getVetsData().slice(0, 5));
}

getVetsSmall() {
    return Promise.resolve(this.getVetsData().slice(0, 10));
}

getVets() {
    return Promise.resolve(this.getVetsData());
}

modifSettings(){
  return this.httpClient.get(`${this.apiUrl}/vet-online-admin/api/settings.php`);
}

getValues(comisiones: number, ganbrutas: number, gannetas: number): Observable<any> {
  const url = `${this.apiUrl}?comisiones=${comisiones}&ganbrutas=${ganbrutas}&gannetas=${gannetas}`;
  return this.httpClient.get<any>(url);
}


}

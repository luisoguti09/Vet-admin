import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  url = 'https://vetonline.cu.ma/vet-admin/';

  httpOptions: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }),
    };
   }

  crearSetting(codigo: string, valor: string){
   return this.httpClient.post(`/vet-online-admin/api/settings.php`, {
      codigo, 
      valor
    }, this.httpOptions);
  }

  getSettings(): Observable<any> {
    return this.httpClient.get(`${this.url}/vet-online-admin/api/settings.php`);
  }

  deleteSettings(codigo: string, valor: string){
    return this.httpClient.delete(`${this.url}/vet-online-admin/api/settings.php`);
  }

  updateSettings(id: any, codigo: string, valor: any): Observable<any> {
    const data = {
      id: id,
      codigo: codigo,
      valor: valor,
    };
    return this.httpClient.put(`${this.url}/vet-online-admin/api/settings.php`, data);
  }

}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  url = 'http://localhost';

  httpOptions: any;

  constructor(
    private httpClient: HttpClient
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
   }

  crearSetting(codigo: string, valor: string){
   return this.httpClient.post(`${this.url}/vet-online-admin/api/settings.php`, {
      codigo, 
      valor
    }, this.httpOptions);
  }

  getSettings(): Observable<any> {
    return this.httpClient.get(`${this.url}/vet-online-admin/api/settings.php`);
  }

  

}

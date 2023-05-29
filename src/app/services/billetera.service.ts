import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BilleteraService {

  url = 'http://localhost';

  public httpOptions: any;

  constructor(
    private httpClient : HttpClient
  ) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };
  }

  getPayments(){
    return this.httpClient.get(`${this.url}/vet-online-admin/api/billetera.php`);
  }

  showPayments(comisiones: number, ganbrutas: number, gannetas: number){
    return this.httpClient.post(`$(this.url)/vet-online-admin/api/billetera.php`,{
      comisiones,
      ganbrutas,
      gannetas
    },this.httpOptions)
  }


}

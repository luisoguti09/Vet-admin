import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BilleteraService {

  url = 'https://vetonline.cu.ma';

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
    return this.httpClient.get(`${this.url}/billetera.php`);
  }

  showPayments(comisiones: number, ganbrutas: number, gannetas: number){
    return this.httpClient.post(`$(this.url)/billetera.php`,{
      comisiones,
      ganbrutas,
      gannetas
    },this.httpOptions)
  }


}

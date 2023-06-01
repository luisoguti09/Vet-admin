import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://vetonline.cu.ma/vet-admin/';

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

  loginSucc(usuario: any, pass: any) : Observable<any> {
    
    return this.httpClient.get(`${this.url}/vet-online-admin/api/login.php?usuario=${usuario}&password=${pass}`);
  }
  
  guardar(nombre: string, apellido: string, email: string, pass: string, tipoUsuario: string ){
    return this.httpClient.post(`${this.url}`,{
      nombre, 
      apellido,
      tipoUsuario,
      password: pass,
      usuario: email
    },this.httpOptions)
  }



}

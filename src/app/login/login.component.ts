import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ViewEncapsulation } from '@angular/compiler';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {

  public form!: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      pass: new FormControl('', [Validators.required]),
    });
  }

  constructor(
    private logServ: LoginService,
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
  ) { }



  loginAdmin() {

    this.logServ.loginSucc(
      this.form?.get('usuario')?.value,
      this.form?.get('pass')?.value)
      .subscribe(res => {
        if (res.success) {
          this.router.navigate(['dashboard-admin']);
        } else {
          this.showError();
        }
      });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Complete todos los campos' });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {
  AdminForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.AdminForm =  fb.group({
      username:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required])],
    });
  }
}

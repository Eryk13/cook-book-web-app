import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  form = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  });

  constructor(private authService: AuthService) {}

  onSubmit() {  
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    if(username && password) {
      this.authService.login(username, password).subscribe(
        res => this.authService.setToken(res.token)
      )
    }
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  errorMessage: string | undefined;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onSubmit() {
    const username = this.form.get('username')?.value;
    const password = this.form.get('password')?.value;
    if (username && password) {
      this.authService.login(username, password).subscribe({
        next: (res) => {
          this.authService.setToken(res.token);
          this.router.navigate(['recipes']);
        },
        error: (err) => {
          if (err.status === 401) {
            this.errorMessage = 'Nieprawidłowe hasło lub login';
            console.error(err)
          }
        },
      });
    }
  }
}

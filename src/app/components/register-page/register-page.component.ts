import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/models/register-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  form = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
  errorMessage: string | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const userDto = <RegisterUser>{
      username: this.form.get('username')?.value,
      password: this.form.get('password')?.value
    }; 
    this.authService.register(userDto).subscribe({
      next: () => { 
        this.router.navigate(['login'])
      },
      error: (err) => {
        if(err.status === 400) {
          this.errorMessage = "Uzytkownik o podanej nazwie juz istnieje";
        }
      }
    })
  }
}

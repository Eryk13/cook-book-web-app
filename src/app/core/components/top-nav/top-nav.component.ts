import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent {
  $isLoggedIn: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.$isLoggedIn = authService.$isLoggedIn;
  }

  logout() {
    this.authService.logout();
  }
}

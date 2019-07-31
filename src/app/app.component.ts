import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private auth: AuthService) {}
  title = 'AngularDebug';

  register() {
    this.auth.emailSignUp('wpbest@gmail.com', 'Montana$1');
  }

  login() {
    this.auth.emailLogin('wpbest@gmail.com', 'Montana$1');
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/main']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}

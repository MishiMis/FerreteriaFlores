import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); // Eliminar el token
    this.router.navigate(['/log-in']); // Redirigir al login
  }
}

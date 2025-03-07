import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privado',
  standalone: true,
  imports: [],
  templateUrl: './privado.component.html',
  styleUrl: './privado.component.css'
})
export class PrivadoComponent {

  constructor(private route:Router) { }

  logout() {
    localStorage.setItem("login", "false");
    this.route.navigate(['login']);
  }

}

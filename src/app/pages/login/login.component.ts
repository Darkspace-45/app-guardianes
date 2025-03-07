import { Component, ViewEncapsulation } from '@angular/core';
import { FormularioLoginComponent } from "../../components/formulario-login/formulario-login.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormularioLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

}

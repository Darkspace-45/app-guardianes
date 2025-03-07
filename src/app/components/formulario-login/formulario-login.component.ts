import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FormularioLoginComponent {

  constructor(private servicio:LoginService, private route:Router) { }

  email:any;
  password:any;

  login(formulario:any) {
    // console.log(formulario.value);
    this.servicio.postLogin(formulario.value).subscribe(acceso=>{
      // console.log(acceso);
      let token = acceso.accessToken
      if(token != ''){
        localStorage.setItem('login', "true");
        this.route.navigate(['privado']);
      }
    });
  }

  // ngOnInit(){
  //   this.servicio.getLogin().subscribe();
  // }

  

}

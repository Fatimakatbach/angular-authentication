import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  currentUser: any = {};

  constructor(public authService: AuthService, private actRoute: ActivatedRoute) {
    // Obtén el id de los parámetros de la ruta
    const id = this.actRoute.snapshot.paramMap.get('id');
  
    // Verifica si id es nulo antes de realizar la solicitud
    if (id !== null) {
      // Realiza la solicitud solo si id no es nulo
      this.authService.getUserProfile(id).subscribe(
        res => {
          // Maneja la respuesta aquí
          this.currentUser = res.msg;
        },
        error => {
          console.error('Error al obtener el perfil del usuario:', error);
          // Puedes manejar el error de acuerdo a tus necesidades
        }
      );
    } else {
      console.error('El parámetro "id" es nulo.');
      // Puedes manejar el caso en el que id es nulo de acuerdo a tus necesidades
    }
  }
  

  ngOnInit(): void {}
}

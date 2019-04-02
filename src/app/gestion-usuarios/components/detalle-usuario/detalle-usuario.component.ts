import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/gestion-usuarios/services/usuarios.service';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  usuario: any;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private userSrv: UsuariosService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let idUsuario = params.get('userid');
      console.log('ID Usuario: ' + idUsuario);
      this.userSrv.obtenerUsuario(+idUsuario) //El + es para convertirlo en number.
        .then(data => {
          this.usuario = data;
        })
        .catch(error => {
          console.log('Ha habido un problema con el usuario');
        }) 
    })
  }

  volverListado() {
    this.router.navigateByUrl('/');
  }

  borrarUsuario() {
    this.userSrv.borrarUsuario(this.usuario.id)
      .then(data => {
        if (data === true) {
          this.volverListado();
        }
      })
  }

}

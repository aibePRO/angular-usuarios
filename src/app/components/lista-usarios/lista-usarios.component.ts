import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-usarios',
  templateUrl: './lista-usarios.component.html',
  styleUrls: ['./lista-usarios.component.css']
})
export class ListaUsariosComponent implements OnInit {
  
  usuarios:any[];
  usuarios$:Observable<any[]>;
  suscripcion: Subscription;

  constructor(private userSrv: UsuariosService) { }

  ngOnInit() {
    //this.usuarios$ = this.userSrv.obtenerusuarios();
    // Push
    this.suscripcion = this.userSrv.usuariosModificaciones.subscribe(data => {
      this.usuarios$ = data;
    });
    this.userSrv.obtenerUsuarios();
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

}

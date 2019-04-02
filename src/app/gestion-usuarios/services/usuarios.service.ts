import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { PersistService } from 'src/app/servicios-core/services/persist.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private _usuarios: any[] = [];

  usuariosModificaciones: Subject<Observable<any[]>> = new Subject<Observable<any[]>>();

  get usuarios() {
    return this._usuarios;
  }

  set usuarios(value: any[]) {
    this._usuarios = value;
  }

  constructor(
    private httpSrv: HttpClient,
    private persistSrv: PersistService
  ) {
    this.httpSrv.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(users => {
        this._usuarios = users;
        this.persistSrv.saveData('users', this.usuarios);
        this.obtenerUsuarios(); //Push
      })
  }

  // API
  obtenerUsuarios() {
    this.usuariosModificaciones.next(of([...this._usuarios])); //Push
  }

  obtenerUsuario(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        // Filtrados
        let usuarioBuscado = this._usuarios.filter((user) => {
          return user.id === id;
        })[0];
        resolve(usuarioBuscado);
      } catch(error) {
        reject(error);
      }
    });
  }

  borrarUsuario(id: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
      try {
        const users = this._usuarios.filter((user) => {
          return user.id !== id;
        })
        this._usuarios = users;
        resolve(true);
      } catch(error) {
        reject(error);
      }
    });
  }

}

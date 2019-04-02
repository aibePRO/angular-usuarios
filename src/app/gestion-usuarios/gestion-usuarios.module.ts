import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUsuariosRoutingModule } from './gestion-usuarios-routing.module';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { ListaUsariosComponent } from './components/lista-usarios/lista-usarios.component';
import { WidgetModule } from '../widget/widget.module';
import { UsuariosService } from './services/usuarios.service';
import { HomeUsuariosComponent } from './components/home-usuarios/home-usuarios.component';

@NgModule({
  declarations: [
    ListaUsariosComponent,
    DetalleUsuarioComponent,
    HomeUsuariosComponent
  ],
  imports: [
    CommonModule,
    GestionUsuariosRoutingModule,
    WidgetModule
  ],
  providers: [
    UsuariosService
  ],
  exports: []
})
export class GestionUsuariosModule { }

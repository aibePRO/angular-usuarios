import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { ListaUsariosComponent } from './components/lista-usarios/lista-usarios.component';
import { HomeUsuariosComponent } from './components/home-usuarios/home-usuarios.component';
import { AccesoDetalleGuard } from './acceso-detalle.guard';

const routes: Routes = [
  {path:'', component: HomeUsuariosComponent,
    children: [
      {path: 'lista', component: ListaUsariosComponent},
      {path: ':userid', component: DetalleUsuarioComponent},
    ],
    // canActivate: [AccesoDetalleGuard] // Guard

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUsuariosRoutingModule { }

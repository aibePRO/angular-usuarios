import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaUsariosComponent } from './components/lista-usarios/lista-usarios.component';
import { ErrorComponent } from './components/error/error.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';
import { AccesoDetalleGuard } from './acceso-detalle.guard';

const routes: Routes = [
  {path:'', component:ListaUsariosComponent},
  {
    path:'usuarios',
    children: [
      {
        path: ':userid',
        component: DetalleUsuarioComponent
      }
    ],
    canActivate: [AccesoDetalleGuard]
  },
  {path: '**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

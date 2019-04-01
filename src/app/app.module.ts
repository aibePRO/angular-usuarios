import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsariosComponent } from './components/lista-usarios/lista-usarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { ErrorComponent } from './components/error/error.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsariosComponent,
    ErrorComponent,
    DetalleUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RegistrarClienteComponent } from './Registar/registrar-cliente/registrar-cliente.component';
import { ActualizarClienteComponent } from './Actualizar/actualizar-cliente/actualizar-cliente.component';
import { ClienteDetallesComponent } from './Detalles/cliente-detalles/cliente-detalles.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    RegistrarClienteComponent,
    ActualizarClienteComponent,
    ClienteDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

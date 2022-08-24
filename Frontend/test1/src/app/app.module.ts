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

import { MainComponent } from './Componentes-Login/main/main.component';
import { RegistrarComponent } from './Componentes-Login/registrar/registrar.component';
import { VerificarCorreoComponent } from './Componentes-Login/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './Componentes-Login/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    RegistrarClienteComponent,
    ActualizarClienteComponent,
    ClienteDetallesComponent,
    MainComponent,
    RegistrarComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent

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

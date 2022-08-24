import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modulos
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { RegistrarUsuarioComponent } from './Componentes/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './Componentes/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './Componentes/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './Shared/spinner/spinner.component';

import { environment } from 'src/environments/environment';
import { ActualizarComponent } from './Componentes-cliente/Actualizar/actualizar/actualizar.component';
import { ClienteDetallesComponent } from './Componentes-cliente/Detalles/cliente-detalles/cliente-detalles.component';
import { ListaClientesComponent } from './Componentes-cliente/Listas/lista-clientes/lista-clientes.component';
import { RegistrarClienteComponent } from './Componentes-cliente/Registrar/registrar-cliente/registrar-cliente.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    ActualizarComponent,
    ClienteDetallesComponent,
    ListaClientesComponent,
    RegistrarClienteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

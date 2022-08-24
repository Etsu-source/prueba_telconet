import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarComponent } from './Componentes-cliente/Actualizar/actualizar/actualizar.component';
import { ClienteDetallesComponent } from './Componentes-cliente/Detalles/cliente-detalles/cliente-detalles.component';
import { ListaClientesComponent } from './Componentes-cliente/Listas/lista-clientes/lista-clientes.component';
import { RegistrarClienteComponent } from './Componentes-cliente/Registrar/registrar-cliente/registrar-cliente.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { LoginComponent } from './Componentes/login/login.component';
import { RecuperarPasswordComponent } from './Componentes/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './Componentes/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './Componentes/verificar-correo/verificar-correo.component';

const routes: Routes = [

  //componentes login
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },

  //componente clientes
  {path:'', redirectTo:'clientes', pathMatch:'full'},
  { path: 'dashboard/clientes', component:ListaClientesComponent},
  { path: 'dashboard/registrar-cliente', component:RegistrarClienteComponent},
  { path: 'actualizar-cliente/:id',component:ActualizarComponent},
  { path: 'cliente-detalles/:id', component:ClienteDetallesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

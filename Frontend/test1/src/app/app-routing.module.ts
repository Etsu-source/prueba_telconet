import { ActualizarClienteComponent } from './Actualizar/actualizar-cliente/actualizar-cliente.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { RegistrarClienteComponent } from './Registar/registrar-cliente/registrar-cliente.component';
import { ClienteDetallesComponent } from './Detalles/cliente-detalles/cliente-detalles.component';

const routes: Routes = [
  {path : 'clientes',component:ListaClientesComponent},
  {path:'',redirectTo:'clientes',pathMatch:'full'},
  {path: 'registar-cliente', component : RegistrarClienteComponent},
  {path: 'actualizar-cliente/:id', component : ActualizarClienteComponent},
  {path: 'cliente-detalles/:id', component : ClienteDetallesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
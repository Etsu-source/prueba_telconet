import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Componentes-cliente/Cliente/cliente';
import { ClienteServiceService } from 'src/app/Servicios/servicio-cliente/cliente-service.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dataUser: any;
  clientes:Cliente[];

  constructor(private afAuth: AngularFireAuth,
      private router: Router,
      private clienteServicio:ClienteServiceService,) { }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
      if(user && user.emailVerified) {
        this.dataUser = user;
        console.log(user)
      } else {
        this.router.navigate(['/login']);
      }
    })
    this.obtenerCliente();
  }

  //se cierra sesion
  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  //listar clientes
  private obtenerCliente(){
    this.clienteServicio.obtenerListaDeCliente().subscribe(data => {
      this.clientes = data;
    });
  }

  //eliminar cliente
  eliminarCliente(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al cliente",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.clienteServicio.eliminarCliente(id).subscribe(dato => {
          console.log(dato);
          this.obtenerCliente();
          swal(
            'Cliente eliminado',
            'El cliente ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  //ver detalles cliente
  verDetallesDelCliente(id:number){
    this.router.navigate(['cliente-detalles', id]);
  }

  //actualizar cliente
  actualizarCliente(id:number){
    this.router.navigate(['actualizar-cliente',id]);
  }
}

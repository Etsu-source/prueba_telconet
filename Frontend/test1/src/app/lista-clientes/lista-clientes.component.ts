import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Cliente } from '../Cliente/cliente';
import { ClienteServiceService } from '../Service/cliente-service.service';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  clientes:Cliente[];

  constructor(private clienteServicio:ClienteServiceService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  private obtenerCliente(){
    this.clienteServicio.obtenerListaDeCliente().subscribe(data => {
      this.clientes = data;
    });
  }

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

  verDetallesDelCliente(id:number){
    this.router.navigate(['cliente-detalles', id]);

  }

  actualizarCliente(id:number){
    this.router.navigate(['actualizar-cliente',id]);
  }
}

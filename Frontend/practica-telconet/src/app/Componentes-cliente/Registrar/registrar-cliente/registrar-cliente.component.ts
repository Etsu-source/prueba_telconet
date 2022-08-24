import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteServiceService } from 'src/app/Servicios/servicio-cliente/cliente-service.service';
import { Cliente } from '../../Cliente/cliente';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  cliente : Cliente = new Cliente();
  constructor(private clienteServicio:ClienteServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  //guardar con el boton
  onSubmit(){
    this.guardarCliente();
    console.log(this.cliente);
  }

  //se va a la lista
  irALaListaDeCliente(){
    this.router.navigate(['/dashboard']);
    swal('Empleado registrado',`El cliente ${this.cliente.name} ha sido registrado con exito`,`success`);
  }

  //metodo guardar cliente
  guardarCliente(){
    this.clienteServicio.registrarClienteo(this.cliente).subscribe(dato =>
      {
        this.irALaListaDeCliente();
      }, e => console.log(e)
    );
  }
}

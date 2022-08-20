import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Cliente/cliente';
import { ClienteServiceService } from 'src/app/Service/cliente-service.service';
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

  onSubmit(){
    this.guardarCliente();
    console.log(this.cliente);
  }

  irALaListaDeCliente(){
    this.router.navigate(['/clientes']);
    swal('Empleado registrado',`El cliente ${this.cliente.name} ha sido registrado con exito`,`success`);
  }

  guardarCliente(){
    this.clienteServicio.registrarClienteo(this.cliente).subscribe(dato =>
      {
        this.irALaListaDeCliente();

      }, e => console.log(e)
      );
  }
}

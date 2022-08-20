import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Cliente/cliente';
import { ClienteServiceService } from 'src/app/Service/cliente-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent implements OnInit {

  id:number;
  cliente:Cliente = new Cliente();
  constructor(private clienteService:ClienteServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.obtenerClientePorId(this.id).subscribe(dato =>{
      this.cliente = dato;
    },error => console.log(error));
  }

  irAlaListaDeCliente(){
    this.router.navigate(['/clientes']);
    swal('Empleado actualizado',`El empleado ${this.cliente.name} ha sido actualizado con exito`,`success`);
  }

  //se guarda la ediccion de cliente
  onSubmit(){
    this.clienteService.actualizarEmpleado(this.id,this.cliente).subscribe(dato => {
      this.irAlaListaDeCliente();
    },error => console.log(error));
  }
}

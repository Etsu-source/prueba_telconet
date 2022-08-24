import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteServiceService } from 'src/app/Servicios/servicio-cliente/cliente-service.service';
import { Cliente } from '../../Cliente/cliente';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  id:number;
  cliente: Cliente = new Cliente();
  constructor(private clienteService: ClienteServiceService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clienteService.obtenerClientePorId(this.id).subscribe(dato =>{
      this.cliente = dato;
    },error => console.log(error));
  }

  irAlaListaDeCliente(){
    this.router.navigate(['/dashboard']);
    swal('Empleado actualizado',`El empleado ${this.cliente.name} ha sido actualizado con exito`,`success`);
  }

  //se guarda la ediccion de cliente
  onSubmit(){
    this.clienteService.actualizarEmpleado(this.id,this.cliente).subscribe(dato => {
      this.irAlaListaDeCliente();
    },error => console.log(error));
  }

}

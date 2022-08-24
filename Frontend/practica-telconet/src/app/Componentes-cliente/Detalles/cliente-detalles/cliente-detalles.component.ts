import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteServiceService } from 'src/app/Servicios/servicio-cliente/cliente-service.service';
import { Cliente } from '../../Cliente/cliente';
import swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-detalles',
  templateUrl: './cliente-detalles.component.html',
  styleUrls: ['./cliente-detalles.component.css']
})
export class ClienteDetallesComponent implements OnInit {

  id:number;
  cliente: Cliente;
  constructor(private route:ActivatedRoute, private clienteService:  ClienteServiceService) { }

  ngOnInit(): void {

    //obtiene en la bd el cliente seleccionado
    this.id = this.route.snapshot.params['id'];
    this.cliente = new Cliente();
    this.clienteService.obtenerClientePorId(this.id).subscribe(dato => {
      this.cliente = dato;
      swal(`Detalles del empleado ${this.cliente.name}`);
    });
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/Componentes-cliente/Cliente/cliente';


@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

 //Esta URL obtiene el listado de todos los cliente en el backend
 private baseURL = "http://localhost:8081/example0/personas";

 constructor(private httpClient : HttpClient) { }

 //este metodo nos sirve para obtener los cliente
 obtenerListaDeCliente():Observable<Cliente[]>{
   return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
 }

 //este metodo nos sirve para registrar un cliente
 registrarClienteo(cliente:Cliente) : Observable<Object>{
   return this.httpClient.post(`${this.baseURL}`,cliente);
 }

 //este metodo sirve para actualizar el cliente
 actualizarEmpleado(id:number,cliente:Cliente) : Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,cliente);
 }

 //este metodo sirve para obtener cliente
 obtenerClientePorId(id:number):Observable<Cliente>{
   return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
 }

 //este metodo sirve para eliminar cliente
 eliminarCliente(id:number): Observable<Object>{
   return this.httpClient.delete(`${this.baseURL}/${id}`);
 }
}

package com.example.jose.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.jose.excepciones.ResourceNotFoundException;
import com.example.jose.modelo.Clientes;
import com.example.jose.repositorio.ClienteRepositorio;



@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController
@RequestMapping({"/example0"})
public class ClienteControlador {
	
	@Autowired
	private ClienteRepositorio repositorio;
	
	@GetMapping("/personas")
	public List<Clientes> listarCliente (){
		return repositorio.findAll();
	}
	
	@PostMapping("/personas")
	@GetMapping
    public Clientes guardarCliente(@RequestBody Clientes cliente){
        return repositorio.save(cliente);
    }
	
	//este metodo sirve para buscar un cliente
	@GetMapping("/personas/{id}")
	public ResponseEntity<Clientes> obtenerCliente(@PathVariable Long id){
		Clientes clientes = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el cliente con el ID : " + id));
		return ResponseEntity.ok(clientes);
	}
	
	//este metodo sirve para actualizar cliente
	@PutMapping("/personas/{id}")
	public ResponseEntity<Clientes> editarCliente(@PathVariable Long id,@RequestBody Clientes c){
		Clientes clientes = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el cliente con el ID : " + id));
		
		clientes.setId(c.getId());
		clientes.setName(c.getName());
		clientes.setApellidos(c.getApellidos()); 
		
		Clientes clienteActualizado = repositorio.save(clientes);
		return ResponseEntity.ok(clienteActualizado);
	}
	
	//este metodo sirve para eliminar un cliente
	@DeleteMapping("/personas/{id}")
	public ResponseEntity<Map<String,Boolean>> eliminarCliente(@PathVariable Long id){
		Clientes clientes = repositorio.findById(id).orElseThrow(() -> new ResourceNotFoundException("No existe el cliente con el ID : " + id));
		
		repositorio.delete(clientes);
		Map<String, Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar",Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
}

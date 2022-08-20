package com.example.jose.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.jose.modelo.Clientes;


@Repository
public interface ClienteRepositorio extends JpaRepository <Clientes, Long>{
	
	
	

}
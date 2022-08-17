/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package fibonacci;

import java.util.Scanner;

/**
 *
 * @author jose_
 */

//Escriba un algoritmo para determinar si un número ingresado por teclado es Fibonacci o no
public class Fibonacci {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        //declarar variable
        int x;
        
        //scanner para poder ingresar desde la consola
        Scanner sc = new Scanner(System.in);
        System.out.println("Escribe el valor: ");
        x = sc.nextInt();

        //condicion si el valor x es igual al que ingreso al usuario por teclado
        if(verificar(x) == x){
            System.out.println("Es un numero Fibonacci");
        }
        else {
            System.out.println("No es un numero Fibonacci");
        }
    }  
    
    //funcion de verificacion fibonacci
    public static int verificar( int n){
        int a = 0, b = 0;
        int f = 1; //variable f para la serie fibonacci iniciando con 1

        //iniciamos el bucle para la suma del valor f
        while(f < n){
            
            f = f + a;//valor f esta tomando el valor de la suma f + a
            a = b;//valor a esta tomando el valor b
            b = f;  //valor b esta tomando la suma de los dos valores a + f
        }
        
        //devuelve el valor de f
        return f;
    }  
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package numerosprimos;

import java.util.Scanner;

/**
 *
 * @author jose_
 */
//Elabore un algoritmo que permita visaulizar los N primeros números primos. N es un valor que el usuario ingresa por teclado
public class NumerosPrimos {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        //declarar variable
        int N;
        //scanner para poder ingresar desde la consola
        Scanner sc = new Scanner(System.in);
        System.out.println("Escribe el valor: ");
        N = sc.nextInt();
        
        //llamo la funcion
        primo(N);  
    }
    
    //funcion para inprimir N primos
    public static void primo(int N)
    {
        //declaracion de variables
        int x, y, z;
        //imprimir para ingresar un valor por teclado
        System.out.println("El valor ingresado es " + N + " y los valores primos son:");
        //recorrer todo usando for del 1 al N
        for (x = 1; x <= N; x++) {
            //se omite el 0 y el compuesto
            if (x == 1 || x == 0)
                continue;
            //usando la variable z para saber si es primo o no
            z = 1;
            for (y = 2; y <= x / 2; ++y) {
                if (x % y == 0) {
                    z = 0;
                    break;
                }
            }
            //si z es 1 entonces x es primo pero
            //si z es 0 entonces x es primo
            if (z == 1)
                System.out.print(x + " ");
        }
    }
}

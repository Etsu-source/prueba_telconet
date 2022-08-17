/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package arrays;

/**
 *
 * @author jose_
 */

/*Elabore un algoritmo que permita obtener la sumatoria de todos los números que se 
hallen dentro de un arreglo. Como referencia se tiene el siguiente arreglo:
$arreglo = array ( 1,2,5, 8,array(2,3,array(1,2)) );*/
public class Arrays {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        // declarar e inicializar array
        int arreglos[][] = { {1,2,5,8},{2,3},{1,2} };
        int suma = 0;
        //recorrer arreglo (nos proporciona el número de filas)
        for (int i = 0; i < arreglos.length; ++i) {
            //recorrer numero de cada fila
            for(int a = 0; a < arreglos[i].length; ++a) { 
                //se suman dentro de cada array
                suma += arreglos[i][a];
            }
        }
        //imprimir pantalla la suma
        System.out.println("La suma dentro de un arreglo es: " + suma);
    }
}

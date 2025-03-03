package com.generation;

import java.util.Scanner; //Se agregó la clase Scanner

public class Codigo4 {

  public static void main(String[] args) {
    Scanner s = new Scanner(System.in); //Se agregó 
    
    System.out.print("Turno del jugador 1 (introduzca piedra, papel o tijeras): ");
    String j1 = s.nextLine();
    
    System.out.print("Turno del jugador 2 (introduzca piedra, papel o tijeras): ");
    String j2 = s.nextLine();
    
    if (j1.equals (j2)) { //Se cambió a equal
      System.out.println("Empate");
    } else {
      int g = 2;
      switch(j1) {
        case "piedra":
          if (j2 .equals ("tijeras")) { //Se cambió a equals
            g = 1;
          }

        case "papel":
          if (j2.equals ("piedra")) { //Se cambió a equals
            g = 1;
          
        case "tijera":
          if (j2.equals("papel")) {
            g = 1;
          }
          break;
        default: //Para entradas no válidas
        System.out.println("Entrada no válida para el jugador 1.");
        return;
       }
      System.out.println("Gana el jugador " + g);
    }
  
  }
}
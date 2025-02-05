import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor( private http: HttpClient) { }

  invocable_1(){
    let dato = "Funcion 1 invocada";
    return dato;
  }
  invocable_2(){
    let dato = "Funcion 2 invocada";
    return dato;
  }
  invocable_3(){
    let dato = "Funcion 3 invocada";
    return dato;
  }

  Sumar(numero:any){
    let dato = 5;
    return (dato + numero);
  }

  Sumar2(numero:any, numero2:any){
    let dato = 5;
    return (dato + numero + numero2);
  }
  Promedio(numero1:any, numero2:any){
    let promedio = (numero1 + numero2)/2;
    return promedio;
  }
}

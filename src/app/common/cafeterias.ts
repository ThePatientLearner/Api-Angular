import { InterpolationConfig } from "@angular/compiler"

export interface Cafeterias {

    cafeteria: string
    ciudad: string
    cafes: Cafe[]

}

export interface Cafe {

    nombre:string;
    sabor:string;
    cafeina:number;
    ingredientes:string[]
    imagen: string;

}


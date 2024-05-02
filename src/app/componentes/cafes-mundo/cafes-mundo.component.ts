import { Component, inject } from '@angular/core';
import { NavComponent } from '../../layout/nav/nav.component';
import { Cafeterias } from '../../common/cafeterias';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-cafes-mundo',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './cafes-mundo.component.html',
  styleUrl: './cafes-mundo.component.css'
})
export class CafesMundoComponent {
  Cafeteria: any[] = []; //Cafeteria es un array de tipo any y lo inicializamos con la ! para especificar que esta vacio y lo llena con el loadEquipo

  cafeteria!: Cafeterias[];  //cafesMundo es de tipo Cafeterias y lo inicializamos con la ! para especificar que está vacio y lo llenamos después con el loadEquipo
  private data: DataService = inject(DataService);

  constructor() {
 this.cargarCafesMundo();
  }

  private cargarCafesMundo() {
    this.data.getCafeterias().subscribe({ // se ejecutara al llamar a la funcion getCafeterias y recogerá los datos de la api
      next: (datos: Cafeterias[]) => { // si se ejecuta correctamente le decimos que recibe un parametro tipo Cafeterias llamado datos.
        this.cafeteria = datos; // asi esta variable la cargará y la mete en cafesmundo, que la habiamos creado previamente.
      },

      error: (error) => {
        console.log(error); // si hay un error al cargar los datos saltará esto en consola
      },

      complete: () => {
        console.log("Cafeterias cargadas"); // si es exitoso nos saltará esto en consola
      }
    });
  }
}

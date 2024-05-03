import { Component, inject } from '@angular/core';
import { TiposCafeComponent } from '../tipos-cafe/tipos-cafe.component';
import { TCafe } from '../../common/t-cafe';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { NavComponent } from '../../layout/nav/nav.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cafe',
  standalone: true,
  imports: [TiposCafeComponent,NavComponent,],
  templateUrl: './cafe.component.html',
  styleUrl: './cafe.component.css'
})
export class CafeComponent {
  [x: string]: any;

  cafe!: TCafe;
  data: DataService = inject(DataService);
  private ActivatedRoute: ActivatedRoute = inject(ActivatedRoute);
  

  constructor() {
    this.cargarEsteCafe();
  }

  private cargarEsteCafe() {
    const id = this.ActivatedRoute.snapshot.params["id"];
    this.data.getCafe(id).subscribe({
      next: (data: TCafe) => {
        this.cafe = data;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log("Cafeterias cargadas"); // si es exitoso nos saltará esto en consola
      }
      
    });
  }

 
  

}

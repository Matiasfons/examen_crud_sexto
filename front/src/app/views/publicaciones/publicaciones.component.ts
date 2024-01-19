import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

import Swal from 'sweetalert2';
import { PublicacionesService } from '../../Services/publicacion.service';

@Component({
  selector: 'app-publicaciones',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './publicaciones.component.html',
  styleUrl: './publicaciones.component.css',
})
export class PublicacionesComponent {
  title = 'Publicaciones';
  publicaciones: any;
  constructor(private publicacionService: PublicacionesService) { }

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.publicacionService.todos().subscribe((listaPublicaciones) => {
      this.publicaciones = listaPublicaciones;
      console.log(listaPublicaciones);
    });
  }
  eliminar(publicacionID: number) {
    Swal.fire({
      title: 'Publicaciones',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.publicacionService.eliminar(publicacionID).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Publicaciones',
            text: 'Se eliminó la publicacion del registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Publicacion',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }


}

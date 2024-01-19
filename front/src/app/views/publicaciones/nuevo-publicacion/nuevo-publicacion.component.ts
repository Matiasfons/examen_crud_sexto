import { UsuarioService } from './../../../Services/usuario.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { PublicacionesService } from '../../../Services/publicacion.service';
import { IUsuario } from '../../../Interfaces/iusuario';
@Component({
  selector: 'app-nuevo-publicacion',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-publicacion.component.html',
  styleUrl: './nuevo-publicacion.component.css',
})
export class NuevoPublicacionComponent {
  title = '';
  id!: number;
  ListaUsuarios: IUsuario[];

  publicacion: FormGroup = new FormGroup({
    ID_usuario: new FormControl(''),
    Contenido: new FormControl(''),

  });
  constructor(
    private publicacionesService: PublicacionesService,
    private rutas: Router,
    private parametros: ActivatedRoute,
    private usuarioService: UsuarioService

  ) { }

  async ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    await this.cargarUsuarios();

    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Publicacion';
    } else {
      this.title = 'Actualizar Publicacion';
      this.publicacionesService.uno(this.id).subscribe((res) => {
        console.log(res);
        this.publicacion.patchValue({
          ID_usuario: res.ID_usuario,
          Contenido: res.Contenido,
        });
      });
    }
  }
  cargarUsuarios() {
    this.usuarioService.todos().subscribe((res) => {
      this.ListaUsuarios = res;
    });
  }
  get f() {
    return this.publicacion.controls;
  }

  grabar() {
    Swal.fire({
      title: 'Publicacion',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.publicacionesService
            .insertar(this.publicacion.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Publicaciones',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/publicaciones']);
              this.id = 0;
            });
        } else {
          this.publicacionesService
            .actualizar(this.publicacion.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Publicaciones',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/publicaciones']);
              this.id = 0;
            });
        }
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

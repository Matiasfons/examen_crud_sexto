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
import { UsuarioService } from '../../../Services/usuario.service';
@Component({
  selector: 'app-nuevo-stock',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-usuario.component.html',
  styleUrl: './nuevo-usuario.component.css',
})
export class NuevoUsuarioComponent {
  title = '';
  id!: number;

  usuario: FormGroup = new FormGroup({
    Nombre: new FormControl(''),
    Correo: new FormControl(''),
    Contrasena: new FormControl(''),

  });
  constructor(
    private usuarioService: UsuarioService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Usuario';
    } else {
      this.title = 'Actualizar Usuario';
      this.usuarioService.uno(this.id).subscribe((res) => {
        console.log(res);
        this.usuario.patchValue({
          Nombre: res.Nombre,
          Correo: res.Correo,
          Contrasena: res.Contrasena,
        });
      });
    }
  }
  get f() {
    return this.usuario.controls;
  }

  grabar() {
    Swal.fire({
      title: 'Usuarios',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.usuarioService
            .insertar(this.usuario.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Usuarios',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/usuarios']);
              this.id = 0;
            });
        } else {
          this.usuarioService
            .actualizar(this.usuario.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Usuarios',
                text: 'Se actualizó con éxito el stock',
                icon: 'success',
              });
              this.rutas.navigate(['/usuarios']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'Usuarios',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}

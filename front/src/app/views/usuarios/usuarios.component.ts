import Swal from 'sweetalert2';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../Services/usuario.service';
@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
  title = 'Usuarios';
  usuarios: any;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.usuarioService.todos().subscribe((listUsers) => {
      this.usuarios = listUsers;
      console.log(listUsers);
    });
  }
  eliminar(usuarioId: number) {
    Swal.fire({
      title: 'Usuarios',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioService.eliminar(usuarioId).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Usuarios',
            text: 'Se eliminó el Usuario del registro',
            icon: 'success',
          });
        });
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

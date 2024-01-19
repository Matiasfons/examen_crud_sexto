import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from '../Interfaces/iusuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private urlBase: string =
    'http://localhost:8888/plantilla/Sexto_PHP_ANGULAR/examen/Controllers/Usuarios.Controller.php?op=';
  constructor(private clientePhp: HttpClient) { }
  todos(): Observable<IUsuario[]> {
    return this.clientePhp.get<IUsuario[]>(this.urlBase + 'todos');
  }
  insertar(usuarios: IUsuario): Observable<any> {
    var prov = new FormData();
    prov.append('nombre', usuarios.Nombre.toString());
    prov.append('correo', usuarios.Correo.toString());
    prov.append('contrasena', usuarios.Contrasena.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('usuarioId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prov);
  }
  uno(id: number): Observable<IUsuario> {
    var prov = new FormData();
    prov.append('usuarioId', id.toString());
    return this.clientePhp.post<IUsuario>(this.urlBase + 'uno', prov);
  }
  actualizar(usuarios: IUsuario, id: number): Observable<any> {
    var prov = new FormData();
    prov.append('usuarioId', id.toString());
    prov.append('nombre', usuarios.Nombre.toString());
    prov.append('correo', usuarios.Correo.toString());
    prov.append('contrasena', usuarios.Contrasena.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', prov);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPublicacion } from '../Interfaces/ipublicacion';

@Injectable({
  providedIn: 'root',
})
export class PublicacionesService {
  private urlBase: string =
    'http://localhost:8888/plantilla/Sexto_PHP_ANGULAR/examen/Controllers/Publicaciones.Controller.php?op=';
  constructor(private clientePhp: HttpClient) { }
  todos(): Observable<IPublicacion[]> {
    return this.clientePhp.get<IPublicacion[]>(this.urlBase + 'todos');
  }
  insertar(publicaciones: IPublicacion): Observable<any> {
    var prov = new FormData();
    prov.append('ID_usuario', publicaciones.ID_usuario.toString());
    prov.append('Contenido', publicaciones.Contenido.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('publicacionId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prov);
  }
  uno(id: number): Observable<IPublicacion> {
    var prov = new FormData();
    prov.append('publicacionId', id.toString());
    return this.clientePhp.post<IPublicacion>(this.urlBase + 'uno', prov);
  }
  actualizar(publicaciones: IPublicacion, id: number): Observable<any> {
    var prov = new FormData();
    prov.append('publicacionId', id.toString());
    prov.append('ID_usuario', publicaciones.ID_usuario.toString());
    prov.append('Contenido', publicaciones.Contenido.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', prov);
  }
}

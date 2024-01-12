import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProveedor } from '../Interfaces/iproveedor';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php?op=';
  constructor(private clientePhp: HttpClient) {}
  todos(): Observable<IProveedor[]> {
    return this.clientePhp.get<IProveedor[]>(this.urlBase + 'todos');
  }
}

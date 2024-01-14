import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProveedor } from '../Interfaces/iproveedor';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private urlBase: string =
    'http://localhost:8888/plantilla/Sexto_PHP_ANGULAR/Inventario/Controllers/Producto.Controller.php?op=';
  constructor(private clientePhp: HttpClient) { }
  todos(): Observable<IProducto[]> {
    return this.clientePhp.get<IProducto[]>(this.urlBase + 'todos');
  }
  insertar(productos: IProducto): Observable<any> {
    var prov = new FormData();
    prov.append('nombre', productos.Nombre.toString());
    prov.append('precio', productos.Precio.toString());
    prov.append('cantidad', productos.Cantidad.toString());
    console.log(productos.Cantidad.toString());

    return this.clientePhp.post(this.urlBase + 'insertar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('productoId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prov);
  }
  uno(id: number): Observable<IProducto> {
    var prov = new FormData();
    prov.append('productoId', id.toString());
    return this.clientePhp.post<IProducto>(this.urlBase + 'uno', prov);
  }
  actualizar(productos: IProducto, id: number): Observable<any> {
    var prov = new FormData();
    prov.append('productoId', id.toString());
    prov.append('nombre', productos.Nombre.toString());
    prov.append('precio', productos.Precio.toString());
    prov.append('cantidad', productos.Cantidad.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', prov);
  }
}

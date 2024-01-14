import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStock } from '../Interfaces/istock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private urlBase: string =
    'http://localhost:8888/plantilla/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op=';
  constructor(private clientePhp: HttpClient) { }
  todos(): Observable<IStock[]> {
    return this.clientePhp.get<IStock[]>(this.urlBase + 'todos');
  }
  insertar(stocks: IStock): Observable<any> {
    var prov = new FormData();
    prov.append('productoId', stocks.ProductoId.toString());
    prov.append('proveedorId', stocks.ProveedorId.toString());
    prov.append('cantidad', stocks.Cantidad.toString());
    prov.append('precio_Venta', stocks.Precio_Venta.toString());
    return this.clientePhp.post(this.urlBase + 'insertar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('stockId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prov);
  }
  uno(id: number): Observable<IStock> {
    var prov = new FormData();
    prov.append('stockId', id.toString());
    return this.clientePhp.post<IStock>(this.urlBase + 'uno', prov);
  }
  actualizar(stocks: IStock, id: number): Observable<any> {
    var prov = new FormData();
    prov.append('stockId', id.toString());
    prov.append('productoId', stocks.ProductoId.toString());
    prov.append('proveedorId', stocks.ProveedorId.toString());
    prov.append('cantidad', stocks.Cantidad.toString());
    prov.append('precio_Venta', stocks.Precio_Venta.toString());
    return this.clientePhp.post(this.urlBase + 'actualizar', prov);
  }
}

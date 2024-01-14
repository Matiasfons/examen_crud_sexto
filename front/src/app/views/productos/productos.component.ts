import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IProducto } from '../../Interfaces/iproducto';
import { ProductosService } from '../../Services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
})
export class ProductosComponent {
  title = 'Productos';
  productos: any;
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.productosService.todos().subscribe((listaProductos) => {
      this.productos = listaProductos;
      console.log(listaProductos);
    });
  }
  eliminar(productoId: number) {
    Swal.fire({
      title: 'Proveedores',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosService.eliminar(productoId).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Producto',
            text: 'Se eliminó con producto el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Producto',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }


}

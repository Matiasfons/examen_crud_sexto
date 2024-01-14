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
import { StockService } from '../../../Services/stock.service';
@Component({
  selector: 'app-nuevo-stock',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-stock.component.html',
  styleUrl: './nuevo-stock.component.css',
})
export class NuevoStockComponent {
  title = '';
  id!: number;

  stock: FormGroup = new FormGroup({
    ProductoId: new FormControl(''),
    ProveedorId: new FormControl(''),
    Cantidad: new FormControl(''),
    Precio_Venta: new FormControl(''),

  });
  constructor(
    private stockService: StockService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Stock';
    } else {
      this.title = 'Actualizar Stock';
      this.stockService.uno(this.id).subscribe((res) => {
        console.log(res);
        this.stock.patchValue({
          ProductoId: res.ProductoId,
          ProveedorId: res.ProveedorId,
          Cantidad: res.Cantidad,
          Precio_Venta: res.Precio_Venta
        });
      });
    }
  }
  get f() {
    return this.stock.controls;
  }

  grabar() {
    Swal.fire({
      title: 'Stocks',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.stockService
            .insertar(this.stock.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Stocks',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/stocks']);
              this.id = 0;
            });
        } else {
          this.stockService
            .actualizar(this.stock.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Stocks',
                text: 'Se actualizó con éxito el stock',
                icon: 'success',
              });
              this.rutas.navigate(['/stocks']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'Stocks',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}

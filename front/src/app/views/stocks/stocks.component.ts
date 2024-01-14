import Swal from 'sweetalert2';
import { IStock } from '../../Interfaces/istock';
import { StockService } from './../../Services/stock.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponent {
  title = 'Stocks';
  stock: any;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.stockService.todos().subscribe((listStocks) => {
      this.stock = listStocks;
      console.log(listStocks);
    });
  }
  eliminar(stockId: number) {
    Swal.fire({
      title: 'Stocks',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.stockService.eliminar(stockId).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Producto',
            text: 'Se eliminó stock del registro',
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

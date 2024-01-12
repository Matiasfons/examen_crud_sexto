import { Component } from '@angular/core';
import { IProveedor } from '../../Interfaces/iproveedor';
import { ProveedorService } from '../../Services/proveedor.service';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css',
})
export class ProveedoresComponent {
  title = 'Proveedores';
  proveedores: IProveedor[];

  constructor(private proveedoresServicio: ProveedorService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.proveedoresServicio.todos().subscribe((listaproveedores) => {
      this.proveedores = listaproveedores;
      console.log(listaproveedores);
    });
  }
}

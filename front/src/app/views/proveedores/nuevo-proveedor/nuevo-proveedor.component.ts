import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProveedorService } from '../../../Services/proveedor.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nuevo-proveedor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-proveedor.component.html',
  styleUrl: './nuevo-proveedor.component.css',
})
export class NuevoProveedorComponent {
  title = 'Nuevo Proveedor';

  provedor: FormGroup;

  constructor(
    private proveedorServicio: ProveedorService,
    private rutas: Router
  ) {}

  ngOnInit() {
    this.provedor = new FormGroup({
      Nombres: new FormControl('', Validators.required),
      Telefono: new FormControl('', [
        Validators.required,
        Validators.maxLength(17),
        Validators.minLength(7),
      ]),
      Correo: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  get f() {
    return this.provedor.controls;
  }

  grabar() {
    this.proveedorServicio.insertar(this.provedor.value).subscribe((res) => {
      console.log(res);
      this.rutas.navigate(['/proveedores']);
    });
  }
}

import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProductosComponent } from './views/productos/productos.component';
import { ProveedoresComponent } from './views/proveedores/proveedores.component';
import { NuevoProveedorComponent } from './views/proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { StocksComponent } from './views/stocks/stocks.component';
import { NuevoProductoComponent } from './views/productos/nuevo-producto/nuevo-producto.component';
import { NuevoStockComponent } from './views/stocks/nuevo-stock/nuevo-stock.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'productos', component: ProductosComponent },

  {
    path: 'proveedores',
    component: ProveedoresComponent,
  },
  {
    path: 'nuevo-proveedor',
    component: NuevoProveedorComponent,
  },
  {
    path:'nuevo-producto',
    component:NuevoProductoComponent
  },
  {
    path:'nuevo-stock',
    component:NuevoStockComponent
  },
  {
    path:'editar-stock/:id',
    component:NuevoStockComponent
  },
  {
    path: 'editar-producto/:id',
    component: NuevoProductoComponent,
  },
  {
    path: 'editar-proveedor/:id',
    component: NuevoProveedorComponent,
  },

  {
    path: 'stocks',
    component: StocksComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];

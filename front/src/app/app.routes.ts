import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

// import { NuevoStockComponent } from './views/stocks/nuevo-stock/nuevo-stock.component';
import { PublicacionesComponent } from './views/publicaciones/publicaciones.component';
import { NuevoPublicacionComponent } from './views/publicaciones/nuevo-publicacion/nuevo-publicacion.component';
import { UsuariosComponent } from './views/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './views/usuarios/nuevo-usuario/nuevo-usuario.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  { path: 'publicaciones', component: PublicacionesComponent },

  { path: 'usuarios', component: UsuariosComponent },

  {
    path:'nuevo-publicacion',
    component:NuevoPublicacionComponent
  },
  {
    path:'nuevo-usuario',
    component:NuevoUsuarioComponent
  },

  {
    path: 'editar-publicacion/:id',
    component: NuevoPublicacionComponent,
  },
  {
    path: 'editar-usuario/:id',
    component: NuevoUsuarioComponent,
  },



  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];

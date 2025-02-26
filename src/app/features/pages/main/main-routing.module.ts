import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuard } from '../../../core/guards/auth.guard';
import { ProductsComponent } from '../products/products.component';
import { VentasComponent } from '../ventas/ventas.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';

const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'users',component:UsuariosComponent },
      {path: 'sale',component:VentasComponent},
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

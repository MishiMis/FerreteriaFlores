import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './features/auth/log-in/log-in.component';
import { MainComponent } from './features/pages/main/main.component';
import { DashboardComponent } from './features/pages/dashboard/dashboard.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProductsComponent } from './features/pages/ProductsComponent/products/products.component';
import { VentasComponent } from './features/pages/ventas/ventas.component';
import { UsuariosComponent } from './features/pages/UsersComponent/usuarios/usuarios.component';

export const routes: Routes = [
  { path: '', component: LogInComponent, pathMatch: 'full' },
  { 
    path: 'main', 
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'sale', component: VentasComponent },
      { path: 'users', component: UsuariosComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

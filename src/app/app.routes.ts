import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './features/auth/log-in/log-in.component';

export const routes: Routes = [
  { path: '', component: LogInComponent, pathMatch: 'full' },
  { path: 'main', loadChildren: () => import('./features/pages/main/main-routing.module').then(m => m.MainRoutingModule) },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

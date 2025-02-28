import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';



@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule, CommonModule,MatTooltip],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css',
})
export class LeftSidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  items = [
    {
      routeLink: '/main/dashboard',
      icon: 'fal fa-home',
      label: 'Inicio',
    },
    {
      routeLink: '/main/products',
      icon: 'fal fa-hammer',
      label: 'Productos',
    },
    {
      routeLink: '/main/sale',
      icon: 'fal fa-shopping-cart',
      label: 'Ventas',
    },
    {
      routeLink: '/main/users',
      icon: 'fal fa-users',
      label: 'Usuarios',
    }
  ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
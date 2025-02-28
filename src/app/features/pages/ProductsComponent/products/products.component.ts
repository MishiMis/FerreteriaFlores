import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AddProductsComponent } from '../add-products/add-products.component';

@Component({
  selector: 'app-products',
  imports: [ButtonComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

    private readonly dialog = inject(MatDialog);
  

    openModal() {
      const dialogRef = this.dialog.open(AddProductsComponent, {
        width: '1800px',
      });
    }

}

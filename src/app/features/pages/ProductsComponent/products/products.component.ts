import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DataService } from '../../../../core/services/data.service';
import { AddProductsComponent } from '../add-products/add-products.component';
import { EditProductsComponent } from '../edit-products/edit-products.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-products',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatDialogModule, ButtonComponent,MatIconModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['nombre','descripcion', 'precio', 'stock', 'min_stock', 'max_stock', 'categoria','acciones'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.dataService.getProducts().subscribe((data: any[]) => {
      console.log('Categorías obtenidas:', data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
  

  openModal() {
    const dialogRef = this.dialog.open(AddProductsComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.loadProducts();
    });
  }
    onEdit(item: any): void {
      console.log('Data enviada al diálogo:', item);
  
      const dialogRef = this.dialog.open(EditProductsComponent, {
        width: '600px',
        data: item,
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        if (result) this.loadProducts();
  
      });
    }
}

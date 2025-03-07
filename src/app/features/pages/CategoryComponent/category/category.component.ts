import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from '../add-category/add-category.component';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { DataService } from '../../../../core/services/data.service';
import { EditCategoryComponent } from '../edit-category/edit-category.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-category',
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatDialogModule, ButtonComponent, MatIconModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombre','producto','acciones'];
  dataSource = new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories() {
    this.dataService.getCategory().subscribe((data: any[]) => {
      console.log('Categorías obtenidas:', data);
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
  

  openModal() {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.loadCategories();
    });
  }
  onEdit(item: any): void {
    console.log('Data enviada al diálogo:', item);

    const dialogRef = this.dialog.open(EditCategoryComponent, {
      width: '600px',
      data: item,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.loadCategories();

    });
  }
}

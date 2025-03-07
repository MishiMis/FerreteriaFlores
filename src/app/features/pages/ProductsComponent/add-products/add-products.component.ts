import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule , Validators, FormBuilder, FormGroup} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputFormComponent } from '../../../../shared/components/input-form/input-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../../core/services/data.service';


@Component({
  selector: 'app-add-products',
  imports: [ FormsModule, MatIconModule, ReactiveFormsModule, InputFormComponent, MatTooltipModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  productForm: FormGroup;
  categories: string[] = [];


  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddProductsComponent>,private dataService: DataService
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0 as number, [Validators.required, Validators.min(0)]],
      stock: [0 as number, [Validators.required, Validators.min(0)]],
      min_stock: [0 as number, [Validators.required, Validators.min(0)]],
      max_stock: [0 as number, [Validators.required, Validators.min(0)]],
      category_name: ['', [Validators.required]],
      image_url: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.dataService.getCategory().subscribe({
      next: (data: any[]) => {
        this.categories = data.map(category => category.name);
      },
      error: (err) => {
        console.error('Error al obtener categorías', err);
      }
    });
  }
  onSubmit() {
    if (this.productForm.valid) {
      const productData = {
        ...this.productForm.value,
        price: Number(this.productForm.value.price),
        stock: Number(this.productForm.value.stock),
        min_stock: Number(this.productForm.value.min_stock),
        max_stock: Number(this.productForm.value.max_stock)
      };
      this.dataService.createProduct(productData).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          this.dialogRef.close(response);
        },
        error: (error) => {
          console.error('Error al enviar los datos:', error);
        }
      });
    } else {
      console.log('Formulario no válido');
      this.productForm.markAllAsTouched();
    }
  }
  

  close(): void {
    this.dialogRef.close();
  }
}

import { Component, Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputFormComponent } from '../../../../shared/components/input-form/input-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-edit-products',
  imports: [FormsModule, MatIconModule, ReactiveFormsModule, InputFormComponent, MatTooltipModule],
  templateUrl: './edit-products.component.html',
  styleUrl: './edit-products.component.css'
})
export class EditProductsComponent {
  productForm: FormGroup;
  productId: string;
  private dataService = inject(DataService);

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productId = String(this.data?.id || '');
    this.productForm = this.fb.group({
      name: [this.data?.name || '', [Validators.required]],
      description: [this.data?.description || '', [Validators.required]],
      price: [this.data?.price || '', [Validators.required, Validators.pattern('^[0-9]+(\\.[0-9]{1,2})?$')]],
      stock: [this.data?.stock || 0, [Validators.required, Validators.min(0)]],
      min_stock: [this.data?.min_stock || 0, [Validators.required, Validators.min(0)]],
      max_stock: [this.data?.max_stock || 0, [Validators.required, Validators.min(0)]],
      category_name: [this.data?.category?.name || '', [Validators.required]],
      image_url: [this.data?.image_url || '', [Validators.required, Validators.pattern('https?://.+')]]
    });
  }

  close(): void {
    this.dialogRef.close(false);
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    const updatedData = this.productForm.value;

    this.dataService.updateProduct(this.productId, updatedData).subscribe(
      (response) => {
        console.log('Producto actualizado con éxito:', response);
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Error al actualizar el producto:', error);
      }
    );
  }
}

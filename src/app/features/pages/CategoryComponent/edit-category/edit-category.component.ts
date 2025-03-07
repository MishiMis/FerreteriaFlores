import { Component,Inject, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule , Validators, FormBuilder, FormGroup} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputFormComponent } from '../../../../shared/components/input-form/input-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../../core/services/data.service';
@Component({
  selector: 'app-edit-category',
  imports: [FormsModule, MatIconModule, ReactiveFormsModule, InputFormComponent, MatTooltipModule],
  templateUrl: './edit-category.component.html',
  styleUrl: './edit-category.component.css'
})
export class EditCategoryComponent {

  categoryForm: FormGroup;
  categoryId: number;
  private dataService = inject(DataService);
  

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.categoryId = this.data?.id || 0;
    this.categoryForm = this.fb.group({
      name: [this.data?.name || '', [Validators.required]]
    });
  }

  close(): void {
    this.dialogRef.close(false);
  }

  onSubmit(): void {
    if (this.categoryForm.invalid) return;

    const updatedData = { name: this.categoryForm.value.name };

    this.dataService.updateCategory(this.categoryId, updatedData).subscribe(
      (response) => {
        console.log('Categoría actualizada con éxito:', response);
        console.log('datos',response)
        this.dialogRef.close(true);
      },
      (error) => {
        console.error('Error al actualizar la categoría:', error);
      }
    );
  }
  

}

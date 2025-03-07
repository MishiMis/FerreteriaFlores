import { Component,inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule , Validators, FormBuilder, FormGroup} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputFormComponent } from '../../../../shared/components/input-form/input-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../../../../core/services/data.service';


@Component({
  selector: 'app-add-category',
  imports: [FormsModule, MatIconModule, ReactiveFormsModule, InputFormComponent, MatTooltipModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  categoryForm: FormGroup;
  private dataService = inject(DataService);

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddCategoryComponent>) {
    this.categoryForm = this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      this.dataService.createCategory(this.categoryForm.value).subscribe({
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
      this.categoryForm.markAllAsTouched();
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}

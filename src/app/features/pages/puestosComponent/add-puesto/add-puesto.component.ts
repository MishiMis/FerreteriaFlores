import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InputFormComponent } from '../../../../shared/components/input-form/input-form.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ShareddDataService } from '../../../../core/services/sharedd-data.service';


@Component({
  selector: 'app-add-puesto',
  imports: [MatIconModule,InputFormComponent, ReactiveFormsModule],
  templateUrl: './add-puesto.component.html',
  styleUrl: './add-puesto.component.css'
})
export class AddPuestoComponent {
  moduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private shareddDataService: ShareddDataService,
    private dialogRef: MatDialogRef<AddPuestoComponent>) {

      this.moduleForm = this.fb.group({
        nombre: ['', Validators.required],
        location: ['', Validators.required],
        required: ['', Validators.required],
        duration: ['', Validators.required],
        descripcion: ['', Validators.required],
        vacantes: ['', Validators.required],

      });

    }
  onSubmit() {
    if (this.moduleForm.valid) {

      this.shareddDataService.updateModuleData(this.moduleForm.value);
      this.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }

}

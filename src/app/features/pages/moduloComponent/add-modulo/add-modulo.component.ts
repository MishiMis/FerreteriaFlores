import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { InputFormComponent } from '../../../../shared/components/input-form/input-form.component';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedDataService } from '../../../../core/services/shared-data.service';

@Component({
  selector: 'app-add-modulo',
  imports: [MatIconModule,InputFormComponent, ReactiveFormsModule],
  templateUrl: './add-modulo.component.html',
  styleUrl: './add-modulo.component.css'
})
export class AddModuloComponent {
  moduleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private sharedDataService: SharedDataService,
    private dialogRef: MatDialogRef<AddModuloComponent>) {

      this.moduleForm = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required]
      });

    }
  onSubmit() {
    if (this.moduleForm.valid) {

      this.sharedDataService.updateModuleData(this.moduleForm.value);
      this.close();
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}

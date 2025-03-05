import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule , Validators, FormBuilder, FormGroup} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { InputFormComponent } from '../../../../shared/components/input-form/input-form.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-products',
  imports: [ FormsModule, MatIconModule, ReactiveFormsModule, InputFormComponent, MatTooltipModule],
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  productForm: FormGroup;

  constructor(private fb: FormBuilder , private dialogRef:MatDialogRef<AddProductsComponent>) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      stock: [0, [Validators.required]],
      min_stock: [0, [Validators.required]],
      max_stock: [0, [Validators.required]],
      category_id: [0, [Validators.required]],
      image_url: ['', [Validators.required]]
    });
  }
onSubmit(){
  if(this.productForm.valid){
    console.log('Datos Enviados', this.productForm.value);
  }
  else{
    console.log('Formulario no valido');
  }
}
close():void{
  this.dialogRef.close()
}
}

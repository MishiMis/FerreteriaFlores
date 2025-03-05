import { Component , forwardRef, input, model, signal} from '@angular/core';
import { FormsModule , NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-input-form',
  imports: [FormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
  providers: [
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=>InputFormComponent),
      multi:true,
    }
  ]
})
export class InputFormComponent {
  errorType=input<string>('');
  label = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('');
  required = input<boolean>(false);
  maxLength = input<number>(200);
  readonly = input<boolean>(false);
  value = model<string>('');
  isPositive = input<boolean>(false);


  isTouched = signal(false);
  showError = signal(false);
  errorMessage = signal('');
  disabled = signal(false);


  inputClasses = signal(`
    ${this.showError()?'border-red-500':'border-gray-300'}`)

    
}

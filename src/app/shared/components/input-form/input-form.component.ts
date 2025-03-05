import { Component, forwardRef, input, model, signal } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFormComponent),
      multi: true,
    },
  ],
})
export class InputFormComponent {
  errorType = input<string>('');
  label = input<string>('');
  type = input<string>('text');
  placeholder = input<string>('');
  required = input<boolean>(false);
  maxLength = input<number>(250);
  readonly = input<boolean>(false);
  value = model<string>('');
  isPositive = input<boolean>(false);

  isTouched = signal(false);
  showError = signal(false);
  errorMessage = signal('');
  disabled = signal(false);
  onChange: any = () => {};
  onTouch: any = () => {};

  inputClasses = signal(`
    ${this.showError() ? 'border-red-500' : 'border-gray-300'}
  `);

  writeValue(value: string): void {
    this.value.set(value || '');
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onTouched(): void {
    this.isTouched.set(true);
    this.onTouch();
    this.validateField();
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
 
    if (this.isPositive() && this.type() === 'text') { 
      let newValue = input.value
        .replace(/[^\d.]/g, '')  
        .replace(/^\./, '0.')  
        .replace(/\./, '#').replace(/\./g, '').replace('#', '.'); 
   
      if (newValue === '') {
        newValue = '0';
      } 
      input.value = newValue;
      let value = Number(newValue);
  
      if (isNaN(value)) {
        value = 0;
        input.value = '0';
      }
  
      if (value < 0) {
        value = 0;
        input.value = '0';
        this.showError.set(true);
        this.errorMessage.set('Este campo no puede ser negativo');
      }
  
      if (!input.value && this.required()) {
        this.showError.set(true);
        this.errorMessage.set('Este campo es requerido');
        this.value.set('');
      } else {
        this.value.set(value.toString());
      }

      this.onChange(this.value());
      return;
    }
    this.value.set(input.value);
    this.onChange(input.value);
    this.validateField();
  }

  private validateField(): void {
    if (this.required() && !this.value()) {
      this.showError.set(true);
      this.errorMessage.set(this.errorType() || 'Este campo es requerido');
    } else {
      this.showError.set(false);
      this.errorMessage.set('');
    }
    this.onChange(this.value());
  }
}

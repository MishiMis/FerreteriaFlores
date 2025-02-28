import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  readonly text = input<string>('');
  readonly icon = input<string>('');
  readonly disabled = input<boolean>(false);
  readonly fullWidth = input<boolean>(false);
  readonly bgColor = input<string>('bg-[#10243d]');
  readonly hoverColor = input<string>('hover:bg-[#193b61]');
  readonly activeColor = input<string>('active:bg-primary-800');
  readonly moreClasses = input<string>('');
}

import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-usuarios',
  imports: [ButtonComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {

  private readonly dialog = inject(MatDialog);


  openModal() {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '1800px',
    });
  }

}
  
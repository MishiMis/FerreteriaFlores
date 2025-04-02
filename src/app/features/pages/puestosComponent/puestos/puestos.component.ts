import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog'; // Añade MatDialog
import { MatIconModule } from '@angular/material/icon';
import { AddPuestoComponent } from '../add-puesto/add-puesto.component';
import { ShareddDataService } from '../../../../core/services/sharedd-data.service';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-puestos',
  imports: [MatIconModule, MatExpansionModule],
  templateUrl: './puestos.component.html',
  styleUrl: './puestos.component.css'
})
export class PuestosComponent {
  moduleData: any[] = [];
  

  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PuestosComponent>,
    private dialog: MatDialog,
    private shareddDataService: ShareddDataService
  ) {}

  ngOnInit() {
    this.shareddDataService.currentModuleData.subscribe(data => {
      if (data) {
        this.moduleData = [...this.moduleData, data];
        console.log('Datos recibidos:', this.moduleData);
      }
    });
  }
  
  openModal() {
    const dialogRef = this.dialog.open(AddPuestoComponent, { 
      width: '1800px',
    });
  }
  
  close(): void {
    this.dialogRef.close();
  }
}
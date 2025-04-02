import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { ButtonModule } from 'primeng/button';
import { AddModuloComponent } from '../add-modulo/add-modulo.component';
import {MatCardModule} from '@angular/material/card';
import { SharedDataService } from '../../../../core/services/shared-data.service';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PuestosComponent } from '../../puestosComponent/puestos/puestos.component';


@Component({
  selector: 'app-modulo',
  imports: [ButtonComponent, ButtonModule, MatCardModule,MatIconModule, MatTooltipModule],
  templateUrl: './modulo.component.html',
  styleUrl: './modulo.component.css'
})
export class ModuloComponent implements OnInit {
  moduleData: any[] = [];

  private readonly dialog = inject(MatDialog);
  private readonly sharedDataService = inject(SharedDataService);

  ngOnInit() {
    this.sharedDataService.currentModuleData.subscribe(data => {
      if (data) {
        this.moduleData = [...this.moduleData, data];
        console.log('Datos recibidos:', this.moduleData);
      }
    });
  }

  openModal() {
    const dialogRef = this.dialog.open(AddModuloComponent, {
      width: '1800px',
    });
  }
  openDetails(module: any) {
    const dialogRef = this.dialog.open(PuestosComponent, {
      width: '1800px',
      data: module
    });
  }

}

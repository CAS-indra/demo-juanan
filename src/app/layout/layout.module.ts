import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { DesarrolladorComponent } from './desarrollador.component';
import { FechaComponent } from './fecha.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CabeceraComponent, PieComponent, DesarrolladorComponent, FechaComponent],
  imports: [CommonModule, RouterModule],
  exports: [CabeceraComponent, PieComponent],
})
export class LayoutModule {}

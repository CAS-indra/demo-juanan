import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { DesarrolladorComponent } from './desarrollador.component';

@NgModule({
  declarations: [CabeceraComponent, PieComponent, DesarrolladorComponent],
  imports: [CommonModule],
  exports: [CabeceraComponent, PieComponent],
})
export class LayoutModule {}

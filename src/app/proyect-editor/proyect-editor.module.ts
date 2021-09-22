import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectEditorRoutingModule } from './proyect-editor-routing.module';
import { ProyectEditorComponent } from './proyect-editor.component';


@NgModule({
  declarations: [
    ProyectEditorComponent
  ],
  imports: [
    CommonModule,
    ProyectEditorRoutingModule
  ]
})
export class ProyectEditorModule { }

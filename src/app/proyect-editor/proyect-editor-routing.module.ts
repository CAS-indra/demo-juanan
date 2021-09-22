import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectEditorComponent } from './proyect-editor.component';

const routes: Routes = [
  { path: '', component: ProyectEditorComponent },
  { path: ':id', component: ProyectEditorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProyectEditorRoutingModule {}

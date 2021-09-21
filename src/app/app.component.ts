import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public proyectos = [
    {
      name: 'Aprender angular',
      status: 1,
    },
    {
      name: 'Tener un buen trabajo',
      status: 0,
    },
  ];
  public color = 'brown';

  public elValor = 5;

  public multiplo(cantidad: number): number {
    return cantidad * this.elValor;
  }

  public incrementar(): void {
    this.elValor++;
  }
  reducir(): void {
    this.elValor--;
  }
}

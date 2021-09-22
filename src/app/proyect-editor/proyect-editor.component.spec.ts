import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectEditorComponent } from './proyect-editor.component';

describe('ProyectEditorComponent', () => {
  let component: ProyectEditorComponent;
  let fixture: ComponentFixture<ProyectEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProyectEditorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

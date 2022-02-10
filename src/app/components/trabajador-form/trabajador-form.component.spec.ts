import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadorFormComponent } from './trabajador-form.component';

describe('TrabajadorFormComponent', () => {
  let component: TrabajadorFormComponent;
  let fixture: ComponentFixture<TrabajadorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajadorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrabajadorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

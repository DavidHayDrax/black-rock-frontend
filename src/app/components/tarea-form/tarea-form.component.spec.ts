import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaFormComponent } from './tarea-form.component';

describe('TareaFormComponent', () => {
  let component: TareaFormComponent;
  let fixture: ComponentFixture<TareaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TareaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

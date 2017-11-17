import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatEditableInputComponent } from './mat-editable-input.component';

describe('MatEditableInputComponent', () => {
  let component: MatEditableInputComponent;
  let fixture: ComponentFixture<MatEditableInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatEditableInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatEditableInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

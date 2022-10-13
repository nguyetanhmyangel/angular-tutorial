import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeIterableDiffComponent } from './employee-iterable-diff.component';

describe('EmployeeIterableDiffComponent', () => {
  let component: EmployeeIterableDiffComponent;
  let fixture: ComponentFixture<EmployeeIterableDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeIterableDiffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeIterableDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

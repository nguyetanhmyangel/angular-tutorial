import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeKeyvalueDiffComponent } from './employee-keyvalue-diff.component';

describe('EmployeeKeyvalueDiffComponent', () => {
  let component: EmployeeKeyvalueDiffComponent;
  let fixture: ComponentFixture<EmployeeKeyvalueDiffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeKeyvalueDiffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeKeyvalueDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

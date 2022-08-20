import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialEventFormComponent } from './financial-event-form.component';

describe('FinancialEventFormComponent', () => {
  let component: FinancialEventFormComponent;
  let fixture: ComponentFixture<FinancialEventFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialEventFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

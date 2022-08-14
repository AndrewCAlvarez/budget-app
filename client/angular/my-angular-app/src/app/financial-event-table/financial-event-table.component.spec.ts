import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialEventTableComponent } from './financial-event-table.component';

describe('FinancialEventTableComponent', () => {
  let component: FinancialEventTableComponent;
  let fixture: ComponentFixture<FinancialEventTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialEventTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialEventTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

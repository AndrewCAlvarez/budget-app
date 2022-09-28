import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialEventDetailsComponent } from './financial-event-details.component';

describe('FinancialEventDetailsComponent', () => {
  let component: FinancialEventDetailsComponent;
  let fixture: ComponentFixture<FinancialEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialEventDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

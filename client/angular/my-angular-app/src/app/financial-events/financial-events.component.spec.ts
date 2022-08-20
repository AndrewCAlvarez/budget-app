import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialEventsComponent } from './financial-events.component';

describe('FinancialEventsComponent', () => {
  let component: FinancialEventsComponent;
  let fixture: ComponentFixture<FinancialEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

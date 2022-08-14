import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinancialEventComponent } from './add-financial-event.component';

describe('AddFinancialEventComponent', () => {
  let component: AddFinancialEventComponent;
  let fixture: ComponentFixture<AddFinancialEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFinancialEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFinancialEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

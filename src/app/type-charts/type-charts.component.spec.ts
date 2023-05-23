import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeChartsComponent } from './type-charts.component';

describe('TypeChartsComponent', () => {
  let component: TypeChartsComponent;
  let fixture: ComponentFixture<TypeChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeChartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

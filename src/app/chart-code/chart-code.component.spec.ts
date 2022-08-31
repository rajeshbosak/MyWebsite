import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartCodeComponent } from './chart-code.component';

describe('ChartCodeComponent', () => {
  let component: ChartCodeComponent;
  let fixture: ComponentFixture<ChartCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

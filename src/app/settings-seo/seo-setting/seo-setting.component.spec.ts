import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoSettingComponent } from './seo-setting.component';

describe('SeoSettingComponent', () => {
  let component: SeoSettingComponent;
  let fixture: ComponentFixture<SeoSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

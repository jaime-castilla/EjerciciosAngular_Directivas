import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasNgSwitchEj1Component } from './directivas-ng-switch-ej1.component';

describe('DirectivasNgSwitchEj1Component', () => {
  let component: DirectivasNgSwitchEj1Component;
  let fixture: ComponentFixture<DirectivasNgSwitchEj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasNgSwitchEj1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasNgSwitchEj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

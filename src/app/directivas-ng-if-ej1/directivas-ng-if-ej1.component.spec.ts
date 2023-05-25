import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasNgIfEj1Component } from './directivas-ng-if-ej1.component';

describe('DirectivasNgIfEj1Component', () => {
  let component: DirectivasNgIfEj1Component;
  let fixture: ComponentFixture<DirectivasNgIfEj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasNgIfEj1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasNgIfEj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

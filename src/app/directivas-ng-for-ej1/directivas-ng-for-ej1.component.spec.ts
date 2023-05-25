import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasNgForEj1Component } from './directivas-ng-for-ej1.component';

describe('DirectivasNgForEj1Component', () => {
  let component: DirectivasNgForEj1Component;
  let fixture: ComponentFixture<DirectivasNgForEj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasNgForEj1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasNgForEj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

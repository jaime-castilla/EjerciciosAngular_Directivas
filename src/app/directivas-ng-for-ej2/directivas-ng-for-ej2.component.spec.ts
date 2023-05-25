import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasNgForEj2Component } from './directivas-ng-for-ej2.component';

describe('DirectivasNgForEj2Component', () => {
  let component: DirectivasNgForEj2Component;
  let fixture: ComponentFixture<DirectivasNgForEj2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasNgForEj2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasNgForEj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

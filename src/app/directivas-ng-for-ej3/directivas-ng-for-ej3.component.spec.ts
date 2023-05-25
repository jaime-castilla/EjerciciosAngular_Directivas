import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasNgForEj3Component } from './directivas-ng-for-ej3.component';

describe('DirectivasNgForEj3Component', () => {
  let component: DirectivasNgForEj3Component;
  let fixture: ComponentFixture<DirectivasNgForEj3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasNgForEj3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasNgForEj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

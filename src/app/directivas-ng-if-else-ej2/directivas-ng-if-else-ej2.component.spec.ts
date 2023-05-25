import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasNgIfElseEj2Component } from './directivas-ng-if-else-ej2.component';

describe('DirectivasNgIfElseEj2Component', () => {
  let component: DirectivasNgIfElseEj2Component;
  let fixture: ComponentFixture<DirectivasNgIfElseEj2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasNgIfElseEj2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasNgIfElseEj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivasNgIfElseEj3Component } from './directivas-ng-if-else-ej3.component';

describe('DirectivasNgIfElseEj3Component', () => {
  let component: DirectivasNgIfElseEj3Component;
  let fixture: ComponentFixture<DirectivasNgIfElseEj3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivasNgIfElseEj3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivasNgIfElseEj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

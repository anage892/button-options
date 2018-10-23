import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonOptionsComponent } from './button-options.component';

describe('ButtonOptionsComponent', () => {
  let component: ButtonOptionsComponent;
  let fixture: ComponentFixture<ButtonOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

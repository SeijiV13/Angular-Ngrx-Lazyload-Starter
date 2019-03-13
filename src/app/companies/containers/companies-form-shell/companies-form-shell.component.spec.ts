import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesFormShellComponent } from './companies-form-shell.component';

describe('CompaniesFormShellComponent', () => {
  let component: CompaniesFormShellComponent;
  let fixture: ComponentFixture<CompaniesFormShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesFormShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesFormShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

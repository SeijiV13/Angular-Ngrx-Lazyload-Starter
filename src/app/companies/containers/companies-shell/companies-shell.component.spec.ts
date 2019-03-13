import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesShellComponent } from './companies-shell.component';

describe('CompaniesShellComponent', () => {
  let component: CompaniesShellComponent;
  let fixture: ComponentFixture<CompaniesShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesShellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromCompany from '../../state';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/models/Company';
import * as companyActions from '../../state/company.actions';

@Component({
  selector: 'app-companies-form-shell',
  templateUrl: './companies-form-shell.component.html',
  styleUrls: ['./companies-form-shell.component.scss']
})
export class CompaniesFormShellComponent implements OnInit, OnDestroy {
  company$: Observable<Company>;
  constructor(private store: Store<fromCompany.State>) { }

  ngOnInit() {
    this.company$ = this.store.pipe(select(fromCompany.getSelectedCompany));
  }

  ngOnDestroy(){
    this.store.dispatch(new companyActions.ClearSelectedCompany());
  }

  submitForm(company: Company): void{
    if(company.id)
      this.store.dispatch(new companyActions.UpdateCompany(company, '/companies'));
    else
      this.store.dispatch(new companyActions.CreateCompany(company, '/companies'));
  }

}

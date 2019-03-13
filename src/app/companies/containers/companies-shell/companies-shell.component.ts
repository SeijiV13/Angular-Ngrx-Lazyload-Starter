import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Company } from 'src/app/shared/models/Company';
import * as fromCompany from './../../state'; 
import * as companyActions from '../../state/company.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies-shell',
  templateUrl: './companies-shell.component.html',
  styleUrls: ['./companies-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompaniesShellComponent implements OnInit {
  companies$: Observable<Company[]>;
  constructor(private store: Store<fromCompany.State>,
              private router: Router) { }

  ngOnInit(): void {
      this.store.dispatch(new companyActions.LoadCompany());
      this.companies$ = this.store.pipe(select(fromCompany.getCompanies));
  }

  createCompany(){
    this.router.navigate(['/companies/form']);
  }


  editCompany(company: Company){
     this.store.dispatch(new companyActions.SelectCompany(company, '/companies/form'))
  }

  deleteCompany(company: Company){
    this.store.dispatch(new companyActions.DeleteCompany(company.id));
  }

}

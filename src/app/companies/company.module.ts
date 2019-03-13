import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';


import { reducer } from './state/company.reducer';

import { CompanyEffects } from './state/company.effects';

import { CompaniesShellComponent } from './containers/companies-shell/companies-shell.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CompaniesFormComponent } from './components/companies-form/companies-form.component';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CompaniesFormShellComponent } from './containers/companies-form-shell/companies-form-shell.component';
const companyRoutes: Routes = [
  { path: '', component: CompaniesShellComponent },
  { path: 'form', component: CompaniesFormShellComponent}
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(companyRoutes),
    StoreModule.forFeature('companies', reducer),
    EffectsModule.forFeature( 
      [CompanyEffects]
    )
  ],
  declarations: [CompaniesShellComponent, CompaniesListComponent, CompaniesFormComponent, CompaniesFormShellComponent],
})
export class CompanyModule { }

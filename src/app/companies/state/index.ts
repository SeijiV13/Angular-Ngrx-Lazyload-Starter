
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app-state';
import * as fromCompanies from './company.reducer';

export interface State extends fromRoot.State {
    companies: fromCompanies.CompanyState
}

const getCompanyFeatureState = createFeatureSelector<fromCompanies.CompanyState>('companies');

export const getCompanies = createSelector(
    getCompanyFeatureState,
    state => state.companies
)

export const getError = createSelector(
    getCompanyFeatureState,
    state => state.error
)

export const getSelectedCompany = createSelector(
    getCompanyFeatureState,
    state => state.selectedCompany
)
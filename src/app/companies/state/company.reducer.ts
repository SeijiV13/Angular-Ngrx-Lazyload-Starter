import { Company } from 'src/app/shared/models/Company';
import { CompanyActions, CompanyActionTypes } from './company.actions';
import { CompanyEffects } from './company.effects';



export interface CompanyState {
    selectedCompany: Company | null,
    companies: Company[],
    error: string
}

const initialState: CompanyState = {
    selectedCompany: null,
    companies: [],
    error: ''
}

export function reducer(state = initialState, action: CompanyActions): CompanyState {
    switch(action.type){
      case CompanyActionTypes.SelectCompany:
      return {
          ...state,
          selectedCompany: action.payload
      }
      case CompanyActionTypes.LoadCompanySuccess:
      return {
          ...state,
          companies: action.payload,
          error: ''
      }
      case CompanyActionTypes.LoadCompanyFail:
      return {
          ...state,
          companies: [],
          error: action.payload
      }

      case CompanyActionTypes.UpdateCompanySuccess:
      return {
          ...state,
          selectedCompany: action.payload,
          error: ''
      }
      case CompanyActionTypes.LoadCompanyFail:
      return {
          ...state,
          error: action.payload
      }
      case CompanyActionTypes.ClearSelectedCompany:
      return {
          ...state,
          selectedCompany: null
      }
      default: 
      return state    
    }
}
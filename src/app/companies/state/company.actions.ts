import { Action } from '@ngrx/store';
import { Company } from 'src/app/shared/models/Company';

export enum CompanyActionTypes {
    SelectCompany = '[Company] Select Company',
    LoadCompany = '[Company] Load Company',
    LoadCompanySuccess = '[Company] Load Company Success',
    LoadCompanyFail = '[Company] Load Company Fail',
    UpdateCompany = '[Company] Update Company',
    UpdateCompanySuccess = '[Company] Update Company Success',
    UpdateCompanyFail = '[Company] Update Company Fail',
    DeleteCompany = '[Company] Delete Company',
    DeleteCompanySuccess = '[Company] Delete Company Success',
    DeleteCompanyFail = '[Company] Delete Company Fail',
    ClearSelectedCompany = '[Company] Clear Selected Company',
    CreateCompany = '[Company] Create Company',
    CreateCompanySuccess = '[Company] Create Company Success',
    CreateCompanyFail = '[Company] Create Company Fail'
};

// Action Creators
export class SelectCompany implements Action {
    readonly type = CompanyActionTypes.SelectCompany
    constructor(public payload: Company, public route: string){}
}

export class LoadCompany implements Action {
    readonly type = CompanyActionTypes.LoadCompany
}


export class LoadCompanySuccess implements Action {
    readonly type = CompanyActionTypes.LoadCompanySuccess;
    constructor(public payload: Company[]){}
}

export class LoadCompanyFail implements Action {
    readonly type = CompanyActionTypes.LoadCompanyFail;
    constructor(public payload: string){}
}

export class UpdateCompany implements Action {
    readonly type = CompanyActionTypes.UpdateCompany
    constructor(public payload: Company, public route: string){}
}

export class UpdateCompanySuccess implements Action {
    readonly type = CompanyActionTypes.UpdateCompanySuccess
    constructor(public payload: Company, public route: string){}
}

export class UpdateCompanyFail implements Action {
    readonly type = CompanyActionTypes.UpdateCompanyFail
    constructor(public payload: string){}
}

export class DeleteCompany implements Action {
    readonly type = CompanyActionTypes.DeleteCompany
    constructor(public payload: string){}
}

export class DeleteCompanySuccess implements Action{
    readonly type = CompanyActionTypes.DeleteCompanySuccess
}

export class DeleteCompanyFail implements Action{
    readonly type = CompanyActionTypes.DeleteCompanyFail
    constructor(public payload: string){}
}

export class ClearSelectedCompany implements Action{
    readonly type = CompanyActionTypes.ClearSelectedCompany
}

export class CreateCompany implements Action{
    readonly type = CompanyActionTypes.CreateCompany
    constructor(public payload: Company, public route: string){}
}

export class CreateCompanySuccess implements Action{
    readonly type = CompanyActionTypes.CreateCompanySuccess
    constructor(public payload: Company, public route: string){}
}

export class CreateCompanyFail implements Action{
    readonly type = CompanyActionTypes.CreateCompanyFail
    constructor(public payload: string){}
}
//UNION VALID TYPES
export type CompanyActions = 
LoadCompany |
LoadCompanyFail |
LoadCompanySuccess |
UpdateCompany |
UpdateCompanySuccess |
UpdateCompanyFail | 
SelectCompany | 
DeleteCompanySuccess | 
DeleteCompanyFail | 
ClearSelectedCompany |
CreateCompany | 
CreateCompanySuccess |
CreateCompanyFail
;
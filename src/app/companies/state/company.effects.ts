import { Effect, Actions, ofType } from "@ngrx/effects";
import { CompanyService } from '../company.service';
import * as companyActions from './company.actions';
import { mergeMap, catchError, map, tap, merge } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/shared/models/Company';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';


@Injectable()
export class CompanyEffects {
    constructor(private companyService: CompanyService, 
                private actions$: Actions,
                private router: Router){}
    
    
    @Effect()
    loadCompanies$ = this.actions$.pipe(
        ofType(companyActions.CompanyActionTypes.LoadCompany),
        mergeMap(() => 
         this.companyService.loadCompanies().pipe(
             map(companies => (new companyActions.LoadCompanySuccess(companies))),
             catchError(err => of(new companyActions.LoadCompanyFail(err)))
           )   
        
         )
    )

    @Effect()
    updateCompany$: Observable<Action> = this.actions$.pipe(
        ofType(companyActions.CompanyActionTypes.UpdateCompany),
        map((action: companyActions.UpdateCompany) => action),
        mergeMap((action: any) => 
            this.companyService.updateCompany(action.payload).pipe(
                map(updatedCompany => (new companyActions.UpdateCompanySuccess(updatedCompany, action.route))),
                catchError(err => of(new companyActions.UpdateCompanyFail(err)))
            )
        )
    )

    @Effect()
    deleteCompany$: Observable<Action> = this.actions$.pipe(
        ofType(companyActions.CompanyActionTypes.DeleteCompany),
        map((action: companyActions.DeleteCompany) => action.payload),
        mergeMap((id: string) => 
           this.companyService.deleteCompany(id).pipe(
               map(deletedCompany => (
               new companyActions.LoadCompany() 
              ))
           )
        ),
        catchError(err => of(new companyActions.DeleteCompanyFail(err)))
    )


    @Effect()
    createCompany$: Observable<Action> = this.actions$.pipe(
        ofType(companyActions.CompanyActionTypes.CreateCompany),
        map((action: companyActions.CreateCompany) => action),
        mergeMap((action: any) => 
            this.companyService.createCompany(action.payload).pipe(
                map(updatedCompany => (new companyActions.CreateCompanySuccess(updatedCompany, action.route))),
                catchError(err => of(new companyActions.CreateCompanyFail(err)))
            )
        )
    );

    //FOR RE NAVIGATION
    @Effect({ dispatch: false })
    selectCompanySuccess$ = this.actions$.pipe(
      ofType(companyActions.CompanyActionTypes.SelectCompany),
      map((action: companyActions.SelectCompany) => action.route),
      tap((route: string) => this.router.navigate([route]))
    
    );

    @Effect({ dispatch: false })
    updateCompanySuccess$ = this.actions$.pipe(
      ofType(companyActions.CompanyActionTypes.UpdateCompanySuccess),
      map((action: companyActions.UpdateCompanySuccess) => action.route),
      tap((route: string) => this.router.navigate([route]))
    
    );

    @Effect({ dispatch: false })
    createCompanySuccess$ = this.actions$.pipe(
      ofType(companyActions.CompanyActionTypes.CreateCompanySuccess),
      map((action: companyActions.CreateCompanySuccess) => action.route),
      tap((route: string) => this.router.navigate([route]))
    
    );
}
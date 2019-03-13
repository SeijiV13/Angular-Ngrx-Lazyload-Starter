import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Company } from 'src/app/shared/models/Company';

@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: ['./companies-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompaniesFormComponent implements OnInit {
  form: FormGroup;
  formTitle: string = 'Create Company';
  @Input() company: Company;
  @Output() submitFormEmitter = new EventEmitter();
  industries = [
    {value: 'it', description: 'Information Technology'},
    {value: 'law', description: 'Law Firm'}
  ]
  constructor(private formBuilder: FormBuilder,
             ) { }

  ngOnInit() {
    this.initializeForm();
    if(this.company){
      this.formTitle = 'Edit Company';
      this.form.patchValue(this.company);
    }
  }

  initializeForm(){
    this.form = this.formBuilder.group({
      id: [''],
      name: [''],
      address: [''],
      industry: [''],
      numOfEmp: ['']
    })
  }

  clearForm(){
    this.form.reset();
  }

  submitForm(){
    this.submitFormEmitter.emit(this.form.getRawValue());
  }

}

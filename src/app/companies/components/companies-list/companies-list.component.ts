import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import { Company } from 'src/app/shared/models/Company';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.scss'],

})
export class CompaniesListComponent implements OnInit{
  @Input() companies: Company[];
  @Output() deleteEmitter = new EventEmitter();
  @Output() editEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  editCompany(company: Company): void{
    this.editEmitter.emit(company);
  }

  deleteCompany(company: Company): void{
    this.deleteEmitter.emit(company);
  }

}

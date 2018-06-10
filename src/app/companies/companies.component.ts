import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';
import { Company } from './company';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  providers: [CompanyService]
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
    
  constructor(private companyService: CompanyService) { 
    this.companies = companyService.getCompany();
  }

  ngOnInit() {
  }

}

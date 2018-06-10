import { Company } from '../model/company'
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CompanyService {
    private companies: Company[];

    constructor() {
        this.companies = [
            { id: 1, name: 'BMW', symbol: 'BMW', price: 84.99, 
                country :{id: 2, name: 'Germany'} },
            { id: 2, name: 'Micron', symbol: 'MU', price: 62.10,
                country : {id: 3, name: 'USA'} },
            { id: 3, name: 'THY', symbol: 'THYAO', price: 13.10,
                country : {id: 1, name: 'Turkey'} }
        ];
    }

    getCompany() : Company[] {
        return this.companies;
    }

}